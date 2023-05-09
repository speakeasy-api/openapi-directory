# Captions

### Available Operations

* [GetCaptions](#getcaptions) - Get Captions

## GetCaptions

Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.
Caption output format can be specified in the `Accept` header. Returns SRT by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.


### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Captions.GetCaptions(ctx, operations.GetCaptionsRequest{
        Accept: shared.AcceptCaptionEnumTextVtt.ToPointer(),
        ID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        SpeakerChannel: sdk.Int64(20218),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
