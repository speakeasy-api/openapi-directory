# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicemanagement/v1/go
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
    res, err := s.Operations.ServicemanagementOperationsGet(ctx, operations.ServicemanagementOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Name: "Dallas Kassulke",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.ServicemanagementOperationsGetSecurity{
        Option1: &operations.ServicemanagementOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
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


### [Operations](docs/operations/README.md)

* [ServicemanagementOperationsGet](docs/operations/README.md#servicemanagementoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [ServicemanagementOperationsList](docs/operations/README.md#servicemanagementoperationslist) - Lists service operations that match the specified filter in the request.

### [Services](docs/services/README.md)

* [ServicemanagementServicesConfigsCreate](docs/services/README.md#servicemanagementservicesconfigscreate) - Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
* [ServicemanagementServicesConfigsGet](docs/services/README.md#servicemanagementservicesconfigsget) - Gets a service configuration (version) for a managed service.
* [ServicemanagementServicesConfigsList](docs/services/README.md#servicemanagementservicesconfigslist) - Lists the history of the service configuration for a managed service, from the newest to the oldest.
* [ServicemanagementServicesConfigsSubmit](docs/services/README.md#servicemanagementservicesconfigssubmit) - Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
* [ServicemanagementServicesConsumersGetIamPolicy](docs/services/README.md#servicemanagementservicesconsumersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ServicemanagementServicesConsumersSetIamPolicy](docs/services/README.md#servicemanagementservicesconsumerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ServicemanagementServicesConsumersTestIamPermissions](docs/services/README.md#servicemanagementservicesconsumerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [ServicemanagementServicesCreate](docs/services/README.md#servicemanagementservicescreate) - Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
* [ServicemanagementServicesDelete](docs/services/README.md#servicemanagementservicesdelete) - Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
* [ServicemanagementServicesGenerateConfigReport](docs/services/README.md#servicemanagementservicesgenerateconfigreport) - Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
* [ServicemanagementServicesGet](docs/services/README.md#servicemanagementservicesget) - Gets a managed service. Authentication is required unless the service is public.
* [ServicemanagementServicesGetConfig](docs/services/README.md#servicemanagementservicesgetconfig) - Gets a service configuration (version) for a managed service.
* [ServicemanagementServicesList](docs/services/README.md#servicemanagementserviceslist) - Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
* [ServicemanagementServicesRolloutsCreate](docs/services/README.md#servicemanagementservicesrolloutscreate) - Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
* [ServicemanagementServicesRolloutsGet](docs/services/README.md#servicemanagementservicesrolloutsget) - Gets a service configuration rollout.
* [ServicemanagementServicesRolloutsList](docs/services/README.md#servicemanagementservicesrolloutslist) - Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
* [ServicemanagementServicesUndelete](docs/services/README.md#servicemanagementservicesundelete) - Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
