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

            DfareportingEventTagsDeleteRequest req = new DfareportingEventTagsDeleteRequest("animi", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "quasi";
                key = "quidem";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "exercitationem";
                uploadProtocol = "similique";
            }};            

            DfareportingEventTagsDeleteResponse res = sdk.eventTags.dfareportingEventTagsDelete(req, new DfareportingEventTagsDeleteSecurity("magni", "unde") {{
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

            DfareportingEventTagsGetRequest req = new DfareportingEventTagsGetRequest("consequuntur", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "libero";
                key = "expedita";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "aliquam";
                uploadProtocol = "laboriosam";
            }};            

            DfareportingEventTagsGetResponse res = sdk.eventTags.dfareportingEventTagsGet(req, new DfareportingEventTagsGetSecurity("nisi", "labore") {{
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

            DfareportingEventTagsInsertRequest req = new DfareportingEventTagsInsertRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                eventTag = new EventTag() {{
                    accountId = "sunt";
                    advertiserId = "repellendus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptatem";
                        etag = "non";
                        id = "388b0d1b-b17a-4fee-b4b6-feb9457c7eda";
                        kind = "reiciendis";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "provident";
                    }};;
                    campaignId = "possimus";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "illo";
                        etag = "autem";
                        id = "fbf76fd1-62b3-403e-b023-b93e34316cf5";
                        kind = "nemo";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "magnam";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "sequi";
                    kind = "ab";
                    name = "Samantha Hermann";
                    siteFilterType = EventTagSiteFilterTypeEnum.BLOCKLIST;
                    siteIds = new String[]{{
                        add("vitae"),
                        add("quisquam"),
                        add("fugit"),
                        add("consequatur"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "placeat";
                    type = EventTagTypeEnum.IMPRESSION_IMAGE_EVENT_TAG;
                    url = "culpa";
                    urlEscapeLevels = 846305;
                }};;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "occaecati";
                key = "voluptatem";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "ad";
                uploadProtocol = "illo";
            }};            

            DfareportingEventTagsInsertResponse res = sdk.eventTags.dfareportingEventTagsInsert(req, new DfareportingEventTagsInsertSecurity("provident", "exercitationem") {{
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

            DfareportingEventTagsListRequest req = new DfareportingEventTagsListRequest("cum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                adId = "labore";
                advertiserId = "praesentium";
                alt = AltEnum.PROTO;
                callback = "officiis";
                campaignId = "voluptatibus";
                definitionsOnly = false;
                enabled = false;
                eventTagTypes = new org.openapis.openapi.models.operations.DfareportingEventTagsListEventTagTypesEnum[]{{
                    add(DfareportingEventTagsListEventTagTypesEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG),
                    add(DfareportingEventTagsListEventTagTypesEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG),
                    add(DfareportingEventTagsListEventTagTypesEnum.CLICK_THROUGH_EVENT_TAG),
                }};
                fields = "ab";
                ids = new String[]{{
                    add("eos"),
                    add("facere"),
                    add("nesciunt"),
                    add("libero"),
                }};
                key = "error";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "beatae";
                searchString = "saepe";
                sortField = DfareportingEventTagsListSortFieldEnum.ID;
                sortOrder = DfareportingEventTagsListSortOrderEnum.DESCENDING;
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            DfareportingEventTagsListResponse res = sdk.eventTags.dfareportingEventTagsList(req, new DfareportingEventTagsListSecurity("distinctio", "harum") {{
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

            DfareportingEventTagsPatchRequest req = new DfareportingEventTagsPatchRequest("quidem", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                eventTag = new EventTag() {{
                    accountId = "harum";
                    advertiserId = "quidem";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "inventore";
                        etag = "iste";
                        id = "f713d95a-4169-4c13-8727-1e18ea9e4511";
                        kind = "deleniti";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "fugit";
                    }};;
                    campaignId = "optio";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quo";
                        etag = "minima";
                        id = "7fbd60b1-a78e-4d29-a9d4-eea85658c2d4";
                        kind = "delectus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "optio";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "laudantium";
                    kind = "quas";
                    name = "Pat Grant";
                    siteFilterType = EventTagSiteFilterTypeEnum.ALLOWLIST;
                    siteIds = new String[]{{
                        add("tenetur"),
                        add("fugiat"),
                        add("unde"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.ENABLED;
                    subaccountId = "ea";
                    type = EventTagTypeEnum.IMPRESSION_JAVASCRIPT_EVENT_TAG;
                    url = "accusamus";
                    urlEscapeLevels = 289208;
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "dicta";
                key = "possimus";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "repellat";
                uploadProtocol = "id";
            }};            

            DfareportingEventTagsPatchResponse res = sdk.eventTags.dfareportingEventTagsPatch(req, new DfareportingEventTagsPatchSecurity("fuga", "ad") {{
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
                    accountId = "minus";
                    advertiserId = "voluptates";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repellat";
                        etag = "sed";
                        id = "34c955b9-bdf2-4190-abd9-bbcc2725ec26";
                        kind = "ipsam";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quisquam";
                    }};;
                    campaignId = "debitis";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsa";
                        etag = "quia";
                        id = "80840c69-ef68-4e45-88ad-dfac75450043";
                        kind = "aperiam";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "eum";
                    }};;
                    enabledByDefault = false;
                    excludeFromAdxRequests = false;
                    id = "commodi";
                    kind = "amet";
                    name = "Olivia Gulgowski";
                    siteFilterType = EventTagSiteFilterTypeEnum.ALLOWLIST;
                    siteIds = new String[]{{
                        add("temporibus"),
                        add("sapiente"),
                        add("ipsa"),
                        add("vitae"),
                    }};
                    sslCompliant = false;
                    status = EventTagStatusEnum.DISABLED;
                    subaccountId = "adipisci";
                    type = EventTagTypeEnum.CLICK_THROUGH_EVENT_TAG;
                    url = "unde";
                    urlEscapeLevels = 107129;
                }};;
                accessToken = "eveniet";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                fields = "voluptate";
                key = "libero";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "error";
                uploadProtocol = "at";
            }};            

            DfareportingEventTagsUpdateResponse res = sdk.eventTags.dfareportingEventTagsUpdate(req, new DfareportingEventTagsUpdateSecurity("incidunt", "autem") {{
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
