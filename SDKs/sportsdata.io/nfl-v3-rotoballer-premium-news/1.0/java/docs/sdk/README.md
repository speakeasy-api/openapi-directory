# SDK

### Available Operations

* [premiumNews](#premiumnews) - Premium News
* [premiumNewsByDate](#premiumnewsbydate) - Premium News by Date
* [premiumNewsByPlayer](#premiumnewsbyplayer) - Premium News by Player
* [premiumNewsByTeam](#premiumnewsbyteam) - Premium News by Team

## premiumNews

Premium News

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PremiumNewsFormatEnum;
import org.openapis.openapi.models.operations.PremiumNewsRequest;
import org.openapis.openapi.models.operations.PremiumNewsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PremiumNewsRequest req = new PremiumNewsRequest(PremiumNewsFormatEnum.JSON);            

            PremiumNewsResponse res = sdk.sdk.premiumNews(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## premiumNewsByDate

Premium News by Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PremiumNewsByDateFormatEnum;
import org.openapis.openapi.models.operations.PremiumNewsByDateRequest;
import org.openapis.openapi.models.operations.PremiumNewsByDateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PremiumNewsByDateRequest req = new PremiumNewsByDateRequest("distinctio", PremiumNewsByDateFormatEnum.JSON);            

            PremiumNewsByDateResponse res = sdk.sdk.premiumNewsByDate(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## premiumNewsByPlayer

Premium News by Player

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PremiumNewsByPlayerFormatEnum;
import org.openapis.openapi.models.operations.PremiumNewsByPlayerRequest;
import org.openapis.openapi.models.operations.PremiumNewsByPlayerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PremiumNewsByPlayerRequest req = new PremiumNewsByPlayerRequest(PremiumNewsByPlayerFormatEnum.JSON, "nulla");            

            PremiumNewsByPlayerResponse res = sdk.sdk.premiumNewsByPlayer(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## premiumNewsByTeam

Premium News by Team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PremiumNewsByTeamFormatEnum;
import org.openapis.openapi.models.operations.PremiumNewsByTeamRequest;
import org.openapis.openapi.models.operations.PremiumNewsByTeamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            PremiumNewsByTeamRequest req = new PremiumNewsByTeamRequest(PremiumNewsByTeamFormatEnum.JSON, "illum");            

            PremiumNewsByTeamResponse res = sdk.sdk.premiumNewsByTeam(req);

            if (res.news != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
