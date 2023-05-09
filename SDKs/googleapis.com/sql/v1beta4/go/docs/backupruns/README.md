# BackupRuns

### Available Operations

* [SQLBackupRunsDelete](#sqlbackuprunsdelete) - Deletes the backup taken by a backup run.
* [SQLBackupRunsGet](#sqlbackuprunsget) - Retrieves a resource containing information about a backup run.
* [SQLBackupRunsInsert](#sqlbackuprunsinsert) - Creates a new backup run on demand.
* [SQLBackupRunsList](#sqlbackuprunslist) - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

## SQLBackupRunsDelete

Deletes the backup taken by a backup run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BackupRuns.SQLBackupRunsDelete(ctx, operations.SQLBackupRunsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        ID: "1ba928fc-8167-442c-b739-205929396fea",
        Instance: "in",
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        Project: "iure",
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.SQLBackupRunsDeleteSecurity{
        Option1: &operations.SQLBackupRunsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SQLBackupRunsGet

Retrieves a resource containing information about a backup run.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BackupRuns.SQLBackupRunsGet(ctx, operations.SQLBackupRunsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("laborum"),
        ID: "2352c595-5907-4aff-9a3a-2fa946773925",
        Instance: "vitae",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        Project: "enim",
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.SQLBackupRunsGetSecurity{
        Option1: &operations.SQLBackupRunsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BackupRun != nil {
        // handle response
    }
}
```

## SQLBackupRunsInsert

Creates a new backup run on demand.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BackupRuns.SQLBackupRunsInsert(ctx, operations.SQLBackupRunsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupRun: &shared.BackupRun{
            BackupKind: shared.BackupRunBackupKindEnumSnapshot.ToPointer(),
            Description: sdk.String("id"),
            DiskEncryptionConfiguration: &shared.DiskEncryptionConfiguration{
                Kind: sdk.String("possimus"),
                KmsKeyName: sdk.String("aut"),
            },
            DiskEncryptionStatus: &shared.DiskEncryptionStatus{
                Kind: sdk.String("quasi"),
                KmsKeyVersionName: sdk.String("error"),
            },
            EndTime: sdk.String("temporibus"),
            EnqueuedTime: sdk.String("laborum"),
            Error: &shared.OperationError{
                Code: sdk.String("quasi"),
                Kind: sdk.String("reiciendis"),
                Message: sdk.String("voluptatibus"),
            },
            ID: sdk.String("vero"),
            Instance: sdk.String("nihil"),
            Kind: sdk.String("praesentium"),
            Location: sdk.String("voluptatibus"),
            SelfLink: sdk.String("ipsa"),
            StartTime: sdk.String("omnis"),
            Status: shared.BackupRunStatusEnumFailed.ToPointer(),
            TimeZone: sdk.String("cum"),
            Type: shared.BackupRunTypeEnumSQLBackupRunTypeUnspecified.ToPointer(),
            WindowStartTime: sdk.String("doloremque"),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("dicta"),
        Instance: "corporis",
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        Project: "dicta",
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.SQLBackupRunsInsertSecurity{
        Option1: &operations.SQLBackupRunsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SQLBackupRunsList

Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BackupRuns.SQLBackupRunsList(ctx, operations.SQLBackupRunsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Instance: "molestias",
        Key: sdk.String("excepturi"),
        MaxResults: sdk.Int64(865103),
        OauthToken: sdk.String("modi"),
        PageToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        Project: "rem",
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.SQLBackupRunsListSecurity{
        Option1: &operations.SQLBackupRunsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BackupRunsListResponse != nil {
        // handle response
    }
}
```
