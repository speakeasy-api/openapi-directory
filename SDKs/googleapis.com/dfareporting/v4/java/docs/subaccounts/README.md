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

            DfareportingSubaccountsGetRequest req = new DfareportingSubaccountsGetRequest("veritatis", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "cum";
                key = "nisi";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "voluptates";
                uploadProtocol = "magni";
            }};            

            DfareportingSubaccountsGetResponse res = sdk.subaccounts.dfareportingSubaccountsGet(req, new DfareportingSubaccountsGetSecurity("perspiciatis", "est") {{
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

            DfareportingSubaccountsInsertRequest req = new DfareportingSubaccountsInsertRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                subaccount = new Subaccount() {{
                    accountId = "a";
                    availablePermissionIds = new String[]{{
                        add("architecto"),
                    }};
                    id = "consequatur";
                    kind = "quasi";
                    name = "Brandon Schimmel";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "exercitationem";
                key = "rerum";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "ipsa";
                uploadProtocol = "ab";
            }};            

            DfareportingSubaccountsInsertResponse res = sdk.subaccounts.dfareportingSubaccountsInsert(req, new DfareportingSubaccountsInsertSecurity("minus", "aliquam") {{
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

            DfareportingSubaccountsListRequest req = new DfareportingSubaccountsListRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "atque";
                ids = new String[]{{
                    add("corporis"),
                    add("fugit"),
                    add("nostrum"),
                    add("fugit"),
                }};
                key = "voluptates";
                maxResults = 215097L;
                oauthToken = "eos";
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "ratione";
                searchString = "reprehenderit";
                sortField = DfareportingSubaccountsListSortFieldEnum.ID;
                sortOrder = DfareportingSubaccountsListSortOrderEnum.ASCENDING;
                uploadType = "vitae";
                uploadProtocol = "incidunt";
            }};            

            DfareportingSubaccountsListResponse res = sdk.subaccounts.dfareportingSubaccountsList(req, new DfareportingSubaccountsListSecurity("quia", "cumque") {{
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

            DfareportingSubaccountsPatchRequest req = new DfareportingSubaccountsPatchRequest("quo", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                subaccount = new Subaccount() {{
                    accountId = "necessitatibus";
                    availablePermissionIds = new String[]{{
                        add("nisi"),
                        add("fuga"),
                        add("eligendi"),
                        add("architecto"),
                    }};
                    id = "quia";
                    kind = "libero";
                    name = "Cory Funk V";
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "aut";
                key = "laborum";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "minus";
                uploadProtocol = "consectetur";
            }};            

            DfareportingSubaccountsPatchResponse res = sdk.subaccounts.dfareportingSubaccountsPatch(req, new DfareportingSubaccountsPatchSecurity("aperiam", "minima") {{
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

            DfareportingSubaccountsUpdateRequest req = new DfareportingSubaccountsUpdateRequest("minima") {{
                dollarXgafv = XgafvEnum.ONE;
                subaccount = new Subaccount() {{
                    accountId = "sed";
                    availablePermissionIds = new String[]{{
                        add("reprehenderit"),
                        add("iure"),
                        add("quo"),
                        add("magni"),
                    }};
                    id = "consequatur";
                    kind = "alias";
                    name = "Sherman Boyle";
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "velit";
                key = "dignissimos";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sint";
                uploadProtocol = "alias";
            }};            

            DfareportingSubaccountsUpdateResponse res = sdk.subaccounts.dfareportingSubaccountsUpdate(req, new DfareportingSubaccountsUpdateSecurity("voluptas", "nemo") {{
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
