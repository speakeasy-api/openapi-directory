# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateComposition](#createcomposition)
* [CreateCompositionHook](#createcompositionhook)
* [CreateCompositionSettings](#createcompositionsettings)
* [CreateRecordingSettings](#createrecordingsettings)
* [CreateRoom](#createroom)
* [DeleteComposition](#deletecomposition) - Delete a Recording Composition resource identified by a Composition SID.
* [DeleteCompositionHook](#deletecompositionhook) - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* [DeleteRecording](#deleterecording) - Delete a Recording resource identified by a Recording SID.
* [DeleteRoomRecording](#deleteroomrecording)
* [FetchComposition](#fetchcomposition) - Returns a single Composition resource identified by a Composition SID.
* [FetchCompositionHook](#fetchcompositionhook) - Returns a single CompositionHook resource identified by a CompositionHook SID.
* [FetchCompositionSettings](#fetchcompositionsettings)
* [FetchRecording](#fetchrecording) - Returns a single Recording resource identified by a Recording SID.
* [FetchRecordingSettings](#fetchrecordingsettings)
* [FetchRoom](#fetchroom)
* [FetchRoomParticipant](#fetchroomparticipant)
* [FetchRoomParticipantPublishedTrack](#fetchroomparticipantpublishedtrack) - Returns a single Track resource represented by TrackName or SID.
* [FetchRoomParticipantSubscribeRule](#fetchroomparticipantsubscriberule) - Returns a list of Subscribe Rules for the Participant.
* [FetchRoomParticipantSubscribedTrack](#fetchroomparticipantsubscribedtrack) - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* [FetchRoomRecording](#fetchroomrecording)
* [FetchRoomRecordingRule](#fetchroomrecordingrule) - Returns a list of Recording Rules for the Room.
* [ListComposition](#listcomposition) - List of all Recording compositions.
* [ListCompositionHook](#listcompositionhook) - List of all Recording CompositionHook resources.
* [ListRecording](#listrecording) - List of all Track recordings.
* [ListRoom](#listroom)
* [ListRoomParticipant](#listroomparticipant)
* [ListRoomParticipantPublishedTrack](#listroomparticipantpublishedtrack) - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* [ListRoomParticipantSubscribedTrack](#listroomparticipantsubscribedtrack) - Returns a list of tracks that are subscribed for the participant.
* [ListRoomRecording](#listroomrecording)
* [UpdateCompositionHook](#updatecompositionhook)
* [UpdateRoom](#updateroom)
* [UpdateRoomParticipant](#updateroomparticipant)
* [UpdateRoomParticipantAnonymize](#updateroomparticipantanonymize)
* [UpdateRoomParticipantSubscribeRule](#updateroomparticipantsubscriberule) - Update the Subscribe Rules for the Participant
* [UpdateRoomRecordingRule](#updateroomrecordingrule) - Update the Recording Rules for the Room

## CreateComposition

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
    res, err := s.SDK.CreateComposition(ctx, operations.CreateCompositionCreateCompositionRequest{
        AudioSources: []string{
            "suscipit",
            "molestiae",
        },
        AudioSourcesExcluded: []string{
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
        },
        Format: shared.CompositionEnumFormatEnumMp4.ToPointer(),
        Resolution: sdk.String("recusandae"),
        RoomSid: "temporibus",
        StatusCallback: sdk.String("http://gloomy-blanket.name"),
        StatusCallbackMethod: operations.CreateCompositionCreateCompositionRequestStatusCallbackMethodEnumHead.ToPointer(),
        Trim: sdk.Bool(false),
        VideoLayout: sdk.String("ipsam"),
    }, operations.CreateCompositionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Composition != nil {
        // handle response
    }
}
```

## CreateCompositionHook

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
    res, err := s.SDK.CreateCompositionHook(ctx, operations.CreateCompositionHookCreateCompositionHookRequest{
        AudioSources: []string{
            "sapiente",
            "quo",
            "odit",
            "at",
        },
        AudioSourcesExcluded: []string{
            "maiores",
            "molestiae",
            "quod",
            "quod",
        },
        Enabled: sdk.Bool(false),
        Format: shared.CompositionHookEnumFormatEnumMp4.ToPointer(),
        FriendlyName: "totam",
        Resolution: sdk.String("porro"),
        StatusCallback: sdk.String("https://classic-ranch.name"),
        StatusCallbackMethod: operations.CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnumPatch.ToPointer(),
        Trim: sdk.Bool(false),
        VideoLayout: sdk.String("fugit"),
    }, operations.CreateCompositionHookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1CompositionHook != nil {
        // handle response
    }
}
```

## CreateCompositionSettings

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
    res, err := s.SDK.CreateCompositionSettings(ctx, operations.CreateCompositionSettingsCreateCompositionSettingsRequest{
        AwsCredentialsSid: sdk.String("deleniti"),
        AwsS3URL: sdk.String("https://sizzling-locust.com"),
        AwsStorageEnabled: sdk.Bool(false),
        EncryptionEnabled: sdk.Bool(false),
        EncryptionKeySid: sdk.String("commodi"),
        FriendlyName: "molestiae",
    }, operations.CreateCompositionSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1CompositionSettings != nil {
        // handle response
    }
}
```

## CreateRecordingSettings

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
    res, err := s.SDK.CreateRecordingSettings(ctx, operations.CreateRecordingSettingsCreateRecordingSettingsRequest{
        AwsCredentialsSid: sdk.String("modi"),
        AwsS3URL: sdk.String("http://soft-reminder.info"),
        AwsStorageEnabled: sdk.Bool(false),
        EncryptionEnabled: sdk.Bool(false),
        EncryptionKeySid: sdk.String("ipsum"),
        FriendlyName: "excepturi",
    }, operations.CreateRecordingSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RecordingSettings != nil {
        // handle response
    }
}
```

## CreateRoom

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
    res, err := s.SDK.CreateRoom(ctx, operations.CreateRoomCreateRoomRequest{
        AudioOnly: sdk.Bool(false),
        EmptyRoomTimeout: sdk.Int64(135218),
        EnableTurn: sdk.Bool(false),
        LargeRoom: sdk.Bool(false),
        MaxParticipantDuration: sdk.Int64(18789),
        MaxParticipants: sdk.Int64(324141),
        MediaRegion: sdk.String("natus"),
        RecordParticipantsOnConnect: sdk.Bool(false),
        RecordingRules: sdk.String("sed"),
        StatusCallback: sdk.String("https://ecstatic-original.info"),
        StatusCallbackMethod: operations.CreateRoomCreateRoomRequestStatusCallbackMethodEnumDelete.ToPointer(),
        Type: shared.RoomEnumRoomTypeEnumGroupSmall.ToPointer(),
        UniqueName: sdk.String("fuga"),
        UnusedRoomTimeout: sdk.Int64(449950),
        VideoCodecs: []shared.RoomEnumVideoCodecEnum{
            shared.RoomEnumVideoCodecEnumH264,
            shared.RoomEnumVideoCodecEnumVp8,
        },
    }, operations.CreateRoomSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Room != nil {
        // handle response
    }
}
```

## DeleteComposition

Delete a Recording Composition resource identified by a Composition SID.

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
    res, err := s.SDK.DeleteComposition(ctx, operations.DeleteCompositionRequest{
        Sid: "saepe",
    }, operations.DeleteCompositionSecurity{
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

## DeleteCompositionHook

Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.

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
    res, err := s.SDK.DeleteCompositionHook(ctx, operations.DeleteCompositionHookRequest{
        Sid: "quidem",
    }, operations.DeleteCompositionHookSecurity{
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

## DeleteRecording

Delete a Recording resource identified by a Recording SID.

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
    res, err := s.SDK.DeleteRecording(ctx, operations.DeleteRecordingRequest{
        Sid: "architecto",
    }, operations.DeleteRecordingSecurity{
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

## DeleteRoomRecording

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
    res, err := s.SDK.DeleteRoomRecording(ctx, operations.DeleteRoomRecordingRequest{
        RoomSid: "ipsa",
        Sid: "reiciendis",
    }, operations.DeleteRoomRecordingSecurity{
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

## FetchComposition

Returns a single Composition resource identified by a Composition SID.

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
    res, err := s.SDK.FetchComposition(ctx, operations.FetchCompositionRequest{
        Sid: "est",
    }, operations.FetchCompositionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Composition != nil {
        // handle response
    }
}
```

## FetchCompositionHook

Returns a single CompositionHook resource identified by a CompositionHook SID.

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
    res, err := s.SDK.FetchCompositionHook(ctx, operations.FetchCompositionHookRequest{
        Sid: "mollitia",
    }, operations.FetchCompositionHookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1CompositionHook != nil {
        // handle response
    }
}
```

## FetchCompositionSettings

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
    res, err := s.SDK.FetchCompositionSettings(ctx, operations.FetchCompositionSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1CompositionSettings != nil {
        // handle response
    }
}
```

## FetchRecording

Returns a single Recording resource identified by a Recording SID.

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
    res, err := s.SDK.FetchRecording(ctx, operations.FetchRecordingRequest{
        Sid: "laborum",
    }, operations.FetchRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Recording != nil {
        // handle response
    }
}
```

## FetchRecordingSettings

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
    res, err := s.SDK.FetchRecordingSettings(ctx, operations.FetchRecordingSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RecordingSettings != nil {
        // handle response
    }
}
```

## FetchRoom

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
    res, err := s.SDK.FetchRoom(ctx, operations.FetchRoomRequest{
        Sid: "dolores",
    }, operations.FetchRoomSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Room != nil {
        // handle response
    }
}
```

## FetchRoomParticipant

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
    res, err := s.SDK.FetchRoomParticipant(ctx, operations.FetchRoomParticipantRequest{
        RoomSid: "dolorem",
        Sid: "corporis",
    }, operations.FetchRoomParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomParticipant != nil {
        // handle response
    }
}
```

## FetchRoomParticipantPublishedTrack

Returns a single Track resource represented by TrackName or SID.

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
    res, err := s.SDK.FetchRoomParticipantPublishedTrack(ctx, operations.FetchRoomParticipantPublishedTrackRequest{
        ParticipantSid: "explicabo",
        RoomSid: "nobis",
        Sid: "enim",
    }, operations.FetchRoomParticipantPublishedTrackSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack != nil {
        // handle response
    }
}
```

## FetchRoomParticipantSubscribeRule

Returns a list of Subscribe Rules for the Participant.

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
    res, err := s.SDK.FetchRoomParticipantSubscribeRule(ctx, operations.FetchRoomParticipantSubscribeRuleRequest{
        ParticipantSid: "omnis",
        RoomSid: "nemo",
    }, operations.FetchRoomParticipantSubscribeRuleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule != nil {
        // handle response
    }
}
```

## FetchRoomParticipantSubscribedTrack

Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.

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
    res, err := s.SDK.FetchRoomParticipantSubscribedTrack(ctx, operations.FetchRoomParticipantSubscribedTrackRequest{
        ParticipantSid: "minima",
        RoomSid: "excepturi",
        Sid: "accusantium",
    }, operations.FetchRoomParticipantSubscribedTrackSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack != nil {
        // handle response
    }
}
```

## FetchRoomRecording

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
    res, err := s.SDK.FetchRoomRecording(ctx, operations.FetchRoomRecordingRequest{
        RoomSid: "iure",
        Sid: "culpa",
    }, operations.FetchRoomRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomRecording != nil {
        // handle response
    }
}
```

## FetchRoomRecordingRule

Returns a list of Recording Rules for the Room.

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
    res, err := s.SDK.FetchRoomRecordingRule(ctx, operations.FetchRoomRecordingRuleRequest{
        RoomSid: "doloribus",
    }, operations.FetchRoomRecordingRuleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomRecordingRule != nil {
        // handle response
    }
}
```

## ListComposition

List of all Recording compositions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListComposition(ctx, operations.ListCompositionRequest{
        DateCreatedAfter: types.MustTimeFromString("2022-09-11T06:15:44.019Z"),
        DateCreatedBefore: types.MustTimeFromString("2022-08-01T12:28:44.292Z"),
        Page: sdk.Int64(635059),
        PageSize: sdk.Int64(161309),
        PageToken: sdk.String("repellat"),
        RoomSid: sdk.String("mollitia"),
        Status: shared.CompositionEnumStatusEnumCompleted.ToPointer(),
    }, operations.ListCompositionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompositionResponse != nil {
        // handle response
    }
}
```

## ListCompositionHook

List of all Recording CompositionHook resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListCompositionHook(ctx, operations.ListCompositionHookRequest{
        DateCreatedAfter: types.MustTimeFromString("2022-08-02T18:07:51.623Z"),
        DateCreatedBefore: types.MustTimeFromString("2022-07-11T17:38:58.953Z"),
        Enabled: sdk.Bool(false),
        FriendlyName: sdk.String("velit"),
        Page: sdk.Int64(623510),
        PageSize: sdk.Int64(158969),
        PageToken: sdk.String("quis"),
    }, operations.ListCompositionHookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompositionHookResponse != nil {
        // handle response
    }
}
```

## ListRecording

List of all Track recordings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListRecording(ctx, operations.ListRecordingRequest{
        DateCreatedAfter: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
        DateCreatedBefore: types.MustTimeFromString("2022-05-14T10:37:30.872Z"),
        GroupingSid: []string{
            "quo",
        },
        MediaType: shared.RecordingEnumTypeEnumAudio.ToPointer(),
        Page: sdk.Int64(949572),
        PageSize: sdk.Int64(368725),
        PageToken: sdk.String("id"),
        SourceSid: sdk.String("possimus"),
        Status: shared.RecordingEnumStatusEnumProcessing.ToPointer(),
    }, operations.ListRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecordingResponse != nil {
        // handle response
    }
}
```

## ListRoom

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListRoom(ctx, operations.ListRoomRequest{
        DateCreatedAfter: types.MustTimeFromString("2022-05-18T15:52:05.226Z"),
        DateCreatedBefore: types.MustTimeFromString("2020-12-24T08:13:29.299Z"),
        Page: sdk.Int64(96098),
        PageSize: sdk.Int64(971945),
        PageToken: sdk.String("voluptatibus"),
        Status: shared.RoomEnumRoomStatusEnumFailed.ToPointer(),
        UniqueName: sdk.String("nihil"),
    }, operations.ListRoomSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoomResponse != nil {
        // handle response
    }
}
```

## ListRoomParticipant

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListRoomParticipant(ctx, operations.ListRoomParticipantRequest{
        DateCreatedAfter: types.MustTimeFromString("2021-01-17T23:08:44.457Z"),
        DateCreatedBefore: types.MustTimeFromString("2022-05-25T05:33:11.349Z"),
        Identity: sdk.String("voluptate"),
        Page: sdk.Int64(739264),
        PageSize: sdk.Int64(19987),
        PageToken: sdk.String("doloremque"),
        RoomSid: "reprehenderit",
        Status: shared.RoomParticipantEnumStatusEnumConnected.ToPointer(),
    }, operations.ListRoomParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoomParticipantResponse != nil {
        // handle response
    }
}
```

## ListRoomParticipantPublishedTrack

Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.

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
    res, err := s.SDK.ListRoomParticipantPublishedTrack(ctx, operations.ListRoomParticipantPublishedTrackRequest{
        Page: sdk.Int64(979587),
        PageSize: sdk.Int64(120196),
        PageToken: sdk.String("corporis"),
        ParticipantSid: "dolore",
        RoomSid: "iusto",
    }, operations.ListRoomParticipantPublishedTrackSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoomParticipantPublishedTrackResponse != nil {
        // handle response
    }
}
```

## ListRoomParticipantSubscribedTrack

Returns a list of tracks that are subscribed for the participant.

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
    res, err := s.SDK.ListRoomParticipantSubscribedTrack(ctx, operations.ListRoomParticipantSubscribedTrackRequest{
        Page: sdk.Int64(118727),
        PageSize: sdk.Int64(688661),
        PageToken: sdk.String("enim"),
        ParticipantSid: "accusamus",
        RoomSid: "commodi",
    }, operations.ListRoomParticipantSubscribedTrackSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoomParticipantSubscribedTrackResponse != nil {
        // handle response
    }
}
```

## ListRoomRecording

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListRoomRecording(ctx, operations.ListRoomRecordingRequest{
        DateCreatedAfter: types.MustTimeFromString("2022-10-22T18:12:12.288Z"),
        DateCreatedBefore: types.MustTimeFromString("2022-04-23T05:56:38.936Z"),
        Page: sdk.Int64(565189),
        PageSize: sdk.Int64(566602),
        PageToken: sdk.String("pariatur"),
        RoomSid: "modi",
        SourceSid: sdk.String("praesentium"),
        Status: shared.RoomRecordingEnumStatusEnumDeleted.ToPointer(),
    }, operations.ListRoomRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRoomRecordingResponse != nil {
        // handle response
    }
}
```

## UpdateCompositionHook

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
    res, err := s.SDK.UpdateCompositionHook(ctx, operations.UpdateCompositionHookRequest{
        RequestBody: &operations.UpdateCompositionHookUpdateCompositionHookRequest{
            AudioSources: []string{
                "quasi",
                "repudiandae",
                "sint",
                "veritatis",
            },
            AudioSourcesExcluded: []string{
                "incidunt",
                "enim",
                "consequatur",
                "est",
            },
            Enabled: sdk.Bool(false),
            Format: shared.CompositionHookEnumFormatEnumWebm.ToPointer(),
            FriendlyName: "explicabo",
            Resolution: sdk.String("deserunt"),
            StatusCallback: sdk.String("https://tempting-durian.biz"),
            StatusCallbackMethod: operations.UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnumGet.ToPointer(),
            Trim: sdk.Bool(false),
            VideoLayout: sdk.String("aliquid"),
        },
        Sid: "cupiditate",
    }, operations.UpdateCompositionHookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1CompositionHook != nil {
        // handle response
    }
}
```

## UpdateRoom

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
    res, err := s.SDK.UpdateRoom(ctx, operations.UpdateRoomRequest{
        RequestBody: &operations.UpdateRoomUpdateRoomRequest{
            Status: shared.RoomEnumRoomStatusEnumCompleted,
        },
        Sid: "perferendis",
    }, operations.UpdateRoomSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Room != nil {
        // handle response
    }
}
```

## UpdateRoomParticipant

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
    res, err := s.SDK.UpdateRoomParticipant(ctx, operations.UpdateRoomParticipantRequest{
        RequestBody: &operations.UpdateRoomParticipantUpdateRoomParticipantRequest{
            Status: shared.RoomParticipantEnumStatusEnumConnected.ToPointer(),
        },
        RoomSid: "assumenda",
        Sid: "ipsam",
    }, operations.UpdateRoomParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomParticipant != nil {
        // handle response
    }
}
```

## UpdateRoomParticipantAnonymize

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
    res, err := s.SDK.UpdateRoomParticipantAnonymize(ctx, operations.UpdateRoomParticipantAnonymizeRequest{
        RoomSid: "alias",
        Sid: "fugit",
    }, operations.UpdateRoomParticipantAnonymizeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomParticipantRoomParticipantAnonymize != nil {
        // handle response
    }
}
```

## UpdateRoomParticipantSubscribeRule

Update the Subscribe Rules for the Participant

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
    res, err := s.SDK.UpdateRoomParticipantSubscribeRule(ctx, operations.UpdateRoomParticipantSubscribeRuleRequest{
        ParticipantSid: "dolorum",
        RequestBody: &operations.UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest{
            Rules: sdk.String("excepturi"),
        },
        RoomSid: "tempora",
    }, operations.UpdateRoomParticipantSubscribeRuleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule != nil {
        // handle response
    }
}
```

## UpdateRoomRecordingRule

Update the Recording Rules for the Room

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
    res, err := s.SDK.UpdateRoomRecordingRule(ctx, operations.UpdateRoomRecordingRuleRequest{
        RequestBody: &operations.UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest{
            Rules: sdk.String("facilis"),
        },
        RoomSid: "tempore",
    }, operations.UpdateRoomRecordingRuleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1RoomRoomRecordingRule != nil {
        // handle response
    }
}
```
