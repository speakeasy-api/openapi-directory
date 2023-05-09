# subaccounts

### Available Operations

* [dfareportingSubaccountsGet](#dfareportingsubaccountsget) - Gets one subaccount by ID.
* [dfareportingSubaccountsInsert](#dfareportingsubaccountsinsert) - Inserts a new subaccount.
* [dfareportingSubaccountsList](#dfareportingsubaccountslist) - Gets a list of subaccounts, possibly filtered. This method supports paging.
* [dfareportingSubaccountsPatch](#dfareportingsubaccountspatch) - Updates an existing subaccount. This method supports patch semantics.
* [dfareportingSubaccountsUpdate](#dfareportingsubaccountsupdate) - Updates an existing subaccount.

## dfareportingSubaccountsGet

Gets one subaccount by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSubaccountsGetRequest;
import org.openapis.openapi.models.operations.DfareportingSubaccountsGetResponse;
import org.openapis.openapi.models.operations.DfareportingSubaccountsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSubaccountsGetRequest req = new DfareportingSubaccountsGetRequest("cum", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "dolores";
                key = "eaque";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "dolore";
                uploadProtocol = "veritatis";
            }};            

            DfareportingSubaccountsGetResponse res = sdk.subaccounts.dfareportingSubaccountsGet(req, new DfareportingSubaccountsGetSecurity("porro", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subaccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSubaccountsInsert

Inserts a new subaccount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSubaccountsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingSubaccountsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingSubaccountsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Subaccount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSubaccountsInsertRequest req = new DfareportingSubaccountsInsertRequest("eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                subaccount = new Subaccount() {{
                    accountId = "nulla";
                    availablePermissionIds = new String[]{{
                        add("eligendi"),
                        add("optio"),
                    }};
                    id = "maiores";
                    kind = "animi";
                    name = "Gertrude Windler";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "sequi";
                fields = "beatae";
                key = "autem";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "voluptatibus";
                uploadProtocol = "incidunt";
            }};            

            DfareportingSubaccountsInsertResponse res = sdk.subaccounts.dfareportingSubaccountsInsert(req, new DfareportingSubaccountsInsertSecurity("veritatis", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subaccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSubaccountsList

Gets a list of subaccounts, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSubaccountsListRequest;
import org.openapis.openapi.models.operations.DfareportingSubaccountsListResponse;
import org.openapis.openapi.models.operations.DfareportingSubaccountsListSecurity;
import org.openapis.openapi.models.operations.DfareportingSubaccountsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingSubaccountsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSubaccountsListRequest req = new DfareportingSubaccountsListRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "quos";
                fields = "inventore";
                ids = new String[]{{
                    add("culpa"),
                    add("quos"),
                    add("reiciendis"),
                }};
                key = "ratione";
                maxResults = 913115L;
                oauthToken = "voluptate";
                pageToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "harum";
                searchString = "tempora";
                sortField = DfareportingSubaccountsListSortFieldEnum.ID;
                sortOrder = DfareportingSubaccountsListSortOrderEnum.ASCENDING;
                uploadType = "officia";
                uploadProtocol = "ex";
            }};            

            DfareportingSubaccountsListResponse res = sdk.subaccounts.dfareportingSubaccountsList(req, new DfareportingSubaccountsListSecurity("totam", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subaccountsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSubaccountsPatch

Updates an existing subaccount. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSubaccountsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingSubaccountsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingSubaccountsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Subaccount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSubaccountsPatchRequest req = new DfareportingSubaccountsPatchRequest("deserunt", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                subaccount = new Subaccount() {{
                    accountId = "impedit";
                    availablePermissionIds = new String[]{{
                        add("exercitationem"),
                        add("nam"),
                        add("aliquid"),
                        add("libero"),
                    }};
                    id = "magnam";
                    kind = "beatae";
                    name = "Ms. Susie Johnston";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "a";
                key = "vitae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "optio";
                uploadProtocol = "quia";
            }};            

            DfareportingSubaccountsPatchResponse res = sdk.subaccounts.dfareportingSubaccountsPatch(req, new DfareportingSubaccountsPatchSecurity("esse", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subaccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSubaccountsUpdate

Updates an existing subaccount.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSubaccountsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingSubaccountsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingSubaccountsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Subaccount;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSubaccountsUpdateRequest req = new DfareportingSubaccountsUpdateRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                subaccount = new Subaccount() {{
                    accountId = "hic";
                    availablePermissionIds = new String[]{{
                        add("voluptate"),
                    }};
                    id = "assumenda";
                    kind = "nesciunt";
                    name = "Tommy Bailey";
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "sed";
                key = "perferendis";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "ab";
                uploadProtocol = "eum";
            }};            

            DfareportingSubaccountsUpdateResponse res = sdk.subaccounts.dfareportingSubaccountsUpdate(req, new DfareportingSubaccountsUpdateSecurity("quia", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subaccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
