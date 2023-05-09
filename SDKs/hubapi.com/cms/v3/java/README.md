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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCmsV3DomainsGetPageRequest;
import org.openapis.openapi.models.operations.GetCmsV3DomainsGetPageResponse;
import org.openapis.openapi.models.operations.GetCmsV3DomainsGetPageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCmsV3DomainsGetPageRequest req = new GetCmsV3DomainsGetPageRequest() {{
                after = "corrupti";
                archived = false;
                createdAfter = OffsetDateTime.parse("2021-07-27T21:52:56.087Z");
                createdAt = OffsetDateTime.parse("2021-03-11T23:22:42.658Z");
                createdBefore = OffsetDateTime.parse("2021-05-14T08:28:11.899Z");
                limit = 847252;
                sort = new String[]{{
                    add("error"),
                    add("deserunt"),
                }};
                updatedAfter = OffsetDateTime.parse("2022-07-25T06:44:09.184Z");
                updatedAt = OffsetDateTime.parse("2022-02-09T12:04:06.508Z");
                updatedBefore = OffsetDateTime.parse("2022-01-14T06:18:51.036Z");
            }};            

            GetCmsV3DomainsGetPageResponse res = sdk.domains.getCmsV3DomainsGetPage(req, new GetCmsV3DomainsGetPageSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.collectionResponseWithTotalDomainForwardPaging != null) {
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


### [domains](docs/domains/README.md)

* [getCmsV3DomainsGetPage](docs/domains/README.md#getcmsv3domainsgetpage) - Get current domains
* [getCmsV3DomainsDomainIdGetById](docs/domains/README.md#getcmsv3domainsdomainidgetbyid) - Get a single domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
