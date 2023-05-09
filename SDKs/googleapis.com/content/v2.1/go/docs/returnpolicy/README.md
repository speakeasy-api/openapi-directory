# Returnpolicy

### Available Operations

* [ContentReturnpolicyCustombatch](#contentreturnpolicycustombatch) - Batches multiple return policy related calls in a single request.
* [ContentReturnpolicyDelete](#contentreturnpolicydelete) - Deletes a return policy for the given Merchant Center account.
* [ContentReturnpolicyGet](#contentreturnpolicyget) - Gets a return policy of the Merchant Center account.
* [ContentReturnpolicyInsert](#contentreturnpolicyinsert) - Inserts a return policy for the Merchant Center account.
* [ContentReturnpolicyList](#contentreturnpolicylist) - Lists the return policies of the Merchant Center account.

## ContentReturnpolicyCustombatch

Batches multiple return policy related calls in a single request.

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
    res, err := s.Returnpolicy.ContentReturnpolicyCustombatch(ctx, operations.ContentReturnpolicyCustombatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReturnpolicyCustomBatchRequest: &shared.ReturnpolicyCustomBatchRequest{
            Entries: []shared.ReturnpolicyCustomBatchRequestEntry{
                shared.ReturnpolicyCustomBatchRequestEntry{
                    BatchID: sdk.Int64(765463),
                    MerchantID: sdk.String("pariatur"),
                    Method: sdk.String("non"),
                    ReturnPolicy: &shared.ReturnPolicy{
                        Country: sdk.String("Philippines"),
                        Kind: sdk.String("illo"),
                        Label: sdk.String("illum"),
                        Name: sdk.String("Marvin Ratke"),
                        NonFreeReturnReasons: []string{
                            "dolores",
                            "ut",
                            "nihil",
                            "harum",
                        },
                        Policy: &shared.ReturnPolicyPolicy{
                            LastReturnDate: sdk.String("voluptate"),
                            NumberOfDays: sdk.String("aliquid"),
                            Type: sdk.String("blanditiis"),
                        },
                        ReturnPolicyID: sdk.String("labore"),
                        ReturnShippingFee: &shared.Price{
                            Currency: sdk.String("repudiandae"),
                            Value: sdk.String("reiciendis"),
                        },
                        SeasonalOverrides: []shared.ReturnPolicySeasonalOverride{
                            shared.ReturnPolicySeasonalOverride{
                                EndDate: sdk.String("exercitationem"),
                                Name: sdk.String("Teresa Denesik"),
                                Policy: &shared.ReturnPolicyPolicy{
                                    LastReturnDate: sdk.String("in"),
                                    NumberOfDays: sdk.String("veritatis"),
                                    Type: sdk.String("nobis"),
                                },
                                StartDate: sdk.String("voluptatibus"),
                            },
                            shared.ReturnPolicySeasonalOverride{
                                EndDate: sdk.String("tenetur"),
                                Name: sdk.String("Bryant Anderson"),
                                Policy: &shared.ReturnPolicyPolicy{
                                    LastReturnDate: sdk.String("molestiae"),
                                    NumberOfDays: sdk.String("quaerat"),
                                    Type: sdk.String("distinctio"),
                                },
                                StartDate: sdk.String("blanditiis"),
                            },
                            shared.ReturnPolicySeasonalOverride{
                                EndDate: sdk.String("quaerat"),
                                Name: sdk.String("Virginia Mitchell"),
                                Policy: &shared.ReturnPolicyPolicy{
                                    LastReturnDate: sdk.String("rerum"),
                                    NumberOfDays: sdk.String("ut"),
                                    Type: sdk.String("tempora"),
                                },
                                StartDate: sdk.String("quidem"),
                            },
                            shared.ReturnPolicySeasonalOverride{
                                EndDate: sdk.String("nulla"),
                                Name: sdk.String("Alexandra Green II"),
                                Policy: &shared.ReturnPolicyPolicy{
                                    LastReturnDate: sdk.String("unde"),
                                    NumberOfDays: sdk.String("assumenda"),
                                    Type: sdk.String("adipisci"),
                                },
                                StartDate: sdk.String("velit"),
                            },
                        },
                    },
                    ReturnPolicyID: sdk.String("accusamus"),
                },
                shared.ReturnpolicyCustomBatchRequestEntry{
                    BatchID: sdk.Int64(331602),
                    MerchantID: sdk.String("provident"),
                    Method: sdk.String("nostrum"),
                    ReturnPolicy: &shared.ReturnPolicy{
                        Country: sdk.String("Cyprus"),
                        Kind: sdk.String("quod"),
                        Label: sdk.String("consequatur"),
                        Name: sdk.String("Cheryl Bins"),
                        NonFreeReturnReasons: []string{
                            "aliquid",
                            "sequi",
                            "culpa",
                        },
                        Policy: &shared.ReturnPolicyPolicy{
                            LastReturnDate: sdk.String("fuga"),
                            NumberOfDays: sdk.String("modi"),
                            Type: sdk.String("et"),
                        },
                        ReturnPolicyID: sdk.String("eveniet"),
                        ReturnShippingFee: &shared.Price{
                            Currency: sdk.String("aliquid"),
                            Value: sdk.String("optio"),
                        },
                        SeasonalOverrides: []shared.ReturnPolicySeasonalOverride{
                            shared.ReturnPolicySeasonalOverride{
                                EndDate: sdk.String("ab"),
                                Name: sdk.String("Gregg Champlin DVM"),
                                Policy: &shared.ReturnPolicyPolicy{
                                    LastReturnDate: sdk.String("porro"),
                                    NumberOfDays: sdk.String("tempore"),
                                    Type: sdk.String("ullam"),
                                },
                                StartDate: sdk.String("sunt"),
                            },
                        },
                    },
                    ReturnPolicyID: sdk.String("quisquam"),
                },
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("et"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("iste"),
    }, operations.ContentReturnpolicyCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnpolicyCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentReturnpolicyDelete

Deletes a return policy for the given Merchant Center account.

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
    res, err := s.Returnpolicy.ContentReturnpolicyDelete(ctx, operations.ContentReturnpolicyDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("natus"),
        Key: sdk.String("ipsam"),
        MerchantID: "repudiandae",
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        ReturnPolicyID: "veniam",
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.ContentReturnpolicyDeleteSecurity{
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

## ContentReturnpolicyGet

Gets a return policy of the Merchant Center account.

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
    res, err := s.Returnpolicy.ContentReturnpolicyGet(ctx, operations.ContentReturnpolicyGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("mollitia"),
        MerchantID: "quidem",
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        ReturnPolicyID: "beatae",
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.ContentReturnpolicyGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicy != nil {
        // handle response
    }
}
```

## ContentReturnpolicyInsert

Inserts a return policy for the Merchant Center account.

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
    res, err := s.Returnpolicy.ContentReturnpolicyInsert(ctx, operations.ContentReturnpolicyInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReturnPolicy: &shared.ReturnPolicy{
            Country: sdk.String("Guinea-Bissau"),
            Kind: sdk.String("porro"),
            Label: sdk.String("molestiae"),
            Name: sdk.String("Ms. Jessie Gislason"),
            NonFreeReturnReasons: []string{
                "soluta",
                "occaecati",
            },
            Policy: &shared.ReturnPolicyPolicy{
                LastReturnDate: sdk.String("sit"),
                NumberOfDays: sdk.String("asperiores"),
                Type: sdk.String("aspernatur"),
            },
            ReturnPolicyID: sdk.String("officiis"),
            ReturnShippingFee: &shared.Price{
                Currency: sdk.String("sit"),
                Value: sdk.String("occaecati"),
            },
            SeasonalOverrides: []shared.ReturnPolicySeasonalOverride{
                shared.ReturnPolicySeasonalOverride{
                    EndDate: sdk.String("ab"),
                    Name: sdk.String("Woodrow Dach"),
                    Policy: &shared.ReturnPolicyPolicy{
                        LastReturnDate: sdk.String("explicabo"),
                        NumberOfDays: sdk.String("delectus"),
                        Type: sdk.String("natus"),
                    },
                    StartDate: sdk.String("earum"),
                },
                shared.ReturnPolicySeasonalOverride{
                    EndDate: sdk.String("fugit"),
                    Name: sdk.String("Justin Adams"),
                    Policy: &shared.ReturnPolicyPolicy{
                        LastReturnDate: sdk.String("numquam"),
                        NumberOfDays: sdk.String("numquam"),
                        Type: sdk.String("tempore"),
                    },
                    StartDate: sdk.String("molestias"),
                },
                shared.ReturnPolicySeasonalOverride{
                    EndDate: sdk.String("amet"),
                    Name: sdk.String("Angel Cremin"),
                    Policy: &shared.ReturnPolicyPolicy{
                        LastReturnDate: sdk.String("id"),
                        NumberOfDays: sdk.String("ducimus"),
                        Type: sdk.String("dolores"),
                    },
                    StartDate: sdk.String("asperiores"),
                },
                shared.ReturnPolicySeasonalOverride{
                    EndDate: sdk.String("occaecati"),
                    Name: sdk.String("Mattie Gutkowski"),
                    Policy: &shared.ReturnPolicyPolicy{
                        LastReturnDate: sdk.String("laboriosam"),
                        NumberOfDays: sdk.String("id"),
                        Type: sdk.String("itaque"),
                    },
                    StartDate: sdk.String("assumenda"),
                },
            },
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("optio"),
        Key: sdk.String("soluta"),
        MerchantID: "dignissimos",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.ContentReturnpolicyInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicy != nil {
        // handle response
    }
}
```

## ContentReturnpolicyList

Lists the return policies of the Merchant Center account.

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
    res, err := s.Returnpolicy.ContentReturnpolicyList(ctx, operations.ContentReturnpolicyListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("quia"),
        Key: sdk.String("maxime"),
        MerchantID: "excepturi",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.ContentReturnpolicyListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnpolicyListResponse != nil {
        // handle response
    }
}
```
