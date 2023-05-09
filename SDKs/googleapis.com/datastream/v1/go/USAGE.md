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
            BigqueryProfile: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            DisplayName: sdk.String("vel"),
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: sdk.String("physical-pegboard.info"),
                Password: sdk.String("iure"),
                Port: sdk.Int(297534),
                PrivateKey: sdk.String("debitis"),
                Username: sdk.String("Anahi38"),
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: sdk.String("molestiae"),
                RootPath: sdk.String("minus"),
            },
            Labels: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: sdk.String("bountiful-pension.com"),
                Password: sdk.String("ipsam"),
                Port: sdk.Int(832620),
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: sdk.String("sapiente"),
                    ClientCertificate: sdk.String("quo"),
                    ClientKey: sdk.String("odit"),
                },
                Username: sdk.String("Sarah.Strosin79"),
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "esse": "totam",
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                DatabaseService: sdk.String("fugit"),
                Hostname: sdk.String("miserly-usage.net"),
                Password: sdk.String("totam"),
                Port: sdk.Int(105907),
                Username: sdk.String("Haskell18"),
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: sdk.String("impedit"),
                Hostname: sdk.String("several-increase.biz"),
                Password: sdk.String("excepturi"),
                Port: sdk.Int(135218),
                Username: sdk.String("Aiden.Hane"),
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: sdk.String("iste"),
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "natus": "laboriosam",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        ConnectionProfileID: sdk.String("in"),
        Fields: sdk.String("corporis"),
        Force: sdk.Bool(false),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("iure"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        RequestID: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
        ValidateOnly: sdk.Bool(false),
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