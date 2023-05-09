# FirstAndThirdPartyAudiences

### Available Operations

* [DisplayvideoFirstAndThirdPartyAudiencesCreate](#displayvideofirstandthirdpartyaudiencescreate) - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers](#displayvideofirstandthirdpartyaudienceseditcustomermatchmembers) - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [DisplayvideoFirstAndThirdPartyAudiencesGet](#displayvideofirstandthirdpartyaudiencesget) - Gets a first and third party audience.
* [DisplayvideoFirstAndThirdPartyAudiencesList](#displayvideofirstandthirdpartyaudienceslist) - Lists first and third party audiences. The order is defined by the order_by parameter.
* [DisplayvideoFirstAndThirdPartyAudiencesPatch](#displayvideofirstandthirdpartyaudiencespatch) - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

## DisplayvideoFirstAndThirdPartyAudiencesCreate

Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

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
    res, err := s.FirstAndThirdPartyAudiences.DisplayvideoFirstAndThirdPartyAudiencesCreate(ctx, operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FirstAndThirdPartyAudienceInput: &shared.FirstAndThirdPartyAudienceInput{
            AppID: sdk.String("consectetur"),
            AudienceType: shared.FirstAndThirdPartyAudienceAudienceTypeEnumLicensed.ToPointer(),
            ContactInfoList: &shared.ContactInfoList{
                ContactInfos: []shared.ContactInfo{
                    shared.ContactInfo{
                        CountryCode: sdk.String("AQ"),
                        HashedEmails: []string{
                            "consectetur",
                        },
                        HashedFirstName: sdk.String("asperiores"),
                        HashedLastName: sdk.String("architecto"),
                        HashedPhoneNumbers: []string{
                            "possimus",
                            "tempore",
                            "asperiores",
                        },
                        ZipCodes: []string{
                            "consequuntur",
                        },
                    },
                    shared.ContactInfo{
                        CountryCode: sdk.String("GU"),
                        HashedEmails: []string{
                            "debitis",
                            "labore",
                            "veritatis",
                            "minima",
                        },
                        HashedFirstName: sdk.String("magni"),
                        HashedLastName: sdk.String("itaque"),
                        HashedPhoneNumbers: []string{
                            "expedita",
                            "error",
                            "placeat",
                        },
                        ZipCodes: []string{
                            "voluptate",
                            "earum",
                            "minima",
                            "odit",
                        },
                    },
                },
            },
            Description: sdk.String("odit"),
            DisplayName: sdk.String("eius"),
            FirstAndThirdPartyAudienceType: shared.FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnumFirstAndThirdPartyAudienceTypeFirstParty.ToPointer(),
            MembershipDurationDays: sdk.String("vel"),
            MobileDeviceIDList: &shared.MobileDeviceIDList{
                MobileDeviceIds: []string{
                    "alias",
                    "itaque",
                    "ab",
                },
            },
        },
        AccessToken: sdk.String("sunt"),
        AdvertiserID: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("minima"),
    }, operations.DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstAndThirdPartyAudience != nil {
        // handle response
    }
}
```

## DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers

Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

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
    res, err := s.FirstAndThirdPartyAudiences.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(ctx, operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EditCustomerMatchMembersRequest: &shared.EditCustomerMatchMembersRequest{
            AddedContactInfoList: &shared.ContactInfoList{
                ContactInfos: []shared.ContactInfo{
                    shared.ContactInfo{
                        CountryCode: sdk.String("BL"),
                        HashedEmails: []string{
                            "autem",
                            "in",
                            "repellat",
                            "amet",
                        },
                        HashedFirstName: sdk.String("cumque"),
                        HashedLastName: sdk.String("dolore"),
                        HashedPhoneNumbers: []string{
                            "quo",
                            "repudiandae",
                            "tempora",
                            "libero",
                        },
                        ZipCodes: []string{
                            "illum",
                            "iusto",
                        },
                    },
                    shared.ContactInfo{
                        CountryCode: sdk.String("HU"),
                        HashedEmails: []string{
                            "aliquid",
                            "repellat",
                            "sapiente",
                        },
                        HashedFirstName: sdk.String("consectetur"),
                        HashedLastName: sdk.String("eligendi"),
                        HashedPhoneNumbers: []string{
                            "nihil",
                            "eius",
                        },
                        ZipCodes: []string{
                            "corporis",
                            "perferendis",
                        },
                    },
                    shared.ContactInfo{
                        CountryCode: sdk.String("BL"),
                        HashedEmails: []string{
                            "corporis",
                        },
                        HashedFirstName: sdk.String("nihil"),
                        HashedLastName: sdk.String("officiis"),
                        HashedPhoneNumbers: []string{
                            "magnam",
                            "maiores",
                        },
                        ZipCodes: []string{
                            "dicta",
                            "hic",
                        },
                    },
                    shared.ContactInfo{
                        CountryCode: sdk.String("LA"),
                        HashedEmails: []string{
                            "consequatur",
                            "totam",
                            "tempora",
                        },
                        HashedFirstName: sdk.String("quo"),
                        HashedLastName: sdk.String("dolor"),
                        HashedPhoneNumbers: []string{
                            "omnis",
                        },
                        ZipCodes: []string{
                            "officiis",
                            "dicta",
                        },
                    },
                },
            },
            AddedMobileDeviceIDList: &shared.MobileDeviceIDList{
                MobileDeviceIds: []string{
                    "consectetur",
                    "deserunt",
                    "odit",
                },
            },
            AdvertiserID: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("ducimus"),
        FirstAndThirdPartyAudienceID: "tenetur",
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("eius"),
    }, operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditCustomerMatchMembersResponse != nil {
        // handle response
    }
}
```

## DisplayvideoFirstAndThirdPartyAudiencesGet

Gets a first and third party audience.

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
    res, err := s.FirstAndThirdPartyAudiences.DisplayvideoFirstAndThirdPartyAudiencesGet(ctx, operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        AdvertiserID: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("porro"),
        FirstAndThirdPartyAudienceID: "labore",
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("ducimus"),
        PartnerID: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("ratione"),
    }, operations.DisplayvideoFirstAndThirdPartyAudiencesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstAndThirdPartyAudience != nil {
        // handle response
    }
}
```

## DisplayvideoFirstAndThirdPartyAudiencesList

Lists first and third party audiences. The order is defined by the order_by parameter.

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
    res, err := s.FirstAndThirdPartyAudiences.DisplayvideoFirstAndThirdPartyAudiencesList(ctx, operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iure"),
        AdvertiserID: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("rem"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("corporis"),
        OrderBy: sdk.String("repellendus"),
        PageSize: sdk.Int64(12917),
        PageToken: sdk.String("voluptatem"),
        PartnerID: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DisplayvideoFirstAndThirdPartyAudiencesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirstAndThirdPartyAudiencesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoFirstAndThirdPartyAudiencesPatch

Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

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
    res, err := s.FirstAndThirdPartyAudiences.DisplayvideoFirstAndThirdPartyAudiencesPatch(ctx, operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FirstAndThirdPartyAudienceInput: &shared.FirstAndThirdPartyAudienceInput{
            AppID: sdk.String("delectus"),
            AudienceType: shared.FirstAndThirdPartyAudienceAudienceTypeEnumCustomerMatchContactInfo.ToPointer(),
            ContactInfoList: &shared.ContactInfoList{
                ContactInfos: []shared.ContactInfo{
                    shared.ContactInfo{
                        CountryCode: sdk.String("DO"),
                        HashedEmails: []string{
                            "nihil",
                            "neque",
                            "aspernatur",
                        },
                        HashedFirstName: sdk.String("eaque"),
                        HashedLastName: sdk.String("corporis"),
                        HashedPhoneNumbers: []string{
                            "aut",
                            "impedit",
                            "quod",
                        },
                        ZipCodes: []string{
                            "architecto",
                            "voluptatem",
                            "perspiciatis",
                            "ea",
                        },
                    },
                },
            },
            Description: sdk.String("eius"),
            DisplayName: sdk.String("aperiam"),
            FirstAndThirdPartyAudienceType: shared.FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnumFirstAndThirdPartyAudienceTypeUnspecified.ToPointer(),
            MembershipDurationDays: sdk.String("non"),
            MobileDeviceIDList: &shared.MobileDeviceIDList{
                MobileDeviceIds: []string{
                    "sequi",
                },
            },
        },
        AccessToken: sdk.String("rerum"),
        AdvertiserID: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("eaque"),
        FirstAndThirdPartyAudienceID: "incidunt",
        Key: sdk.String("ut"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UpdateMask: sdk.String("ullam"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirstAndThirdPartyAudience != nil {
        // handle response
    }
}
```
