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
                    address = "ex";
                    autoCreationConversationServiceSid = "iure";
                    autoCreationEnabled = false;
                    autoCreationStudioFlowSid = "quos";
                    autoCreationStudioRetryCount = 6531361177861028646;
                    autoCreationType = "default";
                    autoCreationWebhookFilters = new String[]() {{
                        add("veniam"),
                        add("qui"),
                    }};
                    autoCreationWebhookMethod = "POST";
                    autoCreationWebhookUrl = "odit";
                    friendlyName = "molestias";
                    type = "sms";
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