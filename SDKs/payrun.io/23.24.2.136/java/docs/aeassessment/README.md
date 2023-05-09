# aeAssessment

### Available Operations

* [deleteAEAssessment](#deleteaeassessment) - Delete auto enrolment assessment
* [getAEAssessmentFromEmployee](#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [getAEAssessmentsFromEmployee](#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [getAEAssessmentsFromPayRun](#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [postNewAEAssessment](#postnewaeassessment) - Insert new auto enrolment assessment
* [putNewAEAssessment](#putnewaeassessment) - Insert new auto enrolment assessment

## deleteAEAssessment

Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAEAssessmentRequest;
import org.openapis.openapi.models.operations.DeleteAEAssessmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAEAssessmentRequest req = new DeleteAEAssessmentRequest("nulla", "corrupti", "illum", "vel", "error");            

            DeleteAEAssessmentResponse res = sdk.aeAssessment.deleteAEAssessment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAEAssessmentFromEmployee

Gets the auto enrolment assessment from the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAEAssessmentFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetAEAssessmentFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAEAssessmentFromEmployeeRequest req = new GetAEAssessmentFromEmployeeRequest("deserunt", "suscipit", "iure", "magnam", "debitis");            

            GetAEAssessmentFromEmployeeResponse res = sdk.aeAssessment.getAEAssessmentFromEmployee(req);

            if (res.aeAssessment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAEAssessmentsFromEmployee

Gets all auto enrolment assessments from the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAEAssessmentsFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetAEAssessmentsFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAEAssessmentsFromEmployeeRequest req = new GetAEAssessmentsFromEmployeeRequest("ipsa", "delectus", "tempora", "suscipit");            

            GetAEAssessmentsFromEmployeeResponse res = sdk.aeAssessment.getAEAssessmentsFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAEAssessmentsFromPayRun

Gets all auto enrolment assessments from the specified pay run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAEAssessmentsFromPayRunRequest;
import org.openapis.openapi.models.operations.GetAEAssessmentsFromPayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAEAssessmentsFromPayRunRequest req = new GetAEAssessmentsFromPayRunRequest("molestiae", "minus", "placeat", "voluptatum", "iusto");            

            GetAEAssessmentsFromPayRunResponse res = sdk.aeAssessment.getAEAssessmentsFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNewAEAssessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNewAEAssessmentRequest;
import org.openapis.openapi.models.operations.PostNewAEAssessmentResponse;
import org.openapis.openapi.models.shared.AEAssessment;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessment;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentCodeEnum;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentEventEnum;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentOverrideEnum;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentResultEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNewAEAssessmentRequest req = new PostNewAEAssessmentRequest(                new AEAssessment() {{
                                aeAssessment = new AEAssessmentAEAssessment() {{
                                    age = 568045;
                                    assessmentCode = AEAssessmentAEAssessmentAssessmentCodeEnum.ELIGIBLE_JOB_HOLDER;
                                    assessmentDate = LocalDate.parse("2020-06-29");
                                    assessmentEvent = AEAssessmentAEAssessmentAssessmentEventEnum.NON_ENROLMENT_EVENT;
                                    assessmentOverride = AEAssessmentAEAssessmentAssessmentOverrideEnum.OPT_IN;
                                    assessmentResult = AEAssessmentAEAssessmentAssessmentResultEnum.INCONCLUSIVE;
                                    isMemberOfAlternativePensionScheme = false;
                                    optOutWindowEndDate = LocalDate.parse("2022-12-17");
                                    qualifyingEarnings = 3682.41;
                                    reenrolmentDate = LocalDate.parse("2020-02-17");
                                    statePensionAge = 778157;
                                    statePensionDate = LocalDate.parse("2022-02-17");
                                    taxPeriod = 870088;
                                    taxYear = 978619;
                                }};;
                            }};, "molestiae", "quod", "quod", "esse");            

            PostNewAEAssessmentResponse res = sdk.aeAssessment.postNewAEAssessment(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putNewAEAssessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutNewAEAssessmentRequest;
import org.openapis.openapi.models.operations.PutNewAEAssessmentResponse;
import org.openapis.openapi.models.shared.AEAssessment;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessment;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentCodeEnum;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentEventEnum;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentOverrideEnum;
import org.openapis.openapi.models.shared.AEAssessmentAEAssessmentAssessmentResultEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutNewAEAssessmentRequest req = new PutNewAEAssessmentRequest(                new AEAssessment() {{
                                aeAssessment = new AEAssessmentAEAssessment() {{
                                    age = 520478;
                                    assessmentCode = AEAssessmentAEAssessmentAssessmentCodeEnum.ENTITLED_WORKER;
                                    assessmentDate = LocalDate.parse("2022-10-06");
                                    assessmentEvent = AEAssessmentAEAssessmentAssessmentEventEnum.VOLUNTARY_JOINER;
                                    assessmentOverride = AEAssessmentAEAssessmentAssessmentOverrideEnum.CEASED_MEMBERSHIP;
                                    assessmentResult = AEAssessmentAEAssessmentAssessmentResultEnum.ENROL;
                                    isMemberOfAlternativePensionScheme = false;
                                    optOutWindowEndDate = LocalDate.parse("2022-06-18");
                                    qualifyingEarnings = 9446.69;
                                    reenrolmentDate = LocalDate.parse("2021-06-08");
                                    statePensionAge = 105907;
                                    statePensionDate = LocalDate.parse("2022-07-12");
                                    taxPeriod = 264555;
                                    taxYear = 186332;
                                }};;
                            }};, "impedit", "cum", "esse", "ipsum", "excepturi");            

            PutNewAEAssessmentResponse res = sdk.aeAssessment.putNewAEAssessment(req);

            if (res.aeAssessment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
