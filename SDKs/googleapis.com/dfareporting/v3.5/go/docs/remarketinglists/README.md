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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("velit"),
        ID: "1f9b14aa-6bde-4c7f-8442-32e9a5dee1ac",
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sed",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("cupiditate"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemarketingList: &shared.RemarketingList{
            AccountID: sdk.String("voluptatum"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("ab"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("rerum"),
                Etag: sdk.String("quis"),
                ID: sdk.String("8fe682e1-c2db-4e23-958e-8247d122c9f6"),
                Kind: sdk.String("iusto"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nihil"),
            },
            Description: sdk.String("praesentium"),
            ID: sdk.String("maiores"),
            Kind: sdk.String("id"),
            LifeSpan: sdk.String("dolores"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("ducimus"),
                FloodlightActivityName: sdk.String("occaecati"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("commodi"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("dolor"),
                                VariableFriendlyName: sdk.String("voluptas"),
                                VariableName: sdk.String("dolor"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("est"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("iusto"),
                                VariableFriendlyName: sdk.String("excepturi"),
                                VariableName: sdk.String("doloremque"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("ea"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("deserunt"),
                                VariableFriendlyName: sdk.String("officiis"),
                                VariableName: sdk.String("nam"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("labore"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("consequatur"),
                                VariableFriendlyName: sdk.String("reprehenderit"),
                                VariableName: sdk.String("adipisci"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("illum"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("voluptatibus"),
                                VariableFriendlyName: sdk.String("quos"),
                                VariableName: sdk.String("rerum"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("unde"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("omnis"),
                                VariableFriendlyName: sdk.String("quo"),
                                VariableName: sdk.String("mollitia"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("nisi"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceOther.ToPointer(),
            Name: sdk.String("Roberta Johnson"),
            SubaccountID: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("cum"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iusto",
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("corporis"),
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
        AccessToken: sdk.String("explicabo"),
        Active: sdk.Bool(false),
        AdvertiserID: "assumenda",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("fuga"),
        FloodlightActivityID: sdk.String("ipsum"),
        Key: sdk.String("sit"),
        MaxResults: sdk.Int64(445111),
        Name: sdk.String("Janis Kautzer"),
        OauthToken: sdk.String("natus"),
        PageToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "hic",
        QuotaUser: sdk.String("nemo"),
        SortField: operations.DfareportingRemarketingListsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingRemarketingListsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("officia"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemarketingList: &shared.RemarketingList{
            AccountID: sdk.String("mollitia"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("dolorum"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("deserunt"),
                Etag: sdk.String("odio"),
                ID: sdk.String("d8010880-76ff-45f6-ad29-814088269b6a"),
                Kind: sdk.String("esse"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("libero"),
            },
            Description: sdk.String("perferendis"),
            ID: sdk.String("possimus"),
            Kind: sdk.String("temporibus"),
            LifeSpan: sdk.String("quos"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("consequuntur"),
                FloodlightActivityName: sdk.String("earum"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("repellat"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("quidem"),
                                VariableFriendlyName: sdk.String("quibusdam"),
                                VariableName: sdk.String("et"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("vitae"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("dolores"),
                                VariableFriendlyName: sdk.String("illo"),
                                VariableName: sdk.String("nulla"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("commodi"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("doloremque"),
                                VariableFriendlyName: sdk.String("sequi"),
                                VariableName: sdk.String("deleniti"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("dicta"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("inventore"),
                                VariableFriendlyName: sdk.String("praesentium"),
                                VariableName: sdk.String("nihil"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("enim"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("accusamus"),
                                VariableFriendlyName: sdk.String("tempore"),
                                VariableName: sdk.String("enim"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("possimus"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("alias"),
                                VariableFriendlyName: sdk.String("tempore"),
                                VariableName: sdk.String("tenetur"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("non"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("cupiditate"),
                                VariableFriendlyName: sdk.String("sit"),
                                VariableName: sdk.String("minus"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("odit"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("sed"),
                                VariableFriendlyName: sdk.String("exercitationem"),
                                VariableName: sdk.String("aliquam"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("omnis"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("unde"),
                                VariableFriendlyName: sdk.String("consequatur"),
                                VariableName: sdk.String("quaerat"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("maxime"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("numquam"),
                                VariableFriendlyName: sdk.String("voluptas"),
                                VariableName: sdk.String("aspernatur"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("possimus"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceDfa.ToPointer(),
            Name: sdk.String("Kim McGlynn IV"),
            SubaccountID: sdk.String("maiores"),
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("eius"),
        ID: "792b979a-413d-46a8-8916-83bd861d0d98",
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repellat",
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("excepturi"),
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
            AccountID: sdk.String("totam"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("ex"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("beatae"),
                ID: sdk.String("86ed76c0-02fa-4cb1-bac2-4c8143b866c5"),
                Kind: sdk.String("iusto"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("officia"),
            },
            Description: sdk.String("ab"),
            ID: sdk.String("recusandae"),
            Kind: sdk.String("quia"),
            LifeSpan: sdk.String("iure"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("ex"),
                FloodlightActivityName: sdk.String("quos"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("quidem"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("dolorem"),
                                VariableFriendlyName: sdk.String("ducimus"),
                                VariableName: sdk.String("harum"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("corrupti"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("nam"),
                                VariableFriendlyName: sdk.String("quod"),
                                VariableName: sdk.String("dolore"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("atque"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceGplus.ToPointer(),
            Name: sdk.String("Cedric Koch"),
            SubaccountID: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("quis"),
        Key: sdk.String("illo"),
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nemo",
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("aperiam"),
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
