# backupRuns

### Available Operations

* [sqlBackupRunsDelete](#sqlbackuprunsdelete) - Deletes the backup taken by a backup run.
* [sqlBackupRunsGet](#sqlbackuprunsget) - Retrieves a resource containing information about a backup run.
* [sqlBackupRunsInsert](#sqlbackuprunsinsert) - Creates a new backup run on demand.
* [sqlBackupRunsList](#sqlbackuprunslist) - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

## sqlBackupRunsDelete

Deletes the backup taken by a backup run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteRequest;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteResponse;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurity;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlBackupRunsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlBackupRunsDeleteRequest req = new SqlBackupRunsDeleteRequest("ipsa", "delectus", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            SqlBackupRunsDeleteResponse res = sdk.backupRuns.sqlBackupRunsDelete(req, new SqlBackupRunsDeleteSecurity() {{
                option1 = new SqlBackupRunsDeleteSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlBackupRunsGet

Retrieves a resource containing information about a backup run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlBackupRunsGetRequest;
import org.openapis.openapi.models.operations.SqlBackupRunsGetResponse;
import org.openapis.openapi.models.operations.SqlBackupRunsGetSecurity;
import org.openapis.openapi.models.operations.SqlBackupRunsGetSecurityOption1;
import org.openapis.openapi.models.operations.SqlBackupRunsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlBackupRunsGetRequest req = new SqlBackupRunsGetRequest("veritatis", "deserunt", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            SqlBackupRunsGetResponse res = sdk.backupRuns.sqlBackupRunsGet(req, new SqlBackupRunsGetSecurity() {{
                option1 = new SqlBackupRunsGetSecurityOption1("quod", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backupRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlBackupRunsInsert

Creates a new backup run on demand.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlBackupRunsInsertRequest;
import org.openapis.openapi.models.operations.SqlBackupRunsInsertResponse;
import org.openapis.openapi.models.operations.SqlBackupRunsInsertSecurity;
import org.openapis.openapi.models.operations.SqlBackupRunsInsertSecurityOption1;
import org.openapis.openapi.models.operations.SqlBackupRunsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupRun;
import org.openapis.openapi.models.shared.BackupRunBackupKindEnum;
import org.openapis.openapi.models.shared.BackupRunStatusEnum;
import org.openapis.openapi.models.shared.BackupRunTypeEnum;
import org.openapis.openapi.models.shared.DiskEncryptionConfiguration;
import org.openapis.openapi.models.shared.DiskEncryptionStatus;
import org.openapis.openapi.models.shared.OperationError;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlBackupRunsInsertRequest req = new SqlBackupRunsInsertRequest("totam", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                backupRun = new BackupRun() {{
                    backupKind = BackupRunBackupKindEnum.SQL_BACKUP_KIND_UNSPECIFIED;
                    description = "nam";
                    diskEncryptionConfiguration = new DiskEncryptionConfiguration() {{
                        kind = "officia";
                        kmsKeyName = "occaecati";
                    }};;
                    diskEncryptionStatus = new DiskEncryptionStatus() {{
                        kind = "fugit";
                        kmsKeyVersionName = "deleniti";
                    }};;
                    endTime = "hic";
                    enqueuedTime = "optio";
                    error = new OperationError() {{
                        code = "totam";
                        kind = "beatae";
                        message = "commodi";
                    }};;
                    id = "molestiae";
                    instance = "modi";
                    kind = "qui";
                    location = "impedit";
                    selfLink = "cum";
                    startTime = "esse";
                    status = BackupRunStatusEnum.OVERDUE;
                    timeZone = "excepturi";
                    type = BackupRunTypeEnum.SQL_BACKUP_RUN_TYPE_UNSPECIFIED;
                    windowStartTime = "perferendis";
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
            }};            

            SqlBackupRunsInsertResponse res = sdk.backupRuns.sqlBackupRunsInsert(req, new SqlBackupRunsInsertSecurity() {{
                option1 = new SqlBackupRunsInsertSecurityOption1("fuga", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlBackupRunsList

Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlBackupRunsListRequest;
import org.openapis.openapi.models.operations.SqlBackupRunsListResponse;
import org.openapis.openapi.models.operations.SqlBackupRunsListSecurity;
import org.openapis.openapi.models.operations.SqlBackupRunsListSecurityOption1;
import org.openapis.openapi.models.operations.SqlBackupRunsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlBackupRunsListRequest req = new SqlBackupRunsListRequest("corporis", "iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "ipsa";
                key = "reiciendis";
                maxResults = 666767L;
                oauthToken = "mollitia";
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            SqlBackupRunsListResponse res = sdk.backupRuns.sqlBackupRunsList(req, new SqlBackupRunsListSecurity() {{
                option1 = new SqlBackupRunsListSecurityOption1("explicabo", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backupRunsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
