# Accounts

### Available Operations

* [ContentAccountsAuthinfo](#contentaccountsauthinfo) - Returns information about the authenticated user.
* [ContentAccountsClaimwebsite](#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
* [ContentAccountsCredentialsCreate](#contentaccountscredentialscreate) - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* [ContentAccountsCustombatch](#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [ContentAccountsDelete](#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [ContentAccountsGet](#contentaccountsget) - Retrieves a Merchant Center account.
* [ContentAccountsInsert](#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [ContentAccountsLabelsCreate](#contentaccountslabelscreate) - Creates a new label, not assigned to any account.
* [ContentAccountsLabelsDelete](#contentaccountslabelsdelete) - Deletes a label and removes it from all accounts to which it was assigned.
* [ContentAccountsLabelsList](#contentaccountslabelslist) - Lists the labels assigned to an account.
* [ContentAccountsLabelsPatch](#contentaccountslabelspatch) - Updates a label.
* [ContentAccountsLink](#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [ContentAccountsList](#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [ContentAccountsListlinks](#contentaccountslistlinks) - Returns the list of accounts linked to your Merchant Center account.
* [ContentAccountsRequestphoneverification](#contentaccountsrequestphoneverification) - Request verification code to start phone verification.
* [ContentAccountsReturncarrierCreate](#contentaccountsreturncarriercreate) - Links return carrier to a merchant account.
* [ContentAccountsReturncarrierDelete](#contentaccountsreturncarrierdelete) - Delete a return carrier in the merchant account.
* [ContentAccountsReturncarrierList](#contentaccountsreturncarrierlist) - Lists available return carriers in the merchant account.
* [ContentAccountsReturncarrierPatch](#contentaccountsreturncarrierpatch) - Updates a return carrier in the merchant account.
* [ContentAccountsUpdate](#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* [ContentAccountsUpdatelabels](#contentaccountsupdatelabels) - Updates labels that are assigned to the Merchant Center account by CSS user.
* [ContentAccountsVerifyphonenumber](#contentaccountsverifyphonenumber) - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

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

Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.

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

## ContentAccountsCredentialsCreate

Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.

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
    res, err := s.Accounts.ContentAccountsCredentialsCreate(ctx, operations.ContentAccountsCredentialsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccountCredentials: &shared.AccountCredentials{
            AccessToken: sdk.String("ipsam"),
            ExpiresIn: sdk.String("repellendus"),
            Purpose: shared.AccountCredentialsPurposeEnumShopifyIntegration.ToPointer(),
        },
        AccessToken: sdk.String("quo"),
        AccountID: "odit",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.ContentAccountsCredentialsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountCredentials != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountsCustomBatchRequestInput: &shared.AccountsCustomBatchRequestInput{
            Entries: []shared.AccountsCustomBatchRequestEntryInput{
                shared.AccountsCustomBatchRequestEntryInput{
                    Account: &shared.AccountInput{
                        AdsLinks: []shared.AccountAdsLink{
                            shared.AccountAdsLink{
                                AdsID: sdk.String("nam"),
                                Status: sdk.String("officia"),
                            },
                        },
                        AdultContent: sdk.Bool(false),
                        AutomaticImprovements: &shared.AccountAutomaticImprovementsInput{
                            ImageImprovements: &shared.AccountImageImprovementsInput{
                                AccountImageImprovementsSettings: &shared.AccountImageImprovementsSettings{
                                    AllowAutomaticImageImprovements: sdk.Bool(false),
                                },
                            },
                            ItemUpdates: &shared.AccountItemUpdatesInput{
                                AccountItemUpdatesSettings: &shared.AccountItemUpdatesSettings{
                                    AllowAvailabilityUpdates: sdk.Bool(false),
                                    AllowConditionUpdates: sdk.Bool(false),
                                    AllowPriceUpdates: sdk.Bool(false),
                                    AllowStrictAvailabilityUpdates: sdk.Bool(false),
                                },
                            },
                            ShippingImprovements: &shared.AccountShippingImprovements{
                                AllowShippingImprovements: sdk.Bool(false),
                            },
                        },
                        AutomaticLabelIds: []string{
                            "fugit",
                            "deleniti",
                            "hic",
                        },
                        BusinessInformation: &shared.AccountBusinessInformation{
                            Address: &shared.AccountAddress{
                                Country: sdk.String("Saint Martin"),
                                Locality: sdk.String("totam"),
                                PostalCode: sdk.String("44217"),
                                Region: sdk.String("cum"),
                                StreetAddress: sdk.String("esse"),
                            },
                            CustomerService: &shared.AccountCustomerService{
                                Email: sdk.String("Keshaun32@gmail.com"),
                                PhoneNumber: sdk.String("natus"),
                                URL: sdk.String("sed"),
                            },
                            KoreanBusinessRegistrationNumber: sdk.String("iste"),
                            PhoneNumber: sdk.String("dolor"),
                            PhoneVerificationStatus: sdk.String("natus"),
                        },
                        ConversionSettings: &shared.AccountConversionSettings{
                            FreeListingsAutoTaggingEnabled: sdk.Bool(false),
                        },
                        CSSID: sdk.String("laboriosam"),
                        GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                            GmbAccountID: sdk.String("hic"),
                            GmbEmail: sdk.String("saepe"),
                            Status: sdk.String("fuga"),
                        },
                        ID: sdk.String("in"),
                        Kind: sdk.String("corporis"),
                        LabelIds: []string{
                            "iure",
                            "saepe",
                            "quidem",
                        },
                        Name: sdk.String("Brenda Wisozk"),
                        SellerID: sdk.String("laborum"),
                        Users: []shared.AccountUser{
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("dolorem"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                                ReportingManager: sdk.Bool(false),
                            },
                        },
                        WebsiteURL: sdk.String("corporis"),
                        YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("nobis"),
                                Status: sdk.String("enim"),
                            },
                        },
                    },
                    AccountID: sdk.String("omnis"),
                    BatchID: sdk.Int64(363711),
                    Force: sdk.Bool(false),
                    LabelIds: []string{
                        "excepturi",
                        "accusantium",
                    },
                    LinkRequest: &shared.AccountsCustomBatchRequestEntryLinkRequest{
                        Action: sdk.String("iure"),
                        LinkType: sdk.String("culpa"),
                        LinkedAccountID: sdk.String("doloribus"),
                        Services: []string{
                            "architecto",
                            "mollitia",
                            "dolorem",
                            "culpa",
                        },
                    },
                    MerchantID: sdk.String("consequuntur"),
                    Method: sdk.String("repellat"),
                    Overwrite: sdk.Bool(false),
                    View: sdk.String("mollitia"),
                },
                shared.AccountsCustomBatchRequestEntryInput{
                    Account: &shared.AccountInput{
                        AdsLinks: []shared.AccountAdsLink{
                            shared.AccountAdsLink{
                                AdsID: sdk.String("numquam"),
                                Status: sdk.String("commodi"),
                            },
                            shared.AccountAdsLink{
                                AdsID: sdk.String("quam"),
                                Status: sdk.String("molestiae"),
                            },
                            shared.AccountAdsLink{
                                AdsID: sdk.String("velit"),
                                Status: sdk.String("error"),
                            },
                        },
                        AdultContent: sdk.Bool(false),
                        AutomaticImprovements: &shared.AccountAutomaticImprovementsInput{
                            ImageImprovements: &shared.AccountImageImprovementsInput{
                                AccountImageImprovementsSettings: &shared.AccountImageImprovementsSettings{
                                    AllowAutomaticImageImprovements: sdk.Bool(false),
                                },
                            },
                            ItemUpdates: &shared.AccountItemUpdatesInput{
                                AccountItemUpdatesSettings: &shared.AccountItemUpdatesSettings{
                                    AllowAvailabilityUpdates: sdk.Bool(false),
                                    AllowConditionUpdates: sdk.Bool(false),
                                    AllowPriceUpdates: sdk.Bool(false),
                                    AllowStrictAvailabilityUpdates: sdk.Bool(false),
                                },
                            },
                            ShippingImprovements: &shared.AccountShippingImprovements{
                                AllowShippingImprovements: sdk.Bool(false),
                            },
                        },
                        AutomaticLabelIds: []string{
                            "quis",
                        },
                        BusinessInformation: &shared.AccountBusinessInformation{
                            Address: &shared.AccountAddress{
                                Country: sdk.String("Bosnia and Herzegovina"),
                                Locality: sdk.String("laborum"),
                                PostalCode: sdk.String("31719-3680"),
                                Region: sdk.String("quasi"),
                                StreetAddress: sdk.String("error"),
                            },
                            CustomerService: &shared.AccountCustomerService{
                                Email: sdk.String("Margie_Boyer87@hotmail.com"),
                                PhoneNumber: sdk.String("nihil"),
                                URL: sdk.String("praesentium"),
                            },
                            KoreanBusinessRegistrationNumber: sdk.String("voluptatibus"),
                            PhoneNumber: sdk.String("ipsa"),
                            PhoneVerificationStatus: sdk.String("omnis"),
                        },
                        ConversionSettings: &shared.AccountConversionSettings{
                            FreeListingsAutoTaggingEnabled: sdk.Bool(false),
                        },
                        CSSID: sdk.String("voluptate"),
                        GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                            GmbAccountID: sdk.String("cum"),
                            GmbEmail: sdk.String("perferendis"),
                            Status: sdk.String("doloremque"),
                        },
                        ID: sdk.String("reprehenderit"),
                        Kind: sdk.String("ut"),
                        LabelIds: []string{
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                        },
                        Name: sdk.String("Maryann Hamill"),
                        SellerID: sdk.String("repudiandae"),
                        Users: []shared.AccountUser{
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("ipsum"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                                ReportingManager: sdk.Bool(false),
                            },
                        },
                        WebsiteURL: sdk.String("quidem"),
                        YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("excepturi"),
                                Status: sdk.String("pariatur"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("modi"),
                                Status: sdk.String("praesentium"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("rem"),
                                Status: sdk.String("voluptates"),
                            },
                        },
                    },
                    AccountID: sdk.String("quasi"),
                    BatchID: sdk.Int64(921158),
                    Force: sdk.Bool(false),
                    LabelIds: []string{
                        "veritatis",
                        "itaque",
                        "incidunt",
                    },
                    LinkRequest: &shared.AccountsCustomBatchRequestEntryLinkRequest{
                        Action: sdk.String("enim"),
                        LinkType: sdk.String("consequatur"),
                        LinkedAccountID: sdk.String("est"),
                        Services: []string{
                            "explicabo",
                            "deserunt",
                            "distinctio",
                            "quibusdam",
                        },
                    },
                    MerchantID: sdk.String("labore"),
                    Method: sdk.String("modi"),
                    Overwrite: sdk.Bool(false),
                    View: sdk.String("qui"),
                },
                shared.AccountsCustomBatchRequestEntryInput{
                    Account: &shared.AccountInput{
                        AdsLinks: []shared.AccountAdsLink{
                            shared.AccountAdsLink{
                                AdsID: sdk.String("cupiditate"),
                                Status: sdk.String("quos"),
                            },
                            shared.AccountAdsLink{
                                AdsID: sdk.String("perferendis"),
                                Status: sdk.String("magni"),
                            },
                        },
                        AdultContent: sdk.Bool(false),
                        AutomaticImprovements: &shared.AccountAutomaticImprovementsInput{
                            ImageImprovements: &shared.AccountImageImprovementsInput{
                                AccountImageImprovementsSettings: &shared.AccountImageImprovementsSettings{
                                    AllowAutomaticImageImprovements: sdk.Bool(false),
                                },
                            },
                            ItemUpdates: &shared.AccountItemUpdatesInput{
                                AccountItemUpdatesSettings: &shared.AccountItemUpdatesSettings{
                                    AllowAvailabilityUpdates: sdk.Bool(false),
                                    AllowConditionUpdates: sdk.Bool(false),
                                    AllowPriceUpdates: sdk.Bool(false),
                                    AllowStrictAvailabilityUpdates: sdk.Bool(false),
                                },
                            },
                            ShippingImprovements: &shared.AccountShippingImprovements{
                                AllowShippingImprovements: sdk.Bool(false),
                            },
                        },
                        AutomaticLabelIds: []string{
                            "ipsam",
                            "alias",
                            "fugit",
                            "dolorum",
                        },
                        BusinessInformation: &shared.AccountBusinessInformation{
                            Address: &shared.AccountAddress{
                                Country: sdk.String("Mayotte"),
                                Locality: sdk.String("tempora"),
                                PostalCode: sdk.String("72942-7535"),
                                Region: sdk.String("necessitatibus"),
                                StreetAddress: sdk.String("sint"),
                            },
                            CustomerService: &shared.AccountCustomerService{
                                Email: sdk.String("Damien_Toy44@yahoo.com"),
                                PhoneNumber: sdk.String("in"),
                                URL: sdk.String("illum"),
                            },
                            KoreanBusinessRegistrationNumber: sdk.String("maiores"),
                            PhoneNumber: sdk.String("rerum"),
                            PhoneVerificationStatus: sdk.String("dicta"),
                        },
                        ConversionSettings: &shared.AccountConversionSettings{
                            FreeListingsAutoTaggingEnabled: sdk.Bool(false),
                        },
                        CSSID: sdk.String("magnam"),
                        GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                            GmbAccountID: sdk.String("cumque"),
                            GmbEmail: sdk.String("facere"),
                            Status: sdk.String("ea"),
                        },
                        ID: sdk.String("aliquid"),
                        Kind: sdk.String("laborum"),
                        LabelIds: []string{
                            "non",
                            "occaecati",
                            "enim",
                            "accusamus",
                        },
                        Name: sdk.String("Abraham McKenzie"),
                        SellerID: sdk.String("blanditiis"),
                        Users: []shared.AccountUser{
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("sapiente"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                                ReportingManager: sdk.Bool(false),
                            },
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("amet"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                                ReportingManager: sdk.Bool(false),
                            },
                            shared.AccountUser{
                                Admin: sdk.Bool(false),
                                EmailAddress: sdk.String("deserunt"),
                                OrderManager: sdk.Bool(false),
                                PaymentsAnalyst: sdk.Bool(false),
                                PaymentsManager: sdk.Bool(false),
                                ReportingManager: sdk.Bool(false),
                            },
                        },
                        WebsiteURL: sdk.String("nisi"),
                        YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("natus"),
                                Status: sdk.String("omnis"),
                            },
                            shared.AccountYouTubeChannelLink{
                                ChannelID: sdk.String("molestiae"),
                                Status: sdk.String("perferendis"),
                            },
                        },
                    },
                    AccountID: sdk.String("nihil"),
                    BatchID: sdk.Int64(301575),
                    Force: sdk.Bool(false),
                    LabelIds: []string{
                        "id",
                        "labore",
                        "labore",
                    },
                    LinkRequest: &shared.AccountsCustomBatchRequestEntryLinkRequest{
                        Action: sdk.String("suscipit"),
                        LinkType: sdk.String("natus"),
                        LinkedAccountID: sdk.String("nobis"),
                        Services: []string{
                            "vero",
                            "aspernatur",
                        },
                    },
                    MerchantID: sdk.String("architecto"),
                    Method: sdk.String("magnam"),
                    Overwrite: sdk.Bool(false),
                    View: sdk.String("et"),
                },
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("mollitia"),
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
        AccessToken: sdk.String("eum"),
        AccountID: "dolor",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("nemo"),
        Force: sdk.Bool(false),
        Key: sdk.String("quasi"),
        MerchantID: "iure",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("maxime"),
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
        AccessToken: sdk.String("facilis"),
        AccountID: "in",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("ullam"),
        MerchantID: "expedita",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("sed"),
        View: operations.ContentAccountsGetViewEnumCSS.ToPointer(),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountInput: &shared.AccountInput{
            AdsLinks: []shared.AccountAdsLink{
                shared.AccountAdsLink{
                    AdsID: sdk.String("consequuntur"),
                    Status: sdk.String("praesentium"),
                },
            },
            AdultContent: sdk.Bool(false),
            AutomaticImprovements: &shared.AccountAutomaticImprovementsInput{
                ImageImprovements: &shared.AccountImageImprovementsInput{
                    AccountImageImprovementsSettings: &shared.AccountImageImprovementsSettings{
                        AllowAutomaticImageImprovements: sdk.Bool(false),
                    },
                },
                ItemUpdates: &shared.AccountItemUpdatesInput{
                    AccountItemUpdatesSettings: &shared.AccountItemUpdatesSettings{
                        AllowAvailabilityUpdates: sdk.Bool(false),
                        AllowConditionUpdates: sdk.Bool(false),
                        AllowPriceUpdates: sdk.Bool(false),
                        AllowStrictAvailabilityUpdates: sdk.Bool(false),
                    },
                },
                ShippingImprovements: &shared.AccountShippingImprovements{
                    AllowShippingImprovements: sdk.Bool(false),
                },
            },
            AutomaticLabelIds: []string{
                "magni",
                "sunt",
                "quo",
            },
            BusinessInformation: &shared.AccountBusinessInformation{
                Address: &shared.AccountAddress{
                    Country: sdk.String("Suriname"),
                    Locality: sdk.String("pariatur"),
                    PostalCode: sdk.String("45140-0963"),
                    Region: sdk.String("voluptate"),
                    StreetAddress: sdk.String("autem"),
                },
                CustomerService: &shared.AccountCustomerService{
                    Email: sdk.String("Ambrose_Streich@hotmail.com"),
                    PhoneNumber: sdk.String("perferendis"),
                    URL: sdk.String("fugiat"),
                },
                KoreanBusinessRegistrationNumber: sdk.String("amet"),
                PhoneNumber: sdk.String("aut"),
                PhoneVerificationStatus: sdk.String("cumque"),
            },
            ConversionSettings: &shared.AccountConversionSettings{
                FreeListingsAutoTaggingEnabled: sdk.Bool(false),
            },
            CSSID: sdk.String("corporis"),
            GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                GmbAccountID: sdk.String("hic"),
                GmbEmail: sdk.String("libero"),
                Status: sdk.String("nobis"),
            },
            ID: sdk.String("dolores"),
            Kind: sdk.String("quis"),
            LabelIds: []string{
                "dignissimos",
                "eaque",
                "quis",
            },
            Name: sdk.String("Ruby Auer"),
            SellerID: sdk.String("quam"),
            Users: []shared.AccountUser{
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("vero"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                    ReportingManager: sdk.Bool(false),
                },
            },
            WebsiteURL: sdk.String("nostrum"),
            YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("recusandae"),
                    Status: sdk.String("omnis"),
                },
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("facilis"),
                    Status: sdk.String("perspiciatis"),
                },
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("voluptatem"),
                    Status: sdk.String("porro"),
                },
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("consequuntur"),
                    Status: sdk.String("blanditiis"),
                },
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("adipisci"),
        MerchantID: "asperiores",
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolorum"),
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

## ContentAccountsLabelsCreate

Creates a new label, not assigned to any account.

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
    res, err := s.Accounts.ContentAccountsLabelsCreate(ctx, operations.ContentAccountsLabelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountLabelInput: &shared.AccountLabelInput{
            AccountID: sdk.String("pariatur"),
            Description: sdk.String("provident"),
            Name: sdk.String("Randolph Wintheiser"),
        },
        AccessToken: sdk.String("aliquid"),
        AccountID: "dolorem",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("qui"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.ContentAccountsLabelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLabel != nil {
        // handle response
    }
}
```

## ContentAccountsLabelsDelete

Deletes a label and removes it from all accounts to which it was assigned.

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
    res, err := s.Accounts.ContentAccountsLabelsDelete(ctx, operations.ContentAccountsLabelsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        AccountID: "amet",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        LabelID: "ipsa",
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.ContentAccountsLabelsDeleteSecurity{
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

## ContentAccountsLabelsList

Lists the labels assigned to an account.

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
    res, err := s.Accounts.ContentAccountsLabelsList(ctx, operations.ContentAccountsLabelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        AccountID: "voluptas",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("atque"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("fugiat"),
        PageSize: sdk.Int64(67249),
        PageToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.ContentAccountsLabelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountLabelsResponse != nil {
        // handle response
    }
}
```

## ContentAccountsLabelsPatch

Updates a label.

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
    res, err := s.Accounts.ContentAccountsLabelsPatch(ctx, operations.ContentAccountsLabelsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountLabelInput: &shared.AccountLabelInput{
            AccountID: sdk.String("deleniti"),
            Description: sdk.String("omnis"),
            Name: sdk.String("Kelvin Zboncak"),
        },
        AccessToken: sdk.String("voluptate"),
        AccountID: "id",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        LabelID: "amet",
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ContentAccountsLabelsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLabel != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccountsLinkRequest: &shared.AccountsLinkRequest{
            Action: sdk.String("deserunt"),
            ECommercePlatformLinkInfo: &shared.ECommercePlatformLinkInfo{
                ExternalAccountID: sdk.String("provident"),
            },
            LinkType: sdk.String("minima"),
            LinkedAccountID: sdk.String("repellendus"),
            PaymentServiceProviderLinkInfo: &shared.PaymentServiceProviderLinkInfo{
                ExternalAccountBusinessCountry: sdk.String("totam"),
                ExternalAccountID: sdk.String("similique"),
            },
            Services: []string{
                "at",
            },
        },
        AccessToken: sdk.String("quaerat"),
        AccountID: "tempora",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("qui"),
        MerchantID: "dolorum",
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("iusto"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("accusamus"),
        Label: sdk.String("numquam"),
        MaxResults: sdk.Int64(313692),
        MerchantID: "dolorem",
        Name: sdk.String("Miss Jimmie Kozey"),
        OauthToken: sdk.String("sed"),
        PageToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("deserunt"),
        View: operations.ContentAccountsListViewEnumMerchant.ToPointer(),
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

## ContentAccountsListlinks

Returns the list of accounts linked to your Merchant Center account.

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
    res, err := s.Accounts.ContentAccountsListlinks(ctx, operations.ContentAccountsListlinksRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        AccountID: "qui",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("soluta"),
        MaxResults: sdk.Int64(117531),
        MerchantID: "laborum",
        OauthToken: sdk.String("totam"),
        PageToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ContentAccountsListlinksSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsListLinksResponse != nil {
        // handle response
    }
}
```

## ContentAccountsRequestphoneverification

Request verification code to start phone verification.

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
    res, err := s.Accounts.ContentAccountsRequestphoneverification(ctx, operations.ContentAccountsRequestphoneverificationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestPhoneVerificationRequest: &shared.RequestPhoneVerificationRequest{
            LanguageCode: sdk.String("aliquid"),
            PhoneNumber: sdk.String("quam"),
            PhoneRegionCode: sdk.String("molestias"),
            PhoneVerificationMethod: shared.RequestPhoneVerificationRequestPhoneVerificationMethodEnumPhoneCall.ToPointer(),
        },
        AccessToken: sdk.String("qui"),
        AccountID: "neque",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("odio"),
        Key: sdk.String("sunt"),
        MerchantID: "ullam",
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.ContentAccountsRequestphoneverificationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestPhoneVerificationResponse != nil {
        // handle response
    }
}
```

## ContentAccountsReturncarrierCreate

Links return carrier to a merchant account.

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
    res, err := s.Accounts.ContentAccountsReturncarrierCreate(ctx, operations.ContentAccountsReturncarrierCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountReturnCarrierInput: &shared.AccountReturnCarrierInput{
            CarrierAccountName: sdk.String("nobis"),
            CarrierAccountNumber: sdk.String("et"),
            CarrierCode: shared.AccountReturnCarrierCarrierCodeEnumUps.ToPointer(),
        },
        AccessToken: sdk.String("ipsum"),
        AccountID: "veritatis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.ContentAccountsReturncarrierCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountReturnCarrier != nil {
        // handle response
    }
}
```

## ContentAccountsReturncarrierDelete

Delete a return carrier in the merchant account.

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
    res, err := s.Accounts.ContentAccountsReturncarrierDelete(ctx, operations.ContentAccountsReturncarrierDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        AccountID: "dolorum",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        CarrierAccountID: "aut",
        Fields: sdk.String("quas"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("porro"),
    }, operations.ContentAccountsReturncarrierDeleteSecurity{
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

## ContentAccountsReturncarrierList

Lists available return carriers in the merchant account.

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
    res, err := s.Accounts.ContentAccountsReturncarrierList(ctx, operations.ContentAccountsReturncarrierListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ut"),
        AccountID: "facilis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("quae"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.ContentAccountsReturncarrierListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountReturnCarrierResponse != nil {
        // handle response
    }
}
```

## ContentAccountsReturncarrierPatch

Updates a return carrier in the merchant account.

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
    res, err := s.Accounts.ContentAccountsReturncarrierPatch(ctx, operations.ContentAccountsReturncarrierPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountReturnCarrierInput: &shared.AccountReturnCarrierInput{
            CarrierAccountName: sdk.String("omnis"),
            CarrierAccountNumber: sdk.String("quis"),
            CarrierCode: shared.AccountReturnCarrierCarrierCodeEnumCarrierCodeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("delectus"),
        AccountID: "voluptate",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        CarrierAccountID: "tenetur",
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("similique"),
    }, operations.ContentAccountsReturncarrierPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountReturnCarrier != nil {
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
        AccountInput: &shared.AccountInput{
            AdsLinks: []shared.AccountAdsLink{
                shared.AccountAdsLink{
                    AdsID: sdk.String("ducimus"),
                    Status: sdk.String("dolore"),
                },
                shared.AccountAdsLink{
                    AdsID: sdk.String("quibusdam"),
                    Status: sdk.String("illum"),
                },
                shared.AccountAdsLink{
                    AdsID: sdk.String("sequi"),
                    Status: sdk.String("natus"),
                },
                shared.AccountAdsLink{
                    AdsID: sdk.String("impedit"),
                    Status: sdk.String("aut"),
                },
            },
            AdultContent: sdk.Bool(false),
            AutomaticImprovements: &shared.AccountAutomaticImprovementsInput{
                ImageImprovements: &shared.AccountImageImprovementsInput{
                    AccountImageImprovementsSettings: &shared.AccountImageImprovementsSettings{
                        AllowAutomaticImageImprovements: sdk.Bool(false),
                    },
                },
                ItemUpdates: &shared.AccountItemUpdatesInput{
                    AccountItemUpdatesSettings: &shared.AccountItemUpdatesSettings{
                        AllowAvailabilityUpdates: sdk.Bool(false),
                        AllowConditionUpdates: sdk.Bool(false),
                        AllowPriceUpdates: sdk.Bool(false),
                        AllowStrictAvailabilityUpdates: sdk.Bool(false),
                    },
                },
                ShippingImprovements: &shared.AccountShippingImprovements{
                    AllowShippingImprovements: sdk.Bool(false),
                },
            },
            AutomaticLabelIds: []string{
                "exercitationem",
                "nulla",
                "fugit",
                "porro",
            },
            BusinessInformation: &shared.AccountBusinessInformation{
                Address: &shared.AccountAddress{
                    Country: sdk.String("Wallis and Futuna"),
                    Locality: sdk.String("doloribus"),
                    PostalCode: sdk.String("74062"),
                    Region: sdk.String("ipsam"),
                    StreetAddress: sdk.String("ea"),
                },
                CustomerService: &shared.AccountCustomerService{
                    Email: sdk.String("Hilbert18@gmail.com"),
                    PhoneNumber: sdk.String("ex"),
                    URL: sdk.String("laudantium"),
                },
                KoreanBusinessRegistrationNumber: sdk.String("dicta"),
                PhoneNumber: sdk.String("dolor"),
                PhoneVerificationStatus: sdk.String("maiores"),
            },
            ConversionSettings: &shared.AccountConversionSettings{
                FreeListingsAutoTaggingEnabled: sdk.Bool(false),
            },
            CSSID: sdk.String("quasi"),
            GoogleMyBusinessLink: &shared.AccountGoogleMyBusinessLink{
                GmbAccountID: sdk.String("ex"),
                GmbEmail: sdk.String("nulla"),
                Status: sdk.String("excepturi"),
            },
            ID: sdk.String("voluptatibus"),
            Kind: sdk.String("nostrum"),
            LabelIds: []string{
                "quisquam",
                "saepe",
                "ea",
                "impedit",
            },
            Name: sdk.String("Mrs. Sally Jacobi"),
            SellerID: sdk.String("quo"),
            Users: []shared.AccountUser{
                shared.AccountUser{
                    Admin: sdk.Bool(false),
                    EmailAddress: sdk.String("recusandae"),
                    OrderManager: sdk.Bool(false),
                    PaymentsAnalyst: sdk.Bool(false),
                    PaymentsManager: sdk.Bool(false),
                    ReportingManager: sdk.Bool(false),
                },
            },
            WebsiteURL: sdk.String("aspernatur"),
            YoutubeChannelLinks: []shared.AccountYouTubeChannelLink{
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("eaque"),
                    Status: sdk.String("a"),
                },
                shared.AccountYouTubeChannelLink{
                    ChannelID: sdk.String("libero"),
                    Status: sdk.String("aut"),
                },
            },
        },
        AccessToken: sdk.String("aut"),
        AccountID: "deleniti",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("accusamus"),
        MerchantID: "inventore",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("laborum"),
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

## ContentAccountsUpdatelabels

Updates labels that are assigned to the Merchant Center account by CSS user.

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
    res, err := s.Accounts.ContentAccountsUpdatelabels(ctx, operations.ContentAccountsUpdatelabelsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountsUpdateLabelsRequest: &shared.AccountsUpdateLabelsRequest{
            LabelIds: []string{
                "eum",
            },
        },
        AccessToken: sdk.String("autem"),
        AccountID: "nobis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("voluptas"),
        MerchantID: "libero",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.ContentAccountsUpdatelabelsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsUpdateLabelsResponse != nil {
        // handle response
    }
}
```

## ContentAccountsVerifyphonenumber

Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

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
    res, err := s.Accounts.ContentAccountsVerifyphonenumber(ctx, operations.ContentAccountsVerifyphonenumberRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VerifyPhoneNumberRequest: &shared.VerifyPhoneNumberRequest{
            PhoneVerificationMethod: shared.VerifyPhoneNumberRequestPhoneVerificationMethodEnumPhoneVerificationMethodUnspecified.ToPointer(),
            VerificationCode: sdk.String("molestiae"),
            VerificationID: sdk.String("magnam"),
        },
        AccessToken: sdk.String("odio"),
        AccountID: "eius",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("rem"),
        Key: sdk.String("fuga"),
        MerchantID: "reprehenderit",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("eum"),
    }, operations.ContentAccountsVerifyphonenumberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyPhoneNumberResponse != nil {
        // handle response
    }
}
```
