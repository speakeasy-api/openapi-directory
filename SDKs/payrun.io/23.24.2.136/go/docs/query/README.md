# Query

### Available Operations

* [GetQueryResponse](#getqueryresponse) - Get the query result

## GetQueryResponse

Get the results for the specified query

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
    res, err := s.Query.GetQueryResponse(ctx, operations.GetQueryResponseRequest{
        APIVersion: "labore",
        Authorization: "numquam",
        Query: shared.Query{
            Query: &shared.QueryQuery{
                Encoding: sdk.String("repudiandae"),
                ExcludeNullOrEmptyElements: sdk.Bool(false),
                Groups: &shared.QueryQueryGroup{
                    Group: []shared.QueryQueryGroupGroup{
                        shared.QueryQueryGroupGroup{
                            AtGroupName: sdk.String("in"),
                            AtItemName: sdk.String("explicabo"),
                            AtLoopExpression: sdk.String("accusamus"),
                            AtPredicate: sdk.String("rem"),
                            AtSelector: sdk.String("aperiam"),
                            AtUniqueKeyVariable: sdk.String("odit"),
                            Condition: []shared.QueryQueryGroupGroupCondition{
                                shared.QueryQueryGroupGroupCondition{
                                    AtValueA: sdk.String("enim"),
                                    AtValueB: sdk.String("voluptate"),
                                },
                                shared.QueryQueryGroupGroupCondition{
                                    AtValueA: sdk.String("similique"),
                                    AtValueB: sdk.String("minima"),
                                },
                                shared.QueryQueryGroupGroupCondition{
                                    AtValueA: sdk.String("libero"),
                                    AtValueB: sdk.String("magnam"),
                                },
                            },
                            Filter: []shared.QueryQueryGroupGroupFilter{
                                shared.QueryQueryGroupGroupFilter{
                                    AtIsOr: sdk.Bool(false),
                                    AtProperty: sdk.String("modi"),
                                    AtValue: sdk.String("eum"),
                                },
                            },
                            Order: []shared.QueryQueryGroupGroupOrder{
                                shared.QueryQueryGroupGroupOrder{
                                    AtProperty: sdk.String("mollitia"),
                                },
                            },
                            Output: []shared.QueryQueryGroupGroupOutput{
                                shared.QueryQueryGroupGroupOutput{
                                    AtMaxLength: sdk.String("fugiat"),
                                    AtOutput: shared.QueryQueryGroupGroupOutputAtOutputEnumVariable.ToPointer(),
                                },
                                shared.QueryQueryGroupGroupOutput{
                                    AtMaxLength: sdk.String("molestiae"),
                                    AtOutput: shared.QueryQueryGroupGroupOutputAtOutputEnumVariable.ToPointer(),
                                },
                            },
                        },
                        shared.QueryQueryGroupGroup{
                            AtGroupName: sdk.String("reiciendis"),
                            AtItemName: sdk.String("ab"),
                            AtLoopExpression: sdk.String("modi"),
                            AtPredicate: sdk.String("aut"),
                            AtSelector: sdk.String("aut"),
                            AtUniqueKeyVariable: sdk.String("eveniet"),
                            Condition: []shared.QueryQueryGroupGroupCondition{
                                shared.QueryQueryGroupGroupCondition{
                                    AtValueA: sdk.String("commodi"),
                                    AtValueB: sdk.String("numquam"),
                                },
                                shared.QueryQueryGroupGroupCondition{
                                    AtValueA: sdk.String("dolorum"),
                                    AtValueB: sdk.String("possimus"),
                                },
                            },
                            Filter: []shared.QueryQueryGroupGroupFilter{
                                shared.QueryQueryGroupGroupFilter{
                                    AtIsOr: sdk.Bool(false),
                                    AtProperty: sdk.String("consectetur"),
                                    AtValue: sdk.String("nesciunt"),
                                },
                                shared.QueryQueryGroupGroupFilter{
                                    AtIsOr: sdk.Bool(false),
                                    AtProperty: sdk.String("quaerat"),
                                    AtValue: sdk.String("itaque"),
                                },
                            },
                            Order: []shared.QueryQueryGroupGroupOrder{
                                shared.QueryQueryGroupGroupOrder{
                                    AtProperty: sdk.String("sunt"),
                                },
                                shared.QueryQueryGroupGroupOrder{
                                    AtProperty: sdk.String("distinctio"),
                                },
                                shared.QueryQueryGroupGroupOrder{
                                    AtProperty: sdk.String("iusto"),
                                },
                                shared.QueryQueryGroupGroupOrder{
                                    AtProperty: sdk.String("quas"),
                                },
                            },
                            Output: []shared.QueryQueryGroupGroupOutput{
                                shared.QueryQueryGroupGroupOutput{
                                    AtMaxLength: sdk.String("facilis"),
                                    AtOutput: shared.QueryQueryGroupGroupOutputAtOutputEnumAttribute.ToPointer(),
                                },
                            },
                        },
                    },
                },
                RootNodeName: sdk.String("autem"),
                SuppressMetricAttributes: sdk.Bool(false),
                Variables: &shared.QueryQueryVariable{
                    Variable: []shared.QueryQueryVariableVariable{
                        shared.QueryQueryVariableVariable{
                            AtName: sdk.String("alias"),
                            AtValue: sdk.String("rem"),
                        },
                        shared.QueryQueryVariableVariable{
                            AtName: sdk.String("aut"),
                            AtValue: sdk.String("quos"),
                        },
                        shared.QueryQueryVariableVariable{
                            AtName: sdk.String("laudantium"),
                            AtValue: sdk.String("repellendus"),
                        },
                    },
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryResponse200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```
