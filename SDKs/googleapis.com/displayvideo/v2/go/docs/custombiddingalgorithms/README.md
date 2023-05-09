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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CustomBiddingAlgorithmInput: &shared.CustomBiddingAlgorithmInput{
            AdvertiserID: sdk.String("voluptates"),
            CustomBiddingAlgorithmType: shared.CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumScriptBased.ToPointer(),
            DisplayName: sdk.String("nesciunt"),
            EntityStatus: shared.CustomBiddingAlgorithmEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            PartnerID: sdk.String("quibusdam"),
            SharedAdvertiserIds: []string{
                "quidem",
                "delectus",
            },
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("totam"),
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
        AccessToken: sdk.String("aspernatur"),
        AdvertiserID: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nam"),
        CustomBiddingAlgorithmID: "ex",
        Fields: sdk.String("odio"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("minus"),
        PartnerID: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("eos"),
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
        AccessToken: sdk.String("repudiandae"),
        AdvertiserID: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("laboriosam"),
        Filter: sdk.String("eos"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("incidunt"),
        OrderBy: sdk.String("porro"),
        PageSize: sdk.Int64(581680),
        PageToken: sdk.String("reiciendis"),
        PartnerID: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("omnis"),
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
            AdvertiserID: sdk.String("tenetur"),
            CustomBiddingAlgorithmType: shared.CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnumGoalBuilderBased.ToPointer(),
            DisplayName: sdk.String("expedita"),
            EntityStatus: shared.CustomBiddingAlgorithmEntityStatusEnumEntityStatusArchived.ToPointer(),
            PartnerID: sdk.String("esse"),
            SharedAdvertiserIds: []string{
                "ad",
                "quod",
                "ratione",
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        CustomBiddingAlgorithmID: "nam",
        Fields: sdk.String("officia"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UpdateMask: sdk.String("saepe"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("eaque"),
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
                ResourceName: sdk.String("eveniet"),
            },
        },
        AccessToken: sdk.String("delectus"),
        AdvertiserID: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        CustomBiddingAlgorithmID: "dolorum",
        Fields: sdk.String("nostrum"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("nam"),
        PartnerID: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("maiores"),
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
        AccessToken: sdk.String("autem"),
        AdvertiserID: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        CustomBiddingAlgorithmID: "possimus",
        CustomBiddingScriptID: "nesciunt",
        Fields: sdk.String("corrupti"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("fuga"),
        PartnerID: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("laborum"),
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
        AccessToken: sdk.String("autem"),
        AdvertiserID: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        CustomBiddingAlgorithmID: "occaecati",
        Fields: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("fugit"),
        OrderBy: sdk.String("autem"),
        PageSize: sdk.Int64(763709),
        PageToken: sdk.String("eveniet"),
        PartnerID: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("natus"),
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
        AccessToken: sdk.String("repellendus"),
        AdvertiserID: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        CustomBiddingAlgorithmID: "et",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("nisi"),
        PartnerID: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("hic"),
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
