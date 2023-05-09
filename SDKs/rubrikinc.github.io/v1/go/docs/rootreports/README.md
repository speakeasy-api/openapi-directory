# RootReports

## Overview

Report.

### Available Operations

* [GetComplianceSummarySlav1](#getcompliancesummaryslav1) - Get compliance summary information
* [GetComplianceSummaryV1](#getcompliancesummaryv1) - Get compliance summary information
* [SetReportConfig](#setreportconfig) - Modify the report config

## GetComplianceSummarySlav1

Returns the compliance summary information for all protected objects based on whether the last expected snapshot was successful. This requirement is based on the SLA Domain assigned to the objects.

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
    res, err := s.RootReports.GetComplianceSummarySlav1(ctx, operations.GetComplianceSummarySlav1Request{
        SnapshotRange: operations.GetComplianceSummarySlav1SnapshotRangeEnumLast2Snapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ComplianceSummarySlav1 != nil {
        // handle response
    }
}
```

## GetComplianceSummaryV1

Returns the compliance summary information for all protected objects based on a time-based requirement of at least one snapshot in each 24 hour report period. This view ignores the policies assigned to protected objects through SLA Domains.

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
    res, err := s.RootReports.GetComplianceSummaryV1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ComplianceSummaryV1 != nil {
        // handle response
    }
}
```

## SetReportConfig

Set the different report config parameters.

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
    res, err := s.RootReports.SetReportConfig(ctx, shared.ReportConfigPatch{
        CleanupReportJobInstanceForLogJobs: sdk.Int(853836),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportConfigResponse != nil {
        // handle response
    }
}
```
