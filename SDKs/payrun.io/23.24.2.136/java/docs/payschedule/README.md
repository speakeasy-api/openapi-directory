# paySchedule

### Available Operations

* [deletePaySchedule](#deletepayschedule) - Deletes a pay schedule
* [getAllPayScheduleTags](#getallpayscheduletags) - Get all pay schedule tags
* [getEmployeesFromPaySchedule](#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [getEmployeesFromPayScheduleOnEffectiveDate](#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [getPayRunFromPaySchedule](#getpayrunfrompayschedule) - Gets the pay run from the pay schedule
* [getPayRunsFromPaySchedule](#getpayrunsfrompayschedule) - Gets the pay runs from the pay schedule
* [getPayScheduleFromEmployer](#getpayschedulefromemployer) - Gets the specified pay schedule from the employer
* [getPaySchedulesFromEmployer](#getpayschedulesfromemployer) - Gets the pay schedule from the specified employer
* [getPaySchedulesWithTag](#getpayscheduleswithtag) - Get pay schedule with tag
* [postPaySchedule](#postpayschedule) - Create a new pay schedule
* [putPaySchedule](#putpayschedule) - Updates a pay schedule

## deletePaySchedule

Delete the specified pay schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayScheduleRequest;
import org.openapis.openapi.models.operations.DeletePayScheduleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayScheduleRequest req = new DeletePayScheduleRequest("quaerat", "commodi", "officiis", "placeat");            

            DeletePayScheduleResponse res = sdk.paySchedule.deletePaySchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPayScheduleTags

Gets all the pay schedule tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPayScheduleTagsRequest;
import org.openapis.openapi.models.operations.GetAllPayScheduleTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPayScheduleTagsRequest req = new GetAllPayScheduleTagsRequest("quidem", "exercitationem", "quam");            

            GetAllPayScheduleTagsResponse res = sdk.paySchedule.getAllPayScheduleTags(req);

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

            GetEmployeesFromPayScheduleRequest req = new GetEmployeesFromPayScheduleRequest("dolorem", "modi", "ipsa", "sint");            

            GetEmployeesFromPayScheduleResponse res = sdk.paySchedule.getEmployeesFromPaySchedule(req);

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

            GetEmployeesFromPayScheduleOnEffectiveDateRequest req = new GetEmployeesFromPayScheduleOnEffectiveDateRequest("vero", "sequi", LocalDate.parse("2020-10-11"), "dicta", "earum");            

            GetEmployeesFromPayScheduleOnEffectiveDateResponse res = sdk.paySchedule.getEmployeesFromPayScheduleOnEffectiveDate(req);

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

            GetPayRunFromPayScheduleRequest req = new GetPayRunFromPayScheduleRequest("veniam", "animi", "dolores", "nam", "dicta");            

            GetPayRunFromPayScheduleResponse res = sdk.paySchedule.getPayRunFromPaySchedule(req);

            if (res.payRun != null) {
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

            GetPayRunsFromPayScheduleRequest req = new GetPayRunsFromPayScheduleRequest("consequuntur", "necessitatibus", "nobis", "ipsa");            

            GetPayRunsFromPayScheduleResponse res = sdk.paySchedule.getPayRunsFromPaySchedule(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayScheduleFromEmployer

Returns the specified pay schedule object from employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayScheduleFromEmployerRequest;
import org.openapis.openapi.models.operations.GetPayScheduleFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayScheduleFromEmployerRequest req = new GetPayScheduleFromEmployerRequest("ducimus", "maiores", "veritatis", "quasi");            

            GetPayScheduleFromEmployerResponse res = sdk.paySchedule.getPayScheduleFromEmployer(req);

            if (res.paySchedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaySchedulesFromEmployer

Get links to all pay schedules for the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaySchedulesFromEmployerRequest;
import org.openapis.openapi.models.operations.GetPaySchedulesFromEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaySchedulesFromEmployerRequest req = new GetPaySchedulesFromEmployerRequest("laboriosam", "pariatur", "libero");            

            GetPaySchedulesFromEmployerResponse res = sdk.paySchedule.getPaySchedulesFromEmployer(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaySchedulesWithTag

Gets the pay schedules with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaySchedulesWithTagRequest;
import org.openapis.openapi.models.operations.GetPaySchedulesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaySchedulesWithTagRequest req = new GetPaySchedulesWithTagRequest("excepturi", "occaecati", "nemo", "aliquam");            

            GetPaySchedulesWithTagResponse res = sdk.paySchedule.getPaySchedulesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPaySchedule

Create a new pay schedule object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPayScheduleRequest;
import org.openapis.openapi.models.operations.PostPayScheduleResponse;
import org.openapis.openapi.models.shared.PaySchedule;
import org.openapis.openapi.models.shared.PaySchedulePaySchedule;
import org.openapis.openapi.models.shared.PaySchedulePaySchedulePayFrequencyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPayScheduleRequest req = new PostPayScheduleRequest("nostrum", "doloribus", "eligendi",                 new PaySchedule() {{
                                paySchedule = new PaySchedulePaySchedule() {{
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("enim", "hic");
                                        put("animi", "quas");
                                        put("totam", "molestias");
                                    }};
                                    name = "Ms. Jessica Turcotte";
                                    payFrequency = PaySchedulePaySchedulePayFrequencyEnum.YEARLY;
                                }};;
                            }};);            

            PostPayScheduleResponse res = sdk.paySchedule.postPaySchedule(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPaySchedule

Updates the existing specified pay schedule object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPayScheduleRequest;
import org.openapis.openapi.models.operations.PutPayScheduleResponse;
import org.openapis.openapi.models.shared.PaySchedule;
import org.openapis.openapi.models.shared.PaySchedulePaySchedule;
import org.openapis.openapi.models.shared.PaySchedulePaySchedulePayFrequencyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPayScheduleRequest req = new PutPayScheduleRequest("tempore", "libero", "velit",                 new PaySchedule() {{
                                paySchedule = new PaySchedulePaySchedule() {{
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("delectus", "impedit");
                                    }};
                                    name = "Dale Ferry";
                                    payFrequency = PaySchedulePaySchedulePayFrequencyEnum.WEEKLY;
                                }};;
                            }};, "quis");            

            PutPayScheduleResponse res = sdk.paySchedule.putPaySchedule(req);

            if (res.paySchedule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
