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

            DfareportingVideoFormatsGetRequest req = new DfareportingVideoFormatsGetRequest(511556L, "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "eos";
                key = "excepturi";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "eos";
                uploadProtocol = "fugit";
            }};            

            DfareportingVideoFormatsGetResponse res = sdk.videoFormats.dfareportingVideoFormatsGet(req, new DfareportingVideoFormatsGetSecurity("quo", "fugiat") {{
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

            DfareportingVideoFormatsListRequest req = new DfareportingVideoFormatsListRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "tenetur";
                key = "odit";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "suscipit";
                uploadProtocol = "harum";
            }};            

            DfareportingVideoFormatsListResponse res = sdk.videoFormats.dfareportingVideoFormatsList(req, new DfareportingVideoFormatsListSecurity("culpa", "adipisci") {{
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
