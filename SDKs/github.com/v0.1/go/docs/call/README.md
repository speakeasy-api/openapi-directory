# Call

## Overview

API methods responsible for spawning and manipulating individual calls

### Available Operations

* [PostV01BulkCall](#postv01bulkcall) - /v0.1/BulkCall/
* [PostV01Call](#postv01call) - /v0.1/Call/
* [PostV01CancelScheduledHangup](#postv01cancelscheduledhangup) - /v0.1/CancelScheduledHangup/
* [PostV01CancelScheduledPlay](#postv01cancelscheduledplay) - /v0.1/CancelScheduledPlay/
* [PostV01GroupCall](#postv01groupcall) - /v0.1/GroupCall/
* [PostV01HangupAllCalls](#postv01hangupallcalls) - /v0.1/HangupAllCalls/
* [PostV01HangupCall](#postv01hangupcall) - /v0.1/HangupCall/
* [PostV01Play](#postv01play) - /v0.1/Play/
* [PostV01PlayStop](#postv01playstop) - /v0.1/PlayStop/
* [PostV01RecordStart](#postv01recordstart) - /v0.1/RecordStart/
* [PostV01RecordStop](#postv01recordstop) - /v0.1/RecordStop/
* [PostV01ScheduleHangup](#postv01schedulehangup) - /v0.1/ScheduleHangup/
* [PostV01SchedulePlay](#postv01scheduleplay) - /v0.1/SchedulePlay/
* [PostV01SendDigits](#postv01senddigits) - /v0.1/SendDigits/
* [PostV01SoundTouch](#postv01soundtouch) - /v0.1/SoundTouch/
* [PostV01SoundTouchStop](#postv01soundtouchstop) - /v0.1/SoundTouchStop/
* [PostV01TransferCall](#postv01transfercall) - /v0.1/TransferCall/

## PostV01BulkCall

Initiates multiple concurrent outbound calls

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
    res, err := s.Call.PostV01BulkCall(ctx, shared.BulkCallParameters{
        AnswerURL: "https://example.com/answer/",
        CallerName: sdk.String("Bulk Test"),
        ConfirmKey: sdk.String("1"),
        ConfirmSound: sdk.String("https://example.com/confirm_sound/"),
        CoreUUID: sdk.String("2e8e6275-7cfe-4e3c-a8d6-25316b4519c7"),
        Delimiter: "<",
        ExtraDialString: sdk.String("bridge_early_media=true,hangup_after_bridge=true"),
        From: "15551234567",
        GatewayCodecs: sdk.String("'PCMA,PCMU','G729,PCMU','PCMA,G729'"),
        GatewayRetries: sdk.String("3,1,2"),
        GatewayTimeouts: sdk.String("10,30,20"),
        Gateways: "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
        HangupOnRing: sdk.Int64(90),
        HangupURL: sdk.String("https://example.com/hangup/"),
        RejectCauses: sdk.String("USER_BUSY,NO_ANSWER"),
        RingURL: sdk.String("https://example.com/ring/"),
        SendDigits: sdk.String("1w2w3W#*@1500"),
        SendOnPreanswer: sdk.Bool(false),
        TimeLimit: sdk.Int64(90),
        To: "15557654321",
    }, operations.PostV01BulkCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCallResponse != nil {
        // handle response
    }
}
```

## PostV01Call

Initiates an outbound call

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
    res, err := s.Call.PostV01Call(ctx, shared.CallParameters{
        AnswerURL: "https://example.com/answer/",
        AsyncAMD: sdk.Bool(true),
        AsyncAmdStatusCallback: sdk.String("corrupti"),
        AsyncAmdStatusCallbackMethod: shared.CallParametersAsyncAmdStatusCallbackMethodEnumGet.ToPointer(),
        CallerName: sdk.String("Test"),
        CoreUUID: sdk.String("45521fc6-a4b3-42b6-96ad-9136256be216"),
        ExtraDialString: sdk.String("bridge_early_media=true,hangup_after_bridge=true"),
        From: "15551234567",
        GatewayCodecs: sdk.String("'PCMA,PCMU','G729,PCMU','PCMA,G729'"),
        GatewayRetries: sdk.String("3,1,2"),
        GatewayTimeouts: sdk.String("10,30,20"),
        Gateways: "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
        HangupOnRing: sdk.Int64(90),
        HangupURL: sdk.String("https://example.com/hangup/"),
        MachineDetection: shared.CallParametersMachineDetectionEnumEnable.ToPointer(),
        MachineDetectionSilenceTimeout: sdk.Int64(3000),
        MachineDetectionSpeechEndThreshold: sdk.Int64(1000),
        MachineDetectionSpeechThreshold: sdk.Int64(2000),
        MachineDetectionTimeout: sdk.Int64(5),
        RingURL: sdk.String("https://example.com/ring/"),
        SendDigits: sdk.String("1w2w3W#*@1500"),
        SendOnPreanswer: sdk.Bool(false),
        TimeLimit: sdk.Int64(90),
        To: "15557654321",
    }, operations.PostV01CallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CallResponse != nil {
        // handle response
    }
}
```

## PostV01CancelScheduledHangup

Cancels a scheduled hangup for a call

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
    res, err := s.Call.PostV01CancelScheduledHangup(ctx, shared.CancelScheduledHangupParameters{
        SchedHangupID: "ea428fbd-ac9b-498c-8bb2-a36ac49f10fd",
    }, operations.PostV01CancelScheduledHangupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelScheduledHangupResponse != nil {
        // handle response
    }
}
```

## PostV01CancelScheduledPlay

Cancels a scheduled playback request

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
    res, err := s.Call.PostV01CancelScheduledPlay(ctx, shared.CancelScheduledPlayParameters{
        SchedPlayID: "ea428fbd-ac9b-498c-8bb2-a36ac49f10fd",
    }, operations.PostV01CancelScheduledPlaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelScheduledPlayResponse != nil {
        // handle response
    }
}
```

## PostV01GroupCall

Initiate multiple racing outbound calls

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
    res, err := s.Call.PostV01GroupCall(ctx, shared.GroupCallParameters{
        AnswerURL: "https://example.com/answer/",
        CallerName: sdk.String("Group Test"),
        ConfirmKey: sdk.String("1"),
        ConfirmSound: sdk.String("https://example.com/confirm_sound/"),
        CoreUUID: sdk.String("46ae8cd9-c28e-447d-ba40-a09cba49d474"),
        Delimiter: "<",
        ExtraDialString: sdk.String("bridge_early_media=true,hangup_after_bridge=true"),
        From: "15551234567",
        GatewayCodecs: sdk.String("'PCMA,PCMU','G729,PCMU','PCMA,G729'"),
        GatewayRetries: sdk.String("3,1,2"),
        GatewayTimeouts: sdk.String("10,30,20"),
        Gateways: "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
        HangupOnRing: sdk.Int64(90),
        HangupURL: sdk.String("https://example.com/hangup/"),
        RejectCauses: sdk.String("USER_BUSY,NO_ANSWER"),
        RingURL: sdk.String("https://example.com/ring/"),
        SendDigits: sdk.String("1w2w3W#*@1500"),
        SendOnPreanswer: sdk.Bool(false),
        TimeLimit: sdk.Int64(90),
        To: "15557654321",
    }, operations.PostV01GroupCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupCallResponse != nil {
        // handle response
    }
}
```

## PostV01HangupAllCalls

Hangs up all established calls

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
    res, err := s.Call.PostV01HangupAllCalls(ctx, operations.PostV01HangupAllCallsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HangupAllCallsResponse != nil {
        // handle response
    }
}
```

## PostV01HangupCall

Hangs up a specific call

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
    res, err := s.Call.PostV01HangupCall(ctx, shared.HangupCallParameters{
        CallUUID: sdk.String("b0519011-6987-47c8-9270-a820e0978acd"),
        RequestUUID: sdk.String("c059b96b-04d8-414b-920c-7b373bff916e"),
    }, operations.PostV01HangupCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HangupCallResponse != nil {
        // handle response
    }
}
```

## PostV01Play

Plays media into a live call

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
    res, err := s.Call.PostV01Play(ctx, shared.PlayParameters{
        CallUUID: "e69b32da-3243-4ba6-a965-5d2f64a57d48",
        Legs: shared.PlayParametersLegsEnumBoth.ToPointer(),
        Length: sdk.Int64(90),
        Loop: sdk.Bool(true),
        Mix: sdk.Bool(false),
        Sounds: "/tmp/prompt.wav",
    }, operations.PostV01PlaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayResponse != nil {
        // handle response
    }
}
```

## PostV01PlayStop

Interrupts media playback on a given call

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
    res, err := s.Call.PostV01PlayStop(ctx, shared.PlayStopParameters{
        CallUUID: "441afb63-85bc-49d4-9ac8-8459f9bf5e6b",
    }, operations.PostV01PlayStopSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayStopResponse != nil {
        // handle response
    }
}
```

## PostV01RecordStart

Initiates recording of a given call

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
    res, err := s.Call.PostV01RecordStart(ctx, shared.RecordStartParameters{
        CallUUID: sdk.String("052d04e4-019a-45ff-a562-f74d4ae99ea2"),
        FileFormat: shared.RecordStartParametersFileFormatEnumWav.ToPointer(),
        FileName: sdk.String("sample_recording"),
        FilePath: sdk.String("/tmp/recordings"),
        TimeLimit: sdk.Int64(89),
    }, operations.PostV01RecordStartSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecordStartResponse != nil {
        // handle response
    }
}
```

## PostV01RecordStop

Stops the recording of a given call

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
    res, err := s.Call.PostV01RecordStop(ctx, shared.RecordStopParameters{
        CallUUID: "eacfa857-4001-4379-b79a-c7ef6d963bcb",
        RecordFile: "/tmp/recording/sample.wav",
    }, operations.PostV01RecordStopSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecordStopResponse != nil {
        // handle response
    }
}
```

## PostV01ScheduleHangup

Schedules a hangup for a specific call

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
    res, err := s.Call.PostV01ScheduleHangup(ctx, shared.ScheduleHangupParameters{
        CallUUID: "f84fbadc-5df0-4c02-934b-aac0c1efb8ae",
        Time: 59,
    }, operations.PostV01ScheduleHangupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleHangupResponse != nil {
        // handle response
    }
}
```

## PostV01SchedulePlay

Schedules media playback for a specific call

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
    res, err := s.Call.PostV01SchedulePlay(ctx, shared.SchedulePlayParameters{
        CallUUID: "e69b32da-3243-4ba6-a965-5d2f64a57d48",
        Legs: shared.SchedulePlayParametersLegsEnumBoth.ToPointer(),
        Length: sdk.Int64(90),
        Loop: sdk.Bool(true),
        Mix: sdk.Bool(false),
        Sounds: "/tmp/prompt.wav",
        Time: 29,
    }, operations.PostV01SchedulePlaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchedulePlayResponse != nil {
        // handle response
    }
}
```

## PostV01SendDigits

Emits DMTF tones to a call

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
    res, err := s.Call.PostV01SendDigits(ctx, shared.SendDigitsParameters{
        CallUUID: "d4cd08fe-4245-490a-ae39-5b58c6addbe8",
        Digits: "1w2w3W#*@1500",
        Leg: shared.SendDigitsParametersLegEnumBoth.ToPointer(),
    }, operations.PostV01SendDigitsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendDigitsResponse != nil {
        // handle response
    }
}
```

## PostV01SoundTouch

Applies SoundTouch effects to a live call

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
    res, err := s.Call.PostV01SoundTouch(ctx, shared.SoundTouchParameters{
        AudioDirection: shared.SoundTouchParametersAudioDirectionEnumIn.ToPointer(),
        CallUUID: "b7054b68-0620-455a-8ac7-f8f126853b9d",
        Pitch: sdk.Float32(4),
        PitchOctaves: sdk.Float32(0.5),
        PitchSemiTones: sdk.Float32(2),
        Rate: sdk.Float32(3),
        Tempo: sdk.Float32(2),
    }, operations.PostV01SoundTouchSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SoundTouchResponse != nil {
        // handle response
    }
}
```

## PostV01SoundTouchStop

Removes SoundTouch effects from a given call

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
    res, err := s.Call.PostV01SoundTouchStop(ctx, shared.SoundTouchStopParameters{
        CallUUID: "fe372011-face-4bc2-bbcc-893d045bf67d",
    }, operations.PostV01SoundTouchStopSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SoundTouchStopResponse != nil {
        // handle response
    }
}
```

## PostV01TransferCall

Replaces the RestXML flow of a live call

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
    res, err := s.Call.PostV01TransferCall(ctx, shared.TransferCallParameters{
        CallUUID: "03694cf6-62b3-4f00-b0fc-6831ddcc2693",
        URL: "https://example.org/restxml/endpoint/",
    }, operations.PostV01TransferCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferCallResponse != nil {
        // handle response
    }
}
```
