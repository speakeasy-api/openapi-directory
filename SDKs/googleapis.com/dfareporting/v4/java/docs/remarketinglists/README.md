# remarketingLists

### Available Operations

* [dfareportingRemarketingListsGet](#dfareportingremarketinglistsget) - Gets one remarketing list by ID.
* [dfareportingRemarketingListsInsert](#dfareportingremarketinglistsinsert) - Inserts a new remarketing list.
* [dfareportingRemarketingListsList](#dfareportingremarketinglistslist) - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* [dfareportingRemarketingListsPatch](#dfareportingremarketinglistspatch) - Updates an existing remarketing list. This method supports patch semantics.
* [dfareportingRemarketingListsUpdate](#dfareportingremarketinglistsupdate) - Updates an existing remarketing list.

## dfareportingRemarketingListsGet

Gets one remarketing list by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsGetRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsGetResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListsGetRequest req = new DfareportingRemarketingListsGetRequest("dignissimos", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "doloribus";
                key = "accusamus";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "neque";
                uploadProtocol = "reprehenderit";
            }};            

            DfareportingRemarketingListsGetResponse res = sdk.remarketingLists.dfareportingRemarketingListsGet(req, new DfareportingRemarketingListsGetSecurity("voluptas", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingRemarketingListsInsert

Inserts a new remarketing list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.ListPopulationClause;
import org.openapis.openapi.models.shared.ListPopulationRule;
import org.openapis.openapi.models.shared.ListPopulationTerm;
import org.openapis.openapi.models.shared.ListPopulationTermOperatorEnum;
import org.openapis.openapi.models.shared.ListPopulationTermTypeEnum;
import org.openapis.openapi.models.shared.RemarketingList;
import org.openapis.openapi.models.shared.RemarketingListListSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListsInsertRequest req = new DfareportingRemarketingListsInsertRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "earum";
                    active = false;
                    advertiserId = "at";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eveniet";
                        etag = "vero";
                        id = "76790ed0-c16a-47ba-8784-04489f6770ef";
                        kind = "ipsa";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "praesentium";
                    }};;
                    description = "doloremque";
                    id = "occaecati";
                    kind = "illo";
                    lifeSpan = "id";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "dolores";
                        floodlightActivityName = "soluta";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "repudiandae";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "commodi";
                                        variableFriendlyName = "minus";
                                        variableName = "odio";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "doloribus";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "est";
                                        variableFriendlyName = "autem";
                                        variableName = "perferendis";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "quam";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "eveniet";
                                        variableFriendlyName = "dolor";
                                        variableName = "dolore";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "perferendis";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "esse";
                                        variableFriendlyName = "cupiditate";
                                        variableName = "debitis";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "officia";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "debitis";
                                        variableFriendlyName = "eum";
                                        variableName = "consequatur";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "culpa";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_GPLUS;
                    name = "Wilson Nolan";
                    subaccountId = "nemo";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "atque";
                key = "laboriosam";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "veniam";
                uploadProtocol = "vitae";
            }};            

            DfareportingRemarketingListsInsertResponse res = sdk.remarketingLists.dfareportingRemarketingListsInsert(req, new DfareportingRemarketingListsInsertSecurity("deserunt", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingRemarketingListsList

Retrieves a list of remarketing lists, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsListRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsListResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsListSecurity;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListsListRequest req = new DfareportingRemarketingListsListRequest("porro", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "autem";
                active = false;
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "impedit";
                floodlightActivityId = "sunt";
                key = "optio";
                maxResults = 487889L;
                name = "Gerard Feest";
                oauthToken = "officiis";
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "fuga";
                sortField = DfareportingRemarketingListsListSortFieldEnum.ID;
                sortOrder = DfareportingRemarketingListsListSortOrderEnum.DESCENDING;
                uploadType = "nemo";
                uploadProtocol = "id";
            }};            

            DfareportingRemarketingListsListResponse res = sdk.remarketingLists.dfareportingRemarketingListsList(req, new DfareportingRemarketingListsListSecurity("laboriosam", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingListsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingRemarketingListsPatch

Updates an existing remarketing list. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.ListPopulationClause;
import org.openapis.openapi.models.shared.ListPopulationRule;
import org.openapis.openapi.models.shared.ListPopulationTerm;
import org.openapis.openapi.models.shared.ListPopulationTermOperatorEnum;
import org.openapis.openapi.models.shared.ListPopulationTermTypeEnum;
import org.openapis.openapi.models.shared.RemarketingList;
import org.openapis.openapi.models.shared.RemarketingListListSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListsPatchRequest req = new DfareportingRemarketingListsPatchRequest("expedita", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "exercitationem";
                    active = false;
                    advertiserId = "veniam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ea";
                        etag = "aspernatur";
                        id = "d9b7d9e2-d6fc-4f55-b629-db875c3a8902";
                        kind = "deleniti";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "est";
                    }};;
                    description = "enim";
                    id = "quasi";
                    kind = "delectus";
                    lifeSpan = "magnam";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "illo";
                        floodlightActivityName = "optio";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "iste";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "necessitatibus";
                                        variableFriendlyName = "illum";
                                        variableName = "dolor";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "nihil";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "numquam";
                                        variableFriendlyName = "placeat";
                                        variableName = "ab";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "ad";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "beatae";
                                        variableFriendlyName = "necessitatibus";
                                        variableName = "provident";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "porro";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "officiis";
                                        variableFriendlyName = "consectetur";
                                        variableName = "reiciendis";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "sunt";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "aliquid";
                                        variableFriendlyName = "accusantium";
                                        variableName = "aperiam";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "doloremque";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "dolor";
                                        variableFriendlyName = "harum";
                                        variableName = "deserunt";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "veritatis";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "ex";
                                        variableFriendlyName = "repellat";
                                        variableName = "earum";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_EQUALS;
                                        remarketingListId = "sint";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "totam";
                                        variableFriendlyName = "minima";
                                        variableName = "explicabo";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "ad";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "rerum";
                                        variableFriendlyName = "nesciunt";
                                        variableName = "eos";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "cumque";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "placeat";
                                        variableFriendlyName = "ratione";
                                        variableName = "eligendi";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "quasi";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "accusamus";
                                        variableFriendlyName = "inventore";
                                        variableName = "voluptas";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "ipsum";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "excepturi";
                                        variableFriendlyName = "perferendis";
                                        variableName = "nostrum";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "expedita";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "quidem";
                                        variableFriendlyName = "recusandae";
                                        variableName = "illum";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "itaque";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_PLAY_STORE;
                    name = "Bernadette Block";
                    subaccountId = "optio";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "molestias";
                key = "iste";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "consequuntur";
                uploadProtocol = "blanditiis";
            }};            

            DfareportingRemarketingListsPatchResponse res = sdk.remarketingLists.dfareportingRemarketingListsPatch(req, new DfareportingRemarketingListsPatchSecurity("dolores", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingRemarketingListsUpdate

Updates an existing remarketing list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingRemarketingListsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.ListPopulationClause;
import org.openapis.openapi.models.shared.ListPopulationRule;
import org.openapis.openapi.models.shared.ListPopulationTerm;
import org.openapis.openapi.models.shared.ListPopulationTermOperatorEnum;
import org.openapis.openapi.models.shared.ListPopulationTermTypeEnum;
import org.openapis.openapi.models.shared.RemarketingList;
import org.openapis.openapi.models.shared.RemarketingListListSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingRemarketingListsUpdateRequest req = new DfareportingRemarketingListsUpdateRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "maxime";
                    active = false;
                    advertiserId = "nobis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "soluta";
                        etag = "eligendi";
                        id = "d3b121b8-8c1e-4e5e-ba06-1391cc8fa0b7";
                        kind = "repellendus";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "ducimus";
                    }};;
                    description = "autem";
                    id = "ut";
                    kind = "occaecati";
                    lifeSpan = "aspernatur";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "eum";
                        floodlightActivityName = "facilis";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "minima";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "ex";
                                        variableFriendlyName = "impedit";
                                        variableName = "harum";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "necessitatibus";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "similique";
                                        variableFriendlyName = "expedita";
                                        variableName = "debitis";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "accusamus";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "tempore";
                                        variableFriendlyName = "error";
                                        variableName = "cupiditate";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "velit";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "illo";
                                        variableFriendlyName = "amet";
                                        variableName = "enim";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "quas";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_DMP;
                    name = "Sandy Lockman";
                    subaccountId = "soluta";
                }};;
                accessToken = "odio";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "minus";
                key = "harum";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "eum";
                uploadProtocol = "iste";
            }};            

            DfareportingRemarketingListsUpdateResponse res = sdk.remarketingLists.dfareportingRemarketingListsUpdate(req, new DfareportingRemarketingListsUpdateSecurity("at", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.remarketingList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
