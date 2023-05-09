# DimensionValues

### Available Operations

* [DfareportingDimensionValuesQuery](#dfareportingdimensionvaluesquery) - Retrieves list of report dimension values for a list of filters.

## DfareportingDimensionValuesQuery

Retrieves list of report dimension values for a list of filters.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DimensionValues.DfareportingDimensionValuesQuery(ctx, operations.DfareportingDimensionValuesQueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DimensionValueRequest: &shared.DimensionValueRequest{
            DimensionName: sdk.String("incidunt"),
            EndDate: types.MustDateFromString("2022-03-31"),
            Filters: []shared.DimensionFilter{
                shared.DimensionFilter{
                    DimensionName: sdk.String("repudiandae"),
                    Kind: sdk.String("quidem"),
                    Value: sdk.String("occaecati"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("labore"),
                    Kind: sdk.String("ipsam"),
                    Value: sdk.String("voluptate"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("quod"),
                    Kind: sdk.String("nihil"),
                    Value: sdk.String("recusandae"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("illum"),
                    Kind: sdk.String("laborum"),
                    Value: sdk.String("reiciendis"),
                },
            },
            Kind: sdk.String("consectetur"),
            StartDate: types.MustDateFromString("2021-05-12"),
        },
        AccessToken: sdk.String("illo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("asperiores"),
        MaxResults: sdk.Int64(486354),
        OauthToken: sdk.String("nisi"),
        PageToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "assumenda",
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("quia"),
    }, operations.DfareportingDimensionValuesQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DimensionValueList != nil {
        // handle response
    }
}
```
