<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigurationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersConfigurationsCreateRequest req = new AndroiddeviceprovisioningCustomersConfigurationsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                configurationInput = new ConfigurationInput() {{
                    companyName = "distinctio";
                    configurationName = "quibusdam";
                    contactEmail = "unde";
                    contactPhone = "nulla";
                    customMessage = "corrupti";
                    dpcExtras = "illum";
                    dpcResourcePath = "vel";
                    isDefault = false;
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            AndroiddeviceprovisioningCustomersConfigurationsCreateResponse res = sdk.customers.androiddeviceprovisioningCustomersConfigurationsCreate(req);

            if (res.configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->