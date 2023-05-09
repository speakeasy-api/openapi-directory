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
import org.openapis.openapi.models.operations.WebfontsWebfontsListCapabilityEnum;
import org.openapis.openapi.models.operations.WebfontsWebfontsListRequest;
import org.openapis.openapi.models.operations.WebfontsWebfontsListResponse;
import org.openapis.openapi.models.operations.WebfontsWebfontsListSortEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebfontsWebfontsListRequest req = new WebfontsWebfontsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                capability = new org.openapis.openapi.models.operations.WebfontsWebfontsListCapabilityEnum[]{{
                    add(WebfontsWebfontsListCapabilityEnum.VF),
                    add(WebfontsWebfontsListCapabilityEnum.WOFF2),
                    add(WebfontsWebfontsListCapabilityEnum.VF),
                }};
                family = new String[]{{
                    add("error"),
                    add("deserunt"),
                }};
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                sort = WebfontsWebfontsListSortEnum.SORT_UNDEFINED;
                subset = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            WebfontsWebfontsListResponse res = sdk.webfonts.webfontsWebfontsList(req);

            if (res.webfontList != null) {
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


### [webfonts](docs/webfonts/README.md)

* [webfontsWebfontsList](docs/webfonts/README.md#webfontswebfontslist) - Retrieves the list of fonts currently served by the Google Fonts Developer API.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
