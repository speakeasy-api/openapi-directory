# Calls

## Overview

Create phone calls via an API

### Available Operations

* [GetCalls](#getcalls) - Validate a phone number by calling it once
* [PostCalls](#postcalls) - Create phone calls with or without announcements and scheduled hangups

## GetCalls

Validate a phone number by calling it once

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Calls.GetCalls(ctx, operations.GetCallsRequest{
        Validate: sdk.Int64(623564),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OneGetResponses200ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PostCalls

Create phone calls with or without announcements and scheduled hangups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Calls.PostCalls(ctx, operations.PostCallsRequestBody{
        AnnouncementAt: sdk.String("180"),
        AnnouncementID: sdk.String("hgCRVfWB4hGRSEAkICyA"),
        CallerID: "1224900123",
        From: "442035159999",
        HangupAnnouncementID: sdk.String("RVfWB4hGRSEAkIXYCyA"),
        HangupAt: sdk.String("300"),
        Options: &operations.PostCallsRequestBodyOptions{
            ALegCallerID: sdk.String("1224900123"),
            ALegOnly: sdk.Int64(1),
            CancelKey: sdk.Int64(2),
            ConnectKey: sdk.Int64(1),
            PlayAudio: []PostCallsRequestBodyOptionsPlayAudio{
                operations.PostCallsRequestBodyOptionsPlayAudio{
                    AnnouncementID: sdk.String("zgL4QmsB6hGmv5YnsW_4lQ"),
                },
                operations.PostCallsRequestBodyOptionsPlayAudio{
                    AnnouncementID: sdk.String("zgL4QmsB6hGmv5YnsW_4lQ"),
                },
                operations.PostCallsRequestBodyOptionsPlayAudio{
                    AnnouncementID: sdk.String("zgL4QmsB6hGmv5YnsW_4lQ"),
                },
            },
        },
        To: "442035159995",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCalls202ApplicationJSONObject != nil {
        // handle response
    }
}
```
