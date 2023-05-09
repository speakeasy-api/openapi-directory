# www

### Available Operations

* [browserBot](#browserbot) - Browser Bot
* [htmlClean](#htmlclean) - HTML Clean
* [urlInfo](#urlinfo) - URL Info

## browserBot

Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowserBotRequestBody;
import org.openapis.openapi.models.operations.BrowserBotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "explicabo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            BrowserBotRequestBody req = new BrowserBotRequestBody("deserunt") {{
                delay = 716327;
                exec = new String[]{{
                    add("labore"),
                    add("modi"),
                    add("qui"),
                    add("aliquid"),
                }};
                ignoreCertificateErrors = false;
                selector = "cupiditate";
                timeout = 552822;
                userAgent = "perferendis";
            }};            

            BrowserBotResponse res = sdk.www.browserBot(req);

            if (res.browserBotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## htmlClean

Clean and sanitize untrusted HTML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HTMLCleanRequestBody;
import org.openapis.openapi.models.operations.HTMLCleanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni", "assumenda") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            HTMLCleanRequestBody req = new HTMLCleanRequestBody("ipsam", "alias");            

            HTMLCleanResponse res = sdk.www.htmlClean(req);

            if (res.htmlClean200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## urlInfo

Parse, analyze and retrieve content from the supplied URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.URLInfoRequest;
import org.openapis.openapi.models.operations.URLInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit", "dolorum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            URLInfoRequest req = new URLInfoRequest("excepturi") {{
                fetchContent = false;
                ignoreCertificateErrors = false;
                retry = 270008;
                timeout = 703737;
            }};            

            URLInfoResponse res = sdk.www.urlInfo(req);

            if (res.urlInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
