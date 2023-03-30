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
        Security: operations.FitnessUsersDataSourcesCreateSecurity{
            Option1: &operations.FitnessUsersDataSourcesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FitnessUsersDataSourcesCreatePathParams{
            UserID: "corrupti",
        },
        QueryParams: operations.FitnessUsersDataSourcesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.DataSource{
            Application: &shared.Application{
                DetailsURL: "suscipit",
                Name: "iure",
                PackageName: "magnam",
                Version: "debitis",
            },
            DataQualityStandard: []shared.DataSourceDataQualityStandardEnum{
                "dataQualityBloodGlucoseIso151972013",
            },
            DataStreamID: "tempora",
            DataStreamName: "suscipit",
            DataType: &shared.DataType{
                Field: []shared.DataTypeField{
                    shared.DataTypeField{
                        Format: "floatList",
                        Name: "placeat",
                        Optional: false,
                    },
                    shared.DataTypeField{
                        Format: "map",
                        Name: "iusto",
                        Optional: false,
                    },
                },
                Name: "excepturi",
            },
            Device: &shared.Device{
                Manufacturer: "nisi",
                Model: "recusandae",
                Type: "headMounted",
                UID: "ab",
                Version: "quis",
            },
            Name: "veritatis",
            Type: "derived",
        },
    }

    ctx := context.Background()
    res, err := s.Users.FitnessUsersDataSourcesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSource != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->