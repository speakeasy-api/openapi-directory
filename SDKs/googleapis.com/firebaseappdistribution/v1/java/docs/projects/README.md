# projects

### Available Operations

* [firebaseappdistributionProjectsAppsReleasesBatchDelete](#firebaseappdistributionprojectsappsreleasesbatchdelete) - Deletes releases. A maximum of 100 releases can be deleted per request.
* [firebaseappdistributionProjectsAppsReleasesDistribute](#firebaseappdistributionprojectsappsreleasesdistribute) - Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
* [firebaseappdistributionProjectsAppsReleasesFeedbackReportsList](#firebaseappdistributionprojectsappsreleasesfeedbackreportslist) - Lists feedback reports. By default, sorts by `createTime` in descending order.
* [firebaseappdistributionProjectsAppsReleasesList](#firebaseappdistributionprojectsappsreleaseslist) - Lists releases. By default, sorts by `createTime` in descending order.
* [firebaseappdistributionProjectsAppsReleasesOperationsCancel](#firebaseappdistributionprojectsappsreleasesoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [firebaseappdistributionProjectsAppsReleasesOperationsList](#firebaseappdistributionprojectsappsreleasesoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [firebaseappdistributionProjectsAppsReleasesOperationsWait](#firebaseappdistributionprojectsappsreleasesoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [firebaseappdistributionProjectsGroupsBatchJoin](#firebaseappdistributionprojectsgroupsbatchjoin) - Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
* [firebaseappdistributionProjectsGroupsBatchLeave](#firebaseappdistributionprojectsgroupsbatchleave) - Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
* [firebaseappdistributionProjectsGroupsCreate](#firebaseappdistributionprojectsgroupscreate) - Create a group.
* [firebaseappdistributionProjectsGroupsDelete](#firebaseappdistributionprojectsgroupsdelete) - Delete a group.
* [firebaseappdistributionProjectsGroupsGet](#firebaseappdistributionprojectsgroupsget) - Get a group.
* [firebaseappdistributionProjectsGroupsList](#firebaseappdistributionprojectsgroupslist) - List groups.
* [firebaseappdistributionProjectsTestersBatchAdd](#firebaseappdistributionprojectstestersbatchadd) - Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
* [firebaseappdistributionProjectsTestersBatchRemove](#firebaseappdistributionprojectstestersbatchremove) - Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
* [firebaseappdistributionProjectsTestersList](#firebaseappdistributionprojectstesterslist) - Lists testers and their resource ids.
* [firebaseappdistributionProjectsTestersPatch](#firebaseappdistributionprojectstesterspatch) - Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

## firebaseappdistributionProjectsAppsReleasesBatchDelete

Deletes releases. A maximum of 100 releases can be deleted per request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsAppsReleasesBatchDeleteRequest req = new FirebaseappdistributionProjectsAppsReleasesBatchDeleteRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppdistroV1BatchDeleteReleasesRequest = new GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest() {{
                    names = new String[]{{
                        add("deserunt"),
                    }};
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            FirebaseappdistributionProjectsAppsReleasesBatchDeleteResponse res = sdk.projects.firebaseappdistributionProjectsAppsReleasesBatchDelete(req, new FirebaseappdistributionProjectsAppsReleasesBatchDeleteSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsAppsReleasesDistribute

Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesDistributeRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesDistributeResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesDistributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1DistributeReleaseRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsAppsReleasesDistributeRequest req = new FirebaseappdistributionProjectsAppsReleasesDistributeRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppdistroV1DistributeReleaseRequest = new GoogleFirebaseAppdistroV1DistributeReleaseRequest() {{
                    groupAliases = new String[]{{
                        add("porro"),
                        add("dolorum"),
                        add("dicta"),
                    }};
                    testerEmails = new String[]{{
                        add("officia"),
                        add("occaecati"),
                        add("fugit"),
                    }};
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            FirebaseappdistributionProjectsAppsReleasesDistributeResponse res = sdk.projects.firebaseappdistributionProjectsAppsReleasesDistribute(req, new FirebaseappdistributionProjectsAppsReleasesDistributeSecurity("impedit", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1DistributeReleaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsAppsReleasesFeedbackReportsList

Lists feedback reports. By default, sorts by `createTime` in descending order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListRequest req = new FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                pageSize = 612096L;
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListResponse res = sdk.projects.firebaseappdistributionProjectsAppsReleasesFeedbackReportsList(req, new FirebaseappdistributionProjectsAppsReleasesFeedbackReportsListSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1ListFeedbackReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsAppsReleasesList

Lists releases. By default, sorts by `createTime` in descending order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesListRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesListResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsAppsReleasesListRequest req = new FirebaseappdistributionProjectsAppsReleasesListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "quidem";
                filter = "architecto";
                key = "ipsa";
                oauthToken = "reiciendis";
                orderBy = "est";
                pageSize = 653140L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            FirebaseappdistributionProjectsAppsReleasesListResponse res = sdk.projects.firebaseappdistributionProjectsAppsReleasesList(req, new FirebaseappdistributionProjectsAppsReleasesListSecurity("explicabo", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1ListReleasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsAppsReleasesOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsAppsReleasesOperationsCancelRequest req = new FirebaseappdistributionProjectsAppsReleasesOperationsCancelRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("minima", "excepturi");
                    put("accusantium", "iure");
                }};
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "consequuntur";
                uploadProtocol = "repellat";
            }};            

            FirebaseappdistributionProjectsAppsReleasesOperationsCancelResponse res = sdk.projects.firebaseappdistributionProjectsAppsReleasesOperationsCancel(req, new FirebaseappdistributionProjectsAppsReleasesOperationsCancelSecurity("mollitia", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsAppsReleasesOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsListRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsListResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsAppsReleasesOperationsListRequest req = new FirebaseappdistributionProjectsAppsReleasesOperationsListRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "error";
                filter = "quia";
                key = "quis";
                oauthToken = "vitae";
                pageSize = 674752L;
                pageToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            FirebaseappdistributionProjectsAppsReleasesOperationsListResponse res = sdk.projects.firebaseappdistributionProjectsAppsReleasesOperationsList(req, new FirebaseappdistributionProjectsAppsReleasesOperationsListSecurity("sequi", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsAppsReleasesOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsAppsReleasesOperationsWaitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleLongrunningWaitOperationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsAppsReleasesOperationsWaitRequest req = new FirebaseappdistributionProjectsAppsReleasesOperationsWaitRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleLongrunningWaitOperationRequest = new GoogleLongrunningWaitOperationRequest() {{
                    timeout = "possimus";
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            FirebaseappdistributionProjectsAppsReleasesOperationsWaitResponse res = sdk.projects.firebaseappdistributionProjectsAppsReleasesOperationsWait(req, new FirebaseappdistributionProjectsAppsReleasesOperationsWaitSecurity("nihil", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsGroupsBatchJoin

Batch adds members to a group. The testers will gain access to all releases that the groups have access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsBatchJoinRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsBatchJoinResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsBatchJoinSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1BatchJoinGroupRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsGroupsBatchJoinRequest req = new FirebaseappdistributionProjectsGroupsBatchJoinRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppdistroV1BatchJoinGroupRequest = new GoogleFirebaseAppdistroV1BatchJoinGroupRequest() {{
                    createMissingTesters = false;
                    emails = new String[]{{
                        add("voluptate"),
                        add("cum"),
                        add("perferendis"),
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            FirebaseappdistributionProjectsGroupsBatchJoinResponse res = sdk.projects.firebaseappdistributionProjectsGroupsBatchJoin(req, new FirebaseappdistributionProjectsGroupsBatchJoinSecurity("harum", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsGroupsBatchLeave

Batch removed members from a group. The testers will lose access to all releases that the groups have access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsBatchLeaveRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsBatchLeaveResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsBatchLeaveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1BatchLeaveGroupRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsGroupsBatchLeaveRequest req = new FirebaseappdistributionProjectsGroupsBatchLeaveRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppdistroV1BatchLeaveGroupRequest = new GoogleFirebaseAppdistroV1BatchLeaveGroupRequest() {{
                    emails = new String[]{{
                        add("quae"),
                        add("ipsum"),
                        add("quidem"),
                        add("molestias"),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "praesentium";
                key = "rem";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
            }};            

            FirebaseappdistributionProjectsGroupsBatchLeaveResponse res = sdk.projects.firebaseappdistributionProjectsGroupsBatchLeave(req, new FirebaseappdistributionProjectsGroupsBatchLeaveSecurity("veritatis", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsGroupsCreate

Create a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsCreateRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsCreateResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1GroupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsGroupsCreateRequest req = new FirebaseappdistributionProjectsGroupsCreateRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppdistroV1GroupInput = new GoogleFirebaseAppdistroV1GroupInput() {{
                    displayName = "consequatur";
                    name = "Taylor Cole";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "qui";
                groupId = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "magni";
                uploadProtocol = "assumenda";
            }};            

            FirebaseappdistributionProjectsGroupsCreateResponse res = sdk.projects.firebaseappdistributionProjectsGroupsCreate(req, new FirebaseappdistributionProjectsGroupsCreateSecurity("ipsam", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1Group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsGroupsDelete

Delete a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsDeleteRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsDeleteResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsGroupsDeleteRequest req = new FirebaseappdistributionProjectsGroupsDeleteRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            FirebaseappdistributionProjectsGroupsDeleteResponse res = sdk.projects.firebaseappdistributionProjectsGroupsDelete(req, new FirebaseappdistributionProjectsGroupsDeleteSecurity("sint", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsGroupsGet

Get a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsGetRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsGetResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsGroupsGetRequest req = new FirebaseappdistributionProjectsGroupsGetRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "debitis";
                key = "a";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "in";
                uploadProtocol = "illum";
            }};            

            FirebaseappdistributionProjectsGroupsGetResponse res = sdk.projects.firebaseappdistributionProjectsGroupsGet(req, new FirebaseappdistributionProjectsGroupsGetSecurity("maiores", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1Group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsGroupsList

List groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsListRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsListResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsGroupsListRequest req = new FirebaseappdistributionProjectsGroupsListRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "aliquid";
                key = "laborum";
                oauthToken = "accusamus";
                pageSize = 249796L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "delectus";
            }};            

            FirebaseappdistributionProjectsGroupsListResponse res = sdk.projects.firebaseappdistributionProjectsGroupsList(req, new FirebaseappdistributionProjectsGroupsListSecurity("quidem", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1ListGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsTestersBatchAdd

Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersBatchAddRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersBatchAddResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersBatchAddSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1BatchAddTestersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsTestersBatchAddRequest req = new FirebaseappdistributionProjectsTestersBatchAddRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppdistroV1BatchAddTestersRequest = new GoogleFirebaseAppdistroV1BatchAddTestersRequest() {{
                    emails = new String[]{{
                        add("deleniti"),
                        add("sapiente"),
                        add("amet"),
                    }};
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "nihil";
                uploadProtocol = "magnam";
            }};            

            FirebaseappdistributionProjectsTestersBatchAddResponse res = sdk.projects.firebaseappdistributionProjectsTestersBatchAdd(req, new FirebaseappdistributionProjectsTestersBatchAddSecurity("distinctio", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1BatchAddTestersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsTestersBatchRemove

Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersBatchRemoveRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersBatchRemoveResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersBatchRemoveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1BatchRemoveTestersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsTestersBatchRemoveRequest req = new FirebaseappdistributionProjectsTestersBatchRemoveRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFirebaseAppdistroV1BatchRemoveTestersRequest = new GoogleFirebaseAppdistroV1BatchRemoveTestersRequest() {{
                    emails = new String[]{{
                        add("natus"),
                        add("nobis"),
                    }};
                }};;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            FirebaseappdistributionProjectsTestersBatchRemoveResponse res = sdk.projects.firebaseappdistributionProjectsTestersBatchRemove(req, new FirebaseappdistributionProjectsTestersBatchRemoveSecurity("quos", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1BatchRemoveTestersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsTestersList

Lists testers and their resource ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersListRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersListResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsTestersListRequest req = new FirebaseappdistributionProjectsTestersListRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "eum";
                filter = "dolor";
                key = "necessitatibus";
                oauthToken = "odit";
                pageSize = 367562L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "doloribus";
                uploadProtocol = "debitis";
            }};            

            FirebaseappdistributionProjectsTestersListResponse res = sdk.projects.firebaseappdistributionProjectsTestersList(req, new FirebaseappdistributionProjectsTestersListSecurity("eius", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1ListTestersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseappdistributionProjectsTestersPatch

Update a tester. If the testers joins a group they gain access to all releases that the group has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersPatchRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersPatchResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionProjectsTestersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1TesterInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionProjectsTestersPatchRequest req = new FirebaseappdistributionProjectsTestersPatchRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleFirebaseAppdistroV1TesterInput = new GoogleFirebaseAppdistroV1TesterInput() {{
                    displayName = "in";
                    groups = new String[]{{
                        add("architecto"),
                    }};
                    name = "Pedro Ratke";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "praesentium";
                updateMask = "natus";
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            FirebaseappdistributionProjectsTestersPatchResponse res = sdk.projects.firebaseappdistributionProjectsTestersPatch(req, new FirebaseappdistributionProjectsTestersPatchSecurity("quo", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseAppdistroV1Tester != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
