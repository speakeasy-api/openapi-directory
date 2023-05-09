# employee

### Available Operations

* [deleteEmployee](#deleteemployee) - Delete an Employee
* [deleteEmployeeRevision](#deleteemployeerevision) - Delete an Employee revision matching the specified revision date.
* [deleteEmployeeRevisionByNumber](#deleteemployeerevisionbynumber) - Delete an Employee revision matching the specified revision number.
* [deleteEmployeeSecret](#deleteemployeesecret) - Deletes employee secret
* [getAEAssessmentFromEmployee](#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [getAEAssessmentsFromEmployee](#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [getAllEmployeeTags](#getallemployeetags) - Get all employee tags
* [getCommentariesFromEmployee](#getcommentariesfromemployee) - Get links to all commentaries for the specified employee
* [getCommentaryFromEmployee](#getcommentaryfromemployee) - Get commentary from employee
* [getCommentaryFromPayRunByEmployee](#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [getEmployeeByEffectiveDate](#getemployeebyeffectivedate) - Get employee by effective date.
* [getEmployeeFromEmployer](#getemployeefromemployer) - Get employee from employer
* [getEmployeeRevisionByNumber](#getemployeerevisionbynumber) - Gets the employee by revision number
* [getEmployeeRevisionSummaries](#getemployeerevisionsummaries) - Get all employee revision summaries
* [getEmployeeRevisionSummaryByNumber](#getemployeerevisionsummarybynumber) - Gets the employee summary by revision number
* [getEmployeeRevisions](#getemployeerevisions) - Get all employee revisions
* [getEmployeeSecret](#getemployeesecret) - Get employee secret
* [getEmployeeSecrets](#getemployeesecrets) - Get all employee secret links
* [getEmployeeSummariesByEffectiveDate](#getemployeesummariesbyeffectivedate) - Get employee summaries from employer at a given effective date.
* [getEmployeeSummariesFromEmployer](#getemployeesummariesfromemployer) - Get employee summaries from employer.
* [getEmployeeSummaryByEffectiveDate](#getemployeesummarybyeffectivedate) - Get employee summary by effective date.
* [getEmployeeSummaryFromEmployer](#getemployeesummaryfromemployer) - Get employee summary from employer
* [getEmployeesByEffectiveDate](#getemployeesbyeffectivedate) - Get employees from employer at a given effective date.
* [getEmployeesFromEmployer](#getemployeesfromemployer) - Get employees from employer.
* [getEmployeesFromPayRun](#getemployeesfrompayrun) - Get employees from the pay run
* [getEmployeesFromPaySchedule](#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [getEmployeesFromPayScheduleOnEffectiveDate](#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [getEmployeesWithTag](#getemployeeswithtag) - Get employees with tag
* [getPayRunsFromEmployee](#getpayrunsfromemployee) - Gets the pay runs from the employee
* [patchEmployee](#patchemployee) - Patches the employee
* [postEmployeeIntoEmployer](#postemployeeintoemployer) - Create a new Employee
* [postEmployeeSecret](#postemployeesecret) - Create a new employee secret
* [putEmployeeIntoEmployer](#putemployeeintoemployer) - Updates the Employee
* [putEmployeeSecret](#putemployeesecret) - Create a new employee secret

## deleteEmployee

Delete the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployeeRequest;
import org.openapis.openapi.models.operations.DeleteEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployeeRequest req = new DeleteEmployeeRequest("dolores", "quis", "totam", "dignissimos");            

            DeleteEmployeeResponse res = sdk.employee.deleteEmployee(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmployeeRevision

Deletes the specified employee revision for the matching revision date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployeeRevisionRequest;
import org.openapis.openapi.models.operations.DeleteEmployeeRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployeeRevisionRequest req = new DeleteEmployeeRevisionRequest("eaque", "quis", LocalDate.parse("2022-10-27"), "perferendis", "dolores");            

            DeleteEmployeeRevisionResponse res = sdk.employee.deleteEmployeeRevision(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmployeeRevisionByNumber

Deletes the specified employee revision for the matching revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployeeRevisionByNumberRequest;
import org.openapis.openapi.models.operations.DeleteEmployeeRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployeeRevisionByNumberRequest req = new DeleteEmployeeRevisionByNumberRequest("minus", "quam", "dolor", "vero", "nostrum");            

            DeleteEmployeeRevisionByNumberResponse res = sdk.employee.deleteEmployeeRevisionByNumber(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmployeeSecret

Deletes an employee secret from the given resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployeeSecretRequest;
import org.openapis.openapi.models.operations.DeleteEmployeeSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployeeSecretRequest req = new DeleteEmployeeSecretRequest("hic", "recusandae", "omnis", "facilis", "perspiciatis");            

            DeleteEmployeeSecretResponse res = sdk.employee.deleteEmployeeSecret(req);

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

            GetAEAssessmentFromEmployeeRequest req = new GetAEAssessmentFromEmployeeRequest("voluptatem", "porro", "consequuntur", "blanditiis", "error");            

            GetAEAssessmentFromEmployeeResponse res = sdk.employee.getAEAssessmentFromEmployee(req);

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

            GetAEAssessmentsFromEmployeeRequest req = new GetAEAssessmentsFromEmployeeRequest("eaque", "occaecati", "rerum", "adipisci");            

            GetAEAssessmentsFromEmployeeResponse res = sdk.employee.getAEAssessmentsFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllEmployeeTags

Gets all the employee tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllEmployeeTagsRequest;
import org.openapis.openapi.models.operations.GetAllEmployeeTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllEmployeeTagsRequest req = new GetAllEmployeeTagsRequest("asperiores", "earum", "modi");            

            GetAllEmployeeTagsResponse res = sdk.employee.getAllEmployeeTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentariesFromEmployee

Get links to all commentaries for the specified employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentariesFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetCommentariesFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommentariesFromEmployeeRequest req = new GetCommentariesFromEmployeeRequest("iste", "dolorum", "deleniti", "pariatur");            

            GetCommentariesFromEmployeeResponse res = sdk.employee.getCommentariesFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentaryFromEmployee

Gets the specified commentary report from the employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentaryFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetCommentaryFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommentaryFromEmployeeRequest req = new GetCommentaryFromEmployeeRequest("provident", "nobis", "libero", "delectus", "quaerat");            

            GetCommentaryFromEmployeeResponse res = sdk.employee.getCommentaryFromEmployee(req);

            if (res.commentary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentaryFromPayRunByEmployee

Get commentary from payrun by specified employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentaryFromPayRunByEmployeeRequest;
import org.openapis.openapi.models.operations.GetCommentaryFromPayRunByEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommentaryFromPayRunByEmployeeRequest req = new GetCommentaryFromPayRunByEmployeeRequest("quos", "aliquid", "dolorem", "dolorem", "dolor", "qui");            

            GetCommentaryFromPayRunByEmployeeResponse res = sdk.employee.getCommentaryFromPayRunByEmployee(req);

            if (res.commentary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeByEffectiveDate

Returns the employee's state at the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployeeByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeByEffectiveDateRequest req = new GetEmployeeByEffectiveDateRequest("ipsum", "hic", LocalDate.parse("2021-07-10"), "voluptate", "dignissimos");            

            GetEmployeeByEffectiveDateResponse res = sdk.employee.getEmployeeByEffectiveDate(req);

            if (res.employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeFromEmployer

Gets the specified employee from employer by employee code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeFromEmployerRequest;
import org.openapis.openapi.models.operations.GetEmployeeFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeFromEmployerRequest req = new GetEmployeeFromEmployerRequest("reiciendis", "amet", "dolorum", "numquam");            

            GetEmployeeFromEmployerResponse res = sdk.employee.getEmployeeFromEmployer(req);

            if (res.employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeRevisionByNumber

Get the employee revision matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeRevisionByNumberRequest;
import org.openapis.openapi.models.operations.GetEmployeeRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeRevisionByNumberRequest req = new GetEmployeeRevisionByNumberRequest("veritatis", "ipsa", "ipsa", "iure", "odio");            

            GetEmployeeRevisionByNumberResponse res = sdk.employee.getEmployeeRevisionByNumber(req);

            if (res.employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeRevisionSummaries

Gets links to all employee revision summaries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeRevisionSummariesRequest;
import org.openapis.openapi.models.operations.GetEmployeeRevisionSummariesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeRevisionSummariesRequest req = new GetEmployeeRevisionSummariesRequest("quaerat", "accusamus", "quidem", "voluptatibus");            

            GetEmployeeRevisionSummariesResponse res = sdk.employee.getEmployeeRevisionSummaries(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeRevisionSummaryByNumber

Get the employee revision summary matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeRevisionSummaryByNumberRequest;
import org.openapis.openapi.models.operations.GetEmployeeRevisionSummaryByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeRevisionSummaryByNumberRequest req = new GetEmployeeRevisionSummaryByNumberRequest("voluptas", "natus", "eos", "atque", "sit");            

            GetEmployeeRevisionSummaryByNumberResponse res = sdk.employee.getEmployeeRevisionSummaryByNumber(req);

            if (res.employeeSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeRevisions

Gets links to all employee revisions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeRevisionsRequest;
import org.openapis.openapi.models.operations.GetEmployeeRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeRevisionsRequest req = new GetEmployeeRevisionsRequest("fugiat", "ab", "soluta", "dolorum");            

            GetEmployeeRevisionsResponse res = sdk.employee.getEmployeeRevisions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeSecret

Get the public visible employee secret object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeSecretRequest;
import org.openapis.openapi.models.operations.GetEmployeeSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeSecretRequest req = new GetEmployeeSecretRequest("iusto", "voluptate", "dolorum", "deleniti", "omnis");            

            GetEmployeeSecretResponse res = sdk.employee.getEmployeeSecret(req);

            if (res.employeeSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeSecrets

Get all the employee secret links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeSecretsRequest;
import org.openapis.openapi.models.operations.GetEmployeeSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeSecretsRequest req = new GetEmployeeSecretsRequest("necessitatibus", "distinctio", "asperiores", "nihil");            

            GetEmployeeSecretsResponse res = sdk.employee.getEmployeeSecrets(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeSummariesByEffectiveDate

Get links to all employee summaries for the employer on specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeSummariesByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployeeSummariesByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeSummariesByEffectiveDateRequest req = new GetEmployeeSummariesByEffectiveDateRequest("ipsum", "voluptate", LocalDate.parse("2021-03-10"), "eius");            

            GetEmployeeSummariesByEffectiveDateResponse res = sdk.employee.getEmployeeSummariesByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeSummariesFromEmployer

Get links to all employee summaries for the specified employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeSummariesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetEmployeeSummariesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeSummariesFromEmployerRequest req = new GetEmployeeSummariesFromEmployerRequest("aspernatur", "perferendis", "amet");            

            GetEmployeeSummariesFromEmployerResponse res = sdk.employee.getEmployeeSummariesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeSummaryByEffectiveDate

Gets the employee summary for the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeSummaryByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployeeSummaryByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeSummaryByEffectiveDateRequest req = new GetEmployeeSummaryByEffectiveDateRequest("optio", "accusamus", LocalDate.parse("2022-02-04"), "suscipit", "deserunt");            

            GetEmployeeSummaryByEffectiveDateResponse res = sdk.employee.getEmployeeSummaryByEffectiveDate(req);

            if (res.employeeSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeSummaryFromEmployer

Gets the specified employee summary data from employer by employee code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeSummaryFromEmployerRequest;
import org.openapis.openapi.models.operations.GetEmployeeSummaryFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeSummaryFromEmployerRequest req = new GetEmployeeSummaryFromEmployerRequest("provident", "minima", "repellendus", "totam");            

            GetEmployeeSummaryFromEmployerResponse res = sdk.employee.getEmployeeSummaryFromEmployer(req);

            if (res.employeeSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeesByEffectiveDate

Get links to all employees for the employer on specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeesByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployeesByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeesByEffectiveDateRequest req = new GetEmployeesByEffectiveDateRequest("similique", "alias", LocalDate.parse("2022-01-24"), "tempora");            

            GetEmployeesByEffectiveDateResponse res = sdk.employee.getEmployeesByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeesFromEmployer

Get links to all employees for the specified employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetEmployeesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeesFromEmployerRequest req = new GetEmployeesFromEmployerRequest("vel", "quod", "officiis");            

            GetEmployeesFromEmployerResponse res = sdk.employee.getEmployeesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeesFromPayRun

Gets links to all employees included in the specified pay run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeesFromPayRunRequest;
import org.openapis.openapi.models.operations.GetEmployeesFromPayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeesFromPayRunRequest req = new GetEmployeesFromPayRunRequest("qui", "dolorum", "a", "esse", "harum");            

            GetEmployeesFromPayRunResponse res = sdk.employee.getEmployeesFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeesFromPaySchedule

Gets links to all employee revisions that have ever existed in the specified pay schedule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeesFromPayScheduleRequest;
import org.openapis.openapi.models.operations.GetEmployeesFromPayScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeesFromPayScheduleRequest req = new GetEmployeesFromPayScheduleRequest("iusto", "ipsum", "quisquam", "tenetur");            

            GetEmployeesFromPayScheduleResponse res = sdk.employee.getEmployeesFromPaySchedule(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeesFromPayScheduleOnEffectiveDate

Gets links to all employee revisions in the specified pay schedule for the given effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployeesFromPayScheduleOnEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeesFromPayScheduleOnEffectiveDateRequest req = new GetEmployeesFromPayScheduleOnEffectiveDateRequest("amet", "tempore", LocalDate.parse("2022-03-28"), "enim", "dolorem");            

            GetEmployeesFromPayScheduleOnEffectiveDateResponse res = sdk.employee.getEmployeesFromPayScheduleOnEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeesWithTag

Gets the employees with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeesWithTagRequest;
import org.openapis.openapi.models.operations.GetEmployeesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeesWithTagRequest req = new GetEmployeesWithTagRequest("sapiente", "totam", "nihil", "sit");            

            GetEmployeesWithTagResponse res = sdk.employee.getEmployeesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunsFromEmployee

Get links to all pay runs for the specified employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunsFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetPayRunsFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunsFromEmployeeRequest req = new GetPayRunsFromEmployeeRequest("expedita", "neque", "sed", "vel");            

            GetPayRunsFromEmployeeResponse res = sdk.employee.getPayRunsFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchEmployee

Patches the specified employee with the supplied values

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchEmployeeRequest;
import org.openapis.openapi.models.operations.PatchEmployeeResponse;
import org.openapis.openapi.models.shared.Employee;
import org.openapis.openapi.models.shared.EmployeeEmployee;
import org.openapis.openapi.models.shared.EmployeeEmployeeAEAssessmentOverrideEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeAEExclusionReasonCodeEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeAddress;
import org.openapis.openapi.models.shared.EmployeeEmployeeBankAccount;
import org.openapis.openapi.models.shared.EmployeeEmployeeEmployeePartner;
import org.openapis.openapi.models.shared.EmployeeEmployeeGenderEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeLeaverReasonEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeMaritalStatusEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeNicLiabilityEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeePaySchedule;
import org.openapis.openapi.models.shared.EmployeeEmployeePaymentMethodEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeRegionEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeRuleExclusionsEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeSecondedEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeStarterDeclarationEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeTerritoryEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeWorkingWeekEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchEmployeeRequest req = new PatchEmployeeRequest("libero", "voluptas",                 new Employee() {{
                                employee = new EmployeeEmployee() {{
                                    aeAssessmentOverride = EmployeeEmployeeAEAssessmentOverrideEnum.CEASED_MEMBERSHIP;
                                    aeAssessmentOverrideDate = LocalDate.parse("2022-10-14");
                                    aeExclusionReasonCode = EmployeeEmployeeAEExclusionReasonCodeEnum.TEMPORARY_UK_WORKER;
                                    aePostponementDate = LocalDate.parse("2022-05-31");
                                    address = new EmployeeEmployeeAddress() {{
                                        address1 = "maxime";
                                        address2 = "pariatur";
                                        address3 = "soluta";
                                        address4 = "dicta";
                                        country = "Pakistan";
                                        postcode = "21177-3458";
                                    }};;
                                    bankAccount = new EmployeeEmployeeBankAccount() {{
                                        accountName = "qui";
                                        accountNumber = "neque";
                                        branchName = "fugit";
                                        reference = "magni";
                                        sortCode = "odio";
                                    }};;
                                    code = "sunt";
                                    dateOfBirth = LocalDate.parse("2022-04-12");
                                    deactivated = false;
                                    directorshipAppointmentDate = LocalDate.parse("2022-11-28");
                                    eeaCitizen = false;
                                    epm6 = false;
                                    effectiveDate = LocalDate.parse("2020-10-05");
                                    employeePartner = new EmployeeEmployeeEmployeePartner() {{
                                        firstName = "Nella";
                                        initials = "et";
                                        lastName = "Turner";
                                        middleName = "ipsum";
                                        niNumber = "veritatis";
                                    }};;
                                    firstName = "Nellie";
                                    gender = EmployeeEmployeeGenderEnum.MALE;
                                    hoursPerWeek = 7316.94;
                                    initials = "cupiditate";
                                    irregularEmployment = false;
                                    isAgencyWorker = false;
                                    lastName = "Bayer";
                                    leaverReason = EmployeeEmployeeLeaverReasonEnum.OTHER;
                                    leavingDate = LocalDate.parse("2022-09-16");
                                    maritalStatus = EmployeeEmployeeMaritalStatusEnum.SINGLE;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("dolorum", "architecto");
                                    }};
                                    middleName = "quae";
                                    nextRevisionDate = LocalDate.parse("2022-06-12");
                                    niNumber = "itaque";
                                    nicLiability = EmployeeEmployeeNicLiabilityEnum.HAS_OTHER_JOB;
                                    offPayrollWorker = false;
                                    onStrike = false;
                                    p45IssuedDate = LocalDate.parse("2021-05-02");
                                    passportNumber = "porro";
                                    paySchedule = new EmployeeEmployeePaySchedule() {{
                                        atHref = "doloribus";
                                        atRel = "ut";
                                        atTitle = "facilis";
                                    }};;
                                    paymentMethod = EmployeeEmployeePaymentMethodEnum.BACS;
                                    paymentToANonIndividual = false;
                                    region = EmployeeEmployeeRegionEnum.NOT_SET;
                                    revision = 63955;
                                    ruleExclusions = EmployeeEmployeeRuleExclusionsEnum.LEAVER_END_INSTRUCTIONS_RULE;
                                    seconded = EmployeeEmployeeSecondedEnum.STAY183_DAYS_OR_MORE;
                                    startDate = LocalDate.parse("2021-01-17");
                                    starterDeclaration = EmployeeEmployeeStarterDeclarationEnum.C;
                                    territory = EmployeeEmployeeTerritoryEnum.UNITED_KINGDOM;
                                    title = "Dr.";
                                    veteranPeriodStartDate = LocalDate.parse("2022-04-29");
                                    workingWeek = EmployeeEmployeeWorkingWeekEnum.TUESDAY;
                                }};;
                            }};, "delectus", "voluptate");            

            PatchEmployeeResponse res = sdk.employee.patchEmployee(req);

            if (res.employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEmployeeIntoEmployer

Create a new employee object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEmployeeIntoEmployerRequest;
import org.openapis.openapi.models.operations.PostEmployeeIntoEmployerResponse;
import org.openapis.openapi.models.shared.Employee;
import org.openapis.openapi.models.shared.EmployeeEmployee;
import org.openapis.openapi.models.shared.EmployeeEmployeeAEAssessmentOverrideEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeAEExclusionReasonCodeEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeAddress;
import org.openapis.openapi.models.shared.EmployeeEmployeeBankAccount;
import org.openapis.openapi.models.shared.EmployeeEmployeeEmployeePartner;
import org.openapis.openapi.models.shared.EmployeeEmployeeGenderEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeLeaverReasonEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeMaritalStatusEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeNicLiabilityEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeePaySchedule;
import org.openapis.openapi.models.shared.EmployeeEmployeePaymentMethodEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeRegionEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeRuleExclusionsEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeSecondedEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeStarterDeclarationEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeTerritoryEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeWorkingWeekEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEmployeeIntoEmployerRequest req = new PostEmployeeIntoEmployerRequest("consectetur", "vero",                 new Employee() {{
                                employee = new EmployeeEmployee() {{
                                    aeAssessmentOverride = EmployeeEmployeeAEAssessmentOverrideEnum.EXCLUDED;
                                    aeAssessmentOverrideDate = LocalDate.parse("2022-01-22");
                                    aeExclusionReasonCode = EmployeeEmployeeAEExclusionReasonCodeEnum.WORKER_WULS_WITHIN12_MONTH;
                                    aePostponementDate = LocalDate.parse("2021-07-17");
                                    address = new EmployeeEmployeeAddress() {{
                                        address1 = "similique";
                                        address2 = "facilis";
                                        address3 = "vero";
                                        address4 = "ducimus";
                                        country = "France";
                                        postcode = "81670-9381";
                                    }};;
                                    bankAccount = new EmployeeEmployeeBankAccount() {{
                                        accountName = "porro";
                                        accountNumber = "maiores";
                                        branchName = "doloribus";
                                        reference = "iusto";
                                        sortCode = "eligendi";
                                    }};;
                                    code = "ducimus";
                                    dateOfBirth = LocalDate.parse("2022-05-12");
                                    deactivated = false;
                                    directorshipAppointmentDate = LocalDate.parse("2022-08-19");
                                    eeaCitizen = false;
                                    epm6 = false;
                                    effectiveDate = LocalDate.parse("2022-11-12");
                                    employeePartner = new EmployeeEmployeeEmployeePartner() {{
                                        firstName = "Hilbert";
                                        initials = "possimus";
                                        lastName = "Gulgowski";
                                        middleName = "ratione";
                                        niNumber = "ex";
                                    }};;
                                    firstName = "Johnpaul";
                                    gender = EmployeeEmployeeGenderEnum.UNKNOWN;
                                    hoursPerWeek = 2243.17;
                                    initials = "maiores";
                                    irregularEmployment = false;
                                    isAgencyWorker = false;
                                    lastName = "Boyle";
                                    leaverReason = EmployeeEmployeeLeaverReasonEnum.REDUNDANT;
                                    leavingDate = LocalDate.parse("2021-04-17");
                                    maritalStatus = EmployeeEmployeeMaritalStatusEnum.WIDOWED;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("sapiente", "quisquam");
                                        put("saepe", "ea");
                                    }};
                                    middleName = "impedit";
                                    nextRevisionDate = LocalDate.parse("2022-09-01");
                                    niNumber = "aliquid";
                                    nicLiability = EmployeeEmployeeNicLiabilityEnum.HAS_OTHER_JOB;
                                    offPayrollWorker = false;
                                    onStrike = false;
                                    p45IssuedDate = LocalDate.parse("2022-08-05");
                                    passportNumber = "quo";
                                    paySchedule = new EmployeeEmployeePaySchedule() {{
                                        atHref = "consectetur";
                                        atRel = "recusandae";
                                        atTitle = "aspernatur";
                                    }};;
                                    paymentMethod = EmployeeEmployeePaymentMethodEnum.CASH;
                                    paymentToANonIndividual = false;
                                    region = EmployeeEmployeeRegionEnum.NOT_SET;
                                    revision = 952871;
                                    ruleExclusions = EmployeeEmployeeRuleExclusionsEnum.YTD_INSTRUCTION_RULE;
                                    seconded = EmployeeEmployeeSecondedEnum.NOT_SET;
                                    startDate = LocalDate.parse("2022-06-20");
                                    starterDeclaration = EmployeeEmployeeStarterDeclarationEnum.C;
                                    territory = EmployeeEmployeeTerritoryEnum.UNITED_KINGDOM;
                                    title = "Mrs.";
                                    veteranPeriodStartDate = LocalDate.parse("2022-02-12");
                                    workingWeek = EmployeeEmployeeWorkingWeekEnum.NONE;
                                }};;
                            }};, "non");            

            PostEmployeeIntoEmployerResponse res = sdk.employee.postEmployeeIntoEmployer(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEmployeeSecret

Create new employee secret using auto generated resource location key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEmployeeSecretRequest;
import org.openapis.openapi.models.operations.PostEmployeeSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEmployeeSecretRequest req = new PostEmployeeSecretRequest("et", "dolorum", "laborum", "placeat");            

            PostEmployeeSecretResponse res = sdk.employee.postEmployeeSecret(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmployeeIntoEmployer

Updates the existing specified employee object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmployeeIntoEmployerRequest;
import org.openapis.openapi.models.operations.PutEmployeeIntoEmployerResponse;
import org.openapis.openapi.models.shared.Employee;
import org.openapis.openapi.models.shared.EmployeeEmployee;
import org.openapis.openapi.models.shared.EmployeeEmployeeAEAssessmentOverrideEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeAEExclusionReasonCodeEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeAddress;
import org.openapis.openapi.models.shared.EmployeeEmployeeBankAccount;
import org.openapis.openapi.models.shared.EmployeeEmployeeEmployeePartner;
import org.openapis.openapi.models.shared.EmployeeEmployeeGenderEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeLeaverReasonEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeMaritalStatusEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeNicLiabilityEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeePaySchedule;
import org.openapis.openapi.models.shared.EmployeeEmployeePaymentMethodEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeRegionEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeRuleExclusionsEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeSecondedEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeStarterDeclarationEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeTerritoryEnum;
import org.openapis.openapi.models.shared.EmployeeEmployeeWorkingWeekEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutEmployeeIntoEmployerRequest req = new PutEmployeeIntoEmployerRequest("velit", "eum",                 new Employee() {{
                                employee = new EmployeeEmployee() {{
                                    aeAssessmentOverride = EmployeeEmployeeAEAssessmentOverrideEnum.VOLUNTARY_JOINER;
                                    aeAssessmentOverrideDate = LocalDate.parse("2021-04-30");
                                    aeExclusionReasonCode = EmployeeEmployeeAEExclusionReasonCodeEnum.WORKER_WULS_BEYOND12_MONTH;
                                    aePostponementDate = LocalDate.parse("2021-11-11");
                                    address = new EmployeeEmployeeAddress() {{
                                        address1 = "libero";
                                        address2 = "quasi";
                                        address3 = "tempora";
                                        address4 = "numquam";
                                        country = "Bulgaria";
                                        postcode = "04342-4456";
                                    }};;
                                    bankAccount = new EmployeeEmployeeBankAccount() {{
                                        accountName = "reprehenderit";
                                        accountNumber = "quidem";
                                        branchName = "fugiat";
                                        reference = "ut";
                                        sortCode = "eum";
                                    }};;
                                    code = "suscipit";
                                    dateOfBirth = LocalDate.parse("2022-06-16");
                                    deactivated = false;
                                    directorshipAppointmentDate = LocalDate.parse("2021-06-04");
                                    eeaCitizen = false;
                                    epm6 = false;
                                    effectiveDate = LocalDate.parse("2022-12-11");
                                    employeePartner = new EmployeeEmployeeEmployeePartner() {{
                                        firstName = "Maggie";
                                        initials = "quidem";
                                        lastName = "DuBuque";
                                        middleName = "quo";
                                        niNumber = "illum";
                                    }};;
                                    firstName = "Orion";
                                    gender = EmployeeEmployeeGenderEnum.FEMALE;
                                    hoursPerWeek = 2594.22;
                                    initials = "eos";
                                    irregularEmployment = false;
                                    isAgencyWorker = false;
                                    lastName = "Hintz";
                                    leaverReason = EmployeeEmployeeLeaverReasonEnum.RESIGNED;
                                    leavingDate = LocalDate.parse("2022-12-24");
                                    maritalStatus = EmployeeEmployeeMaritalStatusEnum.SINGLE;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("ipsam", "aspernatur");
                                        put("sequi", "quo");
                                        put("esse", "recusandae");
                                        put("aperiam", "distinctio");
                                    }};
                                    middleName = "quod";
                                    nextRevisionDate = LocalDate.parse("2022-12-03");
                                    niNumber = "nihil";
                                    nicLiability = EmployeeEmployeeNicLiabilityEnum.IS_APPRENTICE;
                                    offPayrollWorker = false;
                                    onStrike = false;
                                    p45IssuedDate = LocalDate.parse("2022-01-30");
                                    passportNumber = "odio";
                                    paySchedule = new EmployeeEmployeePaySchedule() {{
                                        atHref = "occaecati";
                                        atRel = "commodi";
                                        atTitle = "sapiente";
                                    }};;
                                    paymentMethod = EmployeeEmployeePaymentMethodEnum.CASH;
                                    paymentToANonIndividual = false;
                                    region = EmployeeEmployeeRegionEnum.SCOTLAND;
                                    revision = 475289;
                                    ruleExclusions = EmployeeEmployeeRuleExclusionsEnum.NONE;
                                    seconded = EmployeeEmployeeSecondedEnum.IN_OUT_UK;
                                    startDate = LocalDate.parse("2022-06-11");
                                    starterDeclaration = EmployeeEmployeeStarterDeclarationEnum.B;
                                    territory = EmployeeEmployeeTerritoryEnum.UNITED_KINGDOM;
                                    title = "Mr.";
                                    veteranPeriodStartDate = LocalDate.parse("2022-09-18");
                                    workingWeek = EmployeeEmployeeWorkingWeekEnum.ALL_WEEK_DAYS;
                                }};;
                            }};, "mollitia", "incidunt");            

            PutEmployeeIntoEmployerResponse res = sdk.employee.putEmployeeIntoEmployer(req);

            if (res.employee != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmployeeSecret

Create / update an employee secret at the given resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmployeeSecretRequest;
import org.openapis.openapi.models.operations.PutEmployeeSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutEmployeeSecretRequest req = new PutEmployeeSecretRequest("atque", "explicabo", "minima", "nisi", "fugit");            

            PutEmployeeSecretResponse res = sdk.employee.putEmployeeSecret(req);

            if (res.employeeSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
