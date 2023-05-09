<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListSecurity;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstancesInventoriesListRequest req = new OsconfigProjectsLocationsInstancesInventoriesListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
                view = OsconfigProjectsLocationsInstancesInventoriesListViewEnum.FULL;
            }};            

            OsconfigProjectsLocationsInstancesInventoriesListResponse res = sdk.projects.osconfigProjectsLocationsInstancesInventoriesList(req, new OsconfigProjectsLocationsInstancesInventoriesListSecurity("ipsa", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInventoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->