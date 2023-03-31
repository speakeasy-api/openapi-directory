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
        DollarXgafv: "2",
        ContactCenterInput: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: "provident",
                GivenName: "distinctio",
            },
            CcaipManagedUsers: false,
            CustomerDomainPrefix: "quibusdam",
            DisplayName: "unde",
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: "STANDARD_3XLARGE",
            },
            Labels: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            Name: "magnam",
            SamlParams: &shared.SAMLParams{
                Certificate: "debitis",
                EntityID: "ipsa",
                SsoURI: "delectus",
                UserEmail: "tempora",
            },
            Uris: &shared.URIs{
                ChatBotURI: "suscipit",
                MediaURI: "molestiae",
                RootURI: "minus",
                VirtualAgentStreamingServiceURI: "placeat",
            },
            UserEmail: "voluptatum",
        },
        AccessToken: "iusto",
        Alt: "media",
        Callback: "nisi",
        ContactCenterID: "recusandae",
        Fields: "temporibus",
        Key: "ab",
        OauthToken: "quis",
        Parent: "veritatis",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        RequestID: "perferendis",
        UploadType: "ipsam",
        UploadProtocol: "repellendus",
    }

    ctx := context.Background()
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, req, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->