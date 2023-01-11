<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new EssentialcontactsProjectsContactsComputeQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    notificationCategories = new openapisdk.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[]() {{
                        add("NOTIFICATION_CATEGORY_UNSPECIFIED"),
                        add("SECURITY"),
                        add("LEGAL"),
                    }};
                    oauthToken = "rerum";
                    pageSize = 7837839688282259259;
                    pageToken = "debitis";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "ut";
                    uploadProtocol = "dolorem";
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