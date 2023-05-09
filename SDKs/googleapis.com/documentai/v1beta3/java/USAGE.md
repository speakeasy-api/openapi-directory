<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsFetchProcessorTypesRequest req = new DocumentaiProjectsLocationsFetchProcessorTypesRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            DocumentaiProjectsLocationsFetchProcessorTypesResponse res = sdk.projects.documentaiProjectsLocationsFetchProcessorTypes(req, new DocumentaiProjectsLocationsFetchProcessorTypesSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDocumentaiV1beta3FetchProcessorTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->