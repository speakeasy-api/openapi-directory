# advertiserGroups

### Available Operations

* [dfareportingAdvertiserGroupsDelete](#dfareportingadvertisergroupsdelete) - Deletes an existing advertiser group.
* [dfareportingAdvertiserGroupsGet](#dfareportingadvertisergroupsget) - Gets one advertiser group by ID.
* [dfareportingAdvertiserGroupsInsert](#dfareportingadvertisergroupsinsert) - Inserts a new advertiser group.
* [dfareportingAdvertiserGroupsList](#dfareportingadvertisergroupslist) - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* [dfareportingAdvertiserGroupsPatch](#dfareportingadvertisergroupspatch) - Updates an existing advertiser group. This method supports patch semantics.
* [dfareportingAdvertiserGroupsUpdate](#dfareportingadvertisergroupsupdate) - Updates an existing advertiser group.

## dfareportingAdvertiserGroupsDelete

Deletes an existing advertiser group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserGroupsDeleteRequest req = new DfareportingAdvertiserGroupsDeleteRequest("quisquam", "sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "mollitia";
                key = "impedit";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "quas";
                uploadProtocol = "blanditiis";
            }};            

            DfareportingAdvertiserGroupsDeleteResponse res = sdk.advertiserGroups.dfareportingAdvertiserGroupsDelete(req, new DfareportingAdvertiserGroupsDeleteSecurity("cum", "dicta") {{
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

## dfareportingAdvertiserGroupsGet

Gets one advertiser group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserGroupsGetRequest req = new DfareportingAdvertiserGroupsGetRequest("impedit", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "quas";
                key = "impedit";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "recusandae";
                uploadProtocol = "ex";
            }};            

            DfareportingAdvertiserGroupsGetResponse res = sdk.advertiserGroups.dfareportingAdvertiserGroupsGet(req, new DfareportingAdvertiserGroupsGetSecurity("beatae", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiserGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserGroupsInsert

Inserts a new advertiser group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsInsertSecurity;
import org.openapis.openapi.models.shared.AdvertiserGroup;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserGroupsInsertRequest req = new DfareportingAdvertiserGroupsInsertRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                advertiserGroup = new AdvertiserGroup() {{
                    accountId = "vero";
                    id = "quidem";
                    kind = "illo";
                    name = "Cody Schiller";
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "earum";
                key = "quod";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "ipsum";
                uploadProtocol = "ducimus";
            }};            

            DfareportingAdvertiserGroupsInsertResponse res = sdk.advertiserGroups.dfareportingAdvertiserGroupsInsert(req, new DfareportingAdvertiserGroupsInsertSecurity("laudantium", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiserGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserGroupsList

Retrieves a list of advertiser groups, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsListSecurity;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserGroupsListRequest req = new DfareportingAdvertiserGroupsListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "iusto";
                ids = new String[]{{
                    add("magnam"),
                    add("odio"),
                }};
                key = "nulla";
                maxResults = 771406L;
                oauthToken = "cupiditate";
                pageToken = "illo";
                prettyPrint = false;
                quotaUser = "exercitationem";
                searchString = "laborum";
                sortField = DfareportingAdvertiserGroupsListSortFieldEnum.NAME;
                sortOrder = DfareportingAdvertiserGroupsListSortOrderEnum.ASCENDING;
                uploadType = "maxime";
                uploadProtocol = "dolorum";
            }};            

            DfareportingAdvertiserGroupsListResponse res = sdk.advertiserGroups.dfareportingAdvertiserGroupsList(req, new DfareportingAdvertiserGroupsListSecurity("repellat", "nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiserGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserGroupsPatch

Updates an existing advertiser group. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AdvertiserGroup;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserGroupsPatchRequest req = new DfareportingAdvertiserGroupsPatchRequest("illum", "quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                advertiserGroup = new AdvertiserGroup() {{
                    accountId = "esse";
                    id = "explicabo";
                    kind = "consectetur";
                    name = "Benny Beier";
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "sapiente";
                key = "neque";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "harum";
                uploadProtocol = "ducimus";
            }};            

            DfareportingAdvertiserGroupsPatchResponse res = sdk.advertiserGroups.dfareportingAdvertiserGroupsPatch(req, new DfareportingAdvertiserGroupsPatchSecurity("doloremque", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiserGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserGroupsUpdate

Updates an existing advertiser group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AdvertiserGroup;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserGroupsUpdateRequest req = new DfareportingAdvertiserGroupsUpdateRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                advertiserGroup = new AdvertiserGroup() {{
                    accountId = "corrupti";
                    id = "molestiae";
                    kind = "quis";
                    name = "Virginia Hackett";
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "quisquam";
                key = "provident";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "nemo";
                uploadProtocol = "enim";
            }};            

            DfareportingAdvertiserGroupsUpdateResponse res = sdk.advertiserGroups.dfareportingAdvertiserGroupsUpdate(req, new DfareportingAdvertiserGroupsUpdateSecurity("ipsam", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiserGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
