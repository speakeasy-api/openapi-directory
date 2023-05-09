# Accounts

### Available Operations

* [ContentAccountsAuthinfo](#contentaccountsauthinfo) - Returns information about the authenticated user.
* [ContentAccountsClaimwebsite](#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account.
* [ContentAccountsCustombatch](#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [ContentAccountsDelete](#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [ContentAccountsGet](#contentaccountsget) - Retrieves a Merchant Center account.
* [ContentAccountsInsert](#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [ContentAccountsLink](#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [ContentAccountsList](#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [ContentAccountsUpdate](#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

## ContentAccountsAuthinfo

Returns information about the authenticated user.

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
    res, err := s.Accounts.ContentAccountsAuthinfo(ctx, operations.ContentAccountsAuthinfoRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.ContentAccountsAuthinfoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsAuthInfoResponse != nil {
        // handle response
    }
}
```

## ContentAccountsClaimwebsite

Claims the website of a Merchant Center sub-account.

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
    res, err := s.Accounts.ContentAccountsClaimwebsite(ctx, operations.ContentAccountsClaimwebsiteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        AccountID: "voluptatum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("recusandae"),
        MerchantID: "temporibus",
        OauthToken: sdk.String("ab"),
        Overwrite: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.ContentAccountsClaimwebsiteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsClaimWebsiteResponse != nil {
        // handle response
    }
}
```

## ContentAccountsCustombatch

Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.

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
    res, err := s.Accounts.ContentAccountsCustombatch(ctx, operations.ContentAccountsCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccountsCustomBatchRequest: &shared.AccountsCustomBatchRequest{
            Entries: []shared.AccountsCustomBatchRequestEntry{
                shared.AccountsCustomBatchRequestEntry{
                    Account: &shared.Account{
                        AdultContent: sdk.Bool(false),
                        AdwordsLinks: []shared.AccountAdwordsLink{
                            shared.AccountAdwordsLink{
                                AdwordsID: sdk.String("sapiente"),
                                Status: sdk.String("quo"),
                            },
                            shared.AccountAdwordsLink{
                                AdwordsID: sdk.String("odit"),
                                Status: sdk.String("at"),
                            },
                            shared.AccountAdwordsLink{
                                AdwordsID: sdk.String("at"),
                                Status: sdk.String("maiores"),
                            },
                            shared.AccountAdwordsLink{
                                AdwordsID: sdk.String("molestiae"),
                                Status: sdk.String("quod"),
                            },
                        },
                        BusinessInformation: &shared.AccountBusinessInformation{
                            Address: &shared.AccountAddress{
                                Country: sdk.String("Sierra Leone"),
                                Locality: sdk.String("esse"),
                                PostalCode: sdk.String("76176-5159"),
                                Region: sdk.String("optio"),
                                StreetAddress: sdk.String("totam"),
                            },
                            CustomerService: &shared.AccountCustomerService{
                                Email: sdk.String("Haskell18@gmail.com"),
                                PhoneNumber: sdk.String("impedit"),
                                URL: sdk.String("cum"),
                            },
                            KoreanBusinessRegistrationNumber: sdk.String("esse"),
                            PhoneNumber: sdk.String("ipsum"),
                        },
                        GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                            GmbEmail: sdk.String("excepturi"),
                            Status: sdk.String("aspernatur"),
                        },
                        ID: sdk.String("perferendis"),
                        Kind: sdk.String("ad"),
                        Name: sdk.String("Louis Moore"),
                        ReviewsURL: sdk.String("laboriosam"),
                        SellerID: sdk.String("hic"),
                        Users: []shared.AccountUser{
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("fuga"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                            },
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("in"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                            },
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("corporis"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                            },
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("iste"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                            },
                        },
                        WebsiteURL: sdk.String("iure"),
                        YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("quidem"),
                                Status: sdk.String("architecto"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("ipsa"),
                                Status: sdk.String("reiciendis"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("est"),
                                Status: sdk.String("mollitia"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("laborum"),
                                Status: sdk.String("dolores"),
                            },
                        },
                    },
                    AccountID: sdk.String("dolorem"),
                    BatchID: sdk.Int64(358152),
                    Force: sdk.Bool(false),
                    LabelIds: []string{
                        "nobis",
                    },
                    LinkRequest: &shared.AccountsCustomBatchRequestEntryLinkRequest{
                        Action: sdk.String("enim"),
                        LinkType: sdk.String("omnis"),
                        LinkedAccountID: sdk.String("nemo"),
                    },
                    MerchantID: sdk.String("minima"),
                    Method: sdk.String("excepturi"),
                    Overwrite: sdk.Bool(false),
                },
                shared.AccountsCustomBatchRequestEntry{
                    Account: &shared.Account{
                        AdultContent: sdk.Bool(false),
                        AdwordsLinks: []shared.AccountAdwordsLink{
                            shared.AccountAdwordsLink{
                                AdwordsID: sdk.String("iure"),
                                Status: sdk.String("culpa"),
                            },
                        },
                        BusinessInformation: &shared.AccountBusinessInformation{
                            Address: &shared.AccountAddress{
                                Country: sdk.String("Yemen"),
                                Locality: sdk.String("sapiente"),
                                PostalCode: sdk.String("62619"),
                                Region: sdk.String("mollitia"),
                                StreetAddress: sdk.String("occaecati"),
                            },
                            CustomerService: &shared.AccountCustomerService{
                                Email: sdk.String("Harvey.Konopelski@gmail.com"),
                                PhoneNumber: sdk.String("error"),
                                URL: sdk.String("quia"),
                            },
                            KoreanBusinessRegistrationNumber: sdk.String("quis"),
                            PhoneNumber: sdk.String("vitae"),
                        },
                        GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                            GmbEmail: sdk.String("laborum"),
                            Status: sdk.String("animi"),
                        },
                        ID: sdk.String("enim"),
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Jimmy Wiegand"),
                        ReviewsURL: sdk.String("possimus"),
                        SellerID: sdk.String("aut"),
                        Users: []shared.AccountUser{
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("error"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                            },
                        },
                        WebsiteURL: sdk.String("temporibus"),
                        YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("quasi"),
                                Status: sdk.String("reiciendis"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("voluptatibus"),
                                Status: sdk.String("vero"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("nihil"),
                                Status: sdk.String("praesentium"),
                            },
                        },
                    },
                    AccountID: sdk.String("voluptatibus"),
                    BatchID: sdk.Int64(55714),
                    Force: sdk.Bool(false),
                    LabelIds: []string{
                        "voluptate",
                        "cum",
                        "perferendis",
                    },
                    LinkRequest: &shared.AccountsCustomBatchRequestEntryLinkRequest{
                        Action: sdk.String("doloremque"),
                        LinkType: sdk.String("reprehenderit"),
                        LinkedAccountID: sdk.String("ut"),
                    },
                    MerchantID: sdk.String("maiores"),
                    Method: sdk.String("dicta"),
                    Overwrite: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.ContentAccountsCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentAccountsDelete

Deletes a Merchant Center sub-account.

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
    res, err := s.Accounts.ContentAccountsDelete(ctx, operations.ContentAccountsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        AccountID: "quidem",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("pariatur"),
        Force: sdk.Bool(false),
        Key: sdk.String("modi"),
        MerchantID: "praesentium",
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.ContentAccountsDeleteSecurity{
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

## ContentAccountsGet

Retrieves a Merchant Center account.

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
    res, err := s.Accounts.ContentAccountsGet(ctx, operations.ContentAccountsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        AccountID: "itaque",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Key: sdk.String("est"),
        MerchantID: "quibusdam",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ContentAccountsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## ContentAccountsInsert

Creates a Merchant Center sub-account.

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
    res, err := s.Accounts.ContentAccountsInsert(ctx, operations.ContentAccountsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Account: &shared.Account{
            AdultContent: sdk.Bool(false),
            AdwordsLinks: []shared.AccountAdwordsLink{
                shared.AccountAdwordsLink{
                    AdwordsID: sdk.String("qui"),
                    Status: sdk.String("aliquid"),
                },
                shared.AccountAdwordsLink{
                    AdwordsID: sdk.String("cupiditate"),
                    Status: sdk.String("quos"),
                },
            },
            BusinessInformation: &shared.AccountBusinessInformation{
                Address: &shared.AccountAddress{
                    Country: sdk.String("Andorra"),
                    Locality: sdk.String("magni"),
                    PostalCode: sdk.String("30165-2772"),
                    Region: sdk.String("delectus"),
                    StreetAddress: sdk.String("eum"),
                },
                CustomerService: &shared.AccountCustomerService{
                    Email: sdk.String("Nigel_Mayer@gmail.com"),
                    PhoneNumber: sdk.String("necessitatibus"),
                    URL: sdk.String("sint"),
                },
                KoreanBusinessRegistrationNumber: sdk.String("officia"),
                PhoneNumber: sdk.String("dolor"),
            },
            GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                GmbEmail: sdk.String("debitis"),
                Status: sdk.String("a"),
            },
            ID: sdk.String("dolorum"),
            Kind: sdk.String("in"),
            Name: sdk.String("Angel Wolff II"),
            ReviewsURL: sdk.String("cumque"),
            SellerID: sdk.String("facere"),
            Users: []shared.AccountUser{
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("aliquid"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                },
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("laborum"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                },
            },
            WebsiteURL: sdk.String("accusamus"),
            YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("occaecati"),
                    Status: sdk.String("enim"),
                },
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("provident"),
        Key: sdk.String("nam"),
        MerchantID: "id",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("amet"),
    }, operations.ContentAccountsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## ContentAccountsLink

Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.

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
    res, err := s.Accounts.ContentAccountsLink(ctx, operations.ContentAccountsLinkRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountsLinkRequest: &shared.AccountsLinkRequest{
            Action: sdk.String("nisi"),
            LinkType: sdk.String("vel"),
            LinkedAccountID: sdk.String("natus"),
        },
        AccessToken: sdk.String("omnis"),
        AccountID: "molestiae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("distinctio"),
        MerchantID: "id",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("natus"),
    }, operations.ContentAccountsLinkSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsLinkResponse != nil {
        // handle response
    }
}
```

## ContentAccountsList

Lists the sub-accounts in your Merchant Center account.

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
    res, err := s.Accounts.ContentAccountsList(ctx, operations.ContentAccountsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        MaxResults: sdk.Int64(92373),
        MerchantID: "excepturi",
        OauthToken: sdk.String("ullam"),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.ContentAccountsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsListResponse != nil {
        // handle response
    }
}
```

## ContentAccountsUpdate

Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

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
    res, err := s.Accounts.ContentAccountsUpdate(ctx, operations.ContentAccountsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Account: &shared.Account{
            AdultContent: sdk.Bool(false),
            AdwordsLinks: []shared.AccountAdwordsLink{
                shared.AccountAdwordsLink{
                    AdwordsID: sdk.String("mollitia"),
                    Status: sdk.String("ad"),
                },
                shared.AccountAdwordsLink{
                    AdwordsID: sdk.String("eum"),
                    Status: sdk.String("dolor"),
                },
                shared.AccountAdwordsLink{
                    AdwordsID: sdk.String("necessitatibus"),
                    Status: sdk.String("odit"),
                },
                shared.AccountAdwordsLink{
                    AdwordsID: sdk.String("nemo"),
                    Status: sdk.String("quasi"),
                },
            },
            BusinessInformation: &shared.AccountBusinessInformation{
                Address: &shared.AccountAddress{
                    Country: sdk.String("Jamaica"),
                    Locality: sdk.String("doloribus"),
                    PostalCode: sdk.String("28574-1093"),
                    Region: sdk.String("expedita"),
                    StreetAddress: sdk.String("nihil"),
                },
                CustomerService: &shared.AccountCustomerService{
                    Email: sdk.String("Roman_Cormier3@hotmail.com"),
                    PhoneNumber: sdk.String("consequuntur"),
                    URL: sdk.String("praesentium"),
                },
                KoreanBusinessRegistrationNumber: sdk.String("natus"),
                PhoneNumber: sdk.String("magni"),
            },
            GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                GmbEmail: sdk.String("sunt"),
                Status: sdk.String("quo"),
            },
            ID: sdk.String("illum"),
            Kind: sdk.String("pariatur"),
            Name: sdk.String("Nathaniel Marks"),
            ReviewsURL: sdk.String("accusantium"),
            SellerID: sdk.String("ab"),
            Users: []shared.AccountUser{
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("quidem"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                },
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("ipsam"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                },
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("voluptate"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                },
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("autem"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                },
            },
            WebsiteURL: sdk.String("nam"),
            YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("pariatur"),
                    Status: sdk.String("nemo"),
                },
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        AccountID: "perferendis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("aut"),
        Key: sdk.String("cumque"),
        MerchantID: "corporis",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.ContentAccountsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
