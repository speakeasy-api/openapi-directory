# Applications

### Available Operations

* [DatatransferApplicationsGet](#datatransferapplicationsget) - Retrieves information about an application for the given application ID.
* [DatatransferApplicationsList](#datatransferapplicationslist) - Lists the applications available for data transfer for a customer.

## DatatransferApplicationsGet

Retrieves information about an application for the given application ID.

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
    res, err := s.Applications.DatatransferApplicationsGet(ctx, operations.DatatransferApplicationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        ApplicationID: "debitis",
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DatatransferApplicationsGetSecurity{
        Option1: &operations.DatatransferApplicationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## DatatransferApplicationsList

Lists the applications available for data transfer for a customer.

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
    res, err := s.Applications.DatatransferApplicationsList(ctx, operations.DatatransferApplicationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        CustomerID: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        MaxResults: sdk.Int64(337396),
        OauthToken: sdk.String("veritatis"),
        PageToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.DatatransferApplicationsListSecurity{
        Option1: &operations.DatatransferApplicationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationsListResponse != nil {
        // handle response
    }
}
```
