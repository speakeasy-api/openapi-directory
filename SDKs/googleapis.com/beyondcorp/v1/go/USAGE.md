<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sit",
        },
        QueryParams: operations.BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AppConnectionID: "consequuntur",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
            ValidateOnly: true,
        },
        Request: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput{
            ApplicationEndpoint: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint{
                Host: "et",
                Port: 7144924247938981575,
            },
            Connectors: []string{
                "et",
                "voluptate",
                "iste",
            },
            DisplayName: "vitae",
            Gateway: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput{
                AppGateway: "totam",
                Type: "TYPE_UNSPECIFIED",
            },
            Labels: map[string]string{
                "debitis": "vel",
                "odio": "dolore",
                "id": "aspernatur",
            },
            Name: "accusantium",
            Type: "TCP_PROXY",
        },
    }
    
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->