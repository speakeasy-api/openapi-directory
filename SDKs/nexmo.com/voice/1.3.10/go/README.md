# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nexmo.com/voice/1.3.10/go
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
    res, err := s.Calls.CreateCall(ctx, operations.CreateCallRequestBody{}, operations.CreateCallSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Calls](docs/calls/README.md)

* [CreateCall](docs/calls/README.md#createcall) - Create an outbound call
* [GetCall](docs/calls/README.md#getcall) - Get detail of a specific call
* [GetCalls](docs/calls/README.md#getcalls) - Get details of your calls
* [UpdateCall](docs/calls/README.md#updatecall) - Modify an in progress call

### [PlayDTMF](docs/playdtmf/README.md)

* [StartDTMF](docs/playdtmf/README.md#startdtmf) - Play DTMF tones into a call

### [PlayTTS](docs/playtts/README.md)

* [StartTalk](docs/playtts/README.md#starttalk) - Play text to speech into a call
* [StopTalk](docs/playtts/README.md#stoptalk) - Stop text to speech in a call

### [StreamAudio](docs/streamaudio/README.md)

* [StartStream](docs/streamaudio/README.md#startstream) - Play an audio file into a call
* [StopStream](docs/streamaudio/README.md#stopstream) - Stop playing an audio file into a call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
