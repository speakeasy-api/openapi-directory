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
    res, err := s.Platforms.IdeahubPlatformsPropertiesIdeaActivitiesCreate(ctx, operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleSearchIdeahubV1betaIdeaActivity: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Name: sdk.String("Johnnie Stamm"),
            Topics: []string{
                "suscipit",
                "iure",
                "magnam",
            },
            Type: shared.GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostUnpublished.ToPointer(),
            URI: sdk.String("http://whirlwind-diver.info"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("excepturi"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1betaIdeaActivity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->