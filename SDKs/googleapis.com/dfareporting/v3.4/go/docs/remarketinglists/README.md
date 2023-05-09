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
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("debitis"),
        ID: "c8688fd8-ec6f-4c03-928f-0aaaeee004eb",
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "soluta",
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("voluptate"),
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
            AccountID: sdk.String("explicabo"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("harum"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eveniet"),
                Etag: sdk.String("quis"),
                ID: sdk.String("09c50871-31f0-46f0-bce5-5a8687143c97"),
                Kind: sdk.String("iste"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ullam"),
            },
            Description: sdk.String("hic"),
            ID: sdk.String("asperiores"),
            Kind: sdk.String("ducimus"),
            LifeSpan: sdk.String("sint"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("odio"),
                FloodlightActivityName: sdk.String("animi"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("vel"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("non"),
                                VariableFriendlyName: sdk.String("nobis"),
                                VariableName: sdk.String("in"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("reprehenderit"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("voluptatum"),
                                VariableFriendlyName: sdk.String("mollitia"),
                                VariableName: sdk.String("nihil"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("distinctio"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("culpa"),
                                VariableFriendlyName: sdk.String("culpa"),
                                VariableName: sdk.String("odit"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("dolor"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("libero"),
                                VariableFriendlyName: sdk.String("libero"),
                                VariableName: sdk.String("eum"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("laboriosam"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("illum"),
                                VariableFriendlyName: sdk.String("odit"),
                                VariableName: sdk.String("dolorum"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThan.ToPointer(),
                                RemarketingListID: sdk.String("veritatis"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("molestias"),
                                VariableFriendlyName: sdk.String("distinctio"),
                                VariableName: sdk.String("veritatis"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("tempora"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceDbm.ToPointer(),
            Name: sdk.String("Tyler Pfeffer"),
            SubaccountID: sdk.String("quo"),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ratione",
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("unde"),
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
        AccessToken: sdk.String("veniam"),
        Active: sdk.Bool(false),
        AdvertiserID: "at",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("inventore"),
        FloodlightActivityID: sdk.String("laborum"),
        Key: sdk.String("cumque"),
        MaxResults: sdk.Int64(832025),
        Name: sdk.String("Jane Nienow"),
        OauthToken: sdk.String("excepturi"),
        PageToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ab",
        QuotaUser: sdk.String("rerum"),
        SortField: operations.DfareportingRemarketingListsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingRemarketingListsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("repudiandae"),
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
            AdvertiserID: sdk.String("magni"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("repudiandae"),
                Etag: sdk.String("sunt"),
                ID: sdk.String("c2dbe23d-58e8-4247-9122-c9f67678fa27"),
                Kind: sdk.String("occaecati"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("atque"),
            },
            Description: sdk.String("sequi"),
            ID: sdk.String("commodi"),
            Kind: sdk.String("quam"),
            LifeSpan: sdk.String("dolor"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("voluptas"),
                FloodlightActivityName: sdk.String("dolor"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumEquals.ToPointer(),
                                RemarketingListID: sdk.String("iusto"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("doloremque"),
                                VariableFriendlyName: sdk.String("natus"),
                                VariableName: sdk.String("ea"),
                            },
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
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringContains.ToPointer(),
                                RemarketingListID: sdk.String("vel"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("explicabo"),
                                VariableFriendlyName: sdk.String("natus"),
                                VariableName: sdk.String("in"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("hic"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceDfa.ToPointer(),
            Name: sdk.String("Juan Wiegand"),
            SubaccountID: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("pariatur"),
        ID: "80108807-6ff5-4f6e-9298-14088269b6a7",
        Key: sdk.String("alias"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "perferendis",
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("quos"),
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
            AccountID: sdk.String("earum"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("excepturi"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("numquam"),
                Etag: sdk.String("hic"),
                ID: sdk.String("ffbd1e1e-21dd-4c69-838b-1d187b51eb5f"),
                Kind: sdk.String("possimus"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("alias"),
            },
            Description: sdk.String("tempore"),
            ID: sdk.String("tenetur"),
            Kind: sdk.String("earum"),
            LifeSpan: sdk.String("eaque"),
            ListPopulationRule: &shared.ListPopulationRule{
                FloodlightActivityID: sdk.String("non"),
                FloodlightActivityName: sdk.String("eius"),
                ListPopulationClauses: []shared.ListPopulationClause{
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumStringEquals.ToPointer(),
                                RemarketingListID: sdk.String("sapiente"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("eaque"),
                                VariableFriendlyName: sdk.String("sed"),
                                VariableName: sdk.String("exercitationem"),
                            },
                        },
                    },
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
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
                    shared.ListPopulationClause{
                        Terms: []shared.ListPopulationTerm{
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumLessThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("cum"),
                                Type: shared.ListPopulationTermTypeEnumReferrerTerm.ToPointer(),
                                Value: sdk.String("cupiditate"),
                                VariableFriendlyName: sdk.String("cupiditate"),
                                VariableName: sdk.String("quasi"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("maiores"),
                                Type: shared.ListPopulationTermTypeEnumListMembershipTerm.ToPointer(),
                                Value: sdk.String("totam"),
                                VariableFriendlyName: sdk.String("accusamus"),
                                VariableName: sdk.String("eius"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThan.ToPointer(),
                                RemarketingListID: sdk.String("unde"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("facilis"),
                                VariableFriendlyName: sdk.String("cupiditate"),
                                VariableName: sdk.String("nihil"),
                            },
                            shared.ListPopulationTerm{
                                Contains: sdk.Bool(false),
                                Negation: sdk.Bool(false),
                                Operator: shared.ListPopulationTermOperatorEnumNumGreaterThanEqual.ToPointer(),
                                RemarketingListID: sdk.String("officia"),
                                Type: shared.ListPopulationTermTypeEnumCustomVariableTerm.ToPointer(),
                                Value: sdk.String("beatae"),
                                VariableFriendlyName: sdk.String("sequi"),
                                VariableName: sdk.String("vero"),
                            },
                        },
                    },
                },
            },
            ListSize: sdk.String("laboriosam"),
            ListSource: shared.RemarketingListListSourceEnumRemarketingListSourceDbm.ToPointer(),
            Name: sdk.String("Mrs. Edmund Mertz"),
            SubaccountID: sdk.String("nesciunt"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("iure"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quae",
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("molestias"),
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
