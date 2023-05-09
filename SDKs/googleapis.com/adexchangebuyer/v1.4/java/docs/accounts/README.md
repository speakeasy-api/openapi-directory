# accounts

### Available Operations

* [adexchangebuyerAccountsGet](#adexchangebuyeraccountsget) - Gets one account by ID.
* [adexchangebuyerAccountsList](#adexchangebuyeraccountslist) - Retrieves the authenticated user's list of accounts.
* [adexchangebuyerAccountsPatch](#adexchangebuyeraccountspatch) - Updates an existing account. This method supports patch semantics.
* [adexchangebuyerAccountsUpdate](#adexchangebuyeraccountsupdate) - Updates an existing account.

## adexchangebuyerAccountsGet

Gets one account by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerAccountsGetRequest req = new AdexchangebuyerAccountsGetRequest(423655L) {{
                alt = AltEnum.JSON;
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                userIp = "magnam";
            }};            

            AdexchangebuyerAccountsGetResponse res = sdk.accounts.adexchangebuyerAccountsGet(req, new AdexchangebuyerAccountsGetSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerAccountsList

Retrieves the authenticated user's list of accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerAccountsListRequest req = new AdexchangebuyerAccountsListRequest() {{
                alt = AltEnum.JSON;
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                userIp = "minus";
            }};            

            AdexchangebuyerAccountsListResponse res = sdk.accounts.adexchangebuyerAccountsList(req, new AdexchangebuyerAccountsListSecurity("placeat", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerAccountsPatch

Updates an existing account. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsPatchRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsPatchResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsPatchSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountBidderLocation;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerAccountsPatchRequest req = new AdexchangebuyerAccountsPatchRequest(479977L) {{
                account = new Account() {{
                    applyPretargetingToNonGuaranteedDeals = false;
                    bidderLocation = new org.openapis.openapi.models.shared.AccountBidderLocation[]{{
                        add(new AccountBidderLocation() {{
                            bidProtocol = "nisi";
                            maximumQps = 925597;
                            region = "temporibus";
                            url = "ab";
                        }}),
                        add(new AccountBidderLocation() {{
                            bidProtocol = "quis";
                            maximumQps = 87129;
                            region = "deserunt";
                            url = "perferendis";
                        }}),
                        add(new AccountBidderLocation() {{
                            bidProtocol = "ipsam";
                            maximumQps = 832620;
                            region = "sapiente";
                            url = "quo";
                        }}),
                    }};
                    cookieMatchingNid = "odit";
                    cookieMatchingUrl = "at";
                    id = 870088;
                    kind = "maiores";
                    maximumActiveCreatives = 473608;
                    maximumTotalQps = 799159;
                    numberActiveCreatives = 800911;
                }};;
                alt = AltEnum.JSON;
                confirmUnsafeAccountChange = false;
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                userIp = "dicta";
            }};            

            AdexchangebuyerAccountsPatchResponse res = sdk.accounts.adexchangebuyerAccountsPatch(req, new AdexchangebuyerAccountsPatchSecurity("nam", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerAccountsUpdate

Updates an existing account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsUpdateRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsUpdateResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsUpdateSecurity;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountBidderLocation;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerAccountsUpdateRequest req = new AdexchangebuyerAccountsUpdateRequest(582020L) {{
                account = new Account() {{
                    applyPretargetingToNonGuaranteedDeals = false;
                    bidderLocation = new org.openapis.openapi.models.shared.AccountBidderLocation[]{{
                        add(new AccountBidderLocation() {{
                            bidProtocol = "deleniti";
                            maximumQps = 944669;
                            region = "optio";
                            url = "totam";
                        }}),
                    }};
                    cookieMatchingNid = "beatae";
                    cookieMatchingUrl = "commodi";
                    id = 473600;
                    kind = "modi";
                    maximumActiveCreatives = 186332;
                    maximumTotalQps = 774234;
                    numberActiveCreatives = 736918;
                }};;
                alt = AltEnum.JSON;
                confirmUnsafeAccountChange = false;
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                userIp = "perferendis";
            }};            

            AdexchangebuyerAccountsUpdateResponse res = sdk.accounts.adexchangebuyerAccountsUpdate(req, new AdexchangebuyerAccountsUpdateSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
