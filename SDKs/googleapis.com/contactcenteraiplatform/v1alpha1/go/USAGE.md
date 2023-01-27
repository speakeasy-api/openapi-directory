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
    
    req := operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest{
        Security: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreatePathParams{
            Parent: "sit",
        },
        QueryParams: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ContactCenterID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            RequestID: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.ContactCenterInput{
            CcaipManagedUsers: true,
            CustomerDomainPrefix: "et",
            DisplayName: "ut",
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: "STANDARD_MEDIUM",
            },
            Labels: map[string]string{
                "voluptate": "iste",
                "vitae": "totam",
            },
            Name: "dolores",
            SamlParams: &shared.SamlParams{
                Certificate: "illum",
                EntityID: "debitis",
                SsoURI: "vel",
                UserEmail: "odio",
            },
            Uris: &shared.UrIs{
                ChatBotURI: "dolore",
                MediaURI: "id",
                RootURI: "aspernatur",
                VirtualAgentStreamingServiceURI: "accusantium",
            },
            UserEmail: "totam",
        },
    }
    
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->