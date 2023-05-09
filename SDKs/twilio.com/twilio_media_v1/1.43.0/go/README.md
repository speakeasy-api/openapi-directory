# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_media_v1/1.43.0/go
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
    res, err := s.CreateMediaProcessor(ctx, operations.CreateMediaProcessorCreateMediaProcessorRequest{
        Extension: "corrupti",
        ExtensionContext: "provident",
        ExtensionEnvironment: sdk.String("distinctio"),
        MaxDuration: sdk.Int64(844266),
        StatusCallback: sdk.String("https://tidy-mascara.org"),
        StatusCallbackMethod: operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumPost.ToPointer(),
    }, operations.CreateMediaProcessorSecurity{
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

### [SDK](docs/sdk/README.md)

* [CreateMediaProcessor](docs/sdk/README.md#createmediaprocessor)
* [CreatePlayerStreamer](docs/sdk/README.md#createplayerstreamer)
* [CreatePlayerStreamerPlaybackGrant](docs/sdk/README.md#createplayerstreamerplaybackgrant)
* [DeleteMediaRecording](docs/sdk/README.md#deletemediarecording) - Deletes a MediaRecording resource identified by a SID.
* [FetchMediaProcessor](docs/sdk/README.md#fetchmediaprocessor) - Returns a single MediaProcessor resource identified by a SID.
* [FetchMediaRecording](docs/sdk/README.md#fetchmediarecording) - Returns a single MediaRecording resource identified by a SID.
* [FetchPlayerStreamer](docs/sdk/README.md#fetchplayerstreamer) - Returns a single PlayerStreamer resource identified by a SID.
* [FetchPlayerStreamerPlaybackGrant](docs/sdk/README.md#fetchplayerstreamerplaybackgrant) - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* [ListMediaProcessor](docs/sdk/README.md#listmediaprocessor) - Returns a list of MediaProcessors.
* [ListMediaRecording](docs/sdk/README.md#listmediarecording) - Returns a list of MediaRecordings.
* [ListPlayerStreamer](docs/sdk/README.md#listplayerstreamer) - Returns a list of PlayerStreamers.
* [UpdateMediaProcessor](docs/sdk/README.md#updatemediaprocessor) - Updates a MediaProcessor resource identified by a SID.
* [UpdatePlayerStreamer](docs/sdk/README.md#updateplayerstreamer) - Updates a PlayerStreamer resource identified by a SID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
