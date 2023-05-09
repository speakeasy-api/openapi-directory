# bidders

### Available Operations

* [realtimebiddingBiddersBiddingFunctionsActivate](#realtimebiddingbiddersbiddingfunctionsactivate) - Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
* [realtimebiddingBiddersBiddingFunctionsArchive](#realtimebiddingbiddersbiddingfunctionsarchive) - Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
* [realtimebiddingBiddersBiddingFunctionsCreate](#realtimebiddingbiddersbiddingfunctionscreate) - Creates a new bidding function.
* [realtimebiddingBiddersBiddingFunctionsList](#realtimebiddingbiddersbiddingfunctionslist) - Lists the bidding functions that a bidder currently has registered.

## realtimebiddingBiddersBiddingFunctionsActivate

Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersBiddingFunctionsActivateRequest req = new RealtimebiddingBiddersBiddingFunctionsActivateRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            RealtimebiddingBiddersBiddingFunctionsActivateResponse res = sdk.bidders.realtimebiddingBiddersBiddingFunctionsActivate(req, new RealtimebiddingBiddersBiddingFunctionsActivateSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.biddingFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersBiddingFunctionsArchive

Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsArchiveRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsArchiveResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsArchiveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersBiddingFunctionsArchiveRequest req = new RealtimebiddingBiddersBiddingFunctionsArchiveRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quod", "esse");
                    put("totam", "porro");
                    put("dolorum", "dicta");
                    put("nam", "officia");
                }};
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "hic";
                key = "optio";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            RealtimebiddingBiddersBiddingFunctionsArchiveResponse res = sdk.bidders.realtimebiddingBiddersBiddingFunctionsArchive(req, new RealtimebiddingBiddersBiddingFunctionsArchiveSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.biddingFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersBiddingFunctionsCreate

Creates a new bidding function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsCreateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsCreateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiddingFunctionInput;
import org.openapis.openapi.models.shared.BiddingFunctionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersBiddingFunctionsCreateRequest req = new RealtimebiddingBiddersBiddingFunctionsCreateRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                biddingFunctionInput = new BiddingFunctionInput() {{
                    biddingFunction = "esse";
                    name = "Mrs. Miriam Collier";
                    type = BiddingFunctionTypeEnum.FUNCTION_TYPE_UNSPECIFIED;
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "laboriosam";
                key = "hic";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            RealtimebiddingBiddersBiddingFunctionsCreateResponse res = sdk.bidders.realtimebiddingBiddersBiddingFunctionsCreate(req, new RealtimebiddingBiddersBiddingFunctionsCreateSecurity("iste", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.biddingFunction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersBiddingFunctionsList

Lists the bidding functions that a bidder currently has registered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersBiddingFunctionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersBiddingFunctionsListRequest req = new RealtimebiddingBiddersBiddingFunctionsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                pageSize = 170909L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            RealtimebiddingBiddersBiddingFunctionsListResponse res = sdk.bidders.realtimebiddingBiddersBiddingFunctionsList(req, new RealtimebiddingBiddersBiddingFunctionsListSecurity("enim", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBiddingFunctionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
