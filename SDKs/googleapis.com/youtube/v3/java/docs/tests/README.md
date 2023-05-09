# tests

### Available Operations

* [youtubeTestsInsert](#youtubetestsinsert) - POST method.

## youtubeTestsInsert

POST method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeTestsInsertRequest;
import org.openapis.openapi.models.operations.YoutubeTestsInsertResponse;
import org.openapis.openapi.models.operations.YoutubeTestsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestItem;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeTestsInsertRequest req = new YoutubeTestsInsertRequest(                new String[]{{
                                add("maiores"),
                                add("odio"),
                                add("provident"),
                                add("sapiente"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                testItem = new TestItem() {{
                    featuredPart = false;
                    gaia = "similique";
                    id = "396d90c3-64b7-4c15-9fba-ce188b1c4ee2";
                    snippet = new java.util.HashMap<String, Object>() {{
                        put("quas", "impedit");
                        put("vel", "eligendi");
                        put("recusandae", "ex");
                        put("beatae", "veritatis");
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "vero";
                externalChannelId = "quidem";
                fields = "illo";
                key = "quo";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "distinctio";
                uploadProtocol = "possimus";
            }};            

            YoutubeTestsInsertResponse res = sdk.tests.youtubeTestsInsert(req, new YoutubeTestsInsertSecurity("cum", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
