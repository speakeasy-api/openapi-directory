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

            DfareportingEventTagsDeleteRequest req = new DfareportingEventTagsDeleteRequest("dolores", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "neque";
                key = "minima";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "officiis";
                uploadProtocol = "sit";
            }};            

            DfareportingEventTagsDeleteResponse res = sdk.eventTags.dfareportingEventTagsDelete(req, new DfareportingEventTagsDeleteSecurity("quasi", "libero") {{
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

            DfareportingEventTagsGetRequest req = new DfareportingEventTagsGetRequest("tenetur", "dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "quidem";
                key = "ut";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "quae";
                uploadProtocol = "dolores";
            }};            

            DfareportingEventTagsGetResponse res = sdk.eventTags.dfareportingEventTagsGet(req, new DfareportingEventTagsGetSecurity("dolorum", "quod") {{
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

            DfareportingEventTagsInsertRequest req = new DfareportingEventTagsInsertRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                eventTag = new EventTag() {{
                    accountId = "voluptatem";
                    advertiserId = "incidunt";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "soluta";
                        etag = "a";
                        id = "1cc9fc61-aae5-4eb5-b0c4-92b5744d08a2";
                        kind = "odit";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "esse";
                    }};;
                    campaignId = "est";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "est";
                        etag = "accusamus";
                        id = "e79e3c71-ad31-4bec-b83d-2378ae3bfc23";
                        kind = "nulla";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "eius";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "ad";
                    kind = "aperiam";
                    name = "Stuart Ledner";
                    siteFilterType = EventTagSiteFilterTypeEnum.ALLOWLIST;
                    siteIds = new String[]{{
                        add("ad"),
                        add("cum"),
                        add("dolorum"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.DISABLED;
                    subaccountId = "nihil";
                    type = EventTagTypeEnum.IMPRESSION_IMAGE_EVENT_TAG;
                    url = "ducimus";
                    urlEscapeLevels = 948377;
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "magni";
                key = "laudantium";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "porro";
                uploadProtocol = "atque";
            }};            

            DfareportingEventTagsInsertResponse res = sdk.eventTags.dfareportingEventTagsInsert(req, new DfareportingEventTagsInsertSecurity("autem", "eius") {{
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

            DfareportingEventTagsListRequest req = new DfareportingEventTagsListRequest("unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                adId = "laudantium";
                advertiserId = "commodi";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                campaignId = "qui";
                definitionsOnly = false;
                enabled = false;
                eventTagTypes = new org.openapis.openapi.models.operations.DfareportingEventTagsListEventTagTypesEnum[]{{
                    add(DfareportingEventTagsListEventTagTypesEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG),
                    add(DfareportingEventTagsListEventTagTypesEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG),
                    add(DfareportingEventTagsListEventTagTypesEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG),
                    add(DfareportingEventTagsListEventTagTypesEnum.CLICK_THROUGH_EVENT_TAG),
                }};
                fields = "incidunt";
                ids = new String[]{{
                    add("quod"),
                    add("laboriosam"),
                    add("quidem"),
                    add("reprehenderit"),
                }};
                key = "praesentium";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "error";
                searchString = "alias";
                sortField = DfareportingEventTagsListSortFieldEnum.NAME;
                sortOrder = DfareportingEventTagsListSortOrderEnum.ASCENDING;
                uploadType = "sapiente";
                uploadProtocol = "illum";
            }};            

            DfareportingEventTagsListResponse res = sdk.eventTags.dfareportingEventTagsList(req, new DfareportingEventTagsListSecurity("nesciunt", "optio") {{
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

            DfareportingEventTagsPatchRequest req = new DfareportingEventTagsPatchRequest("corrupti", "inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                eventTag = new EventTag() {{
                    accountId = "culpa";
                    advertiserId = "dicta";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "perferendis";
                        etag = "asperiores";
                        id = "8c23df93-1da3-4edb-91fa-d94acc943513";
                        kind = "reprehenderit";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "magni";
                    }};;
                    campaignId = "ea";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quibusdam";
                        etag = "veritatis";
                        id = "5321b832-a56d-4691-80ff-60eb9a6658e6";
                        kind = "molestias";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "non";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "nam";
                    kind = "totam";
                    name = "Ethel Stanton";
                    siteFilterType = EventTagSiteFilterTypeEnum.ALLOWLIST;
                    siteIds = new String[]{{
                        add("harum"),
                        add("itaque"),
                        add("porro"),
                        add("ducimus"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "optio";
                    type = EventTagTypeEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG;
                    url = "corrupti";
                    urlEscapeLevels = 793068;
                }};;
                accessToken = "autem";
                alt = AltEnum.JSON;
                callback = "nisi";
                fields = "veniam";
                key = "cupiditate";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "atque";
                uploadProtocol = "minus";
            }};            

            DfareportingEventTagsPatchResponse res = sdk.eventTags.dfareportingEventTagsPatch(req, new DfareportingEventTagsPatchSecurity("debitis", "neque") {{
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

            DfareportingEventTagsUpdateRequest req = new DfareportingEventTagsUpdateRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                eventTag = new EventTag() {{
                    accountId = "quibusdam";
                    advertiserId = "deleniti";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quas";
                        etag = "magnam";
                        id = "9bf8214c-337f-496b-b0c6-9e372db1344b";
                        kind = "deserunt";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "doloribus";
                    }};;
                    campaignId = "reprehenderit";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "rem";
                        etag = "est";
                        id = "5c0ed7aa-b62e-4972-a1fb-0c58d27b5199";
                        kind = "ex";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "minima";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "expedita";
                    kind = "modi";
                    name = "Jon Bashirian";
                    siteFilterType = EventTagSiteFilterTypeEnum.BLOCKLIST;
                    siteIds = new String[]{{
                        add("quasi"),
                        add("odit"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.DISABLED;
                    subaccountId = "ducimus";
                    type = EventTagTypeEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG;
                    url = "ducimus";
                    urlEscapeLevels = 630969;
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "tempora";
                key = "modi";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "ducimus";
                uploadProtocol = "vitae";
            }};            

            DfareportingEventTagsUpdateResponse res = sdk.eventTags.dfareportingEventTagsUpdate(req, new DfareportingEventTagsUpdateSecurity("sit", "autem") {{
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
