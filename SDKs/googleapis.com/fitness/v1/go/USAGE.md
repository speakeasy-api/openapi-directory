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
            UserID: "sit",
        },
        QueryParams: operations.FitnessUsersDataSourcesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.DataSource{
            Application: &shared.Application{
                DetailsURL: "dicta",
                Name: "debitis",
                PackageName: "voluptatum",
                Version: "et",
            },
            DataQualityStandard: []shared.DataSourceDataQualityStandardEnum{
                "dataQualityUnknown",
                "dataQualityUnknown",
                "dataQualityBloodPressureBhsAA",
            },
            DataStreamID: "iste",
            DataStreamName: "vitae",
            DataType: &shared.DataType{
                Field: []shared.DataTypeField{
                    shared.DataTypeField{
                        Format: "map",
                        Name: "illum",
                        Optional: true,
                    },
                    shared.DataTypeField{
                        Format: "floatPoint",
                        Name: "odio",
                        Optional: true,
                    },
                    shared.DataTypeField{
                        Format: "integerList",
                        Name: "aspernatur",
                        Optional: true,
                    },
                },
                Name: "totam",
            },
            Device: &shared.Device{
                Manufacturer: "commodi",
                Model: "quis",
                Type: "phone",
                UID: "aut",
                Version: "odit",
            },
            Name: "non",
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