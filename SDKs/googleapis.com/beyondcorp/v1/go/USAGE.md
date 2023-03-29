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

    req := operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest{
        Security: operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BeyondcorpProjectsLocationsAppConnectionsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            AppConnectionID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
            ValidateOnly: false,
        },
        Request: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput{
            ApplicationEndpoint: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint{
                Host: "ullam",
                Port: 891773,
            },
            Connectors: []string{
                "sapiente",
            },
            DisplayName: "enim",
            Gateway: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput{
                AppGateway: "eum",
                Type: "TYPE_UNSPECIFIED",
            },
            Labels: map[string]string{
                "vel": "non",
                "deleniti": "similique",
                "reprehenderit": "molestiae",
                "quo": "quasi",
            },
            Name: "laboriosam",
            Type: "TYPE_UNSPECIFIED",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->