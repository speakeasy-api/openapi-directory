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
import org.openapis.openapi.models.operations.GetWellKnownMercureQueryParams;
import org.openapis.openapi.models.operations.GetWellKnownMercureHeaders;
import org.openapis.openapi.models.operations.GetWellKnownMercureRequest;
import org.openapis.openapi.models.operations.GetWellKnownMercureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = new SchemeBearer() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            GetWellKnownMercureRequest req = new GetWellKnownMercureRequest() {{
                queryParams = new GetWellKnownMercureQueryParams() {{
                    lastEventID = "corrupti";
                    topic = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};
                headers = new GetWellKnownMercureHeaders() {{
                    lastEventID = "nulla";
                }};
            }};            

            GetWellKnownMercureResponse res = sdk.getWellKnownMercure(req);

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

### SDK SDK

* `getWellKnownMercure` - Subscribe to updates
* `getWellKnownMercureSubscriptions` - Active subscriptions
* `getWellKnownMercureSubscriptionsTopic` - Active subscriptions for the given topic
* `getWellKnownMercureSubscriptionsTopicSubscriber` - Active subscription for the given topic and subscriber
* `postWellKnownMercure` - Publish an update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
