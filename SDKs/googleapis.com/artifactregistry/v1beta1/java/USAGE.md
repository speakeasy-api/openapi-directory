<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.ArtifactregistryProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ArtifactregistryProjectsLocationsListRequest req = new ArtifactregistryProjectsLocationsListRequest("corrupti") {{
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
            }};            

            ArtifactregistryProjectsLocationsListResponse res = sdk.projects.artifactregistryProjectsLocationsList(req, new ArtifactregistryProjectsLocationsListSecurity() {{
                option1 = new ArtifactregistryProjectsLocationsListSecurityOption1("debitis", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->