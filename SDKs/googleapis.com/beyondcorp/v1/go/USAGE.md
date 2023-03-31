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
        DollarXgafv: "2",
        GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput{
            ApplicationEndpoint: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint{
                Host: "provident",
                Port: 715190,
            },
            Connectors: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            DisplayName: "vel",
            Gateway: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput{
                AppGateway: "error",
                Type: "GCP_REGIONAL_MIG",
            },
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: "delectus",
            Type: "TYPE_UNSPECIFIED",
        },
        AccessToken: "suscipit",
        Alt: "media",
        AppConnectionID: "minus",
        Callback: "placeat",
        Fields: "voluptatum",
        Key: "iusto",
        OauthToken: "excepturi",
        Parent: "nisi",
        PrettyPrint: false,
        QuotaUser: "recusandae",
        RequestID: "temporibus",
        UploadType: "ab",
        UploadProtocol: "quis",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectionsCreate(ctx, req, operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity{
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