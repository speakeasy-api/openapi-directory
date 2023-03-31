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

import org.openapis.openapi.models.operations.DiscoveryApisGetRestPathParams;
import org.openapis.openapi.models.operations.DiscoveryApisGetRestQueryParams;
import org.openapis.openapi.models.operations.DiscoveryApisGetRestRequest;
import org.openapis.openapi.models.operations.DiscoveryApisGetRestResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryApisGetRestRequest req = new DiscoveryApisGetRestRequest() {{
                pathParams = new DiscoveryApisGetRestPathParams() {{
                    api = "corrupti";
                    version = "provident";
                }};
                queryParams = new DiscoveryApisGetRestQueryParams() {{
                    alt = "json";
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
                }};
            }};            

            DiscoveryApisGetRestResponse res = sdk.apis.discoveryApisGetRest(req);

            if (res.restDescription.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### apis

* `discoveryApisGetRest` - Retrieve the description of a particular version of an api.
* `discoveryApisList` - Retrieve the list of APIs supported at this endpoint.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
