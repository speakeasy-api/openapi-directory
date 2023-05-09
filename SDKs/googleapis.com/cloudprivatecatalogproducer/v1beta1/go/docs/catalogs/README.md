# Catalogs

### Available Operations

* [CloudprivatecatalogproducerCatalogsAssociationsCreate](#cloudprivatecatalogproducercatalogsassociationscreate) - Creates an Association instance under a given Catalog.
* [CloudprivatecatalogproducerCatalogsAssociationsList](#cloudprivatecatalogproducercatalogsassociationslist) - Lists all Association resources under a catalog.
* [CloudprivatecatalogproducerCatalogsCreate](#cloudprivatecatalogproducercatalogscreate) - Creates a new Catalog resource.
* [CloudprivatecatalogproducerCatalogsGetIamPolicy](#cloudprivatecatalogproducercatalogsgetiampolicy) - Gets IAM policy for the specified Catalog.
* [CloudprivatecatalogproducerCatalogsList](#cloudprivatecatalogproducercatalogslist) - Lists Catalog resources that the producer has access to, within the
scope of the parent resource.
* [CloudprivatecatalogproducerCatalogsProductsCopy](#cloudprivatecatalogproducercatalogsproductscopy) - Copies a Product under another Catalog.
* [CloudprivatecatalogproducerCatalogsProductsCreate](#cloudprivatecatalogproducercatalogsproductscreate) - Creates a Product instance under a given Catalog.
* [CloudprivatecatalogproducerCatalogsProductsIconsUpload](#cloudprivatecatalogproducercatalogsproductsiconsupload) - Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.
* [CloudprivatecatalogproducerCatalogsProductsList](#cloudprivatecatalogproducercatalogsproductslist) - Lists Product resources that the producer has access to, within the
scope of the parent catalog.
* [CloudprivatecatalogproducerCatalogsProductsVersionsCreate](#cloudprivatecatalogproducercatalogsproductsversionscreate) - Creates a Version instance under a given Product.
* [CloudprivatecatalogproducerCatalogsProductsVersionsDelete](#cloudprivatecatalogproducercatalogsproductsversionsdelete) - Hard deletes a Version.
* [CloudprivatecatalogproducerCatalogsProductsVersionsGet](#cloudprivatecatalogproducercatalogsproductsversionsget) - Returns the requested Version resource.
* [CloudprivatecatalogproducerCatalogsProductsVersionsList](#cloudprivatecatalogproducercatalogsproductsversionslist) - Lists Version resources that the producer has access to, within the
scope of the parent Product.
* [CloudprivatecatalogproducerCatalogsProductsVersionsPatch](#cloudprivatecatalogproducercatalogsproductsversionspatch) - Updates a specific Version resource.
* [CloudprivatecatalogproducerCatalogsSetIamPolicy](#cloudprivatecatalogproducercatalogssetiampolicy) - Sets the IAM policy for the specified Catalog.
* [CloudprivatecatalogproducerCatalogsTestIamPermissions](#cloudprivatecatalogproducercatalogstestiampermissions) - Tests the IAM permissions for the specified Catalog.
* [CloudprivatecatalogproducerCatalogsUndelete](#cloudprivatecatalogproducercatalogsundelete) - Undeletes a deleted Catalog and all resources under it.

## CloudprivatecatalogproducerCatalogsAssociationsCreate

Creates an Association instance under a given Catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsAssociationsCreate(ctx, operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest: &shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest{
            Association: &shared.GoogleCloudPrivatecatalogproducerV1beta1Association{
                CreateTime: sdk.String("molestiae"),
                Name: sdk.String("Irving Lehner"),
                Resource: sdk.String("nisi"),
            },
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsAssociationsList

Lists all Association resources under a catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsAssociationsList(ctx, operations.CloudprivatecatalogproducerCatalogsAssociationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        PageSize: sdk.Int64(800911),
        PageToken: sdk.String("esse"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.CloudprivatecatalogproducerCatalogsAssociationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsCreate

Creates a new Catalog resource.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsCreate(ctx, operations.CloudprivatecatalogproducerCatalogsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPrivatecatalogproducerV1beta1Catalog: &shared.GoogleCloudPrivatecatalogproducerV1beta1Catalog{
            CreateTime: sdk.String("officia"),
            Description: sdk.String("occaecati"),
            DisplayName: sdk.String("fugit"),
            Name: sdk.String("Irvin Rosenbaum III"),
            Parent: sdk.String("molestiae"),
            UpdateTime: sdk.String("modi"),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.CloudprivatecatalogproducerCatalogsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsGetIamPolicy

Gets IAM policy for the specified Catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsGetIamPolicy(ctx, operations.CloudprivatecatalogproducerCatalogsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        OptionsRequestedPolicyVersion: sdk.Int64(902599),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        Resource: "in",
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    }, operations.CloudprivatecatalogproducerCatalogsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsList

Lists Catalog resources that the producer has access to, within the
scope of the parent resource.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsList(ctx, operations.CloudprivatecatalogproducerCatalogsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(653140),
        PageToken: sdk.String("laborum"),
        Parent: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.CloudprivatecatalogproducerCatalogsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsCopy

Copies a Product under another Catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsCopy(ctx, operations.CloudprivatecatalogproducerCatalogsProductsCopyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest: &shared.GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest{
            DestinationProductName: sdk.String("enim"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        Name: "Cecilia Yundt MD",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsCopySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsCreate

Creates a Product instance under a given Catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsCreate(ctx, operations.CloudprivatecatalogproducerCatalogsProductsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPrivatecatalogproducerV1beta1Product: &shared.GoogleCloudPrivatecatalogproducerV1beta1Product{
            AssetType: sdk.String("occaecati"),
            CreateTime: sdk.String("numquam"),
            DisplayMetadata: map[string]interface{}{
                "quam": "molestiae",
                "velit": "error",
            },
            IconURI: sdk.String("quia"),
            Name: sdk.String("Gloria Padberg"),
            UpdateTime: sdk.String("odit"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsIconsUpload

Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsIconsUpload(ctx, operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest: &shared.GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest{
            Icon: sdk.String("quasi"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        Product: "ipsa",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("cum"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsList

Lists Product resources that the producer has access to, within the
scope of the parent catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsList(ctx, operations.CloudprivatecatalogproducerCatalogsProductsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("maiores"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("dolore"),
        PageSize: sdk.Int64(480894),
        PageToken: sdk.String("dicta"),
        Parent: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsVersionsCreate

Creates a Version instance under a given Product.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsVersionsCreate(ctx, operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPrivatecatalogproducerV1beta1Version: &shared.GoogleCloudPrivatecatalogproducerV1beta1Version{
            Asset: map[string]interface{}{
                "ipsum": "quidem",
            },
            CreateTime: sdk.String("molestias"),
            Description: sdk.String("excepturi"),
            Name: sdk.String("Joel Lang"),
            OriginalAsset: map[string]interface{}{
                "repudiandae": "sint",
            },
            UpdateTime: sdk.String("veritatis"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("quibusdam"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsVersionsDelete

Hard deletes a Version.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsVersionsDelete(ctx, operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Force: sdk.Bool(false),
        Key: sdk.String("quos"),
        Name: "Louise Simonis Sr.",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsVersionsGet

Returns the requested Version resource.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsVersionsGet(ctx, operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("non"),
        Key: sdk.String("eligendi"),
        Name: "Gilbert Medhurst",
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("a"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsVersionsList

Lists Version resources that the producer has access to, within the
scope of the parent Product.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsVersionsList(ctx, operations.CloudprivatecatalogproducerCatalogsProductsVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(297437),
        PageToken: sdk.String("cumque"),
        Parent: "facere",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsProductsVersionsPatch

Updates a specific Version resource.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsProductsVersionsPatch(ctx, operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudPrivatecatalogproducerV1beta1Version: &shared.GoogleCloudPrivatecatalogproducerV1beta1Version{
            Asset: map[string]interface{}{
                "occaecati": "enim",
            },
            CreateTime: sdk.String("accusamus"),
            Description: sdk.String("delectus"),
            Name: sdk.String("Rene Reinger"),
            OriginalAsset: map[string]interface{}{
                "sapiente": "amet",
                "deserunt": "nisi",
                "vel": "natus",
            },
            UpdateTime: sdk.String("omnis"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("distinctio"),
        Name: "Leroy Greenfelder",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UpdateMask: sdk.String("vero"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsSetIamPolicy

Sets the IAM policy for the specified Catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsSetIamPolicy(ctx, operations.CloudprivatecatalogproducerCatalogsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "provident",
                                    "quos",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "mollitia",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ad",
                                    "eum",
                                    "dolor",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("odit"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("quasi"),
                            Expression: sdk.String("iure"),
                            Location: sdk.String("doloribus"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "maxime",
                            "deleniti",
                        },
                        Role: sdk.String("facilis"),
                    },
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("in"),
                            Expression: sdk.String("architecto"),
                            Location: sdk.String("architecto"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "expedita",
                            "nihil",
                        },
                        Role: sdk.String("repellat"),
                    },
                },
                Etag: sdk.String("quibusdam"),
                Version: sdk.Int(149448),
            },
            UpdateMask: sdk.String("saepe"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        Resource: "quo",
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.CloudprivatecatalogproducerCatalogsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsTestIamPermissions

Tests the IAM permissions for the specified Catalog.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsTestIamPermissions(ctx, operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "excepturi",
                "odit",
            },
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        Resource: "autem",
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CloudprivatecatalogproducerCatalogsUndelete

Undeletes a deleted Catalog and all resources under it.

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
    res, err := s.Catalogs.CloudprivatecatalogproducerCatalogsUndelete(ctx, operations.CloudprivatecatalogproducerCatalogsUndeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptatibus": "perferendis",
            "fugiat": "amet",
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("libero"),
        Name: "Ernest Hayes",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
    }, operations.CloudprivatecatalogproducerCatalogsUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
