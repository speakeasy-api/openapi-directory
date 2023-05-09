# rootBackup

## Overview

Backup.

### Available Operations

* [createBackupRemediationAsyncTask](#createbackupremediationasynctask) - Reschedule unsuccessful backup tasks
* [getBackupRemediationAsyncTaskStatus](#getbackupremediationasynctaskstatus) - Get status of reschedule attempt
* [getBackupVerificationAsyncRequestStatus](#getbackupverificationasyncrequeststatus) - Get asynchronous request details for Backup Verification
* [verifySnapshot](#verifysnapshot) - Trigger a job for snapshot verification

## createBackupRemediationAsyncTask

Create an asynchronous task for rescheduling unsuccessful backup tasks.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackupRemediationAsyncTaskResponse;
import org.openapis.openapi.models.shared.RemediationRequest;
import org.openapis.openapi.models.shared.RemediationRequestRunConfig;
import org.openapis.openapi.models.shared.RemediationRequestSpec;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nisi", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RemediationRequest req = new RemediationRequest(                new RemediationRequestRunConfig(false);,                 new org.openapis.openapi.models.shared.RemediationRequestSpec[]{{
                                add(new RemediationRequestSpec("veritatis", "deserunt") {{
                                    eventSeriesId = "ab";
                                    objectId = "quis";
                                }}),
                                add(new RemediationRequestSpec("repellendus", "sapiente") {{
                                    eventSeriesId = "perferendis";
                                    objectId = "ipsam";
                                }}),
                                add(new RemediationRequestSpec("at", "at") {{
                                    eventSeriesId = "quo";
                                    objectId = "odit";
                                }}),
                                add(new RemediationRequestSpec("quod", "quod") {{
                                    eventSeriesId = "maiores";
                                    objectId = "molestiae";
                                }}),
                            }});            

            CreateBackupRemediationAsyncTaskResponse res = sdk.rootBackup.createBackupRemediationAsyncTask(req);

            if (res.remediationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackupRemediationAsyncTaskStatus

Retrieve the details of a specified asynchronous task to use for rescheduling unsuccessful tasks.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackupRemediationAsyncTaskStatusRequest;
import org.openapis.openapi.models.operations.GetBackupRemediationAsyncTaskStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "totam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetBackupRemediationAsyncTaskStatusRequest req = new GetBackupRemediationAsyncTaskStatusRequest("porro");            

            GetBackupRemediationAsyncTaskStatusResponse res = sdk.rootBackup.getBackupRemediationAsyncTaskStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackupVerificationAsyncRequestStatus

Get the details of an asynchronous request for a backup verification job.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackupVerificationAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetBackupVerificationAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolorum", "dicta") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetBackupVerificationAsyncRequestStatusRequest req = new GetBackupVerificationAsyncRequestStatusRequest("nam");            

            GetBackupVerificationAsyncRequestStatusResponse res = sdk.rootBackup.getBackupVerificationAsyncRequestStatus(req);

            if (res.verificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifySnapshot

This REST API triggers the job "BACKUP_INTEGRITY_VERIFICATION", which verifies whether or not the specified snapshot is restorable.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifySnapshotResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerificationParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("officia", "occaecati") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.VerificationParameters req = new VerificationParameters("fugit") {{
                locationIdOpt = "deleniti";
                shouldVerifyAfterOpt = OffsetDateTime.parse("2020-09-22T07:34:53.140Z");
                snapshotIdsOpt = new String[]{{
                    add("beatae"),
                    add("commodi"),
                    add("molestiae"),
                }};
            }};            

            VerifySnapshotResponse res = sdk.rootBackup.verifySnapshot(req);

            if (res.verificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
