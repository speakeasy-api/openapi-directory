# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/rev.ai/v1/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.GetAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [GetAccount](docs/account/README.md#getaccount) - Get Account

### [Captions](docs/captions/README.md)

* [GetCaptions](docs/captions/README.md#getcaptions) - Get Captions

### [Jobs](docs/jobs/README.md)

* [DeleteJobByID](docs/jobs/README.md#deletejobbyid) - Delete Job by Id
* [GetJobByID](docs/jobs/README.md#getjobbyid) - Get Job By Id
* [GetListOfJobs](docs/jobs/README.md#getlistofjobs) - Get List of Jobs
* [SubmitTranscriptionJobJSON](docs/jobs/README.md#submittranscriptionjobjson) - Submit Transcription Job
* [SubmitTranscriptionJobMultipart](docs/jobs/README.md#submittranscriptionjobmultipart) - Submit Transcription Job

### [Transcript](docs/transcript/README.md)

* [GetTranscriptByID](docs/transcript/README.md#gettranscriptbyid) - Get Transcript By Id
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
