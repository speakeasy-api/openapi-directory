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
import org.openapis.openapi.models.operations.CreateContactInMailinglistRequest;
import org.openapis.openapi.models.operations.CreateContactInMailinglistResponse;
import org.openapis.openapi.models.shared.CreateContactInMailingList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateContactInMailinglistRequest req = new CreateContactInMailinglistRequest(                new CreateContactInMailingList() {{
                                email = "Larue_Rau85@yahoo.com";
                                firstName = "Karley";
                                lastName = "Stamm";
                                unsubscribed = false;
                            }};, "vel", "error");            

            CreateContactInMailinglistResponse res = sdk.createContactInMailinglist(req);

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

* [createContactInMailinglist](docs/sdk/README.md#createcontactinmailinglist) - Create contact in mailing list
* [generateDistributionLinks](docs/sdk/README.md#generatedistributionlinks) - Generate distribution links
* [getDistributions](docs/sdk/README.md#getdistributions) - Get distributions for survey
* [getEventSubscriptions](docs/sdk/README.md#geteventsubscriptions) - Get event subscriptions
* [getSurvey](docs/sdk/README.md#getsurvey) - Get survey
* [retrievedistributionlinks](docs/sdk/README.md#retrievedistributionlinks) - Retrieve distribution links
* [webhookDelete](docs/sdk/README.md#webhookdelete) - Remove subscription to response event
* [whenAResponseIsReceived](docs/sdk/README.md#whenaresponseisreceived) - Triggers when a response is submitted to a qualtrics survey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
