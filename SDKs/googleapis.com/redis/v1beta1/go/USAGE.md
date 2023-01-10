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
            Parent: "ut",
        },
        QueryParams: operations.RedisProjectsLocationsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "sit",
            Alt: "json",
            Callback: "architecto",
            Fields: "rerum",
            InstanceID: "et",
            Key: "reprehenderit",
            OauthToken: "ratione",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "consequatur",
            UploadProtocol: "molestiae",
        },
        Request: &shared.InstanceInput{
            AlternativeLocationID: "corrupti",
            AuthEnabled: false,
            AuthorizedNetwork: "dolorem",
            AvailableMaintenanceVersions: []string{
                "est",
            },
            ConnectMode: "PRIVATE_SERVICE_ACCESS",
            CustomerManagedKey: "facilis",
            DisplayName: "sunt",
            Labels: map[string]string{
                "dolorem": "velit",
                "et": "quam",
                "quas": "id",
            },
            LocationID: "consectetur",
            MaintenancePolicy: &shared.MaintenancePolicyInput{
                Description: "in",
                WeeklyMaintenanceWindow: []shared.WeeklyMaintenanceWindowInput{
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "WEDNESDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 1629836068589765182,
                            Minutes: 8485403568222127893,
                            Nanos: 2012812200617784303,
                            Seconds: 1973067278396642689,
                        },
                    },
                    shared.WeeklyMaintenanceWindowInput{
                        Day: "FRIDAY",
                        StartTime: &shared.TimeOfDay{
                            Hours: 4942470392494298544,
                            Minutes: 5117665322106138623,
                            Nanos: 4053305184930719950,
                            Seconds: 2694493903399201115,
                        },
                    },
                },
            },
            MaintenanceSchedule: &shared.MaintenanceScheduleInput{
                CanReschedule: false,
            },
            MaintenanceVersion: "repellat",
            MemorySizeGb: 2779198128664217717,
            Name: "est",
            PersistenceConfig: &shared.PersistenceConfigInput{
                PersistenceMode: "RDB",
                RdbSnapshotPeriod: "TWELVE_HOURS",
                RdbSnapshotStartTime: "nam",
            },
            ReadReplicasMode: "READ_REPLICAS_ENABLED",
            RedisConfigs: map[string]string{
                "minus": "molestiae",
                "tempora": "sed",
                "architecto": "nam",
            },
            RedisVersion: "ut",
            ReplicaCount: 7465651500649602327,
            ReservedIPRange: "commodi",
            SecondaryIPRange: "doloremque",
            SuspensionReasons: []shared.InstanceSuspensionReasonsEnum{
                "SUSPENSION_REASON_UNSPECIFIED",
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