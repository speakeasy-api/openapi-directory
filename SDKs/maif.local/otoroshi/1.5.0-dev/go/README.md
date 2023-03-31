# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/maif.local/otoroshi/1.5.0-dev/go
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

    ctx := context.Background()
    res, err := s.Apikeys.AllAPIKeys(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeys != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Apikeys

* `AllAPIKeys` - Get all api keys
* `APIKey` - Get an api key
* `APIKeyFromGroup` - Get an api key
* `APIKeyFromGroupQuotas` - Get the quota state of an api key
* `APIKeyGroup` - Get the group of an api key
* `APIKeyQuotas` - Get the quota state of an api key
* `APIKeys` - Get all api keys for the group of a service
* `APIKeysFromGroup` - Get all api keys for the group of a service
* `CreateAPIKey` - Create a new api key for a service
* `CreateAPIKeyFromGroup` - Create a new api key for a group
* `DeleteAPIKey` - Delete an api key
* `DeleteAPIKeyFromGroup` - Delete an api key
* `PatchAPIKey` - Update an api key with a diff
* `PatchAPIKeyFromGroup` - Update an api key with a diff
* `ResetAPIKeyFromGroupQuotas` - Reset the quota state of an api key
* `ResetAPIKeyQuotas` - Reset the quota state of an api key
* `UpdateAPIKey` - Update an api key
* `UpdateAPIKeyFromGroup` - Update an api key

### AuthConfig

* `CreateGlobalAuthModule` - Create one global auth. module config
* `DeleteGlobalAuthModule` - Delete one global auth. module config
* `FindAllGlobalAuthModules` - Get all global auth. module configs
* `FindGlobalAuthModuleByID` - Get one global auth. module configs
* `PatchGlobalAuthModule` - Update one global auth. module config
* `UpdateGlobalAuthModule` - Update one global auth. module config

### Certificates

* `AllCerts` - Get all certificates
* `CreateCert` - Create one certificate
* `DeleteCert` - Delete one certificate by id
* `OneCert` - Get one certificate by id
* `PatchCert` - Update one certificate by id
* `PutCert` - Update one certificate by id

### Configuration

* `GlobalConfig` - Get the full configuration of Otoroshi
* `PatchGlobalConfig` - Update the global configuration with a diff
* `PutGlobalConfig` - Update the global configuration

### DataExporterConfigs

* `DataExporterTemplate` - Get all data exporter configs
* `CreateBulkDataExporterConfigs` - Create a new data exporter configs
* `CreateDataExporterConfig` - Create a new data exporter config
* `DeleteDataExporterConfig` - Delete a data exporter config
* `DeletebulkDataExporterConfig` - Delete a data exporter config
* `FindAllDataExporters` - Get all data exporter configs
* `FindDataExporterConfigByID` - Get a data exporter config
* `PatchBulkDataExporterConfig` - Update a data exporter configs with a diff
* `PatchDataExporterConfig` - Update a data exporter config with a diff
* `UpdateBulkDataExporterConfig` - Update a data exporter configs
* `UpdateDataExporterConfig` - Update a data exporter config

### Environments

* `AllLines` - Get all environments
* `ServicesForALine` - Get all services for an environment

### Groups

* `AllServiceGroups` - Get all service groups
* `CreateGroup` - Create a new service group
* `DeleteGroup` - Delete a service group
* `PatchGroup` - Update a service group with a diff
* `ServiceGroup` - Get a service group
* `UpdateGroup` - Update a service group

### Health

* `Health` - Return current Otoroshi health

### Import

* `FullExport` - Export the full state of Otoroshi
* `FullImport` - Import the full state of Otoroshi
* `FullImportFromFile` - Import the full state of Otoroshi as a file

### JwtVerifiers

* `CreateGlobalJwtVerifier` - Create one global JWT verifiers
* `DeleteGlobalJwtVerifier` - Delete one global JWT verifiers
* `FindAllGlobalJwtVerifiers` - Get all global JWT verifiers
* `FindGlobalJwtVerifiersByID` - Get one global JWT verifiers
* `PatchGlobalJwtVerifier` - Update one global JWT verifiers
* `UpdateGlobalJwtVerifier` - Update one global JWT verifiers

### Scripts

* `CompileScript` - Compile a script
* `CreateScript` - Create a new script
* `DeleteScript` - Delete a script
* `FindAllScripts` - Get all scripts
* `FindScriptByID` - Get a script
* `PatchScript` - Update a script with a diff
* `UpdateScript` - Update a script

### Services

* `AllServices` - Get all services
* `CreateService` - Create a new service descriptor
* `CreateServiceTemplate` - Create a service descriptor error template
* `DeleteService` - Delete a service descriptor
* `DeleteServiceTemplate` - Delete a service descriptor error template
* `PatchService` - Update a service descriptor with a diff
* `Service` - Get a service descriptor
* `ServiceAddTarget` - Add a target to a service descriptor
* `ServiceDeleteTarget` - Delete a service descriptor target
* `ServiceGroupServices` - Get all services descriptor for a group
* `ServiceTargets` - Get a service descriptor targets
* `ServiceTemplate` - Get a service descriptor error template
* `UpdateService` - Update a service descriptor
* `UpdateServiceTargets` - Update a service descriptor targets
* `UpdateServiceTemplate` - Update an error template to a service descriptor

### Snowmonkey

* `GetSnowMonkeyConfig` - Get current Snow Monkey config
* `GetSnowMonkeyOutages` - Get all current Snow Monkey ourages
* `PatchSnowMonkey` - Update current Snow Monkey config
* `ResetSnowMonkey` - Reset Snow Monkey Outages for the day
* `StartSnowMonkey` - Start the Snow Monkey
* `StopSnowMonkey` - Stop the Snow Monkey
* `UpdateSnowMonkey` - Update current Snow Monkey config

### Stats

* `GlobalLiveStats` - Get global otoroshi stats
* `ServiceLiveStats` - Get live feed of otoroshi stats

### Templates

* `InitiateAPIKey` - Get a template of an Otoroshi Api Key
* `InitiateService` - Get a template of an Otoroshi service descriptor
* `InitiateServiceGroup` - Get a template of an Otoroshi service group

### ValidationAuthorities

* `CreateClientValidator` - Create one validation authorities
* `DeleteClientValidator` - Delete one validation authorities by id
* `FindAllClientValidators` - Get all validation authoritiess
* `FindClientValidatorByID` - Get one validation authorities by id
* `PatchClientValidator` - Update one validation authorities by id
* `UpdateClientValidator` - Update one validation authorities by id
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
