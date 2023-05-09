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

            DfareportingRemarketingListsGetRequest req = new DfareportingRemarketingListsGetRequest("esse", "praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "minus";
                key = "eius";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "provident";
                uploadProtocol = "nostrum";
            }};            

            DfareportingRemarketingListsGetResponse res = sdk.remarketingLists.dfareportingRemarketingListsGet(req, new DfareportingRemarketingListsGetSecurity("perferendis", "aliquam") {{
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

            DfareportingRemarketingListsInsertRequest req = new DfareportingRemarketingListsInsertRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "vel";
                    active = false;
                    advertiserId = "minus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "blanditiis";
                        etag = "soluta";
                        id = "2a5f0022-07e4-4048-b900-09ed290278eb";
                        kind = "aliquam";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "itaque";
                    }};;
                    description = "iste";
                    id = "pariatur";
                    kind = "suscipit";
                    lifeSpan = "ut";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "sunt";
                        floodlightActivityName = "iure";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "sunt";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "quae";
                                        variableFriendlyName = "alias";
                                        variableName = "ratione";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN;
                                        remarketingListId = "amet";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "eos";
                                        variableFriendlyName = "eligendi";
                                        variableName = "voluptatem";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "distinctio";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "consequuntur";
                                        variableFriendlyName = "tempora";
                                        variableName = "voluptate";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "dicta";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "nemo";
                                        variableFriendlyName = "laboriosam";
                                        variableName = "aliquid";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "iste";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_PLAY_STORE;
                    name = "Flora Kirlin";
                    subaccountId = "dignissimos";
                }};;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "ea";
                key = "labore";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "atque";
                uploadProtocol = "aliquam";
            }};            

            DfareportingRemarketingListsInsertResponse res = sdk.remarketingLists.dfareportingRemarketingListsInsert(req, new DfareportingRemarketingListsInsertSecurity("necessitatibus", "tempore") {{
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

            DfareportingRemarketingListsListRequest req = new DfareportingRemarketingListsListRequest("provident", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                active = false;
                alt = AltEnum.PROTO;
                callback = "at";
                fields = "dolores";
                floodlightActivityId = "odit";
                key = "molestiae";
                maxResults = 402568L;
                name = "Paul Quitzon";
                oauthToken = "repellat";
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "atque";
                sortField = DfareportingRemarketingListsListSortFieldEnum.ID;
                sortOrder = DfareportingRemarketingListsListSortOrderEnum.DESCENDING;
                uploadType = "aliquid";
                uploadProtocol = "asperiores";
            }};            

            DfareportingRemarketingListsListResponse res = sdk.remarketingLists.dfareportingRemarketingListsList(req, new DfareportingRemarketingListsListSecurity("similique", "veniam") {{
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

            DfareportingRemarketingListsPatchRequest req = new DfareportingRemarketingListsPatchRequest("cum", "vel") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "corrupti";
                    active = false;
                    advertiserId = "temporibus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "libero";
                        etag = "sapiente";
                        id = "812f83b1-ca6a-49ff-8561-929cca9560a1";
                        kind = "adipisci";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "exercitationem";
                    }};;
                    description = "excepturi";
                    id = "illo";
                    kind = "quas";
                    lifeSpan = "facere";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "fuga";
                        floodlightActivityName = "ab";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "recusandae";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "quas";
                                        variableFriendlyName = "officiis";
                                        variableName = "ipsum";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "asperiores";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "accusamus";
                                        variableFriendlyName = "inventore";
                                        variableName = "ab";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN;
                                        remarketingListId = "nulla";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "natus";
                                        variableFriendlyName = "nesciunt";
                                        variableName = "eaque";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "nobis";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "nihil";
                                        variableFriendlyName = "laborum";
                                        variableName = "aut";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "reiciendis";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "aspernatur";
                                        variableFriendlyName = "et";
                                        variableName = "voluptatum";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN;
                                        remarketingListId = "quaerat";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "iste";
                                        variableFriendlyName = "libero";
                                        variableName = "nesciunt";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "recusandae";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "iure";
                                        variableFriendlyName = "quis";
                                        variableName = "eum";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "optio";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "incidunt";
                                        variableFriendlyName = "dignissimos";
                                        variableName = "accusantium";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "fugiat";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "veritatis";
                                        variableFriendlyName = "non";
                                        variableName = "reprehenderit";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "eum";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "suscipit";
                                        variableFriendlyName = "dicta";
                                        variableName = "ipsam";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_EQUALS;
                                        remarketingListId = "placeat";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "ipsa";
                                        variableFriendlyName = "et";
                                        variableName = "quibusdam";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "doloremque";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_DMP;
                    name = "Guillermo Fahey";
                    subaccountId = "facilis";
                }};;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "quidem";
                key = "repellat";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "veniam";
                uploadProtocol = "pariatur";
            }};            

            DfareportingRemarketingListsPatchResponse res = sdk.remarketingLists.dfareportingRemarketingListsPatch(req, new DfareportingRemarketingListsPatchSecurity("voluptatibus", "vero") {{
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

            DfareportingRemarketingListsUpdateRequest req = new DfareportingRemarketingListsUpdateRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                remarketingList = new RemarketingList() {{
                    accountId = "incidunt";
                    active = false;
                    advertiserId = "repellat";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "similique";
                        etag = "ut";
                        id = "b1e9c097-eda6-4234-82e1-a9237e9984c8";
                        kind = "consequatur";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "ut";
                    }};;
                    description = "nihil";
                    id = "sint";
                    kind = "saepe";
                    lifeSpan = "atque";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "excepturi";
                        floodlightActivityName = "architecto";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN;
                                        remarketingListId = "eligendi";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "deleniti";
                                        variableFriendlyName = "cumque";
                                        variableName = "officia";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "vel";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "porro";
                                        variableFriendlyName = "enim";
                                        variableName = "ex";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "cupiditate";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "vitae";
                                        variableFriendlyName = "tempora";
                                        variableName = "doloribus";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "consequuntur";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "magni";
                                        variableFriendlyName = "alias";
                                        variableName = "reprehenderit";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN;
                                        remarketingListId = "delectus";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "saepe";
                                        variableFriendlyName = "aut";
                                        variableName = "ipsum";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "eligendi";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "esse";
                                        variableFriendlyName = "tenetur";
                                        variableName = "ab";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "minus";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "placeat";
                                        variableFriendlyName = "est";
                                        variableName = "nam";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "repellat";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "asperiores";
                                        variableFriendlyName = "optio";
                                        variableName = "eos";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "impedit";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_GPLUS;
                    name = "Lynn Gerhold";
                    subaccountId = "asperiores";
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "nisi";
                key = "voluptatum";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "vero";
                uploadProtocol = "repellendus";
            }};            

            DfareportingRemarketingListsUpdateResponse res = sdk.remarketingLists.dfareportingRemarketingListsUpdate(req, new DfareportingRemarketingListsUpdateSecurity("facilis", "consequuntur") {{
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
