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
import org.openapis.openapi.models.shared.AbuseTicketCreateTypeEnum;
import org.openapis.openapi.models.shared.AbuseTicketCreate;

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
                type = "PHISHING";
            }}            

            CreateTicketResponse res = sdk.v1.createTicket(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `createTicket` - Create a new abuse ticket
* `getTicketInfo` - Return the abuse ticket data for a given ticket id
* `getTickets` - List all abuse tickets ids that match user provided filters
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
