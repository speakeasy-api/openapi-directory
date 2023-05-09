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

            DfareportingSubaccountsGetRequest req = new DfareportingSubaccountsGetRequest("saepe", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "dignissimos";
                key = "reiciendis";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "voluptatem";
                uploadProtocol = "quidem";
            }};            

            DfareportingSubaccountsGetResponse res = sdk.subaccounts.dfareportingSubaccountsGet(req, new DfareportingSubaccountsGetSecurity("ex", "dolore") {{
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

            DfareportingSubaccountsInsertRequest req = new DfareportingSubaccountsInsertRequest("quas") {{
                dollarXgafv = XgafvEnum.ONE;
                subaccount = new Subaccount() {{
                    accountId = "reprehenderit";
                    availablePermissionIds = new String[]{{
                        add("placeat"),
                        add("perspiciatis"),
                    }};
                    id = "harum";
                    kind = "asperiores";
                    name = "Miss Bruce Greenfelder";
                }};;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "quis";
                key = "doloribus";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "officiis";
                uploadProtocol = "in";
            }};            

            DfareportingSubaccountsInsertResponse res = sdk.subaccounts.dfareportingSubaccountsInsert(req, new DfareportingSubaccountsInsertSecurity("minus", "suscipit") {{
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

            DfareportingSubaccountsListRequest req = new DfareportingSubaccountsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "eligendi";
                ids = new String[]{{
                    add("optio"),
                }};
                key = "impedit";
                maxResults = 923769L;
                oauthToken = "dolores";
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "quas";
                searchString = "illo";
                sortField = DfareportingSubaccountsListSortFieldEnum.NAME;
                sortOrder = DfareportingSubaccountsListSortOrderEnum.ASCENDING;
                uploadType = "quia";
                uploadProtocol = "tempora";
            }};            

            DfareportingSubaccountsListResponse res = sdk.subaccounts.dfareportingSubaccountsList(req, new DfareportingSubaccountsListSecurity("voluptates", "qui") {{
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

            DfareportingSubaccountsPatchRequest req = new DfareportingSubaccountsPatchRequest("ipsa", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                subaccount = new Subaccount() {{
                    accountId = "nemo";
                    availablePermissionIds = new String[]{{
                        add("sequi"),
                    }};
                    id = "necessitatibus";
                    kind = "laboriosam";
                    name = "Vivian Schamberger";
                }};;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "fugiat";
                key = "quas";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "ex";
                uploadProtocol = "voluptatem";
            }};            

            DfareportingSubaccountsPatchResponse res = sdk.subaccounts.dfareportingSubaccountsPatch(req, new DfareportingSubaccountsPatchSecurity("nisi", "ullam") {{
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

            DfareportingSubaccountsUpdateRequest req = new DfareportingSubaccountsUpdateRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                subaccount = new Subaccount() {{
                    accountId = "aut";
                    availablePermissionIds = new String[]{{
                        add("soluta"),
                        add("voluptatem"),
                        add("commodi"),
                        add("vero"),
                    }};
                    id = "sed";
                    kind = "quasi";
                    name = "Luther Nienow";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "nostrum";
                key = "id";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "officiis";
                uploadProtocol = "facilis";
            }};            

            DfareportingSubaccountsUpdateResponse res = sdk.subaccounts.dfareportingSubaccountsUpdate(req, new DfareportingSubaccountsUpdateSecurity("voluptas", "minus") {{
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
