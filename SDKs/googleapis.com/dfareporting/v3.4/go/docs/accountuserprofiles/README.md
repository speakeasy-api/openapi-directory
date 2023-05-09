# AccountUserProfiles

### Available Operations

* [DfareportingAccountUserProfilesGet](#dfareportingaccountuserprofilesget) - Gets one account user profile by ID.
* [DfareportingAccountUserProfilesInsert](#dfareportingaccountuserprofilesinsert) - Inserts a new account user profile.
* [DfareportingAccountUserProfilesList](#dfareportingaccountuserprofileslist) - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* [DfareportingAccountUserProfilesPatch](#dfareportingaccountuserprofilespatch) - Updates an existing account user profile. This method supports patch semantics.
* [DfareportingAccountUserProfilesUpdate](#dfareportingaccountuserprofilesupdate) - Updates an existing account user profile.

## DfareportingAccountUserProfilesGet

Gets one account user profile by ID.

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
    res, err := s.AccountUserProfiles.DfareportingAccountUserProfilesGet(ctx, operations.DfareportingAccountUserProfilesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quasi"),
        ID: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DfareportingAccountUserProfilesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountUserProfile != nil {
        // handle response
    }
}
```

## DfareportingAccountUserProfilesInsert

Inserts a new account user profile.

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
    res, err := s.AccountUserProfiles.DfareportingAccountUserProfilesInsert(ctx, operations.DfareportingAccountUserProfilesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountUserProfile: &shared.AccountUserProfile{
            AccountID: sdk.String("voluptates"),
            Active: sdk.Bool(false),
            AdvertiserFilter: &shared.ObjectFilter{
                Kind: sdk.String("quasi"),
                ObjectIds: []string{
                    "sint",
                    "veritatis",
                    "itaque",
                    "incidunt",
                },
                Status: shared.ObjectFilterStatusEnumNone.ToPointer(),
            },
            CampaignFilter: &shared.ObjectFilter{
                Kind: sdk.String("consequatur"),
                ObjectIds: []string{
                    "quibusdam",
                    "explicabo",
                    "deserunt",
                },
                Status: shared.ObjectFilterStatusEnumAll.ToPointer(),
            },
            Comments: sdk.String("quibusdam"),
            Email: sdk.String("Dillan_Deckow@gmail.com"),
            ID: sdk.String("quos"),
            Kind: sdk.String("perferendis"),
            Locale: sdk.String("magni"),
            Name: sdk.String("Vernon Abshire"),
            SiteFilter: &shared.ObjectFilter{
                Kind: sdk.String("excepturi"),
                ObjectIds: []string{
                    "facilis",
                    "tempore",
                },
                Status: shared.ObjectFilterStatusEnumNone.ToPointer(),
            },
            SubaccountID: sdk.String("delectus"),
            TraffickerType: shared.AccountUserProfileTraffickerTypeEnumInternalTrafficker.ToPointer(),
            UserAccessType: shared.AccountUserProfileUserAccessTypeEnumNormalUser.ToPointer(),
            UserRoleFilter: &shared.ObjectFilter{
                Kind: sdk.String("eligendi"),
                ObjectIds: []string{
                    "aliquid",
                    "provident",
                    "necessitatibus",
                },
                Status: shared.ObjectFilterStatusEnumAssigned.ToPointer(),
            },
            UserRoleID: sdk.String("officia"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illum",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DfareportingAccountUserProfilesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountUserProfile != nil {
        // handle response
    }
}
```

## DfareportingAccountUserProfilesList

Retrieves a list of account user profiles, possibly filtered. This method supports paging.

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
    res, err := s.AccountUserProfiles.DfareportingAccountUserProfilesList(ctx, operations.DfareportingAccountUserProfilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Active: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("aliquid"),
        Ids: []string{
            "accusamus",
            "non",
            "occaecati",
        },
        Key: sdk.String("enim"),
        MaxResults: sdk.Int64(881736),
        OauthToken: sdk.String("delectus"),
        PageToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "provident",
        QuotaUser: sdk.String("nam"),
        SearchString: sdk.String("id"),
        SortField: operations.DfareportingAccountUserProfilesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingAccountUserProfilesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("sapiente"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
        UserRoleID: sdk.String("nisi"),
    }, operations.DfareportingAccountUserProfilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountUserProfilesListResponse != nil {
        // handle response
    }
}
```

## DfareportingAccountUserProfilesPatch

Updates an existing account user profile. This method supports patch semantics.

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
    res, err := s.AccountUserProfiles.DfareportingAccountUserProfilesPatch(ctx, operations.DfareportingAccountUserProfilesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccountUserProfile: &shared.AccountUserProfile{
            AccountID: sdk.String("natus"),
            Active: sdk.Bool(false),
            AdvertiserFilter: &shared.ObjectFilter{
                Kind: sdk.String("omnis"),
                ObjectIds: []string{
                    "perferendis",
                    "nihil",
                },
                Status: shared.ObjectFilterStatusEnumNone.ToPointer(),
            },
            CampaignFilter: &shared.ObjectFilter{
                Kind: sdk.String("distinctio"),
                ObjectIds: []string{
                    "labore",
                    "labore",
                    "suscipit",
                },
                Status: shared.ObjectFilterStatusEnumAssigned.ToPointer(),
            },
            Comments: sdk.String("nobis"),
            Email: sdk.String("Shaina29@yahoo.com"),
            ID: sdk.String("et"),
            Kind: sdk.String("excepturi"),
            Locale: sdk.String("ullam"),
            Name: sdk.String("Miss Julian Marvin"),
            SiteFilter: &shared.ObjectFilter{
                Kind: sdk.String("mollitia"),
                ObjectIds: []string{
                    "eum",
                    "dolor",
                },
                Status: shared.ObjectFilterStatusEnumAll.ToPointer(),
            },
            SubaccountID: sdk.String("odit"),
            TraffickerType: shared.AccountUserProfileTraffickerTypeEnumInternalTrafficker.ToPointer(),
            UserAccessType: shared.AccountUserProfileUserAccessTypeEnumNormalUser.ToPointer(),
            UserRoleFilter: &shared.ObjectFilter{
                Kind: sdk.String("iure"),
                ObjectIds: []string{
                    "debitis",
                    "eius",
                    "maxime",
                    "deleniti",
                },
                Status: shared.ObjectFilterStatusEnumAll.ToPointer(),
            },
            UserRoleID: sdk.String("in"),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("ullam"),
        ID: "b7fd2ed0-2892-41cd-9c69-2601fb576b0d",
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "perferendis",
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("aut"),
    }, operations.DfareportingAccountUserProfilesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountUserProfile != nil {
        // handle response
    }
}
```

## DfareportingAccountUserProfilesUpdate

Updates an existing account user profile.

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
    res, err := s.AccountUserProfiles.DfareportingAccountUserProfilesUpdate(ctx, operations.DfareportingAccountUserProfilesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountUserProfile: &shared.AccountUserProfile{
            AccountID: sdk.String("corporis"),
            Active: sdk.Bool(false),
            AdvertiserFilter: &shared.ObjectFilter{
                Kind: sdk.String("hic"),
                ObjectIds: []string{
                    "nobis",
                    "dolores",
                    "quis",
                },
                Status: shared.ObjectFilterStatusEnumAssigned.ToPointer(),
            },
            CampaignFilter: &shared.ObjectFilter{
                Kind: sdk.String("dignissimos"),
                ObjectIds: []string{
                    "quis",
                },
                Status: shared.ObjectFilterStatusEnumNone.ToPointer(),
            },
            Comments: sdk.String("eos"),
            Email: sdk.String("Cecilia.Schimmel@gmail.com"),
            ID: sdk.String("vero"),
            Kind: sdk.String("nostrum"),
            Locale: sdk.String("hic"),
            Name: sdk.String("Alejandro Purdy DDS"),
            SiteFilter: &shared.ObjectFilter{
                Kind: sdk.String("consequuntur"),
                ObjectIds: []string{
                    "error",
                    "eaque",
                    "occaecati",
                },
                Status: shared.ObjectFilterStatusEnumAll.ToPointer(),
            },
            SubaccountID: sdk.String("adipisci"),
            TraffickerType: shared.AccountUserProfileTraffickerTypeEnumExternalTrafficker.ToPointer(),
            UserAccessType: shared.AccountUserProfileUserAccessTypeEnumReadOnlySuperUser.ToPointer(),
            UserRoleFilter: &shared.ObjectFilter{
                Kind: sdk.String("modi"),
                ObjectIds: []string{
                    "dolorum",
                    "deleniti",
                    "pariatur",
                },
                Status: shared.ObjectFilterStatusEnumAssigned.ToPointer(),
            },
            UserRoleID: sdk.String("nobis"),
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("quos"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolorem",
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.DfareportingAccountUserProfilesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountUserProfile != nil {
        // handle response
    }
}
```
