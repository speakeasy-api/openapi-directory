<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.ContactcenteraiplatformProjectsLocationsContactCentersCreate(ctx, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ContactCenterInput: &shared.ContactCenterInput{
            AdminUser: &shared.AdminUser{
                FamilyName: sdk.String("provident"),
                GivenName: sdk.String("distinctio"),
            },
            CcaipManagedUsers: sdk.Bool(false),
            CustomerDomainPrefix: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            InstanceConfig: &shared.InstanceConfig{
                InstanceSize: shared.InstanceConfigInstanceSizeEnumStandard3Xlarge.ToPointer(),
            },
            Labels: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            Name: sdk.String("Raquel Bednar"),
            SamlParams: &shared.SAMLParams{
                Certificate: sdk.String("suscipit"),
                EntityID: sdk.String("molestiae"),
                SsoURI: sdk.String("minus"),
                UserEmail: sdk.String("placeat"),
            },
            Uris: &shared.URIs{
                ChatBotURI: sdk.String("voluptatum"),
                MediaURI: sdk.String("iusto"),
                RootURI: sdk.String("excepturi"),
                VirtualAgentStreamingServiceURI: sdk.String("nisi"),
            },
            UserEmail: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        ContactCenterID: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        RequestID: sdk.String("quo"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("at"),
    }, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity{
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