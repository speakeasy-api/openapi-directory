# RegisterForRealtimeAPI

### Available Operations

* [RegisterForRealtimeAPIDelete](#registerforrealtimeapidelete) - Deletes a realtime API registration.
* [RegisterForRealtimeAPIGet](#registerforrealtimeapiget) - Gets all registrations for the Realtime API.
* [RegisterForRealtimeAPIPostForm](#registerforrealtimeapipostform) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [RegisterForRealtimeAPIPostJSON](#registerforrealtimeapipostjson) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [RegisterForRealtimeAPIPostRaw](#registerforrealtimeapipostraw) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

## RegisterForRealtimeAPIDelete

Deletes a realtime API registration.

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
    res, err := s.RegisterForRealtimeAPI.RegisterForRealtimeAPIDelete(ctx, operations.RegisterForRealtimeAPIDeleteRequest{
        ID: "9251a5a9-da66-40ff-97bf-aad4f9efc1b4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegisterForRealtimeAPIGet

Gets all registrations for the Realtime API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RegisterForRealtimeAPI.RegisterForRealtimeAPIGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterRealtimeAPIData != nil {
        // handle response
    }
}
```

## RegisterForRealtimeAPIPostForm

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RegisterForRealtimeAPI.RegisterForRealtimeAPIPostForm(ctx, shared.RegisterRealtimeAPIData{
        APIURL: sdk.String("quis"),
        BasicAuthPassword: sdk.String("inventore"),
        BasicAuthUsername: sdk.String("fugit"),
        ID: sdk.String("c1032648-dc2f-4615-999e-bfd0e9fe6c63"),
        MeterID: sdk.String("fugit"),
        RegistrationType: shared.RegisterRealtimeAPIDataRegistrationTypeEnumUserRegistration.ToPointer(),
        SerialNumber: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegisterForRealtimeAPIPostJSON

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RegisterForRealtimeAPI.RegisterForRealtimeAPIPostJSON(ctx, shared.RegisterRealtimeAPIData{
        APIURL: sdk.String("ratione"),
        BasicAuthPassword: sdk.String("animi"),
        BasicAuthUsername: sdk.String("necessitatibus"),
        ID: sdk.String("d0117996-312f-4de0-8771-778ff61d0174"),
        MeterID: sdk.String("esse"),
        RegistrationType: shared.RegisterRealtimeAPIDataRegistrationTypeEnumSingleMeterRegistration.ToPointer(),
        SerialNumber: sdk.String("consectetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RegisterForRealtimeAPIPostRaw

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RegisterForRealtimeAPI.RegisterForRealtimeAPIPostRaw(ctx, []byte("aliquid"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
