<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateConfigurationAddressRequest req = new CreateConfigurationAddressRequest() {{
                security = new CreateConfigurationAddressSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateConfigurationAddressCreateConfigurationAddressRequest() {{
                    address = "sit";
                    autoCreationConversationServiceSid = "voluptas";
                    autoCreationEnabled = true;
                    autoCreationStudioFlowSid = "expedita";
                    autoCreationStudioRetryCount = 3390393562759376202;
                    autoCreationType = "studio";
                    autoCreationWebhookFilters = new String[]() {{
                        add("voluptas"),
                        add("fugit"),
                    }};
                    autoCreationWebhookMethod = "GET";
                    autoCreationWebhookUrl = "nihil";
                    friendlyName = "rerum";
                    type = "gbm";
                }};
            }};

            CreateConfigurationAddressResponse res = sdk.createConfigurationAddress(req);

            if (res.conversationsV1ConfigurationAddress.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->