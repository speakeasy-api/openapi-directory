<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FitnessUsersDataSourcesCreateRequest{
        DollarXgafv: "2",
        DataSource: &shared.DataSource{
            Application: &shared.Application{
                DetailsURL: "provident",
                Name: "distinctio",
                PackageName: "quibusdam",
                Version: "unde",
            },
            DataQualityStandard: []shared.DataSourceDataQualityStandardEnum{
                "dataQualityBloodPressureBhsAB",
                "dataQualityBloodGlucoseIso151972003",
                "dataQualityBloodPressureBhsAA",
                "dataQualityBloodPressureBhsBA",
            },
            DataStreamID: "deserunt",
            DataStreamName: "suscipit",
            DataType: &shared.DataType{
                Field: []shared.DataTypeField{
                    shared.DataTypeField{
                        Format: "string",
                        Name: "debitis",
                        Optional: false,
                    },
                    shared.DataTypeField{
                        Format: "integer",
                        Name: "delectus",
                        Optional: false,
                    },
                },
                Name: "tempora",
            },
            Device: &shared.Device{
                Manufacturer: "suscipit",
                Model: "molestiae",
                Type: "headMounted",
                UID: "placeat",
                Version: "voluptatum",
            },
            Name: "iusto",
            Type: "derived",
        },
        AccessToken: "nisi",
        Alt: "proto",
        Callback: "temporibus",
        Fields: "ab",
        Key: "quis",
        OauthToken: "veritatis",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "perferendis",
        UploadProtocol: "ipsam",
        UserID: "repellendus",
    }

    ctx := context.Background()
    res, err := s.Users.FitnessUsersDataSourcesCreate(ctx, req, operations.FitnessUsersDataSourcesCreateSecurity{
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