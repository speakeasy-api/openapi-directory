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

            DfareportingVideoFormatsGetRequest req = new DfareportingVideoFormatsGetRequest(389060L, "tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "autem";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "tenetur";
                key = "doloribus";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "exercitationem";
                uploadProtocol = "architecto";
            }};            

            DfareportingVideoFormatsGetResponse res = sdk.videoFormats.dfareportingVideoFormatsGet(req, new DfareportingVideoFormatsGetSecurity("cum", "ratione") {{
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

            DfareportingVideoFormatsListRequest req = new DfareportingVideoFormatsListRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "iste";
                key = "libero";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "blanditiis";
                uploadProtocol = "aspernatur";
            }};            

            DfareportingVideoFormatsListResponse res = sdk.videoFormats.dfareportingVideoFormatsList(req, new DfareportingVideoFormatsListSecurity("culpa", "accusamus") {{
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
