# globalWineScore

### Available Operations

* [getGlobalwinescoresLatest](#getglobalwinescoreslatest) - List all latest GWS
* [listHistoricalGWS](#listhistoricalgws) - List all historical GWS

## getGlobalwinescoresLatest

Returns the latest GWS available per wine/vintage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestColorEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestOrderingEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestRequest;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    tokenAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGlobalwinescoresLatestRequest req = new GetGlobalwinescoresLatestRequest() {{
                authorization = "debitis";
                color = GetGlobalwinescoresLatestColorEnum.RED;
                isPrimeurs = false;
                limit = 963663L;
                lwin = "tempora";
                lwin11 = "suscipit";
                offset = 477665L;
                ordering = GetGlobalwinescoresLatestOrderingEnum.MINUS_SCORE;
                vintage = "placeat";
                wineId = new Long[]{{
                    add(479977L),
                    add(568045L),
                    add(392785L),
                }};
            }};            

            GetGlobalwinescoresLatestResponse res = sdk.globalWineScore.getGlobalwinescoresLatest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHistoricalGWS

Returns all available GWS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHistoricalGWSColorEnum;
import org.openapis.openapi.models.operations.ListHistoricalGWSOrderingEnum;
import org.openapis.openapi.models.operations.ListHistoricalGWSRequest;
import org.openapis.openapi.models.operations.ListHistoricalGWSResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    tokenAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHistoricalGWSRequest req = new ListHistoricalGWSRequest() {{
                authorization = "temporibus";
                color = ListHistoricalGWSColorEnum.RED;
                isPrimeurs = false;
                limit = 337396L;
                lwin = "veritatis";
                lwin11 = "deserunt";
                offset = 20218L;
                ordering = ListHistoricalGWSOrderingEnum.MINUS_DATE;
                vintage = "repellendus";
                wineId = new Long[]{{
                    add(778157L),
                    add(140350L),
                    add(870013L),
                    add(870088L),
                }};
            }};            

            ListHistoricalGWSResponse res = sdk.globalWineScore.listHistoricalGWS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
