# Returnpolicyonline

### Available Operations

* [ContentReturnpolicyonlineCreate](#contentreturnpolicyonlinecreate) - Creates a new return policy.
* [ContentReturnpolicyonlineDelete](#contentreturnpolicyonlinedelete) - Deletes an existing return policy.
* [ContentReturnpolicyonlineGet](#contentreturnpolicyonlineget) - Gets an existing return policy.
* [ContentReturnpolicyonlineList](#contentreturnpolicyonlinelist) - Lists all existing return policies.
* [ContentReturnpolicyonlinePatch](#contentreturnpolicyonlinepatch) - Updates an existing return policy.

## ContentReturnpolicyonlineCreate

Creates a new return policy.

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
    res, err := s.Returnpolicyonline.ContentReturnpolicyonlineCreate(ctx, operations.ContentReturnpolicyonlineCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReturnPolicyOnlineInput: &shared.ReturnPolicyOnlineInput{
            Countries: []string{
                "inventore",
                "error",
                "id",
            },
            ItemConditions: []shared.ReturnPolicyOnlineItemConditionsEnum{
                shared.ReturnPolicyOnlineItemConditionsEnumUsed,
                shared.ReturnPolicyOnlineItemConditionsEnumUsed,
                shared.ReturnPolicyOnlineItemConditionsEnumItemConditionUnspecified,
            },
            Label: sdk.String("vero"),
            Name: sdk.String("Agnes Boyle DDS"),
            Policy: &shared.ReturnPolicyOnlinePolicy{
                Days: sdk.String("id"),
                Type: shared.ReturnPolicyOnlinePolicyTypeEnumNumberOfDaysAfterDelivery.ToPointer(),
            },
            RestockingFee: &shared.ReturnPolicyOnlineRestockingFee{
                FixedFee: &shared.PriceAmount{
                    Currency: sdk.String("pariatur"),
                    Value: sdk.String("labore"),
                },
                MicroPercent: sdk.Int(337570),
            },
            ReturnMethods: []shared.ReturnPolicyOnlineReturnMethodsEnum{
                shared.ReturnPolicyOnlineReturnMethodsEnumAtAKiosk,
                shared.ReturnPolicyOnlineReturnMethodsEnumAtAKiosk,
            },
            ReturnPolicyURI: sdk.String("dicta"),
            ReturnReasonCategoryInfo: []shared.ReturnPolicyOnlineReturnReasonCategoryInfo{
                shared.ReturnPolicyOnlineReturnReasonCategoryInfo{
                    ReturnLabelSource: shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnumReturnLabelSourceUnspecified.ToPointer(),
                    ReturnReasonCategory: shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnumReturnReasonCategoryUnspecified.ToPointer(),
                    ReturnShippingFee: &shared.ReturnPolicyOnlineReturnShippingFee{
                        FixedFee: &shared.PriceAmount{
                            Currency: sdk.String("saepe"),
                            Value: sdk.String("iure"),
                        },
                        Type: shared.ReturnPolicyOnlineReturnShippingFeeTypeEnumFixed.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("minus"),
        MerchantID: "explicabo",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ContentReturnpolicyonlineCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicyOnline != nil {
        // handle response
    }
}
```

## ContentReturnpolicyonlineDelete

Deletes an existing return policy.

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
    res, err := s.Returnpolicyonline.ContentReturnpolicyonlineDelete(ctx, operations.ContentReturnpolicyonlineDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("exercitationem"),
        MerchantID: "quod",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        ReturnPolicyID: "nemo",
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("modi"),
    }, operations.ContentReturnpolicyonlineDeleteSecurity{
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

## ContentReturnpolicyonlineGet

Gets an existing return policy.

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
    res, err := s.Returnpolicyonline.ContentReturnpolicyonlineGet(ctx, operations.ContentReturnpolicyonlineGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("nihil"),
        MerchantID: "voluptas",
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        ReturnPolicyID: "voluptate",
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ContentReturnpolicyonlineGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicyOnline != nil {
        // handle response
    }
}
```

## ContentReturnpolicyonlineList

Lists all existing return policies.

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
    res, err := s.Returnpolicyonline.ContentReturnpolicyonlineList(ctx, operations.ContentReturnpolicyonlineListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("commodi"),
        MerchantID: "enim",
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("in"),
    }, operations.ContentReturnpolicyonlineListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReturnPolicyOnlineResponse != nil {
        // handle response
    }
}
```

## ContentReturnpolicyonlinePatch

Updates an existing return policy.

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
    res, err := s.Returnpolicyonline.ContentReturnpolicyonlinePatch(ctx, operations.ContentReturnpolicyonlinePatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReturnPolicyOnlineInput: &shared.ReturnPolicyOnlineInput{
            Countries: []string{
                "blanditiis",
                "saepe",
                "sit",
            },
            ItemConditions: []shared.ReturnPolicyOnlineItemConditionsEnum{
                shared.ReturnPolicyOnlineItemConditionsEnumUsed,
                shared.ReturnPolicyOnlineItemConditionsEnumNew,
                shared.ReturnPolicyOnlineItemConditionsEnumNew,
                shared.ReturnPolicyOnlineItemConditionsEnumNew,
            },
            Label: sdk.String("veritatis"),
            Name: sdk.String("Fernando Torp"),
            Policy: &shared.ReturnPolicyOnlinePolicy{
                Days: sdk.String("accusamus"),
                Type: shared.ReturnPolicyOnlinePolicyTypeEnumTypeUnspecified.ToPointer(),
            },
            RestockingFee: &shared.ReturnPolicyOnlineRestockingFee{
                FixedFee: &shared.PriceAmount{
                    Currency: sdk.String("ut"),
                    Value: sdk.String("laborum"),
                },
                MicroPercent: sdk.Int(941688),
            },
            ReturnMethods: []shared.ReturnPolicyOnlineReturnMethodsEnum{
                shared.ReturnPolicyOnlineReturnMethodsEnumInStore,
            },
            ReturnPolicyURI: sdk.String("maxime"),
            ReturnReasonCategoryInfo: []shared.ReturnPolicyOnlineReturnReasonCategoryInfo{
                shared.ReturnPolicyOnlineReturnReasonCategoryInfo{
                    ReturnLabelSource: shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnumCustomerResponsibility.ToPointer(),
                    ReturnReasonCategory: shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnumItemDefect.ToPointer(),
                    ReturnShippingFee: &shared.ReturnPolicyOnlineReturnShippingFee{
                        FixedFee: &shared.PriceAmount{
                            Currency: sdk.String("pariatur"),
                            Value: sdk.String("quidem"),
                        },
                        Type: shared.ReturnPolicyOnlineReturnShippingFeeTypeEnumTypeUnspecified.ToPointer(),
                    },
                },
                shared.ReturnPolicyOnlineReturnReasonCategoryInfo{
                    ReturnLabelSource: shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnumDownloadAndPrint.ToPointer(),
                    ReturnReasonCategory: shared.ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnumBuyerRemorse.ToPointer(),
                    ReturnShippingFee: &shared.ReturnPolicyOnlineReturnShippingFee{
                        FixedFee: &shared.PriceAmount{
                            Currency: sdk.String("similique"),
                            Value: sdk.String("quasi"),
                        },
                        Type: shared.ReturnPolicyOnlineReturnShippingFeeTypeEnumCustomerPayingActualFee.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("facere"),
        Key: sdk.String("corrupti"),
        MerchantID: "magni",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        ReturnPolicyID: "culpa",
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.ContentReturnpolicyonlinePatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicyOnline != nil {
        // handle response
    }
}
```
