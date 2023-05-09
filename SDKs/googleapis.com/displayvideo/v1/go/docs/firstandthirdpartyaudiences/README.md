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
            AppID: sdk.String("iste"),
            AudienceType: shared.FirstAndThirdPartyAudienceAudienceTypeEnumFrequencyCap.ToPointer(),
            ContactInfoList: &shared.ContactInfoList{
                ContactInfos: []shared.ContactInfo{
                    shared.ContactInfo{
                        CountryCode: sdk.String("MH"),
                        HashedEmails: []string{
                            "eaque",
                        },
                        HashedFirstName: sdk.String("eum"),
                        HashedLastName: sdk.String("laboriosam"),
                        HashedPhoneNumbers: []string{
                            "autem",
                            "assumenda",
                            "explicabo",
                        },
                        ZipCodes: []string{
                            "doloremque",
                            "voluptatem",
                            "alias",
                            "velit",
                        },
                    },
                },
            },
            Description: sdk.String("ullam"),
            DisplayName: sdk.String("quis"),
            FirstAndThirdPartyAudienceType: shared.FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnumFirstAndThirdPartyAudienceTypeUnspecified.ToPointer(),
            MembershipDurationDays: sdk.String("ratione"),
            MobileDeviceIDList: &shared.MobileDeviceIDList{
                MobileDeviceIds: []string{
                    "maxime",
                    "recusandae",
                    "cumque",
                },
            },
        },
        AccessToken: sdk.String("doloremque"),
        AdvertiserID: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("est"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dicta"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EditCustomerMatchMembersRequest: &shared.EditCustomerMatchMembersRequest{
            AddedContactInfoList: &shared.ContactInfoList{
                ContactInfos: []shared.ContactInfo{
                    shared.ContactInfo{
                        CountryCode: sdk.String("RU"),
                        HashedEmails: []string{
                            "non",
                            "beatae",
                            "sunt",
                        },
                        HashedFirstName: sdk.String("molestias"),
                        HashedLastName: sdk.String("beatae"),
                        HashedPhoneNumbers: []string{
                            "ducimus",
                            "libero",
                        },
                        ZipCodes: []string{
                            "necessitatibus",
                            "ipsum",
                            "impedit",
                        },
                    },
                },
            },
            AddedMobileDeviceIDList: &shared.MobileDeviceIDList{
                MobileDeviceIds: []string{
                    "illum",
                    "distinctio",
                    "voluptatem",
                },
            },
            AdvertiserID: sdk.String("non"),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("repellendus"),
        FirstAndThirdPartyAudienceID: "commodi",
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("earum"),
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
        AccessToken: sdk.String("assumenda"),
        AdvertiserID: sdk.String("dolore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("perspiciatis"),
        FirstAndThirdPartyAudienceID: "alias",
        Key: sdk.String("ex"),
        OauthToken: sdk.String("quibusdam"),
        PartnerID: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("neque"),
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
        AccessToken: sdk.String("numquam"),
        AdvertiserID: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("neque"),
        Filter: sdk.String("corporis"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("dolores"),
        OrderBy: sdk.String("placeat"),
        PageSize: sdk.Int64(570039),
        PageToken: sdk.String("recusandae"),
        PartnerID: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("ipsum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FirstAndThirdPartyAudienceInput: &shared.FirstAndThirdPartyAudienceInput{
            AppID: sdk.String("soluta"),
            AudienceType: shared.FirstAndThirdPartyAudienceAudienceTypeEnumLicensed.ToPointer(),
            ContactInfoList: &shared.ContactInfoList{
                ContactInfos: []shared.ContactInfo{
                    shared.ContactInfo{
                        CountryCode: sdk.String("UG"),
                        HashedEmails: []string{
                            "adipisci",
                            "magni",
                        },
                        HashedFirstName: sdk.String("aperiam"),
                        HashedLastName: sdk.String("dolores"),
                        HashedPhoneNumbers: []string{
                            "iusto",
                            "magni",
                            "beatae",
                            "aliquid",
                        },
                        ZipCodes: []string{
                            "voluptate",
                            "vel",
                        },
                    },
                },
            },
            Description: sdk.String("minima"),
            DisplayName: sdk.String("sit"),
            FirstAndThirdPartyAudienceType: shared.FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnumFirstAndThirdPartyAudienceTypeFirstParty.ToPointer(),
            MembershipDurationDays: sdk.String("laboriosam"),
            MobileDeviceIDList: &shared.MobileDeviceIDList{
                MobileDeviceIds: []string{
                    "quasi",
                    "rem",
                },
            },
        },
        AccessToken: sdk.String("dignissimos"),
        AdvertiserID: sdk.String("doloremque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("facere"),
        FirstAndThirdPartyAudienceID: "sed",
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UpdateMask: sdk.String("deserunt"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("consequatur"),
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
