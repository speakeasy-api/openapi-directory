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

    req := operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudDataplexV1DataAttributeBindingInput: &shared.GoogleCloudDataplexV1DataAttributeBindingInput{
            Attributes: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Description: "nulla",
            DisplayName: "corrupti",
            Etag: "illum",
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
                    Name: "molestiae",
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    Name: "nisi",
                },
            },
            Resource: "recusandae",
        },
        AccessToken: "temporibus",
        Alt: "json",
        Callback: "quis",
        DataAttributeBindingID: "veritatis",
        Fields: "deserunt",
        Key: "perferendis",
        OauthToken: "ipsam",
        Parent: "repellendus",
        PrettyPrint: false,
        QuotaUser: "sapiente",
        UploadType: "quo",
        UploadProtocol: "odit",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.DataplexProjectsLocationsDataAttributeBindingsCreate(ctx, req, operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity{
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