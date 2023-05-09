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
import org.openapis.openapi.models.operations.FindRequest;
import org.openapis.openapi.models.operations.FindResponse;
import org.openapis.openapi.models.operations.FindSourceEnum;

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
                id = "69a674e0-f467-4cc8-b96e-d151a05dfc2d";
                includeLicensedContent = FindIncludeLicensedContentEnum.NO;
                includeSpellcheck = FindIncludeSpellcheckEnum.NO;
                includeTest = FindIncludeTestEnum.NO;
                keyword = "quod";
                locale = "quod";
                page = "esse";
                size = "totam";
                sort = "porro";
                source = FindSourceEnum.FRONTGATE;
            }};            

            FindResponse res = sdk.find(req);

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

### [SDK](docs/sdk/README.md)

* [find](docs/sdk/README.md#find) - Attraction Search
* [get](docs/sdk/README.md#get) - Get Attraction Details
* [getGenre](docs/sdk/README.md#getgenre) - Get Genre Details
* [getImages](docs/sdk/README.md#getimages) - Get Event Images
* [getSegment](docs/sdk/README.md#getsegment) - Get Segment Details
* [getSubgenre](docs/sdk/README.md#getsubgenre) - Get Sub-Genre Details
* [getDiscoveryV2Classifications](docs/sdk/README.md#getdiscoveryv2classifications) - Classification Search
* [getDiscoveryV2ClassificationsId](docs/sdk/README.md#getdiscoveryv2classificationsid) - Get Classification Details
* [getDiscoveryV2Events](docs/sdk/README.md#getdiscoveryv2events) - Event Search
* [getDiscoveryV2EventsId](docs/sdk/README.md#getdiscoveryv2eventsid) - Get Event Details
* [getDiscoveryV2Venues](docs/sdk/README.md#getdiscoveryv2venues) - Venue Search
* [getDiscoveryV2VenuesId](docs/sdk/README.md#getdiscoveryv2venuesid) - Get Venue Details

### [v2](docs/v2/README.md)

* [getDiscoveryV2Suggest](docs/v2/README.md#getdiscoveryv2suggest) - Find Suggest
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
