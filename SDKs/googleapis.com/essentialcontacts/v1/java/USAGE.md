<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsComputeRequest req = new EssentialcontactsProjectsContactsComputeRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                notificationCategories = new org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[]{{
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.SECURITY),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.BILLING),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.BILLING),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.SECURITY),
                }};
                oauthToken = "iure";
                pageSize = 297534L;
                pageToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            EssentialcontactsProjectsContactsComputeResponse res = sdk.projects.essentialcontactsProjectsContactsCompute(req, new EssentialcontactsProjectsContactsComputeSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudEssentialcontactsV1ComputeContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->