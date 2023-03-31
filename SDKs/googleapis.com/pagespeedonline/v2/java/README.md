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

import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedQueryParams;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedRequest;
import org.openapis.openapi.models.operations.PagespeedonlinePagespeedapiRunpagespeedResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PagespeedonlinePagespeedapiRunpagespeedRequest req = new PagespeedonlinePagespeedapiRunpagespeedRequest() {{
                queryParams = new PagespeedonlinePagespeedapiRunpagespeedQueryParams() {{
                    alt = "json";
                    fields = "corrupti";
                    filterThirdPartyResources = false;
                    key = "provident";
                    locale = "distinctio";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "unde";
                    rule = new String[]{{
                        add("corrupti"),
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                    screenshot = false;
                    strategy = "mobile";
                    url = "suscipit";
                    userIp = "iure";
                }};
            }};            

            PagespeedonlinePagespeedapiRunpagespeedResponse res = sdk.pagespeedapi.pagespeedonlinePagespeedapiRunpagespeed(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### pagespeedapi

* `pagespeedonlinePagespeedapiRunpagespeed` - Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
