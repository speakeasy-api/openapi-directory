<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateConfigurationAddressSecurity;
import org.openapis.openapi.models.operations.CreateConfigurationAddressCreateConfigurationAddressRequest;
import org.openapis.openapi.models.operations.CreateConfigurationAddressRequest;
import org.openapis.openapi.models.operations.CreateConfigurationAddressResponse;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumTypeEnum;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumMethodEnum;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConfigurationAddressRequest req = new CreateConfigurationAddressRequest() {{
                security = new CreateConfigurationAddressSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateConfigurationAddressCreateConfigurationAddressRequest() {{
                    address = "5786 Little Streets";
                    autoCreationConversationServiceSid = "vel";
                    autoCreationEnabled = false;
                    autoCreationStudioFlowSid = "error";
                    autoCreationStudioRetryCount = 645894;
                    autoCreationType = "studio";
                    autoCreationWebhookFilters = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                    autoCreationWebhookMethod = "GET";
                    autoCreationWebhookUrl = "delectus";
                    friendlyName = "tempora";
                    type = "whatsapp";
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