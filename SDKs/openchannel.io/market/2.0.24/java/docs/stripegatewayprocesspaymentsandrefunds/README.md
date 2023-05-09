# stripeGatewayProcessPaymentsAndRefunds

### Available Operations

* [deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId](#deletestripegatewaydeveloperdeveloperidaccountsstripeid) - Disconnects a developer's Stripe account
* [deleteStripeGatewayUserUserIdCardsCardId](#deletestripegatewayuseruseridcardscardid) - Removes a credit card for a user
* [getStripeGatewayDeveloperDeveloperIdAccounts](#getstripegatewaydeveloperdeveloperidaccounts) - Returns a developers connected Stripe accounts
* [getStripeGatewayUserUserIdCards](#getstripegatewayuseruseridcards) - Returns credit cards for this user
* [postStripeGatewayDeveloperDeveloperIdAccounts](#poststripegatewaydeveloperdeveloperidaccounts) - Generate a temporary URL to allow a developer to connect their Stripe account
* [postStripeGatewayUserUserIdCards](#poststripegatewayuseruseridcards) - Adds credit card for this user
* [postStripeGatewayUserUserIdCardsCardId](#poststripegatewayuseruseridcardscardid) - Updates a credit card for this user

## deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId


- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest;
import org.openapis.openapi.models.operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur", "blanditiis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest req = new DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest("error", "eaque");            

            DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse res = sdk.stripeGatewayProcessPaymentsAndRefunds.deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStripeGatewayUserUserIdCardsCardId

Removes a credit card for a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStripeGatewayUserUserIdCardsCardIdRequest;
import org.openapis.openapi.models.operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "rerum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteStripeGatewayUserUserIdCardsCardIdRequest req = new DeleteStripeGatewayUserUserIdCardsCardIdRequest("adipisci", "asperiores");            

            DeleteStripeGatewayUserUserIdCardsCardIdResponse res = sdk.stripeGatewayProcessPaymentsAndRefunds.deleteStripeGatewayUserUserIdCardsCardId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStripeGatewayDeveloperDeveloperIdAccounts

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStripeGatewayDeveloperDeveloperIdAccountsRequest;
import org.openapis.openapi.models.operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum", "modi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStripeGatewayDeveloperDeveloperIdAccountsRequest req = new GetStripeGatewayDeveloperDeveloperIdAccountsRequest("iste");            

            GetStripeGatewayDeveloperDeveloperIdAccountsResponse res = sdk.stripeGatewayProcessPaymentsAndRefunds.getStripeGatewayDeveloperDeveloperIdAccounts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStripeGatewayUserUserIdCards

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStripeGatewayUserUserIdCardsRequest;
import org.openapis.openapi.models.operations.GetStripeGatewayUserUserIdCardsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum", "deleniti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStripeGatewayUserUserIdCardsRequest req = new GetStripeGatewayUserUserIdCardsRequest("pariatur");            

            GetStripeGatewayUserUserIdCardsResponse res = sdk.stripeGatewayProcessPaymentsAndRefunds.getStripeGatewayUserUserIdCards(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStripeGatewayDeveloperDeveloperIdAccounts

- Results are returned for the market provided within the basic authentication credentials 
- The URL generated by this method is only valid for 48 hours.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStripeGatewayDeveloperDeveloperIdAccountsRequest;
import org.openapis.openapi.models.operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "nobis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostStripeGatewayDeveloperDeveloperIdAccountsRequest req = new PostStripeGatewayDeveloperDeveloperIdAccountsRequest("libero", "delectus");            

            PostStripeGatewayDeveloperDeveloperIdAccountsResponse res = sdk.stripeGatewayProcessPaymentsAndRefunds.postStripeGatewayDeveloperDeveloperIdAccounts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStripeGatewayUserUserIdCards

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStripeGatewayUserUserIdCardsRequest;
import org.openapis.openapi.models.operations.PostStripeGatewayUserUserIdCardsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat", "quos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostStripeGatewayUserUserIdCardsRequest req = new PostStripeGatewayUserUserIdCardsRequest("aliquid", "dolorem") {{
                isDefault = false;
            }};            

            PostStripeGatewayUserUserIdCardsResponse res = sdk.stripeGatewayProcessPaymentsAndRefunds.postStripeGatewayUserUserIdCards(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStripeGatewayUserUserIdCardsCardId


- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStripeGatewayUserUserIdCardsCardIdRequest;
import org.openapis.openapi.models.operations.PostStripeGatewayUserUserIdCardsCardIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem", "dolor") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostStripeGatewayUserUserIdCardsCardIdRequest req = new PostStripeGatewayUserUserIdCardsCardIdRequest("qui", "ipsum") {{
                addressCity = "hic";
                addressCountry = "excepturi";
                addressLine1 = "cum";
                addressLine2 = "voluptate";
                addressState = "dignissimos";
                addressZip = "reiciendis";
                isDefault = false;
            }};            

            PostStripeGatewayUserUserIdCardsCardIdResponse res = sdk.stripeGatewayProcessPaymentsAndRefunds.postStripeGatewayUserUserIdCardsCardId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
