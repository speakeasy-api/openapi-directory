# savedadstyles

### Available Operations

* [adsenseSavedadstylesGet](#adsensesavedadstylesget) - Get a specific saved ad style from the user's account.
* [adsenseSavedadstylesList](#adsensesavedadstyleslist) - List all saved ad styles in the user's account.

## adsenseSavedadstylesGet

Get a specific saved ad style from the user's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesGetRequest;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesGetResponse;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesGetSecurity;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseSavedadstylesGetRequest req = new AdsenseSavedadstylesGetRequest("ad") {{
                alt = AltEnum.JSON;
                fields = "suscipit";
                key = "deserunt";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "minima";
                userIp = "repellendus";
            }};            

            AdsenseSavedadstylesGetResponse res = sdk.savedadstyles.adsenseSavedadstylesGet(req, new AdsenseSavedadstylesGetSecurity() {{
                option1 = new AdsenseSavedadstylesGetSecurityOption1("totam", "similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedAdStyle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseSavedadstylesList

List all saved ad styles in the user's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesListRequest;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesListResponse;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesListSecurity;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseSavedadstylesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseSavedadstylesListRequest req = new AdsenseSavedadstylesListRequest() {{
                alt = AltEnum.CSV;
                fields = "at";
                key = "quaerat";
                maxResults = 273542L;
                oauthToken = "vel";
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "officiis";
                userIp = "qui";
            }};            

            AdsenseSavedadstylesListResponse res = sdk.savedadstyles.adsenseSavedadstylesList(req, new AdsenseSavedadstylesListSecurity() {{
                option1 = new AdsenseSavedadstylesListSecurityOption1("dolorum", "a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedAdStyles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
