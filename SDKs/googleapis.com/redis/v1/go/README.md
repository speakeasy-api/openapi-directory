# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/redis/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `RedisProjectsLocationsInstancesCreate` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesExport` - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesFailover` - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* `RedisProjectsLocationsInstancesGetAuthString` - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* `RedisProjectsLocationsInstancesImport` - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesList` - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* `RedisProjectsLocationsInstancesPatch` - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `RedisProjectsLocationsInstancesRescheduleMaintenance` - Reschedule maintenance for a given instance in a given project and location.
* `RedisProjectsLocationsInstancesUpgrade` - Upgrades Redis instance to the newer Redis version specified in the request.
* `RedisProjectsLocationsList` - Lists information about the supported locations for this service.
* `RedisProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `RedisProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `RedisProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `RedisProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
