# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllApiKeysResponse;
import org.openapis.openapi.models.operations.AllApiKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllApiKeysResponse res = sdk.apikeys.allApiKeys(new AllApiKeysSecurity("corrupti", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apikeys](docs/apikeys/README.md)

* [allApiKeys](docs/apikeys/README.md#allapikeys) - Get all api keys
* [apiKey](docs/apikeys/README.md#apikey) - Get an api key
* [apiKeyFromGroup](docs/apikeys/README.md#apikeyfromgroup) - Get an api key
* [apiKeyFromGroupQuotas](docs/apikeys/README.md#apikeyfromgroupquotas) - Get the quota state of an api key
* [apiKeyGroup](docs/apikeys/README.md#apikeygroup) - Get the group of an api key
* [apiKeyQuotas](docs/apikeys/README.md#apikeyquotas) - Get the quota state of an api key
* [apiKeys](docs/apikeys/README.md#apikeys) - Get all api keys for the group of a service
* [apiKeysFromGroup](docs/apikeys/README.md#apikeysfromgroup) - Get all api keys for the group of a service
* [createApiKey](docs/apikeys/README.md#createapikey) - Create a new api key for a service
* [createApiKeyFromGroup](docs/apikeys/README.md#createapikeyfromgroup) - Create a new api key for a group
* [deleteApiKey](docs/apikeys/README.md#deleteapikey) - Delete an api key
* [deleteApiKeyFromGroup](docs/apikeys/README.md#deleteapikeyfromgroup) - Delete an api key
* [patchApiKey](docs/apikeys/README.md#patchapikey) - Update an api key with a diff
* [patchApiKeyFromGroup](docs/apikeys/README.md#patchapikeyfromgroup) - Update an api key with a diff
* [resetApiKeyFromGroupQuotas](docs/apikeys/README.md#resetapikeyfromgroupquotas) - Reset the quota state of an api key
* [resetApiKeyQuotas](docs/apikeys/README.md#resetapikeyquotas) - Reset the quota state of an api key
* [updateApiKey](docs/apikeys/README.md#updateapikey) - Update an api key
* [updateApiKeyFromGroup](docs/apikeys/README.md#updateapikeyfromgroup) - Update an api key

### [authConfig](docs/authconfig/README.md)

* [createGlobalAuthModule](docs/authconfig/README.md#createglobalauthmodule) - Create one global auth. module config
* [deleteGlobalAuthModule](docs/authconfig/README.md#deleteglobalauthmodule) - Delete one global auth. module config
* [findAllGlobalAuthModules](docs/authconfig/README.md#findallglobalauthmodules) - Get all global auth. module configs
* [findGlobalAuthModuleById](docs/authconfig/README.md#findglobalauthmodulebyid) - Get one global auth. module configs
* [patchGlobalAuthModule](docs/authconfig/README.md#patchglobalauthmodule) - Update one global auth. module config
* [updateGlobalAuthModule](docs/authconfig/README.md#updateglobalauthmodule) - Update one global auth. module config

### [certificates](docs/certificates/README.md)

* [allCerts](docs/certificates/README.md#allcerts) - Get all certificates
* [createCert](docs/certificates/README.md#createcert) - Create one certificate
* [deleteCert](docs/certificates/README.md#deletecert) - Delete one certificate by id
* [oneCert](docs/certificates/README.md#onecert) - Get one certificate by id
* [patchCert](docs/certificates/README.md#patchcert) - Update one certificate by id
* [putCert](docs/certificates/README.md#putcert) - Update one certificate by id

### [configuration](docs/configuration/README.md)

* [globalConfig](docs/configuration/README.md#globalconfig) - Get the full configuration of Otoroshi
* [patchGlobalConfig](docs/configuration/README.md#patchglobalconfig) - Update the global configuration with a diff
* [putGlobalConfig](docs/configuration/README.md#putglobalconfig) - Update the global configuration

### [dataExporterConfigs](docs/dataexporterconfigs/README.md)

* [dataExporterTemplate](docs/dataexporterconfigs/README.md#dataexportertemplate) - Get all data exporter configs
* [createBulkDataExporterConfigs](docs/dataexporterconfigs/README.md#createbulkdataexporterconfigs) - Create a new data exporter configs
* [createDataExporterConfig](docs/dataexporterconfigs/README.md#createdataexporterconfig) - Create a new data exporter config
* [deleteDataExporterConfig](docs/dataexporterconfigs/README.md#deletedataexporterconfig) - Delete a data exporter config
* [deletebulkDataExporterConfig](docs/dataexporterconfigs/README.md#deletebulkdataexporterconfig) - Delete a data exporter config
* [findAllDataExporters](docs/dataexporterconfigs/README.md#findalldataexporters) - Get all data exporter configs
* [findDataExporterConfigById](docs/dataexporterconfigs/README.md#finddataexporterconfigbyid) - Get a data exporter config
* [patchBulkDataExporterConfig](docs/dataexporterconfigs/README.md#patchbulkdataexporterconfig) - Update a data exporter configs with a diff
* [patchDataExporterConfig](docs/dataexporterconfigs/README.md#patchdataexporterconfig) - Update a data exporter config with a diff
* [updateBulkDataExporterConfig](docs/dataexporterconfigs/README.md#updatebulkdataexporterconfig) - Update a data exporter configs
* [updateDataExporterConfig](docs/dataexporterconfigs/README.md#updatedataexporterconfig) - Update a data exporter config

### [environments](docs/environments/README.md)

* [allLines](docs/environments/README.md#alllines) - Get all environments
* [servicesForALine](docs/environments/README.md#servicesforaline) - Get all services for an environment

### [groups](docs/groups/README.md)

* [allServiceGroups](docs/groups/README.md#allservicegroups) - Get all service groups
* [createGroup](docs/groups/README.md#creategroup) - Create a new service group
* [deleteGroup](docs/groups/README.md#deletegroup) - Delete a service group
* [patchGroup](docs/groups/README.md#patchgroup) - Update a service group with a diff
* [serviceGroup](docs/groups/README.md#servicegroup) - Get a service group
* [updateGroup](docs/groups/README.md#updategroup) - Update a service group

### [health](docs/health/README.md)

* [health](docs/health/README.md#health) - Return current Otoroshi health

### [import_](docs/import/README.md)

* [fullExport](docs/import/README.md#fullexport) - Export the full state of Otoroshi
* [fullImport](docs/import/README.md#fullimport) - Import the full state of Otoroshi
* [fullImportFromFile](docs/import/README.md#fullimportfromfile) - Import the full state of Otoroshi as a file

### [jwtVerifiers](docs/jwtverifiers/README.md)

* [createGlobalJwtVerifier](docs/jwtverifiers/README.md#createglobaljwtverifier) - Create one global JWT verifiers
* [deleteGlobalJwtVerifier](docs/jwtverifiers/README.md#deleteglobaljwtverifier) - Delete one global JWT verifiers
* [findAllGlobalJwtVerifiers](docs/jwtverifiers/README.md#findallglobaljwtverifiers) - Get all global JWT verifiers
* [findGlobalJwtVerifiersById](docs/jwtverifiers/README.md#findglobaljwtverifiersbyid) - Get one global JWT verifiers
* [patchGlobalJwtVerifier](docs/jwtverifiers/README.md#patchglobaljwtverifier) - Update one global JWT verifiers
* [updateGlobalJwtVerifier](docs/jwtverifiers/README.md#updateglobaljwtverifier) - Update one global JWT verifiers

### [scripts](docs/scripts/README.md)

* [compileScript](docs/scripts/README.md#compilescript) - Compile a script
* [createScript](docs/scripts/README.md#createscript) - Create a new script
* [deleteScript](docs/scripts/README.md#deletescript) - Delete a script
* [findAllScripts](docs/scripts/README.md#findallscripts) - Get all scripts
* [findScriptById](docs/scripts/README.md#findscriptbyid) - Get a script
* [patchScript](docs/scripts/README.md#patchscript) - Update a script with a diff
* [updateScript](docs/scripts/README.md#updatescript) - Update a script

### [services](docs/services/README.md)

* [allServices](docs/services/README.md#allservices) - Get all services
* [createService](docs/services/README.md#createservice) - Create a new service descriptor
* [createServiceTemplate](docs/services/README.md#createservicetemplate) - Create a service descriptor error template
* [deleteService](docs/services/README.md#deleteservice) - Delete a service descriptor
* [deleteServiceTemplate](docs/services/README.md#deleteservicetemplate) - Delete a service descriptor error template
* [patchService](docs/services/README.md#patchservice) - Update a service descriptor with a diff
* [service](docs/services/README.md#service) - Get a service descriptor
* [serviceAddTarget](docs/services/README.md#serviceaddtarget) - Add a target to a service descriptor
* [serviceDeleteTarget](docs/services/README.md#servicedeletetarget) - Delete a service descriptor target
* [serviceGroupServices](docs/services/README.md#servicegroupservices) - Get all services descriptor for a group
* [serviceTargets](docs/services/README.md#servicetargets) - Get a service descriptor targets
* [serviceTemplate](docs/services/README.md#servicetemplate) - Get a service descriptor error template
* [updateService](docs/services/README.md#updateservice) - Update a service descriptor
* [updateServiceTargets](docs/services/README.md#updateservicetargets) - Update a service descriptor targets
* [updateServiceTemplate](docs/services/README.md#updateservicetemplate) - Update an error template to a service descriptor

### [snowmonkey](docs/snowmonkey/README.md)

* [getSnowMonkeyConfig](docs/snowmonkey/README.md#getsnowmonkeyconfig) - Get current Snow Monkey config
* [getSnowMonkeyOutages](docs/snowmonkey/README.md#getsnowmonkeyoutages) - Get all current Snow Monkey ourages
* [patchSnowMonkey](docs/snowmonkey/README.md#patchsnowmonkey) - Update current Snow Monkey config
* [resetSnowMonkey](docs/snowmonkey/README.md#resetsnowmonkey) - Reset Snow Monkey Outages for the day
* [startSnowMonkey](docs/snowmonkey/README.md#startsnowmonkey) - Start the Snow Monkey
* [stopSnowMonkey](docs/snowmonkey/README.md#stopsnowmonkey) - Stop the Snow Monkey
* [updateSnowMonkey](docs/snowmonkey/README.md#updatesnowmonkey) - Update current Snow Monkey config

### [stats](docs/stats/README.md)

* [globalLiveStats](docs/stats/README.md#globallivestats) - Get global otoroshi stats
* [serviceLiveStats](docs/stats/README.md#servicelivestats) - Get live feed of otoroshi stats

### [templates](docs/templates/README.md)

* [initiateApiKey](docs/templates/README.md#initiateapikey) - Get a template of an Otoroshi Api Key
* [initiateService](docs/templates/README.md#initiateservice) - Get a template of an Otoroshi service descriptor
* [initiateServiceGroup](docs/templates/README.md#initiateservicegroup) - Get a template of an Otoroshi service group

### [validationAuthorities](docs/validationauthorities/README.md)

* [createClientValidator](docs/validationauthorities/README.md#createclientvalidator) - Create one validation authorities
* [deleteClientValidator](docs/validationauthorities/README.md#deleteclientvalidator) - Delete one validation authorities by id
* [findAllClientValidators](docs/validationauthorities/README.md#findallclientvalidators) - Get all validation authoritiess
* [findClientValidatorById](docs/validationauthorities/README.md#findclientvalidatorbyid) - Get one validation authorities by id
* [patchClientValidator](docs/validationauthorities/README.md#patchclientvalidator) - Update one validation authorities by id
* [updateClientValidator](docs/validationauthorities/README.md#updateclientvalidator) - Update one validation authorities by id
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
