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
        DollarXgafv: "2",
        GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "distinctio",
                        DisplayName: "quibusdam",
                        Index: 602763,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "nulla",
                        DisplayName: "corrupti",
                        Index: 847252,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "vel",
                        DisplayName: "error",
                        Index: 645894,
                    },
                },
                BlockingResources: []string{
                    "iure",
                    "magnam",
                },
                Description: "debitis",
                DisplayName: "ipsa",
                Name: "delectus",
            },
        },
        AccessToken: "tempora",
        Alt: "media",
        Callback: "molestiae",
        Fields: "minus",
        Key: "placeat",
        OauthToken: "voluptatum",
        Parent: "iusto",
        PrettyPrint: false,
        QuotaUser: "excepturi",
        UploadType: "nisi",
        UploadProtocol: "recusandae",
    }

    ctx := context.Background()
    res, err := s.Projects.DatalabelingProjectsAnnotationSpecSetsCreate(ctx, req, operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1AnnotationSpecSet != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->