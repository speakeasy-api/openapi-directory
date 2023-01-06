<!-- Start SDK Example Usage -->
```go
package main

import (
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
            UserID: "repudiandae",
        },
        QueryParams: operations.FitnessUsersDataSourcesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "omnis",
            Alt: "json",
            Callback: "quidem",
            Fields: "et",
            Key: "dignissimos",
            OauthToken: "consequuntur",
            PrettyPrint: true,
            QuotaUser: "perferendis",
            UploadType: "voluptas",
            UploadProtocol: "architecto",
        },
        Request: &shared.DataSource{
            Application: &shared.Application{
                DetailsURL: "temporibus",
                Name: "recusandae",
                PackageName: "eius",
                Version: "aliquam",
            },
            DataQualityStandard: []shared.DataSourceDataQualityStandardEnum{
                "dataQualityBloodGlucoseIso151972013",
            },
            DataStreamID: "et",
            DataStreamName: "ut",
            DataType: &shared.DataType{
                Field: []shared.DataTypeField{
                    shared.DataTypeField{
                        Format: "string",
                        Name: "voluptas",
                        Optional: true,
                    },
                },
                Name: "libero",
            },
            Device: &shared.Device{
                Manufacturer: "qui",
                Model: "optio",
                Type: "phone",
                UID: "dicta",
                Version: "et",
            },
            Name: "quis",
            Type: "raw",
        },
    }
    
    res, err := s.Users.FitnessUsersDataSourcesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DataSource != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->