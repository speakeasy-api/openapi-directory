# assessmentData

### Available Operations

* [getOfferingsOfferingIdAnalyticsActivitiesResponses](#getofferingsofferingidanalyticsactivitiesresponses) - Find open response activity attempts
* [getOfferingsOfferingIdAnalyticsMarksAssignments](#getofferingsofferingidanalyticsmarksassignments) - Find assessment marks
* [getOfferingsOfferingIdAnalyticsMarksQuizzes](#getofferingsofferingidanalyticsmarksquizzes) - Find quiz marks
* [getOfferingsOfferingIdAnalyticsSubmissionsAssignments](#getofferingsofferingidanalyticssubmissionsassignments) - Find submissions to assessments, including marks if any
* [getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId](#getofferingsofferingidanalyticssubmissionsopenresponseassessmentid) - Find submissions to a specified open response assessment, including marks if any
* [getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId](#getofferingsofferingidanalyticssubmissionsuseremailassignmentsassessmentid) - Find a learner's submission to a specified assessment, including marks if any

## getOfferingsOfferingIdAnalyticsActivitiesResponses

Responds with all learner activity attempts for open response activities in an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest req = new GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest("quibusdam");            

            GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse res = sdk.assessmentData.getOfferingsOfferingIdAnalyticsActivitiesResponses(req);

            if (res.activityAttemptOpenResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsMarksAssignments

Responds with all learner assessment marks in an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest req = new GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest("nulla");            

            GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse res = sdk.assessmentData.getOfferingsOfferingIdAnalyticsMarksAssignments(req);

            if (res.assignmentMarkResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsMarksQuizzes

Responds with all learner quiz marks in an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest req = new GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest("illum");            

            GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse res = sdk.assessmentData.getOfferingsOfferingIdAnalyticsMarksQuizzes(req);

            if (res.quizMarkResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsSubmissionsAssignments

Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest req = new GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest("error");            

            GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse res = sdk.assessmentData.getOfferingsOfferingIdAnalyticsSubmissionsAssignments(req);

            if (res.assignmentMarkResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId

Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest req = new GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest("suscipit", "iure");            

            GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse res = sdk.assessmentData.getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId(req);

            if (res.submissionMarkResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId

Responds with the learner's assessment submission and any marks for the submission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest req = new GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest("debitis", "ipsa", "Donny_Hoppe@hotmail.com");            

            GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse res = sdk.assessmentData.getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId(req);

            if (res.submissionMarkResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
