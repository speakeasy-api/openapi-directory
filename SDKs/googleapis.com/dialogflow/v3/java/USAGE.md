<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption2;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListPathParams;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListQueryParams;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentsChangelogsListRequest req = new DialogflowProjectsLocationsAgentsChangelogsListRequest() {{
                security = new DialogflowProjectsLocationsAgentsChangelogsListSecurity() {{
                    option1 = new DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DialogflowProjectsLocationsAgentsChangelogsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DialogflowProjectsLocationsAgentsChangelogsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            DialogflowProjectsLocationsAgentsChangelogsListResponse res = sdk.projects.dialogflowProjectsLocationsAgentsChangelogsList(req);

            if (res.googleCloudDialogflowCxV3ListChangelogsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->