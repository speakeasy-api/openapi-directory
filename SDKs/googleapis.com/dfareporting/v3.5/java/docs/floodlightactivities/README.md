# floodlightActivities

### Available Operations

* [dfareportingFloodlightActivitiesDelete](#dfareportingfloodlightactivitiesdelete) - Deletes an existing floodlight activity.
* [dfareportingFloodlightActivitiesGeneratetag](#dfareportingfloodlightactivitiesgeneratetag) - Generates a tag for a floodlight activity.
* [dfareportingFloodlightActivitiesGet](#dfareportingfloodlightactivitiesget) - Gets one floodlight activity by ID.
* [dfareportingFloodlightActivitiesInsert](#dfareportingfloodlightactivitiesinsert) - Inserts a new floodlight activity.
* [dfareportingFloodlightActivitiesList](#dfareportingfloodlightactivitieslist) - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* [dfareportingFloodlightActivitiesPatch](#dfareportingfloodlightactivitiespatch) - Updates an existing floodlight activity. This method supports patch semantics.
* [dfareportingFloodlightActivitiesUpdate](#dfareportingfloodlightactivitiesupdate) - Updates an existing floodlight activity.

## dfareportingFloodlightActivitiesDelete

Deletes an existing floodlight activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesDeleteRequest req = new DfareportingFloodlightActivitiesDeleteRequest("officia", "officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "deleniti";
                key = "eum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "odio";
                uploadProtocol = "ullam";
            }};            

            DfareportingFloodlightActivitiesDeleteResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesDelete(req, new DfareportingFloodlightActivitiesDeleteSecurity("provident", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivitiesGeneratetag

Generates a tag for a floodlight activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesGeneratetagRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesGeneratetagResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesGeneratetagSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesGeneratetagRequest req = new DfareportingFloodlightActivitiesGeneratetagRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "doloremque";
                floodlightActivityId = "consequuntur";
                key = "maxime";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "laudantium";
                uploadProtocol = "recusandae";
            }};            

            DfareportingFloodlightActivitiesGeneratetagResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGeneratetag(req, new DfareportingFloodlightActivitiesGeneratetagSecurity("odit", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivitiesGenerateTagResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivitiesGet

Gets one floodlight activity by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesGetRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesGetResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesGetRequest req = new DfareportingFloodlightActivitiesGetRequest("sequi", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "sunt";
                key = "ipsa";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "culpa";
                uploadProtocol = "dolore";
            }};            

            DfareportingFloodlightActivitiesGetResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGet(req, new DfareportingFloodlightActivitiesGetSecurity("eius", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivitiesInsert

Inserts a new floodlight activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivity;
import org.openapis.openapi.models.shared.FloodlightActivityCacheBustingTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityCountingMethodEnum;
import org.openapis.openapi.models.shared.FloodlightActivityDynamicTag;
import org.openapis.openapi.models.shared.FloodlightActivityFloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityFloodlightTagTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag;
import org.openapis.openapi.models.shared.FloodlightActivityStatusEnum;
import org.openapis.openapi.models.shared.FloodlightActivityTagFormatEnum;
import org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesInsertRequest req = new DfareportingFloodlightActivitiesInsertRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "rerum";
                    advertiserId = "voluptatibus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sequi";
                        etag = "ducimus";
                        id = "5b442828-21fd-4b2f-a9e5-9267c71cc8d3";
                        kind = "quo";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "labore";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JAVASCRIPT;
                    countingMethod = FloodlightActivityCountingMethodEnum.UNIQUE_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "temporibus";
                            name = "Grace Hills";
                            tag = "quas";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "odit";
                            name = "Ian Armstrong";
                            tag = "eveniet";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "odit";
                            name = "Dana Block";
                            tag = "perferendis";
                        }}),
                    }};
                    expectedUrl = "incidunt";
                    floodlightActivityGroupId = "ducimus";
                    floodlightActivityGroupName = "quod";
                    floodlightActivityGroupTagString = "aut";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "numquam";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "omnis";
                        etag = "repudiandae";
                        id = "143f9619-bb7d-440d-9a11-fa436e625923";
                        kind = "adipisci";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "natus";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IFRAME;
                    id = "minus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "provident";
                        etag = "quibusdam";
                        id = "237397c7-85b5-4db4-b500-183febdf676b";
                        kind = "reprehenderit";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "accusantium";
                    }};;
                    kind = "autem";
                    name = "Gerard Purdy";
                    notes = "voluptatem";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "enim";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "qui";
                                name = "Leon Huels";
                                tag = "officiis";
                            }};
                            siteId = "fugiat";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "minus";
                                etag = "tempora";
                                id = "39ed8c43-20f4-4124-8d44-87ac693b94c3";
                                kind = "quidem";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "fugiat";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.ACTIVE;
                    subaccountId = "modi";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "blanditiis";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U49),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U61),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U33),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U64),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "asperiores";
                key = "maxime";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "corporis";
                uploadProtocol = "laboriosam";
            }};            

            DfareportingFloodlightActivitiesInsertResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesInsert(req, new DfareportingFloodlightActivitiesInsertSecurity("laboriosam", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivitiesList

Retrieves a list of floodlight activities, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesListRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesListResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesListSecurity;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesListRequest req = new DfareportingFloodlightActivitiesListRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                advertiserId = "animi";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "voluptas";
                floodlightActivityGroupIds = new String[]{{
                    add("fugit"),
                    add("inventore"),
                    add("odit"),
                    add("labore"),
                }};
                floodlightActivityGroupName = "perspiciatis";
                floodlightActivityGroupTagString = "dolore";
                floodlightActivityGroupType = DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum.COUNTER;
                floodlightConfigurationId = "aut";
                ids = new String[]{{
                    add("quasi"),
                    add("natus"),
                    add("fugiat"),
                }};
                key = "odio";
                maxResults = 775815L;
                oauthToken = "ipsum";
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "et";
                searchString = "harum";
                sortField = DfareportingFloodlightActivitiesListSortFieldEnum.ID;
                sortOrder = DfareportingFloodlightActivitiesListSortOrderEnum.ASCENDING;
                tagString = "atque";
                uploadType = "magnam";
                uploadProtocol = "incidunt";
            }};            

            DfareportingFloodlightActivitiesListResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesList(req, new DfareportingFloodlightActivitiesListSecurity("consequatur", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivitiesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivitiesPatch

Updates an existing floodlight activity. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivity;
import org.openapis.openapi.models.shared.FloodlightActivityCacheBustingTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityCountingMethodEnum;
import org.openapis.openapi.models.shared.FloodlightActivityDynamicTag;
import org.openapis.openapi.models.shared.FloodlightActivityFloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityFloodlightTagTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag;
import org.openapis.openapi.models.shared.FloodlightActivityStatusEnum;
import org.openapis.openapi.models.shared.FloodlightActivityTagFormatEnum;
import org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesPatchRequest req = new DfareportingFloodlightActivitiesPatchRequest("quae", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "sit";
                    advertiserId = "nesciunt";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "veritatis";
                        etag = "ipsa";
                        id = "d023dc90-1f5a-4fd2-a6c4-4846ae9d8925";
                        kind = "amet";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "quos";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JSP;
                    countingMethod = FloodlightActivityCountingMethodEnum.SESSION_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "delectus";
                            name = "Olga Mante";
                            tag = "a";
                        }}),
                    }};
                    expectedUrl = "ad";
                    floodlightActivityGroupId = "et";
                    floodlightActivityGroupName = "eveniet";
                    floodlightActivityGroupTagString = "tempora";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "exercitationem";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sed";
                        etag = "fugiat";
                        id = "3c343d61-778a-4f49-9247-725e621909e9";
                        kind = "inventore";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "dolore";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IFRAME;
                    id = "id";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "ullam";
                        etag = "quibusdam";
                        id = "e59ac770-6670-4cf1-8f59-32605251e66b";
                        kind = "cum";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quia";
                    }};;
                    kind = "laboriosam";
                    name = "Virgil Kunde";
                    notes = "omnis";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "qui";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "nulla";
                                name = "Wendy Hilpert";
                                tag = "ipsa";
                            }};
                            siteId = "accusamus";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "error";
                                etag = "velit";
                                id = "ee6cf59f-358a-4aea-8ae3-23a31bf7ba1c";
                                kind = "minus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "quam";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "nihil";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "inventore";
                                name = "Mr. Kendra Leuschke";
                                tag = "quisquam";
                            }};
                            siteId = "sint";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "voluptates";
                                etag = "alias";
                                id = "c7d9d323-f1aa-463e-99cf-1c856bcba51e";
                                kind = "maiores";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "numquam";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "nemo";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "numquam";
                                name = "Jim Kris";
                                tag = "maxime";
                            }};
                            siteId = "repellat";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "veritatis";
                                etag = "inventore";
                                id = "6cdd5444-a756-4287-bc7d-d9efaf43dc62";
                                kind = "consectetur";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "aspernatur";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.ACTIVE;
                    subaccountId = "delectus";
                    tagFormat = FloodlightActivityTagFormatEnum.HTML;
                    tagString = "et";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U53),
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "at";
                key = "tenetur";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "cum";
                uploadProtocol = "sit";
            }};            

            DfareportingFloodlightActivitiesPatchResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesPatch(req, new DfareportingFloodlightActivitiesPatchSecurity("magni", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivitiesUpdate

Updates an existing floodlight activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivitiesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivity;
import org.openapis.openapi.models.shared.FloodlightActivityCacheBustingTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityCountingMethodEnum;
import org.openapis.openapi.models.shared.FloodlightActivityDynamicTag;
import org.openapis.openapi.models.shared.FloodlightActivityFloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityFloodlightTagTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag;
import org.openapis.openapi.models.shared.FloodlightActivityStatusEnum;
import org.openapis.openapi.models.shared.FloodlightActivityTagFormatEnum;
import org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesUpdateRequest req = new DfareportingFloodlightActivitiesUpdateRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "id";
                    advertiserId = "exercitationem";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "commodi";
                        etag = "nostrum";
                        id = "fb8f652e-bb9d-4383-8387-90243b293dab";
                        kind = "neque";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "vero";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JSP;
                    countingMethod = FloodlightActivityCountingMethodEnum.STANDARD_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "doloribus";
                            name = "Mary Zemlak";
                            tag = "alias";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "non";
                            name = "Miss Jaime Rempel";
                            tag = "exercitationem";
                        }}),
                    }};
                    expectedUrl = "exercitationem";
                    floodlightActivityGroupId = "similique";
                    floodlightActivityGroupName = "magni";
                    floodlightActivityGroupTagString = "unde";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "cum";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aut";
                        etag = "expedita";
                        id = "c3bb7446-64eb-41d0-b388-b0d1bb17afee";
                        kind = "reprehenderit";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "soluta";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IMAGE;
                    id = "delectus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "repudiandae";
                        etag = "quidem";
                        id = "9457c7ed-af39-4d16-bbf7-6fd162b303e3";
                        kind = "aperiam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "dolor";
                    }};;
                    kind = "quidem";
                    name = "Manuel Tillman";
                    notes = "sequi";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "aliquid";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "placeat";
                                name = "Lewis Hilll";
                                tag = "sequi";
                            }};
                            siteId = "ab";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "consectetur";
                                etag = "ullam";
                                id = "53ccf1c2-04c4-4adc-8990-4c5195b8648c";
                                kind = "officiis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "mollitia";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.ARCHIVED_AND_DISABLED;
                    subaccountId = "deleniti";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "ab";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U18),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U82),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U21),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U73),
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "saepe";
                key = "voluptatem";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "distinctio";
            }};            

            DfareportingFloodlightActivitiesUpdateResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesUpdate(req, new DfareportingFloodlightActivitiesUpdateSecurity("harum", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
