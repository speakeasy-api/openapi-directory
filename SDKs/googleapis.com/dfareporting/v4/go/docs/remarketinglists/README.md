# RemarketingLists

### Available Operations

* [DfareportingRemarketingListsGet](#dfareportingremarketinglistsget) - Gets one remarketing list by ID.
* [DfareportingRemarketingListsInsert](#dfareportingremarketinglistsinsert) - Inserts a new remarketing list.
* [DfareportingRemarketingListsList](#dfareportingremarketinglistslist) - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* [DfareportingRemarketingListsPatch](#dfareportingremarketinglistspatch) - Updates an existing remarketing list. This method supports patch semantics.
* [DfareportingRemarketingListsUpdate](#dfareportingremarketinglistsupdate) - Updates an existing remarketing list.

## DfareportingRemarketingListsGet

Gets one remarketing list by ID.

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
    res, err := s.RemarketingLists.DfareportingRemarketingListsGet(ctx, operations.DfareportingRemarketingListsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("reprehenderit"),
        ID: "f444232e-9a5d-4ee1-acd7-2a89981b58fe",
        Key: sdk.String("ex"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magni",
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.DfareportingRemarketingListsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingList != nil {
        // handle response
    }
}
```

## DfareportingRemarketingListsInsert

Inserts a new remarketing list.

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
    res, err := s.RemarketingLists.DfareportingRemarketingListsInsert(ctx, operations.DfareportingRemarketingListsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemarketingList: &shared.RemarketingList{
            AccountID: sdk.String("illum"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("facilis"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("necessitatibus"),
                Etag: sdk.String("sed"),
                ID: sdk.String("3d58e824-7d12-42c9-b676-78fa27958367"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("dolor"),
            },
            Description: sdk.String("facere"),
            ID: sdk.String("est"),
            Kind: sdk.String("aut"),
            LifeSpan: sdk.String("iusto"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("excepturi"),
                FloodlightActivityName: sdk.String("doloremque"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("deserunt"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("nam"),
                                VariableFriendlyName: sdk.String("totam"),
                                VariableName: sdk.String("ex"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("atque"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("reprehenderit"),
                                VariableFriendlyName: sdk.String("adipisci"),
                                VariableName: sdk.String("voluptatem"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("voluptatibus"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("rerum"),
                                VariableFriendlyName: sdk.String("rem"),
                                VariableName: sdk.String("unde"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("omnis"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("mollitia"),
                                VariableFriendlyName: sdk.String("nisi"),
                                VariableName: sdk.String("alias"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("ipsam"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("minima"),
                                VariableFriendlyName: sdk.String("suscipit"),
                                VariableName: sdk.String("voluptatibus"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("alias"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("cum"),
                                VariableFriendlyName: sdk.String("earum"),
                                VariableName: sdk.String("ex"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("veniam"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("debitis"),
                                VariableFriendlyName: sdk.String("explicabo"),
                                VariableName: sdk.String("assumenda"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("autem"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("ipsum"),
                                VariableFriendlyName: sdk.String("sit"),
                                VariableName: sdk.String("in"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("aut"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceDmp.ToPointer(),
            Name: sdk.String("Sonja Christiansen"),
            SubaccountID: sdk.String("hic"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("a"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "mollitia",
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DfareportingRemarketingListsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingList != nil {
        // handle response
    }
}
```

## DfareportingRemarketingListsList

Retrieves a list of remarketing lists, possibly filtered. This method supports paging.

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
    res, err := s.RemarketingLists.DfareportingRemarketingListsList(ctx, operations.DfareportingRemarketingListsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Active: sdk.Bool(false),
        AdvertiserID: "consequatur",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("blanditiis"),
        FloodlightActivityID: sdk.String("rem"),
        Key: sdk.String("eaque"),
        MaxResults: sdk.Int64(466015),
        Name: sdk.String("Tabitha Wintheiser"),
        OauthToken: sdk.String("laboriosam"),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "temporibus",
        QuotaUser: sdk.String("quia"),
        SortField: operations.DfareportingRemarketingListsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingRemarketingListsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.DfareportingRemarketingListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingListsListResponse != nil {
        // handle response
    }
}
```

## DfareportingRemarketingListsPatch

Updates an existing remarketing list. This method supports patch semantics.

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
    res, err := s.RemarketingLists.DfareportingRemarketingListsPatch(ctx, operations.DfareportingRemarketingListsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemarketingList: &shared.RemarketingList{
            AccountID: sdk.String("quos"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("voluptatum"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("explicabo"),
                Etag: sdk.String("aliquid"),
                ID: sdk.String("9b6a70b0-dd82-4f94-bffb-d1e1e21ddc69"),
                Kind: sdk.String("doloremque"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("deleniti"),
            },
            Description: sdk.String("quidem"),
            ID: sdk.String("dicta"),
            Kind: sdk.String("quibusdam"),
            LifeSpan: sdk.String("inventore"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("praesentium"),
                FloodlightActivityName: sdk.String("nihil"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("accusamus"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("enim"),
                                VariableFriendlyName: sdk.String("doloribus"),
                                VariableName: sdk.String("possimus"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("alias"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("tenetur"),
                                VariableFriendlyName: sdk.String("earum"),
                                VariableName: sdk.String("eaque"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("cupiditate"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("minus"),
                                VariableFriendlyName: sdk.String("sapiente"),
                                VariableName: sdk.String("odit"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("exercitationem"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("id"),
                                VariableFriendlyName: sdk.String("omnis"),
                                VariableName: sdk.String("ad"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("unde"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceOther.ToPointer(),
            Name: sdk.String("Josephine Schneider"),
            SubaccountID: sdk.String("voluptas"),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cum"),
        ID: "c9917f98-e479-42b9-b9a4-13d6a8c91683",
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rem",
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("illum"),
    }, operations.DfareportingRemarketingListsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingList != nil {
        // handle response
    }
}
```

## DfareportingRemarketingListsUpdate

Updates an existing remarketing list.

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
    res, err := s.RemarketingLists.DfareportingRemarketingListsUpdate(ctx, operations.DfareportingRemarketingListsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemarketingList: &shared.RemarketingList{
            AccountID: sdk.String("quibusdam"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("natus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("molestias"),
                Etag: sdk.String("quod"),
                ID: sdk.String("cf89d386-1186-4ed7-ac00-2facb13ac24c"),
                Kind: sdk.String("quas"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("quaerat"),
            },
            Description: sdk.String("sequi"),
            ID: sdk.String("quidem"),
            Kind: sdk.String("corrupti"),
            LifeSpan: sdk.String("voluptas"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("suscipit"),
                FloodlightActivityName: sdk.String("optio"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("officia"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("recusandae"),
                                VariableFriendlyName: sdk.String("quia"),
                                VariableName: sdk.String("iure"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("quos"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("ratione"),
                                VariableFriendlyName: sdk.String("accusantium"),
                                VariableName: sdk.String("quidem"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("ducimus"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("sit"),
                                VariableFriendlyName: sdk.String("recusandae"),
                                VariableName: sdk.String("corrupti"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("nam"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("dolore"),
                                VariableFriendlyName: sdk.String("atque"),
                                VariableName: sdk.String("facere"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("quo"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("officiis"),
                                VariableFriendlyName: sdk.String("voluptas"),
                                VariableName: sdk.String("excepturi"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("ipsam"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("quis"),
                                VariableFriendlyName: sdk.String("illo"),
                                VariableName: sdk.String("sit"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("nemo"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceOther.ToPointer(),
            Name: sdk.String("Sarah Cartwright"),
            SubaccountID: sdk.String("porro"),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sed",
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("eius"),
    }, operations.DfareportingRemarketingListsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingList != nil {
        // handle response
    }
}
```
