# Liasettings

### Available Operations

* [ContentLiasettingsCustombatch](#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [ContentLiasettingsGet](#contentliasettingsget) - Retrieves the LIA settings of the account.
* [ContentLiasettingsGetaccessiblegmbaccounts](#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Google My Business accounts.
* [ContentLiasettingsList](#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [ContentLiasettingsListposdataproviders](#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [ContentLiasettingsRequestgmbaccess](#contentliasettingsrequestgmbaccess) - Requests access to a specified Google My Business account.
* [ContentLiasettingsRequestinventoryverification](#contentliasettingsrequestinventoryverification) - Requests inventory validation for the specified country.
* [ContentLiasettingsSetinventoryverificationcontact](#contentliasettingssetinventoryverificationcontact) - Sets the inventory verification contract for the specified country.
* [ContentLiasettingsSetposdataprovider](#contentliasettingssetposdataprovider) - Sets the POS data provider for the specified country.
* [ContentLiasettingsUpdate](#contentliasettingsupdate) - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

## ContentLiasettingsCustombatch

Retrieves and/or updates the LIA settings of multiple accounts in a single request.

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
    res, err := s.Liasettings.ContentLiasettingsCustombatch(ctx, operations.ContentLiasettingsCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LiasettingsCustomBatchRequest: &shared.LiasettingsCustomBatchRequest{
            Entries: []shared.LiasettingsCustomBatchRequestEntry{
                shared.LiasettingsCustomBatchRequestEntry{
                    AccountID: sdk.String("numquam"),
                    BatchID: sdk.Int64(771089),
                    ContactEmail: sdk.String("explicabo"),
                    ContactName: sdk.String("voluptas"),
                    Country: sdk.String("Algeria"),
                    GmbEmail: sdk.String("dignissimos"),
                    LiaSettings: &shared.LiaSettings{
                        AccountID: sdk.String("dicta"),
                        CountrySettings: []shared.LiaCountrySettings{
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("natus"),
                                    URL: sdk.String("velit"),
                                },
                                Country: sdk.String("Virgin Islands, British"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("voluptas"),
                                    InventoryVerificationContactName: sdk.String("asperiores"),
                                    InventoryVerificationContactStatus: sdk.String("aperiam"),
                                    Status: sdk.String("ea"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("quaerat"),
                                    Status: sdk.String("consequuntur"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("repellendus"),
                                    PosExternalAccountID: sdk.String("officia"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("maxime"),
                                    URL: sdk.String("dignissimos"),
                                },
                                Country: sdk.String("Nicaragua"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("asperiores"),
                                    InventoryVerificationContactName: sdk.String("nemo"),
                                    InventoryVerificationContactStatus: sdk.String("quae"),
                                    Status: sdk.String("quaerat"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("porro"),
                                    Status: sdk.String("quod"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("labore"),
                                    PosExternalAccountID: sdk.String("ab"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("adipisci"),
                                    URL: sdk.String("fuga"),
                                },
                                Country: sdk.String("Northern Mariana Islands"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("suscipit"),
                                    InventoryVerificationContactName: sdk.String("velit"),
                                    InventoryVerificationContactStatus: sdk.String("culpa"),
                                    Status: sdk.String("est"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("recusandae"),
                                    Status: sdk.String("totam"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("fugiat"),
                                    PosExternalAccountID: sdk.String("vel"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("ducimus"),
                                    URL: sdk.String("quos"),
                                },
                                Country: sdk.String("Israel"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("labore"),
                                    InventoryVerificationContactName: sdk.String("possimus"),
                                    InventoryVerificationContactStatus: sdk.String("facilis"),
                                    Status: sdk.String("cum"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("commodi"),
                                    Status: sdk.String("in"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("corporis"),
                                    PosExternalAccountID: sdk.String("reiciendis"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                        },
                        Kind: sdk.String("assumenda"),
                    },
                    MerchantID: sdk.String("nemo"),
                    Method: sdk.String("recusandae"),
                    PosDataProviderID: sdk.String("aliquid"),
                    PosExternalAccountID: sdk.String("aperiam"),
                },
                shared.LiasettingsCustomBatchRequestEntry{
                    AccountID: sdk.String("cum"),
                    BatchID: sdk.Int64(232627),
                    ContactEmail: sdk.String("in"),
                    ContactName: sdk.String("exercitationem"),
                    Country: sdk.String("United Arab Emirates"),
                    GmbEmail: sdk.String("facere"),
                    LiaSettings: &shared.LiaSettings{
                        AccountID: sdk.String("numquam"),
                        CountrySettings: []shared.LiaCountrySettings{
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("suscipit"),
                                    URL: sdk.String("reiciendis"),
                                },
                                Country: sdk.String("Peru"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("saepe"),
                                    InventoryVerificationContactName: sdk.String("necessitatibus"),
                                    InventoryVerificationContactStatus: sdk.String("dolore"),
                                    Status: sdk.String("sunt"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("asperiores"),
                                    Status: sdk.String("adipisci"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("non"),
                                    PosExternalAccountID: sdk.String("amet"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("beatae"),
                                    URL: sdk.String("dignissimos"),
                                },
                                Country: sdk.String("Uruguay"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("debitis"),
                                    InventoryVerificationContactName: sdk.String("consectetur"),
                                    InventoryVerificationContactStatus: sdk.String("corporis"),
                                    Status: sdk.String("harum"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("laboriosam"),
                                    Status: sdk.String("ipsa"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("voluptates"),
                                    PosExternalAccountID: sdk.String("libero"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("vitae"),
                                    URL: sdk.String("accusamus"),
                                },
                                Country: sdk.String("Netherlands"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("tempora"),
                                    InventoryVerificationContactName: sdk.String("aspernatur"),
                                    InventoryVerificationContactStatus: sdk.String("voluptas"),
                                    Status: sdk.String("voluptas"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("voluptas"),
                                    Status: sdk.String("minima"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("nobis"),
                                    PosExternalAccountID: sdk.String("dolorum"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("adipisci"),
                                    URL: sdk.String("minus"),
                                },
                                Country: sdk.String("Chad"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("blanditiis"),
                                    InventoryVerificationContactName: sdk.String("in"),
                                    InventoryVerificationContactStatus: sdk.String("dolore"),
                                    Status: sdk.String("aliquam"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("officiis"),
                                    Status: sdk.String("temporibus"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("ullam"),
                                    PosExternalAccountID: sdk.String("adipisci"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                        },
                        Kind: sdk.String("cum"),
                    },
                    MerchantID: sdk.String("blanditiis"),
                    Method: sdk.String("quas"),
                    PosDataProviderID: sdk.String("hic"),
                    PosExternalAccountID: sdk.String("nesciunt"),
                },
                shared.LiasettingsCustomBatchRequestEntry{
                    AccountID: sdk.String("culpa"),
                    BatchID: sdk.Int64(548519),
                    ContactEmail: sdk.String("pariatur"),
                    ContactName: sdk.String("totam"),
                    Country: sdk.String("United Kingdom"),
                    GmbEmail: sdk.String("exercitationem"),
                    LiaSettings: &shared.LiaSettings{
                        AccountID: sdk.String("nobis"),
                        CountrySettings: []shared.LiaCountrySettings{
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("rerum"),
                                    URL: sdk.String("sed"),
                                },
                                Country: sdk.String("Vietnam"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("explicabo"),
                                    InventoryVerificationContactName: sdk.String("asperiores"),
                                    InventoryVerificationContactStatus: sdk.String("facilis"),
                                    Status: sdk.String("voluptate"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("expedita"),
                                    Status: sdk.String("ab"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("iste"),
                                    PosExternalAccountID: sdk.String("dolore"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                        },
                        Kind: sdk.String("laborum"),
                    },
                    MerchantID: sdk.String("sed"),
                    Method: sdk.String("in"),
                    PosDataProviderID: sdk.String("commodi"),
                    PosExternalAccountID: sdk.String("quidem"),
                },
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("architecto"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ContentLiasettingsCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsGet

Retrieves the LIA settings of the account.

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
    res, err := s.Liasettings.ContentLiasettingsGet(ctx, operations.ContentLiasettingsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        AccountID: "maiores",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("provident"),
        Key: sdk.String("eius"),
        MerchantID: "necessitatibus",
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("quos"),
    }, operations.ContentLiasettingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiaSettings != nil {
        // handle response
    }
}
```

## ContentLiasettingsGetaccessiblegmbaccounts

Retrieves the list of accessible Google My Business accounts.

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
    res, err := s.Liasettings.ContentLiasettingsGetaccessiblegmbaccounts(ctx, operations.ContentLiasettingsGetaccessiblegmbaccountsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        AccountID: "tempora",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("ex"),
        Key: sdk.String("sit"),
        MerchantID: "non",
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.ContentLiasettingsGetaccessiblegmbaccountsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsGetAccessibleGmbAccountsResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsList

Lists the LIA settings of the sub-accounts in your Merchant Center account.

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
    res, err := s.Liasettings.ContentLiasettingsList(ctx, operations.ContentLiasettingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("sit"),
        Key: sdk.String("nobis"),
        MaxResults: sdk.Int64(625637),
        MerchantID: "veniam",
        OauthToken: sdk.String("minima"),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("magni"),
    }, operations.ContentLiasettingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsListResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsListposdataproviders

Retrieves the list of POS data providers that have active settings for the all eiligible countries.

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
    res, err := s.Liasettings.ContentLiasettingsListposdataproviders(ctx, operations.ContentLiasettingsListposdataprovidersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("in"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.ContentLiasettingsListposdataprovidersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsListPosDataProvidersResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsRequestgmbaccess

Requests access to a specified Google My Business account.

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
    res, err := s.Liasettings.ContentLiasettingsRequestgmbaccess(ctx, operations.ContentLiasettingsRequestgmbaccessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        AccountID: "dolorum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("hic"),
        GmbEmail: "expedita",
        Key: sdk.String("debitis"),
        MerchantID: "neque",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.ContentLiasettingsRequestgmbaccessSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsRequestGmbAccessResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsRequestinventoryverification

Requests inventory validation for the specified country.

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
    res, err := s.Liasettings.ContentLiasettingsRequestinventoryverification(ctx, operations.ContentLiasettingsRequestinventoryverificationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        AccountID: "tempora",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Country: "Falkland Islands (Malvinas)",
        Fields: sdk.String("fugiat"),
        Key: sdk.String("voluptatem"),
        MerchantID: "culpa",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("esse"),
    }, operations.ContentLiasettingsRequestinventoryverificationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsRequestInventoryVerificationResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsSetinventoryverificationcontact

Sets the inventory verification contract for the specified country.

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
    res, err := s.Liasettings.ContentLiasettingsSetinventoryverificationcontact(ctx, operations.ContentLiasettingsSetinventoryverificationcontactRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sit"),
        AccountID: "voluptatum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        ContactEmail: "corporis",
        ContactName: "et",
        Country: "Libyan Arab Jamahiriya",
        Fields: sdk.String("ex"),
        Key: sdk.String("sed"),
        Language: "sit",
        MerchantID: "vel",
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.ContentLiasettingsSetinventoryverificationcontactSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsSetInventoryVerificationContactResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsSetposdataprovider

Sets the POS data provider for the specified country.

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
    res, err := s.Liasettings.ContentLiasettingsSetposdataprovider(ctx, operations.ContentLiasettingsSetposdataproviderRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        AccountID: "dolorem",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Country: "Bhutan",
        Fields: sdk.String("occaecati"),
        Key: sdk.String("labore"),
        MerchantID: "quidem",
        OauthToken: sdk.String("atque"),
        PosDataProviderID: sdk.String("laborum"),
        PosExternalAccountID: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("alias"),
    }, operations.ContentLiasettingsSetposdataproviderSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiasettingsSetPosDataProviderResponse != nil {
        // handle response
    }
}
```

## ContentLiasettingsUpdate

Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

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
    res, err := s.Liasettings.ContentLiasettingsUpdate(ctx, operations.ContentLiasettingsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LiaSettings: &shared.LiaSettings{
            AccountID: sdk.String("deserunt"),
            CountrySettings: []shared.LiaCountrySettings{
                shared.LiaCountrySettings{
                    About: &shared.LiaAboutPageSettings{
                        Status: sdk.String("unde"),
                        URL: sdk.String("reiciendis"),
                    },
                    Country: sdk.String("Mongolia"),
                    HostedLocalStorefrontActive: sdk.Bool(false),
                    Inventory: &shared.LiaInventorySettings{
                        InventoryVerificationContactEmail: sdk.String("repellendus"),
                        InventoryVerificationContactName: sdk.String("delectus"),
                        InventoryVerificationContactStatus: sdk.String("voluptates"),
                        Status: sdk.String("perferendis"),
                    },
                    OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                        ShippingCostPolicyURL: sdk.String("est"),
                        Status: sdk.String("quidem"),
                    },
                    PosDataProvider: &shared.LiaPosDataProvider{
                        PosDataProviderID: sdk.String("reprehenderit"),
                        PosExternalAccountID: sdk.String("facere"),
                    },
                    StorePickupActive: sdk.Bool(false),
                },
                shared.LiaCountrySettings{
                    About: &shared.LiaAboutPageSettings{
                        Status: sdk.String("fuga"),
                        URL: sdk.String("praesentium"),
                    },
                    Country: sdk.String("Nigeria"),
                    HostedLocalStorefrontActive: sdk.Bool(false),
                    Inventory: &shared.LiaInventorySettings{
                        InventoryVerificationContactEmail: sdk.String("veniam"),
                        InventoryVerificationContactName: sdk.String("voluptatem"),
                        InventoryVerificationContactStatus: sdk.String("quisquam"),
                        Status: sdk.String("repudiandae"),
                    },
                    OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                        ShippingCostPolicyURL: sdk.String("quasi"),
                        Status: sdk.String("atque"),
                    },
                    PosDataProvider: &shared.LiaPosDataProvider{
                        PosDataProviderID: sdk.String("reprehenderit"),
                        PosExternalAccountID: sdk.String("asperiores"),
                    },
                    StorePickupActive: sdk.Bool(false),
                },
            },
            Kind: sdk.String("totam"),
        },
        AccessToken: sdk.String("suscipit"),
        AccountID: "quidem",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("et"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("esse"),
        Key: sdk.String("amet"),
        MerchantID: "assumenda",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.ContentLiasettingsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiaSettings != nil {
        // handle response
    }
}
```
