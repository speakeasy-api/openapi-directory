# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateCommand](#createcommand) - Send a Command to a Sim.
* [CreateRatePlan](#createrateplan)
* [DeleteCommand](#deletecommand) - Delete a Command instance from your account.
* [DeleteRatePlan](#deleterateplan)
* [DeleteSim](#deletesim) - Delete a Sim resource on your Account.
* [FetchCommand](#fetchcommand) - Fetch a Command instance from your account.
* [FetchRatePlan](#fetchrateplan)
* [FetchSim](#fetchsim) - Fetch a Sim resource on your Account.
* [ListAccountUsageRecord](#listaccountusagerecord)
* [ListCommand](#listcommand) - Retrieve a list of Commands from your account.
* [ListDataSession](#listdatasession)
* [ListRatePlan](#listrateplan)
* [ListSim](#listsim) - Retrieve a list of Sim resources on your Account.
* [ListUsageRecord](#listusagerecord)
* [UpdateRatePlan](#updaterateplan)
* [UpdateSim](#updatesim) - Updates the given properties of a Sim resource on your Account.

## CreateCommand

Send a Command to a Sim.

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
    res, err := s.SDK.CreateCommand(ctx, operations.CreateCommandCreateCommandRequest{
        CallbackMethod: operations.CreateCommandCreateCommandRequestCallbackMethodEnumPatch.ToPointer(),
        CallbackURL: sdk.String("https://high-hound.biz"),
        Command: "debitis",
        CommandMode: shared.CommandEnumCommandModeEnumText.ToPointer(),
        DeliveryReceiptRequested: sdk.Bool(false),
        IncludeSid: sdk.String("delectus"),
        Sim: sdk.String("tempora"),
    }, operations.CreateCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Command != nil {
        // handle response
    }
}
```

## CreateRatePlan

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
    res, err := s.SDK.CreateRatePlan(ctx, operations.CreateRatePlanCreateRatePlanRequest{
        DataEnabled: sdk.Bool(false),
        DataLimit: sdk.Int64(383441),
        DataMetering: sdk.String("molestiae"),
        FriendlyName: sdk.String("minus"),
        InternationalRoaming: []string{
            "voluptatum",
            "iusto",
            "excepturi",
            "nisi",
        },
        InternationalRoamingDataLimit: sdk.Int64(925597),
        MessagingEnabled: sdk.Bool(false),
        NationalRoamingDataLimit: sdk.Int64(836079),
        NationalRoamingEnabled: sdk.Bool(false),
        UniqueName: sdk.String("ab"),
        VoiceEnabled: sdk.Bool(false),
    }, operations.CreateRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1RatePlan != nil {
        // handle response
    }
}
```

## DeleteCommand

Delete a Command instance from your account.

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
    res, err := s.SDK.DeleteCommand(ctx, operations.DeleteCommandRequest{
        Sid: "quis",
    }, operations.DeleteCommandSecurity{
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

## DeleteRatePlan

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
    res, err := s.SDK.DeleteRatePlan(ctx, operations.DeleteRatePlanRequest{
        Sid: "veritatis",
    }, operations.DeleteRatePlanSecurity{
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

## DeleteSim

Delete a Sim resource on your Account.

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
    res, err := s.SDK.DeleteSim(ctx, operations.DeleteSimRequest{
        Sid: "deserunt",
    }, operations.DeleteSimSecurity{
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

## FetchCommand

Fetch a Command instance from your account.

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
    res, err := s.SDK.FetchCommand(ctx, operations.FetchCommandRequest{
        Sid: "perferendis",
    }, operations.FetchCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Command != nil {
        // handle response
    }
}
```

## FetchRatePlan

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
    res, err := s.SDK.FetchRatePlan(ctx, operations.FetchRatePlanRequest{
        Sid: "ipsam",
    }, operations.FetchRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1RatePlan != nil {
        // handle response
    }
}
```

## FetchSim

Fetch a Sim resource on your Account.

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
    res, err := s.SDK.FetchSim(ctx, operations.FetchSimRequest{
        Sid: "repellendus",
    }, operations.FetchSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Sim != nil {
        // handle response
    }
}
```

## ListAccountUsageRecord

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
    res, err := s.SDK.ListAccountUsageRecord(ctx, operations.ListAccountUsageRecordRequest{
        End: types.MustTimeFromString("2020-08-31T22:02:25.322Z"),
        Granularity: shared.AccountUsageRecordEnumGranularityEnumHourly.ToPointer(),
        Page: sdk.Int64(870013),
        PageSize: sdk.Int64(870088),
        PageToken: sdk.String("maiores"),
        Start: types.MustTimeFromString("2022-03-15T07:22:15.330Z"),
    }, operations.ListAccountUsageRecordSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountUsageRecordResponse != nil {
        // handle response
    }
}
```

## ListCommand

Retrieve a list of Commands from your account.

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
    res, err := s.SDK.ListCommand(ctx, operations.ListCommandRequest{
        Direction: shared.CommandEnumDirectionEnumToSim.ToPointer(),
        Page: sdk.Int64(461479),
        PageSize: sdk.Int64(520478),
        PageToken: sdk.String("porro"),
        Sim: sdk.String("dolorum"),
        Status: shared.CommandEnumStatusEnumQueued.ToPointer(),
        Transport: shared.CommandEnumTransportEnumIP.ToPointer(),
    }, operations.ListCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCommandResponse != nil {
        // handle response
    }
}
```

## ListDataSession

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
    res, err := s.SDK.ListDataSession(ctx, operations.ListDataSessionRequest{
        Page: sdk.Int64(639921),
        PageSize: sdk.Int64(582020),
        PageToken: sdk.String("fugit"),
        SimSid: "deleniti",
    }, operations.ListDataSessionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataSessionResponse != nil {
        // handle response
    }
}
```

## ListRatePlan

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
    res, err := s.SDK.ListRatePlan(ctx, operations.ListRatePlanRequest{
        Page: sdk.Int64(944669),
        PageSize: sdk.Int64(758616),
        PageToken: sdk.String("totam"),
    }, operations.ListRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRatePlanResponse != nil {
        // handle response
    }
}
```

## ListSim

Retrieve a list of Sim resources on your Account.

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
    res, err := s.SDK.ListSim(ctx, operations.ListSimRequest{
        EID: sdk.String("beatae"),
        Iccid: sdk.String("commodi"),
        Page: sdk.Int64(473600),
        PageSize: sdk.Int64(264555),
        PageToken: sdk.String("qui"),
        RatePlan: sdk.String("impedit"),
        SimRegistrationCode: sdk.String("cum"),
        Status: shared.SimEnumStatusEnumSuspended.ToPointer(),
    }, operations.ListSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSimResponse != nil {
        // handle response
    }
}
```

## ListUsageRecord

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
    res, err := s.SDK.ListUsageRecord(ctx, operations.ListUsageRecordRequest{
        End: types.MustTimeFromString("2022-06-07T12:31:06.574Z"),
        Granularity: shared.UsageRecordEnumGranularityEnumHourly.ToPointer(),
        Page: sdk.Int64(18789),
        PageSize: sdk.Int64(324141),
        PageToken: sdk.String("natus"),
        SimSid: "sed",
        Start: types.MustTimeFromString("2022-07-22T16:55:44.795Z"),
    }, operations.ListUsageRecordSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordResponse != nil {
        // handle response
    }
}
```

## UpdateRatePlan

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
    res, err := s.SDK.UpdateRatePlan(ctx, operations.UpdateRatePlanRequest{
        RequestBody: &operations.UpdateRatePlanUpdateRatePlanRequest{
            FriendlyName: sdk.String("natus"),
            UniqueName: sdk.String("laboriosam"),
        },
        Sid: "hic",
    }, operations.UpdateRatePlanSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1RatePlan != nil {
        // handle response
    }
}
```

## UpdateSim

Updates the given properties of a Sim resource on your Account.

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
    res, err := s.SDK.UpdateSim(ctx, operations.UpdateSimRequest{
        RequestBody: &operations.UpdateSimUpdateSimRequest{
            AccountSid: sdk.String("saepe"),
            CallbackMethod: operations.UpdateSimUpdateSimRequestCallbackMethodEnumPut.ToPointer(),
            CallbackURL: sdk.String("http://grown-opposite.info"),
            CommandsCallbackMethod: operations.UpdateSimUpdateSimRequestCommandsCallbackMethodEnumDelete.ToPointer(),
            CommandsCallbackURL: sdk.String("https://burdensome-bail.org"),
            FriendlyName: sdk.String("est"),
            RatePlan: sdk.String("mollitia"),
            ResetStatus: shared.SimEnumResetStatusEnumResetting.ToPointer(),
            SmsFallbackMethod: operations.UpdateSimUpdateSimRequestSmsFallbackMethodEnumPut.ToPointer(),
            SmsFallbackURL: sdk.String("http://doting-footage.com"),
            SmsMethod: operations.UpdateSimUpdateSimRequestSmsMethodEnumPut.ToPointer(),
            SmsURL: sdk.String("http://palatable-forum.biz"),
            Status: shared.SimEnumStatusEnumDeactivated.ToPointer(),
            UniqueName: sdk.String("accusantium"),
            VoiceFallbackMethod: operations.UpdateSimUpdateSimRequestVoiceFallbackMethodEnumPost.ToPointer(),
            VoiceFallbackURL: sdk.String("https://wrathful-violet.com"),
            VoiceMethod: operations.UpdateSimUpdateSimRequestVoiceMethodEnumPatch.ToPointer(),
            VoiceURL: sdk.String("http://pointed-cicada.org"),
        },
        Sid: "mollitia",
    }, operations.UpdateSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Sim != nil {
        // handle response
    }
}
```
