# Licenses

### Available Operations

* [AssignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [GetOrganizationLicense](#getorganizationlicense) - Display a license
* [GetOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [GetOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [GetOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [MoveOrganizationLicenses](#moveorganizationlicenses) - Move licenses to another organization
* [MoveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [MoveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [RenewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license
* [UpdateOrganizationLicense](#updateorganizationlicense) - Update a license

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
            LicenseID: "cum",
            NetworkID: "totam",
            SeatCount: 672004,
        },
        OrganizationID: "hic",
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
        LicenseID: "eum",
        OrganizationID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicense200ApplicationJSONObject != nil {
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
        DeviceSerial: sdk.String("ut"),
        EndingBefore: sdk.String("perspiciatis"),
        NetworkID: sdk.String("possimus"),
        OrganizationID: "odit",
        PerPage: sdk.Int64(692096),
        StartingAfter: sdk.String("excepturi"),
        State: operations.GetOrganizationLicensesStateEnumRecentlyQueued.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicenses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationLicensesOverview

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
    res, err := s.Licenses.GetOrganizationLicensesOverview(ctx, operations.GetOrganizationLicensesOverviewRequest{
        OrganizationID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicensesOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationLicensingCotermLicenses

List the licenses in a coterm organization

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
    res, err := s.Licenses.GetOrganizationLicensingCotermLicenses(ctx, operations.GetOrganizationLicensingCotermLicensesRequest{
        EndingBefore: sdk.String("consequatur"),
        Expired: sdk.Bool(false),
        Invalidated: sdk.Bool(false),
        OrganizationID: "tempora",
        PerPage: sdk.Int64(206024),
        StartingAfter: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicensingCotermLicenses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## MoveOrganizationLicenses

Move licenses to another organization. This will also move any devices that the licenses are assigned to

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
    res, err := s.Licenses.MoveOrganizationLicenses(ctx, operations.MoveOrganizationLicensesRequest{
        RequestBody: operations.MoveOrganizationLicensesRequestBody{
            DestOrganizationID: "adipisci",
            LicenseIds: []string{
                "sit",
                "natus",
                "nisi",
            },
        },
        OrganizationID: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicenses200ApplicationJSONObject != nil {
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
            DestOrganizationID: "impedit",
            LicenseID: "voluptatem",
            SeatCount: 372748,
        },
        OrganizationID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MoveOrganizationLicensingCotermLicenses

Moves a license to a different organization (coterm only)

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
    res, err := s.Licenses.MoveOrganizationLicensingCotermLicenses(ctx, operations.MoveOrganizationLicensingCotermLicensesRequest{
        RequestBody: operations.MoveOrganizationLicensingCotermLicensesRequestBody{
            Destination: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestination{
                Mode: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnumRenew.ToPointer(),
                OrganizationID: sdk.String("voluptate"),
            },
            Licenses: []MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 191852,
                            Model: "iste",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 851996,
                            Model: "vero",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 949090,
                            Model: "perspiciatis",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 790611,
                            Model: "reprehenderit",
                        },
                    },
                    Key: "suscipit",
                },
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 835197,
                            Model: "reiciendis",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 852399,
                            Model: "iusto",
                        },
                    },
                    Key: "ipsum",
                },
            },
        },
        OrganizationID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicensingCotermLicenses200ApplicationJSONObject != nil {
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
            LicenseIDToRenew: "tempora",
            UnusedLicenseID: "eveniet",
        },
        OrganizationID: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenewOrganizationLicensesSeats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationLicense

Update a license

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
    res, err := s.Licenses.UpdateOrganizationLicense(ctx, operations.UpdateOrganizationLicenseRequest{
        RequestBody: &operations.UpdateOrganizationLicenseRequestBody{
            DeviceSerial: sdk.String("placeat"),
        },
        LicenseID: "nam",
        OrganizationID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationLicense200ApplicationJSONObject != nil {
        // handle response
    }
}
```
