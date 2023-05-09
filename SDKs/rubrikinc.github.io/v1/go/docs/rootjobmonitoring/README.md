# RootJobMonitoring

## Overview

Job monitoring.

### Available Operations

* [CreateMonitoringSubscription](#createmonitoringsubscription) - Create an email subscription to the job monitoring page
* [DeleteMonitoringSubscription](#deletemonitoringsubscription) - Delete a monitoring page email subscription
* [GetJobMonitoringInfo](#getjobmonitoringinfo) - Get job monitoring information
* [GetJobMonitoringInfoCsvDownloadLink](#getjobmonitoringinfocsvdownloadlink) - Download job monitoring information as a CSV file
* [GetMonitoringJobCountByJobState](#getmonitoringjobcountbyjobstate) - Get job monitoring summary information separated by job state
* [GetMonitoringJobCountByJobType](#getmonitoringjobcountbyjobtype) - Get job monitoring summary information separated by job type
* [GetMonitoringSubscription](#getmonitoringsubscription) - Get a specific monitoring email subscription by id
* [GetMonitoringSubscriptions](#getmonitoringsubscriptions) - Returns all email subscriptions for the monitoring page
* [UpdateMonitoringSubscription](#updatemonitoringsubscription) - Update a monitoring email subscription

## CreateMonitoringSubscription

Creates an email subscription to the job monitoring page, which provides information on jobs based on their type (active, in progress, canceled, scheduled, or succeeded). Users can choose which job states to include in the subscription. The email summarizes the job counts by type in the body, and includes the option to include CSV attachments for every job state selected.

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
    res, err := s.RootJobMonitoring.CreateMonitoringSubscription(ctx, shared.MonitoringEmailSubscriptionRequest{
        Attachments: []shared.SubscriptionAttachmentTypeEnum{
            shared.SubscriptionAttachmentTypeEnumCsv,
        },
        EmailAddresses: []string{
            "amet",
        },
        JobStates: []shared.JobMonitoringStateEnum{
            shared.JobMonitoringStateEnumSuccess,
            shared.JobMonitoringStateEnumCanceled,
        },
        TimeAttributes: shared.SubscriptionScheduleTimeAttributes{
            DailyScheduleHour: sdk.Int(293799),
            DayOfMonth: sdk.Int(298590),
            DaysOfWeek: []int{
                371935,
                115522,
                944475,
                505558,
            },
            MonthlyScheduleHour: sdk.Int(728379),
            WeeklyScheduleHour: sdk.Int(9912),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitoringSubscriptionSummary != nil {
        // handle response
    }
}
```

## DeleteMonitoringSubscription

Deletes the specified monitoring page email subscription.

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
    res, err := s.RootJobMonitoring.DeleteMonitoringSubscription(ctx, operations.DeleteMonitoringSubscriptionRequest{
        SubscriptionID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJobMonitoringInfo

Get the job summary for protection and recovery jobs that are currently running, scheduled to run, or completed in the past 24 hours.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
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
    res, err := s.RootJobMonitoring.GetJobMonitoringInfo(ctx, operations.GetJobMonitoringInfoRequest{
        AfterID: sdk.String("tempora"),
        EffectiveSLADomainID: sdk.String("quo"),
        IsFirstFull: sdk.Bool(false),
        IsOnDemand: sdk.Bool(false),
        JobEventStatus: []string{
            "sunt",
        },
        JobType: operations.GetJobMonitoringInfoJobTypeEnumLogBackup.ToPointer(),
        LastUpdateTime: types.MustTimeFromString("2022-02-11T03:57:43.231Z"),
        Limit: sdk.Int(118236),
        NodeName: sdk.String("excepturi"),
        ObjectName: sdk.String("consectetur"),
        ObjectType: operations.GetJobMonitoringInfoObjectTypeEnumShareFileset.ToPointer(),
        ShouldIncludeLogRelatedJob: sdk.Bool(false),
        SortBy: operations.GetJobMonitoringInfoSortByEnumJobStatus.ToPointer(),
        SortOrder: operations.GetJobMonitoringInfoSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobMonitoringResponse != nil {
        // handle response
    }
}
```

## GetJobMonitoringInfoCsvDownloadLink

Download the job summary for protection and recovery jobs that are currently running, scheduled to run, or completed in the past 24 hours as a CSV file. This is a synchronous operation.

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
    res, err := s.RootJobMonitoring.GetJobMonitoringInfoCsvDownloadLink(ctx, operations.GetJobMonitoringInfoCsvDownloadLinkRequest{
        JobEventStatus: operations.GetJobMonitoringInfoCsvDownloadLinkJobEventStatusEnumScheduled.ToPointer(),
        JobMonitoringState: operations.GetJobMonitoringInfoCsvDownloadLinkJobMonitoringStateEnumScheduled,
        JobType: operations.GetJobMonitoringInfoCsvDownloadLinkJobTypeEnumRecovery.ToPointer(),
        ObjectName: sdk.String("ducimus"),
        ObjectType: operations.GetJobMonitoringInfoCsvDownloadLinkObjectTypeEnumWindowsVolumeGroup.ToPointer(),
        ShouldIncludeLogRelatedJob: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobMonitoringCsvDownloadResponse != nil {
        // handle response
    }
}
```

## GetMonitoringJobCountByJobState

Get job summary separated by job state for all running jobs, jobs that have been scheduled and jobs that are complete, for protection and recovery jobs in the past 24 hours.

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
    res, err := s.RootJobMonitoring.GetMonitoringJobCountByJobState(ctx, operations.GetMonitoringJobCountByJobStateRequest{
        JobTypes: []string{
            "modi",
            "corrupti",
            "nihil",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobMonitoringSummaryByState != nil {
        // handle response
    }
}
```

## GetMonitoringJobCountByJobType

Get job summaries for protection and recovery jobs, separated by job type, that have been scheduled, are currently running, or completed in the past 24 hours.

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
    res, err := s.RootJobMonitoring.GetMonitoringJobCountByJobType(ctx, operations.GetMonitoringJobCountByJobTypeRequest{
        JobMonitoringState: operations.GetMonitoringJobCountByJobTypeJobMonitoringStateEnumScheduled,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobMonitoringSummaryByType != nil {
        // handle response
    }
}
```

## GetMonitoringSubscription

Returns a summary of the provided monitoring subscription.

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
    res, err := s.RootJobMonitoring.GetMonitoringSubscription(ctx, operations.GetMonitoringSubscriptionRequest{
        SubscriptionID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitoringSubscriptionSummary != nil {
        // handle response
    }
}
```

## GetMonitoringSubscriptions

Return all unarchived email subscriptions for monitoring page in a list of summaries sorted by creation time (earliest created first). Each summary contains information for each subscription -- Time attributes - when to send the email -- Email addresses - who to send the email -- Attachments - what attachments should the email include -- Job states - which job states to include in the email (Failure, Scheduled, Success, Active, Canceled). -- Id - the tring that identifies the subscription -- Status - the status of the subscription (Active, Suspended, or Unknown) -- Owner - information about the owner of the subscription -- user id - unique id used to identify the owner -- user name - human-readable name of user the time schedule to send the subscription.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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
    res, err := s.RootJobMonitoring.GetMonitoringSubscriptions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitoringSubscriptionSummaries != nil {
        // handle response
    }
}
```

## UpdateMonitoringSubscription

Updates the monitoring email subscription with the subscription ID provided.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootJobMonitoring.UpdateMonitoringSubscription(ctx, operations.UpdateMonitoringSubscriptionRequest{
        MonitoringEmailSubscriptionUpdate: shared.MonitoringEmailSubscriptionUpdate{
            AssumeOwnership: sdk.Bool(false),
            Attachments: []shared.SubscriptionAttachmentTypeEnum{
                shared.SubscriptionAttachmentTypeEnumCsv,
            },
            EmailAddresses: []string{
                "ipsam",
                "nobis",
                "porro",
                "labore",
            },
            ID: "972233e6-6bd8-4fe5-900b-979ef2038732",
            JobStates: []shared.JobMonitoringStateEnum{
                shared.JobMonitoringStateEnumScheduled,
            },
            TimeAttributes: shared.SubscriptionScheduleTimeAttributes{
                DailyScheduleHour: sdk.Int(587489),
                DayOfMonth: sdk.Int(15563),
                DaysOfWeek: []int{
                    801781,
                    774866,
                    100704,
                    30288,
                },
                MonthlyScheduleHour: sdk.Int(595858),
                WeeklyScheduleHour: sdk.Int(406946),
            },
        },
        SubscriptionID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitoringSubscriptionSummary != nil {
        // handle response
    }
}
```
