# SDK

### Available Operations

* [rotoballerArticles](#rotoballerarticles) - RotoBaller Articles
* [rotoballerArticlesByDate](#rotoballerarticlesbydate) - RotoBaller Articles By Date
* [rotoballerArticlesByPlayer](#rotoballerarticlesbyplayer) - RotoBaller Articles By Player

## rotoballerArticles

RotoBaller Articles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotoballerArticlesFormatEnum;
import org.openapis.openapi.models.operations.RotoballerArticlesRequest;
import org.openapis.openapi.models.operations.RotoballerArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RotoballerArticlesRequest req = new RotoballerArticlesRequest(RotoballerArticlesFormatEnum.JSON);            

            RotoballerArticlesResponse res = sdk.sdk.rotoballerArticles(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rotoballerArticlesByDate

RotoBaller Articles By Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotoballerArticlesByDateFormatEnum;
import org.openapis.openapi.models.operations.RotoballerArticlesByDateRequest;
import org.openapis.openapi.models.operations.RotoballerArticlesByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RotoballerArticlesByDateRequest req = new RotoballerArticlesByDateRequest("distinctio", RotoballerArticlesByDateFormatEnum.JSON);            

            RotoballerArticlesByDateResponse res = sdk.sdk.rotoballerArticlesByDate(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rotoballerArticlesByPlayer

RotoBaller Articles By Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotoballerArticlesByPlayerFormatEnum;
import org.openapis.openapi.models.operations.RotoballerArticlesByPlayerRequest;
import org.openapis.openapi.models.operations.RotoballerArticlesByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RotoballerArticlesByPlayerRequest req = new RotoballerArticlesByPlayerRequest(RotoballerArticlesByPlayerFormatEnum.JSON, "nulla");            

            RotoballerArticlesByPlayerResponse res = sdk.sdk.rotoballerArticlesByPlayer(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
