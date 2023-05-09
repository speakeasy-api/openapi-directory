# domains

## Overview

Operations for fetching domains

### Available Operations

* [getCmsV3DomainsGetPage](#getcmsv3domainsgetpage) - Get current domains
* [getCmsV3DomainsDomainIdGetById](#getcmsv3domainsdomainidgetbyid) - Get a single domain

## getCmsV3DomainsGetPage

Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.

### Example Usage

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
                after = "tempora";
                archived = false;
                createdAfter = OffsetDateTime.parse("2022-07-10T15:39:12.517Z");
                createdAt = OffsetDateTime.parse("2020-07-25T16:12:20.938Z");
                createdBefore = OffsetDateTime.parse("2022-01-15T14:47:59.325Z");
                limit = 568045;
                sort = new String[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                updatedAfter = OffsetDateTime.parse("2022-08-30T20:24:33.984Z");
                updatedAt = OffsetDateTime.parse("2022-05-09T10:00:51.349Z");
                updatedBefore = OffsetDateTime.parse("2022-08-19T14:12:14.246Z");
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

## getCmsV3DomainsDomainIdGetById

Returns a single domains with the id specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCmsV3DomainsDomainIdGetByIdRequest;
import org.openapis.openapi.models.operations.GetCmsV3DomainsDomainIdGetByIdResponse;
import org.openapis.openapi.models.operations.GetCmsV3DomainsDomainIdGetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCmsV3DomainsDomainIdGetByIdRequest req = new GetCmsV3DomainsDomainIdGetByIdRequest("repellendus");            

            GetCmsV3DomainsDomainIdGetByIdResponse res = sdk.domains.getCmsV3DomainsDomainIdGetById(req, new GetCmsV3DomainsDomainIdGetByIdSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.domain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
