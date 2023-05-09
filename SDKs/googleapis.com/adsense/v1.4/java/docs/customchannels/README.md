# customchannels

### Available Operations

* [adsenseCustomchannelsAdunitsList](#adsensecustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [adsenseCustomchannelsGet](#adsensecustomchannelsget) - Get the specified custom channel from the specified ad client.
* [adsenseCustomchannelsList](#adsensecustomchannelslist) - List all custom channels in the specified ad client for this AdSense account.

## adsenseCustomchannelsAdunitsList

List all ad units in the specified custom channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsAdunitsListRequest;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsAdunitsListResponse;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsAdunitsListSecurity;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsAdunitsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsAdunitsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseCustomchannelsAdunitsListRequest req = new AdsenseCustomchannelsAdunitsListRequest("nam", "eaque") {{
                alt = AltEnum.JSON;
                fields = "nemo";
                includeInactive = false;
                key = "voluptatibus";
                maxResults = 16627L;
                oauthToken = "fugiat";
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "aut";
                userIp = "cumque";
            }};            

            AdsenseCustomchannelsAdunitsListResponse res = sdk.customchannels.adsenseCustomchannelsAdunitsList(req, new AdsenseCustomchannelsAdunitsListSecurity() {{
                option1 = new AdsenseCustomchannelsAdunitsListSecurityOption1("corporis", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adUnits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseCustomchannelsGet

Get the specified custom channel from the specified ad client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsGetRequest;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsGetResponse;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsGetSecurity;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseCustomchannelsGetRequest req = new AdsenseCustomchannelsGetRequest("libero", "nobis") {{
                alt = AltEnum.CSV;
                fields = "quis";
                key = "totam";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "eaque";
                userIp = "quis";
            }};            

            AdsenseCustomchannelsGetResponse res = sdk.customchannels.adsenseCustomchannelsGet(req, new AdsenseCustomchannelsGetSecurity() {{
                option1 = new AdsenseCustomchannelsGetSecurityOption1("nesciunt", "eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseCustomchannelsList

List all custom channels in the specified ad client for this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseCustomchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseCustomchannelsListRequest req = new AdsenseCustomchannelsListRequest("perferendis") {{
                alt = AltEnum.CSV;
                fields = "minus";
                key = "quam";
                maxResults = 223924L;
                oauthToken = "vero";
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "hic";
                userIp = "recusandae";
            }};            

            AdsenseCustomchannelsListResponse res = sdk.customchannels.adsenseCustomchannelsList(req, new AdsenseCustomchannelsListSecurity() {{
                option1 = new AdsenseCustomchannelsListSecurityOption1("omnis", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customChannels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
