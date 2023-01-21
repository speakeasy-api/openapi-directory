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
            Parent: "sit",
        },
        QueryParams: operations.DatalabelingProjectsAnnotationSpecSetsCreateQueryParams{
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
        Request: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "debitis",
                        DisplayName: "voluptatum",
                        Index: 2339563716805116249,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "ut",
                        DisplayName: "dolorem",
                        Index: 7259475919510918339,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "voluptate",
                        DisplayName: "iste",
                        Index: 3930927879439176946,
                    },
                },
                BlockingResources: []string{
                    "dolores",
                    "illum",
                    "debitis",
                },
                Description: "vel",
                DisplayName: "odio",
                Name: "dolore",
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