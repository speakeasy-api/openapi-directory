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
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisCreate(ctx, operations.ApigeeregistryProjectsLocationsApisCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        APIInput: &shared.APIInput{
            Annotations: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            Availability: sdk.String("vel"),
            Description: sdk.String("error"),
            DisplayName: sdk.String("deserunt"),
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: sdk.String("Ricky Hoppe"),
            RecommendedDeployment: sdk.String("placeat"),
            RecommendedVersion: sdk.String("voluptatum"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        APIID: sdk.String("nisi"),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.ApigeeregistryProjectsLocationsApisCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->