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
import org.openapis.openapi.models.operations.GetWellKnownMercureRequest;
import org.openapis.openapi.models.operations.GetWellKnownMercureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWellKnownMercureRequest req = new GetWellKnownMercureRequest(                new String[]{{
                                add("provident"),
                                add("distinctio"),
                                add("quibusdam"),
                            }}) {{
                lastEventID = "unde";
                lastEventIDQueryParameter = "nulla";
            }};            

            GetWellKnownMercureResponse res = sdk.getWellKnownMercure(req);

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

### [SDK](docs/sdk/README.md)

* [getWellKnownMercure](docs/sdk/README.md#getwellknownmercure) - Subscribe to updates
* [getWellKnownMercureSubscriptions](docs/sdk/README.md#getwellknownmercuresubscriptions) - Active subscriptions
* [getWellKnownMercureSubscriptionsTopic](docs/sdk/README.md#getwellknownmercuresubscriptionstopic) - Active subscriptions for the given topic
* [getWellKnownMercureSubscriptionsTopicSubscriber](docs/sdk/README.md#getwellknownmercuresubscriptionstopicsubscriber) - Active subscription for the given topic and subscriber
* [postWellKnownMercure](docs/sdk/README.md#postwellknownmercure) - Publish an update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
