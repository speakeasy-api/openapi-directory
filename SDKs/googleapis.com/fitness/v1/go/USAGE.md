<!-- Start SDK Example Usage -->
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
    res, err := s.Users.FitnessUsersDataSourcesCreate(ctx, operations.FitnessUsersDataSourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DataSource: &shared.DataSource{
            Application: &shared.Application{
                DetailsURL: sdk.String("provident"),
                Name: sdk.String("Ellis Mitchell"),
                PackageName: sdk.String("illum"),
                Version: sdk.String("vel"),
            },
            DataQualityStandard: []shared.DataSourceDataQualityStandardEnum{
                shared.DataSourceDataQualityStandardEnumDataQualityBloodPressureBhsBa,
                shared.DataSourceDataQualityStandardEnumDataQualityBloodPressureAami,
                shared.DataSourceDataQualityStandardEnumDataQualityBloodPressureBhsAa,
            },
            DataStreamID: sdk.String("magnam"),
            DataStreamName: sdk.String("debitis"),
            DataType: &shared.DataType{
                Field: []shared.DataTypeField{
                    shared.DataTypeField{
                        Format: shared.DataTypeFieldFormatEnumBlob.ToPointer(),
                        Name: sdk.String("Laurie Kreiger"),
                        Optional: sdk.Bool(false),
                    },
                },
                Name: sdk.String("Ted Mante"),
            },
            Device: &shared.Device{
                Manufacturer: sdk.String("temporibus"),
                Model: sdk.String("ab"),
                Type: shared.DeviceTypeEnumTablet.ToPointer(),
                UID: sdk.String("veritatis"),
                Version: sdk.String("deserunt"),
            },
            Name: sdk.String("Roberta Sipes"),
            Type: shared.DataSourceTypeEnumRaw.ToPointer(),
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
        UserID: "dolorum",
    }, operations.FitnessUsersDataSourcesCreateSecurity{
        Option1: &operations.FitnessUsersDataSourcesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSource != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->