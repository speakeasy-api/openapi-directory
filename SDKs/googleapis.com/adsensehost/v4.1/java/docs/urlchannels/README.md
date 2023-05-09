# urlchannels

### Available Operations

* [adsensehostUrlchannelsDelete](#adsensehosturlchannelsdelete) - Delete a URL channel from the host AdSense account.
* [adsensehostUrlchannelsInsert](#adsensehosturlchannelsinsert) - Add a new URL channel to the host AdSense account.
* [adsensehostUrlchannelsList](#adsensehosturlchannelslist) - List all host URL channels in the host AdSense account.

## adsensehostUrlchannelsDelete

Delete a URL channel from the host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsDeleteRequest;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsDeleteResponse;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostUrlchannelsDeleteRequest req = new AdsensehostUrlchannelsDeleteRequest("vel", "possimus") {{
                alt = AltEnum.CSV;
                fields = "ratione";
                key = "ex";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "dicta";
                userIp = "dolor";
            }};            

            AdsensehostUrlchannelsDeleteResponse res = sdk.urlchannels.adsensehostUrlchannelsDelete(req, new AdsensehostUrlchannelsDeleteSecurity("maiores", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.urlChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostUrlchannelsInsert

Add a new URL channel to the host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsInsertRequest;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsInsertResponse;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlChannel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostUrlchannelsInsertRequest req = new AdsensehostUrlchannelsInsertRequest("ex") {{
                urlChannel = new UrlChannel() {{
                    id = "d9f5fce6-c556-4146-83e2-50fb008c42e1";
                    kind = "non";
                    urlPattern = "et";
                }};;
                alt = AltEnum.JSON;
                fields = "laborum";
                key = "placeat";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "eum";
                userIp = "autem";
            }};            

            AdsensehostUrlchannelsInsertResponse res = sdk.urlchannels.adsensehostUrlchannelsInsert(req, new AdsensehostUrlchannelsInsertSecurity("nobis", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.urlChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostUrlchannelsList

List all host URL channels in the host AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsListRequest;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsListResponse;
import org.openapis.openapi.models.operations.AdsensehostUrlchannelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostUrlchannelsListRequest req = new AdsensehostUrlchannelsListRequest("assumenda") {{
                alt = AltEnum.JSON;
                fields = "voluptas";
                key = "libero";
                maxResults = 96549L;
                oauthToken = "tempora";
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "explicabo";
                userIp = "provident";
            }};            

            AdsensehostUrlchannelsListResponse res = sdk.urlchannels.adsensehostUrlchannelsList(req, new AdsensehostUrlchannelsListSecurity("ipsa", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.urlChannels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
