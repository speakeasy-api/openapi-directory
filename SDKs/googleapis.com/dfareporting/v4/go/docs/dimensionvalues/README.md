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
            DimensionName: sdk.String("inventore"),
            EndDate: types.MustDateFromString("2021-01-19"),
            Filters: []shared.DimensionFilter{
                shared.DimensionFilter{
                    DimensionName: sdk.String("ab"),
                    Kind: sdk.String("neque"),
                    Value: sdk.String("pariatur"),
                },
                shared.DimensionFilter{
                    DimensionName: sdk.String("excepturi"),
                    Kind: sdk.String("enim"),
                    Value: sdk.String("culpa"),
                },
            },
            Kind: sdk.String("dolore"),
            StartDate: types.MustDateFromString("2022-08-09"),
        },
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("corrupti"),
        MaxResults: sdk.Int64(447082),
        OauthToken: sdk.String("quia"),
        PageToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dicta",
        QuotaUser: sdk.String("eveniet"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("quos"),
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
