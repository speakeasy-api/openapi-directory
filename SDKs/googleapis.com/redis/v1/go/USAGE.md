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
            Parent: "molestiae",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptatem",
            Alt: "media",
            Callback: "officia",
            Fields: "architecto",
            InstanceID: "labore",
            Key: "laboriosam",
            OauthToken: "in",
            PrettyPrint: false,
            QuotaUser: "beatae",
            UploadType: "blanditiis",
            UploadProtocol: "beatae",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "voluptate",
            AuthEnabled: false,
            AuthorizedNetwork: "molestiae",
            ConnectMode: "DIRECT_PEERING",
            CustomerManagedKey: "ut",
            DisplayName: "ipsam",
            Labels: map[string]string{
                "atque": "molestias",
                "ut": "dolores",
                "voluptas": "omnis",
            },
            LocationID: "id",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "nostrum",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "TUESDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 7207637891447502103,
                            Minutes: 8622083641679649735,
                            Nanos: 6406047390230794463,
                            Seconds: 8648367394506910482,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "DAY_OF_WEEK_UNSPECIFIED",
                        StartTime: &shared.TimeOfDay{
                            Hours: 102516519619783577,
                            Minutes: 2317600410149429910,
                            Nanos: 4401454000593110478,
                            Seconds: 3498630052342442269,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: false,
            },
            MemorySizeGb: 2306973576407439514,
            Name: "reprehenderit",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "PERSISTENCE_MODE_UNSPECIFIED",
                RdbSnapshotPeriod: "TWELVE_HOURS",
                RdbSnapshotStartTime: "eveniet",
            },
            ReadReplicasMode: "READ_REPLICAS_DISABLED",
            RedisConfigs: map[string]string{
                "quasi": "voluptates",
            },
            RedisVersion: "eligendi",
            ReplicaCount: 4525063102438322793,
            ReservedIPRange: "deserunt",
            SecondaryIPRange: "ea",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "CUSTOMER_MANAGED_KEY_ISSUE",
                "CUSTOMER_MANAGED_KEY_ISSUE",
            },
            Tier: "TIER_UNSPECIFIED",
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