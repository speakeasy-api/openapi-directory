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
            UserID: "unde",
        },
        QueryParams: operations.FitnessUsersDataSourcesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.DataSource{
            Application: &shared.Application{
                DetailsURL: "eum",
                Name: "iusto",
                PackageName: "ullam",
                Version: "saepe",
            },
            DataQualityStandard: []shared.DataSourceDataQualityStandardEnum{
                "dataQualityBloodGlucoseIso151972013",
            },
            DataStreamID: "enim",
            DataStreamName: "eum",
            DataType: &shared.DataType{
                Field: []shared.DataTypeField{
                    shared.DataTypeField{
                        Format: "floatList",
                        Name: "vel",
                        Optional: false,
                    },
                    shared.DataTypeField{
                        Format: "map",
                        Name: "deleniti",
                        Optional: false,
                    },
                },
                Name: "similique",
            },
            Device: &shared.Device{
                Manufacturer: "reprehenderit",
                Model: "molestiae",
                Type: "headMounted",
                UID: "quasi",
                Version: "laboriosam",
            },
            Name: "dicta",
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