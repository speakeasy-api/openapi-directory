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

            DfareportingLanguagesListRequest req = new DfareportingLanguagesListRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "rem";
                key = "earum";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "iste";
                uploadProtocol = "magni";
            }};            

            DfareportingLanguagesListResponse res = sdk.languages.dfareportingLanguagesList(req, new DfareportingLanguagesListSecurity("inventore", "eligendi") {{
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
