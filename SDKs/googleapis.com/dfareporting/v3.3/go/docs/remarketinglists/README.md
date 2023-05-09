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
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("eos"),
        ID: "6f862853-fe28-459c-a322-231fe6664c41",
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "maiores",
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("ad"),
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
            AccountID: sdk.String("rerum"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("culpa"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sit"),
                Etag: sdk.String("eum"),
                ID: sdk.String("9b8d291b-eb81-40a2-aa87-49479edd4fcf"),
                Kind: sdk.String("ducimus"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("corporis"),
            },
            Description: sdk.String("eaque"),
            ID: sdk.String("optio"),
            Kind: sdk.String("repellat"),
            LifeSpan: sdk.String("blanditiis"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("molestiae"),
                FloodlightActivityName: sdk.String("a"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("dolor"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("fugit"),
                                VariableFriendlyName: sdk.String("esse"),
                                VariableName: sdk.String("illo"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("reprehenderit"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("culpa"),
                                VariableFriendlyName: sdk.String("qui"),
                                VariableName: sdk.String("dolore"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("incidunt"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("porro"),
                                VariableFriendlyName: sdk.String("deleniti"),
                                VariableName: sdk.String("maiores"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("doloremque"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceGa.ToPointer(),
            Name: sdk.String("Mr. Timmy Wilderman"),
            SubaccountID: sdk.String("architecto"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "occaecati",
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("optio"),
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
        AccessToken: sdk.String("recusandae"),
        Active: sdk.Bool(false),
        AdvertiserID: "odit",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("eveniet"),
        FloodlightActivityID: sdk.String("aut"),
        Key: sdk.String("similique"),
        MaxResults: sdk.Int64(216467),
        Name: sdk.String("Saul Grimes"),
        OauthToken: sdk.String("sint"),
        PageToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "soluta",
        QuotaUser: sdk.String("fugiat"),
        SortField: operations.DfareportingRemarketingListsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingRemarketingListsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("corrupti"),
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
            AccountID: sdk.String("autem"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("alias"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eaque"),
                Etag: sdk.String("minus"),
                ID: sdk.String("61c78342-73ca-4a91-98b3-8f1b61a331a5"),
                Kind: sdk.String("modi"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("cumque"),
            },
            Description: sdk.String("ab"),
            ID: sdk.String("voluptatem"),
            Kind: sdk.String("magni"),
            LifeSpan: sdk.String("iste"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("modi"),
                FloodlightActivityName: sdk.String("reiciendis"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("debitis"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("omnis"),
                                VariableFriendlyName: sdk.String("nesciunt"),
                                VariableName: sdk.String("perspiciatis"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("quas"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("dignissimos"),
                                VariableFriendlyName: sdk.String("et"),
                                VariableName: sdk.String("eveniet"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("provident"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("aspernatur"),
                                VariableFriendlyName: sdk.String("placeat"),
                                VariableName: sdk.String("magni"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("repudiandae"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("inventore"),
                                VariableFriendlyName: sdk.String("quia"),
                                VariableName: sdk.String("odit"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("cumque"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("id"),
                                VariableFriendlyName: sdk.String("assumenda"),
                                VariableName: sdk.String("optio"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("dolore"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("nulla"),
                                VariableFriendlyName: sdk.String("explicabo"),
                                VariableName: sdk.String("numquam"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("expedita"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("beatae"),
                                VariableFriendlyName: sdk.String("illo"),
                                VariableName: sdk.String("itaque"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("officia"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceXfp.ToPointer(),
            Name: sdk.String("Mrs. Nicholas Leannon"),
            SubaccountID: sdk.String("eligendi"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("sed"),
        ID: "f0f5b9d3-cb11-4a76-87d3-100e8e2b9b0d",
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nisi",
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("dolorum"),
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
            AccountID: sdk.String("quisquam"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("molestiae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("fugiat"),
                Etag: sdk.String("ab"),
                ID: sdk.String("ea0e79fa-9bbe-45f1-b9f6-50b1e707e7e4"),
                Kind: sdk.String("neque"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ea"),
            },
            Description: sdk.String("odio"),
            ID: sdk.String("sunt"),
            Kind: sdk.String("non"),
            LifeSpan: sdk.String("soluta"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("similique"),
                FloodlightActivityName: sdk.String("quo"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("reprehenderit"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("similique"),
                                VariableFriendlyName: sdk.String("expedita"),
                                VariableName: sdk.String("quibusdam"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("et"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("dicta"),
                                VariableFriendlyName: sdk.String("rem"),
                                VariableName: sdk.String("facere"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("reprehenderit"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("maxime"),
                                VariableFriendlyName: sdk.String("vitae"),
                                VariableName: sdk.String("alias"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("vitae"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("ipsam"),
                                VariableFriendlyName: sdk.String("ab"),
                                VariableName: sdk.String("aliquid"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("in"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("rerum"),
                                VariableFriendlyName: sdk.String("repudiandae"),
                                VariableName: sdk.String("fugit"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("fugit"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("quia"),
                                VariableFriendlyName: sdk.String("esse"),
                                VariableName: sdk.String("sed"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("odit"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("doloribus"),
                                VariableFriendlyName: sdk.String("officia"),
                                VariableName: sdk.String("ullam"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("ratione"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("vel"),
                                VariableFriendlyName: sdk.String("aspernatur"),
                                VariableName: sdk.String("blanditiis"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("debitis"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("aspernatur"),
                                VariableFriendlyName: sdk.String("nam"),
                                VariableName: sdk.String("neque"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("autem"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("ipsa"),
                                VariableFriendlyName: sdk.String("qui"),
                                VariableName: sdk.String("labore"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("minima"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("voluptatibus"),
                                VariableFriendlyName: sdk.String("sint"),
                                VariableName: sdk.String("libero"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("laboriosam"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("repellat"),
                                VariableFriendlyName: sdk.String("iure"),
                                VariableName: sdk.String("aspernatur"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("ad"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("voluptatum"),
                                VariableFriendlyName: sdk.String("molestiae"),
                                VariableName: sdk.String("sunt"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("at"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceYoutube.ToPointer(),
            Name: sdk.String("Archie Hirthe MD"),
            SubaccountID: sdk.String("ducimus"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("illo"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nam",
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("optio"),
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
