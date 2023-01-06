<!-- Start SDK Example Usage -->
```go
package main

import (
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
                "modi",
            },
            AudioSourcesExcluded: []string{
                "fuga",
                "incidunt",
                "autem",
            },
            Format: "mp4",
            Resolution: "accusamus",
            RoomSid: "architecto",
            StatusCallback: "praesentium",
            StatusCallbackMethod: "HEAD",
            Trim: false,
            VideoLayout: "numquam",
        },
    }
    
    res, err := s.CreateComposition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Composition != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->