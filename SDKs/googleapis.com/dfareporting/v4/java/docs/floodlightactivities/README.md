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

            DfareportingFloodlightActivitiesDeleteRequest req = new DfareportingFloodlightActivitiesDeleteRequest("error", "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "doloribus";
                key = "illum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "quae";
                uploadProtocol = "tempore";
            }};            

            DfareportingFloodlightActivitiesDeleteResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesDelete(req, new DfareportingFloodlightActivitiesDeleteSecurity("incidunt", "deserunt") {{
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

            DfareportingFloodlightActivitiesGeneratetagRequest req = new DfareportingFloodlightActivitiesGeneratetagRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "dolor";
                floodlightActivityId = "maxime";
                key = "amet";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "ullam";
                uploadProtocol = "molestiae";
            }};            

            DfareportingFloodlightActivitiesGeneratetagResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGeneratetag(req, new DfareportingFloodlightActivitiesGeneratetagSecurity("architecto", "ab") {{
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

            DfareportingFloodlightActivitiesGetRequest req = new DfareportingFloodlightActivitiesGetRequest("maiores", "labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "iusto";
                key = "pariatur";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "tempora";
                uploadProtocol = "voluptatum";
            }};            

            DfareportingFloodlightActivitiesGetResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGet(req, new DfareportingFloodlightActivitiesGetSecurity("cum", "itaque") {{
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

            DfareportingFloodlightActivitiesInsertRequest req = new DfareportingFloodlightActivitiesInsertRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "recusandae";
                    advertiserId = "numquam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "architecto";
                        etag = "fuga";
                        id = "7a215ca1-2a4b-4a9d-9998-8192cfd0c77c";
                        kind = "ullam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "vero";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JSP;
                    countingMethod = FloodlightActivityCountingMethodEnum.ITEMS_SOLD_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "facere";
                            name = "Rochelle Thiel";
                            tag = "deleniti";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "nobis";
                            name = "William Raynor";
                            tag = "consectetur";
                        }}),
                    }};
                    expectedUrl = "molestias";
                    floodlightActivityGroupId = "modi";
                    floodlightActivityGroupName = "saepe";
                    floodlightActivityGroupTagString = "qui";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "sint";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ea";
                        etag = "in";
                        id = "03fec31c-5082-44d1-89a3-6a6b2d27eb70";
                        kind = "nihil";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "est";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IMAGE;
                    id = "aut";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "placeat";
                        etag = "voluptatum";
                        id = "fe46e617-7db9-4db3-b70f-fbb6970ee770";
                        kind = "eveniet";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "autem";
                    }};;
                    kind = "alias";
                    name = "Mathew Trantow";
                    notes = "maxime";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "doloremque";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "vel";
                                name = "Ricardo Brown PhD";
                                tag = "dolorem";
                            }};
                            siteId = "aut";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "blanditiis";
                                etag = "ducimus";
                                id = "14c20a3d-9863-47ca-85c3-fe65574dbaf9";
                                kind = "labore";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "quam";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.DISABLED_POLICY;
                    subaccountId = "sint";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "a";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U25),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "magni";
                fields = "rem";
                key = "assumenda";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "porro";
                uploadProtocol = "sapiente";
            }};            

            DfareportingFloodlightActivitiesInsertResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesInsert(req, new DfareportingFloodlightActivitiesInsertSecurity("consequuntur", "expedita") {{
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

            DfareportingFloodlightActivitiesListRequest req = new DfareportingFloodlightActivitiesListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                advertiserId = "neque";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "quibusdam";
                floodlightActivityGroupIds = new String[]{{
                    add("minima"),
                }};
                floodlightActivityGroupName = "ea";
                floodlightActivityGroupTagString = "fugiat";
                floodlightActivityGroupType = DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum.COUNTER;
                floodlightConfigurationId = "officiis";
                ids = new String[]{{
                    add("modi"),
                }};
                key = "tempore";
                maxResults = 170656L;
                oauthToken = "beatae";
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "fugiat";
                searchString = "occaecati";
                sortField = DfareportingFloodlightActivitiesListSortFieldEnum.NAME;
                sortOrder = DfareportingFloodlightActivitiesListSortOrderEnum.ASCENDING;
                tagString = "natus";
                uploadType = "aliquid";
                uploadProtocol = "assumenda";
            }};            

            DfareportingFloodlightActivitiesListResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesList(req, new DfareportingFloodlightActivitiesListSecurity("veniam", "quis") {{
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

            DfareportingFloodlightActivitiesPatchRequest req = new DfareportingFloodlightActivitiesPatchRequest("id", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "iste";
                    advertiserId = "mollitia";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sunt";
                        etag = "quod";
                        id = "4b79ae33-681c-423c-b9a7-c0e17cb12c5b";
                        kind = "culpa";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "fugit";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.ACTIVE_SERVER_PAGE;
                    countingMethod = FloodlightActivityCountingMethodEnum.ITEMS_SOLD_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "explicabo";
                            name = "Roxanne Steuber";
                            tag = "tempore";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "est";
                            name = "May Rogahn";
                            tag = "quisquam";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "perspiciatis";
                            name = "Kathryn Paucek";
                            tag = "voluptatum";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "sunt";
                            name = "Desiree Jast";
                            tag = "delectus";
                        }}),
                    }};
                    expectedUrl = "earum";
                    floodlightActivityGroupId = "placeat";
                    floodlightActivityGroupName = "saepe";
                    floodlightActivityGroupTagString = "quod";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "assumenda";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "at";
                        etag = "ea";
                        id = "916f7fc7-dda7-40ec-a0e6-075894d61c14";
                        kind = "quisquam";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "excepturi";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IFRAME;
                    id = "aspernatur";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "odit";
                        etag = "molestiae";
                        id = "e37c0d97-7f1a-4549-9abe-9751b106d23e";
                        kind = "accusantium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "debitis";
                    }};;
                    kind = "voluptas";
                    name = "Dwight Casper";
                    notes = "id";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "omnis";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "cupiditate";
                                name = "Loren Sipes";
                                tag = "voluptates";
                            }};
                            siteId = "in";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "odit";
                                etag = "iste";
                                id = "c9d4f2d8-a446-440c-a60d-b73a2f93f467";
                                kind = "at";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "quae";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "possimus";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "praesentium";
                                name = "Wilbur Harber Sr.";
                                tag = "sed";
                            }};
                            siteId = "aut";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "quia";
                                etag = "laboriosam";
                                id = "ab8f2774-85c1-4976-af98-0da7a089fc44";
                                kind = "fugiat";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "dolores";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "quam";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "eius";
                                name = "Gladys Beier";
                                tag = "minus";
                            }};
                            siteId = "placeat";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "in";
                                etag = "minus";
                                id = "6d0cbcfd-cd33-44b6-b623-bcecab50aee5";
                                kind = "earum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "pariatur";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "officia";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "quas";
                                name = "Salvador Osinski";
                                tag = "id";
                            }};
                            siteId = "nulla";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "perferendis";
                                etag = "ullam";
                                id = "486e7b41-3cbe-42d1-b6dc-1c43d40f61d1";
                                kind = "in";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "veritatis";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.ARCHIVED_AND_DISABLED;
                    subaccountId = "esse";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "tempore";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U32),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U94),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U91),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U26),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "quasi";
                key = "et";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "consequatur";
                uploadProtocol = "nihil";
            }};            

            DfareportingFloodlightActivitiesPatchResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesPatch(req, new DfareportingFloodlightActivitiesPatchSecurity("esse", "quia") {{
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

            DfareportingFloodlightActivitiesUpdateRequest req = new DfareportingFloodlightActivitiesUpdateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "odit";
                    advertiserId = "itaque";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dolorem";
                        etag = "distinctio";
                        id = "49dbe0f2-3b7b-46d9-948d-6eded477680f";
                        kind = "minus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "laborum";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JAVASCRIPT;
                    countingMethod = FloodlightActivityCountingMethodEnum.SESSION_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "blanditiis";
                            name = "Jana Hickle";
                            tag = "eos";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "delectus";
                            name = "Eugene Langosh Jr.";
                            tag = "quaerat";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "aperiam";
                            name = "Ted Trantow I";
                            tag = "omnis";
                        }}),
                    }};
                    expectedUrl = "qui";
                    floodlightActivityGroupId = "dolorum";
                    floodlightActivityGroupName = "distinctio";
                    floodlightActivityGroupTagString = "incidunt";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "eligendi";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "expedita";
                        etag = "architecto";
                        id = "835008f4-61ce-453e-9144-98a9ba460add";
                        kind = "reiciendis";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "officiis";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IFRAME;
                    id = "veritatis";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "doloremque";
                        etag = "porro";
                        id = "37daa918-2a49-4d96-a5d3-caffc198eea4";
                        kind = "quaerat";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dolores";
                    }};;
                    kind = "dignissimos";
                    name = "Fred Rippin";
                    notes = "non";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "ipsa";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "saepe";
                                name = "Sergio Little";
                                tag = "placeat";
                            }};
                            siteId = "porro";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "itaque";
                                etag = "accusantium";
                                id = "486de0d5-6d73-4b00-9503-e8dc626ff77c";
                                kind = "iure";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "aliquid";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "odio";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "enim";
                                name = "Gordon Pollich DVM";
                                tag = "consectetur";
                            }};
                            siteId = "vero";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "eius";
                                etag = "optio";
                                id = "fcc6a91e-c526-424d-8001-4ef45cea11ac";
                                kind = "minima";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "debitis";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.ARCHIVED;
                    subaccountId = "quidem";
                    tagFormat = FloodlightActivityTagFormatEnum.HTML;
                    tagString = "nostrum";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U49),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U95),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U24),
                    }};
                }};;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "quae";
                key = "dolore";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "cum";
                uploadProtocol = "sint";
            }};            

            DfareportingFloodlightActivitiesUpdateResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesUpdate(req, new DfareportingFloodlightActivitiesUpdateSecurity("est", "quod") {{
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
