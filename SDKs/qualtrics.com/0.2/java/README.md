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

import org.openapis.openapi.models.operations.CreateContactInMailinglistPathParams;
import org.openapis.openapi.models.operations.CreateContactInMailinglistRequest;
import org.openapis.openapi.models.operations.CreateContactInMailinglistResponse;
import org.openapis.openapi.models.shared.CreateContactInMailingList;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateContactInMailinglistRequest req = new CreateContactInMailinglistRequest() {{
                pathParams = new CreateContactInMailinglistPathParams() {{
                    directoryId = "corrupti";
                    mailingListId = "provident";
                }};
                request = new CreateContactInMailingList() {{
                    email = "Rosalinda_Mitchell84@hotmail.com";
                    firstName = "Henry";
                    lastName = "Mueller";
                    unsubscribed = false;
                }};
            }};            

            CreateContactInMailinglistResponse res = sdk.createContactInMailinglist(req);

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

* `createContactInMailinglist` - Create contact in mailing list
* `generateDistributionLinks` - Generate distribution links
* `getDistributions` - Get distributions for survey
* `getEventSubscriptions` - Get event subscriptions
* `getSurvey` - Get survey
* `retrievedistributionlinks` - Retrieve distribution links
* `webhookDelete` - Remove subscription to response event
* `whenAResponseIsReceived` - Triggers when a response is submitted to a qualtrics survey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
