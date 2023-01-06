<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "qui",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "perferendis",
            Alt: "proto",
            Callback: "fuga",
            Fields: "beatae",
            InstanceID: "porro",
            Key: "assumenda",
            OauthToken: "iste",
            PrettyPrint: true,
            QuotaUser: "est",
            UploadType: "laborum",
            UploadProtocol: "sit",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "molestias",
            AuthEnabled: false,
            AuthorizedNetwork: "similique",
            ConnectMode: "DIRECT_PEERING",
            CustomerManagedKey: "ut",
            DisplayName: "dignissimos",
            Labels: map[string]string{
                "eius": "et",
                "architecto": "blanditiis",
                "ipsa": "fugit",
            },
            LocationID: "quam",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "quis",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "FRIDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 4087296727165618714,
                            Minutes: 1067629835772252789,
                            Nanos: 7621345094498405750,
                            Seconds: 5727821470484534194,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "SUNDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 1248126322763821706,
                            Minutes: 6599205684482159674,
                            Nanos: 530124589493357256,
                            Seconds: 3224546940256709254,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "FRIDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 9072737200707746105,
                            Minutes: 7293997328744385729,
                            Nanos: 3952702246579491058,
                            Seconds: 6240154433186329948,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: false,
            },
            MemorySizeGb: 187607562694229957,
            Name: "ea",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "RDB",
                RdbSnapshotPeriod: "SNAPSHOT_PERIOD_UNSPECIFIED",
                RdbSnapshotStartTime: "rerum",
            },
            ReadReplicasMode: "READ_REPLICAS_DISABLED",
            RedisConfigs: map[string]string{
                "consequuntur": "perferendis",
                "quidem": "qui",
            },
            RedisVersion: "dolor",
            ReplicaCount: 1486815324808672126,
            ReservedIPRange: "voluptas",
            SecondaryIPRange: "dolorem",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "CUSTOMER_MANAGED_KEY_ISSUE",
                "CUSTOMER_MANAGED_KEY_ISSUE",
            },
            Tier: "TIER_UNSPECIFIED",
            TransitEncryptionMode: "DISABLED",
        },
    }
    
    res, err := s.Projects.RedisProjectsLocationsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->