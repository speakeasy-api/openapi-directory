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

            DfareportingRemarketingListsGetRequest req = new DfareportingRemarketingListsGetRequest("sed", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "ipsum";
                key = "dolore";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "rerum";
                uploadProtocol = "dolor";
            }};            

            DfareportingRemarketingListsGetResponse res = sdk.remarketingLists.dfareportingRemarketingListsGet(req, new DfareportingRemarketingListsGetSecurity("ex", "voluptatibus") {{
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

            DfareportingRemarketingListsInsertRequest req = new DfareportingRemarketingListsInsertRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                remarketingList = new RemarketingList() {{
                    accountId = "odio";
                    active = false;
                    advertiserId = "dolorum";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eius";
                        etag = "praesentium";
                        id = "519c3374-9028-4488-a6bb-03c7fd225e47";
                        kind = "corrupti";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "architecto";
                    }};;
                    description = "culpa";
                    id = "blanditiis";
                    kind = "atque";
                    lifeSpan = "necessitatibus";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "possimus";
                        floodlightActivityName = "in";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_EQUALS;
                                        remarketingListId = "repellendus";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "est";
                                        variableFriendlyName = "repellat";
                                        variableName = "quaerat";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_EQUALS;
                                        remarketingListId = "minima";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "id";
                                        variableFriendlyName = "impedit";
                                        variableName = "magni";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_EQUALS;
                                        remarketingListId = "doloremque";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "sit";
                                        variableFriendlyName = "repellat";
                                        variableName = "nemo";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "quos";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_GPLUS;
                    name = "Pam Leannon";
                    subaccountId = "ut";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "aut";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "excepturi";
                uploadProtocol = "quos";
            }};            

            DfareportingRemarketingListsInsertResponse res = sdk.remarketingLists.dfareportingRemarketingListsInsert(req, new DfareportingRemarketingListsInsertSecurity("necessitatibus", "unde") {{
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

            DfareportingRemarketingListsListRequest req = new DfareportingRemarketingListsListRequest("fugiat", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                active = false;
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "adipisci";
                floodlightActivityId = "alias";
                key = "nisi";
                maxResults = 973627L;
                name = "Audrey Krajcik";
                oauthToken = "nemo";
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "quibusdam";
                sortField = DfareportingRemarketingListsListSortFieldEnum.NAME;
                sortOrder = DfareportingRemarketingListsListSortOrderEnum.DESCENDING;
                uploadType = "consequatur";
                uploadProtocol = "eos";
            }};            

            DfareportingRemarketingListsListResponse res = sdk.remarketingLists.dfareportingRemarketingListsList(req, new DfareportingRemarketingListsListSecurity("totam", "ea") {{
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

            DfareportingRemarketingListsPatchRequest req = new DfareportingRemarketingListsPatchRequest("pariatur", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "maxime";
                    active = false;
                    advertiserId = "aliquam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "adipisci";
                        etag = "harum";
                        id = "18ab378f-2fcf-4f81-9df7-e088f74ef54c";
                        kind = "sint";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "ab";
                    }};;
                    description = "laboriosam";
                    id = "vero";
                    kind = "atque";
                    lifeSpan = "unde";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "qui";
                        floodlightActivityName = "aliquid";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN;
                                        remarketingListId = "libero";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "eum";
                                        variableFriendlyName = "hic";
                                        variableName = "quo";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "explicabo";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_GPLUS;
                    name = "Clint Corkery Jr.";
                    subaccountId = "doloremque";
                }};;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "vel";
                key = "autem";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "laboriosam";
                uploadProtocol = "necessitatibus";
            }};            

            DfareportingRemarketingListsPatchResponse res = sdk.remarketingLists.dfareportingRemarketingListsPatch(req, new DfareportingRemarketingListsPatchSecurity("amet", "recusandae") {{
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

            DfareportingRemarketingListsUpdateRequest req = new DfareportingRemarketingListsUpdateRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                remarketingList = new RemarketingList() {{
                    accountId = "excepturi";
                    active = false;
                    advertiserId = "fugiat";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsum";
                        etag = "libero";
                        id = "660334a1-1aa1-4d5d-a247-de9b3d46170e";
                        kind = "iusto";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quos";
                    }};;
                    description = "est";
                    id = "perspiciatis";
                    kind = "vel";
                    lifeSpan = "nobis";
                    listPopulationRule = new ListPopulationRule() {{
                        floodlightActivityId = "facilis";
                        floodlightActivityName = "sequi";
                        listPopulationClauses = new org.openapis.openapi.models.shared.ListPopulationClause[]{{
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN;
                                        remarketingListId = "voluptatum";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "sequi";
                                        variableFriendlyName = "perspiciatis";
                                        variableName = "rem";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "tempore";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "architecto";
                                        variableFriendlyName = "expedita";
                                        variableName = "cum";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.STRING_CONTAINS;
                                        remarketingListId = "dignissimos";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "dolore";
                                        variableFriendlyName = "ratione";
                                        variableName = "dolor";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "tenetur";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "amet";
                                        variableFriendlyName = "ut";
                                        variableName = "molestias";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "dicta";
                                        type = ListPopulationTermTypeEnum.LIST_MEMBERSHIP_TERM;
                                        value = "tempora";
                                        variableFriendlyName = "explicabo";
                                        variableName = "incidunt";
                                    }}),
                                }};
                            }}),
                            add(new ListPopulationClause() {{
                                terms = new org.openapis.openapi.models.shared.ListPopulationTerm[]{{
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_GREATER_THAN_EQUAL;
                                        remarketingListId = "dolores";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "dicta";
                                        variableFriendlyName = "eligendi";
                                        variableName = "recusandae";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "ex";
                                        type = ListPopulationTermTypeEnum.REFERRER_TERM;
                                        value = "iste";
                                        variableFriendlyName = "nemo";
                                        variableName = "veritatis";
                                    }}),
                                    add(new ListPopulationTerm() {{
                                        contains = false;
                                        negation = false;
                                        operator = ListPopulationTermOperatorEnum.NUM_LESS_THAN_EQUAL;
                                        remarketingListId = "enim";
                                        type = ListPopulationTermTypeEnum.CUSTOM_VARIABLE_TERM;
                                        value = "facilis";
                                        variableFriendlyName = "beatae";
                                        variableName = "corporis";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    listSize = "atque";
                    listSource = RemarketingListListSourceEnum.REMARKETING_LIST_SOURCE_GPLUS;
                    name = "Salvador Bosco";
                    subaccountId = "reiciendis";
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "iure";
                key = "dolor";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "sequi";
                uploadProtocol = "quae";
            }};            

            DfareportingRemarketingListsUpdateResponse res = sdk.remarketingLists.dfareportingRemarketingListsUpdate(req, new DfareportingRemarketingListsUpdateSecurity("porro", "harum") {{
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
