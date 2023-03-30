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
            Parent: "corrupti",
        },
        QueryParams: operations.DatalabelingProjectsAnnotationSpecSetsCreateQueryParams{
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
        Request: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "iure",
                        DisplayName: "magnam",
                        Index: 891773,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "ipsa",
                        DisplayName: "delectus",
                        Index: 272656,
                    },
                },
                BlockingResources: []string{
                    "molestiae",
                    "minus",
                },
                Description: "placeat",
                DisplayName: "voluptatum",
                Name: "iusto",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatalabelingProjectsAnnotationSpecSetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1AnnotationSpecSet != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->