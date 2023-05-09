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
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            DisplayName: sdk.String("provident"),
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: sdk.String("salty-stag.name"),
                Password: sdk.String("nulla"),
                Port: sdk.Int(544883),
                PrivateKey: sdk.String("illum"),
                Username: sdk.String("Henry.Mueller"),
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: sdk.String("iure"),
                RootPath: sdk.String("magnam"),
            },
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: sdk.String("lawful-missionary.info"),
                Password: sdk.String("recusandae"),
                Port: sdk.Int(836079),
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: sdk.String("ab"),
                    ClientCertificate: sdk.String("quis"),
                    ClientKey: sdk.String("veritatis"),
                },
                Username: sdk.String("Lydia_Aufderhar"),
            },
            NoConnectivity: map[string]interface{}{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "totam": "porro",
                    "dolorum": "dicta",
                },
                DatabaseService: sdk.String("nam"),
                Hostname: sdk.String("posh-muffin.com"),
                Password: sdk.String("deleniti"),
                Port: sdk.Int(944669),
                Username: sdk.String("Nina41"),
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: sdk.String("molestiae"),
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "qui": "impedit",
                "cum": "esse",
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        ConnectionProfileID: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        RequestID: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
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