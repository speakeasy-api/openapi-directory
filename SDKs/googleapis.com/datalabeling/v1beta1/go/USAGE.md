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
            Parent: "doloremque",
        },
        QueryParams: operations.DatalabelingProjectsAnnotationSpecSetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "laborum",
            Alt: "json",
            Callback: "officia",
            Fields: "illo",
            Key: "voluptatum",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "saepe",
            UploadType: "aut",
            UploadProtocol: "quisquam",
        },
        Request: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "dolorum",
                        DisplayName: "soluta",
                        Index: 203986857844851483,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "perspiciatis",
                        DisplayName: "ea",
                        Index: 616583927086284384,
                    },
                },
                BlockingResources: []string{
                    "consequuntur",
                    "vero",
                },
                Description: "est",
                DisplayName: "praesentium",
                Name: "voluptatibus",
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