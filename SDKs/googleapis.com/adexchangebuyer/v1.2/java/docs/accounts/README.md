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
                    bidderLocation = new org.openapis.openapi.models.shared.AccountBidderLocation[]{{
                        add(new AccountBidderLocation() {{
                            maximumQps = 392785;
                            region = "recusandae";
                            url = "temporibus";
                        }}),
                        add(new AccountBidderLocation() {{
                            maximumQps = 71036;
                            region = "quis";
                            url = "veritatis";
                        }}),
                        add(new AccountBidderLocation() {{
                            maximumQps = 648172;
                            region = "perferendis";
                            url = "ipsam";
                        }}),
                    }};
                    cookieMatchingNid = "repellendus";
                    cookieMatchingUrl = "sapiente";
                    id = 778157;
                    kind = "odit";
                    maximumActiveCreatives = 870013;
                    maximumTotalQps = 870088;
                    numberActiveCreatives = 978619;
                }};;
                alt = AltEnum.JSON;
                fields = "molestiae";
                key = "quod";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "esse";
                userIp = "totam";
            }};            

            AdexchangebuyerAccountsPatchResponse res = sdk.accounts.adexchangebuyerAccountsPatch(req, new AdexchangebuyerAccountsPatchSecurity("porro", "dolorum") {{
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

            AdexchangebuyerAccountsUpdateRequest req = new AdexchangebuyerAccountsUpdateRequest(118274L) {{
                account = new Account() {{
                    bidderLocation = new org.openapis.openapi.models.shared.AccountBidderLocation[]{{
                        add(new AccountBidderLocation() {{
                            maximumQps = 639921;
                            region = "occaecati";
                            url = "fugit";
                        }}),
                        add(new AccountBidderLocation() {{
                            maximumQps = 537373;
                            region = "hic";
                            url = "optio";
                        }}),
                        add(new AccountBidderLocation() {{
                            maximumQps = 521848;
                            region = "beatae";
                            url = "commodi";
                        }}),
                    }};
                    cookieMatchingNid = "molestiae";
                    cookieMatchingUrl = "modi";
                    id = 186332;
                    kind = "impedit";
                    maximumActiveCreatives = 736918;
                    maximumTotalQps = 456150;
                    numberActiveCreatives = 216550;
                }};;
                alt = AltEnum.JSON;
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                userIp = "natus";
            }};            

            AdexchangebuyerAccountsUpdateResponse res = sdk.accounts.adexchangebuyerAccountsUpdate(req, new AdexchangebuyerAccountsUpdateSecurity("sed", "iste") {{
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
