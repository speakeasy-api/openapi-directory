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