# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_content_v1/1.43.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.DeleteContent(ctx, operations.DeleteContentRequest{
        Sid: "corrupti",
    }, operations.DeleteContentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteContent](docs/sdk/README.md#deletecontent) - Deletes a Content resource
* [FetchApprovalFetch](docs/sdk/README.md#fetchapprovalfetch) - Fetch a Content resource's approval status by its unique Content Sid
* [FetchContent](docs/sdk/README.md#fetchcontent) - Fetch a Content resource by its unique Content Sid
* [ListContent](docs/sdk/README.md#listcontent) - Retrieve a list of Contents belonging to the account used to make the request
* [ListContentAndApprovals](docs/sdk/README.md#listcontentandapprovals) - Retrieve a list of Contents with approval statuses belonging to the account used to make the request
* [ListLegacyContent](docs/sdk/README.md#listlegacycontent) - Retrieve a list of Legacy Contents belonging to the account used to make the request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
