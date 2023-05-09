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
            DimensionName: sdk.String("nesciunt"),
            EndDate: types.MustDateFromString("2022-12-11"),
            Filters: []shared.DimensionFilter{
                shared.DimensionFilter{
                    DimensionName: sdk.String("perferendis"),
                    Kind: sdk.String("qui"),
                    Value: sdk.String("velit"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("repellendus"),
                    Kind: sdk.String("quod"),
                    Value: sdk.String("error"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("ipsa"),
                    Kind: sdk.String("beatae"),
                    Value: sdk.String("doloribus"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("veniam"),
                    Kind: sdk.String("animi"),
                    Value: sdk.String("delectus"),
                },
            },
            Kind: sdk.String("pariatur"),
            StartDate: types.MustDateFromString("2022-05-04"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("praesentium"),
        MaxResults: sdk.Int64(257324),
        OauthToken: sdk.String("iure"),
        PageToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "itaque",
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("praesentium"),
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
