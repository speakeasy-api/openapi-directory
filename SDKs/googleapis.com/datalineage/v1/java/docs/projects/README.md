# projects

### Available Operations

* [datalineageProjectsLocationsBatchSearchLinkProcesses](#datalineageprojectslocationsbatchsearchlinkprocesses) - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* [datalineageProjectsLocationsOperationsCancel](#datalineageprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datalineageProjectsLocationsOperationsList](#datalineageprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datalineageProjectsLocationsProcessesCreate](#datalineageprojectslocationsprocessescreate) - Creates a new process.
* [datalineageProjectsLocationsProcessesList](#datalineageprojectslocationsprocesseslist) - List processes in the given project and location. List order is descending by insertion time.
* [datalineageProjectsLocationsProcessesRunsCreate](#datalineageprojectslocationsprocessesrunscreate) - Creates a new run.
* [datalineageProjectsLocationsProcessesRunsLineageEventsCreate](#datalineageprojectslocationsprocessesrunslineageeventscreate) - Creates a new lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsDelete](#datalineageprojectslocationsprocessesrunslineageeventsdelete) - Deletes the lineage event with the specified name.
* [datalineageProjectsLocationsProcessesRunsLineageEventsGet](#datalineageprojectslocationsprocessesrunslineageeventsget) - Gets details of a specified lineage event.
* [datalineageProjectsLocationsProcessesRunsLineageEventsList](#datalineageprojectslocationsprocessesrunslineageeventslist) - Lists lineage events in the given project and location. The list order is not defined.
* [datalineageProjectsLocationsProcessesRunsList](#datalineageprojectslocationsprocessesrunslist) - Lists runs in the given project and location. List order is descending by `start_time`.
* [datalineageProjectsLocationsProcessesRunsPatch](#datalineageprojectslocationsprocessesrunspatch) - Updates a run.
* [datalineageProjectsLocationsSearchLinks](#datalineageprojectslocationssearchlinks) - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

## datalineageProjectsLocationsBatchSearchLinkProcesses

Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsBatchSearchLinkProcessesRequest req = new DatalineageProjectsLocationsBatchSearchLinkProcessesRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest = new GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest() {{
                    links = new String[]{{
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                        add("nisi"),
                    }};
                    pageSize = 925597;
                    pageToken = "temporibus";
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            DatalineageProjectsLocationsBatchSearchLinkProcessesResponse res = sdk.projects.datalineageProjectsLocationsBatchSearchLinkProcesses(req, new DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity("odit", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsOperationsCancelRequest req = new DatalineageProjectsLocationsOperationsCancelRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quod", "quod");
                    put("esse", "totam");
                }};
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            DatalineageProjectsLocationsOperationsCancelResponse res = sdk.projects.datalineageProjectsLocationsOperationsCancel(req, new DatalineageProjectsLocationsOperationsCancelSecurity("optio", "totam") {{
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

## datalineageProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsOperationsListRequest req = new DatalineageProjectsLocationsOperationsListRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                filter = "cum";
                key = "esse";
                oauthToken = "ipsum";
                pageSize = 568434L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            DatalineageProjectsLocationsOperationsListResponse res = sdk.projects.datalineageProjectsLocationsOperationsList(req, new DatalineageProjectsLocationsOperationsListSecurity("sed", "iste") {{
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

## datalineageProjectsLocationsProcessesCreate

Creates a new process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesCreateRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesCreateResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1Origin;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1OriginSourceTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1Process;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesCreateRequest req = new DatalineageProjectsLocationsProcessesCreateRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogLineageV1Process = new GoogleCloudDatacatalogLineageV1Process() {{
                    attributes = new java.util.HashMap<String, Object>() {{
                        put("hic", "saepe");
                        put("fuga", "in");
                    }};
                    displayName = "corporis";
                    name = "Brad Turcotte Jr.";
                    origin = new GoogleCloudDatacatalogLineageV1Origin() {{
                        name = "Carlton O'Hara";
                        sourceType = GoogleCloudDatacatalogLineageV1OriginSourceTypeEnum.CUSTOM;
                    }};;
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            DatalineageProjectsLocationsProcessesCreateResponse res = sdk.projects.datalineageProjectsLocationsProcessesCreate(req, new DatalineageProjectsLocationsProcessesCreateSecurity("culpa", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1Process != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsProcessesList

List processes in the given project and location. List order is descending by insertion time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesListRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesListResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesListRequest req = new DatalineageProjectsLocationsProcessesListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                pageSize = 581850L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            DatalineageProjectsLocationsProcessesListResponse res = sdk.projects.datalineageProjectsLocationsProcessesList(req, new DatalineageProjectsLocationsProcessesListSecurity("velit", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1ListProcessesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsProcessesRunsCreate

Creates a new run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsCreateRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsCreateResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1Run;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1RunStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesRunsCreateRequest req = new DatalineageProjectsLocationsProcessesRunsCreateRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogLineageV1Run = new GoogleCloudDatacatalogLineageV1Run() {{
                    attributes = new java.util.HashMap<String, Object>() {{
                        put("laborum", "animi");
                    }};
                    displayName = "enim";
                    endTime = "odit";
                    name = "Jimmy Wiegand";
                    startTime = "possimus";
                    state = GoogleCloudDatacatalogLineageV1RunStateEnum.UNKNOWN;
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                requestId = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            DatalineageProjectsLocationsProcessesRunsCreateResponse res = sdk.projects.datalineageProjectsLocationsProcessesRunsCreate(req, new DatalineageProjectsLocationsProcessesRunsCreateSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1Run != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsProcessesRunsLineageEventsCreate

Creates a new lineage event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1EntityReference;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1EventLink;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1LineageEvent;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesRunsLineageEventsCreateRequest req = new DatalineageProjectsLocationsProcessesRunsLineageEventsCreateRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogLineageV1LineageEvent = new GoogleCloudDatacatalogLineageV1LineageEvent() {{
                    endTime = "cum";
                    links = new org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1EventLink[]{{
                        add(new GoogleCloudDatacatalogLineageV1EventLink() {{
                            source = new GoogleCloudDatacatalogLineageV1EntityReference() {{
                                fullyQualifiedName = "doloremque";
                            }};
                            target = new GoogleCloudDatacatalogLineageV1EntityReference() {{
                                fullyQualifiedName = "reprehenderit";
                            }};
                        }}),
                    }};
                    name = "Shawna Carter";
                    startTime = "iusto";
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "accusamus";
                key = "commodi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quae";
                requestId = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            DatalineageProjectsLocationsProcessesRunsLineageEventsCreateResponse res = sdk.projects.datalineageProjectsLocationsProcessesRunsLineageEventsCreate(req, new DatalineageProjectsLocationsProcessesRunsLineageEventsCreateSecurity("excepturi", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1LineageEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsProcessesRunsLineageEventsDelete

Deletes the lineage event with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteRequest req = new DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                allowMissing = false;
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "repudiandae";
                key = "sint";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteResponse res = sdk.projects.datalineageProjectsLocationsProcessesRunsLineageEventsDelete(req, new DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteSecurity("consequatur", "est") {{
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

## datalineageProjectsLocationsProcessesRunsLineageEventsGet

Gets details of a specified lineage event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesRunsLineageEventsGetRequest req = new DatalineageProjectsLocationsProcessesRunsLineageEventsGetRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "cupiditate";
                uploadProtocol = "quos";
            }};            

            DatalineageProjectsLocationsProcessesRunsLineageEventsGetResponse res = sdk.projects.datalineageProjectsLocationsProcessesRunsLineageEventsGet(req, new DatalineageProjectsLocationsProcessesRunsLineageEventsGetSecurity("perferendis", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1LineageEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsProcessesRunsLineageEventsList

Lists lineage events in the given project and location. The list order is not defined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesRunsLineageEventsListRequest req = new DatalineageProjectsLocationsProcessesRunsLineageEventsListRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "excepturi";
                key = "tempora";
                oauthToken = "facilis";
                pageSize = 735194L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "eum";
                uploadProtocol = "non";
            }};            

            DatalineageProjectsLocationsProcessesRunsLineageEventsListResponse res = sdk.projects.datalineageProjectsLocationsProcessesRunsLineageEventsList(req, new DatalineageProjectsLocationsProcessesRunsLineageEventsListSecurity("eligendi", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1ListLineageEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsProcessesRunsList

Lists runs in the given project and location. List order is descending by `start_time`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsListRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsListResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesRunsListRequest req = new DatalineageProjectsLocationsProcessesRunsListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "dolor";
                key = "debitis";
                oauthToken = "a";
                pageSize = 680056L;
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illum";
                uploadProtocol = "maiores";
            }};            

            DatalineageProjectsLocationsProcessesRunsListResponse res = sdk.projects.datalineageProjectsLocationsProcessesRunsList(req, new DatalineageProjectsLocationsProcessesRunsListSecurity("rerum", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1ListRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsProcessesRunsPatch

Updates a run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsPatchRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsPatchResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsProcessesRunsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1Run;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1RunStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsProcessesRunsPatchRequest req = new DatalineageProjectsLocationsProcessesRunsPatchRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatacatalogLineageV1Run = new GoogleCloudDatacatalogLineageV1Run() {{
                    attributes = new java.util.HashMap<String, Object>() {{
                        put("ea", "aliquid");
                        put("laborum", "accusamus");
                        put("non", "occaecati");
                        put("enim", "accusamus");
                    }};
                    displayName = "delectus";
                    endTime = "quidem";
                    name = "Marco Olson";
                    startTime = "sapiente";
                    state = GoogleCloudDatacatalogLineageV1RunStateEnum.STARTED;
                }};;
                accessToken = "deserunt";
                allowMissing = false;
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                updateMask = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            DatalineageProjectsLocationsProcessesRunsPatchResponse res = sdk.projects.datalineageProjectsLocationsProcessesRunsPatch(req, new DatalineageProjectsLocationsProcessesRunsPatchSecurity("id", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1Run != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datalineageProjectsLocationsSearchLinks

Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsSearchLinksRequest;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsSearchLinksResponse;
import org.openapis.openapi.models.operations.DatalineageProjectsLocationsSearchLinksSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1EntityReference;
import org.openapis.openapi.models.shared.GoogleCloudDatacatalogLineageV1SearchLinksRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatalineageProjectsLocationsSearchLinksRequest req = new DatalineageProjectsLocationsSearchLinksRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatacatalogLineageV1SearchLinksRequest = new GoogleCloudDatacatalogLineageV1SearchLinksRequest() {{
                    pageSize = 618016;
                    pageToken = "nobis";
                    source = new GoogleCloudDatacatalogLineageV1EntityReference() {{
                        fullyQualifiedName = "eum";
                    }};;
                    target = new GoogleCloudDatacatalogLineageV1EntityReference() {{
                        fullyQualifiedName = "vero";
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "et";
                key = "excepturi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quos";
                uploadProtocol = "sint";
            }};            

            DatalineageProjectsLocationsSearchLinksResponse res = sdk.projects.datalineageProjectsLocationsSearchLinks(req, new DatalineageProjectsLocationsSearchLinksSecurity("accusantium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogLineageV1SearchLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
