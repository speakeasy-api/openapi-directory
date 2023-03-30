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
            Parent: "corrupti",
        },
        QueryParams: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            ContactCenterID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            RequestID: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: "magnam",
                GivenName: "debitis",
            },
            CcaipManagedUsers: false,
            CustomerDomainPrefix: "ipsa",
            DisplayName: "delectus",
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: "STANDARD_SMALL",
            },
            Labels: map[string]string{
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            Name: "iusto",
            SamlParams: &shared.SAMLParams{
                Certificate: "excepturi",
                EntityID: "nisi",
                SsoURI: "recusandae",
                UserEmail: "temporibus",
            },
            Uris: &shared.URIs{
                ChatBotURI: "ab",
                MediaURI: "quis",
                RootURI: "veritatis",
                VirtualAgentStreamingServiceURI: "deserunt",
            },
            UserEmail: "perferendis",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->