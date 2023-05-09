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
    res, err := s.Projects.BigqueryconnectionProjectsLocationsConnectionsCreate(ctx, operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionInput: &shared.ConnectionInput{
            CloudSQL: &shared.CloudSQLPropertiesInput{
                Credential: &shared.CloudSQLCredential{
                    Password: sdk.String("provident"),
                    Username: sdk.String("Micheal_Sporer"),
                },
                Database: sdk.String("corrupti"),
                InstanceID: sdk.String("illum"),
                Type: shared.CloudSQLPropertiesTypeEnumPostgres.ToPointer(),
            },
            Description: sdk.String("error"),
            FriendlyName: sdk.String("deserunt"),
            Name: sdk.String("Willie Gulgowski DVM"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        ConnectionID: sdk.String("minus"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity{
        Option1: &operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->