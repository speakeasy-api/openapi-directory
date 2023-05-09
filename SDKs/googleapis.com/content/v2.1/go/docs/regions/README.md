# Regions

### Available Operations

* [ContentRegionsCreate](#contentregionscreate) - Creates a region definition in your Merchant Center account.
* [ContentRegionsDelete](#contentregionsdelete) - Deletes a region definition from your Merchant Center account.
* [ContentRegionsGet](#contentregionsget) - Retrieves a region defined in your Merchant Center account.
* [ContentRegionsList](#contentregionslist) - Lists the regions in your Merchant Center account.
* [ContentRegionsPatch](#contentregionspatch) - Updates a region definition in your Merchant Center account.

## ContentRegionsCreate

Creates a region definition in your Merchant Center account.

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
    res, err := s.Regions.ContentRegionsCreate(ctx, operations.ContentRegionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RegionInput: &shared.RegionInput{
            DisplayName: sdk.String("animi"),
            GeotargetArea: &shared.RegionGeoTargetArea{
                GeotargetCriteriaIds: []string{
                    "voluptas",
                    "temporibus",
                    "porro",
                },
            },
            PostalCodeArea: &shared.RegionPostalCodeArea{
                PostalCodes: []shared.RegionPostalCodeAreaPostalCodeRange{
                    shared.RegionPostalCodeAreaPostalCodeRange{
                        Begin: sdk.String("commodi"),
                        End: sdk.String("autem"),
                    },
                    shared.RegionPostalCodeAreaPostalCodeRange{
                        Begin: sdk.String("praesentium"),
                        End: sdk.String("magni"),
                    },
                    shared.RegionPostalCodeAreaPostalCodeRange{
                        Begin: sdk.String("quisquam"),
                        End: sdk.String("expedita"),
                    },
                },
                RegionCode: sdk.String("in"),
            },
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("minus"),
        Key: sdk.String("tenetur"),
        MerchantID: "assumenda",
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        RegionID: sdk.String("tempore"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("earum"),
    }, operations.ContentRegionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Region != nil {
        // handle response
    }
}
```

## ContentRegionsDelete

Deletes a region definition from your Merchant Center account.

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
    res, err := s.Regions.ContentRegionsDelete(ctx, operations.ContentRegionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("molestias"),
        MerchantID: "a",
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        RegionID: "laudantium",
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.ContentRegionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ContentRegionsGet

Retrieves a region defined in your Merchant Center account.

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
    res, err := s.Regions.ContentRegionsGet(ctx, operations.ContentRegionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("neque"),
        Key: sdk.String("ipsa"),
        MerchantID: "excepturi",
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        RegionID: "aut",
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("amet"),
    }, operations.ContentRegionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Region != nil {
        // handle response
    }
}
```

## ContentRegionsList

Lists the regions in your Merchant Center account.

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
    res, err := s.Regions.ContentRegionsList(ctx, operations.ContentRegionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("ad"),
        MerchantID: "eligendi",
        OauthToken: sdk.String("fuga"),
        PageSize: sdk.Int64(5938),
        PageToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("quis"),
    }, operations.ContentRegionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRegionsResponse != nil {
        // handle response
    }
}
```

## ContentRegionsPatch

Updates a region definition in your Merchant Center account.

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
    res, err := s.Regions.ContentRegionsPatch(ctx, operations.ContentRegionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RegionInput: &shared.RegionInput{
            DisplayName: sdk.String("omnis"),
            GeotargetArea: &shared.RegionGeoTargetArea{
                GeotargetCriteriaIds: []string{
                    "quo",
                },
            },
            PostalCodeArea: &shared.RegionPostalCodeArea{
                PostalCodes: []shared.RegionPostalCodeAreaPostalCodeRange{
                    shared.RegionPostalCodeAreaPostalCodeRange{
                        Begin: sdk.String("illo"),
                        End: sdk.String("est"),
                    },
                },
                RegionCode: sdk.String("quia"),
            },
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("cum"),
        Key: sdk.String("maiores"),
        MerchantID: "provident",
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        RegionID: "excepturi",
        UpdateMask: sdk.String("ducimus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.ContentRegionsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Region != nil {
        // handle response
    }
}
```
