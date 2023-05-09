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

            DfareportingSubaccountsGetRequest req = new DfareportingSubaccountsGetRequest("non", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "deserunt";
                key = "fugit";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "commodi";
                uploadProtocol = "quod";
            }};            

            DfareportingSubaccountsGetResponse res = sdk.subaccounts.dfareportingSubaccountsGet(req, new DfareportingSubaccountsGetSecurity("hic", "ratione") {{
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

            DfareportingSubaccountsInsertRequest req = new DfareportingSubaccountsInsertRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                subaccount = new Subaccount() {{
                    accountId = "distinctio";
                    availablePermissionIds = new String[]{{
                        add("ex"),
                    }};
                    id = "error";
                    kind = "adipisci";
                    name = "Lillian Ruecker";
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "provident";
                key = "omnis";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "vitae";
                uploadProtocol = "placeat";
            }};            

            DfareportingSubaccountsInsertResponse res = sdk.subaccounts.dfareportingSubaccountsInsert(req, new DfareportingSubaccountsInsertSecurity("eius", "optio") {{
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

            DfareportingSubaccountsListRequest req = new DfareportingSubaccountsListRequest("optio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "reiciendis";
                ids = new String[]{{
                    add("illum"),
                    add("perferendis"),
                    add("dolore"),
                }};
                key = "vel";
                maxResults = 610935L;
                oauthToken = "impedit";
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "odit";
                searchString = "cupiditate";
                sortField = DfareportingSubaccountsListSortFieldEnum.NAME;
                sortOrder = DfareportingSubaccountsListSortOrderEnum.DESCENDING;
                uploadType = "optio";
                uploadProtocol = "tempore";
            }};            

            DfareportingSubaccountsListResponse res = sdk.subaccounts.dfareportingSubaccountsList(req, new DfareportingSubaccountsListSecurity("quidem", "ad") {{
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

            DfareportingSubaccountsPatchRequest req = new DfareportingSubaccountsPatchRequest("eos", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                subaccount = new Subaccount() {{
                    accountId = "occaecati";
                    availablePermissionIds = new String[]{{
                        add("consequatur"),
                        add("qui"),
                        add("tempora"),
                        add("porro"),
                    }};
                    id = "odio";
                    kind = "numquam";
                    name = "Jenna Reichel MD";
                }};;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "illo";
                key = "fuga";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "officiis";
                uploadProtocol = "expedita";
            }};            

            DfareportingSubaccountsPatchResponse res = sdk.subaccounts.dfareportingSubaccountsPatch(req, new DfareportingSubaccountsPatchSecurity("quaerat", "dolor") {{
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

            DfareportingSubaccountsUpdateRequest req = new DfareportingSubaccountsUpdateRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                subaccount = new Subaccount() {{
                    accountId = "esse";
                    availablePermissionIds = new String[]{{
                        add("ratione"),
                    }};
                    id = "repellendus";
                    kind = "vero";
                    name = "Gregg Langworth";
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "tempora";
                key = "laboriosam";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "odit";
                uploadProtocol = "eius";
            }};            

            DfareportingSubaccountsUpdateResponse res = sdk.subaccounts.dfareportingSubaccountsUpdate(req, new DfareportingSubaccountsUpdateSecurity("natus", "cumque") {{
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
