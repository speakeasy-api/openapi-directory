# CustomBiddingAlgorithms

### Available Operations

* [DisplayvideoCustomBiddingAlgorithmsCreate](#displayvideocustombiddingalgorithmscreate) - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
* [DisplayvideoCustomBiddingAlgorithmsGet](#displayvideocustombiddingalgorithmsget) - Gets a custom bidding algorithm.
* [DisplayvideoCustomBiddingAlgorithmsList](#displayvideocustombiddingalgorithmslist) - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
* [DisplayvideoCustomBiddingAlgorithmsPatch](#displayvideocustombiddingalgorithmspatch) - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
* [DisplayvideoCustomBiddingAlgorithmsScriptsCreate](#displayvideocustombiddingalgorithmsscriptscreate) - Creates a new custom bidding script. Returns the newly created script if successful.
* [DisplayvideoCustomBiddingAlgorithmsScriptsGet](#displayvideocustombiddingalgorithmsscriptsget) - Gets a custom bidding script.
* [DisplayvideoCustomBiddingAlgorithmsScriptsList](#displayvideocustombiddingalgorithmsscriptslist) - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
* [DisplayvideoCustomBiddingAlgorithmsUploadScript](#displayvideocustombiddingalgorithmsuploadscript) - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

## DisplayvideoCustomBiddingAlgorithmsCreate

Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsCreate(ctx, operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CustomBiddingAlgorithmInput: &shared.CustomBiddingAlgorithmInput{
            AdvertiserID: sdk.String("voluptatem"),
            CustomBiddingAlgorithmType: shared.CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumGoalBuilderBased.ToPointer(),
            DisplayName: sdk.String("corporis"),
            EntityStatus: shared.CustomBiddingAlgorithmEntityStatusEnumEntityStatusArchived.ToPointer(),
            PartnerID: sdk.String("eos"),
            SharedAdvertiserIds: []string{
                "blanditiis",
                "hic",
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomBiddingAlgorithm != nil {
        // handle response
    }
}
```

## DisplayvideoCustomBiddingAlgorithmsGet

Gets a custom bidding algorithm.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsGet(ctx, operations.DisplayvideoCustomBiddingAlgorithmsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        AdvertiserID: sdk.String("assumenda"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        CustomBiddingAlgorithmID: "tempore",
        Fields: sdk.String("commodi"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("suscipit"),
        PartnerID: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("provident"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomBiddingAlgorithm != nil {
        // handle response
    }
}
```

## DisplayvideoCustomBiddingAlgorithmsList

Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsList(ctx, operations.DisplayvideoCustomBiddingAlgorithmsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        AdvertiserID: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("eaque"),
        Filter: sdk.String("alias"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("consequuntur"),
        OrderBy: sdk.String("vitae"),
        PageSize: sdk.Int64(696828),
        PageToken: sdk.String("sequi"),
        PartnerID: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomBiddingAlgorithmsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoCustomBiddingAlgorithmsPatch

Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsPatch(ctx, operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CustomBiddingAlgorithmInput: &shared.CustomBiddingAlgorithmInput{
            AdvertiserID: sdk.String("similique"),
            CustomBiddingAlgorithmType: shared.CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumGoalBuilderBased.ToPointer(),
            DisplayName: sdk.String("tempore"),
            EntityStatus: shared.CustomBiddingAlgorithmEntityStatusEnumEntityStatusActive.ToPointer(),
            PartnerID: sdk.String("debitis"),
            SharedAdvertiserIds: []string{
                "asperiores",
                "temporibus",
                "id",
                "atque",
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        CustomBiddingAlgorithmID: "veniam",
        Fields: sdk.String("aliquam"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UpdateMask: sdk.String("doloremque"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("alias"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomBiddingAlgorithm != nil {
        // handle response
    }
}
```

## DisplayvideoCustomBiddingAlgorithmsScriptsCreate

Creates a new custom bidding script. Returns the newly created script if successful.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsScriptsCreate(ctx, operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CustomBiddingScriptInput: &shared.CustomBiddingScriptInput{
            Script: &shared.CustomBiddingScriptRef{
                ResourceName: sdk.String("tempora"),
            },
        },
        AccessToken: sdk.String("perspiciatis"),
        AdvertiserID: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        CustomBiddingAlgorithmID: "ex",
        Fields: sdk.String("architecto"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("laborum"),
        PartnerID: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("qui"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomBiddingScript != nil {
        // handle response
    }
}
```

## DisplayvideoCustomBiddingAlgorithmsScriptsGet

Gets a custom bidding script.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsScriptsGet(ctx, operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        AdvertiserID: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tenetur"),
        CustomBiddingAlgorithmID: "voluptate",
        CustomBiddingScriptID: "quam",
        Fields: sdk.String("quod"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("sapiente"),
        PartnerID: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomBiddingScript != nil {
        // handle response
    }
}
```

## DisplayvideoCustomBiddingAlgorithmsScriptsList

Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsScriptsList(ctx, operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maxime"),
        AdvertiserID: sdk.String("fuga"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        CustomBiddingAlgorithmID: "consectetur",
        Fields: sdk.String("maiores"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("animi"),
        OrderBy: sdk.String("sequi"),
        PageSize: sdk.Int64(757471),
        PageToken: sdk.String("voluptatum"),
        PartnerID: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomBiddingScriptsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoCustomBiddingAlgorithmsUploadScript

Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

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
    res, err := s.CustomBiddingAlgorithms.DisplayvideoCustomBiddingAlgorithmsUploadScript(ctx, operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        AdvertiserID: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("non"),
        CustomBiddingAlgorithmID: "optio",
        Fields: sdk.String("illum"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("tenetur"),
        PartnerID: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomBiddingScriptRef != nil {
        // handle response
    }
}
```
