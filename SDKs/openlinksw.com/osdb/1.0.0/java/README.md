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
import org.openapis.openapi.models.operations.ActionHelpRequest;
import org.openapis.openapi.models.operations.ActionHelpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ActionHelpRequest req = new ActionHelpRequest("corrupti", "provident");            

            ActionHelpResponse res = sdk.osdb.actionHelp(req);

            if (res.actionHelpResponse != null) {
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


### [osdb](docs/osdb/README.md)

* [actionHelp](docs/osdb/README.md#actionhelp) - Action help
* [describeAction](docs/osdb/README.md#describeaction) - Describe action
* [describeService](docs/osdb/README.md#describeservice) - Describe service
* [executeAction](docs/osdb/README.md#executeaction) - Execute action
* [listActions](docs/osdb/README.md#listactions) - List actions
* [listServices](docs/osdb/README.md#listservices) - List services
* [loadService](docs/osdb/README.md#loadservice) - Load service
* [login](docs/osdb/README.md#login) - Login
* [logout](docs/osdb/README.md#logout) - Logout
* [unloadService](docs/osdb/README.md#unloadservice) - Unload service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
