# imageFamilyViews

### Available Operations

* [computeImageFamilyViewsGet](#computeimagefamilyviewsget) - Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

## computeImageFamilyViewsGet

Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImageFamilyViewsGetRequest;
import org.openapis.openapi.models.operations.ComputeImageFamilyViewsGetResponse;
import org.openapis.openapi.models.operations.ComputeImageFamilyViewsGetSecurity;
import org.openapis.openapi.models.operations.ComputeImageFamilyViewsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImageFamilyViewsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeImageFamilyViewsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImageFamilyViewsGetRequest req = new ComputeImageFamilyViewsGetRequest("quia", "porro", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "perferendis";
                key = "eveniet";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "culpa";
                uploadProtocol = "quo";
                userIp = "sunt";
            }};            

            ComputeImageFamilyViewsGetResponse res = sdk.imageFamilyViews.computeImageFamilyViewsGet(req, new ComputeImageFamilyViewsGetSecurity() {{
                option1 = new ComputeImageFamilyViewsGetSecurityOption1("necessitatibus", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.imageFamilyView != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
