# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openlinksw.com/osdb/1.0.0/go
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
    res, err := s.Osdb.ActionHelp(ctx, operations.ActionHelpRequest{
        ActionID: "corrupti",
        ServiceID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionHelpResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Osdb](docs/osdb/README.md)

* [ActionHelp](docs/osdb/README.md#actionhelp) - Action help
* [DescribeAction](docs/osdb/README.md#describeaction) - Describe action
* [DescribeService](docs/osdb/README.md#describeservice) - Describe service
* [ExecuteAction](docs/osdb/README.md#executeaction) - Execute action
* [ListActions](docs/osdb/README.md#listactions) - List actions
* [ListServices](docs/osdb/README.md#listservices) - List services
* [LoadService](docs/osdb/README.md#loadservice) - Load service
* [Login](docs/osdb/README.md#login) - Login
* [Logout](docs/osdb/README.md#logout) - Logout
* [UnloadService](docs/osdb/README.md#unloadservice) - Unload service
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
