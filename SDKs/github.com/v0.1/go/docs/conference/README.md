# Conference

## Overview

API methods responsible for managing conference rooms

### Available Operations

* [PostV01ConferenceDeaf](#postv01conferencedeaf) - /v0.1/ConferenceDeaf/
* [PostV01ConferenceHangup](#postv01conferencehangup) - /v0.1/ConferenceHangup/
* [PostV01ConferenceKick](#postv01conferencekick) - /v0.1/ConferenceKick/
* [PostV01ConferenceList](#postv01conferencelist) - /v0.1/ConferenceList/
* [PostV01ConferenceListMembers](#postv01conferencelistmembers) - /v0.1/ConferenceListMembers/
* [PostV01ConferenceMute](#postv01conferencemute) - /v0.1/ConferenceMute/
* [PostV01ConferencePlay](#postv01conferenceplay) - /v0.1/ConferencePlay/
* [PostV01ConferenceRecordStart](#postv01conferencerecordstart) - /v0.1/ConferenceRecordStart/
* [PostV01ConferenceRecordStop](#postv01conferencerecordstop) - /v0.1/ConferenceRecordStop/
* [PostV01ConferenceSpeak](#postv01conferencespeak) - /v0.1/ConferenceSpeak/
* [PostV01ConferenceUndeaf](#postv01conferenceundeaf) - /v0.1/ConferenceUndeaf/
* [PostV01ConferenceUnmute](#postv01conferenceunmute) - /v0.1/ConferenceUnmute/

## PostV01ConferenceDeaf

Blocks audio to one or more conference members

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceDeaf(ctx, shared.ConferenceDeafParameters{
        ConferenceName: "Room402",
        MemberID: "13,42",
    }, operations.PostV01ConferenceDeafSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceDeafResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceHangup

Kicks one or more conference members, without playing the kick sound

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceHangup(ctx, shared.ConferenceHangupParameters{
        ConferenceName: "Room402",
        MemberID: "13,42",
    }, operations.PostV01ConferenceHangupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceHangupResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceKick

Kicks one or more conference members

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceKick(ctx, shared.ConferenceKickParameters{
        ConferenceName: "Room402",
        MemberID: "13,42",
    }, operations.PostV01ConferenceKickSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceKickResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceList

Returns a list of all established conferences

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceList(ctx, shared.ConferenceListParameters{
        CallUUIDFilter: sdk.String("872066e1-fd89-4c57-8733-93c113980bc9,55e4214a-604a-4b56-82e4-97834b0d524e"),
        DeafFilter: sdk.Bool(true),
        MemberFilter: sdk.String("13,42"),
        MutedFilter: sdk.Bool(true),
    }, operations.PostV01ConferenceListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceListResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceListMembers

Retrieves the member list for a given conference

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceListMembers(ctx, shared.ConferenceListMembersParameters{
        CallUUIDFilter: sdk.String("872066e1-fd89-4c57-8733-93c113980bc9,55e4214a-604a-4b56-82e4-97834b0d524e"),
        ConferenceName: "Room402",
        DeafFilter: sdk.Bool(true),
        MemberFilter: sdk.String("13,42"),
        MutedFilter: sdk.Bool(true),
    }, operations.PostV01ConferenceListMembersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceListMembersResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceMute

Blocks audio from one or more conference members

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceMute(ctx, shared.ConferenceMuteParameters{
        ConferenceName: "Room402",
        MemberID: "13,42",
    }, operations.PostV01ConferenceMuteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceMuteResponse != nil {
        // handle response
    }
}
```

## PostV01ConferencePlay

Plays media to one or more conference members

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferencePlay(ctx, shared.ConferencePlayParameters{
        ConferenceName: "Room402",
        FilePath: "/var/local/media/sample.wav",
        MemberID: "13,42",
    }, operations.PostV01ConferencePlaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferencePlayResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceRecordStart

Initiates a conference recording

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceRecordStart(ctx, shared.ConferenceRecordStartParameters{
        ConferenceName: "Room402",
        FileFormat: shared.ConferenceRecordStartParametersFileFormatEnumWav.ToPointer(),
        FileName: sdk.String("Room402Rec"),
        FilePath: sdk.String("/tmp/recordings"),
    }, operations.PostV01ConferenceRecordStartSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceRecordStartResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceRecordStop

Stops a conference recording

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceRecordStop(ctx, shared.ConferenceRecordStopParameters{
        ConferenceName: "Room402",
        RecordFile: "/tmp/recording/sample.wav",
    }, operations.PostV01ConferenceRecordStopSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceRecordStopResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceSpeak

Plays synthesized speech into a conference

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceSpeak(ctx, shared.ConferenceSpeakParameters{
        ConferenceName: "Room402",
        MemberID: "13,42",
        Text: "The quick brown fox jumps over the lazy dog",
    }, operations.PostV01ConferenceSpeakSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceSpeakResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceUndeaf

Restores audio to one or more conference members

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceUndeaf(ctx, shared.ConferenceUndeafParameters{
        ConferenceName: "Room402",
        MemberID: "13,42",
    }, operations.PostV01ConferenceUndeafSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceUndeafResponse != nil {
        // handle response
    }
}
```

## PostV01ConferenceUnmute

Restores audio from one or more conference members

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conference.PostV01ConferenceUnmute(ctx, shared.ConferenceUnmuteParameters{
        ConferenceName: "Room402",
        MemberID: "13,42",
    }, operations.PostV01ConferenceUnmuteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConferenceUnmuteResponse != nil {
        // handle response
    }
}
```
