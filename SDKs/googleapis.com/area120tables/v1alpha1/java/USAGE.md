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

            Area120tablesTablesListRequest req = new Area120tablesTablesListRequest() {{
                security = new Area120tablesTablesListSecurity() {{
                    option1 = new Area120tablesTablesListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new Area120tablesTablesListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "consequatur";
                    alt = "media";
                    callback = "ad";
                    fields = "nemo";
                    key = "quia";
                    oauthToken = "neque";
                    orderBy = "totam";
                    pageSize = 4623909288376591054;
                    pageToken = "labore";
                    prettyPrint = false;
                    quotaUser = "unde";
                    uploadType = "cupiditate";
                    uploadProtocol = "odio";
                }};
            }};

            Area120tablesTablesListResponse res = sdk.tables.area120tablesTablesList(req);

            if (res.listTablesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->