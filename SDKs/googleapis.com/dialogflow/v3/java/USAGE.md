<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption2;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentsChangelogsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentsChangelogsListRequest req = new DialogflowProjectsLocationsAgentsChangelogsListRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                filter = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                pageSize = 423655;
                pageToken = "error";
                parent = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }}            

            DialogflowProjectsLocationsAgentsChangelogsListResponse res = sdk.projects.dialogflowProjectsLocationsAgentsChangelogsList(req, new DialogflowProjectsLocationsAgentsChangelogsListSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowCxV3ListChangelogsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->