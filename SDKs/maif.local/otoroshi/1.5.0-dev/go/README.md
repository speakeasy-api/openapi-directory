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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apikeys.AllAPIKeys(ctx, operations.AllAPIKeysSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
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


### [Apikeys](docs/apikeys/README.md)

* [AllAPIKeys](docs/apikeys/README.md#allapikeys) - Get all api keys
* [APIKey](docs/apikeys/README.md#apikey) - Get an api key
* [APIKeyFromGroup](docs/apikeys/README.md#apikeyfromgroup) - Get an api key
* [APIKeyFromGroupQuotas](docs/apikeys/README.md#apikeyfromgroupquotas) - Get the quota state of an api key
* [APIKeyGroup](docs/apikeys/README.md#apikeygroup) - Get the group of an api key
* [APIKeyQuotas](docs/apikeys/README.md#apikeyquotas) - Get the quota state of an api key
* [APIKeys](docs/apikeys/README.md#apikeys) - Get all api keys for the group of a service
* [APIKeysFromGroup](docs/apikeys/README.md#apikeysfromgroup) - Get all api keys for the group of a service
* [CreateAPIKey](docs/apikeys/README.md#createapikey) - Create a new api key for a service
* [CreateAPIKeyFromGroup](docs/apikeys/README.md#createapikeyfromgroup) - Create a new api key for a group
* [DeleteAPIKey](docs/apikeys/README.md#deleteapikey) - Delete an api key
* [DeleteAPIKeyFromGroup](docs/apikeys/README.md#deleteapikeyfromgroup) - Delete an api key
* [PatchAPIKey](docs/apikeys/README.md#patchapikey) - Update an api key with a diff
* [PatchAPIKeyFromGroup](docs/apikeys/README.md#patchapikeyfromgroup) - Update an api key with a diff
* [ResetAPIKeyFromGroupQuotas](docs/apikeys/README.md#resetapikeyfromgroupquotas) - Reset the quota state of an api key
* [ResetAPIKeyQuotas](docs/apikeys/README.md#resetapikeyquotas) - Reset the quota state of an api key
* [UpdateAPIKey](docs/apikeys/README.md#updateapikey) - Update an api key
* [UpdateAPIKeyFromGroup](docs/apikeys/README.md#updateapikeyfromgroup) - Update an api key

### [AuthConfig](docs/authconfig/README.md)

* [CreateGlobalAuthModule](docs/authconfig/README.md#createglobalauthmodule) - Create one global auth. module config
* [DeleteGlobalAuthModule](docs/authconfig/README.md#deleteglobalauthmodule) - Delete one global auth. module config
* [FindAllGlobalAuthModules](docs/authconfig/README.md#findallglobalauthmodules) - Get all global auth. module configs
* [FindGlobalAuthModuleByID](docs/authconfig/README.md#findglobalauthmodulebyid) - Get one global auth. module configs
* [PatchGlobalAuthModule](docs/authconfig/README.md#patchglobalauthmodule) - Update one global auth. module config
* [UpdateGlobalAuthModule](docs/authconfig/README.md#updateglobalauthmodule) - Update one global auth. module config

### [Certificates](docs/certificates/README.md)

* [AllCerts](docs/certificates/README.md#allcerts) - Get all certificates
* [CreateCert](docs/certificates/README.md#createcert) - Create one certificate
* [DeleteCert](docs/certificates/README.md#deletecert) - Delete one certificate by id
* [OneCert](docs/certificates/README.md#onecert) - Get one certificate by id
* [PatchCert](docs/certificates/README.md#patchcert) - Update one certificate by id
* [PutCert](docs/certificates/README.md#putcert) - Update one certificate by id

### [Configuration](docs/configuration/README.md)

* [GlobalConfig](docs/configuration/README.md#globalconfig) - Get the full configuration of Otoroshi
* [PatchGlobalConfig](docs/configuration/README.md#patchglobalconfig) - Update the global configuration with a diff
* [PutGlobalConfig](docs/configuration/README.md#putglobalconfig) - Update the global configuration

### [DataExporterConfigs](docs/dataexporterconfigs/README.md)

* [DataExporterTemplate](docs/dataexporterconfigs/README.md#dataexportertemplate) - Get all data exporter configs
* [CreateBulkDataExporterConfigs](docs/dataexporterconfigs/README.md#createbulkdataexporterconfigs) - Create a new data exporter configs
* [CreateDataExporterConfig](docs/dataexporterconfigs/README.md#createdataexporterconfig) - Create a new data exporter config
* [DeleteDataExporterConfig](docs/dataexporterconfigs/README.md#deletedataexporterconfig) - Delete a data exporter config
* [DeletebulkDataExporterConfig](docs/dataexporterconfigs/README.md#deletebulkdataexporterconfig) - Delete a data exporter config
* [FindAllDataExporters](docs/dataexporterconfigs/README.md#findalldataexporters) - Get all data exporter configs
* [FindDataExporterConfigByID](docs/dataexporterconfigs/README.md#finddataexporterconfigbyid) - Get a data exporter config
* [PatchBulkDataExporterConfig](docs/dataexporterconfigs/README.md#patchbulkdataexporterconfig) - Update a data exporter configs with a diff
* [PatchDataExporterConfig](docs/dataexporterconfigs/README.md#patchdataexporterconfig) - Update a data exporter config with a diff
* [UpdateBulkDataExporterConfig](docs/dataexporterconfigs/README.md#updatebulkdataexporterconfig) - Update a data exporter configs
* [UpdateDataExporterConfig](docs/dataexporterconfigs/README.md#updatedataexporterconfig) - Update a data exporter config

### [Environments](docs/environments/README.md)

* [AllLines](docs/environments/README.md#alllines) - Get all environments
* [ServicesForALine](docs/environments/README.md#servicesforaline) - Get all services for an environment

### [Groups](docs/groups/README.md)

* [AllServiceGroups](docs/groups/README.md#allservicegroups) - Get all service groups
* [CreateGroup](docs/groups/README.md#creategroup) - Create a new service group
* [DeleteGroup](docs/groups/README.md#deletegroup) - Delete a service group
* [PatchGroup](docs/groups/README.md#patchgroup) - Update a service group with a diff
* [ServiceGroup](docs/groups/README.md#servicegroup) - Get a service group
* [UpdateGroup](docs/groups/README.md#updategroup) - Update a service group

### [Health](docs/health/README.md)

* [Health](docs/health/README.md#health) - Return current Otoroshi health

### [Import](docs/import/README.md)

* [FullExport](docs/import/README.md#fullexport) - Export the full state of Otoroshi
* [FullImport](docs/import/README.md#fullimport) - Import the full state of Otoroshi
* [FullImportFromFile](docs/import/README.md#fullimportfromfile) - Import the full state of Otoroshi as a file

### [JwtVerifiers](docs/jwtverifiers/README.md)

* [CreateGlobalJwtVerifier](docs/jwtverifiers/README.md#createglobaljwtverifier) - Create one global JWT verifiers
* [DeleteGlobalJwtVerifier](docs/jwtverifiers/README.md#deleteglobaljwtverifier) - Delete one global JWT verifiers
* [FindAllGlobalJwtVerifiers](docs/jwtverifiers/README.md#findallglobaljwtverifiers) - Get all global JWT verifiers
* [FindGlobalJwtVerifiersByID](docs/jwtverifiers/README.md#findglobaljwtverifiersbyid) - Get one global JWT verifiers
* [PatchGlobalJwtVerifier](docs/jwtverifiers/README.md#patchglobaljwtverifier) - Update one global JWT verifiers
* [UpdateGlobalJwtVerifier](docs/jwtverifiers/README.md#updateglobaljwtverifier) - Update one global JWT verifiers

### [Scripts](docs/scripts/README.md)

* [CompileScript](docs/scripts/README.md#compilescript) - Compile a script
* [CreateScript](docs/scripts/README.md#createscript) - Create a new script
* [DeleteScript](docs/scripts/README.md#deletescript) - Delete a script
* [FindAllScripts](docs/scripts/README.md#findallscripts) - Get all scripts
* [FindScriptByID](docs/scripts/README.md#findscriptbyid) - Get a script
* [PatchScript](docs/scripts/README.md#patchscript) - Update a script with a diff
* [UpdateScript](docs/scripts/README.md#updatescript) - Update a script

### [Services](docs/services/README.md)

* [AllServices](docs/services/README.md#allservices) - Get all services
* [CreateService](docs/services/README.md#createservice) - Create a new service descriptor
* [CreateServiceTemplate](docs/services/README.md#createservicetemplate) - Create a service descriptor error template
* [DeleteService](docs/services/README.md#deleteservice) - Delete a service descriptor
* [DeleteServiceTemplate](docs/services/README.md#deleteservicetemplate) - Delete a service descriptor error template
* [PatchService](docs/services/README.md#patchservice) - Update a service descriptor with a diff
* [Service](docs/services/README.md#service) - Get a service descriptor
* [ServiceAddTarget](docs/services/README.md#serviceaddtarget) - Add a target to a service descriptor
* [ServiceDeleteTarget](docs/services/README.md#servicedeletetarget) - Delete a service descriptor target
* [ServiceGroupServices](docs/services/README.md#servicegroupservices) - Get all services descriptor for a group
* [ServiceTargets](docs/services/README.md#servicetargets) - Get a service descriptor targets
* [ServiceTemplate](docs/services/README.md#servicetemplate) - Get a service descriptor error template
* [UpdateService](docs/services/README.md#updateservice) - Update a service descriptor
* [UpdateServiceTargets](docs/services/README.md#updateservicetargets) - Update a service descriptor targets
* [UpdateServiceTemplate](docs/services/README.md#updateservicetemplate) - Update an error template to a service descriptor

### [Snowmonkey](docs/snowmonkey/README.md)

* [GetSnowMonkeyConfig](docs/snowmonkey/README.md#getsnowmonkeyconfig) - Get current Snow Monkey config
* [GetSnowMonkeyOutages](docs/snowmonkey/README.md#getsnowmonkeyoutages) - Get all current Snow Monkey ourages
* [PatchSnowMonkey](docs/snowmonkey/README.md#patchsnowmonkey) - Update current Snow Monkey config
* [ResetSnowMonkey](docs/snowmonkey/README.md#resetsnowmonkey) - Reset Snow Monkey Outages for the day
* [StartSnowMonkey](docs/snowmonkey/README.md#startsnowmonkey) - Start the Snow Monkey
* [StopSnowMonkey](docs/snowmonkey/README.md#stopsnowmonkey) - Stop the Snow Monkey
* [UpdateSnowMonkey](docs/snowmonkey/README.md#updatesnowmonkey) - Update current Snow Monkey config

### [Stats](docs/stats/README.md)

* [GlobalLiveStats](docs/stats/README.md#globallivestats) - Get global otoroshi stats
* [ServiceLiveStats](docs/stats/README.md#servicelivestats) - Get live feed of otoroshi stats

### [Templates](docs/templates/README.md)

* [InitiateAPIKey](docs/templates/README.md#initiateapikey) - Get a template of an Otoroshi Api Key
* [InitiateService](docs/templates/README.md#initiateservice) - Get a template of an Otoroshi service descriptor
* [InitiateServiceGroup](docs/templates/README.md#initiateservicegroup) - Get a template of an Otoroshi service group

### [ValidationAuthorities](docs/validationauthorities/README.md)

* [CreateClientValidator](docs/validationauthorities/README.md#createclientvalidator) - Create one validation authorities
* [DeleteClientValidator](docs/validationauthorities/README.md#deleteclientvalidator) - Delete one validation authorities by id
* [FindAllClientValidators](docs/validationauthorities/README.md#findallclientvalidators) - Get all validation authoritiess
* [FindClientValidatorByID](docs/validationauthorities/README.md#findclientvalidatorbyid) - Get one validation authorities by id
* [PatchClientValidator](docs/validationauthorities/README.md#patchclientvalidator) - Update one validation authorities by id
* [UpdateClientValidator](docs/validationauthorities/README.md#updateclientvalidator) - Update one validation authorities by id
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
