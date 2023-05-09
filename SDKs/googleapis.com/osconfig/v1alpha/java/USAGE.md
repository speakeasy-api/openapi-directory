<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse;
import org.openapis.openapi.models.operations.OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest req = new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListRequest("corrupti") {{
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

            OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListResponse res = sdk.projects.osconfigProjectsLocationsInstanceOSPoliciesCompliancesList(req, new OsconfigProjectsLocationsInstanceOSPoliciesCompliancesListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstanceOSPoliciesCompliancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->