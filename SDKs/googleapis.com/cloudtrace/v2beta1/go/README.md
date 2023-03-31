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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CloudtraceProjectsTraceSinksCreateRequest{
        DollarXgafv: "2",
        TraceSinkInput: &shared.TraceSinkInput{
            Name: "provident",
            OutputConfig: &shared.OutputConfig{
                Destination: "distinctio",
            },
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        Parent: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudtraceProjectsTraceSinksCreate(ctx, req, operations.CloudtraceProjectsTraceSinksCreateSecurity{
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


### Projects

* `CloudtraceProjectsTraceSinksCreate` - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
* `CloudtraceProjectsTraceSinksDelete` - Deletes a sink.
* `CloudtraceProjectsTraceSinksGet` - Get a trace sink by name under the parent resource (GCP project).
* `CloudtraceProjectsTraceSinksList` - List all sinks for the parent resource (GCP project).
* `CloudtraceProjectsTraceSinksPatch` - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
