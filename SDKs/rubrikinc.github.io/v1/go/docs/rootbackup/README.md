# RootBackup

## Overview

Backup.

### Available Operations

* [CreateBackupRemediationAsyncTask](#createbackupremediationasynctask) - Reschedule unsuccessful backup tasks
* [GetBackupRemediationAsyncTaskStatus](#getbackupremediationasynctaskstatus) - Get status of reschedule attempt
* [GetBackupVerificationAsyncRequestStatus](#getbackupverificationasyncrequeststatus) - Get asynchronous request details for Backup Verification
* [VerifySnapshot](#verifysnapshot) - Trigger a job for snapshot verification

## CreateBackupRemediationAsyncTask

Create an asynchronous task for rescheduling unsuccessful backup tasks.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootBackup.CreateBackupRemediationAsyncTask(ctx, shared.RemediationRequest{
        Config: shared.RemediationRequestRunConfig{
            RunNow: false,
        },
        Spec: []shared.RemediationRequestSpec{
            shared.RemediationRequestSpec{
                EventSeriesID: "possimus",
                ObjectID: "aut",
            },
            shared.RemediationRequestSpec{
                EventSeriesID: "quasi",
                ObjectID: "error",
            },
            shared.RemediationRequestSpec{
                EventSeriesID: "temporibus",
                ObjectID: "laborum",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemediationResponse != nil {
        // handle response
    }
}
```

## GetBackupRemediationAsyncTaskStatus

Retrieve the details of a specified asynchronous task to use for rescheduling unsuccessful tasks.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootBackup.GetBackupRemediationAsyncTaskStatus(ctx, operations.GetBackupRemediationAsyncTaskStatusRequest{
        ID: "1ffe78f0-97b0-4074-b154-71b5e6e13b99",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetBackupVerificationAsyncRequestStatus

Get the details of an asynchronous request for a backup verification job.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootBackup.GetBackupVerificationAsyncRequestStatus(ctx, operations.GetBackupVerificationAsyncRequestStatusRequest{
        ID: "d488e1e9-1e45-40ad-aabd-44269802d502",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerificationResponse != nil {
        // handle response
    }
}
```

## VerifySnapshot

This REST API triggers the job "BACKUP_INTEGRITY_VERIFICATION", which verifies whether or not the specified snapshot is restorable.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootBackup.VerifySnapshot(ctx, shared.VerificationParameters{
        LocationIDOpt: sdk.String("dolorum"),
        ObjectID: "excepturi",
        ShouldVerifyAfterOpt: types.MustTimeFromString("2022-04-19T03:15:40.816Z"),
        SnapshotIdsOpt: []string{
            "labore",
            "delectus",
            "eum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerificationResponse != nil {
        // handle response
    }
}
```
