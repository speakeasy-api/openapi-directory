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
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.operations.GetEventsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest() {{
                company = "Medhurst - Rau";
                deal = "quibusdam";
                nexttoken = "unde";
                queryexecutionid = "nulla";
                site = "corrupti";
                type = GetEventsTypeEnum.CONTACTS;
            }};            

            GetEventsResponse res = sdk.developers.getEvents(req);

            if (res.eventRecords != null) {
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


### [developers](docs/developers/README.md)

* [getEvents](docs/developers/README.md#getevents) - get events for analytics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
