# floodlightActivityGroups

### Available Operations

* [dfareportingFloodlightActivityGroupsGet](#dfareportingfloodlightactivitygroupsget) - Gets one floodlight activity group by ID.
* [dfareportingFloodlightActivityGroupsInsert](#dfareportingfloodlightactivitygroupsinsert) - Inserts a new floodlight activity group.
* [dfareportingFloodlightActivityGroupsList](#dfareportingfloodlightactivitygroupslist) - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* [dfareportingFloodlightActivityGroupsPatch](#dfareportingfloodlightactivitygroupspatch) - Updates an existing floodlight activity group. This method supports patch semantics.
* [dfareportingFloodlightActivityGroupsUpdate](#dfareportingfloodlightactivitygroupsupdate) - Updates an existing floodlight activity group.

## dfareportingFloodlightActivityGroupsGet

Gets one floodlight activity group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsGetRequest req = new DfareportingFloodlightActivityGroupsGetRequest("impedit", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "corporis";
                key = "a";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "eos";
                uploadProtocol = "quo";
            }};            

            DfareportingFloodlightActivityGroupsGetResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsGet(req, new DfareportingFloodlightActivityGroupsGetSecurity("fugiat", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsInsert

Inserts a new floodlight activity group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityGroup;
import org.openapis.openapi.models.shared.FloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsInsertRequest req = new DfareportingFloodlightActivityGroupsInsertRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "est";
                    advertiserId = "ex";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "hic";
                        etag = "nobis";
                        id = "fec932af-6813-4d65-bfec-ec2dd6916f7f";
                        kind = "minus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quibusdam";
                    }};;
                    floodlightConfigurationId = "assumenda";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "animi";
                        etag = "molestiae";
                        id = "0ec60e60-7589-44d6-9c14-cd90227e37c0";
                        kind = "facere";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "reprehenderit";
                    }};;
                    id = "voluptate";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "reiciendis";
                        etag = "et";
                        id = "a5491abe-9751-4b10-ad23-e03e69815aae";
                        kind = "omnis";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "earum";
                    }};;
                    kind = "nobis";
                    name = "Rogelio Mitchell";
                    subaccountId = "odit";
                    tagString = "iste";
                    type = FloodlightActivityGroupTypeEnum.SALE;
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "maiores";
                key = "eos";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "fuga";
                uploadProtocol = "aliquam";
            }};            

            DfareportingFloodlightActivityGroupsInsertResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsInsert(req, new DfareportingFloodlightActivityGroupsInsertSecurity("tempora", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsList

Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListSecurity;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListSortOrderEnum;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsListRequest req = new DfareportingFloodlightActivityGroupsListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                advertiserId = "fuga";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "illum";
                floodlightConfigurationId = "tempore";
                ids = new String[]{{
                    add("neque"),
                    add("est"),
                }};
                key = "consequuntur";
                maxResults = 955605L;
                oauthToken = "unde";
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "maiores";
                searchString = "labore";
                sortField = DfareportingFloodlightActivityGroupsListSortFieldEnum.ID;
                sortOrder = DfareportingFloodlightActivityGroupsListSortOrderEnum.ASCENDING;
                type = DfareportingFloodlightActivityGroupsListTypeEnum.SALE;
                uploadType = "quisquam";
                uploadProtocol = "quae";
            }};            

            DfareportingFloodlightActivityGroupsListResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsList(req, new DfareportingFloodlightActivityGroupsListSecurity("possimus", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsPatch

Updates an existing floodlight activity group. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityGroup;
import org.openapis.openapi.models.shared.FloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsPatchRequest req = new DfareportingFloodlightActivityGroupsPatchRequest("facere", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "voluptas";
                    advertiserId = "et";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "explicabo";
                        etag = "sed";
                        id = "026ab8f2-7748-45c1-976a-f980da7a089f";
                        kind = "maxime";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "ut";
                    }};;
                    floodlightConfigurationId = "fugiat";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "facilis";
                        etag = "dolores";
                        id = "74530e5c-c7c6-4d0c-bcfd-cd334b6f623b";
                        kind = "minus";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "quisquam";
                    }};;
                    id = "mollitia";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "facilis";
                        etag = "nostrum";
                        id = "0aee5e0d-a8b9-4af6-ad05-486e7b413cbe";
                        kind = "magni";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "et";
                    }};;
                    kind = "molestiae";
                    name = "Miss Krystal Schroeder";
                    subaccountId = "adipisci";
                    tagString = "pariatur";
                    type = FloodlightActivityGroupTypeEnum.COUNTER;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "illo";
                key = "nulla";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "et";
                uploadProtocol = "veritatis";
            }};            

            DfareportingFloodlightActivityGroupsPatchResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsPatch(req, new DfareportingFloodlightActivityGroupsPatchSecurity("ad", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsUpdate

Updates an existing floodlight activity group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityGroup;
import org.openapis.openapi.models.shared.FloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsUpdateRequest req = new DfareportingFloodlightActivityGroupsUpdateRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "debitis";
                    advertiserId = "enim";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "itaque";
                        etag = "saepe";
                        id = "4f721184-0772-4f32-a3b4-9dbe0f23b7b6";
                        kind = "fugiat";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "cupiditate";
                    }};;
                    floodlightConfigurationId = "dolore";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quas";
                        etag = "assumenda";
                        id = "6eded477-680f-4c7a-97a8-2e5e82fd28d1";
                        kind = "perferendis";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "aperiam";
                    }};;
                    id = "harum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "iusto";
                        etag = "debitis";
                        id = "91392ab4-4cb1-4835-808f-461ce53e9144";
                        kind = "perspiciatis";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "animi";
                    }};;
                    kind = "iste";
                    name = "Gerard Grimes V";
                    subaccountId = "nulla";
                    tagString = "pariatur";
                    type = FloodlightActivityGroupTypeEnum.SALE;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "veritatis";
                key = "doloremque";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "odio";
                uploadProtocol = "possimus";
            }};            

            DfareportingFloodlightActivityGroupsUpdateResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsUpdate(req, new DfareportingFloodlightActivityGroupsUpdateSecurity("culpa", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
