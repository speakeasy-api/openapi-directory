# cards

### Available Operations

* [createCard](#createcard) - CreateCard
* [disableCard](#disablecard) - DisableCard
* [listCards](#listcards) - ListCards
* [retrieveCard](#retrievecard) - RetrieveCard

## createCard

Adds a card on file to an existing merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCardResponse;
import org.openapis.openapi.models.operations.CreateCardSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Card;
import org.openapis.openapi.models.shared.CreateCardRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateCardRequest req = new CreateCardRequest(                new Card() {{
                                billingAddress = new Address() {{
                                    addressLine1 = "aliquid";
                                    addressLine2 = "provident";
                                    addressLine3 = "necessitatibus";
                                    administrativeDistrictLevel1 = "sint";
                                    administrativeDistrictLevel2 = "officia";
                                    administrativeDistrictLevel3 = "dolor";
                                    country = "Togo";
                                    firstName = "Veda";
                                    lastName = "Parisian";
                                    locality = "in";
                                    organization = "in";
                                    postalCode = "96127-8436";
                                    sublocality = "accusamus";
                                    sublocality2 = "non";
                                    sublocality3 = "occaecati";
                                }};;
                                bin = "enim";
                                cardBrand = "accusamus";
                                cardType = "delectus";
                                cardholderName = "quidem";
                                customerId = "provident";
                                enabled = false;
                                expMonth = 725255L;
                                expYear = 659669L;
                                fingerprint = "blanditiis";
                                id = "8f3a6699-7074-4ba4-869b-6e2141959890";
                                last4 = "mollitia";
                                prepaidType = "reiciendis";
                                referenceId = "mollitia";
                                version = 320997L;
                            }};, "eum", "dolor") {{
                verificationToken = "necessitatibus";
            }};            

            CreateCardResponse res = sdk.cards.createCard(req, new CreateCardSecurity("odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableCard

Disables the card, preventing any further updates or charges.
Disabling an already disabled card is allowed but has no effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableCardRequest;
import org.openapis.openapi.models.operations.DisableCardResponse;
import org.openapis.openapi.models.operations.DisableCardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisableCardRequest req = new DisableCardRequest("nemo");            

            DisableCardResponse res = sdk.cards.disableCard(req, new DisableCardSecurity("quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.disableCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCards

Retrieves a list of cards owned by the account making the request.
A max of 25 cards will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCardsRequest;
import org.openapis.openapi.models.operations.ListCardsResponse;
import org.openapis.openapi.models.operations.ListCardsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCardsRequest req = new ListCardsRequest() {{
                cursor = "iure";
                customerId = "doloribus";
                includeDisabled = false;
                referenceId = "debitis";
                sortOrder = "eius";
            }};            

            ListCardsResponse res = sdk.cards.listCards(req, new ListCardsSecurity("maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCardsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveCard

Retrieves details for a specific Card.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCardRequest;
import org.openapis.openapi.models.operations.RetrieveCardResponse;
import org.openapis.openapi.models.operations.RetrieveCardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCardRequest req = new RetrieveCardRequest("deleniti");            

            RetrieveCardResponse res = sdk.cards.retrieveCard(req, new RetrieveCardSecurity("facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
