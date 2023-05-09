# giftCards

### Available Operations

* [createGiftCard](#creategiftcard) - CreateGiftCard
* [linkCustomerToGiftCard](#linkcustomertogiftcard) - LinkCustomerToGiftCard
* [listGiftCards](#listgiftcards) - ListGiftCards
* [retrieveGiftCard](#retrievegiftcard) - RetrieveGiftCard
* [retrieveGiftCardFromGAN](#retrievegiftcardfromgan) - RetrieveGiftCardFromGAN
* [retrieveGiftCardFromNonce](#retrievegiftcardfromnonce) - RetrieveGiftCardFromNonce
* [unlinkCustomerFromGiftCard](#unlinkcustomerfromgiftcard) - UnlinkCustomerFromGiftCard

## createGiftCard

Creates a digital gift card or registers a physical (plastic) gift card. You must activate the gift card before 
it can be used for payment. For more information, see 
[Selling gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#selling-square-gift-cards).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGiftCardResponse;
import org.openapis.openapi.models.operations.CreateGiftCardSecurity;
import org.openapis.openapi.models.shared.CreateGiftCardRequest;
import org.openapis.openapi.models.shared.GiftCard;
import org.openapis.openapi.models.shared.Money;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateGiftCardRequest req = new CreateGiftCardRequest(                new GiftCard("iste") {{
                                balanceMoney = new Money() {{
                                    amount = 861477L;
                                    currency = "dolorum";
                                }};;
                                createdAt = "maxime";
                                customerIds = new String[]{{
                                    add("velit"),
                                    add("voluptatum"),
                                    add("eveniet"),
                                    add("quibusdam"),
                                }};
                                gan = "doloremque";
                                ganSource = "assumenda";
                                id = "c671dc7f-1e3a-4f15-920c-90d1b4901f2b";
                                state = "quibusdam";
                            }};, "totam", "provident");            

            CreateGiftCardResponse res = sdk.giftCards.createGiftCard(req, new CreateGiftCardSecurity("maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createGiftCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## linkCustomerToGiftCard

Links a customer to a gift card

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LinkCustomerToGiftCardRequest;
import org.openapis.openapi.models.operations.LinkCustomerToGiftCardResponse;
import org.openapis.openapi.models.operations.LinkCustomerToGiftCardSecurity;
import org.openapis.openapi.models.shared.LinkCustomerToGiftCardRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LinkCustomerToGiftCardRequest req = new LinkCustomerToGiftCardRequest(                new LinkCustomerToGiftCardRequest("totam");, "id");            

            LinkCustomerToGiftCardResponse res = sdk.giftCards.linkCustomerToGiftCard(req, new LinkCustomerToGiftCardSecurity("neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.linkCustomerToGiftCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGiftCards

Lists all gift cards. You can specify optional filters to retrieve 
a subset of the gift cards.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGiftCardsRequest;
import org.openapis.openapi.models.operations.ListGiftCardsResponse;
import org.openapis.openapi.models.operations.ListGiftCardsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGiftCardsRequest req = new ListGiftCardsRequest() {{
                cursor = "dolores";
                customerId = "vel";
                limit = 219634L;
                state = "occaecati";
                type = "pariatur";
            }};            

            ListGiftCardsResponse res = sdk.giftCards.listGiftCards(req, new ListGiftCardsSecurity("similique") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGiftCardsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveGiftCard

Retrieves a gift card using its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveGiftCardRequest;
import org.openapis.openapi.models.operations.RetrieveGiftCardResponse;
import org.openapis.openapi.models.operations.RetrieveGiftCardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveGiftCardRequest req = new RetrieveGiftCardRequest("quis");            

            RetrieveGiftCardResponse res = sdk.giftCards.retrieveGiftCard(req, new RetrieveGiftCardSecurity("facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveGiftCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveGiftCardFromGAN

Retrieves a gift card using the gift card account number (GAN).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveGiftCardFromGANResponse;
import org.openapis.openapi.models.operations.RetrieveGiftCardFromGANSecurity;
import org.openapis.openapi.models.shared.RetrieveGiftCardFromGANRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RetrieveGiftCardFromGANRequest req = new RetrieveGiftCardFromGANRequest("in");            

            RetrieveGiftCardFromGANResponse res = sdk.giftCards.retrieveGiftCardFromGAN(req, new RetrieveGiftCardFromGANSecurity("nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveGiftCardFromGANResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveGiftCardFromNonce

Retrieves a gift card using a nonce (a secure token) that represents the gift card.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveGiftCardFromNonceResponse;
import org.openapis.openapi.models.operations.RetrieveGiftCardFromNonceSecurity;
import org.openapis.openapi.models.shared.RetrieveGiftCardFromNonceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RetrieveGiftCardFromNonceRequest req = new RetrieveGiftCardFromNonceRequest("nisi");            

            RetrieveGiftCardFromNonceResponse res = sdk.giftCards.retrieveGiftCardFromNonce(req, new RetrieveGiftCardFromNonceSecurity("natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveGiftCardFromNonceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlinkCustomerFromGiftCard

Unlinks a customer from a gift card

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlinkCustomerFromGiftCardRequest;
import org.openapis.openapi.models.operations.UnlinkCustomerFromGiftCardResponse;
import org.openapis.openapi.models.operations.UnlinkCustomerFromGiftCardSecurity;
import org.openapis.openapi.models.shared.UnlinkCustomerFromGiftCardRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnlinkCustomerFromGiftCardRequest req = new UnlinkCustomerFromGiftCardRequest(                new UnlinkCustomerFromGiftCardRequest("eaque");, "quia");            

            UnlinkCustomerFromGiftCardResponse res = sdk.giftCards.unlinkCustomerFromGiftCard(req, new UnlinkCustomerFromGiftCardSecurity("facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.unlinkCustomerFromGiftCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
