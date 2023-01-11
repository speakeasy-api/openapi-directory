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
                    parent = "unde";
                }};
                queryParams = new EssentialcontactsProjectsContactsComputeQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "officia";
                    alt = "media";
                    callback = "deleniti";
                    fields = "atque";
                    key = "ducimus";
                    notificationCategories = new openapisdk.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[]() {{
                        add("TECHNICAL_INCIDENTS"),
                        add("LEGAL"),
                    }};
                    oauthToken = "molestiae";
                    pageSize = 2641840756660425079;
                    pageToken = "voluptatum";
                    prettyPrint = true;
                    quotaUser = "voluptas";
                    uploadType = "animi";
                    uploadProtocol = "dolores";
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