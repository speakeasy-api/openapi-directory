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

            DfareportingRemarketingListsGetRequest req = new DfareportingRemarketingListsGetRequest("odio", "sit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "saepe";
                key = "consequatur";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "tenetur";
                uploadProtocol = "maxime";
            }};            

            DfareportingRemarketingListsGetResponse res = sdk.remarketingLists.dfareportingRemarketingListsGet(req, new DfareportingRemarketingListsGetSecurity("in", "dolor") {{
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

            DfareportingRemarketingListsInsertRequest req = new DfareportingRemarketingListsInsertRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                remarketingList = new RemarketingList() {{
                    accountId = "similique";
                    active = false;
                    advertiserId = "aperiam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "adipisci";
                        etag = "aliquam";
                        id = "b1149924-3afa-4698-ba47-2b709a153e22";
                        kind = "amet";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "dicta";
                    }};;
                    description = "quae";
                    id = "autem";
                    kind = "rem";
                    lifeSpan = "ad";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "ipsum";
                        floodlightActivityName = "omnis";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_EQUALS;
                                        remarketingListId = "perspiciatis";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "eos";
                                        variableFriendlyName = "repellendus";
                                        variableName = "vitae";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_EQUALS;
                                        remarketingListId = "animi";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "possimus";
                                        variableFriendlyName = "vitae";
                                        variableName = "ad";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "praesentium";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "quisquam";
                                        variableFriendlyName = "ipsum";
                                        variableName = "perferendis";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "quidem";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "praesentium";
                                        variableFriendlyName = "nisi";
                                        variableName = "libero";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "amet";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "harum";
                                        variableFriendlyName = "fugiat";
                                        variableName = "sed";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN;
                                        remarketingListId = "similique";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "doloribus";
                                        variableFriendlyName = "ipsum";
                                        variableName = "dolore";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "rerum";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "ex";
                                        variableFriendlyName = "voluptatibus";
                                        variableName = "voluptas";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "reprehenderit";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_GA;
                    name = "Frederick Lakin V";
                    subaccountId = "quod";
                }};;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "quam";
                fields = "incidunt";
                key = "sint";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quas";
                uploadProtocol = "aliquam";
            }};            

            DfareportingRemarketingListsInsertResponse res = sdk.remarketingLists.dfareportingRemarketingListsInsert(req, new DfareportingRemarketingListsInsertSecurity("deleniti", "quos") {{
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

            DfareportingRemarketingListsListRequest req = new DfareportingRemarketingListsListRequest("qui", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                active = false;
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "porro";
                floodlightActivityId = "nihil";
                key = "asperiores";
                maxResults = 821046L;
                name = "Theresa Haley";
                oauthToken = "in";
                pageToken = "corrupti";
                prettyPrint = false;
                quotaUser = "iusto";
                sortField = DfareportingRemarketingListsListSortFieldEnum.ID;
                sortOrder = DfareportingRemarketingListsListSortOrderEnum.DESCENDING;
                uploadType = "blanditiis";
                uploadProtocol = "atque";
            }};            

            DfareportingRemarketingListsListResponse res = sdk.remarketingLists.dfareportingRemarketingListsList(req, new DfareportingRemarketingListsListSecurity("necessitatibus", "possimus") {{
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

            DfareportingRemarketingListsPatchRequest req = new DfareportingRemarketingListsPatchRequest("in", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "explicabo";
                    active = false;
                    advertiserId = "repellendus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eius";
                        etag = "est";
                        id = "f4158ac2-d0f0-4f58-83b8-7b47040d0d98";
                        kind = "necessitatibus";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "fugiat";
                    }};;
                    description = "laudantium";
                    id = "eos";
                    kind = "porro";
                    lifeSpan = "nostrum";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "officiis";
                        floodlightActivityName = "adipisci";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "corporis";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "molestiae";
                                        variableFriendlyName = "aliquid";
                                        variableName = "maiores";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "quisquam";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "voluptates";
                                        variableFriendlyName = "cum";
                                        variableName = "consequatur";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "eos";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_GA;
                    name = "Mercedes Abernathy";
                    subaccountId = "aliquam";
                }};;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "quas";
                key = "id";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "molestiae";
                uploadProtocol = "corrupti";
            }};            

            DfareportingRemarketingListsPatchResponse res = sdk.remarketingLists.dfareportingRemarketingListsPatch(req, new DfareportingRemarketingListsPatchSecurity("sapiente", "consequuntur") {{
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

            DfareportingRemarketingListsUpdateRequest req = new DfareportingRemarketingListsUpdateRequest("asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "maiores";
                    active = false;
                    advertiserId = "maiores";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "laudantium";
                        etag = "beatae";
                        id = "ddf7e088-f74e-4f54-8921-6e8926313bb6";
                        kind = "hic";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "explicabo";
                    }};;
                    description = "quo";
                    id = "corrupti";
                    kind = "illum";
                    lifeSpan = "fugit";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "reprehenderit";
                        floodlightActivityName = "eaque";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "eum";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "vel";
                                        variableFriendlyName = "autem";
                                        variableName = "id";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "fugiat";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_DFA;
                    name = "Dr. Marvin Walter";
                    subaccountId = "fugiat";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "aliquid";
                key = "perferendis";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "quaerat";
                uploadProtocol = "mollitia";
            }};            

            DfareportingRemarketingListsUpdateResponse res = sdk.remarketingLists.dfareportingRemarketingListsUpdate(req, new DfareportingRemarketingListsUpdateSecurity("dicta", "sunt") {{
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
