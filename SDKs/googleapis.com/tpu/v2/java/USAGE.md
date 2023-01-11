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
                    parent = "esse";
                }};
                queryParams = new TpuProjectsLocationsAcceleratorTypesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "esse";
                    alt = "proto";
                    callback = "et";
                    fields = "voluptas";
                    filter = "in";
                    key = "dolor";
                    oauthToken = "voluptatem";
                    orderBy = "ut";
                    pageSize = 9185552122349024597;
                    pageToken = "et";
                    prettyPrint = false;
                    quotaUser = "ex";
                    uploadType = "praesentium";
                    uploadProtocol = "perspiciatis";
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