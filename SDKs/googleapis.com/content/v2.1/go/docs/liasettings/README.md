# Liasettings

### Available Operations

* [ContentLiasettingsCustombatch](#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [ContentLiasettingsGet](#contentliasettingsget) - Retrieves the LIA settings of the account.
* [ContentLiasettingsGetaccessiblegmbaccounts](#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Business Profiles.
* [ContentLiasettingsList](#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [ContentLiasettingsListposdataproviders](#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [ContentLiasettingsRequestgmbaccess](#contentliasettingsrequestgmbaccess) - Requests access to a specified Business Profile.
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
                    AccountID: sdk.String("ea"),
                    BatchID: sdk.Int64(107617),
                    ContactEmail: sdk.String("vero"),
                    ContactName: sdk.String("excepturi"),
                    Country: sdk.String("Italy"),
                    GmbEmail: sdk.String("velit"),
                    LiaSettings: &shared.LiaSettings{
                        AccountID: sdk.String("ut"),
                        CountrySettings: []shared.LiaCountrySettings{
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("earum"),
                                    URL: sdk.String("dicta"),
                                },
                                Country: sdk.String("Samoa"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("voluptatibus"),
                                    InventoryVerificationContactName: sdk.String("iste"),
                                    InventoryVerificationContactStatus: sdk.String("itaque"),
                                    Status: sdk.String("alias"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("nisi"),
                                    Status: sdk.String("itaque"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("velit"),
                                    PosExternalAccountID: sdk.String("laborum"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("non"),
                                    URL: sdk.String("dolor"),
                                },
                                Country: sdk.String("Lao People's Democratic Republic"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("sit"),
                                    InventoryVerificationContactName: sdk.String("doloremque"),
                                    InventoryVerificationContactStatus: sdk.String("consequatur"),
                                    Status: sdk.String("officia"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("recusandae"),
                                    Status: sdk.String("ea"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("quidem"),
                                    PosExternalAccountID: sdk.String("voluptas"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("facilis"),
                                    URL: sdk.String("placeat"),
                                },
                                Country: sdk.String("Montserrat"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("expedita"),
                                    InventoryVerificationContactName: sdk.String("deleniti"),
                                    InventoryVerificationContactStatus: sdk.String("a"),
                                    Status: sdk.String("voluptate"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("ullam"),
                                    Status: sdk.String("unde"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("necessitatibus"),
                                    PosExternalAccountID: sdk.String("animi"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                        },
                        Kind: sdk.String("impedit"),
                    },
                    MerchantID: sdk.String("ipsam"),
                    Method: sdk.String("corporis"),
                    PosDataProviderID: sdk.String("est"),
                    PosExternalAccountID: sdk.String("error"),
                },
                shared.LiasettingsCustomBatchRequestEntry{
                    AccountID: sdk.String("esse"),
                    BatchID: sdk.Int64(288570),
                    ContactEmail: sdk.String("veritatis"),
                    ContactName: sdk.String("vero"),
                    Country: sdk.String("Denmark"),
                    GmbEmail: sdk.String("vitae"),
                    LiaSettings: &shared.LiaSettings{
                        AccountID: sdk.String("inventore"),
                        CountrySettings: []shared.LiaCountrySettings{
                            shared.LiaCountrySettings{
                                About: &shared.LiaAboutPageSettings{
                                    Status: sdk.String("ad"),
                                    URL: sdk.String("qui"),
                                },
                                Country: sdk.String("Namibia"),
                                HostedLocalStorefrontActive: sdk.Bool(false),
                                Inventory: &shared.LiaInventorySettings{
                                    InventoryVerificationContactEmail: sdk.String("ex"),
                                    InventoryVerificationContactName: sdk.String("nemo"),
                                    InventoryVerificationContactStatus: sdk.String("soluta"),
                                    Status: sdk.String("libero"),
                                },
                                OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                                    ShippingCostPolicyURL: sdk.String("rem"),
                                    Status: sdk.String("dolorum"),
                                },
                                PosDataProvider: &shared.LiaPosDataProvider{
                                    PosDataProviderID: sdk.String("odio"),
                                    PosExternalAccountID: sdk.String("fugit"),
                                },
                                StorePickupActive: sdk.Bool(false),
                            },
                        },
                        Kind: sdk.String("alias"),
                    },
                    MerchantID: sdk.String("magni"),
                    Method: sdk.String("vel"),
                    PosDataProviderID: sdk.String("quae"),
                    PosExternalAccountID: sdk.String("quae"),
                },
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("et"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("distinctio"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        AccountID: "quia",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("libero"),
        Key: sdk.String("dicta"),
        MerchantID: "id",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("officia"),
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

Retrieves the list of accessible Business Profiles.

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
        AccessToken: sdk.String("sit"),
        AccountID: "iusto",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("aperiam"),
        MerchantID: "totam",
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("voluptatem"),
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
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("est"),
        MaxResults: sdk.Int64(817339),
        MerchantID: "corrupti",
        OauthToken: sdk.String("molestiae"),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("tempore"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("cum"),
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

Requests access to a specified Business Profile.

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
        AccessToken: sdk.String("alias"),
        AccountID: "quia",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("repudiandae"),
        GmbEmail: "accusantium",
        Key: sdk.String("expedita"),
        MerchantID: "officiis",
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("praesentium"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        AccountID: "corporis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("earum"),
        Country: "Dominica",
        Fields: sdk.String("recusandae"),
        Key: sdk.String("similique"),
        MerchantID: "ut",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("unde"),
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
        AccessToken: sdk.String("delectus"),
        AccountID: "cupiditate",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("numquam"),
        ContactEmail: "numquam",
        ContactName: "nesciunt",
        Country: "Tajikistan",
        Fields: sdk.String("officia"),
        Key: sdk.String("dignissimos"),
        Language: "optio",
        MerchantID: "necessitatibus",
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("voluptatum"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minima"),
        AccountID: "placeat",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("neque"),
        Country: "Jordan",
        Fields: sdk.String("minus"),
        Key: sdk.String("eum"),
        MerchantID: "modi",
        OauthToken: sdk.String("corporis"),
        PosDataProviderID: sdk.String("magnam"),
        PosExternalAccountID: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("aperiam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LiaSettings: &shared.LiaSettings{
            AccountID: sdk.String("ratione"),
            CountrySettings: []shared.LiaCountrySettings{
                shared.LiaCountrySettings{
                    About: &shared.LiaAboutPageSettings{
                        Status: sdk.String("totam"),
                        URL: sdk.String("occaecati"),
                    },
                    Country: sdk.String("Haiti"),
                    HostedLocalStorefrontActive: sdk.Bool(false),
                    Inventory: &shared.LiaInventorySettings{
                        InventoryVerificationContactEmail: sdk.String("quo"),
                        InventoryVerificationContactName: sdk.String("velit"),
                        InventoryVerificationContactStatus: sdk.String("minus"),
                        Status: sdk.String("fuga"),
                    },
                    OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                        ShippingCostPolicyURL: sdk.String("nostrum"),
                        Status: sdk.String("est"),
                    },
                    PosDataProvider: &shared.LiaPosDataProvider{
                        PosDataProviderID: sdk.String("impedit"),
                        PosExternalAccountID: sdk.String("delectus"),
                    },
                    StorePickupActive: sdk.Bool(false),
                },
                shared.LiaCountrySettings{
                    About: &shared.LiaAboutPageSettings{
                        Status: sdk.String("tempore"),
                        URL: sdk.String("vero"),
                    },
                    Country: sdk.String("Burundi"),
                    HostedLocalStorefrontActive: sdk.Bool(false),
                    Inventory: &shared.LiaInventorySettings{
                        InventoryVerificationContactEmail: sdk.String("repellat"),
                        InventoryVerificationContactName: sdk.String("pariatur"),
                        InventoryVerificationContactStatus: sdk.String("nemo"),
                        Status: sdk.String("reprehenderit"),
                    },
                    OnDisplayToOrder: &shared.LiaOnDisplayToOrderSettings{
                        ShippingCostPolicyURL: sdk.String("aperiam"),
                        Status: sdk.String("odio"),
                    },
                    PosDataProvider: &shared.LiaPosDataProvider{
                        PosDataProviderID: sdk.String("minima"),
                        PosExternalAccountID: sdk.String("in"),
                    },
                    StorePickupActive: sdk.Bool(false),
                },
            },
            Kind: sdk.String("ducimus"),
        },
        AccessToken: sdk.String("excepturi"),
        AccountID: "dolores",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("voluptate"),
        MerchantID: "pariatur",
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("ex"),
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
