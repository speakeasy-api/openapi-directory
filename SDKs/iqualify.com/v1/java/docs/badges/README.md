# badges

### Available Operations

* [getOfferingsOfferingIdBadges](#getofferingsofferingidbadges) - Find offering badges
* [getUsersUserEmailBadges](#getusersuseremailbadges) - Find user's badges
* [postOfferingsOfferingIdUsersUserEmailBadgesAward](#postofferingsofferingidusersuseremailbadgesaward) - Award badge

## getOfferingsOfferingIdBadges

Responds with the badge for an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdBadgesRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdBadgesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdBadgesRequest req = new GetOfferingsOfferingIdBadgesRequest("explicabo");            

            GetOfferingsOfferingIdBadgesResponse res = sdk.badges.getOfferingsOfferingIdBadges(req);

            if (res.badge != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserEmailBadges

Responds with all badges that the specified user has been awarded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserEmailBadgesRequest;
import org.openapis.openapi.models.operations.GetUsersUserEmailBadgesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersUserEmailBadgesRequest req = new GetUsersUserEmailBadgesRequest("Lenore57@gmail.com");            

            GetUsersUserEmailBadgesResponse res = sdk.badges.getUsersUserEmailBadges(req);

            if (res.userBadges != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferingsOfferingIdUsersUserEmailBadgesAward

Awards a badge to a user in the offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest req = new PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest("iure", "Yasmeen65@yahoo.com");            

            PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse res = sdk.badges.postOfferingsOfferingIdUsersUserEmailBadgesAward(req);

            if (res.awardedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
