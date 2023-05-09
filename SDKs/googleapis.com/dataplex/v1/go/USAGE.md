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
    res, err := s.Projects.DataplexProjectsLocationsDataAttributeBindingsCreate(ctx, operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDataplexV1DataAttributeBindingInput: &shared.GoogleCloudDataplexV1DataAttributeBindingInput{
            Attributes: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Description: sdk.String("nulla"),
            DisplayName: sdk.String("corrupti"),
            Etag: sdk.String("illum"),
            Labels: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
            Paths: []shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                    Name: sdk.String("Alexandra Schulist"),
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                    Name: sdk.String("Erica Bogisich III"),
                },
            },
            Resource: sdk.String("repellendus"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        DataAttributeBindingID: sdk.String("at"),
        Fields: sdk.String("at"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("molestiae"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->