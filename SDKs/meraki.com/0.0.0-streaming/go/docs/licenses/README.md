# Licenses

### Available Operations

* [AssignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [GetOrganizationLicense](#getorganizationlicense) - Display a license
* [GetOrganizationLicenseState](#getorganizationlicensestate) - Return an overview of the license state for an organization
* [GetOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [MoveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [RenewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license

## AssignOrganizationLicensesSeats

Assign SM seats to a network. This will increase the managed SM device limit of the network

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Licenses.AssignOrganizationLicensesSeats(ctx, operations.AssignOrganizationLicensesSeatsRequest{
        RequestBody: operations.AssignOrganizationLicensesSeatsRequestBody{
            LicenseID: "quae",
            NetworkID: "earum",
            SeatCount: 424032,
        },
        OrganizationID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationLicense

Display a license

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Licenses.GetOrganizationLicense(ctx, operations.GetOrganizationLicenseRequest{
        LicenseID: "eius",
        OrganizationID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicense200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationLicenseState

Return an overview of the license state for an organization

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Licenses.GetOrganizationLicenseState(ctx, operations.GetOrganizationLicenseStateRequest{
        OrganizationID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicenseState200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationLicenses

List the licenses for an organization

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Licenses.GetOrganizationLicenses(ctx, operations.GetOrganizationLicensesRequest{
        DeviceSerial: sdk.String("soluta"),
        EndingBefore: sdk.String("accusantium"),
        NetworkID: sdk.String("aliquam"),
        OrganizationID: "sapiente",
        PerPage: sdk.Int64(119771),
        StartingAfter: sdk.String("ullam"),
        State: operations.GetOrganizationLicensesStateEnumExpiring.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicenses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## MoveOrganizationLicensesSeats

Move SM seats to another organization

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Licenses.MoveOrganizationLicensesSeats(ctx, operations.MoveOrganizationLicensesSeatsRequest{
        RequestBody: operations.MoveOrganizationLicensesSeatsRequestBody{
            DestOrganizationID: "ullam",
            LicenseID: "nisi",
            SeatCount: 16328,
        },
        OrganizationID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RenewOrganizationLicensesSeats

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Licenses.RenewOrganizationLicensesSeats(ctx, operations.RenewOrganizationLicensesSeatsRequest{
        RequestBody: operations.RenewOrganizationLicensesSeatsRequestBody{
            LicenseIDToRenew: "qui",
            UnusedLicenseID: "quibusdam",
        },
        OrganizationID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenewOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```
