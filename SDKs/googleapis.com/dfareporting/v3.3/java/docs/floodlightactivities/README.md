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

            DfareportingFloodlightActivitiesDeleteRequest req = new DfareportingFloodlightActivitiesDeleteRequest("eveniet", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "dolorem";
                key = "cumque";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "consectetur";
                uploadProtocol = "at";
            }};            

            DfareportingFloodlightActivitiesDeleteResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesDelete(req, new DfareportingFloodlightActivitiesDeleteSecurity("suscipit", "quae") {{
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

            DfareportingFloodlightActivitiesGeneratetagRequest req = new DfareportingFloodlightActivitiesGeneratetagRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "quaerat";
                floodlightActivityId = "excepturi";
                key = "ab";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "voluptate";
                uploadProtocol = "odio";
            }};            

            DfareportingFloodlightActivitiesGeneratetagResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGeneratetag(req, new DfareportingFloodlightActivitiesGeneratetagSecurity("magni", "enim") {{
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

            DfareportingFloodlightActivitiesGetRequest req = new DfareportingFloodlightActivitiesGetRequest("eveniet", "commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "occaecati";
                key = "vero";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "ipsa";
                uploadProtocol = "dolore";
            }};            

            DfareportingFloodlightActivitiesGetResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGet(req, new DfareportingFloodlightActivitiesGetSecurity("labore", "id") {{
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
import org.openapis.openapi.models.shared.FloodlightActivityTagFormatEnum;
import org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesInsertRequest req = new DfareportingFloodlightActivitiesInsertRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "recusandae";
                    advertiserId = "ad";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "omnis";
                        etag = "mollitia";
                        id = "c7706670-cf1c-4f59-b260-5251e66bb426";
                        kind = "deleniti";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "dignissimos";
                    }};;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.COLD_FUSION;
                    countingMethod = FloodlightActivityCountingMethodEnum.SESSION_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "dolorum";
                            name = "Christie Frami";
                            tag = "suscipit";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "odio";
                            name = "Rochelle Muller";
                            tag = "recusandae";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "aliquid";
                            name = "Dominick Hammes";
                            tag = "dolorem";
                        }}),
                    }};
                    expectedUrl = "ipsam";
                    floodlightActivityGroupId = "voluptatum";
                    floodlightActivityGroupName = "dolorum";
                    floodlightActivityGroupTagString = "officia";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.SALE;
                    floodlightConfigurationId = "est";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quisquam";
                        etag = "officia";
                        id = "e323a31b-f7ba-41cc-9771-6c802cc9e0c7";
                        kind = "possimus";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "assumenda";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IFRAME;
                    hidden = false;
                    id = "dolores";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "consectetur";
                        etag = "repellat";
                        id = "1aa63ed9-cf1c-4856-bcba-51ef2454a47f";
                        kind = "dolorum";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "repellat";
                    }};;
                    kind = "veritatis";
                    name = "Tonya Rosenbaum";
                    notes = "exercitationem";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "dolore";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "numquam";
                                name = "Ron Hilll";
                                tag = "praesentium";
                            }};
                            siteId = "iusto";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "dolorem";
                                etag = "placeat";
                                id = "7dd9efaf-43dc-4623-a20f-3138f30df3db";
                                kind = "sit";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "aspernatur";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "earum";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "similique";
                                name = "Dustin Johns";
                                tag = "quidem";
                            }};
                            siteId = "rem";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "repellat";
                                etag = "suscipit";
                                id = "52ebb9d3-8383-4879-8243-b293dab30e91";
                                kind = "iure";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "corporis";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    subaccountId = "alias";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "quibusdam";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U1),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U26),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U79),
                    }};
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "quidem";
                key = "soluta";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "similique";
                uploadProtocol = "magni";
            }};            

            DfareportingFloodlightActivitiesInsertResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesInsert(req, new DfareportingFloodlightActivitiesInsertSecurity("unde", "consequuntur") {{
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

            DfareportingFloodlightActivitiesListRequest req = new DfareportingFloodlightActivitiesListRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                advertiserId = "quo";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "expedita";
                floodlightActivityGroupIds = new String[]{{
                    add("quaerat"),
                    add("aliquam"),
                }};
                floodlightActivityGroupName = "laboriosam";
                floodlightActivityGroupTagString = "nisi";
                floodlightActivityGroupType = DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum.COUNTER;
                floodlightConfigurationId = "accusamus";
                ids = new String[]{{
                    add("sunt"),
                    add("repellendus"),
                    add("voluptatem"),
                }};
                key = "non";
                maxResults = 215724L;
                oauthToken = "laudantium";
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "facilis";
                searchString = "consequatur";
                sortField = DfareportingFloodlightActivitiesListSortFieldEnum.NAME;
                sortOrder = DfareportingFloodlightActivitiesListSortOrderEnum.ASCENDING;
                tagString = "libero";
                uploadType = "rerum";
                uploadProtocol = "architecto";
            }};            

            DfareportingFloodlightActivitiesListResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesList(req, new DfareportingFloodlightActivitiesListSecurity("in", "fuga") {{
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
import org.openapis.openapi.models.shared.FloodlightActivityTagFormatEnum;
import org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesPatchRequest req = new DfareportingFloodlightActivitiesPatchRequest("tenetur", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "reprehenderit";
                    advertiserId = "incidunt";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "soluta";
                        etag = "voluptas";
                        id = "feb9457c-7eda-4f39-916f-bf76fd162b30";
                        kind = "dolor";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "consectetur";
                    }};;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JAVASCRIPT;
                    countingMethod = FloodlightActivityCountingMethodEnum.STANDARD_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "quidem";
                            name = "Manuel Tillman";
                            tag = "sequi";
                        }}),
                    }};
                    expectedUrl = "et";
                    floodlightActivityGroupId = "aliquid";
                    floodlightActivityGroupName = "placeat";
                    floodlightActivityGroupTagString = "sapiente";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "nemo";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "soluta";
                        etag = "magnam";
                        id = "313553cc-f1c2-404c-8adc-c9904c5195b8";
                        kind = "suscipit";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "praesentium";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.GLOBAL_SITE_TAG;
                    hidden = false;
                    id = "officiis";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptatibus";
                        etag = "mollitia";
                        id = "78f1e2d3-b901-4e09-92bb-b4cbb19f713d";
                        kind = "excepturi";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "culpa";
                    }};;
                    kind = "dolore";
                    name = "Elsie Mann I";
                    notes = "corrupti";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "quia";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "odio";
                                name = "Tricia Bruen";
                                tag = "officia";
                            }};
                            siteId = "perspiciatis";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "debitis";
                                etag = "non";
                                id = "5118c2cc-57fb-4d60-b1a7-8ed29a9d4eea";
                                kind = "totam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "nisi";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "nemo";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "atque";
                                name = "Billy Strosin";
                                tag = "aliquam";
                            }};
                            siteId = "optio";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "laudantium";
                                etag = "quas";
                                id = "be4f278f-d966-47e4-ac51-d2ffaa58dcef";
                                kind = "sed";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quaerat";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    subaccountId = "minus";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "nostrum";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U74),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U62),
                    }};
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "repellat";
                fields = "odit";
                key = "vitae";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "id";
                uploadProtocol = "nobis";
            }};            

            DfareportingFloodlightActivitiesPatchResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesPatch(req, new DfareportingFloodlightActivitiesPatchSecurity("vero", "excepturi") {{
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
import org.openapis.openapi.models.shared.FloodlightActivityTagFormatEnum;
import org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivitiesUpdateRequest req = new DfareportingFloodlightActivitiesUpdateRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "quisquam";
                    advertiserId = "eligendi";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "magni";
                        etag = "dignissimos";
                        id = "25ec2659-ce02-4808-80c6-9ef68e45c8ad";
                        kind = "possimus";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "est";
                    }};;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.PHP;
                    countingMethod = FloodlightActivityCountingMethodEnum.SESSION_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "incidunt";
                            name = "Cynthia Bednar";
                            tag = "aperiam";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "optio";
                            name = "Lucy Fahey";
                            tag = "magnam";
                        }}),
                    }};
                    expectedUrl = "dolor";
                    floodlightActivityGroupId = "provident";
                    floodlightActivityGroupName = "inventore";
                    floodlightActivityGroupTagString = "sapiente";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.SALE;
                    floodlightConfigurationId = "sapiente";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsa";
                        etag = "vitae";
                        id = "c3e91e8f-7bc6-49d4-a0a7-7eceb26d10f1";
                        kind = "repudiandae";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "qui";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IMAGE;
                    hidden = false;
                    id = "neque";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "ab";
                        etag = "quisquam";
                        id = "7c0f0f87-3f9d-45c2-9fd3-e0b4a4a4253c";
                        kind = "amet";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "consequuntur";
                    }};;
                    kind = "ullam";
                    name = "Julie Bergstrom";
                    notes = "fugit";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "iusto";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "recusandae";
                                name = "Mercedes Sauer";
                                tag = "voluptatum";
                            }};
                            siteId = "cum";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "itaque";
                                etag = "sit";
                                id = "9e41a7a2-15ca-412a-8ba9-d59988192cfd";
                                kind = "alias";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "odio";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "iusto";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "eligendi";
                                name = "Dawn Thiel";
                                tag = "dignissimos";
                            }};
                            siteId = "facere";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "eius";
                                etag = "accusamus";
                                id = "e6e8b90b-ac38-44e2-b967-03fec31c5082";
                                kind = "dolore";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "dicta";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "deleniti";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "perspiciatis";
                                name = "Curtis Keebler";
                                tag = "harum";
                            }};
                            siteId = "sunt";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "facere";
                                etag = "dolores";
                                id = "7eb707aa-60c8-4fe4-ae61-77db9db3b70f";
                                kind = "voluptatibus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "facilis";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "nisi";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "occaecati";
                                name = "Sarah VonRueden";
                                tag = "nihil";
                            }};
                            siteId = "ipsa";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "eveniet";
                                etag = "neque";
                                id = "6097ef7c-206e-461b-8d30-8714c20a3d98";
                                kind = "ea";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "esse";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    subaccountId = "nobis";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "totam";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U81),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U25),
                    }};
                }};;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "nostrum";
                key = "ad";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "possimus";
                uploadProtocol = "harum";
            }};            

            DfareportingFloodlightActivitiesUpdateResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesUpdate(req, new DfareportingFloodlightActivitiesUpdateSecurity("culpa", "reiciendis") {{
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
