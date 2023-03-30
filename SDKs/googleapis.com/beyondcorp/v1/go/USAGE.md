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
            Parent: "corrupti",
        },
        QueryParams: operations.BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AppConnectionID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
            ValidateOnly: false,
        },
        Request: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput{
            ApplicationEndpoint: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint{
                Host: "magnam",
                Port: 891773,
            },
            Connectors: []string{
                "delectus",
            },
            DisplayName: "tempora",
            Gateway: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput{
                AppGateway: "suscipit",
                Type: "TYPE_UNSPECIFIED",
            },
            Labels: map[string]string{
                "placeat": "voluptatum",
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            Name: "quis",
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