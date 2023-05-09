# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [FetchAccountSettings](#fetchaccountsettings)
* [FetchAnnotation](#fetchannotation) - Fetch a specific Annotation.
* [FetchCall](#fetchcall)
* [FetchConference](#fetchconference) - Fetch a specific Conference.
* [FetchConferenceParticipant](#fetchconferenceparticipant) - Fetch a specific Conference Participant Summary.
* [FetchSummary](#fetchsummary)
* [FetchVideoParticipantSummary](#fetchvideoparticipantsummary) - Get Video Log Analyzer data for a Room Participant.
* [FetchVideoRoomSummary](#fetchvideoroomsummary) - Get Video Log Analyzer data for a Room.
* [ListCallSummaries](#listcallsummaries)
* [ListConference](#listconference) - Retrieve a list of Conferences.
* [ListConferenceParticipant](#listconferenceparticipant) - List Conference Participants.
* [ListEvent](#listevent)
* [ListMetric](#listmetric)
* [ListVideoParticipantSummary](#listvideoparticipantsummary) - Get a list of room participants.
* [ListVideoRoomSummary](#listvideoroomsummary) - Get a list of Programmable Video Rooms.
* [UpdateAccountSettings](#updateaccountsettings)
* [UpdateAnnotation](#updateannotation) - Create/Update the annotation for the call

## FetchAccountSettings

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
    res, err := s.SDK.FetchAccountSettings(ctx, operations.FetchAccountSettingsRequest{
        SubaccountSid: sdk.String("provident"),
    }, operations.FetchAccountSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1AccountSettings != nil {
        // handle response
    }
}
```

## FetchAnnotation

Fetch a specific Annotation.

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
    res, err := s.SDK.FetchAnnotation(ctx, operations.FetchAnnotationRequest{
        CallSid: "distinctio",
    }, operations.FetchAnnotationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1CallAnnotation != nil {
        // handle response
    }
}
```

## FetchCall

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
    res, err := s.SDK.FetchCall(ctx, operations.FetchCallRequest{
        Sid: "quibusdam",
    }, operations.FetchCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1Call != nil {
        // handle response
    }
}
```

## FetchConference

Fetch a specific Conference.

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
    res, err := s.SDK.FetchConference(ctx, operations.FetchConferenceRequest{
        ConferenceSid: "unde",
    }, operations.FetchConferenceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1Conference != nil {
        // handle response
    }
}
```

## FetchConferenceParticipant

Fetch a specific Conference Participant Summary.

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
    res, err := s.SDK.FetchConferenceParticipant(ctx, operations.FetchConferenceParticipantRequest{
        ConferenceSid: "nulla",
        Events: sdk.String("corrupti"),
        Metrics: sdk.String("illum"),
        ParticipantSid: "vel",
    }, operations.FetchConferenceParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1ConferenceConferenceParticipant != nil {
        // handle response
    }
}
```

## FetchSummary

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
    res, err := s.SDK.FetchSummary(ctx, operations.FetchSummaryRequest{
        CallSid: "error",
        ProcessingState: shared.SummaryEnumProcessingStateEnumPartial.ToPointer(),
    }, operations.FetchSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1CallSummary != nil {
        // handle response
    }
}
```

## FetchVideoParticipantSummary

Get Video Log Analyzer data for a Room Participant.

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
    res, err := s.SDK.FetchVideoParticipantSummary(ctx, operations.FetchVideoParticipantSummaryRequest{
        ParticipantSid: "suscipit",
        RoomSid: "iure",
    }, operations.FetchVideoParticipantSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1VideoRoomSummaryVideoParticipantSummary != nil {
        // handle response
    }
}
```

## FetchVideoRoomSummary

Get Video Log Analyzer data for a Room.

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
    res, err := s.SDK.FetchVideoRoomSummary(ctx, operations.FetchVideoRoomSummaryRequest{
        RoomSid: "magnam",
    }, operations.FetchVideoRoomSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1VideoRoomSummary != nil {
        // handle response
    }
}
```

## ListCallSummaries

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
    res, err := s.SDK.ListCallSummaries(ctx, operations.ListCallSummariesRequest{
        AbnormalSession: sdk.Bool(false),
        AnsweredBy: shared.CallSummariesEnumAnsweredByEnumFax.ToPointer(),
        Branded: sdk.Bool(false),
        CallState: sdk.String("ipsa"),
        CallType: sdk.String("delectus"),
        Direction: sdk.String("tempora"),
        EndTime: sdk.String("suscipit"),
        From: sdk.String("molestiae"),
        FromCarrier: sdk.String("minus"),
        FromCountryCode: sdk.String("placeat"),
        HasTag: sdk.Bool(false),
        Page: sdk.Int64(528895),
        PageSize: sdk.Int64(479977),
        PageToken: sdk.String("excepturi"),
        ProcessingState: shared.CallSummariesEnumProcessingStateRequestEnumStarted.ToPointer(),
        SortBy: shared.CallSummariesEnumSortByEnumEndTime.ToPointer(),
        StartTime: sdk.String("temporibus"),
        Subaccount: sdk.String("ab"),
        To: sdk.String("quis"),
        ToCarrier: sdk.String("veritatis"),
        ToCountryCode: sdk.String("deserunt"),
        VerifiedCaller: sdk.Bool(false),
    }, operations.ListCallSummariesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCallSummariesResponse != nil {
        // handle response
    }
}
```

## ListConference

Retrieve a list of Conferences.

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
    res, err := s.SDK.ListConference(ctx, operations.ListConferenceRequest{
        ConferenceSid: sdk.String("perferendis"),
        CreatedAfter: sdk.String("ipsam"),
        CreatedBefore: sdk.String("repellendus"),
        DetectedIssues: sdk.String("sapiente"),
        EndReason: sdk.String("quo"),
        FriendlyName: sdk.String("odit"),
        MixerRegion: sdk.String("at"),
        Page: sdk.Int64(870088),
        PageSize: sdk.Int64(978619),
        PageToken: sdk.String("molestiae"),
        Status: sdk.String("quod"),
        Subaccount: sdk.String("quod"),
        Tags: sdk.String("esse"),
    }, operations.ListConferenceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConferenceResponse != nil {
        // handle response
    }
}
```

## ListConferenceParticipant

List Conference Participants.

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
    res, err := s.SDK.ListConferenceParticipant(ctx, operations.ListConferenceParticipantRequest{
        ConferenceSid: "totam",
        Events: sdk.String("porro"),
        Label: sdk.String("dolorum"),
        Page: sdk.Int64(118274),
        PageSize: sdk.Int64(720633),
        PageToken: sdk.String("officia"),
        ParticipantSid: sdk.String("occaecati"),
    }, operations.ListConferenceParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConferenceParticipantResponse != nil {
        // handle response
    }
}
```

## ListEvent

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
    res, err := s.SDK.ListEvent(ctx, operations.ListEventRequest{
        CallSid: "fugit",
        Edge: shared.EventEnumTwilioEdgeEnumSipEdge.ToPointer(),
        Page: sdk.Int64(944669),
        PageSize: sdk.Int64(758616),
        PageToken: sdk.String("totam"),
    }, operations.ListEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventResponse != nil {
        // handle response
    }
}
```

## ListMetric

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
    res, err := s.SDK.ListMetric(ctx, operations.ListMetricRequest{
        CallSid: "beatae",
        Direction: shared.MetricEnumStreamDirectionEnumInbound.ToPointer(),
        Edge: shared.MetricEnumTwilioEdgeEnumSipEdge.ToPointer(),
        Page: sdk.Int64(264555),
        PageSize: sdk.Int64(186332),
        PageToken: sdk.String("impedit"),
    }, operations.ListMetricSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMetricResponse != nil {
        // handle response
    }
}
```

## ListVideoParticipantSummary

Get a list of room participants.

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
    res, err := s.SDK.ListVideoParticipantSummary(ctx, operations.ListVideoParticipantSummaryRequest{
        Page: sdk.Int64(736918),
        PageSize: sdk.Int64(456150),
        PageToken: sdk.String("ipsum"),
        RoomSid: "excepturi",
    }, operations.ListVideoParticipantSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVideoParticipantSummaryResponse != nil {
        // handle response
    }
}
```

## ListVideoRoomSummary

Get a list of Programmable Video Rooms.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListVideoRoomSummary(ctx, operations.ListVideoRoomSummaryRequest{
        Codec: []shared.VideoRoomSummaryEnumCodecEnum{
            shared.VideoRoomSummaryEnumCodecEnumVp8,
        },
        CreatedAfter: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
        CreatedBefore: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
        Page: sdk.Int64(222321),
        PageSize: sdk.Int64(616934),
        PageToken: sdk.String("laboriosam"),
        RoomName: sdk.String("hic"),
        RoomType: []shared.VideoRoomSummaryEnumRoomTypeEnum{
            shared.VideoRoomSummaryEnumRoomTypeEnumGroup,
            shared.VideoRoomSummaryEnumRoomTypeEnumPeerToPeer,
            shared.VideoRoomSummaryEnumRoomTypeEnumPeerToPeer,
            shared.VideoRoomSummaryEnumRoomTypeEnumGroup,
        },
    }, operations.ListVideoRoomSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVideoRoomSummaryResponse != nil {
        // handle response
    }
}
```

## UpdateAccountSettings

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
    res, err := s.SDK.UpdateAccountSettings(ctx, operations.UpdateAccountSettingsUpdateAccountSettingsRequest{
        AdvancedFeatures: sdk.Bool(false),
        SubaccountSid: sdk.String("iure"),
        VoiceTrace: sdk.Bool(false),
    }, operations.UpdateAccountSettingsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1AccountSettings != nil {
        // handle response
    }
}
```

## UpdateAnnotation

Create/Update the annotation for the call

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
    res, err := s.SDK.UpdateAnnotation(ctx, operations.UpdateAnnotationRequest{
        CallSid: "saepe",
        RequestBody: &operations.UpdateAnnotationUpdateAnnotationRequest{
            AnsweredBy: shared.AnnotationEnumAnsweredByEnumMachine.ToPointer(),
            CallScore: sdk.Int64(99280),
            Comment: sdk.String("ipsa"),
            ConnectivityIssue: shared.AnnotationEnumConnectivityIssueEnumNumberReachability.ToPointer(),
            Incident: sdk.String("est"),
            QualityIssues: sdk.String("mollitia"),
            Spam: sdk.Bool(false),
        },
    }, operations.UpdateAnnotationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1CallAnnotation != nil {
        // handle response
    }
}
```
