<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeSecurity;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputePathParams;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeQueryParams;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsComputeRequest req = new EssentialcontactsProjectsContactsComputeRequest() {{
                security = new EssentialcontactsProjectsContactsComputeSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new EssentialcontactsProjectsContactsComputePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new EssentialcontactsProjectsContactsComputeQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    notificationCategories = new org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[]{{
                        add("SECURITY"),
                        add("BILLING"),
                        add("BILLING"),
                        add("SECURITY"),
                    }};
                    oauthToken = "iure";
                    pageSize = 297534;
                    pageToken = "debitis";
                    prettyPrint = false;
                    quotaUser = "ipsa";
                    uploadType = "delectus";
                    uploadProtocol = "tempora";
                }};
            }};            

            EssentialcontactsProjectsContactsComputeResponse res = sdk.projects.essentialcontactsProjectsContactsCompute(req);

            if (res.googleCloudEssentialcontactsV1ComputeContactsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->