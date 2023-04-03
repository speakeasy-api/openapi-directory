<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsFetchProcessorTypesRequest req = new DocumentaiProjectsLocationsFetchProcessorTypesRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                parent = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            DocumentaiProjectsLocationsFetchProcessorTypesResponse res = sdk.projects.documentaiProjectsLocationsFetchProcessorTypes(req, new DocumentaiProjectsLocationsFetchProcessorTypesSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDocumentaiV1beta3FetchProcessorTypesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->