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

import org.openapis.openapi.models.operations.GETUserContentByDateJsonSecurity;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonQueryParams;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonRequest;
import org.openapis.openapi.models.operations.GETUserContentByDateJsonResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUserContentByDateJsonRequest req = new GETUserContentByDateJsonRequest() {{
                security = new GETUserContentByDateJsonSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GETUserContentByDateJsonQueryParams() {{
                    date = "corrupti";
                }};
            }};            

            GETUserContentByDateJsonResponse res = sdk.getUserContentByDateJson(req);

            if (res.getUserContentByDateJSON200ApplicationJSONObject.isPresent()) {
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

* `getUserContentByDateJson` - Comments by Date
* `getUserContentRecentJson` - Recent User Comments
* `getUserContentUrlJson` - Comments by URL
* `getUserContentUserJson` - Comments by User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
