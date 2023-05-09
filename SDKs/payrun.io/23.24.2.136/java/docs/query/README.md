# query

### Available Operations

* [getQueryResponse](#getqueryresponse) - Get the query result

## getQueryResponse

Get the results for the specified query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryResponseRequest;
import org.openapis.openapi.models.operations.GetQueryResponseResponse;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryQuery;
import org.openapis.openapi.models.shared.QueryQueryGroup;
import org.openapis.openapi.models.shared.QueryQueryGroupGroup;
import org.openapis.openapi.models.shared.QueryQueryGroupGroupCondition;
import org.openapis.openapi.models.shared.QueryQueryGroupGroupFilter;
import org.openapis.openapi.models.shared.QueryQueryGroupGroupOrder;
import org.openapis.openapi.models.shared.QueryQueryGroupGroupOutput;
import org.openapis.openapi.models.shared.QueryQueryGroupGroupOutputAtOutputEnum;
import org.openapis.openapi.models.shared.QueryQueryVariable;
import org.openapis.openapi.models.shared.QueryQueryVariableVariable;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQueryResponseRequest req = new GetQueryResponseRequest("labore", "numquam",                 new Query() {{
                                query = new QueryQuery() {{
                                    encoding = "repudiandae";
                                    excludeNullOrEmptyElements = false;
                                    groups = new QueryQueryGroup() {{
                                        group = new org.openapis.openapi.models.shared.QueryQueryGroupGroup[]{{
                                            add(new QueryQueryGroupGroup() {{
                                                atGroupName = "in";
                                                atItemName = "explicabo";
                                                atLoopExpression = "accusamus";
                                                atPredicate = "rem";
                                                atSelector = "aperiam";
                                                atUniqueKeyVariable = "odit";
                                                condition = new org.openapis.openapi.models.shared.QueryQueryGroupGroupCondition[]{{
                                                    add(new QueryQueryGroupGroupCondition() {{
                                                        atValueA = "enim";
                                                        atValueB = "voluptate";
                                                    }}),
                                                    add(new QueryQueryGroupGroupCondition() {{
                                                        atValueA = "similique";
                                                        atValueB = "minima";
                                                    }}),
                                                    add(new QueryQueryGroupGroupCondition() {{
                                                        atValueA = "libero";
                                                        atValueB = "magnam";
                                                    }}),
                                                }};
                                                filter = new org.openapis.openapi.models.shared.QueryQueryGroupGroupFilter[]{{
                                                    add(new QueryQueryGroupGroupFilter() {{
                                                        atIsOr = false;
                                                        atProperty = "modi";
                                                        atValue = "eum";
                                                    }}),
                                                }};
                                                order = new org.openapis.openapi.models.shared.QueryQueryGroupGroupOrder[]{{
                                                    add(new QueryQueryGroupGroupOrder() {{
                                                        atProperty = "mollitia";
                                                    }}),
                                                }};
                                                output = new org.openapis.openapi.models.shared.QueryQueryGroupGroupOutput[]{{
                                                    add(new QueryQueryGroupGroupOutput() {{
                                                        atMaxLength = "fugiat";
                                                        atOutput = QueryQueryGroupGroupOutputAtOutputEnum.VARIABLE;
                                                    }}),
                                                    add(new QueryQueryGroupGroupOutput() {{
                                                        atMaxLength = "molestiae";
                                                        atOutput = QueryQueryGroupGroupOutputAtOutputEnum.VARIABLE;
                                                    }}),
                                                }};
                                            }}),
                                            add(new QueryQueryGroupGroup() {{
                                                atGroupName = "reiciendis";
                                                atItemName = "ab";
                                                atLoopExpression = "modi";
                                                atPredicate = "aut";
                                                atSelector = "aut";
                                                atUniqueKeyVariable = "eveniet";
                                                condition = new org.openapis.openapi.models.shared.QueryQueryGroupGroupCondition[]{{
                                                    add(new QueryQueryGroupGroupCondition() {{
                                                        atValueA = "commodi";
                                                        atValueB = "numquam";
                                                    }}),
                                                    add(new QueryQueryGroupGroupCondition() {{
                                                        atValueA = "dolorum";
                                                        atValueB = "possimus";
                                                    }}),
                                                }};
                                                filter = new org.openapis.openapi.models.shared.QueryQueryGroupGroupFilter[]{{
                                                    add(new QueryQueryGroupGroupFilter() {{
                                                        atIsOr = false;
                                                        atProperty = "consectetur";
                                                        atValue = "nesciunt";
                                                    }}),
                                                    add(new QueryQueryGroupGroupFilter() {{
                                                        atIsOr = false;
                                                        atProperty = "quaerat";
                                                        atValue = "itaque";
                                                    }}),
                                                }};
                                                order = new org.openapis.openapi.models.shared.QueryQueryGroupGroupOrder[]{{
                                                    add(new QueryQueryGroupGroupOrder() {{
                                                        atProperty = "sunt";
                                                    }}),
                                                    add(new QueryQueryGroupGroupOrder() {{
                                                        atProperty = "distinctio";
                                                    }}),
                                                    add(new QueryQueryGroupGroupOrder() {{
                                                        atProperty = "iusto";
                                                    }}),
                                                    add(new QueryQueryGroupGroupOrder() {{
                                                        atProperty = "quas";
                                                    }}),
                                                }};
                                                output = new org.openapis.openapi.models.shared.QueryQueryGroupGroupOutput[]{{
                                                    add(new QueryQueryGroupGroupOutput() {{
                                                        atMaxLength = "facilis";
                                                        atOutput = QueryQueryGroupGroupOutputAtOutputEnum.ATTRIBUTE;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                    }};;
                                    rootNodeName = "autem";
                                    suppressMetricAttributes = false;
                                    variables = new QueryQueryVariable() {{
                                        variable = new org.openapis.openapi.models.shared.QueryQueryVariableVariable[]{{
                                            add(new QueryQueryVariableVariable() {{
                                                atName = "alias";
                                                atValue = "rem";
                                            }}),
                                            add(new QueryQueryVariableVariable() {{
                                                atName = "aut";
                                                atValue = "quos";
                                            }}),
                                            add(new QueryQueryVariableVariable() {{
                                                atName = "laudantium";
                                                atValue = "repellendus";
                                            }}),
                                        }};
                                    }};;
                                }};;
                            }};);            

            GetQueryResponseResponse res = sdk.query.getQueryResponse(req);

            if (res.getQueryResponse200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
