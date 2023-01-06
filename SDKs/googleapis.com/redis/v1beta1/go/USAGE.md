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
            DollarXgafv: "1",
            AccessToken: "eos",
            Alt: "media",
            Callback: "aspernatur",
            Fields: "culpa",
            InstanceID: "est",
            Key: "occaecati",
            OauthToken: "sunt",
            PrettyPrint: true,
            QuotaUser: "culpa",
            UploadType: "non",
            UploadProtocol: "cumque",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "omnis",
            AuthEnabled: true,
            AuthorizedNetwork: "incidunt",
            AvailableMaintenanceVersions: []string{
                "ea",
            },
            ConnectMode: "CONNECT_MODE_UNSPECIFIED",
            CustomerManagedKey: "dolor",
            DisplayName: "delectus",
            Labels: map[string]string{
                "nostrum": "quos",
            },
            LocationID: "nam",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "iusto",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "SUNDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 5018370869501883230,
                            Minutes: 2133319266033746062,
                            Nanos: 8649617518309229479,
                            Seconds: 593089783578800138,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: true,
            },
            MaintenanceVersion: "tenetur",
            MemorySizeGb: 6664718901604938113,
            Name: "non",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "DISABLED",
                RdbSnapshotPeriod: "TWENTY_FOUR_HOURS",
                RdbSnapshotStartTime: "exercitationem",
            },
            ReadReplicasMode: "READ_REPLICAS_DISABLED",
            RedisConfigs: map[string]string{
                "dolores": "fuga",
                "eum": "nihil",
            },
            RedisVersion: "deserunt",
            ReplicaCount: 8061756071631393984,
            ReservedIPRange: "repellendus",
            SecondaryIPRange: "tempora",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "CUSTOMER_MANAGED_KEY_ISSUE",
            },
            Tier: "BASIC",
            TransitEncryptionMode: "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED",
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