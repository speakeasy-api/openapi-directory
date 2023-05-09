<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchConversionGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchConversionGetRequest req = new DoubleclicksearchConversionGetRequest("corrupti", "provident", 715190L, "quibusdam", 602763L, 857946L, 544883L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                adGroupId = "error";
                adId = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "iure";
                campaignId = "magnam";
                criterionId = "debitis";
                customerId = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            DoubleclicksearchConversionGetResponse res = sdk.conversion.doubleclicksearchConversionGet(req, new DoubleclicksearchConversionGetSecurity("voluptatum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->