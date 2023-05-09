# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateEsimProfile](#createesimprofile) - Order an eSIM Profile.
* [CreateFleet](#createfleet) - Create a Fleet
* [CreateIPCommand](#createipcommand) - Send an IP Command to a Super SIM.
* [CreateNetworkAccessProfile](#createnetworkaccessprofile) - Create a new Network Access Profile
* [CreateNetworkAccessProfileNetwork](#createnetworkaccessprofilenetwork) - Add a Network resource to the Network Access Profile resource.
* [CreateSim](#createsim) - Register a Super SIM to your Account
* [CreateSmsCommand](#createsmscommand) - Send SMS Command to a Sim.
* [DeleteNetworkAccessProfileNetwork](#deletenetworkaccessprofilenetwork) - Remove a Network resource from the Network Access Profile resource's.
* [FetchEsimProfile](#fetchesimprofile) - Fetch an eSIM Profile.
* [FetchFleet](#fetchfleet) - Fetch a Fleet instance from your account.
* [FetchIPCommand](#fetchipcommand) - Fetch IP Command instance from your account.
* [FetchNetwork](#fetchnetwork) - Fetch a Network resource.
* [FetchNetworkAccessProfile](#fetchnetworkaccessprofile) - Fetch a Network Access Profile instance from your account.
* [FetchNetworkAccessProfileNetwork](#fetchnetworkaccessprofilenetwork) - Fetch a Network Access Profile resource's Network resource.
* [FetchSim](#fetchsim) - Fetch a Super SIM instance from your account.
* [FetchSmsCommand](#fetchsmscommand) - Fetch SMS Command instance from your account.
* [ListBillingPeriod](#listbillingperiod) - Retrieve a list of Billing Periods for a Super SIM.
* [ListEsimProfile](#listesimprofile) - Retrieve a list of eSIM Profiles.
* [ListFleet](#listfleet) - Retrieve a list of Fleets from your account.
* [ListIPCommand](#listipcommand) - Retrieve a list of IP Commands from your account.
* [ListNetwork](#listnetwork) - Retrieve a list of Network resources.
* [ListNetworkAccessProfile](#listnetworkaccessprofile) - Retrieve a list of Network Access Profiles from your account.
* [ListNetworkAccessProfileNetwork](#listnetworkaccessprofilenetwork) - Retrieve a list of Network Access Profile resource's Network resource.
* [ListSettingsUpdate](#listsettingsupdate) - Retrieve a list of Settings Updates.
* [ListSim](#listsim) - Retrieve a list of Super SIMs from your account.
* [ListSimIPAddress](#listsimipaddress) - Retrieve a list of IP Addresses for the given Super SIM.
* [ListSmsCommand](#listsmscommand) - Retrieve a list of SMS Commands from your account.
* [ListUsageRecord](#listusagerecord) - List UsageRecords
* [UpdateFleet](#updatefleet) - Updates the given properties of a Super SIM Fleet instance from your account.
* [UpdateNetworkAccessProfile](#updatenetworkaccessprofile) - Updates the given properties of a Network Access Profile in your account.
* [UpdateSim](#updatesim) - Updates the given properties of a Super SIM instance from your account.

## CreateEsimProfile

Order an eSIM Profile.

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
    res, err := s.SDK.CreateEsimProfile(ctx, operations.CreateEsimProfileCreateEsimProfileRequest{
        CallbackMethod: operations.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnumDelete.ToPointer(),
        CallbackURL: sdk.String("unde"),
        Eid: sdk.String("nulla"),
        GenerateMatchingID: sdk.Bool(false),
    }, operations.CreateEsimProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1EsimProfile != nil {
        // handle response
    }
}
```

## CreateFleet

Create a Fleet

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
    res, err := s.SDK.CreateFleet(ctx, operations.CreateFleetCreateFleetRequest{
        DataEnabled: sdk.Bool(false),
        DataLimit: sdk.Int64(544883),
        IPCommandsMethod: operations.CreateFleetCreateFleetRequestIPCommandsMethodEnumDelete.ToPointer(),
        IPCommandsURL: sdk.String("http://physical-pegboard.info"),
        NetworkAccessProfile: "iure",
        SmsCommandsEnabled: sdk.Bool(false),
        SmsCommandsMethod: operations.CreateFleetCreateFleetRequestSmsCommandsMethodEnumGet.ToPointer(),
        SmsCommandsURL: sdk.String("https://awesome-voter.biz"),
        UniqueName: sdk.String("suscipit"),
    }, operations.CreateFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1Fleet != nil {
        // handle response
    }
}
```

## CreateIPCommand

Send an IP Command to a Super SIM.

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
    res, err := s.SDK.CreateIPCommand(ctx, operations.CreateIPCommandCreateIPCommandRequest{
        CallbackMethod: operations.CreateIPCommandCreateIPCommandRequestCallbackMethodEnumPost.ToPointer(),
        CallbackURL: sdk.String("https://studious-lynx.info"),
        DevicePort: 568045,
        Payload: "nisi",
        PayloadType: shared.IPCommandEnumPayloadTypeEnumBinary.ToPointer(),
        Sim: "temporibus",
    }, operations.CreateIPCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1IPCommand != nil {
        // handle response
    }
}
```

## CreateNetworkAccessProfile

Create a new Network Access Profile

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
    res, err := s.SDK.CreateNetworkAccessProfile(ctx, operations.CreateNetworkAccessProfileCreateNetworkAccessProfileRequest{
        Networks: []string{
            "quis",
        },
        UniqueName: sdk.String("veritatis"),
    }, operations.CreateNetworkAccessProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1NetworkAccessProfile != nil {
        // handle response
    }
}
```

## CreateNetworkAccessProfileNetwork

Add a Network resource to the Network Access Profile resource.

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
    res, err := s.SDK.CreateNetworkAccessProfileNetwork(ctx, operations.CreateNetworkAccessProfileNetworkRequest{
        NetworkAccessProfileSid: "deserunt",
        RequestBody: &operations.CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest{
            Network: "perferendis",
        },
    }, operations.CreateNetworkAccessProfileNetworkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork != nil {
        // handle response
    }
}
```

## CreateSim

Register a Super SIM to your Account

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
    res, err := s.SDK.CreateSim(ctx, operations.CreateSimCreateSimRequest{
        Iccid: "ipsam",
        RegistrationCode: "repellendus",
    }, operations.CreateSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1Sim != nil {
        // handle response
    }
}
```

## CreateSmsCommand

Send SMS Command to a Sim.

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
    res, err := s.SDK.CreateSmsCommand(ctx, operations.CreateSmsCommandCreateSmsCommandRequest{
        CallbackMethod: operations.CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnumDelete.ToPointer(),
        CallbackURL: sdk.String("https://constant-sundae.org"),
        Payload: "maiores",
        Sim: "molestiae",
    }, operations.CreateSmsCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1SmsCommand != nil {
        // handle response
    }
}
```

## DeleteNetworkAccessProfileNetwork

Remove a Network resource from the Network Access Profile resource's.

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
    res, err := s.SDK.DeleteNetworkAccessProfileNetwork(ctx, operations.DeleteNetworkAccessProfileNetworkRequest{
        NetworkAccessProfileSid: "quod",
        Sid: "quod",
    }, operations.DeleteNetworkAccessProfileNetworkSecurity{
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

## FetchEsimProfile

Fetch an eSIM Profile.

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
    res, err := s.SDK.FetchEsimProfile(ctx, operations.FetchEsimProfileRequest{
        Sid: "esse",
    }, operations.FetchEsimProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1EsimProfile != nil {
        // handle response
    }
}
```

## FetchFleet

Fetch a Fleet instance from your account.

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
    res, err := s.SDK.FetchFleet(ctx, operations.FetchFleetRequest{
        Sid: "totam",
    }, operations.FetchFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1Fleet != nil {
        // handle response
    }
}
```

## FetchIPCommand

Fetch IP Command instance from your account.

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
    res, err := s.SDK.FetchIPCommand(ctx, operations.FetchIPCommandRequest{
        Sid: "porro",
    }, operations.FetchIPCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1IPCommand != nil {
        // handle response
    }
}
```

## FetchNetwork

Fetch a Network resource.

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
    res, err := s.SDK.FetchNetwork(ctx, operations.FetchNetworkRequest{
        Sid: "dolorum",
    }, operations.FetchNetworkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1Network != nil {
        // handle response
    }
}
```

## FetchNetworkAccessProfile

Fetch a Network Access Profile instance from your account.

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
    res, err := s.SDK.FetchNetworkAccessProfile(ctx, operations.FetchNetworkAccessProfileRequest{
        Sid: "dicta",
    }, operations.FetchNetworkAccessProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1NetworkAccessProfile != nil {
        // handle response
    }
}
```

## FetchNetworkAccessProfileNetwork

Fetch a Network Access Profile resource's Network resource.

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
    res, err := s.SDK.FetchNetworkAccessProfileNetwork(ctx, operations.FetchNetworkAccessProfileNetworkRequest{
        NetworkAccessProfileSid: "nam",
        Sid: "officia",
    }, operations.FetchNetworkAccessProfileNetworkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork != nil {
        // handle response
    }
}
```

## FetchSim

Fetch a Super SIM instance from your account.

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
        Sid: "occaecati",
    }, operations.FetchSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1Sim != nil {
        // handle response
    }
}
```

## FetchSmsCommand

Fetch SMS Command instance from your account.

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
    res, err := s.SDK.FetchSmsCommand(ctx, operations.FetchSmsCommandRequest{
        Sid: "fugit",
    }, operations.FetchSmsCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1SmsCommand != nil {
        // handle response
    }
}
```

## ListBillingPeriod

Retrieve a list of Billing Periods for a Super SIM.

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
    res, err := s.SDK.ListBillingPeriod(ctx, operations.ListBillingPeriodRequest{
        Page: sdk.Int64(537373),
        PageSize: sdk.Int64(944669),
        PageToken: sdk.String("optio"),
        SimSid: "totam",
    }, operations.ListBillingPeriodSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBillingPeriodResponse != nil {
        // handle response
    }
}
```

## ListEsimProfile

Retrieve a list of eSIM Profiles.

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
    res, err := s.SDK.ListEsimProfile(ctx, operations.ListEsimProfileRequest{
        Eid: sdk.String("beatae"),
        Page: sdk.Int64(414662),
        PageSize: sdk.Int64(473600),
        PageToken: sdk.String("modi"),
        SimSid: sdk.String("qui"),
        Status: shared.EsimProfileEnumStatusEnumInstalled.ToPointer(),
    }, operations.ListEsimProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEsimProfileResponse != nil {
        // handle response
    }
}
```

## ListFleet

Retrieve a list of Fleets from your account.

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
    res, err := s.SDK.ListFleet(ctx, operations.ListFleetRequest{
        NetworkAccessProfile: sdk.String("cum"),
        Page: sdk.Int64(456150),
        PageSize: sdk.Int64(216550),
        PageToken: sdk.String("excepturi"),
    }, operations.ListFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFleetResponse != nil {
        // handle response
    }
}
```

## ListIPCommand

Retrieve a list of IP Commands from your account.

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
    res, err := s.SDK.ListIPCommand(ctx, operations.ListIPCommandRequest{
        Direction: shared.IPCommandEnumDirectionEnumToSim.ToPointer(),
        Page: sdk.Int64(18789),
        PageSize: sdk.Int64(324141),
        PageToken: sdk.String("natus"),
        Sim: sdk.String("sed"),
        SimIccid: sdk.String("iste"),
        Status: shared.IPCommandEnumStatusEnumQueued.ToPointer(),
    }, operations.ListIPCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIPCommandResponse != nil {
        // handle response
    }
}
```

## ListNetwork

Retrieve a list of Network resources.

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
    res, err := s.SDK.ListNetwork(ctx, operations.ListNetworkRequest{
        IsoCountry: sdk.String("natus"),
        Mcc: sdk.String("laboriosam"),
        Mnc: sdk.String("hic"),
        Page: sdk.Int64(902599),
        PageSize: sdk.Int64(681820),
        PageToken: sdk.String("in"),
    }, operations.ListNetworkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkResponse != nil {
        // handle response
    }
}
```

## ListNetworkAccessProfile

Retrieve a list of Network Access Profiles from your account.

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
    res, err := s.SDK.ListNetworkAccessProfile(ctx, operations.ListNetworkAccessProfileRequest{
        Page: sdk.Int64(359508),
        PageSize: sdk.Int64(613064),
        PageToken: sdk.String("iure"),
    }, operations.ListNetworkAccessProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkAccessProfileResponse != nil {
        // handle response
    }
}
```

## ListNetworkAccessProfileNetwork

Retrieve a list of Network Access Profile resource's Network resource.

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
    res, err := s.SDK.ListNetworkAccessProfileNetwork(ctx, operations.ListNetworkAccessProfileNetworkRequest{
        NetworkAccessProfileSid: "saepe",
        Page: sdk.Int64(697631),
        PageSize: sdk.Int64(99280),
        PageToken: sdk.String("ipsa"),
    }, operations.ListNetworkAccessProfileNetworkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkAccessProfileNetworkResponse != nil {
        // handle response
    }
}
```

## ListSettingsUpdate

Retrieve a list of Settings Updates.

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
    res, err := s.SDK.ListSettingsUpdate(ctx, operations.ListSettingsUpdateRequest{
        Page: sdk.Int64(969810),
        PageSize: sdk.Int64(666767),
        PageToken: sdk.String("mollitia"),
        Sim: sdk.String("laborum"),
        Status: shared.SettingsUpdateEnumStatusEnumScheduled.ToPointer(),
    }, operations.ListSettingsUpdateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSettingsUpdateResponse != nil {
        // handle response
    }
}
```

## ListSim

Retrieve a list of Super SIMs from your account.

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
        Fleet: sdk.String("dolorem"),
        Iccid: sdk.String("corporis"),
        Page: sdk.Int64(128926),
        PageSize: sdk.Int64(750686),
        PageToken: sdk.String("enim"),
        Status: shared.SimEnumStatusEnumInactive.ToPointer(),
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

## ListSimIPAddress

Retrieve a list of IP Addresses for the given Super SIM.

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
    res, err := s.SDK.ListSimIPAddress(ctx, operations.ListSimIPAddressRequest{
        Page: sdk.Int64(363711),
        PageSize: sdk.Int64(325047),
        PageToken: sdk.String("excepturi"),
        SimSid: "accusantium",
    }, operations.ListSimIPAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSimIPAddressResponse != nil {
        // handle response
    }
}
```

## ListSmsCommand

Retrieve a list of SMS Commands from your account.

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
    res, err := s.SDK.ListSmsCommand(ctx, operations.ListSmsCommandRequest{
        Direction: shared.SmsCommandEnumDirectionEnumToSim.ToPointer(),
        Page: sdk.Int64(634274),
        PageSize: sdk.Int64(988374),
        PageToken: sdk.String("sapiente"),
        Sim: sdk.String("architecto"),
        Status: shared.SmsCommandEnumStatusEnumReceived.ToPointer(),
    }, operations.ListSmsCommandSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSmsCommandResponse != nil {
        // handle response
    }
}
```

## ListUsageRecord

List UsageRecords

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
        EndTime: types.MustTimeFromString("2022-05-14T04:53:02.888Z"),
        Fleet: sdk.String("consequuntur"),
        Granularity: shared.UsageRecordEnumGranularityEnumAll.ToPointer(),
        Group: shared.UsageRecordEnumGroupEnumNetwork.ToPointer(),
        IsoCountry: sdk.String("occaecati"),
        Network: sdk.String("numquam"),
        Page: sdk.Int64(414369),
        PageSize: sdk.Int64(466311),
        PageToken: sdk.String("molestiae"),
        Sim: sdk.String("velit"),
        StartTime: types.MustTimeFromString("2022-09-06T22:51:09.401Z"),
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

## UpdateFleet

Updates the given properties of a Super SIM Fleet instance from your account.

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
    res, err := s.SDK.UpdateFleet(ctx, operations.UpdateFleetRequest{
        RequestBody: &operations.UpdateFleetUpdateFleetRequest{
            DataLimit: sdk.Int64(338007),
            IPCommandsMethod: operations.UpdateFleetUpdateFleetRequestIPCommandsMethodEnumHead.ToPointer(),
            IPCommandsURL: sdk.String("https://profuse-ethernet.com"),
            NetworkAccessProfile: sdk.String("quo"),
            SmsCommandsMethod: operations.UpdateFleetUpdateFleetRequestSmsCommandsMethodEnumGet.ToPointer(),
            SmsCommandsURL: sdk.String("https://happy-pink.net"),
            UniqueName: sdk.String("aut"),
        },
        Sid: "quasi",
    }, operations.UpdateFleetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1Fleet != nil {
        // handle response
    }
}
```

## UpdateNetworkAccessProfile

Updates the given properties of a Network Access Profile in your account.

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
    res, err := s.SDK.UpdateNetworkAccessProfile(ctx, operations.UpdateNetworkAccessProfileRequest{
        RequestBody: &operations.UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest{
            UniqueName: sdk.String("error"),
        },
        Sid: "temporibus",
    }, operations.UpdateNetworkAccessProfileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1NetworkAccessProfile != nil {
        // handle response
    }
}
```

## UpdateSim

Updates the given properties of a Super SIM instance from your account.

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
            AccountSid: sdk.String("laborum"),
            CallbackMethod: operations.UpdateSimUpdateSimRequestCallbackMethodEnumHead.ToPointer(),
            CallbackURL: sdk.String("https://witty-swim.info"),
            Fleet: sdk.String("praesentium"),
            Status: shared.SimEnumStatusUpdateEnumInactive.ToPointer(),
            UniqueName: sdk.String("ipsa"),
        },
        Sid: "omnis",
    }, operations.UpdateSimSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1Sim != nil {
        // handle response
    }
}
```
