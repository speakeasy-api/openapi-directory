# startScreenshotTest

### Available Operations

* [startScreenshotTest](#startscreenshottest) - Start Screenshot Test

## startScreenshotTest

Start Screenshot Test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartScreenshotTestResponse;
import org.openapis.openapi.models.operations.StartScreenshotTestSecurity;
import org.openapis.openapi.models.shared.Browsers;
import org.openapis.openapi.models.shared.ScreenshotPayload;
import org.openapis.openapi.models.shared.ScreenshotPayloadConfigs;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScreenshotPayload req = new ScreenshotPayload() {{
                callbackUrl = "https://www.example.com";
                configs = new ScreenshotPayloadConfigs() {{
                    macosMojave = new Browsers() {{
                        chrome = new String[]{{
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                            add("nisi"),
                        }};
                        firefox = new String[]{{
                            add("temporibus"),
                            add("ab"),
                            add("quis"),
                            add("veritatis"),
                        }};
                        opera = new String[]{{
                            add("perferendis"),
                            add("ipsam"),
                            add("repellendus"),
                        }};
                    }};;
                    windows10 = new Browsers() {{
                        chrome = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }};
                        firefox = new String[]{{
                            add("molestiae"),
                            add("quod"),
                            add("quod"),
                            add("esse"),
                        }};
                        opera = new String[]{{
                            add("porro"),
                            add("dolorum"),
                            add("dicta"),
                        }};
                    }};;
                }};;
                deferTime = 5;
                email = true;
                macRes = "1024x768";
                password = "password";
                tunnel = true;
                tunnelIdentifier = "tunnel";
                url = "https://www.lambdatest.com";
                username = "admin";
                winRes = "1366X768";
            }};            

            StartScreenshotTestResponse res = sdk.startScreenshotTest.startScreenshotTest(req, new StartScreenshotTestSecurity("nam", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.startScreenshotSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
