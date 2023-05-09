<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DatalabelingProjectsAnnotationSpecSetsCreate(ctx, operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: sdk.String("distinctio"),
                        DisplayName: sdk.String("quibusdam"),
                        Index: sdk.Int(602763),
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: sdk.String("nulla"),
                        DisplayName: sdk.String("corrupti"),
                        Index: sdk.Int(847252),
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: sdk.String("vel"),
                        DisplayName: sdk.String("error"),
                        Index: sdk.Int(645894),
                    },
                },
                BlockingResources: []string{
                    "iure",
                    "magnam",
                },
                Description: sdk.String("debitis"),
                DisplayName: sdk.String("ipsa"),
                Name: sdk.String("Ricky Hoppe"),
            },
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("recusandae"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity{
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