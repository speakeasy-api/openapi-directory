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
            Parent: "unde",
        },
        QueryParams: operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ContactCenterID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: "ullam",
                GivenName: "saepe",
            },
            CcaipManagedUsers: false,
            CustomerDomainPrefix: "inventore",
            DisplayName: "sapiente",
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: "STANDARD_SMALL",
            },
            Labels: map[string]string{
                "voluptatum": "autem",
                "vel": "non",
            },
            Name: "deleniti",
            SamlParams: &shared.SAMLParams{
                Certificate: "similique",
                EntityID: "reprehenderit",
                SsoURI: "molestiae",
                UserEmail: "quo",
            },
            Uris: &shared.URIs{
                ChatBotURI: "quasi",
                MediaURI: "laboriosam",
                RootURI: "dicta",
                VirtualAgentStreamingServiceURI: "est",
            },
            UserEmail: "voluptatem",
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