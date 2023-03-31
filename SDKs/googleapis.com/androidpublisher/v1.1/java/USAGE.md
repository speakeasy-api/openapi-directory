<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetPathParams;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetQueryParams;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInapppurchasesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInapppurchasesGetRequest req = new AndroidpublisherInapppurchasesGetRequest() {{
                security = new AndroidpublisherInapppurchasesGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AndroidpublisherInapppurchasesGetPathParams() {{
                    packageName = "corrupti";
                    productId = "provident";
                    token = "distinctio";
                }};
                queryParams = new AndroidpublisherInapppurchasesGetQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "illum";
                }};
            }};            

            AndroidpublisherInapppurchasesGetResponse res = sdk.inapppurchases.androidpublisherInapppurchasesGet(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->