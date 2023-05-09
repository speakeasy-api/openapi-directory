# labor

### Available Operations

* [createBreakType](#createbreaktype) - CreateBreakType
* [createShift](#createshift) - CreateShift
* [deleteBreakType](#deletebreaktype) - DeleteBreakType
* [deleteShift](#deleteshift) - DeleteShift
* [getBreakType](#getbreaktype) - GetBreakType
* [getEmployeeWage](#getemployeewage) - GetEmployeeWage
* [getShift](#getshift) - GetShift
* [getTeamMemberWage](#getteammemberwage) - GetTeamMemberWage
* [listBreakTypes](#listbreaktypes) - ListBreakTypes
* [listEmployeeWages](#listemployeewages) - ListEmployeeWages
* [listTeamMemberWages](#listteammemberwages) - ListTeamMemberWages
* [listWorkweekConfigs](#listworkweekconfigs) - ListWorkweekConfigs
* [searchShifts](#searchshifts) - SearchShifts
* [updateBreakType](#updatebreaktype) - UpdateBreakType
* [updateShift](#updateshift) - UpdateShift
* [updateWorkweekConfig](#updateworkweekconfig) - UpdateWorkweekConfig

## createBreakType

Creates a new `BreakType`.

A `BreakType` is a template for creating `Break` objects.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `break_name`
- `expected_duration`
- `is_paid`

You can only have three `BreakType` instances per location. If you attempt to add a fourth
`BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBreakTypeResponse;
import org.openapis.openapi.models.operations.CreateBreakTypeSecurity;
import org.openapis.openapi.models.shared.BreakType;
import org.openapis.openapi.models.shared.CreateBreakTypeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateBreakTypeRequest req = new CreateBreakTypeRequest(                new BreakType("voluptates", "harum", false, "quaerat") {{
                                createdAt = "delectus";
                                id = "0c492b57-44d0-48a2-a67a-aee79e3c71ad";
                                updatedAt = "sequi";
                                version = 91510L;
                            }};) {{
                idempotencyKey = "tempore";
            }};            

            CreateBreakTypeResponse res = sdk.labor.createBreakType(req, new CreateBreakTypeSecurity("voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createBreakTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createShift

Creates a new `Shift`.

A `Shift` represents a complete workday for a single employee.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `employee_id`
- `start_at`

An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
- The `status` of the new `Shift` is `OPEN` and the employee has another
shift with an `OPEN` status.
- The `start_at` date is in the future.
- The `start_at` or `end_at` date overlaps another shift for the same employee.
- The `Break` instances are set in the request and a break `start_at`
is before the `Shift.start_at`, a break `end_at` is after
the `Shift.end_at`, or both.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateShiftResponse;
import org.openapis.openapi.models.operations.CreateShiftSecurity;
import org.openapis.openapi.models.shared.Break;
import org.openapis.openapi.models.shared.CreateShiftRequest;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Shift;
import org.openapis.openapi.models.shared.ShiftWage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateShiftRequest req = new CreateShiftRequest(                new Shift("cumque") {{
                                breaks = new org.openapis.openapi.models.shared.Break[]{{
                                    add(new Break("repudiandae", "minus", false, "porro", "atque") {{
                                        breakTypeId = "rem";
                                        endAt = "consectetur";
                                        expectedDuration = "nulla";
                                        id = "2378ae3b-fc23-4d94-90a9-86a495bac707";
                                        isPaid = false;
                                        name = "Timothy Jaskolski";
                                        startAt = "laudantium";
                                    }}),
                                    add(new Break("consequuntur", "non", false, "fugiat", "voluptatibus") {{
                                        breakTypeId = "autem";
                                        endAt = "eius";
                                        expectedDuration = "unde";
                                        id = "2386f62c-969c-44cc-ab78-890a3fd3c81d";
                                        isPaid = false;
                                        name = "Samuel Aufderhar";
                                        startAt = "optio";
                                    }}),
                                    add(new Break("minima", "aliquid", false, "facere", "laboriosam") {{
                                        breakTypeId = "iste";
                                        endAt = "amet";
                                        expectedDuration = "quae";
                                        id = "da3edb51-fad9-44ac-8943-5137726d1532";
                                        isPaid = false;
                                        name = "Antoinette Luettgen";
                                        startAt = "fuga";
                                    }}),
                                }};
                                createdAt = "sint";
                                employeeId = "architecto";
                                endAt = "totam";
                                id = "0ff60eb9-a665-48e6-9a4b-843d382dbec7";
                                locationId = "ad";
                                status = "optio";
                                teamMemberId = "ea";
                                timezone = "corrupti";
                                updatedAt = "minus";
                                version = 421094L;
                                wage = new ShiftWage() {{
                                    hourlyRate = new Money() {{
                                        amount = 16303L;
                                        currency = "nisi";
                                    }};;
                                    title = "Mrs.";
                                }};;
                            }};) {{
                idempotencyKey = "cupiditate";
            }};            

            CreateShiftResponse res = sdk.labor.createShift(req, new CreateShiftSecurity("aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createShiftResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBreakType

Deletes an existing `BreakType`.

A `BreakType` can be deleted even if it is referenced from a `Shift`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBreakTypeRequest;
import org.openapis.openapi.models.operations.DeleteBreakTypeResponse;
import org.openapis.openapi.models.operations.DeleteBreakTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBreakTypeRequest req = new DeleteBreakTypeRequest("suscipit");            

            DeleteBreakTypeResponse res = sdk.labor.deleteBreakType(req, new DeleteBreakTypeSecurity("atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteBreakTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteShift

Deletes a `Shift`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteShiftRequest;
import org.openapis.openapi.models.operations.DeleteShiftResponse;
import org.openapis.openapi.models.operations.DeleteShiftSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteShiftRequest req = new DeleteShiftRequest("minus");            

            DeleteShiftResponse res = sdk.labor.deleteShift(req, new DeleteShiftSecurity("debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteShiftResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBreakType

Returns a single `BreakType` specified by `id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBreakTypeRequest;
import org.openapis.openapi.models.operations.GetBreakTypeResponse;
import org.openapis.openapi.models.operations.GetBreakTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBreakTypeRequest req = new GetBreakTypeRequest("neque");            

            GetBreakTypeResponse res = sdk.labor.getBreakType(req, new GetBreakTypeSecurity("doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getBreakTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployeeWage

Returns a single `EmployeeWage` specified by `id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployeeWageRequest;
import org.openapis.openapi.models.operations.GetEmployeeWageResponse;
import org.openapis.openapi.models.operations.GetEmployeeWageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployeeWageRequest req = new GetEmployeeWageRequest("tempora");            

            GetEmployeeWageResponse res = sdk.labor.getEmployeeWage(req, new GetEmployeeWageSecurity("quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getEmployeeWageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShift

Returns a single `Shift` specified by `id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShiftRequest;
import org.openapis.openapi.models.operations.GetShiftResponse;
import org.openapis.openapi.models.operations.GetShiftSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShiftRequest req = new GetShiftRequest("deleniti");            

            GetShiftResponse res = sdk.labor.getShift(req, new GetShiftSecurity("quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getShiftResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMemberWage

Returns a single `TeamMemberWage` specified by `id `.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMemberWageRequest;
import org.openapis.openapi.models.operations.GetTeamMemberWageResponse;
import org.openapis.openapi.models.operations.GetTeamMemberWageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMemberWageRequest req = new GetTeamMemberWageRequest("magnam");            

            GetTeamMemberWageResponse res = sdk.labor.getTeamMemberWage(req, new GetTeamMemberWageSecurity("cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getTeamMemberWageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBreakTypes

Returns a paginated list of `BreakType` instances for a business.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBreakTypesRequest;
import org.openapis.openapi.models.operations.ListBreakTypesResponse;
import org.openapis.openapi.models.operations.ListBreakTypesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBreakTypesRequest req = new ListBreakTypesRequest() {{
                cursor = "expedita";
                limit = 956966L;
                locationId = "deleniti";
            }};            

            ListBreakTypesResponse res = sdk.labor.listBreakTypes(req, new ListBreakTypesSecurity("explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBreakTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEmployeeWages

Returns a paginated list of `EmployeeWage` instances for a business.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEmployeeWagesRequest;
import org.openapis.openapi.models.operations.ListEmployeeWagesResponse;
import org.openapis.openapi.models.operations.ListEmployeeWagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEmployeeWagesRequest req = new ListEmployeeWagesRequest() {{
                cursor = "veritatis";
                employeeId = "incidunt";
                limit = 757027L;
            }};            

            ListEmployeeWagesResponse res = sdk.labor.listEmployeeWages(req, new ListEmployeeWagesSecurity("amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEmployeeWagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTeamMemberWages

Returns a paginated list of `TeamMemberWage` instances for a business.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTeamMemberWagesRequest;
import org.openapis.openapi.models.operations.ListTeamMemberWagesResponse;
import org.openapis.openapi.models.operations.ListTeamMemberWagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTeamMemberWagesRequest req = new ListTeamMemberWagesRequest() {{
                cursor = "ipsum";
                limit = 468840L;
                teamMemberId = "hic";
            }};            

            ListTeamMemberWagesResponse res = sdk.labor.listTeamMemberWages(req, new ListTeamMemberWagesSecurity("occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTeamMemberWagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkweekConfigs

Returns a list of `WorkweekConfig` instances for a business.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkweekConfigsRequest;
import org.openapis.openapi.models.operations.ListWorkweekConfigsResponse;
import org.openapis.openapi.models.operations.ListWorkweekConfigsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWorkweekConfigsRequest req = new ListWorkweekConfigsRequest() {{
                cursor = "iure";
                limit = 727863L;
            }};            

            ListWorkweekConfigsResponse res = sdk.labor.listWorkweekConfigs(req, new ListWorkweekConfigsSecurity("cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listWorkweekConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchShifts

Returns a paginated list of `Shift` records for a business.
The list to be returned can be filtered by:
- Location IDs.
- Employee IDs.
- Shift status (`OPEN` and `CLOSED`).
- Shift start.
- Shift end.
- Workday details.

The list can be sorted by:
- `start_at`.
- `end_at`.
- `created_at`.
- `updated_at`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchShiftsResponse;
import org.openapis.openapi.models.operations.SearchShiftsSecurity;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.SearchShiftsRequest;
import org.openapis.openapi.models.shared.ShiftFilter;
import org.openapis.openapi.models.shared.ShiftQuery;
import org.openapis.openapi.models.shared.ShiftSort;
import org.openapis.openapi.models.shared.ShiftWorkday;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchShiftsRequest req = new SearchShiftsRequest() {{
                cursor = "eaque";
                limit = 785549L;
                query = new ShiftQuery() {{
                    filter = new ShiftFilter(                new String[]{{
                                        add("omnis"),
                                        add("recusandae"),
                                    }},                 new String[]{{
                                        add("quam"),
                                    }}) {{
                        employeeIds = new String[]{{
                            add("facere"),
                        }};
                        end = new TimeRange() {{
                            endAt = "libero";
                            startAt = "vitae";
                        }};;
                        start = new TimeRange() {{
                            endAt = "non";
                            startAt = "labore";
                        }};;
                        status = "incidunt";
                        workday = new ShiftWorkday() {{
                            dateRange = new DateRange() {{
                                endDate = "tempore";
                                startDate = "deserunt";
                            }};;
                            defaultTimezone = "error";
                            matchShiftsBy = "doloribus";
                        }};;
                    }};;
                    sort = new ShiftSort() {{
                        field = "reprehenderit";
                        order = "rem";
                    }};;
                }};;
            }};            

            SearchShiftsResponse res = sdk.labor.searchShifts(req, new SearchShiftsSecurity("est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchShiftsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBreakType

Updates an existing `BreakType`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBreakTypeRequest;
import org.openapis.openapi.models.operations.UpdateBreakTypeResponse;
import org.openapis.openapi.models.operations.UpdateBreakTypeSecurity;
import org.openapis.openapi.models.shared.BreakType;
import org.openapis.openapi.models.shared.UpdateBreakTypeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBreakTypeRequest req = new UpdateBreakTypeRequest(                new UpdateBreakTypeRequest(                new BreakType("quis", "impedit", false, "accusantium") {{
                                                createdAt = "necessitatibus";
                                                id = "d7aab62e-9726-41fb-8c58-d27b51996b5b";
                                                updatedAt = "modi";
                                                version = 711732L;
                                            }};);, "quaerat");            

            UpdateBreakTypeResponse res = sdk.labor.updateBreakType(req, new UpdateBreakTypeSecurity("accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateBreakTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateShift

Updates an existing `Shift`.

When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
the `end_at` property set to a valid RFC-3339 datetime string.

When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
set on each `Break`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateShiftRequest;
import org.openapis.openapi.models.operations.UpdateShiftResponse;
import org.openapis.openapi.models.operations.UpdateShiftSecurity;
import org.openapis.openapi.models.shared.Break;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Shift;
import org.openapis.openapi.models.shared.ShiftWage;
import org.openapis.openapi.models.shared.UpdateShiftRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateShiftRequest req = new UpdateShiftRequest(                new UpdateShiftRequest(                new Shift("recusandae") {{
                                                breaks = new org.openapis.openapi.models.shared.Break[]{{
                                                    add(new Break("amet", "tenetur", false, "quasi", "dicta") {{
                                                        breakTypeId = "sapiente";
                                                        endAt = "iusto";
                                                        expectedDuration = "quasi";
                                                        id = "2b7a7ab0-344b-4171-8688-deebef897f3d";
                                                        isPaid = false;
                                                        name = "Mark Schmidt";
                                                        startAt = "dolor";
                                                    }}),
                                                    add(new Break("dolorem", "sunt", false, "ipsa", "incidunt") {{
                                                        breakTypeId = "rerum";
                                                        endAt = "neque";
                                                        expectedDuration = "voluptates";
                                                        id = "4e080aa1-0418-46ec-b59e-02f3702c5c8e";
                                                        isPaid = false;
                                                        name = "Dr. Janis Donnelly";
                                                        startAt = "at";
                                                    }}),
                                                    add(new Break("pariatur", "sequi", false, "quo", "facere") {{
                                                        breakTypeId = "maiores";
                                                        endAt = "culpa";
                                                        expectedDuration = "dolore";
                                                        id = "4707bf37-5b44-4282-821f-db2f69e59267";
                                                        isPaid = false;
                                                        name = "Julio Bergstrom";
                                                        startAt = "voluptatum";
                                                    }}),
                                                    add(new Break("excepturi", "distinctio", false, "cum", "in") {{
                                                        breakTypeId = "labore";
                                                        endAt = "fugit";
                                                        expectedDuration = "quis";
                                                        id = "8d0358a8-2c80-48fe-a751-a2047c0449e1";
                                                        isPaid = false;
                                                        name = "Crystal Weissnat";
                                                        startAt = "quasi";
                                                    }}),
                                                }};
                                                createdAt = "repellendus";
                                                employeeId = "incidunt";
                                                endAt = "aperiam";
                                                id = "d5a11fa4-36e6-4259-a33f-95c9d237397c";
                                                locationId = "iusto";
                                                status = "quas";
                                                teamMemberId = "nemo";
                                                timezone = "facilis";
                                                updatedAt = "exercitationem";
                                                version = 859082L;
                                                wage = new ShiftWage() {{
                                                    hourlyRate = new Money() {{
                                                        amount = 731649L;
                                                        currency = "magnam";
                                                    }};;
                                                    title = "Dr.";
                                                }};;
                                            }};);, "quis");            

            UpdateShiftResponse res = sdk.labor.updateShift(req, new UpdateShiftSecurity("aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateShiftResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkweekConfig

Updates a `WorkweekConfig`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkweekConfigRequest;
import org.openapis.openapi.models.operations.UpdateWorkweekConfigResponse;
import org.openapis.openapi.models.operations.UpdateWorkweekConfigSecurity;
import org.openapis.openapi.models.shared.UpdateWorkweekConfigRequest;
import org.openapis.openapi.models.shared.WorkweekConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWorkweekConfigRequest req = new UpdateWorkweekConfigRequest(                new UpdateWorkweekConfigRequest(                new WorkweekConfig("voluptatem", "vitae") {{
                                                createdAt = "quos";
                                                id = "3febdf67-6b72-406d-ab75-0052a5647edc";
                                                updatedAt = "tempora";
                                                version = 192871L;
                                            }};);, "natus");            

            UpdateWorkweekConfigResponse res = sdk.labor.updateWorkweekConfig(req, new UpdateWorkweekConfigSecurity("saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateWorkweekConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
