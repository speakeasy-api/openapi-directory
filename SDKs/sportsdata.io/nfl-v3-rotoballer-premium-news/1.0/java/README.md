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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PremiumNewsFormatEnum;
import org.openapis.openapi.models.operations.PremiumNewsPathParams;
import org.openapis.openapi.models.operations.PremiumNewsRequest;
import org.openapis.openapi.models.operations.PremiumNewsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            PremiumNewsRequest req = new PremiumNewsRequest() {{
                pathParams = new PremiumNewsPathParams() {{
                    format = "json";
                }};
            }};            

            PremiumNewsResponse res = sdk.premiumNews(req);

            if (res.news.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `premiumNews` - Premium News
* `premiumNewsByDate` - Premium News by Date
* `premiumNewsByPlayer` - Premium News by Player
* `premiumNewsByTeam` - Premium News by Team
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
