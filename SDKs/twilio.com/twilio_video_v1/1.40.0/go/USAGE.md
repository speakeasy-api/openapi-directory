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

    req := operations.CreateCompositionRequest{
        Security: operations.CreateCompositionSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateCompositionCreateCompositionRequest{
            AudioSources: []string{
                "deserunt",
                "porro",
                "nulla",
            },
            AudioSourcesExcluded: []string{
                "vero",
                "perspiciatis",
                "nulla",
            },
            Format: "mp4",
            Resolution: "fuga",
            RoomSid: "facilis",
            StatusCallback: "http://humberto.biz",
            StatusCallbackMethod: "DELETE",
            Trim: false,
            VideoLayout: "inventore",
        },
    }

    ctx := context.Background()
    res, err := s.CreateComposition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Composition != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->