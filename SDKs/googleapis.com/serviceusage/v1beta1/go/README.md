# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/serviceusage/v1beta1/go
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
    res, err := s.Operations.ServiceusageOperationsList(ctx, operations.ServiceusageOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        Name: sdk.String("Ben Mueller"),
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(297534),
        PageToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.ServiceusageOperationsListSecurity{
        Option1: &operations.ServiceusageOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Operations](docs/operations/README.md)

* [ServiceusageOperationsList](docs/operations/README.md#serviceusageoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### [Services](docs/services/README.md)

* [ServiceusageServicesBatchEnable](docs/services/README.md#serviceusageservicesbatchenable) - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
* [ServiceusageServicesConsumerQuotaMetricsImportAdminOverrides](docs/services/README.md#serviceusageservicesconsumerquotametricsimportadminoverrides) - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [ServiceusageServicesConsumerQuotaMetricsImportConsumerOverrides](docs/services/README.md#serviceusageservicesconsumerquotametricsimportconsumeroverrides) - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate](docs/services/README.md#serviceusageservicesconsumerquotametricslimitsadminoverridescreate) - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
* [ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList](docs/services/README.md#serviceusageservicesconsumerquotametricslimitsadminoverrideslist) - Lists all admin overrides on this limit.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate](docs/services/README.md#serviceusageservicesconsumerquotametricslimitsconsumeroverridescreate) - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete](docs/services/README.md#serviceusageservicesconsumerquotametricslimitsconsumeroverridesdelete) - Deletes a consumer override.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList](docs/services/README.md#serviceusageservicesconsumerquotametricslimitsconsumeroverrideslist) - Lists all consumer overrides on this limit.
* [ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch](docs/services/README.md#serviceusageservicesconsumerquotametricslimitsconsumeroverridespatch) - Updates a consumer override.
* [ServiceusageServicesConsumerQuotaMetricsLimitsGet](docs/services/README.md#serviceusageservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [ServiceusageServicesConsumerQuotaMetricsList](docs/services/README.md#serviceusageservicesconsumerquotametricslist) - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
* [ServiceusageServicesDisable](docs/services/README.md#serviceusageservicesdisable) - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
* [ServiceusageServicesEnable](docs/services/README.md#serviceusageservicesenable) - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
* [ServiceusageServicesGenerateServiceIdentity](docs/services/README.md#serviceusageservicesgenerateserviceidentity) - Generates service identity for service.
* [ServiceusageServicesList](docs/services/README.md#serviceusageserviceslist) - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
