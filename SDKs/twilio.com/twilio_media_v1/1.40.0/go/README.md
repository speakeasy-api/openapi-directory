# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_media_v1/1.40.0/go
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

    req := operations.CreateMediaProcessorCreateMediaProcessorRequest{
        Extension: "corrupti",
        ExtensionContext: "provident",
        ExtensionEnvironment: "distinctio",
        MaxDuration: 844266,
        StatusCallback: "https://tidy-mascara.org",
        StatusCallbackMethod: "POST",
    }

    ctx := context.Background()
    res, err := s.CreateMediaProcessor(ctx, req, operations.CreateMediaProcessorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1MediaProcessor != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateMediaProcessor`
* `CreatePlayerStreamer`
* `CreatePlayerStreamerPlaybackGrant`
* `DeleteMediaRecording` - Deletes a MediaRecording resource identified by a SID.
* `FetchMediaProcessor` - Returns a single MediaProcessor resource identified by a SID.
* `FetchMediaRecording` - Returns a single MediaRecording resource identified by a SID.
* `FetchPlayerStreamer` - Returns a single PlayerStreamer resource identified by a SID.
* `FetchPlayerStreamerPlaybackGrant` - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* `ListMediaProcessor` - Returns a list of MediaProcessors.
* `ListMediaRecording` - Returns a list of MediaRecordings.
* `ListPlayerStreamer` - Returns a list of PlayerStreamers.
* `UpdateMediaProcessor` - Updates a MediaProcessor resource identified by a SID.
* `UpdatePlayerStreamer` - Updates a PlayerStreamer resource identified by a SID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
