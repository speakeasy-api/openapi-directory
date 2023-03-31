<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreateRequest;
import org.openapis.openapi.models.operations.AndroiddeviceprovisioningCustomersConfigurationsCreateResponse;
import org.openapis.openapi.models.shared.ConfigurationInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroiddeviceprovisioningCustomersConfigurationsCreateRequest req = new AndroiddeviceprovisioningCustomersConfigurationsCreateRequest() {{
                pathParams = new AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new ConfigurationInput() {{
                    companyName = "suscipit";
                    configurationName = "iure";
                    contactEmail = "magnam";
                    contactPhone = "debitis";
                    customMessage = "ipsa";
                    dpcExtras = "delectus";
                    dpcResourcePath = "tempora";
                    isDefault = false;
                }};
            }};            

            AndroiddeviceprovisioningCustomersConfigurationsCreateResponse res = sdk.customers.androiddeviceprovisioningCustomersConfigurationsCreate(req);

            if (res.configuration.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->