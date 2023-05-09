# adunits

### Available Operations

* [adsenseAdunitsCustomchannelsList](#adsenseadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [adsenseAdunitsGet](#adsenseadunitsget) - Gets the specified ad unit in the specified ad client.
* [adsenseAdunitsGetAdCode](#adsenseadunitsgetadcode) - Get ad code for the specified ad unit.
* [adsenseAdunitsList](#adsenseadunitslist) - List all ad units in the specified ad client for this AdSense account.

## adsenseAdunitsCustomchannelsList

List all custom channels which the specified ad unit belongs to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAdunitsCustomchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseAdunitsCustomchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseAdunitsCustomchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAdunitsCustomchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAdunitsCustomchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAdunitsCustomchannelsListRequest req = new AdsenseAdunitsCustomchannelsListRequest("vero", "aspernatur") {{
                alt = AltEnum.CSV;
                fields = "magnam";
                key = "et";
                maxResults = 569965L;
                oauthToken = "ullam";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "quos";
                userIp = "sint";
            }};            

            AdsenseAdunitsCustomchannelsListResponse res = sdk.adunits.adsenseAdunitsCustomchannelsList(req, new AdsenseAdunitsCustomchannelsListSecurity() {{
                option1 = new AdsenseAdunitsCustomchannelsListSecurityOption1("accusantium", "mollitia") {{
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

## adsenseAdunitsGet

Gets the specified ad unit in the specified ad client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetRequest;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetResponse;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetSecurity;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAdunitsGetRequest req = new AdsenseAdunitsGetRequest("reiciendis", "mollitia") {{
                alt = AltEnum.CSV;
                fields = "eum";
                key = "dolor";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "odit";
                userIp = "nemo";
            }};            

            AdsenseAdunitsGetResponse res = sdk.adunits.adsenseAdunitsGet(req, new AdsenseAdunitsGetSecurity() {{
                option1 = new AdsenseAdunitsGetSecurityOption1("quasi", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAdunitsGetAdCode

Get ad code for the specified ad unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetAdCodeRequest;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetAdCodeResponse;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetAdCodeSecurity;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetAdCodeSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAdunitsGetAdCodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAdunitsGetAdCodeRequest req = new AdsenseAdunitsGetAdCodeRequest("doloribus", "debitis") {{
                alt = AltEnum.CSV;
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                userIp = "architecto";
            }};            

            AdsenseAdunitsGetAdCodeResponse res = sdk.adunits.adsenseAdunitsGetAdCode(req, new AdsenseAdunitsGetAdCodeSecurity() {{
                option1 = new AdsenseAdunitsGetAdCodeSecurityOption1("architecto", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAdunitsList

List all ad units in the specified ad client for this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAdunitsListRequest;
import org.openapis.openapi.models.operations.AdsenseAdunitsListResponse;
import org.openapis.openapi.models.operations.AdsenseAdunitsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAdunitsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAdunitsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAdunitsListRequest req = new AdsenseAdunitsListRequest("ullam") {{
                alt = AltEnum.JSON;
                fields = "nihil";
                includeInactive = false;
                key = "repellat";
                maxResults = 841140L;
                oauthToken = "sed";
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                userIp = "accusantium";
            }};            

            AdsenseAdunitsListResponse res = sdk.adunits.adsenseAdunitsList(req, new AdsenseAdunitsListSecurity() {{
                option1 = new AdsenseAdunitsListSecurityOption1("consequuntur", "praesentium") {{
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
