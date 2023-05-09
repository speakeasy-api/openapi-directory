# testEnvironmentCatalog

### Available Operations

* [testingTestEnvironmentCatalogGet](#testingtestenvironmentcatalogget) - Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

## testingTestEnvironmentCatalogGet

Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestingTestEnvironmentCatalogGetEnvironmentTypeEnum;
import org.openapis.openapi.models.operations.TestingTestEnvironmentCatalogGetRequest;
import org.openapis.openapi.models.operations.TestingTestEnvironmentCatalogGetResponse;
import org.openapis.openapi.models.operations.TestingTestEnvironmentCatalogGetSecurity;
import org.openapis.openapi.models.operations.TestingTestEnvironmentCatalogGetSecurityOption1;
import org.openapis.openapi.models.operations.TestingTestEnvironmentCatalogGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestingTestEnvironmentCatalogGetRequest req = new TestingTestEnvironmentCatalogGetRequest(TestingTestEnvironmentCatalogGetEnvironmentTypeEnum.IOS) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "accusantium";
                key = "porro";
                oauthToken = "eum";
                prettyPrint = false;
                projectId = "quas";
                quotaUser = "praesentium";
                uploadType = "consequuntur";
                uploadProtocol = "deleniti";
            }};            

            TestingTestEnvironmentCatalogGetResponse res = sdk.testEnvironmentCatalog.testingTestEnvironmentCatalogGet(req, new TestingTestEnvironmentCatalogGetSecurity() {{
                option1 = new TestingTestEnvironmentCatalogGetSecurityOption1("fugit", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testEnvironmentCatalog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
