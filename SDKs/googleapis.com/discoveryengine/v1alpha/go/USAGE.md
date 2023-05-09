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
    res, err := s.Projects.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(ctx, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDiscoveryengineV1alphaDocument: &shared.GoogleCloudDiscoveryengineV1alphaDocument{
            ID: sdk.String("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
            JSONData: sdk.String("perferendis"),
            Name: sdk.String("Estelle Will"),
            ParentDocumentID: sdk.String("at"),
            SchemaID: sdk.String("at"),
            StructData: map[string]interface{}{
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        DocumentID: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDiscoveryengineV1alphaDocument != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->