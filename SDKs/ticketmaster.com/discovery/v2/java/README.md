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

import org.openapis.openapi.models.operations.FindIncludeLicensedContentEnum;
import org.openapis.openapi.models.operations.FindIncludeSpellcheckEnum;
import org.openapis.openapi.models.operations.FindIncludeTestEnum;
import org.openapis.openapi.models.operations.FindSourceEnum;
import org.openapis.openapi.models.operations.FindRequest;
import org.openapis.openapi.models.operations.FindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindRequest req = new FindRequest() {{
                classificationId = new Object[]{{
                    add("provident"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                classificationName = new Object[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                id = "vel";
                includeLicensedContent = " no";
                includeSpellcheck = " no";
                includeTest = " no";
                keyword = "iure";
                locale = "magnam";
                page = "debitis";
                size = "ipsa";
                sort = "delectus";
                source = " universe";
            }}            

            FindResponse res = sdk.find(req);

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

* `find` - Attraction Search
* `get` - Get Attraction Details
* `getGenre` - Get Genre Details
* `getImages` - Get Event Images
* `getSegment` - Get Segment Details
* `getSubgenre` - Get Sub-Genre Details
* `getDiscoveryV2Classifications` - Classification Search
* `getDiscoveryV2ClassificationsId` - Get Classification Details
* `getDiscoveryV2Events` - Event Search
* `getDiscoveryV2EventsId` - Get Event Details
* `getDiscoveryV2Venues` - Venue Search
* `getDiscoveryV2VenuesId` - Get Venue Details

### v2

* `getDiscoveryV2Suggest` - Find Suggest
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
