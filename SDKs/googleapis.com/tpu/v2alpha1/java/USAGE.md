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

            TpuProjectsLocationsAcceleratorTypesListRequest req = new TpuProjectsLocationsAcceleratorTypesListRequest() {{
                security = new TpuProjectsLocationsAcceleratorTypesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TpuProjectsLocationsAcceleratorTypesListPathParams() {{
                    parent = "doloremque";
                }};
                queryParams = new TpuProjectsLocationsAcceleratorTypesListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "et";
                    alt = "json";
                    callback = "vel";
                    fields = "et";
                    filter = "voluptas";
                    key = "accusantium";
                    oauthToken = "id";
                    orderBy = "distinctio";
                    pageSize = 1524269922956525695;
                    pageToken = "tempora";
                    prettyPrint = false;
                    quotaUser = "quisquam";
                    uploadType = "ratione";
                    uploadProtocol = "consequuntur";
                }};
            }};

            TpuProjectsLocationsAcceleratorTypesListResponse res = sdk.projects.tpuProjectsLocationsAcceleratorTypesList(req);

            if (res.listAcceleratorTypesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->