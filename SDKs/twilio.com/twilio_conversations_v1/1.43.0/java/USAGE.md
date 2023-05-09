<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigurationAddressCreateConfigurationAddressRequest;
import org.openapis.openapi.models.operations.CreateConfigurationAddressResponse;
import org.openapis.openapi.models.operations.CreateConfigurationAddressSecurity;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumMethodEnum;
import org.openapis.openapi.models.shared.ConfigurationAddressEnumTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConfigurationAddressCreateConfigurationAddressRequest req = new CreateConfigurationAddressCreateConfigurationAddressRequest("corrupti", ConfigurationAddressEnumTypeEnum.MESSENGER) {{
                autoCreationConversationServiceSid = "distinctio";
                autoCreationEnabled = false;
                autoCreationStudioFlowSid = "quibusdam";
                autoCreationStudioRetryCount = 602763L;
                autoCreationType = ConfigurationAddressEnumAutoCreationTypeEnum.DEFAULT_;
                autoCreationWebhookFilters = new String[]{{
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                autoCreationWebhookMethod = ConfigurationAddressEnumMethodEnum.POST;
                autoCreationWebhookUrl = "suscipit";
                friendlyName = "iure";
            }};            

            CreateConfigurationAddressResponse res = sdk.createConfigurationAddress(req, new CreateConfigurationAddressSecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conversationsV1ConfigurationAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->