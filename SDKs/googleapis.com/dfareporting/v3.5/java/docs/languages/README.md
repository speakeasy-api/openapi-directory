# languages

### Available Operations

* [dfareportingLanguagesList](#dfareportinglanguageslist) - Retrieves a list of languages.

## dfareportingLanguagesList

Retrieves a list of languages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingLanguagesListRequest;
import org.openapis.openapi.models.operations.DfareportingLanguagesListResponse;
import org.openapis.openapi.models.operations.DfareportingLanguagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingLanguagesListRequest req = new DfareportingLanguagesListRequest("minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "rerum";
                key = "cumque";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "quo";
                uploadProtocol = "possimus";
            }};            

            DfareportingLanguagesListResponse res = sdk.languages.dfareportingLanguagesList(req, new DfareportingLanguagesListSecurity("consectetur", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.languagesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
