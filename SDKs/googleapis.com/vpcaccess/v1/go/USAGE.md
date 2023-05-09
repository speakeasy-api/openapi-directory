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
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsCreate(ctx, operations.VpcaccessProjectsLocationsConnectorsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectorInput: &shared.ConnectorInput{
            IPCidrRange: sdk.String("provident"),
            MachineType: sdk.String("distinctio"),
            MaxInstances: sdk.Int(844266),
            MaxThroughput: sdk.Int(602763),
            MinInstances: sdk.Int(857946),
            MinThroughput: sdk.Int(544883),
            Name: sdk.String("Ben Mueller"),
            Network: sdk.String("iure"),
            Subnet: &shared.Subnet{
                Name: sdk.String("Raquel Bednar"),
                ProjectID: sdk.String("suscipit"),
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        ConnectorID: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.VpcaccessProjectsLocationsConnectorsCreateSecurity{
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