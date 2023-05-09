# videoFormats

### Available Operations

* [dfareportingVideoFormatsGet](#dfareportingvideoformatsget) - Gets one video format by ID.
* [dfareportingVideoFormatsList](#dfareportingvideoformatslist) - Lists available video formats.

## dfareportingVideoFormatsGet

Gets one video format by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingVideoFormatsGetRequest;
import org.openapis.openapi.models.operations.DfareportingVideoFormatsGetResponse;
import org.openapis.openapi.models.operations.DfareportingVideoFormatsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingVideoFormatsGetRequest req = new DfareportingVideoFormatsGetRequest(284190L, "cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "illo";
                key = "magnam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "dignissimos";
                uploadProtocol = "quidem";
            }};            

            DfareportingVideoFormatsGetResponse res = sdk.videoFormats.dfareportingVideoFormatsGet(req, new DfareportingVideoFormatsGetSecurity("dignissimos", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.videoFormat != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingVideoFormatsList

Lists available video formats.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingVideoFormatsListRequest;
import org.openapis.openapi.models.operations.DfareportingVideoFormatsListResponse;
import org.openapis.openapi.models.operations.DfareportingVideoFormatsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingVideoFormatsListRequest req = new DfareportingVideoFormatsListRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "labore";
                key = "enim";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "dolores";
                uploadProtocol = "magni";
            }};            

            DfareportingVideoFormatsListResponse res = sdk.videoFormats.dfareportingVideoFormatsList(req, new DfareportingVideoFormatsListSecurity("impedit", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.videoFormatsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
