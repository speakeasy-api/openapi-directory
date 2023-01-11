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
                    parent = "sit";
                }};
                queryParams = new TpuProjectsLocationsAcceleratorTypesListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    filter = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    orderBy = "et";
                    pageSize = 2661732831099943416;
                    pageToken = "rerum";
                    prettyPrint = false;
                    quotaUser = "debitis";
                    uploadType = "voluptatum";
                    uploadProtocol = "et";
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