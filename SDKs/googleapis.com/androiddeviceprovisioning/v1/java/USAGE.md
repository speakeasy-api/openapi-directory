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
                    parent = "molestias";
                }};
                queryParams = new AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "cumque";
                    alt = "media";
                    callback = "deserunt";
                    fields = "voluptatem";
                    key = "provident";
                    oauthToken = "aut";
                    prettyPrint = true;
                    quotaUser = "placeat";
                    uploadType = "reprehenderit";
                    uploadProtocol = "aut";
                }};
                request = new ConfigurationInput() {{
                    companyName = "possimus";
                    configurationName = "voluptatibus";
                    contactEmail = "magni";
                    contactPhone = "reiciendis";
                    customMessage = "amet";
                    dpcExtras = "laboriosam";
                    dpcResourcePath = "ut";
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