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
    
    req := operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest{
        Security: operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatalabelingProjectsAnnotationSpecSetsCreatePathParams{
            Parent: "praesentium",
        },
        QueryParams: operations.DatalabelingProjectsAnnotationSpecSetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "mollitia",
            Alt: "proto",
            Callback: "quaerat",
            Fields: "nam",
            Key: "modi",
            OauthToken: "officia",
            PrettyPrint: true,
            QuotaUser: "commodi",
            UploadType: "quod",
            UploadProtocol: "laudantium",
        },
        Request: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "reprehenderit",
                        DisplayName: "nihil",
                        Index: 7982767515420111537,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "est",
                        DisplayName: "dolorum",
                        Index: 4160462555660225872,
                    },
                },
                BlockingResources: []string{
                    "magni",
                    "quia",
                    "quibusdam",
                },
                Description: "dolore",
                DisplayName: "eveniet",
                Name: "pariatur",
            },
        },
    }
    
    res, err := s.Projects.DatalabelingProjectsAnnotationSpecSetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1AnnotationSpecSet != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->