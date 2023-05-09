<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateRequest;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateResponse;
import org.openapis.openapi.models.operations.ApigeeregistryProjectsLocationsApisCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigeeregistryProjectsLocationsApisCreateRequest req = new ApigeeregistryProjectsLocationsApisCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                apiInput = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    availability = "error";
                    description = "deserunt";
                    displayName = "suscipit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    name = "Laurie Kreiger";
                    recommendedDeployment = "voluptatum";
                    recommendedVersion = "iusto";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                apiId = "recusandae";
                callback = "temporibus";
                fields = "ab";
                key = "quis";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "perferendis";
                uploadProtocol = "ipsam";
            }};            

            ApigeeregistryProjectsLocationsApisCreateResponse res = sdk.projects.apigeeregistryProjectsLocationsApisCreate(req, new ApigeeregistryProjectsLocationsApisCreateSecurity("repellendus", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->