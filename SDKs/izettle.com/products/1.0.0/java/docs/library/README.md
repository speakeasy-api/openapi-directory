# library

### Available Operations

* [getLibrary](#getlibrary) - Retrieve the entire library

## getLibrary

Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:

<https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"

where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any "next" value, all items have been sent to the client.

Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:

    IETF: https://tools.ietf.org/html/rfc5988
    GitHub: https://developer.github.com/guides/traversing-with-pagination/

If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLibraryRequest;
import org.openapis.openapi.models.operations.GetLibraryResponse;
import org.openapis.openapi.models.operations.GetLibrarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLibraryRequest req = new GetLibraryRequest("97f92443-da7c-4e52-b895-c537c6454efb") {{
                all = false;
                eventLogUuid = "0b34896c-3ca5-4acf-be2f-d57075779291";
                limit = 498180;
                offset = "voluptate";
            }};            

            GetLibraryResponse res = sdk.library.getLibrary(req, new GetLibrarySecurity("pariatur") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.libraryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
