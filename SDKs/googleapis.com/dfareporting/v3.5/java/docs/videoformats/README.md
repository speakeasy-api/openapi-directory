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

            DfareportingVideoFormatsGetRequest req = new DfareportingVideoFormatsGetRequest(752909L, "laboriosam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "facere";
                key = "quam";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "esse";
                uploadProtocol = "quisquam";
            }};            

            DfareportingVideoFormatsGetResponse res = sdk.videoFormats.dfareportingVideoFormatsGet(req, new DfareportingVideoFormatsGetSecurity("maiores", "dolor") {{
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

            DfareportingVideoFormatsListRequest req = new DfareportingVideoFormatsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "eveniet";
                key = "deleniti";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "vitae";
                uploadProtocol = "fugiat";
            }};            

            DfareportingVideoFormatsListResponse res = sdk.videoFormats.dfareportingVideoFormatsList(req, new DfareportingVideoFormatsListSecurity("nihil", "provident") {{
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
