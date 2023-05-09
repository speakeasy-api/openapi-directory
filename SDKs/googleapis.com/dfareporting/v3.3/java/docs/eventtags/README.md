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

            DfareportingEventTagsDeleteRequest req = new DfareportingEventTagsDeleteRequest("accusantium", "recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "odit";
                key = "tempore";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "ducimus";
                uploadProtocol = "similique";
            }};            

            DfareportingEventTagsDeleteResponse res = sdk.eventTags.dfareportingEventTagsDelete(req, new DfareportingEventTagsDeleteSecurity("expedita", "voluptatem") {{
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

            DfareportingEventTagsGetRequest req = new DfareportingEventTagsGetRequest("adipisci", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "ducimus";
                fields = "vitae";
                key = "sit";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "deleniti";
                uploadProtocol = "illum";
            }};            

            DfareportingEventTagsGetResponse res = sdk.eventTags.dfareportingEventTagsGet(req, new DfareportingEventTagsGetSecurity("necessitatibus", "vero") {{
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

            DfareportingEventTagsInsertRequest req = new DfareportingEventTagsInsertRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                eventTag = new EventTag() {{
                    accountId = "asperiores";
                    advertiserId = "rem";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "perspiciatis";
                        etag = "quam";
                        id = "f3dd0ccd-33f1-41b3-a4e0-80aa104186ec";
                        kind = "odio";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "provident";
                    }};;
                    campaignId = "officiis";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsa";
                        etag = "eos";
                        id = "f3702c5c-8e2d-430e-ad31-04fa44707bf3";
                        kind = "ducimus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "libero";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "ut";
                    kind = "tempora";
                    name = "Tracey Collins";
                    siteFilterType = EventTagSiteFilterTypeEnum.WHITELIST;
                    siteIds = new String[]{{
                        add("nulla"),
                        add("libero"),
                        add("sed"),
                        add("hic"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "sint";
                    type = EventTagTypeEnum.CLICK_THROUGH_EVENT_TAG;
                    url = "veniam";
                    urlEscapeLevels = 602681;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                fields = "quisquam";
                key = "dignissimos";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "optio";
                uploadProtocol = "voluptatum";
            }};            

            DfareportingEventTagsInsertResponse res = sdk.eventTags.dfareportingEventTagsInsert(req, new DfareportingEventTagsInsertSecurity("pariatur", "sequi") {{
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

            DfareportingEventTagsListRequest req = new DfareportingEventTagsListRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                adId = "fugit";
                advertiserId = "quis";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                campaignId = "doloremque";
                definitionsOnly = false;
                enabled = false;
                eventTagTypes = new org.openapis.openapi.models.operations.DfareportingEventTagsListEventTagTypesEnum[]{{
                    add(DfareportingEventTagsListEventTagTypesEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG),
                }};
                fields = "deleniti";
                ids = new String[]{{
                    add("quas"),
                    add("odit"),
                    add("placeat"),
                }};
                key = "rem";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "atque";
                searchString = "repellat";
                sortField = DfareportingEventTagsListSortFieldEnum.NAME;
                sortOrder = DfareportingEventTagsListSortOrderEnum.ASCENDING;
                uploadType = "quam";
                uploadProtocol = "ullam";
            }};            

            DfareportingEventTagsListResponse res = sdk.eventTags.dfareportingEventTagsList(req, new DfareportingEventTagsListSecurity("inventore", "laborum") {{
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

            DfareportingEventTagsPatchRequest req = new DfareportingEventTagsPatchRequest("fugit", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                eventTag = new EventTag() {{
                    accountId = "ducimus";
                    advertiserId = "quod";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aut";
                        etag = "numquam";
                        id = "49e143f9-619b-4b7d-80d5-a11fa436e625";
                        kind = "natus";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "velit";
                    }};;
                    campaignId = "adipisci";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "hic";
                        etag = "natus";
                        id = "5c9d2373-97c7-485b-9db4-f500183febdf";
                        kind = "ea";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "aliquid";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "nobis";
                    kind = "reprehenderit";
                    name = "Ruth Jones";
                    siteFilterType = EventTagSiteFilterTypeEnum.BLACKLIST;
                    siteIds = new String[]{{
                        add("ad"),
                        add("voluptatem"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "enim";
                    type = EventTagTypeEnum.IMPRESSION_IMAGE_EVENT_TAG;
                    url = "dolorum";
                    urlEscapeLevels = 322703;
                }};;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "in";
                fields = "officiis";
                key = "fugiat";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "sequi";
                uploadProtocol = "natus";
            }};            

            DfareportingEventTagsPatchResponse res = sdk.eventTags.dfareportingEventTagsPatch(req, new DfareportingEventTagsPatchSecurity("saepe", "quibusdam") {{
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

            DfareportingEventTagsUpdateRequest req = new DfareportingEventTagsUpdateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                eventTag = new EventTag() {{
                    accountId = "aliquam";
                    advertiserId = "adipisci";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "explicabo";
                        etag = "eaque";
                        id = "f41240d4-487a-4c69-bb94-c3b9d2488d79";
                        kind = "ad";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "fuga";
                    }};;
                    campaignId = "incidunt";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aspernatur";
                        etag = "asperiores";
                        id = "c405669f-69a0-406d-a124-9450819d7c3b";
                        kind = "et";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "magnam";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "illo";
                    kind = "atque";
                    name = "Eva Adams PhD";
                    siteFilterType = EventTagSiteFilterTypeEnum.WHITELIST;
                    siteIds = new String[]{{
                        add("nesciunt"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "ipsa";
                    type = EventTagTypeEnum.CLICK_THROUGH_EVENT_TAG;
                    url = "perferendis";
                    urlEscapeLevels = 186103;
                }};;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "error";
                key = "ipsa";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "veniam";
                uploadProtocol = "animi";
            }};            

            DfareportingEventTagsUpdateResponse res = sdk.eventTags.dfareportingEventTagsUpdate(req, new DfareportingEventTagsUpdateSecurity("delectus", "pariatur") {{
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
