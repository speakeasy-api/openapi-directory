# Coterm

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
    res, err := s.Coterm.GetOrganizationLicensingCotermLicenses(ctx, operations.GetOrganizationLicensingCotermLicensesRequest{
        EndingBefore: sdk.String("ut"),
        Expired: sdk.Bool(false),
        Invalidated: sdk.Bool(false),
        OrganizationID: "qui",
        PerPage: sdk.Int64(393170),
        StartingAfter: sdk.String("rerum"),
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
    res, err := s.Coterm.MoveOrganizationLicensingCotermLicenses(ctx, operations.MoveOrganizationLicensingCotermLicensesRequest{
        RequestBody: operations.MoveOrganizationLicensingCotermLicensesRequestBody{
            Destination: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestination{
                Mode: operations.MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnumAddDevices.ToPointer(),
                OrganizationID: sdk.String("cupiditate"),
            },
            Licenses: []MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 221582,
                            Model: "commodi",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 410313,
                            Model: "asperiores",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 814227,
                            Model: "maxime",
                        },
                    },
                    Key: "minus",
                },
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 205225,
                            Model: "veniam",
                        },
                    },
                    Key: "nemo",
                },
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 156313,
                            Model: "quisquam",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 90100,
                            Model: "expedita",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 554193,
                            Model: "veniam",
                        },
                    },
                    Key: "ad",
                },
                operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicenses{
                    Counts: []MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 513689,
                            Model: "atque",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 587910,
                            Model: "fugiat",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 606192,
                            Model: "officiis",
                        },
                        operations.MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts{
                            Count: 940766,
                            Model: "error",
                        },
                    },
                    Key: "consectetur",
                },
            },
        },
        OrganizationID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MoveOrganizationLicensingCotermLicenses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
