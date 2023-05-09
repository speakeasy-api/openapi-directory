# projects

### Available Operations

* [genomicsProjectsOperationsCancel](#genomicsprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* [genomicsProjectsOperationsList](#genomicsprojectsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* [genomicsProjectsWorkersCheckIn](#genomicsprojectsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

## genomicsProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsCancelRequest;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsCancelResponse;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenomicsProjectsOperationsCancelRequest req = new GenomicsProjectsOperationsCancelRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sit", "fugiat");
                    put("ab", "soluta");
                    put("dolorum", "iusto");
                }};
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "omnis";
                key = "necessitatibus";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "nihil";
                uploadProtocol = "ipsum";
            }};            

            GenomicsProjectsOperationsCancelResponse res = sdk.projects.genomicsProjectsOperationsCancel(req, new GenomicsProjectsOperationsCancelSecurity() {{
                option1 = new GenomicsProjectsOperationsCancelSecurityOption1("voluptate", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genomicsProjectsOperationsList

Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsListSecurity;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.GenomicsProjectsOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenomicsProjectsOperationsListRequest req = new GenomicsProjectsOperationsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "optio";
                filter = "accusamus";
                key = "ad";
                oauthToken = "saepe";
                pageSize = 383464L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "minima";
                uploadProtocol = "repellendus";
            }};            

            GenomicsProjectsOperationsListResponse res = sdk.projects.genomicsProjectsOperationsList(req, new GenomicsProjectsOperationsListSecurity() {{
                option1 = new GenomicsProjectsOperationsListSecurityOption1("totam", "similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genomicsProjectsWorkersCheckIn

The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenomicsProjectsWorkersCheckInRequest;
import org.openapis.openapi.models.operations.GenomicsProjectsWorkersCheckInResponse;
import org.openapis.openapi.models.operations.GenomicsProjectsWorkersCheckInSecurity;
import org.openapis.openapi.models.operations.GenomicsProjectsWorkersCheckInSecurityOption1;
import org.openapis.openapi.models.operations.GenomicsProjectsWorkersCheckInSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CheckInRequest;
import org.openapis.openapi.models.shared.DiskStatus;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TimestampedEvent;
import org.openapis.openapi.models.shared.WorkerStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenomicsProjectsWorkersCheckInRequest req = new GenomicsProjectsWorkersCheckInRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                checkInRequest = new CheckInRequest() {{
                    deadlineExpired = new java.util.HashMap<String, Object>() {{
                        put("tempora", "vel");
                        put("quod", "officiis");
                    }};
                    event = new java.util.HashMap<String, Object>() {{
                        put("dolorum", "a");
                    }};
                    events = new org.openapis.openapi.models.shared.TimestampedEvent[]{{
                        add(new TimestampedEvent() {{
                            data = new java.util.HashMap<String, Object>() {{
                                put("iusto", "ipsum");
                                put("quisquam", "tenetur");
                                put("amet", "tempore");
                            }};
                            timestamp = "accusamus";
                        }}),
                        add(new TimestampedEvent() {{
                            data = new java.util.HashMap<String, Object>() {{
                                put("enim", "dolorem");
                                put("sapiente", "totam");
                            }};
                            timestamp = "nihil";
                        }}),
                    }};
                    result = new Status() {{
                        code = 25662;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("sed", "vel");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("voluptas", "deserunt");
                                put("quam", "ipsum");
                                put("incidunt", "qui");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("maxime", "pariatur");
                                put("soluta", "dicta");
                                put("laborum", "totam");
                            }}),
                        }};
                        message = "incidunt";
                    }};;
                    sosReport = "aspernatur";
                    workerStatus = new WorkerStatus() {{
                        attachedDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskStatus>() {{
                            put("distinctio", new DiskStatus() {{
                                freeSpaceBytes = "facilis";
                                totalSpaceBytes = "aliquid";
                            }});
                        }};
                        bootDisk = new DiskStatus() {{
                            freeSpaceBytes = "quam";
                            totalSpaceBytes = "molestias";
                        }};;
                        freeRamBytes = "temporibus";
                        totalRamBytes = "qui";
                        uptimeSeconds = "neque";
                    }};;
                }};;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "sunt";
                key = "ullam";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "voluptatem";
                uploadProtocol = "cumque";
            }};            

            GenomicsProjectsWorkersCheckInResponse res = sdk.projects.genomicsProjectsWorkersCheckIn(req, new GenomicsProjectsWorkersCheckInSecurity() {{
                option1 = new GenomicsProjectsWorkersCheckInSecurityOption1("soluta", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
