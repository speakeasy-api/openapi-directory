# LicenseAssignments

### Available Operations

* [LicensingLicenseAssignmentsDelete](#licensinglicenseassignmentsdelete) - Revoke a license.
* [LicensingLicenseAssignmentsGet](#licensinglicenseassignmentsget) - Get a specific user's license by product SKU.
* [LicensingLicenseAssignmentsInsert](#licensinglicenseassignmentsinsert) - Assign a license.
* [LicensingLicenseAssignmentsListForProduct](#licensinglicenseassignmentslistforproduct) - List all users assigned licenses for a specific product SKU.
* [LicensingLicenseAssignmentsListForProductAndSku](#licensinglicenseassignmentslistforproductandsku) - List all users assigned licenses for a specific product SKU.
* [LicensingLicenseAssignmentsPatch](#licensinglicenseassignmentspatch) - Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
* [LicensingLicenseAssignmentsUpdate](#licensinglicenseassignmentsupdate) - Reassign a user's product SKU with a different SKU in the same product.

## LicensingLicenseAssignmentsDelete

Revoke a license.

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
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsDelete(ctx, operations.LicensingLicenseAssignmentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "minus",
        QuotaUser: sdk.String("placeat"),
        SkuID: "voluptatum",
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("excepturi"),
        UserID: "nisi",
    }, operations.LicensingLicenseAssignmentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## LicensingLicenseAssignmentsGet

Get a specific user's license by product SKU.

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
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsGet(ctx, operations.LicensingLicenseAssignmentsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "ipsam",
        QuotaUser: sdk.String("repellendus"),
        SkuID: "sapiente",
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("odit"),
        UserID: "at",
    }, operations.LicensingLicenseAssignmentsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseAssignment != nil {
        // handle response
    }
}
```

## LicensingLicenseAssignmentsInsert

Assign a license.

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
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsInsert(ctx, operations.LicensingLicenseAssignmentsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LicenseAssignmentInsert: &shared.LicenseAssignmentInsert{
            UserID: sdk.String("maiores"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "dolorum",
        QuotaUser: sdk.String("dicta"),
        SkuID: "nam",
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.LicensingLicenseAssignmentsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseAssignment != nil {
        // handle response
    }
}
```

## LicensingLicenseAssignmentsListForProduct

List all users assigned licenses for a specific product SKU.

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
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsListForProduct(ctx, operations.LicensingLicenseAssignmentsListForProductRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        CustomerID: "totam",
        Fields: sdk.String("beatae"),
        Key: sdk.String("commodi"),
        MaxResults: sdk.Int64(473600),
        OauthToken: sdk.String("modi"),
        PageToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "impedit",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.LicensingLicenseAssignmentsListForProductSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseAssignmentList != nil {
        // handle response
    }
}
```

## LicensingLicenseAssignmentsListForProductAndSku

List all users assigned licenses for a specific product SKU.

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
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsListForProductAndSku(ctx, operations.LicensingLicenseAssignmentsListForProductAndSkuRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        CustomerID: "natus",
        Fields: sdk.String("sed"),
        Key: sdk.String("iste"),
        MaxResults: sdk.Int64(222321),
        OauthToken: sdk.String("natus"),
        PageToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "hic",
        QuotaUser: sdk.String("saepe"),
        SkuID: "fuga",
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.LicensingLicenseAssignmentsListForProductAndSkuSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseAssignmentList != nil {
        // handle response
    }
}
```

## LicensingLicenseAssignmentsPatch

Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.

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
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsPatch(ctx, operations.LicensingLicenseAssignmentsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LicenseAssignment: &shared.LicenseAssignment{
            Etags: sdk.String("iure"),
            Kind: sdk.String("saepe"),
            ProductID: sdk.String("quidem"),
            ProductName: sdk.String("architecto"),
            SelfLink: sdk.String("ipsa"),
            SkuID: sdk.String("reiciendis"),
            SkuName: sdk.String("est"),
            UserID: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "enim",
        QuotaUser: sdk.String("omnis"),
        SkuID: "nemo",
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("excepturi"),
        UserID: "accusantium",
    }, operations.LicensingLicenseAssignmentsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseAssignment != nil {
        // handle response
    }
}
```

## LicensingLicenseAssignmentsUpdate

Reassign a user's product SKU with a different SKU in the same product.

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
    res, err := s.LicenseAssignments.LicensingLicenseAssignmentsUpdate(ctx, operations.LicensingLicenseAssignmentsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LicenseAssignment: &shared.LicenseAssignment{
            Etags: sdk.String("culpa"),
            Kind: sdk.String("doloribus"),
            ProductID: sdk.String("sapiente"),
            ProductName: sdk.String("architecto"),
            SelfLink: sdk.String("mollitia"),
            SkuID: sdk.String("dolorem"),
            SkuName: sdk.String("culpa"),
            UserID: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "molestiae",
        QuotaUser: sdk.String("velit"),
        SkuID: "error",
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quis"),
        UserID: "vitae",
    }, operations.LicensingLicenseAssignmentsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LicenseAssignment != nil {
        // handle response
    }
}
```
