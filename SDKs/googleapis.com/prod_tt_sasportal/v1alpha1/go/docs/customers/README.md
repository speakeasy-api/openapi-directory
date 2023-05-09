# Customers

### Available Operations

* [ProdTtSasportalCustomersList](#prodttsasportalcustomerslist) - Returns a list of requested customers.
* [ProdTtSasportalCustomersProvisionDeployment](#prodttsasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

## ProdTtSasportalCustomersList

Returns a list of requested customers.

### Example Usage

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
    res, err := s.Customers.ProdTtSasportalCustomersList(ctx, operations.ProdTtSasportalCustomersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PageSize: sdk.Int64(477665),
        PageToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.ProdTtSasportalCustomersListSecurity{
        Option1: &operations.ProdTtSasportalCustomersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalListCustomersResponse != nil {
        // handle response
    }
}
```

## ProdTtSasportalCustomersProvisionDeployment

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### Example Usage

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
    res, err := s.Customers.ProdTtSasportalCustomersProvisionDeployment(ctx, operations.ProdTtSasportalCustomersProvisionDeploymentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SasPortalProvisionDeploymentRequest: &shared.SasPortalProvisionDeploymentRequest{
            NewDeploymentDisplayName: sdk.String("nisi"),
            NewOrganizationDisplayName: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.ProdTtSasportalCustomersProvisionDeploymentSecurity{
        Option1: &operations.ProdTtSasportalCustomersProvisionDeploymentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalProvisionDeploymentResponse != nil {
        // handle response
    }
}
```
