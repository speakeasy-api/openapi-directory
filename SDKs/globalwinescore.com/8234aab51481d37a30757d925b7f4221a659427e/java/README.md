# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestColorEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestOrderingEnum;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestRequest;
import org.openapis.openapi.models.operations.GetGlobalwinescoresLatestResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    tokenAuthentication = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGlobalwinescoresLatestRequest req = new GetGlobalwinescoresLatestRequest() {{
                authorization = "provident";
                color = GetGlobalwinescoresLatestColorEnum.PINK;
                isPrimeurs = false;
                limit = 844266L;
                lwin = "unde";
                lwin11 = "nulla";
                offset = 544883L;
                ordering = GetGlobalwinescoresLatestOrderingEnum.MINUS_SCORE;
                vintage = "vel";
                wineId = new Long[]{{
                    add(645894L),
                    add(384382L),
                    add(437587L),
                }};
            }};            

            GetGlobalwinescoresLatestResponse res = sdk.globalWineScore.getGlobalwinescoresLatest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [globalWineScore](docs/globalwinescore/README.md)

* [getGlobalwinescoresLatest](docs/globalwinescore/README.md#getglobalwinescoreslatest) - List all latest GWS
* [listHistoricalGWS](docs/globalwinescore/README.md#listhistoricalgws) - List all historical GWS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
