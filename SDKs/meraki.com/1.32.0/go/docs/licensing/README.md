# Licensing

### Available Operations

* [GetOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [MoveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)

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
    res, err := s.Licensing.GetOrganizationLicensingCotermLicenses(ctx, operations.GetOrganizationLicensingCotermLicensesRequest{
        EndingBefore: sdk.String("non"),
        Expired: sdk.Bool(false),
        Invalidated: sdk.Bool(false),
        OrganizationID: "excepturi",
        PerPage: sdk.Int64(440844),
        StartingAfter: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationLicensingCotermLicenses200ApplicationJSONObjects != nil {
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
    res, err := s.Licensing.MoveOrganizationLicensingCotermLicenses(ctx, operations.MoveOrganizationLicensingCotermLicensesRequest{
        RequestBody: operations.MoveOrganizationLicensingCotermLicensesRequestBody{
            Destination: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestination{
                Mode: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnumAddDevices.ToPointer(),
                OrganizationID: sdk.String("quasi"),
            },
            Licenses: []MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 158778,
                            Model: "voluptas",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 142930,
                            Model: "perferendis",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 261816,
                            Model: "libero",
                        },
                    },
                    Key: "soluta",
                },
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 428691,
                            Model: "quod",
                        },
                    },
                    Key: "laborum",
                },
            },
        },
        OrganizationID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicensingCotermLicenses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
