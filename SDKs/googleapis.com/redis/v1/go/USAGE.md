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
            Parent: "sit",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            InstanceID: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "debitis",
            AuthEnabled: true,
            AuthorizedNetwork: "et",
            ConnectMode: "PRIVATE_SERVICE_ACCESS",
            CustomerManagedKey: "dolorem",
            DisplayName: "et",
            Labels: map[string]string{
                "iste": "vitae",
            },
            LocationID: "totam",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "dolores",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "TUESDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 3706853784096366226,
                            Minutes: 2627038740284806767,
                            Nanos: 6303220950515014660,
                            Seconds: 4035568504096476779,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "FRIDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 2914295034816259174,
                            Minutes: 1395437218309923052,
                            Nanos: 6745438398739480977,
                            Seconds: 2897681629866238117,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "MONDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 5974317550424871033,
                            Minutes: 3317123977833389635,
                            Nanos: 5001958211167890979,
                            Seconds: 167566062957544642,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: true,
            },
            MemorySizeGb: 1059542851699319360,
            Name: "illo",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "RDB",
                RdbSnapshotPeriod: "TWENTY_FOUR_HOURS",
                RdbSnapshotStartTime: "autem",
            },
            ReadReplicasMode: "READ_REPLICAS_MODE_UNSPECIFIED",
            RedisConfigs: map[string]string{
                "odio": "qui",
            },
            RedisVersion: "recusandae",
            ReplicaCount: 7561811714888168464,
            ReservedIPRange: "ipsum",
            SecondaryIPRange: "eveniet",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "SUSPENSION_REASON_UNSPECIFIED",
                "CUSTOMER_MANAGED_KEY_ISSUE",
            },
            Tier: "STANDARD_HA",
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