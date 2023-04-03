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

import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllOutputFormatEnum;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllRequest;
import org.openapis.openapi.models.operations.TransportationIncentivesLawsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransportationIncentivesLawsAllRequest req = new TransportationIncentivesLawsAllRequest() {{
                apiKey = "corrupti";
                expired = false;
                incentiveType = "provident";
                jurisdiction = "distinctio";
                keyword = "quibusdam";
                lawType = "unde";
                limit = 857946;
                local = false;
                outputFormat = "xml";
                poc = false;
                recent = false;
                regulationType = "illum";
                technology = "vel";
                userType = "error";
            }}            

            TransportationIncentivesLawsAllResponse res = sdk.transportationIncentivesLawsAll(req);

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

### SDK SDK

* `transportationIncentivesLawsAll` - Return a full list of laws and incentives that match your query.
* `transportationIncentivesLawsCategories` - Return the law categories for a given category type.
* `transportationIncentivesLawsId` - Fetch the details of a specific law given the law's ID.
* `transportationIncentivesLawsPocs` - Get the points of contact for a given jurisdiction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
