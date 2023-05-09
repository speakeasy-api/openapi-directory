# team

### Available Operations

* [bulkCreateTeamMembers](#bulkcreateteammembers) - BulkCreateTeamMembers
* [bulkUpdateTeamMembers](#bulkupdateteammembers) - BulkUpdateTeamMembers
* [createTeamMember](#createteammember) - CreateTeamMember
* [retrieveTeamMember](#retrieveteammember) - RetrieveTeamMember
* [retrieveWageSetting](#retrievewagesetting) - RetrieveWageSetting
* [searchTeamMembers](#searchteammembers) - SearchTeamMembers
* [updateTeamMember](#updateteammember) - UpdateTeamMember
* [updateWageSetting](#updatewagesetting) - UpdateWageSetting

## bulkCreateTeamMembers

Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates.
This process is non-transactional and processes as much of the request as possible. If one of the creates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed create.

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateTeamMembersResponse;
import org.openapis.openapi.models.operations.BulkCreateTeamMembersSecurity;
import org.openapis.openapi.models.shared.BulkCreateTeamMembersRequest;
import org.openapis.openapi.models.shared.CreateTeamMemberRequest;
import org.openapis.openapi.models.shared.TeamMember;
import org.openapis.openapi.models.shared.TeamMemberAssignedLocations;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BulkCreateTeamMembersRequest req = new BulkCreateTeamMembersRequest(                new java.util.HashMap<String, org.openapis.openapi.models.shared.CreateTeamMemberRequest>() {{
                                put("quis", new CreateTeamMemberRequest() {{
                                    idempotencyKey = "a";
                                    teamMember = new TeamMember() {{
                                        assignedLocations = new TeamMemberAssignedLocations() {{
                                            assignmentType = "odit";
                                            locationIds = new String[]{{
                                                add("deleniti"),
                                                add("excepturi"),
                                            }};
                                        }};
                                        createdAt = "unde";
                                        emailAddress = "optio";
                                        familyName = "asperiores";
                                        givenName = "numquam";
                                        id = "ffeb9bec-5031-48a8-9eb0-1d297f7b456a";
                                        isOwner = false;
                                        phoneNumber = "quas";
                                        referenceId = "ipsam";
                                        status = "enim";
                                        updatedAt = "repudiandae";
                                    }};
                                }});
                            }});            

            BulkCreateTeamMembersResponse res = sdk.team.bulkCreateTeamMembers(req, new BulkCreateTeamMembersSecurity("nostrum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkCreateTeamMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkUpdateTeamMembers

Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates.
This process is non-transactional and processes as much of the request as possible. If one of the updates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateTeamMembersResponse;
import org.openapis.openapi.models.operations.BulkUpdateTeamMembersSecurity;
import org.openapis.openapi.models.shared.BulkUpdateTeamMembersRequest;
import org.openapis.openapi.models.shared.TeamMember;
import org.openapis.openapi.models.shared.TeamMemberAssignedLocations;
import org.openapis.openapi.models.shared.UpdateTeamMemberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BulkUpdateTeamMembersRequest req = new BulkUpdateTeamMembersRequest(                new java.util.HashMap<String, org.openapis.openapi.models.shared.UpdateTeamMemberRequest>() {{
                                put("rem", new UpdateTeamMemberRequest() {{
                                    teamMember = new TeamMember() {{
                                        assignedLocations = new TeamMemberAssignedLocations() {{
                                            assignmentType = "quos";
                                            locationIds = new String[]{{
                                                add("praesentium"),
                                                add("id"),
                                                add("ratione"),
                                                add("magni"),
                                            }};
                                        }};
                                        createdAt = "vel";
                                        emailAddress = "dolorem";
                                        familyName = "magnam";
                                        givenName = "beatae";
                                        id = "acccca66-3d4a-4859-9c1b-32bb213e3b31";
                                        isOwner = false;
                                        phoneNumber = "porro";
                                        referenceId = "temporibus";
                                        status = "ea";
                                        updatedAt = "dolorum";
                                    }};
                                }});
                            }});            

            BulkUpdateTeamMembersResponse res = sdk.team.bulkUpdateTeamMembers(req, new BulkUpdateTeamMembersSecurity("exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkUpdateTeamMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTeamMember

Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
You must provide the following values in your request to this endpoint:
- `given_name`
- `family_name`

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTeamMemberResponse;
import org.openapis.openapi.models.operations.CreateTeamMemberSecurity;
import org.openapis.openapi.models.shared.CreateTeamMemberRequest;
import org.openapis.openapi.models.shared.TeamMember;
import org.openapis.openapi.models.shared.TeamMemberAssignedLocations;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateTeamMemberRequest req = new CreateTeamMemberRequest() {{
                idempotencyKey = "expedita";
                teamMember = new TeamMember() {{
                    assignedLocations = new TeamMemberAssignedLocations() {{
                        assignmentType = "repudiandae";
                        locationIds = new String[]{{
                            add("incidunt"),
                            add("omnis"),
                        }};
                    }};;
                    createdAt = "doloremque";
                    emailAddress = "vel";
                    familyName = "expedita";
                    givenName = "excepturi";
                    id = "6c636e74-d28a-4481-89a1-b84119864058";
                    isOwner = false;
                    phoneNumber = "dignissimos";
                    referenceId = "vel";
                    status = "tempore";
                    updatedAt = "dolorem";
                }};;
            }};            

            CreateTeamMemberResponse res = sdk.team.createTeamMember(req, new CreateTeamMemberSecurity("aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createTeamMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveTeamMember

Retrieves a `TeamMember` object for the given `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveTeamMemberRequest;
import org.openapis.openapi.models.operations.RetrieveTeamMemberResponse;
import org.openapis.openapi.models.operations.RetrieveTeamMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveTeamMemberRequest req = new RetrieveTeamMemberRequest("quos");            

            RetrieveTeamMemberResponse res = sdk.team.retrieveTeamMember(req, new RetrieveTeamMemberSecurity("iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveTeamMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveWageSetting

Retrieves a `WageSetting` object for a team member specified
by `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveWageSettingRequest;
import org.openapis.openapi.models.operations.RetrieveWageSettingResponse;
import org.openapis.openapi.models.operations.RetrieveWageSettingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveWageSettingRequest req = new RetrieveWageSettingRequest("dicta");            

            RetrieveWageSettingResponse res = sdk.team.retrieveWageSetting(req, new RetrieveWageSettingSecurity("sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveWageSettingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchTeamMembers

Returns a paginated list of `TeamMember` objects for a business.
The list can be filtered by the following:
- location IDs
- `status`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTeamMembersResponse;
import org.openapis.openapi.models.operations.SearchTeamMembersSecurity;
import org.openapis.openapi.models.shared.SearchTeamMembersFilter;
import org.openapis.openapi.models.shared.SearchTeamMembersQuery;
import org.openapis.openapi.models.shared.SearchTeamMembersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchTeamMembersRequest req = new SearchTeamMembersRequest() {{
                cursor = "velit";
                limit = 853228L;
                query = new SearchTeamMembersQuery() {{
                    filter = new SearchTeamMembersFilter() {{
                        locationIds = new String[]{{
                            add("eius"),
                            add("aut"),
                            add("ex"),
                            add("inventore"),
                        }};
                        status = "aperiam";
                    }};;
                }};;
            }};            

            SearchTeamMembersResponse res = sdk.team.searchTeamMembers(req, new SearchTeamMembersSecurity("corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchTeamMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTeamMember

Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTeamMemberRequest;
import org.openapis.openapi.models.operations.UpdateTeamMemberResponse;
import org.openapis.openapi.models.operations.UpdateTeamMemberSecurity;
import org.openapis.openapi.models.shared.TeamMember;
import org.openapis.openapi.models.shared.TeamMemberAssignedLocations;
import org.openapis.openapi.models.shared.UpdateTeamMemberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTeamMemberRequest req = new UpdateTeamMemberRequest(                new UpdateTeamMemberRequest() {{
                                teamMember = new TeamMember() {{
                                    assignedLocations = new TeamMemberAssignedLocations() {{
                                        assignmentType = "sed";
                                        locationIds = new String[]{{
                                            add("alias"),
                                            add("provident"),
                                            add("corporis"),
                                            add("dolorem"),
                                        }};
                                    }};;
                                    createdAt = "placeat";
                                    emailAddress = "molestias";
                                    familyName = "sint";
                                    givenName = "nobis";
                                    id = "d927a5ba-5511-4bb8-b70d-9784fb146473";
                                    isOwner = false;
                                    phoneNumber = "sequi";
                                    referenceId = "architecto";
                                    status = "expedita";
                                    updatedAt = "quod";
                                }};;
                            }};, "minima");            

            UpdateTeamMemberResponse res = sdk.team.updateTeamMember(req, new UpdateTeamMemberSecurity("rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateTeamMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWageSetting

Creates or updates a `WageSetting` object. The object is created if a
`WageSetting` with the specified `team_member_id` does not exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWageSettingRequest;
import org.openapis.openapi.models.operations.UpdateWageSettingResponse;
import org.openapis.openapi.models.operations.UpdateWageSettingSecurity;
import org.openapis.openapi.models.shared.JobAssignment;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.UpdateWageSettingRequest;
import org.openapis.openapi.models.shared.WageSetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWageSettingRequest req = new UpdateWageSettingRequest(                new UpdateWageSettingRequest(                new WageSetting() {{
                                                createdAt = "voluptates";
                                                isOvertimeExempt = false;
                                                jobAssignments = new org.openapis.openapi.models.shared.JobAssignment[]{{
                                                    add(new JobAssignment("voluptatum", "reprehenderit") {{
                                                        annualRate = new Money() {{
                                                            amount = 83822L;
                                                            currency = "nam";
                                                        }};
                                                        hourlyRate = new Money() {{
                                                            amount = 243620L;
                                                            currency = "sapiente";
                                                        }};
                                                        jobTitle = "Dynamic Applications Executive";
                                                        payType = "odio";
                                                        weeklyHours = 170335L;
                                                    }}),
                                                    add(new JobAssignment("consectetur", "occaecati") {{
                                                        annualRate = new Money() {{
                                                            amount = 266560L;
                                                            currency = "minus";
                                                        }};
                                                        hourlyRate = new Money() {{
                                                            amount = 248004L;
                                                            currency = "in";
                                                        }};
                                                        jobTitle = "Central Data Analyst";
                                                        payType = "possimus";
                                                        weeklyHours = 289282L;
                                                    }}),
                                                }};
                                                teamMemberId = "voluptates";
                                                updatedAt = "impedit";
                                                version = 410433L;
                                            }};);, "harum");            

            UpdateWageSettingResponse res = sdk.team.updateWageSetting(req, new UpdateWageSettingSecurity("assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateWageSettingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
