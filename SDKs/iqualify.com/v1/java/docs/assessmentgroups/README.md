# assessmentGroups

### Available Operations

* [deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail](#deleteofferingsofferingidgroupsgroupidlearnersuseremail) - Remove a learner from an assessment group
* [getOfferingsOfferingIdGroups](#getofferingsofferingidgroups) - Find assessment groups
* [getOfferingsOfferingIdGroupsGroupIdLearners](#getofferingsofferingidgroupsgroupidlearners) - Find learners in an assessment group
* [postOfferingsOfferingIdGroups](#postofferingsofferingidgroups) - Add an assessment group
* [postOfferingsOfferingIdGroupsGroupIdLearners](#postofferingsofferingidgroupsgroupidlearners) - Add a learner to an assessment group

## deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail

Removes a learner from the specified assessment group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest req = new DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest("voluptatum", "iusto", "Glen.Walsh33@yahoo.com");            

            DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse res = sdk.assessmentGroups.deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdGroups

Responds with a list of assessment groups in an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdGroupsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdGroupsRequest req = new GetOfferingsOfferingIdGroupsRequest("deserunt");            

            GetOfferingsOfferingIdGroupsResponse res = sdk.assessmentGroups.getOfferingsOfferingIdGroups(req);

            if (res.assessmentGroupResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdGroupsGroupIdLearners

Responds with a list of learners in a specified assessment group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdGroupsGroupIdLearnersRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdGroupsGroupIdLearnersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdGroupsGroupIdLearnersRequest req = new GetOfferingsOfferingIdGroupsGroupIdLearnersRequest("ipsam", "repellendus");            

            GetOfferingsOfferingIdGroupsGroupIdLearnersResponse res = sdk.assessmentGroups.getOfferingsOfferingIdGroupsGroupIdLearners(req);

            if (res.userResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferingsOfferingIdGroups

Creates a new assessment group in an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdGroupsRequest;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdGroupsResponse;
import org.openapis.openapi.models.shared.AssessmentGroupRequired;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOfferingsOfferingIdGroupsRequest req = new PostOfferingsOfferingIdGroupsRequest(                new AssessmentGroupRequired("quo");, "odit");            

            PostOfferingsOfferingIdGroupsResponse res = sdk.assessmentGroups.postOfferingsOfferingIdGroups(req);

            if (res.assessmentGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferingsOfferingIdGroupsGroupIdLearners

Adds a learner into the specified assessment group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdGroupsGroupIdLearnersRequest;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdGroupsGroupIdLearnersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOfferingsOfferingIdGroupsGroupIdLearnersRequest req = new PostOfferingsOfferingIdGroupsGroupIdLearnersRequest(                new PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody() {{
                                email = "Wilford_Krajcik46@hotmail.com";
                            }};, "totam", "porro");            

            PostOfferingsOfferingIdGroupsGroupIdLearnersResponse res = sdk.assessmentGroups.postOfferingsOfferingIdGroupsGroupIdLearners(req);

            if (res.userResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
