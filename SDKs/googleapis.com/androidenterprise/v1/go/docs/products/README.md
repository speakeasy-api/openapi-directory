# Products

### Available Operations

* [AndroidenterpriseProductsApprove](#androidenterpriseproductsapprove) -  Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [AndroidenterpriseProductsGenerateApprovalURL](#androidenterpriseproductsgenerateapprovalurl) - Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [AndroidenterpriseProductsGet](#androidenterpriseproductsget) - Retrieves details of a product for display to an enterprise admin.
* [AndroidenterpriseProductsGetAppRestrictionsSchema](#androidenterpriseproductsgetapprestrictionsschema) - Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
* [AndroidenterpriseProductsGetPermissions](#androidenterpriseproductsgetpermissions) - Retrieves the Android app permissions required by this app.
* [AndroidenterpriseProductsList](#androidenterpriseproductslist) - Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* [AndroidenterpriseProductsUnapprove](#androidenterpriseproductsunapprove) - Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

## AndroidenterpriseProductsApprove

 Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

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
    res, err := s.Products.AndroidenterpriseProductsApprove(ctx, operations.AndroidenterpriseProductsApproveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProductsApproveRequest: &shared.ProductsApproveRequest{
            ApprovalURLInfo: &shared.ApprovalURLInfo{
                ApprovalURL: sdk.String("aliquam"),
            },
            ApprovedPermissions: shared.ProductsApproveRequestApprovedPermissionsEnumAllPermissions.ToPointer(),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        EnterpriseID: "cum",
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "nesciunt",
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.AndroidenterpriseProductsApproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AndroidenterpriseProductsGenerateApprovalURL

Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

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
    res, err := s.Products.AndroidenterpriseProductsGenerateApprovalURL(ctx, operations.AndroidenterpriseProductsGenerateApprovalURLRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        EnterpriseID: "sit",
        Fields: sdk.String("rerum"),
        Key: sdk.String("sed"),
        LanguageCode: sdk.String("reiciendis"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "asperiores",
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.AndroidenterpriseProductsGenerateApprovalURLSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsGenerateApprovalURLResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseProductsGet

Retrieves details of a product for display to an enterprise admin.

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
    res, err := s.Products.AndroidenterpriseProductsGet(ctx, operations.AndroidenterpriseProductsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        EnterpriseID: "sed",
        Fields: sdk.String("in"),
        Key: sdk.String("commodi"),
        Language: sdk.String("quidem"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "voluptas",
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.AndroidenterpriseProductsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## AndroidenterpriseProductsGetAppRestrictionsSchema

Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.

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
    res, err := s.Products.AndroidenterpriseProductsGetAppRestrictionsSchema(ctx, operations.AndroidenterpriseProductsGetAppRestrictionsSchemaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        EnterpriseID: "perferendis",
        Fields: sdk.String("corrupti"),
        Key: sdk.String("maiores"),
        Language: sdk.String("incidunt"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "provident",
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppRestrictionsSchema != nil {
        // handle response
    }
}
```

## AndroidenterpriseProductsGetPermissions

Retrieves the Android app permissions required by this app.

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
    res, err := s.Products.AndroidenterpriseProductsGetPermissions(ctx, operations.AndroidenterpriseProductsGetPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        EnterpriseID: "tempora",
        Fields: sdk.String("tempora"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "ex",
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.AndroidenterpriseProductsGetPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductPermissions != nil {
        // handle response
    }
}
```

## AndroidenterpriseProductsList

Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

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
    res, err := s.Products.AndroidenterpriseProductsList(ctx, operations.AndroidenterpriseProductsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("incidunt"),
        EnterpriseID: "ipsam",
        Fields: sdk.String("debitis"),
        Key: sdk.String("rem"),
        Language: sdk.String("sit"),
        MaxResults: sdk.Int64(750595),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("veniam"),
        QuotaUser: sdk.String("minima"),
        Token: sdk.String("recusandae"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.AndroidenterpriseProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseProductsUnapprove

Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Products.AndroidenterpriseProductsUnapprove(ctx, operations.AndroidenterpriseProductsUnapproveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        EnterpriseID: "veniam",
        Fields: sdk.String("in"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        ProductID: "laudantium",
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("cum"),
    }, operations.AndroidenterpriseProductsUnapproveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
