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

            CloudsupportCaseClassificationsSearchRequest req = new CloudsupportCaseClassificationsSearchRequest() {{
                security = new CloudsupportCaseClassificationsSearchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new CloudsupportCaseClassificationsSearchQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "et";
                    alt = "json";
                    callback = "dolores";
                    fields = "voluptas";
                    key = "ipsam";
                    oauthToken = "ipsam";
                    pageSize = 8654948856110994653;
                    pageToken = "corrupti";
                    prettyPrint = true;
                    query = "eligendi";
                    quotaUser = "consequatur";
                    uploadType = "quaerat";
                    uploadProtocol = "et";
                }};
            }};

            CloudsupportCaseClassificationsSearchResponse res = sdk.caseClassifications.cloudsupportCaseClassificationsSearch(req);

            if (res.searchCaseClassificationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->