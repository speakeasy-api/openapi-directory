<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RedisProjectsLocationsInstancesCreateRequest{
        Security: operations.RedisProjectsLocationsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RedisProjectsLocationsInstancesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            InstanceID: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "iure",
            AuthEnabled: false,
            AuthorizedNetwork: "magnam",
            AvailableMaintenanceVersions: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            ConnectMode: "DIRECT_PEERING",
            CustomerManagedKey: "minus",
            DisplayName: "placeat",
            Labels: map[string]string{
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            LocationID: "quis",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "veritatis",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "DAY_OF_WEEK_UNSPECIFIED",
                        StartTime: &shared.TimeOfDay{
                            Hours: 368241,
                            Minutes: 832620,
                            Nanos: 957156,
                            Seconds: 778157,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "MONDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 870013,
                            Minutes: 870088,
                            Nanos: 978619,
                            Seconds: 473608,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "SATURDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 800911,
                            Minutes: 461479,
                            Nanos: 520478,
                            Seconds: 780529,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: false,
            },
            MaintenanceVersion: "dolorum",
            MemorySizeGb: 118274,
            Name: "nam",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "DISABLED",
                RdbSnapshotPeriod: "SIX_HOURS",
                RdbSnapshotStartTime: "fugit",
            },
            ReadReplicasMode: "READ_REPLICAS_DISABLED",
            RedisConfigs: map[string]string{
                "optio": "totam",
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
            RedisVersion: "cum",
            ReplicaCount: 456150,
            ReservedIPRange: "ipsum",
            SecondaryIPRange: "excepturi",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "SUSPENSION_REASON_UNSPECIFIED",
            },
            Tier: "TIER_UNSPECIFIED",
            TransitEncryptionMode: "SERVER_AUTHENTICATION",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.RedisProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->