# Orgunits

### Available Operations

* [DirectoryOrgunitsDelete](#directoryorgunitsdelete) - Removes an organizational unit.
* [DirectoryOrgunitsGet](#directoryorgunitsget) - Retrieves an organizational unit.
* [DirectoryOrgunitsInsert](#directoryorgunitsinsert) - Adds an organizational unit.
* [DirectoryOrgunitsList](#directoryorgunitslist) - Retrieves a list of all organizational units for an account.
* [DirectoryOrgunitsPatch](#directoryorgunitspatch) - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* [DirectoryOrgunitsUpdate](#directoryorgunitsupdate) - Updates an organizational unit.

## DirectoryOrgunitsDelete

Removes an organizational unit.

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
    res, err := s.Orgunits.DirectoryOrgunitsDelete(ctx, operations.DirectoryOrgunitsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("itaque"),
        CustomerID: "facilis",
        Fields: sdk.String("corrupti"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("sint"),
        OrgUnitPath: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DirectoryOrgunitsDeleteSecurity{
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

## DirectoryOrgunitsGet

Retrieves an organizational unit.

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
    res, err := s.Orgunits.DirectoryOrgunitsGet(ctx, operations.DirectoryOrgunitsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        CustomerID: "a",
        Fields: sdk.String("dolor"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("atque"),
        OrgUnitPath: "beatae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("minus"),
    }, operations.DirectoryOrgunitsGetSecurity{
        Option1: &operations.DirectoryOrgunitsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgUnit != nil {
        // handle response
    }
}
```

## DirectoryOrgunitsInsert

Adds an organizational unit.

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
    res, err := s.Orgunits.DirectoryOrgunitsInsert(ctx, operations.DirectoryOrgunitsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrgUnit: &shared.OrgUnit{
            BlockInheritance: sdk.Bool(false),
            Description: sdk.String("voluptatem"),
            Etag: sdk.String("perferendis"),
            Kind: sdk.String("rerum"),
            Name: sdk.String("Kimberly Kuhn"),
            OrgUnitID: sdk.String("porro"),
            OrgUnitPath: sdk.String("provident"),
            ParentOrgUnitID: sdk.String("consectetur"),
            ParentOrgUnitPath: sdk.String("eligendi"),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        CustomerID: "natus",
        Fields: sdk.String("temporibus"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("quo"),
    }, operations.DirectoryOrgunitsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgUnit != nil {
        // handle response
    }
}
```

## DirectoryOrgunitsList

Retrieves a list of all organizational units for an account.

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
    res, err := s.Orgunits.DirectoryOrgunitsList(ctx, operations.DirectoryOrgunitsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dignissimos"),
        CustomerID: "vero",
        Fields: sdk.String("qui"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("repellat"),
        OrgUnitPath: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        Type: operations.DirectoryOrgunitsListTypeEnumAll.ToPointer(),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("non"),
    }, operations.DirectoryOrgunitsListSecurity{
        Option1: &operations.DirectoryOrgunitsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgUnits != nil {
        // handle response
    }
}
```

## DirectoryOrgunitsPatch

Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)

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
    res, err := s.Orgunits.DirectoryOrgunitsPatch(ctx, operations.DirectoryOrgunitsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OrgUnit: &shared.OrgUnit{
            BlockInheritance: sdk.Bool(false),
            Description: sdk.String("illo"),
            Etag: sdk.String("hic"),
            Kind: sdk.String("deserunt"),
            Name: sdk.String("Kyle Reichel"),
            OrgUnitID: sdk.String("labore"),
            OrgUnitPath: sdk.String("numquam"),
            ParentOrgUnitID: sdk.String("repudiandae"),
            ParentOrgUnitPath: sdk.String("modi"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        CustomerID: "rem",
        Fields: sdk.String("aperiam"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("deleniti"),
        OrgUnitPath: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("minima"),
    }, operations.DirectoryOrgunitsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgUnit != nil {
        // handle response
    }
}
```

## DirectoryOrgunitsUpdate

Updates an organizational unit.

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
    res, err := s.Orgunits.DirectoryOrgunitsUpdate(ctx, operations.DirectoryOrgunitsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        OrgUnit: &shared.OrgUnit{
            BlockInheritance: sdk.Bool(false),
            Description: sdk.String("magnam"),
            Etag: sdk.String("sit"),
            Kind: sdk.String("modi"),
            Name: sdk.String("Robin O'Hara"),
            OrgUnitID: sdk.String("nostrum"),
            OrgUnitPath: sdk.String("molestiae"),
            ParentOrgUnitID: sdk.String("veniam"),
            ParentOrgUnitPath: sdk.String("reiciendis"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        CustomerID: "aut",
        Fields: sdk.String("eveniet"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("commodi"),
        OrgUnitPath: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.DirectoryOrgunitsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgUnit != nil {
        // handle response
    }
}
```
