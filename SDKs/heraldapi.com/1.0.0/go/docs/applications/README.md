# Applications

### Available Operations

* [GetApplicationsApplicationID](#getapplicationsapplicationid) - /applications/{application_id}
* [PostApplications](#postapplications) - /applications
* [PutApplicationsApplicationID](#putapplicationsapplicationid) - /applications/{application_id}

## GetApplicationsApplicationID

### Get an application

Get the latest details for a specific [application](https://www.heraldapi.com/docs/dynamic-application-steps).

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Applications.GetApplicationsApplicationID(ctx, operations.GetApplicationsApplicationIDRequest{
        ApplicationID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationsApplicationID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostApplications

### Create an application

Create an [application](https://www.heraldapi.com/docs/dynamic-application) for a product or set of products. An application contains the set of information a carrier requires to get a quote for the product(s). Submitting only `products` will create a blank application. Including values when creating the application is optional. 

Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Applications.PostApplications(ctx, shared.ApplicationWriteV1{
        CoverageValues: []shared.CoverageValueWriteV1{
            shared.CoverageValueWriteV1{
                ChildCoverageValues: []shared.CoverageValueWriteV1{
                    shared.CoverageValueWriteV1{},
                    shared.CoverageValueWriteV1{},
                    shared.CoverageValueWriteV1{},
                },
                CoverageParameterID: "cvg_48oo_gl_effective_date",
                Value: 2165.5,
            },
            shared.CoverageValueWriteV1{
                ChildCoverageValues: []shared.CoverageValueWriteV1{
                    shared.CoverageValueWriteV1{},
                    shared.CoverageValueWriteV1{},
                    shared.CoverageValueWriteV1{},
                },
                CoverageParameterID: "cvg_48oo_gl_effective_date",
                Value: "perferendis",
            },
            shared.CoverageValueWriteV1{
                ChildCoverageValues: []shared.CoverageValueWriteV1{
                    shared.CoverageValueWriteV1{},
                    shared.CoverageValueWriteV1{},
                },
                CoverageParameterID: "cvg_48oo_gl_effective_date",
                Value: 149675,
            },
            shared.CoverageValueWriteV1{
                ChildCoverageValues: []shared.CoverageValueWriteV1{
                    shared.CoverageValueWriteV1{},
                    shared.CoverageValueWriteV1{},
                    shared.CoverageValueWriteV1{},
                },
                CoverageParameterID: "cvg_48oo_gl_effective_date",
                Value: []string{
                    "laboriosam",
                    "hic",
                    "saepe",
                },
            },
        },
        Products: []string{
            "prd_mc4r_herald_general_liability",
            "prd_mc4r_herald_general_liability",
            "prd_mc4r_herald_general_liability",
        },
        RiskValues: []shared.RiskValueWriteV1{
            shared.RiskValueWriteV1{
                ChildRiskValues: []shared.RiskValueWriteV1{
                    shared.RiskValueWriteV1{},
                    shared.RiskValueWriteV1{},
                },
                RiskParameterID: "rsk_14b8_fein",
                Value: false,
            },
            shared.RiskValueWriteV1{
                ChildRiskValues: []shared.RiskValueWriteV1{
                    shared.RiskValueWriteV1{},
                    shared.RiskValueWriteV1{},
                },
                RiskParameterID: "rsk_14b8_fein",
                Value: shared.AddressV1{
                    City: "Hill Valley",
                    CountryCode: shared.AddressV1CountryCodeEnumUsa,
                    Line1: "1640 Riverside Drive",
                    Line2: sdk.String("Floor 3"),
                    Line3: sdk.String("Suite 5"),
                    Organization: sdk.String("ACME Corporation"),
                    PostalCode: "95420",
                    State: shared.AddressV1StateEnumCa,
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostApplications200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutApplicationsApplicationID

<h3>Update an application</h3>

Submit values for a specific application. In order to submit an application for a quote, you need to continue to update the application until the status is `complete`.

Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Applications.PutApplicationsApplicationID(ctx, operations.PutApplicationsApplicationIDRequest{
        ApplicationWriteV1: &shared.ApplicationWriteV1{
            CoverageValues: []shared.CoverageValueWriteV1{
                shared.CoverageValueWriteV1{
                    ChildCoverageValues: []shared.CoverageValueWriteV1{
                        shared.CoverageValueWriteV1{},
                    },
                    CoverageParameterID: "cvg_48oo_gl_effective_date",
                    Value: "reiciendis",
                },
                shared.CoverageValueWriteV1{
                    ChildCoverageValues: []shared.CoverageValueWriteV1{
                        shared.CoverageValueWriteV1{},
                        shared.CoverageValueWriteV1{},
                        shared.CoverageValueWriteV1{},
                    },
                    CoverageParameterID: "cvg_48oo_gl_effective_date",
                    Value: 670638,
                },
                shared.CoverageValueWriteV1{
                    ChildCoverageValues: []shared.CoverageValueWriteV1{
                        shared.CoverageValueWriteV1{},
                    },
                    CoverageParameterID: "cvg_48oo_gl_effective_date",
                    Value: []string{
                        "explicabo",
                        "nobis",
                    },
                },
            },
            Products: []string{
                "prd_mc4r_herald_general_liability",
                "prd_mc4r_herald_general_liability",
            },
            RiskValues: []shared.RiskValueWriteV1{
                shared.RiskValueWriteV1{
                    ChildRiskValues: []shared.RiskValueWriteV1{
                        shared.RiskValueWriteV1{},
                        shared.RiskValueWriteV1{},
                    },
                    RiskParameterID: "rsk_14b8_fein",
                    Value: 5701.97,
                },
                shared.RiskValueWriteV1{
                    ChildRiskValues: []shared.RiskValueWriteV1{
                        shared.RiskValueWriteV1{},
                    },
                    RiskParameterID: "rsk_14b8_fein",
                    Value: 634274,
                },
                shared.RiskValueWriteV1{
                    ChildRiskValues: []shared.RiskValueWriteV1{
                        shared.RiskValueWriteV1{},
                        shared.RiskValueWriteV1{},
                        shared.RiskValueWriteV1{},
                        shared.RiskValueWriteV1{},
                    },
                    RiskParameterID: "rsk_14b8_fein",
                    Value: shared.AddressV1{
                        City: "Hill Valley",
                        CountryCode: shared.AddressV1CountryCodeEnumUsa,
                        Line1: "1640 Riverside Drive",
                        Line2: sdk.String("Floor 3"),
                        Line3: sdk.String("Suite 5"),
                        Organization: sdk.String("ACME Corporation"),
                        PostalCode: "95420",
                        State: shared.AddressV1StateEnumCa,
                    },
                },
            },
        },
        ApplicationID: "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutApplicationsApplicationID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
