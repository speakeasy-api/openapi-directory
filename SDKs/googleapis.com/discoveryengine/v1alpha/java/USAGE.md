<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1alphaDocument;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDiscoveryengineV1alphaDocument = new GoogleCloudDiscoveryengineV1alphaDocument() {{
                    id = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                    jsonData = "ipsam";
                    name = "Timmy Satterfield";
                    parentDocumentId = "at";
                    schemaId = "maiores";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("quod", "quod");
                        put("esse", "totam");
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                documentId = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity("totam", "beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1alphaDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->