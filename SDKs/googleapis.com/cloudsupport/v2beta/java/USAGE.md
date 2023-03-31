<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchSecurity;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchQueryParams;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchRequest;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    pageSize = 847252;
                    pageToken = "vel";
                    prettyPrint = false;
                    query = "error";
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
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