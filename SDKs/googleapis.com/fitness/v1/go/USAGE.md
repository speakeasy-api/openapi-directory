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
            UserID: "saepe",
        },
        QueryParams: operations.FitnessUsersDataSourcesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "hic",
            Alt: "json",
            Callback: "reprehenderit",
            Fields: "voluptas",
            Key: "porro",
            OauthToken: "saepe",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "consectetur",
            UploadProtocol: "ipsam",
        },
        Request: &shared.DataSource{
            Application: &shared.Application{
                DetailsURL: "deserunt",
                Name: "temporibus",
                PackageName: "occaecati",
                Version: "deleniti",
            },
            DataQualityStandard: []shared.DataSourceDataQualityStandardEnum{
                "dataQualityBloodGlucoseIso151972013",
            },
            DataStreamID: "eligendi",
            DataStreamName: "ut",
            DataType: &shared.DataType{
                Field: []shared.DataTypeField{
                    shared.DataTypeField{
                        Format: "map",
                        Name: "blanditiis",
                        Optional: true,
                    },
                    shared.DataTypeField{
                        Format: "map",
                        Name: "voluptatem",
                        Optional: true,
                    },
                },
                Name: "ratione",
            },
            Device: &shared.Device{
                Manufacturer: "qui",
                Model: "nemo",
                Type: "smartDisplay",
                UID: "saepe",
                Version: "deleniti",
            },
            Name: "ex",
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