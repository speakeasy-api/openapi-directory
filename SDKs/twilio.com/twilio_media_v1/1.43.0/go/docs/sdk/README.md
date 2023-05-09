# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateMediaProcessor](#createmediaprocessor)
* [CreatePlayerStreamer](#createplayerstreamer)
* [CreatePlayerStreamerPlaybackGrant](#createplayerstreamerplaybackgrant)
* [DeleteMediaRecording](#deletemediarecording) - Deletes a MediaRecording resource identified by a SID.
* [FetchMediaProcessor](#fetchmediaprocessor) - Returns a single MediaProcessor resource identified by a SID.
* [FetchMediaRecording](#fetchmediarecording) - Returns a single MediaRecording resource identified by a SID.
* [FetchPlayerStreamer](#fetchplayerstreamer) - Returns a single PlayerStreamer resource identified by a SID.
* [FetchPlayerStreamerPlaybackGrant](#fetchplayerstreamerplaybackgrant) - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* [ListMediaProcessor](#listmediaprocessor) - Returns a list of MediaProcessors.
* [ListMediaRecording](#listmediarecording) - Returns a list of MediaRecordings.
* [ListPlayerStreamer](#listplayerstreamer) - Returns a list of PlayerStreamers.
* [UpdateMediaProcessor](#updatemediaprocessor) - Updates a MediaProcessor resource identified by a SID.
* [UpdatePlayerStreamer](#updateplayerstreamer) - Updates a PlayerStreamer resource identified by a SID.

## CreateMediaProcessor

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
    res, err := s.SDK.CreateMediaProcessor(ctx, operations.CreateMediaProcessorCreateMediaProcessorRequest{
        Extension: "error",
        ExtensionContext: "deserunt",
        ExtensionEnvironment: sdk.String("suscipit"),
        MaxDuration: sdk.Int64(437587),
        StatusCallback: sdk.String("http://unique-baboon.org"),
        StatusCallbackMethod: operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnumGet.ToPointer(),
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

## CreatePlayerStreamer

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
    res, err := s.SDK.CreatePlayerStreamer(ctx, operations.CreatePlayerStreamerCreatePlayerStreamerRequest{
        MaxDuration: sdk.Int64(383441),
        StatusCallback: sdk.String("http://spotted-skyline.name"),
        StatusCallbackMethod: operations.CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnumPost.ToPointer(),
        Video: sdk.Bool(false),
    }, operations.CreatePlayerStreamerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1PlayerStreamer != nil {
        // handle response
    }
}
```

## CreatePlayerStreamerPlaybackGrant

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
    res, err := s.SDK.CreatePlayerStreamerPlaybackGrant(ctx, operations.CreatePlayerStreamerPlaybackGrantRequest{
        RequestBody: &operations.CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest{
            AccessControlAllowOrigin: sdk.String("excepturi"),
            TTL: sdk.Int64(392785),
        },
        Sid: "recusandae",
    }, operations.CreatePlayerStreamerPlaybackGrantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant != nil {
        // handle response
    }
}
```

## DeleteMediaRecording

Deletes a MediaRecording resource identified by a SID.

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
    res, err := s.SDK.DeleteMediaRecording(ctx, operations.DeleteMediaRecordingRequest{
        Sid: "temporibus",
    }, operations.DeleteMediaRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchMediaProcessor

Returns a single MediaProcessor resource identified by a SID.

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
    res, err := s.SDK.FetchMediaProcessor(ctx, operations.FetchMediaProcessorRequest{
        Sid: "ab",
    }, operations.FetchMediaProcessorSecurity{
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

## FetchMediaRecording

Returns a single MediaRecording resource identified by a SID.

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
    res, err := s.SDK.FetchMediaRecording(ctx, operations.FetchMediaRecordingRequest{
        Sid: "quis",
    }, operations.FetchMediaRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1MediaRecording != nil {
        // handle response
    }
}
```

## FetchPlayerStreamer

Returns a single PlayerStreamer resource identified by a SID.

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
    res, err := s.SDK.FetchPlayerStreamer(ctx, operations.FetchPlayerStreamerRequest{
        Sid: "veritatis",
    }, operations.FetchPlayerStreamerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1PlayerStreamer != nil {
        // handle response
    }
}
```

## FetchPlayerStreamerPlaybackGrant

**This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.

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
    res, err := s.SDK.FetchPlayerStreamerPlaybackGrant(ctx, operations.FetchPlayerStreamerPlaybackGrantRequest{
        Sid: "deserunt",
    }, operations.FetchPlayerStreamerPlaybackGrantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant != nil {
        // handle response
    }
}
```

## ListMediaProcessor

Returns a list of MediaProcessors.

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
    res, err := s.SDK.ListMediaProcessor(ctx, operations.ListMediaProcessorRequest{
        Order: shared.MediaProcessorEnumOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(368241),
        PageSize: sdk.Int64(832620),
        PageToken: sdk.String("sapiente"),
        Status: shared.MediaProcessorEnumStatusEnumEnded.ToPointer(),
    }, operations.ListMediaProcessorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMediaProcessorResponse != nil {
        // handle response
    }
}
```

## ListMediaRecording

Returns a list of MediaRecordings.

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
    res, err := s.SDK.ListMediaRecording(ctx, operations.ListMediaRecordingRequest{
        Order: shared.MediaRecordingEnumOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(870013),
        PageSize: sdk.Int64(870088),
        PageToken: sdk.String("maiores"),
        ProcessorSid: sdk.String("molestiae"),
        SourceSid: sdk.String("quod"),
        Status: shared.MediaRecordingEnumStatusEnumFailed.ToPointer(),
    }, operations.ListMediaRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMediaRecordingResponse != nil {
        // handle response
    }
}
```

## ListPlayerStreamer

Returns a list of PlayerStreamers.

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
    res, err := s.SDK.ListPlayerStreamer(ctx, operations.ListPlayerStreamerRequest{
        Order: shared.PlayerStreamerEnumOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(520478),
        PageSize: sdk.Int64(780529),
        PageToken: sdk.String("dolorum"),
        Status: shared.PlayerStreamerEnumStatusEnumCreated.ToPointer(),
    }, operations.ListPlayerStreamerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlayerStreamerResponse != nil {
        // handle response
    }
}
```

## UpdateMediaProcessor

Updates a MediaProcessor resource identified by a SID.

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
    res, err := s.SDK.UpdateMediaProcessor(ctx, operations.UpdateMediaProcessorRequest{
        RequestBody: &operations.UpdateMediaProcessorUpdateMediaProcessorRequest{
            Status: shared.MediaProcessorEnumUpdateStatusEnumEnded,
        },
        Sid: "nam",
    }, operations.UpdateMediaProcessorSecurity{
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

## UpdatePlayerStreamer

Updates a PlayerStreamer resource identified by a SID.

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
    res, err := s.SDK.UpdatePlayerStreamer(ctx, operations.UpdatePlayerStreamerRequest{
        RequestBody: &operations.UpdatePlayerStreamerUpdatePlayerStreamerRequest{
            Status: shared.PlayerStreamerEnumUpdateStatusEnumEnded,
        },
        Sid: "officia",
    }, operations.UpdatePlayerStreamerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaV1PlayerStreamer != nil {
        // handle response
    }
}
```
