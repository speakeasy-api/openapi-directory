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
                "provident",
                "distinctio",
                "quibusdam",
            },
            AudioSourcesExcluded: []string{
                "nulla",
                "corrupti",
                "illum",
            },
            Format: "mp4",
            Resolution: "error",
            RoomSid: "deserunt",
            StatusCallback: "http://innocent-effect.org",
            StatusCallbackMethod: "HEAD",
            Trim: false,
            VideoLayout: "delectus",
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