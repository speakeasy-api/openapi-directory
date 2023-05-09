# Operations

### Available Operations

* [SQLOperationsGet](#sqloperationsget) - Retrieves an instance operation that has been performed on an instance.
* [SQLOperationsList](#sqloperationslist) - Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

## SQLOperationsGet

Retrieves an instance operation that has been performed on an instance.

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
    res, err := s.Operations.SQLOperationsGet(ctx, operations.SQLOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("mollitia"),
        Operation: "voluptas",
        PrettyPrint: sdk.Bool(false),
        Project: "alias",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.SQLOperationsGetSecurity{
        Option1: &operations.SQLOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SQLOperationsList

Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

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
    res, err := s.Operations.SQLOperationsList(ctx, operations.SQLOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("nesciunt"),
        Instance: sdk.String("quae"),
        Key: sdk.String("recusandae"),
        MaxResults: sdk.Int64(607249),
        OauthToken: sdk.String("quaerat"),
        PageToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        Project: "ex",
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.SQLOperationsListSecurity{
        Option1: &operations.SQLOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationsListResponse != nil {
        // handle response
    }
}
```
