<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesPathParams;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesQueryParams;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsFetchProcessorTypesRequest req = new DocumentaiProjectsLocationsFetchProcessorTypesRequest() {{
                security = new DocumentaiProjectsLocationsFetchProcessorTypesSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DocumentaiProjectsLocationsFetchProcessorTypesPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DocumentaiProjectsLocationsFetchProcessorTypesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            DocumentaiProjectsLocationsFetchProcessorTypesResponse res = sdk.projects.documentaiProjectsLocationsFetchProcessorTypes(req);

            if (res.googleCloudDocumentaiV1FetchProcessorTypesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->