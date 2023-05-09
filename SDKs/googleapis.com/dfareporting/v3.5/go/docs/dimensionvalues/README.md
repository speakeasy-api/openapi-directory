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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DimensionValueRequest: &shared.DimensionValueRequest{
            DimensionName: sdk.String("occaecati"),
            EndDate: types.MustDateFromString("2022-01-28"),
            Filters: []shared.DimensionFilter{
                shared.DimensionFilter{
                    DimensionName: sdk.String("itaque"),
                    Kind: sdk.String("animi"),
                    Value: sdk.String("totam"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("ullam"),
                    Kind: sdk.String("nisi"),
                    Value: sdk.String("nemo"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("atque"),
                    Kind: sdk.String("optio"),
                    Value: sdk.String("fugit"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("at"),
                    Kind: sdk.String("modi"),
                    Value: sdk.String("delectus"),
                },
            },
            Kind: sdk.String("aliquam"),
            StartDate: types.MustDateFromString("2021-06-15"),
        },
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("labore"),
        Key: sdk.String("hic"),
        MaxResults: sdk.Int64(135766),
        OauthToken: sdk.String("nihil"),
        PageToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "tenetur",
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("autem"),
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
