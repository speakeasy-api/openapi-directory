# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_serverless_v1/1.43.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateAsset(ctx, operations.CreateAssetRequest{
        RequestBody: &operations.CreateAssetCreateAssetRequest{
            FriendlyName: "corrupti",
        },
        ServiceSid: "provident",
    }, operations.CreateAssetSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerlessV1ServiceAsset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAsset](docs/sdk/README.md#createasset) - Create a new Asset resource.
* [CreateBuild](docs/sdk/README.md#createbuild) - Create a new Build resource. At least one function version or asset version is required.
* [CreateDeployment](docs/sdk/README.md#createdeployment) - Create a new Deployment.
* [CreateEnvironment](docs/sdk/README.md#createenvironment) - Create a new environment.
* [CreateFunction](docs/sdk/README.md#createfunction) - Create a new Function resource.
* [CreateService](docs/sdk/README.md#createservice) - Create a new Service resource.
* [CreateVariable](docs/sdk/README.md#createvariable) - Create a new Variable.
* [DeleteAsset](docs/sdk/README.md#deleteasset) - Delete an Asset resource.
* [DeleteBuild](docs/sdk/README.md#deletebuild) - Delete a Build resource.
* [DeleteEnvironment](docs/sdk/README.md#deleteenvironment) - Delete a specific environment.
* [DeleteFunction](docs/sdk/README.md#deletefunction) - Delete a Function resource.
* [DeleteService](docs/sdk/README.md#deleteservice) - Delete a Service resource.
* [DeleteVariable](docs/sdk/README.md#deletevariable) - Delete a specific Variable.
* [FetchAsset](docs/sdk/README.md#fetchasset) - Retrieve a specific Asset resource.
* [FetchAssetVersion](docs/sdk/README.md#fetchassetversion) - Retrieve a specific Asset Version.
* [FetchBuild](docs/sdk/README.md#fetchbuild) - Retrieve a specific Build resource.
* [FetchBuildStatus](docs/sdk/README.md#fetchbuildstatus) - Retrieve a specific Build resource.
* [FetchDeployment](docs/sdk/README.md#fetchdeployment) - Retrieve a specific Deployment.
* [FetchEnvironment](docs/sdk/README.md#fetchenvironment) - Retrieve a specific environment.
* [FetchFunction](docs/sdk/README.md#fetchfunction) - Retrieve a specific Function resource.
* [FetchFunctionVersion](docs/sdk/README.md#fetchfunctionversion) - Retrieve a specific Function Version resource.
* [FetchFunctionVersionContent](docs/sdk/README.md#fetchfunctionversioncontent) - Retrieve a the content of a specific Function Version resource.
* [FetchLog](docs/sdk/README.md#fetchlog) - Retrieve a specific log.
* [FetchService](docs/sdk/README.md#fetchservice) - Retrieve a specific Service resource.
* [FetchVariable](docs/sdk/README.md#fetchvariable) - Retrieve a specific Variable.
* [ListAsset](docs/sdk/README.md#listasset) - Retrieve a list of all Assets.
* [ListAssetVersion](docs/sdk/README.md#listassetversion) - Retrieve a list of all Asset Versions.
* [ListBuild](docs/sdk/README.md#listbuild) - Retrieve a list of all Builds.
* [ListDeployment](docs/sdk/README.md#listdeployment) - Retrieve a list of all Deployments.
* [ListEnvironment](docs/sdk/README.md#listenvironment) - Retrieve a list of all environments.
* [ListFunction](docs/sdk/README.md#listfunction) - Retrieve a list of all Functions.
* [ListFunctionVersion](docs/sdk/README.md#listfunctionversion) - Retrieve a list of all Function Version resources.
* [ListLog](docs/sdk/README.md#listlog) - Retrieve a list of all logs.
* [ListService](docs/sdk/README.md#listservice) - Retrieve a list of all Services.
* [ListVariable](docs/sdk/README.md#listvariable) - Retrieve a list of all Variables.
* [UpdateAsset](docs/sdk/README.md#updateasset) - Update a specific Asset resource.
* [UpdateFunction](docs/sdk/README.md#updatefunction) - Update a specific Function resource.
* [UpdateService](docs/sdk/README.md#updateservice) - Update a specific Service resource.
* [UpdateVariable](docs/sdk/README.md#updatevariable) - Update a specific Variable.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
