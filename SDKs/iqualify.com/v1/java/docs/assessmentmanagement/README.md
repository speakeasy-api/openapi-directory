# assessmentManagement

### Available Operations

* [deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId](#deleteofferingsofferingidassessmentsassessmentiddocumentsdocumentid) - Remove assessment document
* [deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId](#deleteofferingsofferingidusersuseremailassessmentsassessmentid) - Reset user's assessment to draft state
* [getOfferingsOfferingIdActivitiesOpenresponse](#getofferingsofferingidactivitiesopenresponse) - Find offering's activities
* [getOfferingsOfferingIdAssessments](#getofferingsofferingidassessments) - Find offering's assessments
* [getOfferingsOfferingIdLearnersPendingSubmission](#getofferingsofferingidlearnerspendingsubmission) - Find learners with assessments pending x days before due date within the specified offeringId
* [getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse](#getofferingsofferingidusersuseremailsubmissionsopenresponse) - Find learner's open response assessment submissions
* [patchOfferingsOfferingIdAssessmentsAssessmentId](#patchofferingsofferingidassessmentsassessmentid) - Update assessment details
* [patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail](#patchofferingsofferingidassessmentsassessmentiduseremail) - Update the due dates for a learner's quiz attempt

## deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId

Removes the assessment document file for a specified assessment in an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest req = new DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest("dicta", "nam", "officia");            

            DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse res = sdk.assessmentManagement.deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId

Resets the user's submitted assessment to a draft state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest req = new DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest("fugit", "deleniti", "Nina41@hotmail.com");            

            DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse res = sdk.assessmentManagement.deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdActivitiesOpenresponse

Responds with the activities in a specific offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdActivitiesOpenresponseRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdActivitiesOpenresponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdActivitiesOpenresponseRequest req = new GetOfferingsOfferingIdActivitiesOpenresponseRequest("modi");            

            GetOfferingsOfferingIdActivitiesOpenresponseResponse res = sdk.assessmentManagement.getOfferingsOfferingIdActivitiesOpenresponse(req);

            if (res.offeringActivitiesResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdAssessments

Responds with all assessments in an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAssessmentsRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdAssessmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdAssessmentsRequest req = new GetOfferingsOfferingIdAssessmentsRequest("impedit");            

            GetOfferingsOfferingIdAssessmentsResponse res = sdk.assessmentManagement.getOfferingsOfferingIdAssessments(req);

            if (res.assessmentResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdLearnersPendingSubmission

Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdLearnersPendingSubmissionRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdLearnersPendingSubmissionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdLearnersPendingSubmissionRequest req = new GetOfferingsOfferingIdLearnersPendingSubmissionRequest("esse") {{
                days = "ipsum";
            }};            

            GetOfferingsOfferingIdLearnersPendingSubmissionResponse res = sdk.assessmentManagement.getOfferingsOfferingIdLearnersPendingSubmission(req);

            if (res.assessmentPendingSubmissions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse

Responds with open response assessment submissions by a learner in an offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest req = new GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest("aspernatur", "Enrique61@gmail.com");            

            GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse res = sdk.assessmentManagement.getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse(req);

            if (res.assignments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchOfferingsOfferingIdAssessmentsAssessmentId

Updates the assessment details for a specified assessment in an offering.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse;
import org.openapis.openapi.models.shared.Assessment;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest req = new PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest(                new Assessment() {{
                                content = "natus";
                                dueDate = OffsetDateTime.parse("2022-01-21T12:46:00.641Z");
                                markNumber = "saepe";
                                markType = "fuga";
                                openDate = OffsetDateTime.parse("2022-08-22T18:42:38.160Z");
                            }};, "iste", "iure");            

            PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse res = sdk.assessmentManagement.patchOfferingsOfferingIdAssessmentsAssessmentId(req);

            if (res.assessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail

Updates the due dates for a learner's quiz attempt specified by the assessmentId.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest req = new PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest(                new PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody() {{
                                dueDate = OffsetDateTime.parse("2022-10-20T12:36:28.767Z");
                            }};, "ipsa", "reiciendis", "Madaline21@hotmail.com");            

            PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse res = sdk.assessmentManagement.patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
