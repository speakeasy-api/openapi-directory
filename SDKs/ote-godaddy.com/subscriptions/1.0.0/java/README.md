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

import org.openapis.openapi.models.operations.CancelPathParams;
import org.openapis.openapi.models.operations.CancelHeaders;
import org.openapis.openapi.models.operations.CancelRequest;
import org.openapis.openapi.models.operations.CancelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelRequest req = new CancelRequest() {{
                pathParams = new CancelPathParams() {{
                    subscriptionId = "corrupti";
                }};
                headers = new CancelHeaders() {{
                    xShopperId = "provident";
                }};
            }};            

            CancelResponse res = sdk.v1.cancel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### v1

* `cancel` - Cancel the specified Subscription
* `get` - Retrieve details for the specified Subscription
* `list` - Retrieve a list of Subscriptions for the specified Shopper
* `productGroups` - Retrieve a list of ProductGroups for the specified Shopper
* `updateForm` - Update details for the specified Subscription
* `updateJson` - Update details for the specified Subscription
* `updateRaw` - Update details for the specified Subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
