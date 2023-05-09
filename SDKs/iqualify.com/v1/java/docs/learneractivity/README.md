# learnerActivity

### Available Operations

* [getOfferingsOfferingIdAnalyticsLearnersProgress](#getofferingsofferingidanalyticslearnersprogress) - Find learner progress in a specified offering
* [getOfferingsOfferingIdAnalyticsSocialNotes](#getofferingsofferingidanalyticssocialnotes) - Find shared social notes in an offering
* [getOfferingsOfferingIdAnalyticsUnitReactions](#getofferingsofferingidanalyticsunitreactions) - Find unit reactions
* [getUsersUserEmailOfferingsOfferingIdProgress](#getusersuseremailofferingsofferingidprogress) - Find learner's progress in a specified offering
* [getUsersUserEmailProgress](#getusersuseremailprogress) - Find learner's progress in offerings

## getOfferingsOfferingIdAnalyticsLearnersProgress

Responds with all learner progress in the offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsLearnersProgressRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsLearnersProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsLearnersProgressRequest req = new GetOfferingsOfferingIdAnalyticsLearnersProgressRequest("consequatur");            

            GetOfferingsOfferingIdAnalyticsLearnersProgressResponse res = sdk.learnerActivity.getOfferingsOfferingIdAnalyticsLearnersProgress(req);

            if (res.learnerProgressResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsSocialNotes

Responds with all shared social notes in a specified offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSocialNotesRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSocialNotesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsSocialNotesRequest req = new GetOfferingsOfferingIdAnalyticsSocialNotesRequest("quibusdam");            

            GetOfferingsOfferingIdAnalyticsSocialNotesResponse res = sdk.learnerActivity.getOfferingsOfferingIdAnalyticsSocialNotes(req);

            if (res.socialNotesResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsUnitReactions

Responds with user reactions to units in a specified offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsUnitReactionsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsUnitReactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsUnitReactionsRequest req = new GetOfferingsOfferingIdAnalyticsUnitReactionsRequest("deserunt");            

            GetOfferingsOfferingIdAnalyticsUnitReactionsResponse res = sdk.learnerActivity.getOfferingsOfferingIdAnalyticsUnitReactions(req);

            if (res.unitReactionsAnalyticsResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserEmailOfferingsOfferingIdProgress

Responds with the learner's progress in a specified offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserEmailOfferingsOfferingIdProgressRequest;
import org.openapis.openapi.models.operations.GetUsersUserEmailOfferingsOfferingIdProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersUserEmailOfferingsOfferingIdProgressRequest req = new GetUsersUserEmailOfferingsOfferingIdProgressRequest("quibusdam", "Dillan_Deckow@gmail.com");            

            GetUsersUserEmailOfferingsOfferingIdProgressResponse res = sdk.learnerActivity.getUsersUserEmailOfferingsOfferingIdProgress(req);

            if (res.getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserEmailProgress

Responds with the specified learner's progress in all offerings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserEmailProgressRequest;
import org.openapis.openapi.models.operations.GetUsersUserEmailProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersUserEmailProgressRequest req = new GetUsersUserEmailProgressRequest("Casimir.Simonis@gmail.com");            

            GetUsersUserEmailProgressResponse res = sdk.learnerActivity.getUsersUserEmailProgress(req);

            if (res.learnerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
