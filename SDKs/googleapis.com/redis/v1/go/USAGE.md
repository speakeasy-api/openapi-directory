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
            Parent: "unde",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            InstanceID: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "iusto",
            AuthEnabled: false,
            AuthorizedNetwork: "ullam",
            AvailableMaintenanceVersions: []string{
                "inventore",
                "sapiente",
                "enim",
                "eum",
            },
            ConnectMode: "DIRECT_PEERING",
            CustomerManagedKey: "autem",
            DisplayName: "vel",
            Labels: map[string]string{
                "deleniti": "similique",
                "reprehenderit": "molestiae",
                "quo": "quasi",
            },
            LocationID: "laboriosam",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "dicta",
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
            MaintenanceVersion: "soluta",
            MemorySizeGb: 118274,
            Name: "quisquam",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "DISABLED",
                RdbSnapshotPeriod: "SIX_HOURS",
                RdbSnapshotStartTime: "qui",
            },
            ReadReplicasMode: "READ_REPLICAS_DISABLED",
            RedisConfigs: map[string]string{
                "possimus": "occaecati",
                "odit": "esse",
                "rem": "voluptatem",
                "amet": "est",
            },
            RedisVersion: "id",
            ReplicaCount: 456150,
            ReservedIPRange: "numquam",
            SecondaryIPRange: "similique",
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