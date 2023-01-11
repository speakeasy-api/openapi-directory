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

            DriveactivityActivityQueryRequest req = new DriveactivityActivityQueryRequest() {{
                security = new DriveactivityActivityQuerySecurity() {{
                    option1 = new DriveactivityActivityQuerySecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new DriveactivityActivityQueryQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "sed";
                    alt = "media";
                    callback = "veniam";
                    fields = "qui";
                    key = "facere";
                    oauthToken = "doloremque";
                    prettyPrint = false;
                    quotaUser = "distinctio";
                    uploadType = "eos";
                    uploadProtocol = "officia";
                }};
                request = new QueryDriveActivityRequest() {{
                    ancestorName = "consectetur";
                    consolidationStrategy = new ConsolidationStrategy() {{
                        legacy = new java.util.HashMap<String, Object>() {{
                            put("voluptatem", "corporis");
                            put("nihil", "est");
                            put("at", "ut");
                        }};
                        none = new java.util.HashMap<String, Object>() {{
                            put("sit", "ut");
                            put("impedit", "ea");
                        }};
                    }};
                    filter = "officiis";
                    itemName = "exercitationem";
                    pageSize = 4582410470001921774;
                    pageToken = "molestias";
                }};
            }};

            DriveactivityActivityQueryResponse res = sdk.activity.driveactivityActivityQuery(req);

            if (res.queryDriveActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->