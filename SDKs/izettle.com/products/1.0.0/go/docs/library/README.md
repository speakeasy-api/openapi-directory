# Library

### Available Operations

* [GetLibrary](#getlibrary) - Retrieve the entire library

## GetLibrary

Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:

<https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"

where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any "next" value, all items have been sent to the client.

Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:

    IETF: https://tools.ietf.org/html/rfc5988
    GitHub: https://developer.github.com/guides/traversing-with-pagination/

If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Library.GetLibrary(ctx, operations.GetLibraryRequest{
        All: sdk.Bool(false),
        EventLogUUID: sdk.String("ae9e057e-b809-4e28-9033-1f3981d4c700"),
        Limit: sdk.Int(698558),
        Offset: sdk.String("ea"),
        OrganizationUUID: "07f3c93c-73b9-4da3-b2ce-da7e23f22574",
    }, operations.GetLibrarySecurity{
        ZettleOauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LibraryResponse != nil {
        // handle response
    }
}
```
