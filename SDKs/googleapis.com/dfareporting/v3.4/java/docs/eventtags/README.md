# eventTags

### Available Operations

* [dfareportingEventTagsDelete](#dfareportingeventtagsdelete) - Deletes an existing event tag.
* [dfareportingEventTagsGet](#dfareportingeventtagsget) - Gets one event tag by ID.
* [dfareportingEventTagsInsert](#dfareportingeventtagsinsert) - Inserts a new event tag.
* [dfareportingEventTagsList](#dfareportingeventtagslist) - Retrieves a list of event tags, possibly filtered.
* [dfareportingEventTagsPatch](#dfareportingeventtagspatch) - Updates an existing event tag. This method supports patch semantics.
* [dfareportingEventTagsUpdate](#dfareportingeventtagsupdate) - Updates an existing event tag.

## dfareportingEventTagsDelete

Deletes an existing event tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingEventTagsDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingEventTagsDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingEventTagsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingEventTagsDeleteRequest req = new DfareportingEventTagsDeleteRequest("tempore", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "accusantium";
                key = "recusandae";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "iusto";
                uploadProtocol = "quasi";
            }};            

            DfareportingEventTagsDeleteResponse res = sdk.eventTags.dfareportingEventTagsDelete(req, new DfareportingEventTagsDeleteSecurity("odit", "tempore") {{
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

## dfareportingEventTagsGet

Gets one event tag by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingEventTagsGetRequest;
import org.openapis.openapi.models.operations.DfareportingEventTagsGetResponse;
import org.openapis.openapi.models.operations.DfareportingEventTagsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingEventTagsGetRequest req = new DfareportingEventTagsGetRequest("ducimus", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "adipisci";
                key = "tempora";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "inventore";
                uploadProtocol = "ducimus";
            }};            

            DfareportingEventTagsGetResponse res = sdk.eventTags.dfareportingEventTagsGet(req, new DfareportingEventTagsGetSecurity("vitae", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eventTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingEventTagsInsert

Inserts a new event tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingEventTagsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingEventTagsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingEventTagsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTag;
import org.openapis.openapi.models.shared.EventTagSiteFilterTypeEnum;
import org.openapis.openapi.models.shared.EventTagStatusEnum;
import org.openapis.openapi.models.shared.EventTagTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingEventTagsInsertRequest req = new DfareportingEventTagsInsertRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                eventTag = new EventTag() {{
                    accountId = "deleniti";
                    advertiserId = "illum";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "necessitatibus";
                        etag = "vero";
                        id = "bef897f3-dd0c-4cd3-bf11-b3e4e080aa10";
                        kind = "incidunt";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "deleniti";
                    }};;
                    campaignId = "eum";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "accusamus";
                        etag = "optio";
                        id = "759e02f3-702c-45c8-a2d3-0ead3104fa44";
                        kind = "iure";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "molestiae";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "rerum";
                    kind = "voluptatibus";
                    name = "Dora Hane";
                    siteFilterType = EventTagSiteFilterTypeEnum.WHITELIST;
                    siteIds = new String[]{{
                        add("quas"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "laudantium";
                    type = EventTagTypeEnum.IMPRESSION_IMAGE_EVENT_TAG;
                    url = "et";
                    urlEscapeLevels = 967492;
                }};;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "hic";
                key = "eum";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "veniam";
                uploadProtocol = "unde";
            }};            

            DfareportingEventTagsInsertResponse res = sdk.eventTags.dfareportingEventTagsInsert(req, new DfareportingEventTagsInsertSecurity("consequuntur", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eventTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingEventTagsList

Retrieves a list of event tags, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingEventTagsListEventTagTypesEnum;
import org.openapis.openapi.models.operations.DfareportingEventTagsListRequest;
import org.openapis.openapi.models.operations.DfareportingEventTagsListResponse;
import org.openapis.openapi.models.operations.DfareportingEventTagsListSecurity;
import org.openapis.openapi.models.operations.DfareportingEventTagsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingEventTagsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingEventTagsListRequest req = new DfareportingEventTagsListRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                adId = "ab";
                advertiserId = "quo";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                campaignId = "pariatur";
                definitionsOnly = false;
                enabled = false;
                eventTagTypes = new org.openapis.openapi.models.operations.DfareportingEventTagsListEventTagTypesEnum[]{{
                    add(DfareportingEventTagsListEventTagTypesEnum.CLICK_THROUGH_EVENT_TAG),
                }};
                fields = "facere";
                ids = new String[]{{
                    add("fugit"),
                    add("quis"),
                }};
                key = "voluptatum";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "doloremque";
                searchString = "amet";
                sortField = DfareportingEventTagsListSortFieldEnum.ID;
                sortOrder = DfareportingEventTagsListSortOrderEnum.DESCENDING;
                uploadType = "laborum";
                uploadProtocol = "quas";
            }};            

            DfareportingEventTagsListResponse res = sdk.eventTags.dfareportingEventTagsList(req, new DfareportingEventTagsListSecurity("odit", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eventTagsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingEventTagsPatch

Updates an existing event tag. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingEventTagsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingEventTagsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingEventTagsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTag;
import org.openapis.openapi.models.shared.EventTagSiteFilterTypeEnum;
import org.openapis.openapi.models.shared.EventTagStatusEnum;
import org.openapis.openapi.models.shared.EventTagTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingEventTagsPatchRequest req = new DfareportingEventTagsPatchRequest("rem", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                eventTag = new EventTag() {{
                    accountId = "repellat";
                    advertiserId = "eveniet";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "odit";
                        etag = "quam";
                        id = "51a2047c-0449-4e14-bf96-19bb7d40d5a1";
                        kind = "quae";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "est";
                    }};;
                    campaignId = "modi";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nesciunt";
                        etag = "autem";
                        id = "e6259233-f95c-49d2-b739-7c785b5db4f5";
                        kind = "aut";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "vitae";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "quos";
                    kind = "adipisci";
                    name = "Erick Rippin";
                    siteFilterType = EventTagSiteFilterTypeEnum.WHITELIST;
                    siteIds = new String[]{{
                        add("aliquid"),
                        add("nobis"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "consequuntur";
                    type = EventTagTypeEnum.IMPRESSION_IMAGE_EVENT_TAG;
                    url = "autem";
                    urlEscapeLevels = 865309;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "ad";
                key = "voluptatem";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "qui";
                uploadProtocol = "dolorum";
            }};            

            DfareportingEventTagsPatchResponse res = sdk.eventTags.dfareportingEventTagsPatch(req, new DfareportingEventTagsPatchSecurity("ad", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eventTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingEventTagsUpdate

Updates an existing event tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingEventTagsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingEventTagsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingEventTagsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTag;
import org.openapis.openapi.models.shared.EventTagSiteFilterTypeEnum;
import org.openapis.openapi.models.shared.EventTagStatusEnum;
import org.openapis.openapi.models.shared.EventTagTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingEventTagsUpdateRequest req = new DfareportingEventTagsUpdateRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                eventTag = new EventTag() {{
                    accountId = "officiis";
                    advertiserId = "fugiat";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "minus";
                        etag = "tempora";
                        id = "39ed8c43-20f4-4124-8d44-87ac693b94c3";
                        kind = "quidem";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "fugiat";
                    }};;
                    campaignId = "magni";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "modi";
                        etag = "atque";
                        id = "8d795aa4-2fc4-4056-a9f6-9a006d212494";
                        kind = "ullam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "atque";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "quasi";
                    kind = "natus";
                    name = "Lonnie Ryan";
                    siteFilterType = EventTagSiteFilterTypeEnum.WHITELIST;
                    siteIds = new String[]{{
                        add("magnam"),
                        add("illo"),
                        add("atque"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "incidunt";
                    type = EventTagTypeEnum.IMPRESSION_IMAGE_EVENT_TAG;
                    url = "nisi";
                    urlEscapeLevels = 60521;
                }};;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "nesciunt";
                key = "veritatis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "perferendis";
                uploadProtocol = "qui";
            }};            

            DfareportingEventTagsUpdateResponse res = sdk.eventTags.dfareportingEventTagsUpdate(req, new DfareportingEventTagsUpdateSecurity("velit", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eventTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
