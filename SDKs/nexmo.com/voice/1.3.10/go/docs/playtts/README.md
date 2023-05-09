# PlayTTS

## Overview

Start or stop playing Text to Speech in to an active call

### Available Operations

* [StartTalk](#starttalk) - Play text to speech into a call
* [StopTalk](#stoptalk) - Stop text to speech in a call

## StartTalk

Play text to speech into a call

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PlayTTS.StartTalk(ctx, operations.StartTalkRequest{
        StartTalkRequest: &shared.StartTalkRequest{
            Language: shared.LanguageEnumEnZa.ToPointer(),
            Level: sdk.String("0.4"),
            Loop: sdk.Int64(607831),
            Premium: sdk.Bool(false),
            Style: sdk.Int64(363711),
            Text: "Hello. How are you today?",
            VoiceName: shared.VoiceNameEnumInes.ToPointer(),
        },
        UUID: "907aff1a-3a2f-4a94-a773-9251aa52c3f5",
    }, operations.StartTalkSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTalkResponse != nil {
        // handle response
    }
}
```

## StopTalk

Stop text to speech in a call

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PlayTTS.StopTalk(ctx, operations.StopTalkRequest{
        UUID: "ad019da1-ffe7-48f0-97b0-074f15471b5e",
    }, operations.StopTalkSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopTalkResponse != nil {
        // handle response
    }
}
```
