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

            DfareportingFloodlightActivitiesDeleteRequest req = new DfareportingFloodlightActivitiesDeleteRequest("delectus", "quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "a";
                key = "ad";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "tempora";
                uploadProtocol = "ea";
            }};            

            DfareportingFloodlightActivitiesDeleteResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesDelete(req, new DfareportingFloodlightActivitiesDeleteSecurity("exercitationem", "sed") {{
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

            DfareportingFloodlightActivitiesGeneratetagRequest req = new DfareportingFloodlightActivitiesGeneratetagRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "consectetur";
                floodlightActivityId = "at";
                key = "suscipit";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "dignissimos";
                uploadProtocol = "atque";
            }};            

            DfareportingFloodlightActivitiesGeneratetagResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGeneratetag(req, new DfareportingFloodlightActivitiesGeneratetagSecurity("animi", "earum") {{
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

            DfareportingFloodlightActivitiesGetRequest req = new DfareportingFloodlightActivitiesGetRequest("quaerat", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "odio";
                key = "magni";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "commodi";
                uploadProtocol = "magni";
            }};            

            DfareportingFloodlightActivitiesGetResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesGet(req, new DfareportingFloodlightActivitiesGetSecurity("et", "iste") {{
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

            DfareportingFloodlightActivitiesInsertRequest req = new DfareportingFloodlightActivitiesInsertRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "vero";
                    advertiserId = "error";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "inventore";
                        etag = "ipsa";
                        id = "44a5de59-ac77-4066-b0cf-1cf593260525";
                        kind = "beatae";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "ex";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JSP;
                    countingMethod = FloodlightActivityCountingMethodEnum.TRANSACTIONS_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "non";
                            name = "Katie Lesch";
                            tag = "facere";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "provident";
                            name = "Omar Denesik";
                            tag = "amet";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "ipsam";
                            name = "Viola Beer";
                            tag = "velit";
                        }}),
                    }};
                    expectedUrl = "earum";
                    floodlightActivityGroupId = "recusandae";
                    floodlightActivityGroupName = "aliquid";
                    floodlightActivityGroupTagString = "impedit";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.SALE;
                    floodlightConfigurationId = "ad";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "perspiciatis";
                        etag = "delectus";
                        id = "358aaeac-ae32-43a3-9bf7-ba1cc97716c8";
                        kind = "accusantium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "minus";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.GLOBAL_SITE_TAG;
                    id = "sint";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptates";
                        etag = "alias";
                        id = "c7d9d323-f1aa-463e-99cf-1c856bcba51e";
                        kind = "maiores";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "numquam";
                    }};;
                    kind = "nemo";
                    name = "Kristi Haag";
                    notes = "dolorum";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "repellat";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "veritatis";
                                name = "Tonya Rosenbaum";
                                tag = "exercitationem";
                            }};
                            siteId = "ut";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "dolore";
                                etag = "numquam";
                                id = "a7562873-c7dd-49ef-af43-dc623620f313";
                                kind = "voluptatum";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "nesciunt";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "doloremque";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "at";
                                name = "Earl Smitham Sr.";
                                tag = "aspernatur";
                            }};
                            siteId = "earum";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "similique";
                                etag = "id";
                                id = "565fb8f6-52eb-4b9d-b838-38790243b293";
                                kind = "facere";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "soluta";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "neque";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "perferendis";
                                name = "Marshall Carter";
                                tag = "corporis";
                            }};
                            siteId = "alias";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "asperiores";
                                etag = "quibusdam";
                                id = "a04c8b1b-b55a-4292-b0bc-3bb744664eb1";
                                kind = "repellendus";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "non";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "ipsum";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "laudantium";
                                name = "Cesar Adams MD";
                                tag = "rerum";
                            }};
                            siteId = "architecto";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "in";
                                etag = "fuga";
                                id = "fee74b6f-eb94-457c-beda-f39d16fbf76f";
                                kind = "assumenda";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "eum";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.ACTIVE;
                    subaccountId = "quidem";
                    tagFormat = FloodlightActivityTagFormatEnum.HTML;
                    tagString = "doloremque";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U90),
                    }};
                }};;
                accessToken = "consectetur";
                alt = AltEnum.JSON;
                callback = "sed";
                fields = "dolor";
                key = "quidem";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "accusamus";
                uploadProtocol = "consectetur";
            }};            

            DfareportingFloodlightActivitiesInsertResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesInsert(req, new DfareportingFloodlightActivitiesInsertSecurity("tempora", "sequi") {{
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

            DfareportingFloodlightActivitiesListRequest req = new DfareportingFloodlightActivitiesListRequest("et") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "placeat";
                advertiserId = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "soluta";
                floodlightActivityGroupIds = new String[]{{
                    add("sequi"),
                    add("ab"),
                }};
                floodlightActivityGroupName = "consectetur";
                floodlightActivityGroupTagString = "ullam";
                floodlightActivityGroupType = DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum.COUNTER;
                floodlightConfigurationId = "consectetur";
                ids = new String[]{{
                    add("optio"),
                    add("earum"),
                    add("vitae"),
                    add("quisquam"),
                }};
                key = "fugit";
                maxResults = 7766L;
                oauthToken = "incidunt";
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "labore";
                searchString = "culpa";
                sortField = DfareportingFloodlightActivitiesListSortFieldEnum.NAME;
                sortOrder = DfareportingFloodlightActivitiesListSortOrderEnum.DESCENDING;
                tagString = "minus";
                uploadType = "sint";
                uploadProtocol = "occaecati";
            }};            

            DfareportingFloodlightActivitiesListResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesList(req, new DfareportingFloodlightActivitiesListSecurity("voluptatem", "labore") {{
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

            DfareportingFloodlightActivitiesPatchRequest req = new DfareportingFloodlightActivitiesPatchRequest("maxime", "ad") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "provident";
                    advertiserId = "exercitationem";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cum";
                        etag = "atque";
                        id = "648cefa7-8f1e-42d3-b901-e0952bbb4cbb";
                        kind = "inventore";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "voluptatibus";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JSP;
                    countingMethod = FloodlightActivityCountingMethodEnum.STANDARD_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "pariatur";
                            name = "Ronnie Nienow III";
                            tag = "molestias";
                        }}),
                    }};
                    expectedUrl = "impedit";
                    floodlightActivityGroupId = "quasi";
                    floodlightActivityGroupName = "nesciunt";
                    floodlightActivityGroupTagString = "corrupti";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "quia";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "odio";
                        etag = "dicta";
                        id = "e18ea9e4-5118-4c2c-857f-bd60b1a78ed2";
                        kind = "cupiditate";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "occaecati";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.GLOBAL_SITE_TAG;
                    id = "quaerat";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "itaque";
                        etag = "itaque";
                        id = "a85658c2-d4f4-4c88-be4f-278fd9667e46";
                        kind = "placeat";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dicta";
                    }};;
                    kind = "possimus";
                    name = "Camille Zulauf";
                    notes = "ad";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "temporibus";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "minus";
                                name = "Jerald Cormier";
                                tag = "minus";
                            }};
                            siteId = "natus";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "nostrum";
                                etag = "veniam";
                                id = "b9bdf219-0abd-49bb-8c27-25ec2659ce02";
                                kind = "totam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "corrupti";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "numquam";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "alias";
                                name = "Charlie Mante";
                                tag = "vel";
                            }};
                            siteId = "corrupti";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "voluptates";
                                etag = "modi";
                                id = "5c8addfa-c754-4500-830c-6632b4391fdf";
                                kind = "ipsa";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "nobis";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "adipisci";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "itaque";
                                name = "Albert Veum";
                                tag = "voluptate";
                            }};
                            siteId = "libero";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "quod";
                                etag = "ea";
                                id = "9d460a77-eceb-426d-90f1-ef2631c7c0f0";
                                kind = "repellat";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "ducimus";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.ACTIVE;
                    subaccountId = "sapiente";
                    tagFormat = FloodlightActivityTagFormatEnum.XHTML;
                    tagString = "facere";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U76),
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U14),
                    }};
                }};;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "non";
                key = "repudiandae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "incidunt";
                uploadProtocol = "deserunt";
            }};            

            DfareportingFloodlightActivitiesPatchResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesPatch(req, new DfareportingFloodlightActivitiesPatchSecurity("non", "officia") {{
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

            DfareportingFloodlightActivitiesUpdateRequest req = new DfareportingFloodlightActivitiesUpdateRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivity = new FloodlightActivity() {{
                    accountId = "ullam";
                    advertiserId = "dolor";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "maxime";
                        etag = "amet";
                        id = "025711f4-2c7e-47dc-948b-e09e41a7a215";
                        kind = "impedit";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "et";
                    }};;
                    attributionEnabled = false;
                    cacheBustingType = FloodlightActivityCacheBustingTypeEnum.JAVASCRIPT;
                    countingMethod = FloodlightActivityCountingMethodEnum.TRANSACTIONS_COUNTING;
                    defaultTags = new org.openapis.openapi.models.shared.FloodlightActivityDynamicTag[]{{
                        add(new FloodlightActivityDynamicTag() {{
                            id = "harum";
                            name = "Terrence Sporer";
                            tag = "omnis";
                        }}),
                        add(new FloodlightActivityDynamicTag() {{
                            id = "rem";
                            name = "Jonathan Mertz";
                            tag = "sapiente";
                        }}),
                    }};
                    expectedUrl = "assumenda";
                    floodlightActivityGroupId = "alias";
                    floodlightActivityGroupName = "eligendi";
                    floodlightActivityGroupTagString = "odio";
                    floodlightActivityGroupType = FloodlightActivityFloodlightActivityGroupTypeEnum.COUNTER;
                    floodlightConfigurationId = "eligendi";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ullam";
                        etag = "dolorem";
                        id = "e7e7d4ee-6e8b-490b-ac38-4e2396703fec";
                        kind = "adipisci";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "quo";
                    }};;
                    floodlightTagType = FloodlightActivityFloodlightTagTypeEnum.IMAGE;
                    id = "sit";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "deleniti";
                        etag = "qui";
                        id = "4d189a36-a6b2-4d27-ab70-7aa60c8fe46e";
                        kind = "commodi";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "voluptate";
                    }};;
                    kind = "voluptate";
                    name = "Willis Monahan";
                    notes = "dolor";
                    publisherTags = new org.openapis.openapi.models.shared.FloodlightActivityPublisherDynamicTag[]{{
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "dignissimos";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "eaque";
                                name = "Jan Rippin";
                                tag = "occaecati";
                            }};
                            siteId = "ducimus";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "aperiam";
                                etag = "repudiandae";
                                id = "e770e360-97ef-47c2-86e6-1b0d308714c2";
                                kind = "perferendis";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "ipsum";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "temporibus";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "perspiciatis";
                                name = "Nathaniel Dickinson";
                                tag = "est";
                            }};
                            siteId = "totam";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "corporis";
                                etag = "maxime";
                                id = "3fe65574-dbaf-494a-bc98-f13af28db2cf";
                                kind = "consequuntur";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "voluptatibus";
                            }};
                            viewThrough = false;
                        }}),
                        add(new FloodlightActivityPublisherDynamicTag() {{
                            clickThrough = false;
                            directorySiteId = "eius";
                            dynamicTag = new FloodlightActivityDynamicTag() {{
                                id = "voluptatibus";
                                name = "Meredith Thiel";
                                tag = "minima";
                            }};
                            siteId = "ea";
                            siteIdDimensionValue = new DimensionValue() {{
                                dimensionName = "fugiat";
                                etag = "esse";
                                id = "e14b21cd-9819-46d5-9af6-9a1c4b79ae33";
                                kind = "vel";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "beatae";
                            }};
                            viewThrough = false;
                        }}),
                    }};
                    secure = false;
                    sslCompliant = false;
                    sslRequired = false;
                    status = FloodlightActivityStatusEnum.DISABLED_POLICY;
                    subaccountId = "eos";
                    tagFormat = FloodlightActivityTagFormatEnum.HTML;
                    tagString = "eligendi";
                    userDefinedVariableTypes = new org.openapis.openapi.models.shared.FloodlightActivityUserDefinedVariableTypesEnum[]{{
                        add(FloodlightActivityUserDefinedVariableTypesEnum.U61),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "consequatur";
                key = "officiis";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "optio";
                uploadProtocol = "distinctio";
            }};            

            DfareportingFloodlightActivitiesUpdateResponse res = sdk.floodlightActivities.dfareportingFloodlightActivitiesUpdate(req, new DfareportingFloodlightActivitiesUpdateSecurity("quasi", "dolores") {{
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
