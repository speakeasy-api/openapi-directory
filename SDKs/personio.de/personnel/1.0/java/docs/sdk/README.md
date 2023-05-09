# SDK

## Overview

API for reading and writing personnel data incl. data about attendances and absences

### Available Operations

* [deleteCompanyAttendancesId](#deletecompanyattendancesid) - This endpoint is responsible for deleting attendance data for the company employees.
* [deleteCompanyTimeOffsId](#deletecompanytimeoffsid) - This endpoint is responsible for deleting absence period data for the company employees.
* [getCompanyAttendances](#getcompanyattendances) - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
* [getCompanyEmployees](#getcompanyemployees) - List Employees
* [getCompanyEmployeesEmployeeId](#getcompanyemployeesemployeeid) - Show employee by ID
* [getCompanyEmployeesEmployeeIdProfilePictureWidth](#getcompanyemployeesemployeeidprofilepicturewidth) - Show employee profile picture
* [getCompanyTimeOffTypes](#getcompanytimeofftypes) - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
* [getCompanyTimeOffs](#getcompanytimeoffs) - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
* [getCompanyTimeOffsId](#getcompanytimeoffsid) - Absence Period
* [patchCompanyAttendancesId](#patchcompanyattendancesid) - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
* [postCompanyAttendances](#postcompanyattendances) - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
* [postCompanyEmployees](#postcompanyemployees) - Create an employee
* [postCompanyTimeOffs](#postcompanytimeoffs) - This endpoint is responsible for adding absence data for the company employees.

## deleteCompanyAttendancesId

This endpoint is responsible for deleting attendance data for the company employees.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdRequest;
import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompanyAttendancesIdRequest req = new DeleteCompanyAttendancesIdRequest(592845);            

            DeleteCompanyAttendancesIdResponse res = sdk.sdk.deleteCompanyAttendancesId(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCompanyTimeOffsId

This endpoint is responsible for deleting absence period data for the company employees.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCompanyTimeOffsIdRequest;
import org.openapis.openapi.models.operations.DeleteCompanyTimeOffsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompanyTimeOffsIdRequest req = new DeleteCompanyTimeOffsIdRequest(715190);            

            DeleteCompanyTimeOffsIdResponse res = sdk.sdk.deleteCompanyTimeOffsId(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompanyAttendances

This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyAttendancesRequest;
import org.openapis.openapi.models.operations.GetCompanyAttendancesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanyAttendancesRequest req = new GetCompanyAttendancesRequest(LocalDate.parse("2021-03-11"), LocalDate.parse("2021-05-14")) {{
                employees = new Long[]{{
                    add(423655L),
                    add(623564L),
                    add(645894L),
                    add(384382L),
                }};
                limit = 437587L;
                offset = 297534L;
                updatedFrom = "debitis";
                updatedTo = "ipsa";
            }};            

            GetCompanyAttendancesResponse res = sdk.sdk.getCompanyAttendances(req);

            if (res.attendancePeriodsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompanyEmployees

List Employees

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyEmployeesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanyEmployeesResponse res = sdk.sdk.getCompanyEmployees();

            if (res.employeesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompanyEmployeesEmployeeId

Show employee by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyEmployeesEmployeeIdRequest;
import org.openapis.openapi.models.operations.GetCompanyEmployeesEmployeeIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanyEmployeesEmployeeIdRequest req = new GetCompanyEmployeesEmployeeIdRequest(963663);            

            GetCompanyEmployeesEmployeeIdResponse res = sdk.sdk.getCompanyEmployeesEmployeeId(req);

            if (res.employeeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompanyEmployeesEmployeeIdProfilePictureWidth

Show employee profile picture

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest;
import org.openapis.openapi.models.operations.GetCompanyEmployeesEmployeeIdProfilePictureWidthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest req = new GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest(272656, 383441);            

            GetCompanyEmployeesEmployeeIdProfilePictureWidthResponse res = sdk.sdk.getCompanyEmployeesEmployeeIdProfilePictureWidth(req);

            if (res.getCompanyEmployeesEmployeeIdProfilePictureWidth200ImagePngBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompanyTimeOffTypes

Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyTimeOffTypesRequest;
import org.openapis.openapi.models.operations.GetCompanyTimeOffTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanyTimeOffTypesRequest req = new GetCompanyTimeOffTypesRequest() {{
                limit = 477665L;
                offset = 791725L;
            }};            

            GetCompanyTimeOffTypesResponse res = sdk.sdk.getCompanyTimeOffTypes(req);

            if (res.getCompanyTimeOffTypes200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompanyTimeOffs

This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyTimeOffsRequest;
import org.openapis.openapi.models.operations.GetCompanyTimeOffsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanyTimeOffsRequest req = new GetCompanyTimeOffsRequest() {{
                employees = new Long[]{{
                    add(528895L),
                    add(479977L),
                    add(568045L),
                    add(392785L),
                }};
                endDate = LocalDate.parse("2020-06-29");
                limit = 71036L;
                offset = 337396L;
                startDate = LocalDate.parse("2022-05-09");
                updatedFrom = "perferendis";
                updatedTo = "ipsam";
            }};            

            GetCompanyTimeOffsResponse res = sdk.sdk.getCompanyTimeOffs(req);

            if (res.absencePeriodsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompanyTimeOffsId

Absence Period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyTimeOffsIdRequest;
import org.openapis.openapi.models.operations.GetCompanyTimeOffsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanyTimeOffsIdRequest req = new GetCompanyTimeOffsIdRequest(832620);            

            GetCompanyTimeOffsIdResponse res = sdk.sdk.getCompanyTimeOffsId(req);

            if (res.absencePeriodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchCompanyAttendancesId

This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCompanyAttendancesIdRequest;
import org.openapis.openapi.models.operations.PatchCompanyAttendancesIdResponse;
import org.openapis.openapi.models.shared.UpdateAttendancePeriodRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCompanyAttendancesIdRequest req = new PatchCompanyAttendancesIdRequest(                new UpdateAttendancePeriodRequest() {{
                                break_ = 957156;
                                comment = "quo";
                                date = LocalDate.parse("2022-02-17");
                                endTime = "at";
                                startTime = "maiores";
                            }};, 473608);            

            PatchCompanyAttendancesIdResponse res = sdk.sdk.patchCompanyAttendancesId(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompanyAttendances

This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompanyAttendancesResponse;
import org.openapis.openapi.models.shared.NewAttendancePeriodRequest;
import org.openapis.openapi.models.shared.NewAttendancePeriodRequestAttendances;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.NewAttendancePeriodRequest req = new NewAttendancePeriodRequest() {{
                attendances = new org.openapis.openapi.models.shared.NewAttendancePeriodRequestAttendances[]{{
                    add(new NewAttendancePeriodRequestAttendances(639921, "occaecati", LocalDate.parse("2022-06-18"), 944669L, "optio", "totam") {{
                        break_ = 800911;
                        comment = "esse";
                        date = LocalDate.parse("2021-06-10");
                        employee = 678880L;
                        endTime = "dicta";
                        startTime = "nam";
                    }}),
                    add(new NewAttendancePeriodRequestAttendances(456150, "ipsum", LocalDate.parse("2022-09-24"), 18789L, "ad", "natus") {{
                        break_ = 105907;
                        comment = "commodi";
                        date = LocalDate.parse("2022-09-26");
                        employee = 186332L;
                        endTime = "impedit";
                        startTime = "cum";
                    }}),
                    add(new NewAttendancePeriodRequestAttendances(681820, "in", LocalDate.parse("2022-05-22"), 437032L, "saepe", "quidem") {{
                        break_ = 149675;
                        comment = "iste";
                        date = LocalDate.parse("2022-05-20");
                        employee = 386489L;
                        endTime = "hic";
                        startTime = "saepe";
                    }}),
                    add(new NewAttendancePeriodRequestAttendances(210382, "corporis", LocalDate.parse("2022-04-01"), 315428L, "omnis", "nemo") {{
                        break_ = 99280;
                        comment = "ipsa";
                        date = LocalDate.parse("2020-12-31");
                        employee = 653140L;
                        endTime = "laborum";
                        startTime = "dolores";
                    }}),
                }};
            }};            

            PostCompanyAttendancesResponse res = sdk.sdk.postCompanyAttendances(req);

            if (res.newAttendancePeriodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompanyEmployees

Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompanyEmployeesRequestBody;
import org.openapis.openapi.models.operations.PostCompanyEmployeesRequestBodyEmployeeGenderEnum;
import org.openapis.openapi.models.operations.PostCompanyEmployeesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompanyEmployeesRequestBody req = new PostCompanyEmployeesRequestBody("minima", "excepturi", "accusantium") {{
                employeeDepartment = "iure";
                employeeGender = PostCompanyEmployeesRequestBodyEmployeeGenderEnum.FEMALE;
                employeeHireDate = LocalDate.parse("2020-02-15");
                employeePosition = "architecto";
                employeeWeeklyHours = 6527.9;
            }};            

            PostCompanyEmployeesResponse res = sdk.sdk.postCompanyEmployees(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompanyTimeOffs

This endpoint is responsible for adding absence data for the company employees.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompanyTimeOffsResponse;
import org.openapis.openapi.models.shared.CreateTimeOffPeriodRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTimeOffPeriodRequest req = new CreateTimeOffPeriodRequest(208876L, LocalDate.parse("2022-09-05"), false, false, LocalDate.parse("2021-01-15"), 581850L) {{
                comment = "numquam";
            }};            

            PostCompanyTimeOffsResponse res = sdk.sdk.postCompanyTimeOffs(req);

            if (res.postCompanyTimeOffs201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
