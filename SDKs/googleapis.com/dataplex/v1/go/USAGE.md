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
            Parent: "unde",
        },
        QueryParams: operations.DataplexProjectsLocationsDataAttributeBindingsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            DataAttributeBindingID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
            ValidateOnly: false,
        },
        Request: &shared.GoogleCloudDataplexV1DataAttributeBindingInput{
            Attributes: []string{
                "ullam",
                "saepe",
            },
            Description: "inventore",
            DisplayName: "sapiente",
            Etag: "enim",
            Labels: map[string]string{
                "voluptatum": "autem",
                "vel": "non",
            },
            Paths: []shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "reprehenderit",
                        "molestiae",
                        "quo",
                    },
                    Name: "quasi",
                },
                shared.GoogleCloudDataplexV1DataAttributeBindingPath{
                    Attributes: []string{
                        "dicta",
                        "est",
                    },
                    Name: "voluptatem",
                },
            },
            Resource: "consequatur",
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