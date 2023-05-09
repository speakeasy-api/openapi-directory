# Transcript

### Available Operations

* [GetTranscriptByID](#gettranscriptbyid) - Get Transcript By Id

## GetTranscriptByID

Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.


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
    res, err := s.Transcript.GetTranscriptByID(ctx, operations.GetTranscriptByIDRequest{
        Accept: shared.AcceptTranscriptEnumApplicationVndRevTranscriptV10PlusJSON.ToPointer(),
        ID: "fa946773-9251-4aa5-ac3f-5ad019da1ffe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transcript != nil {
        // handle response
    }
}
```
