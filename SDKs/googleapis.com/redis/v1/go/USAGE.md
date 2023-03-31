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
        DollarXgafv: "2",
        InstanceInput: &shared.InstanceInput{
            AlternativeLocationID: "provident",
            AuthEnabled: false,
            AuthorizedNetwork: "distinctio",
            AvailableMaintenanceVersions: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            ConnectMode: "DIRECT_PEERING",
            CustomerManagedKey: "error",
            DisplayName: "deserunt",
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            LocationID: "delectus",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "tempora",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "WEDNESDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 791725,
                            Minutes: 812169,
                            Nanos: 528895,
                            Seconds: 479977,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "THURSDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 392785,
                            Minutes: 925597,
                            Nanos: 836079,
                            Seconds: 71036,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: false,
            },
            MaintenanceVersion: "quis",
            MemorySizeGb: 87129,
            Name: "deserunt",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "PERSISTENCE_MODE_UNSPECIFIED",
                RdbSnapshotPeriod: "ONE_HOUR",
                RdbSnapshotStartTime: "repellendus",
            },
            ReadReplicasMode: "READ_REPLICAS_ENABLED",
            RedisConfigs: map[string]string{
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
            },
            RedisVersion: "totam",
            ReplicaCount: 780529,
            ReservedIPRange: "dolorum",
            SecondaryIPRange: "dicta",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "CUSTOMER_MANAGED_KEY_ISSUE",
                "CUSTOMER_MANAGED_KEY_ISSUE",
                "SUSPENSION_REASON_UNSPECIFIED",
            },
            Tier: "BASIC",
            TransitEncryptionMode: "DISABLED",
        },
        AccessToken: "optio",
        Alt: "media",
        Callback: "beatae",
        Fields: "commodi",
        InstanceID: "molestiae",
        Key: "modi",
        OauthToken: "qui",
        Parent: "impedit",
        PrettyPrint: false,
        QuotaUser: "cum",
        UploadType: "esse",
        UploadProtocol: "ipsum",
    }

    ctx := context.Background()
    res, err := s.Projects.RedisProjectsLocationsInstancesCreate(ctx, req, operations.RedisProjectsLocationsInstancesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->