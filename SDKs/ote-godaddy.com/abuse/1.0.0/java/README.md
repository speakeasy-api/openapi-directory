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
import org.openapis.openapi.models.operations.CreateTicketResponse;
import org.openapis.openapi.models.shared.AbuseTicketCreate;
import org.openapis.openapi.models.shared.AbuseTicketCreateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AbuseTicketCreate req = new AbuseTicketCreate() {{
                info = "corrupti";
                infoUrl = "provident";
                intentional = false;
                proxy = "distinctio";
                source = "quibusdam";
                target = "unde";
                type = AbuseTicketCreateTypeEnum.PHISHING;
            }};            

            CreateTicketResponse res = sdk.v1.createTicket(req);

            if (res.body != null) {
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


### [v1](docs/v1/README.md)

* [createTicket](docs/v1/README.md#createticket) - Create a new abuse ticket
* [getTicketInfo](docs/v1/README.md#getticketinfo) - Return the abuse ticket data for a given ticket id
* [getTickets](docs/v1/README.md#gettickets) - List all abuse tickets ids that match user provided filters
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
