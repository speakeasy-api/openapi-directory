# rootHdfs

## Overview

HDFS.

### Available Operations

* [browseHdfsSnapshot](#browsehdfssnapshot) - Lists all files and directories in a given path
* [createHdfs](#createhdfs) - Create one HDFS directory for a host
* [createHdfsBackupJob](#createhdfsbackupjob) - Initiate an on-demand backup for a HDFS directory
* [createHdfsExportFileJob](#createhdfsexportfilejob) - Create export job
* [createHdfsRestoreFileJob](#createhdfsrestorefilejob) - Create restore job
* [deleteHdfs](#deletehdfs) - Delete a HDFS directory
* [deleteHdfsSnapshot](#deletehdfssnapshot) - Delete a HDFS directory snapshot
* [deleteHdfsSnapshots](#deletehdfssnapshots) - Delete all snapshots of a HDFS directory
* [getHdfs](#gethdfs) - Get information for a single HDFS directory
* [getHdfsAsyncRequestStatus](#gethdfsasyncrequeststatus) - Get details about an asynchronous request
* [getHdfsSnapshot](#gethdfssnapshot) - Get information for a HDFS directory snapshot
* [getMissedHdfsSnapshots](#getmissedhdfssnapshots) - Get missed snapshots for a HDFS directory
* [queryHdfs](#queryhdfs) - Get summary information for all HDFS directories
* [searchHdfs](#searchhdfs) - Search for a file within the HDFS directory
* [updateHdfs](#updatehdfs) - Update a HDFS directory

## browseHdfsSnapshot

Lists all files and directories in a given path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseHdfsSnapshotRequest;
import org.openapis.openapi.models.operations.BrowseHdfsSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repellendus", "delectus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BrowseHdfsSnapshotRequest req = new BrowseHdfsSnapshotRequest("voluptates", "perferendis") {{
                limit = 667285;
                offset = 696483;
            }};            

            BrowseHdfsSnapshotResponse res = sdk.rootHdfs.browseHdfsSnapshot(req);

            if (res.browseResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHdfs

Create a HDFS directory for a network host. A HDFS directory is a HDFS directory template applied to a host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHdfsResponse;
import org.openapis.openapi.models.shared.HdfsCreate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reprehenderit", "facere") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.HdfsCreate req = new HdfsCreate("fuga") {{
                hostId = "praesentium";
            }};            

            CreateHdfsResponse res = sdk.rootHdfs.createHdfs(req);

            if (res.hdfsDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHdfsBackupJob

Create on-demand backup request for HDFS directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHdfsBackupJobRequest;
import org.openapis.openapi.models.operations.CreateHdfsBackupJobResponse;
import org.openapis.openapi.models.shared.BaseOnDemandSnapshotConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("mollitia", "veniam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateHdfsBackupJobRequest req = new CreateHdfsBackupJobRequest("voluptatem") {{
                baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig() {{
                    slaId = "quisquam";
                }};;
            }};            

            CreateHdfsBackupJobResponse res = sdk.rootHdfs.createHdfsBackupJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHdfsExportFileJob

Initiate a job to copy a file or folder from a hdfs backup to a destination host other than the source host. Returns the job instance ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHdfsExportFileJobRequest;
import org.openapis.openapi.models.operations.CreateHdfsExportFileJobResponse;
import org.openapis.openapi.models.shared.HdfsExportFileJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repudiandae", "quasi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateHdfsExportFileJobRequest req = new CreateHdfsExportFileJobRequest(                new HdfsExportFileJobConfig("atque", "reprehenderit", "asperiores") {{
                                shouldIgnoreErrors = false;
                            }};, "totam");            

            CreateHdfsExportFileJobResponse res = sdk.rootHdfs.createHdfsExportFileJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHdfsRestoreFileJob

Initiate a job to copy a file or folder from a HDFS directory backup to the source host. Returns the job instance ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHdfsRestoreFileJobRequest;
import org.openapis.openapi.models.operations.CreateHdfsRestoreFileJobResponse;
import org.openapis.openapi.models.shared.HdfsRestoreFileJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("suscipit", "quidem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateHdfsRestoreFileJobRequest req = new CreateHdfsRestoreFileJobRequest(                new HdfsRestoreFileJobConfig("maxime", "et") {{
                                shouldIgnoreErrors = false;
                            }};, "esse");            

            CreateHdfsRestoreFileJobResponse res = sdk.rootHdfs.createHdfsRestoreFileJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHdfs

Delete a HDFS directory by specifying the HDFS directory ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHdfsRequest;
import org.openapis.openapi.models.operations.DeleteHdfsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("amet", "assumenda") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteHdfsRequest req = new DeleteHdfsRequest("ea") {{
                preserveSnapshots = false;
            }};            

            DeleteHdfsResponse res = sdk.rootHdfs.deleteHdfs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHdfsSnapshot

Delete a HDFS directory snapshot. A snapshot is deleted only if it is an on-demand snapshot, or a snapshot of an unprotected HDFS directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHdfsSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteHdfsSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("atque", "error") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteHdfsSnapshotRequest req = new DeleteHdfsSnapshotRequest("officiis");            

            DeleteHdfsSnapshotResponse res = sdk.rootHdfs.deleteHdfsSnapshot(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHdfsSnapshots

Delete all snapshots that were created based on a hdfs by providing the HDFS directory ID.
Requires an unprotected HDFS directory. Remove the HDFS directory from all SLA Domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHdfsSnapshotsRequest;
import org.openapis.openapi.models.operations.DeleteHdfsSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("officiis", "accusamus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteHdfsSnapshotsRequest req = new DeleteHdfsSnapshotsRequest("natus");            

            DeleteHdfsSnapshotsResponse res = sdk.rootHdfs.deleteHdfsSnapshots(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHdfs

Retrieve summary information for a HDFS directory by specifying the HDFS directory ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHdfsRequest;
import org.openapis.openapi.models.operations.GetHdfsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("minima", "aspernatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHdfsRequest req = new GetHdfsRequest("ex");            

            GetHdfsResponse res = sdk.rootHdfs.getHdfs(req);

            if (res.hdfsDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHdfsAsyncRequestStatus

Get details about a hdfs related asynchronous request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHdfsAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetHdfsAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("maiores", "corrupti") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHdfsAsyncRequestStatusRequest req = new GetHdfsAsyncRequestStatusRequest("at");            

            GetHdfsAsyncRequestStatusResponse res = sdk.rootHdfs.getHdfsAsyncRequestStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHdfsSnapshot

Retrieve summary information for a HDFS directory snapshot by specifying the snapshot ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHdfsSnapshotRequest;
import org.openapis.openapi.models.operations.GetHdfsSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("error", "blanditiis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetHdfsSnapshotRequest req = new GetHdfsSnapshotRequest("suscipit");            

            GetHdfsSnapshotResponse res = sdk.rootHdfs.getHdfsSnapshot(req);

            if (res.hdfsSnapshotDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMissedHdfsSnapshots

Retrieve summary information about all missed snapshots for a HDFS directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMissedHdfsSnapshotsRequest;
import org.openapis.openapi.models.operations.GetMissedHdfsSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repudiandae", "atque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMissedHdfsSnapshotsRequest req = new GetMissedHdfsSnapshotsRequest("atque");            

            GetMissedHdfsSnapshotsResponse res = sdk.rootHdfs.getMissedHdfsSnapshots(req);

            if (res.missedSnapshotListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryHdfs

Retrieve summary information for each HDFS directory. Optionally, filter the retrieved information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryHdfsRequest;
import org.openapis.openapi.models.operations.QueryHdfsResponse;
import org.openapis.openapi.models.operations.QueryHdfsSortByEnum;
import org.openapis.openapi.models.operations.QueryHdfsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sunt", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryHdfsRequest req = new QueryHdfsRequest() {{
                effectiveSlaDomainId = "dolorum";
                hostId = "repellendus";
                hostName = "flaky-wardrobe.com";
                isRelic = false;
                limit = 919783;
                name = "Ruth Breitenberg";
                offset = 389135;
                primaryClusterId = "velit";
                sortBy = QueryHdfsSortByEnum.EXCEPTIONS;
                sortOrder = QueryHdfsSortOrderEnum.DESC;
                templateId = "magnam";
            }};            

            QueryHdfsResponse res = sdk.rootHdfs.queryHdfs(req);

            if (res.hdfsSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchHdfs

Search for a file within the HDFS directory. Search using full path prefix or filename prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchHdfsRequest;
import org.openapis.openapi.models.operations.SearchHdfsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("saepe", "consequuntur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SearchHdfsRequest req = new SearchHdfsRequest("occaecati", "officiis") {{
                cursor = "perspiciatis";
                limit = 446394;
            }};            

            SearchHdfsResponse res = sdk.rootHdfs.searchHdfs(req);

            if (res.searchResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHdfs

Update a HDFS directory with the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHdfsRequest;
import org.openapis.openapi.models.operations.UpdateHdfsResponse;
import org.openapis.openapi.models.shared.HdfsUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("adipisci", "eveniet") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateHdfsRequest req = new UpdateHdfsRequest(                new HdfsUpdate("occaecati");, "consequuntur");            

            UpdateHdfsResponse res = sdk.rootHdfs.updateHdfs(req);

            if (res.hdfsDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
