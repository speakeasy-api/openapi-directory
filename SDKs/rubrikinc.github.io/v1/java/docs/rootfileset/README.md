# rootFileset

## Overview

File system filesets.

### Available Operations

* [browseFilesetSnapshot](#browsefilesetsnapshot) - Lists all files and directories in a given path
* [createDownloadFilesetSnapshotFromCloud](#createdownloadfilesetsnapshotfromcloud) - Create a download fileset snapshot from archival request
* [createFileset](#createfileset) - Create one fileset for a host
* [createFilesetBackupJob](#createfilesetbackupjob) - Initiate an on-demand backup for a fileset
* [createFilesetDownloadFileJob](#createfilesetdownloadfilejob) - Create a file download job from a fileset backup
* [createFilesetExportFileJob](#createfilesetexportfilejob) - Create export job
* [createFilesetRestoreFileJob](#createfilesetrestorefilejob) - Create restore job
* [deleteFileset](#deletefileset) - Delete a fileset
* [deleteFilesetSnapshot](#deletefilesetsnapshot) - Delete a fileset snapshot
* [deleteFilesetSnapshots](#deletefilesetsnapshots) - Delete all snapshots of a fileset
* [getFileset](#getfileset) - Get information for a single fileset
* [getFilesetAsyncRequestStatus](#getfilesetasyncrequeststatus) - Get details about an async request
* [getFilesetSnapshot](#getfilesetsnapshot) - Get information for a fileset snapshot
* [getMissedFilesetSnapshots](#getmissedfilesetsnapshots) - Get missed snapshots for a fileset
* [queryFileset](#queryfileset) - Get summary information for all filesets
* [searchFileset](#searchfileset) - Search for a file within the fileset
* [updateFileset](#updatefileset) - Update a Fileset

## browseFilesetSnapshot

Lists all files and directories in a given path.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseFilesetSnapshotRequest;
import org.openapis.openapi.models.operations.BrowseFilesetSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("minus", "dolores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BrowseFilesetSnapshotRequest req = new BrowseFilesetSnapshotRequest("blanditiis", "in") {{
                limit = 296242;
                offset = 304468;
            }};            

            BrowseFilesetSnapshotResponse res = sdk.rootFileset.browseFilesetSnapshot(req);

            if (res.browseResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDownloadFilesetSnapshotFromCloud

Create a download fileset snapshot from archival request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDownloadFilesetSnapshotFromCloudRequest;
import org.openapis.openapi.models.operations.CreateDownloadFilesetSnapshotFromCloudResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("officiis", "temporibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateDownloadFilesetSnapshotFromCloudRequest req = new CreateDownloadFilesetSnapshotFromCloudRequest("ullam");            

            CreateDownloadFilesetSnapshotFromCloudResponse res = sdk.rootFileset.createDownloadFilesetSnapshotFromCloud(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFileset

Create a fileset for a network host. A fileset is a fileset template applied to a host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilesetRequestBody;
import org.openapis.openapi.models.operations.CreateFilesetResponse;
import org.openapis.openapi.models.shared.FilesetArraySpec;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("adipisci", "cum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateFilesetRequestBody req = new CreateFilesetRequestBody("blanditiis") {{
                arraySpec = new FilesetArraySpec() {{
                    proxyHostId = "quas";
                }};;
                enableHardlinkSupport = false;
                enableSymlinkResolution = false;
                failoverClusterAppId = "hic";
                hostId = "nesciunt";
                isPassthrough = false;
                shareId = "culpa";
                snapMirrorLabelForFullBackup = "corrupti";
                snapMirrorLabelForIncrementalBackup = "pariatur";
            }};            

            CreateFilesetResponse res = sdk.rootFileset.createFileset(req);

            if (res.filesetDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilesetBackupJob

Create an on-demand backup request for the given fileset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilesetBackupJobRequest;
import org.openapis.openapi.models.operations.CreateFilesetBackupJobResponse;
import org.openapis.openapi.models.shared.BaseOnDemandSnapshotConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("totam", "hic") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateFilesetBackupJobRequest req = new CreateFilesetBackupJobRequest("exercitationem") {{
                baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig() {{
                    slaId = "nobis";
                }};;
            }};            

            CreateFilesetBackupJobResponse res = sdk.rootFileset.createFilesetBackupJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilesetDownloadFileJob

Initiate a job to download a file from a backup of a fileset. Returns a job instance ID.
An email notification will be sent out when the download is ready. When the download is ready, the file can be downloaded from the corresponding event which includes the job instance ID as the value of **jobInstanceId**.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilesetDownloadFileJobRequest;
import org.openapis.openapi.models.operations.CreateFilesetDownloadFileJobResponse;
import org.openapis.openapi.models.shared.FilesetDownloadFileJobConfig;
import org.openapis.openapi.models.shared.LegalHoldDownloadConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sit", "rerum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateFilesetDownloadFileJobRequest req = new CreateFilesetDownloadFileJobRequest(                new FilesetDownloadFileJobConfig("sed") {{
                                legalHoldDownloadConfig = new LegalHoldDownloadConfig(false);;
                            }};, "reiciendis");            

            CreateFilesetDownloadFileJobResponse res = sdk.rootFileset.createFilesetDownloadFileJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilesetExportFileJob

Initiate a job to copy a file or folder from a fileset backup to a destination host other than the source host. Returns the job instance ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilesetExportFileJobRequest;
import org.openapis.openapi.models.operations.CreateFilesetExportFileJobResponse;
import org.openapis.openapi.models.shared.FilesetExportFileJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("explicabo", "asperiores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateFilesetExportFileJobRequest req = new CreateFilesetExportFileJobRequest(                new FilesetExportFileJobConfig("facilis", "voluptate", "expedita") {{
                                ignoreErrors = false;
                                shareId = "ab";
                            }};, "iste");            

            CreateFilesetExportFileJobResponse res = sdk.rootFileset.createFilesetExportFileJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilesetRestoreFileJob

Initiate a job to copy a file or folder from a fileset backup to the source host. Returns the job instance ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilesetRestoreFileJobRequest;
import org.openapis.openapi.models.operations.CreateFilesetRestoreFileJobResponse;
import org.openapis.openapi.models.shared.FilesetRestoreFileJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolore", "laborum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateFilesetRestoreFileJobRequest req = new CreateFilesetRestoreFileJobRequest(                new FilesetRestoreFileJobConfig("sed", "in") {{
                                ignoreErrors = false;
                            }};, "commodi");            

            CreateFilesetRestoreFileJobResponse res = sdk.rootFileset.createFilesetRestoreFileJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFileset

Delete a fileset by specifying the fileset ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFilesetRequest;
import org.openapis.openapi.models.operations.DeleteFilesetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quidem", "explicabo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteFilesetRequest req = new DeleteFilesetRequest("voluptas") {{
                preserveSnapshots = false;
            }};            

            DeleteFilesetResponse res = sdk.rootFileset.deleteFileset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFilesetSnapshot

Delete a fileset snapshot. A snapshot is deleted only if it is an on-demand snapshot, a snapshot of an unprotected fileset or a local snapshot that was downloaded from an archive location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFilesetSnapshotLocationEnum;
import org.openapis.openapi.models.operations.DeleteFilesetSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteFilesetSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("unde", "architecto") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteFilesetSnapshotRequest req = new DeleteFilesetSnapshotRequest("suscipit", DeleteFilesetSnapshotLocationEnum.LOCAL);            

            DeleteFilesetSnapshotResponse res = sdk.rootFileset.deleteFilesetSnapshot(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFilesetSnapshots

Delete all snapshots that were created based on a fileset by providing the fileset ID.
Requires an unprotected fileset. Remove the fileset from all SLA Domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFilesetSnapshotsRequest;
import org.openapis.openapi.models.operations.DeleteFilesetSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("debitis", "illo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteFilesetSnapshotsRequest req = new DeleteFilesetSnapshotsRequest("reiciendis");            

            DeleteFilesetSnapshotsResponse res = sdk.rootFileset.deleteFilesetSnapshots(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileset

Retrieve summary information for a fileset by specifying the fileset ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesetRequest;
import org.openapis.openapi.models.operations.GetFilesetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("perferendis", "corrupti") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFilesetRequest req = new GetFilesetRequest("maiores");            

            GetFilesetResponse res = sdk.rootFileset.getFileset(req);

            if (res.filesetDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilesetAsyncRequestStatus

Get details about a fileset related async request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesetAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetFilesetAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("incidunt", "sed") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFilesetAsyncRequestStatusRequest req = new GetFilesetAsyncRequestStatusRequest("provident");            

            GetFilesetAsyncRequestStatusResponse res = sdk.rootFileset.getFilesetAsyncRequestStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilesetSnapshot

Retrieve summary information for a fileset snapshot by specifying the snapshot ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesetSnapshotRequest;
import org.openapis.openapi.models.operations.GetFilesetSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eius", "necessitatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetFilesetSnapshotRequest req = new GetFilesetSnapshotRequest("ipsum") {{
                verbose = false;
            }};            

            GetFilesetSnapshotResponse res = sdk.rootFileset.getFilesetSnapshot(req);

            if (res.filesetSnapshotDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMissedFilesetSnapshots

Retrieve summary information about all missed snapshots for a fileset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMissedFilesetSnapshotsRequest;
import org.openapis.openapi.models.operations.GetMissedFilesetSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ea", "occaecati") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMissedFilesetSnapshotsRequest req = new GetMissedFilesetSnapshotsRequest("quos");            

            GetMissedFilesetSnapshotsResponse res = sdk.rootFileset.getMissedFilesetSnapshots(req);

            if (res.missedSnapshotListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryFileset

Retrieve summary information for each fileset. Optionally, filter the retrieved information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryFilesetRequest;
import org.openapis.openapi.models.operations.QueryFilesetResponse;
import org.openapis.openapi.models.operations.QueryFilesetSortByEnum;
import org.openapis.openapi.models.operations.QueryFilesetSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatibus", "tempora") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryFilesetRequest req = new QueryFilesetRequest() {{
                effectiveSlaDomainId = "tempora";
                hostId = "voluptate";
                hostName = "wiggly-gripper.com";
                isRelic = false;
                limit = 248413;
                name = "Clayton Quitzon";
                offset = 373035;
                primaryClusterId = "debitis";
                shareId = "rem";
                sortBy = QueryFilesetSortByEnum.NAME;
                sortOrder = QueryFilesetSortOrderEnum.DESC;
                templateId = "error";
            }};            

            QueryFilesetResponse res = sdk.rootFileset.queryFileset(req);

            if (res.filesetSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchFileset

Search for a file within the fileset. Search via full path prefix or filename prefix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFilesetRequest;
import org.openapis.openapi.models.operations.SearchFilesetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("veniam", "minima") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SearchFilesetRequest req = new SearchFilesetRequest("recusandae", "reiciendis") {{
                cursor = "nulla";
                limit = 168576;
            }};            

            SearchFilesetResponse res = sdk.rootFileset.searchFileset(req);

            if (res.searchResponseListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFileset

Update a Fileset with the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFilesetRequest;
import org.openapis.openapi.models.operations.UpdateFilesetResponse;
import org.openapis.openapi.models.shared.FilesetUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aperiam", "saepe") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateFilesetRequest req = new UpdateFilesetRequest(                new FilesetUpdate() {{
                                configuredSlaDomainId = "numquam";
                                forceFull = false;
                                forceFullPartitionIds = new Integer[]{{
                                    add(446135),
                                    add(889234),
                                }};
                                snapMirrorLabelForFullBackup = "beatae";
                                snapMirrorLabelForIncrementalBackup = "laudantium";
                            }};, "exercitationem");            

            UpdateFilesetResponse res = sdk.rootFileset.updateFileset(req);

            if (res.filesetDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
