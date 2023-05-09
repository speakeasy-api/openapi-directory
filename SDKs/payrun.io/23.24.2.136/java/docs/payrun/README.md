# payRun

### Available Operations

* [deletePayRun](#deletepayrun) - Deletes a pay run
* [deletePayRunEmployee](#deletepayrunemployee) - Deletes a pay run employee
* [getAEAssessmentsFromPayRun](#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [getAllPayRunTags](#getallpayruntags) - Get all pay run tags
* [getCommentariesFromPayRun](#getcommentariesfrompayrun) - Get links to all commentaries for the specified pay run
* [getCommentaryFromPayRunByEmployee](#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [getEmployeesFromPayRun](#getemployeesfrompayrun) - Get employees from the pay run
* [getPayRunFromPaySchedule](#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [getPayRunsFromEmployee](#getpayrunsfromemployee) - Gets the pay runs from the employee
* [getPayRunsFromPaySchedule](#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [getPayRunsWithTag](#getpayrunswithtag) - Get pay runs with tag
* [getReportLinesFromPayRun](#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

## deletePayRun

Delete the specified pay run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayRunRequest;
import org.openapis.openapi.models.operations.DeletePayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayRunRequest req = new DeletePayRunRequest("dignissimos", "optio", "necessitatibus", "corporis", "qui");            

            DeletePayRunResponse res = sdk.payRun.deletePayRun(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayRunEmployee

Delete pay run results for a single employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayRunEmployeeRequest;
import org.openapis.openapi.models.operations.DeletePayRunEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayRunEmployeeRequest req = new DeletePayRunEmployeeRequest("expedita", "voluptatum", "cupiditate", "minima", "placeat", "enim");            

            DeletePayRunEmployeeResponse res = sdk.payRun.deletePayRunEmployee(req);

            if (res.statusCode == 200) {
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

            GetAEAssessmentsFromPayRunRequest req = new GetAEAssessmentsFromPayRunRequest("neque", "in", "minus", "eum", "modi");            

            GetAEAssessmentsFromPayRunResponse res = sdk.payRun.getAEAssessmentsFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPayRunTags

Gets all the pay run tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPayRunTagsRequest;
import org.openapis.openapi.models.operations.GetAllPayRunTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPayRunTagsRequest req = new GetAllPayRunTagsRequest("corporis", "magnam", "voluptates", "maiores");            

            GetAllPayRunTagsResponse res = sdk.payRun.getAllPayRunTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommentariesFromPayRun

Get links to all commentaries for the specified pay run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentariesFromPayRunRequest;
import org.openapis.openapi.models.operations.GetCommentariesFromPayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommentariesFromPayRunRequest req = new GetCommentariesFromPayRunRequest("tempore", "aperiam", "libero", "ratione", "labore");            

            GetCommentariesFromPayRunResponse res = sdk.payRun.getCommentariesFromPayRun(req);

            if (res.linkCollection != null) {
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

            GetCommentaryFromPayRunByEmployeeRequest req = new GetCommentaryFromPayRunByEmployeeRequest("totam", "occaecati", "voluptas", "quo", "velit", "minus");            

            GetCommentaryFromPayRunByEmployeeResponse res = sdk.payRun.getCommentaryFromPayRunByEmployee(req);

            if (res.commentary != null) {
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

            GetEmployeesFromPayRunRequest req = new GetEmployeesFromPayRunRequest("fuga", "nostrum", "est", "impedit", "delectus");            

            GetEmployeesFromPayRunResponse res = sdk.payRun.getEmployeesFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunFromPaySchedule

Returns the pay run from the pay schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunFromPayScheduleRequest;
import org.openapis.openapi.models.operations.GetPayRunFromPayScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunFromPayScheduleRequest req = new GetPayRunFromPayScheduleRequest("tempore", "vero", "odit", "repellat", "pariatur");            

            GetPayRunFromPayScheduleResponse res = sdk.payRun.getPayRunFromPaySchedule(req);

            if (res.payRun != null) {
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

            GetPayRunsFromEmployeeRequest req = new GetPayRunsFromEmployeeRequest("nemo", "reprehenderit", "aperiam", "odio");            

            GetPayRunsFromEmployeeResponse res = sdk.payRun.getPayRunsFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunsFromPaySchedule

Get links to all pay runs for the specified pay schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunsFromPayScheduleRequest;
import org.openapis.openapi.models.operations.GetPayRunsFromPayScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunsFromPayScheduleRequest req = new GetPayRunsFromPayScheduleRequest("minima", "in", "ducimus", "excepturi");            

            GetPayRunsFromPayScheduleResponse res = sdk.payRun.getPayRunsFromPaySchedule(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunsWithTag

Gets the pay runs with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunsWithTagRequest;
import org.openapis.openapi.models.operations.GetPayRunsWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunsWithTagRequest req = new GetPayRunsWithTagRequest("dolores", "error", "veritatis", "ducimus", "voluptate");            

            GetPayRunsWithTagResponse res = sdk.payRun.getPayRunsWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportLinesFromPayRun

Returns all report lines associated with the specified pay run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportLinesFromPayRunRequest;
import org.openapis.openapi.models.operations.GetReportLinesFromPayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportLinesFromPayRunRequest req = new GetReportLinesFromPayRunRequest("pariatur", "itaque", "similique", "optio", "ex");            

            GetReportLinesFromPayRunResponse res = sdk.payRun.getReportLinesFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
