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
        Security: operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DataplexProjectsLocationsDataAttributeBindingsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DataplexProjectsLocationsDataAttributeBindingsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            DataAttributeBindingID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
            ValidateOnly: false,
        },
        Request: &shared.GoogleCloudDataplexV1DataAttributeBindingInput{
            Attributes: []string{
                "magnam",
                "debitis",
            },
            Description: "ipsa",
            DisplayName: "delectus",
            Etag: "tempora",
            Labels: map[string]string{
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            Paths: []shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                    Name: "ab",
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "veritatis",
                        "deserunt",
                    },
                    Name: "perferendis",
                },
            },
            Resource: "ipsam",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DataplexProjectsLocationsDataAttributeBindingsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->