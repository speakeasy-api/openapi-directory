<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.RedisProjectsLocationsInstancesCreate(ctx, operations.RedisProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            AlternativeLocationID: sdk.String("provident"),
            AuthEnabled: sdk.Bool(false),
            AuthorizedNetwork: sdk.String("distinctio"),
            AvailableMaintenanceVersions: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            ConnectMode: shared.InstanceConnectModeEnumDirectPeering.ToPointer(),
            CustomerManagedKey: sdk.String("error"),
            DisplayName: sdk.String("deserunt"),
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            LocationID: sdk.String("delectus"),
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: sdk.String("tempora"),
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumWednesday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(791725),
                            Minutes: sdk.Int(812169),
                            Nanos: sdk.Int(528895),
                            Seconds: sdk.Int(479977),
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: shared.WeeklyMaintenanceWindowDayEnumThursday.ToPointer(),
                        StartTime: &shared.TimeOfDay{
                            Hours: sdk.Int(392785),
                            Minutes: sdk.Int(925597),
                            Nanos: sdk.Int(836079),
                            Seconds: sdk.Int(71036),
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: sdk.Bool(false),
            },
            MaintenanceVersion: sdk.String("quis"),
            MemorySizeGb: sdk.Int(87129),
            Name: sdk.String("Christopher Hills"),
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: shared.PersistenceConfigPersistenceModeEnumRdb.ToPointer(),
                RdbSnapshotPeriod: shared.PersistenceConfigRdbSnapshotPeriodEnumSnapshotPeriodUnspecified.ToPointer(),
                RdbSnapshotStartTime: sdk.String("at"),
            },
            ReadReplicasMode: shared.InstanceReadReplicasModeEnumReadReplicasEnabled.ToPointer(),
            RedisConfigs: map[string]string{
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
            },
            RedisVersion: sdk.String("nam"),
            ReplicaCount: sdk.Int(639921),
            ReservedIPRange: sdk.String("occaecati"),
            SecondaryIPRange: sdk.String("fugit"),
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                shared.InstanceSuspensionReasonsEnumCustomerManagedKeyIssue,
                shared.InstanceSuspensionReasonsEnumCustomerManagedKeyIssue,
                shared.InstanceSuspensionReasonsEnumCustomerManagedKeyIssue,
            },
            Tier: shared.InstanceTierEnumTierUnspecified.ToPointer(),
            TransitEncryptionMode: shared.InstanceTransitEncryptionModeEnumServerAuthentication.ToPointer(),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        InstanceID: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.RedisProjectsLocationsInstancesCreateSecurity{
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