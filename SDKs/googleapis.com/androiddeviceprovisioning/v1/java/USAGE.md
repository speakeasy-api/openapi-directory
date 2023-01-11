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

            AndroiddeviceprovisioningCustomersConfigurationsCreateRequest req = new AndroiddeviceprovisioningCustomersConfigurationsCreateRequest() {{
                pathParams = new AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new ConfigurationInput() {{
                    companyName = "dicta";
                    configurationName = "debitis";
                    contactEmail = "voluptatum";
                    contactPhone = "et";
                    customMessage = "ut";
                    dpcExtras = "dolorem";
                    dpcResourcePath = "et";
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