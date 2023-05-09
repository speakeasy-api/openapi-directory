# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudtrace/v2beta1/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTraceSinksCreate(ctx, operations.CloudtraceProjectsTraceSinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TraceSinkInput: &shared.TraceSinkInput{
            Name: sdk.String("Kelvin Sporer"),
            OutputConfig: &shared.OutputConfig{
                Destination: sdk.String("corrupti"),
            },
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.CloudtraceProjectsTraceSinksCreateSecurity{
        Option1: &operations.CloudtraceProjectsTraceSinksCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TraceSink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [CloudtraceProjectsTraceSinksCreate](docs/projects/README.md#cloudtraceprojectstracesinkscreate) - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
* [CloudtraceProjectsTraceSinksDelete](docs/projects/README.md#cloudtraceprojectstracesinksdelete) - Deletes a sink.
* [CloudtraceProjectsTraceSinksGet](docs/projects/README.md#cloudtraceprojectstracesinksget) - Get a trace sink by name under the parent resource (GCP project).
* [CloudtraceProjectsTraceSinksList](docs/projects/README.md#cloudtraceprojectstracesinkslist) - List all sinks for the parent resource (GCP project).
* [CloudtraceProjectsTraceSinksPatch](docs/projects/README.md#cloudtraceprojectstracesinkspatch) - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
