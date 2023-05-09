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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [RedisProjectsLocationsInstancesCreate](docs/projects/README.md#redisprojectslocationsinstancescreate) - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesExport](docs/projects/README.md#redisprojectslocationsinstancesexport) - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesFailover](docs/projects/README.md#redisprojectslocationsinstancesfailover) - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* [RedisProjectsLocationsInstancesGetAuthString](docs/projects/README.md#redisprojectslocationsinstancesgetauthstring) - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* [RedisProjectsLocationsInstancesImport](docs/projects/README.md#redisprojectslocationsinstancesimport) - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesList](docs/projects/README.md#redisprojectslocationsinstanceslist) - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* [RedisProjectsLocationsInstancesPatch](docs/projects/README.md#redisprojectslocationsinstancespatch) - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* [RedisProjectsLocationsInstancesRescheduleMaintenance](docs/projects/README.md#redisprojectslocationsinstancesreschedulemaintenance) - Reschedule maintenance for a given instance in a given project and location.
* [RedisProjectsLocationsInstancesUpgrade](docs/projects/README.md#redisprojectslocationsinstancesupgrade) - Upgrades Redis instance to the newer Redis version specified in the request.
* [RedisProjectsLocationsList](docs/projects/README.md#redisprojectslocationslist) - Lists information about the supported locations for this service.
* [RedisProjectsLocationsOperationsCancel](docs/projects/README.md#redisprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [RedisProjectsLocationsOperationsDelete](docs/projects/README.md#redisprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [RedisProjectsLocationsOperationsGet](docs/projects/README.md#redisprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [RedisProjectsLocationsOperationsList](docs/projects/README.md#redisprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
