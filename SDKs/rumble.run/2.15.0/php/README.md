# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CredentialOptions;
use \OpenAPI\OpenAPI\Models\Shared\CredentialOptionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CredentialOptions();
    $request->acl = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->cidrs = '10.0.0.17/32, 192.168.1.0/24';
    $request->global = false;
    $request->name = 'credentials_name';
    $request->secret = new SNMPv3CredentialFields();
    $request->secret->authPassphrase = 'authpass';
    $request->secret->authProtocol = 'sha';
    $request->secret->context = 'vlan-32';
    $request->secret->privacyPassphrase = 'privpass';
    $request->secret->privacyProtocol = 'aes';
    $request->secret->username = 'user';
    $request->type = CredentialOptionsTypeEnum::MIRADORE_API_KEY_V1;

    $requestSecurity = new CreateAccountCredentialSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->account->createAccountCredential($request, $requestSecurity);

    if ($response->credential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [createAccountCredential](docs/account/README.md#createaccountcredential) - Create a new credential
* [createAccountGroup](docs/account/README.md#createaccountgroup) - Create a new group
* [createAccountGroupMapping](docs/account/README.md#createaccountgroupmapping) - Create a new SSO group mapping
* [createAccountKey](docs/account/README.md#createaccountkey) - Create a new key
* [createAccountOrganization](docs/account/README.md#createaccountorganization) - Create a new organization
* [createAccountScanTemplate](docs/account/README.md#createaccountscantemplate) - Create a new scan template
* [createAccountUser](docs/account/README.md#createaccountuser) - Create a new user account
* [createAccountUserInvite](docs/account/README.md#createaccountuserinvite) - Create a new user account and send an email invite
* [deleteAccountOrganizationExportToken](docs/account/README.md#deleteaccountorganizationexporttoken) - Removes the export token from the specified organization
* [exportEventsJSON](docs/account/README.md#exporteventsjson) - System event log as JSON
* [exportEventsJSONL](docs/account/README.md#exporteventsjsonl) - System event log as JSON line-delimited
* [getAccountAgents](docs/account/README.md#getaccountagents) - Get all agents across all organizations
* [getAccountCredential](docs/account/README.md#getaccountcredential) - Get credential details
* [getAccountCredentials](docs/account/README.md#getaccountcredentials) - Get all account credentials
* [getAccountGroup](docs/account/README.md#getaccountgroup) - Get group details
* [getAccountGroupMapping](docs/account/README.md#getaccountgroupmapping) - Get SSO group mapping details
* [getAccountGroupMappings](docs/account/README.md#getaccountgroupmappings) - Get all SSO group mappings
* [getAccountGroups](docs/account/README.md#getaccountgroups) - Get all groups
* [getAccountKey](docs/account/README.md#getaccountkey) - Get key details
* [getAccountKeys](docs/account/README.md#getaccountkeys) - Get all active API keys
* [getAccountLicense](docs/account/README.md#getaccountlicense) - Get license details
* [getAccountOrganization](docs/account/README.md#getaccountorganization) - Get organization details
* [getAccountOrganizations](docs/account/README.md#getaccountorganizations) - Get all organization details
* [getAccountScanTemplate](docs/account/README.md#getaccountscantemplate) - Get scan template details
* [getAccountScanTemplates](docs/account/README.md#getaccountscantemplates) - Get all scan templates across all organizations (up to 1000)
* [getAccountSites](docs/account/README.md#getaccountsites) - Get all sites details across all organizations
* [getAccountTasks](docs/account/README.md#getaccounttasks) - Get all task details across all organizations (up to 1000)
* [getAccountUser](docs/account/README.md#getaccountuser) - Get user details
* [getAccountUsers](docs/account/README.md#getaccountusers) - Get all users
* [removeAccountCredential](docs/account/README.md#removeaccountcredential) - Remove this credential
* [removeAccountGroup](docs/account/README.md#removeaccountgroup) - Remove this group
* [removeAccountGroupMapping](docs/account/README.md#removeaccountgroupmapping) - Remove this SSO group mapping
* [removeAccountKey](docs/account/README.md#removeaccountkey) - Remove this key
* [removeAccountOrganization](docs/account/README.md#removeaccountorganization) - Remove this organization
* [removeAccountScanTemplate](docs/account/README.md#removeaccountscantemplate) - Remove scan template
* [removeAccountUser](docs/account/README.md#removeaccountuser) - Remove this user
* [resetAccountUserLockout](docs/account/README.md#resetaccountuserlockout) - Resets the user's lockout status
* [resetAccountUserMFA](docs/account/README.md#resetaccountusermfa) - Resets the user's MFA tokens
* [resetAccountUserPassword](docs/account/README.md#resetaccountuserpassword) - Sends the user a password reset email
* [rotateAccountKey](docs/account/README.md#rotateaccountkey) - Rotates the key secret
* [rotateAccountOrganizationExportToken](docs/account/README.md#rotateaccountorganizationexporttoken) - Rotates the organization export token and returns the updated organization
* [updateAccountGroup](docs/account/README.md#updateaccountgroup) - Update an existing group
* [updateAccountGroupMapping](docs/account/README.md#updateaccountgroupmapping) - Update an existing SSO group mapping
* [updateAccountOrganization](docs/account/README.md#updateaccountorganization) - Update organization details
* [updateAccountScanTemplate](docs/account/README.md#updateaccountscantemplate) - Update scan template
* [updateAccountUser](docs/account/README.md#updateaccountuser) - Update a user's details

### [ciscoSNTC](docs/ciscosntc/README.md)

* [exportAssetsCiscoCSV](docs/ciscosntc/README.md#exportassetsciscocsv) - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

### [export](docs/export/README.md)

* [exportAssetTopHWCSV](docs/export/README.md#exportassettophwcsv) - Top asset hardware products as CSV
* [exportAssetTopOSCSV](docs/export/README.md#exportassettoposcsv) - Top asset operating systems as CSV
* [exportAssetTopTagsCSV](docs/export/README.md#exportassettoptagscsv) - Top asset tags as CSV
* [exportAssetTopTypesCSV](docs/export/README.md#exportassettoptypescsv) - Top asset types as CSV
* [exportAssetsCSV](docs/export/README.md#exportassetscsv) - Asset inventory as CSV
* [exportAssetsJSON](docs/export/README.md#exportassetsjson) - Exports the asset inventory
* [exportAssetsJSONL](docs/export/README.md#exportassetsjsonl) - Asset inventory as JSON line-delimited
* [exportAssetsNmapXML](docs/export/README.md#exportassetsnmapxml) - Asset inventory as Nmap-style XML
* [exportServicesCSV](docs/export/README.md#exportservicescsv) - Service inventory as CSV
* [exportServicesJSON](docs/export/README.md#exportservicesjson) - Service inventory as JSON
* [exportServicesJSONL](docs/export/README.md#exportservicesjsonl) - Service inventory as JSON line-delimited
* [exportServicesTopProductsCSV](docs/export/README.md#exportservicestopproductscsv) - Top service products as CSV
* [exportServicesTopProtocolsCSV](docs/export/README.md#exportservicestopprotocolscsv) - Top service protocols as CSV
* [exportServicesTopTCPCSV](docs/export/README.md#exportservicestoptcpcsv) - Top TCP services as CSV
* [exportServicesTopUDPCSV](docs/export/README.md#exportservicestopudpcsv) - Top UDP services as CSV
* [exportSitesCSV](docs/export/README.md#exportsitescsv) - Site list as CSV
* [exportSitesJSON](docs/export/README.md#exportsitesjson) - Export all sites
* [exportSitesJSONL](docs/export/README.md#exportsitesjsonl) - Site list as JSON line-delimited
* [exportSubnetUtilizationStatsCSV](docs/export/README.md#exportsubnetutilizationstatscsv) - Subnet utilization statistics as as CSV
* [exportWirelessCSV](docs/export/README.md#exportwirelesscsv) - Wireless inventory as CSV
* [exportWirelessJSON](docs/export/README.md#exportwirelessjson) - Wireless inventory as JSON
* [exportWirelessJSONL](docs/export/README.md#exportwirelessjsonl) - Wireless inventory as JSON line-delimited

### [organization](docs/organization/README.md)

* [clearBulkAssetTags](docs/organization/README.md#clearbulkassettags) - Clear all tags across multiple assets based on a search query
* [createScan](docs/organization/README.md#createscan) - Create a scan task for a given site
* [createSite](docs/organization/README.md#createsite) - Create a new site
* [getAgent](docs/organization/README.md#getagent) - Get details for a single agent
* [getAgents](docs/organization/README.md#getagents) - Get all agents
* [getAsset](docs/organization/README.md#getasset) - Get asset details
* [getAssets](docs/organization/README.md#getassets) - Get all assets
* [getKey](docs/organization/README.md#getkey) - Get API key details
* [getOrganization](docs/organization/README.md#getorganization) - Get organization details
* [getService](docs/organization/README.md#getservice) - Get service details
* [getServices](docs/organization/README.md#getservices) - Get all services
* [getSite](docs/organization/README.md#getsite) - Get site details
* [getSites](docs/organization/README.md#getsites) - Get all sites
* [getTask](docs/organization/README.md#gettask) - Get task details
* [getTaskChangeReport](docs/organization/README.md#gettaskchangereport) - Returns a temporary task change report data url
* [getTaskLog](docs/organization/README.md#gettasklog) - Returns a temporary task log data url
* [getTaskScanData](docs/organization/README.md#gettaskscandata) - Returns a temporary task scan data url
* [getTasks](docs/organization/README.md#gettasks) - Get all tasks (last 1000)
* [getWirelessLAN](docs/organization/README.md#getwirelesslan) - Get wireless LAN details
* [getWirelessLANs](docs/organization/README.md#getwirelesslans) - Get all wireless LANs
* [hideTask](docs/organization/README.md#hidetask) - Signal that a completed task should be hidden
* [importNessusScanData](docs/organization/README.md#importnessusscandata) - Import a Nessus scan data file into a site
* [importScanData](docs/organization/README.md#importscandata) - Import a scan data file into a site
* [removeAgent](docs/organization/README.md#removeagent) - Remove and uninstall an agent
* [removeAsset](docs/organization/README.md#removeasset) - Remove an asset
* [removeKey](docs/organization/README.md#removekey) - Remove the current API key
* [removeService](docs/organization/README.md#removeservice) - Remove a service
* [removeSite](docs/organization/README.md#removesite) - Remove a site and associated assets
* [removeWirelessLAN](docs/organization/README.md#removewirelesslan) - Remove a wireless LAN
* [rotateKey](docs/organization/README.md#rotatekey) - Rotate the API key secret and return the updated key
* [stopTask](docs/organization/README.md#stoptask) - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* [updateAgentSite](docs/organization/README.md#updateagentsite) - Update the site associated with agent
* [updateAssetComments](docs/organization/README.md#updateassetcomments) - Update asset comments
* [updateAssetTags](docs/organization/README.md#updateassettags) - Update asset tags
* [updateBulkAssetTags](docs/organization/README.md#updatebulkassettags) - Update tags across multiple assets based on a search query
* [updateOrganization](docs/organization/README.md#updateorganization) - Update organization details
* [updateSite](docs/organization/README.md#updatesite) - Update a site definition
* [updateTask](docs/organization/README.md#updatetask) - Update task parameters
* [upgradeAgent](docs/organization/README.md#upgradeagent) - Force an agent to update and restart

### [public](docs/public/README.md)

* [getLatestAgentVersion](docs/public/README.md#getlatestagentversion) - Returns latest agent version
* [getLatestPlatformVersion](docs/public/README.md#getlatestplatformversion) - Returns latest platform version
* [getLatestScannerVersion](docs/public/README.md#getlatestscannerversion) - Returns latest scanner version

### [serviceNow](docs/servicenow/README.md)

* [snowExportAssetsCSV](docs/servicenow/README.md#snowexportassetscsv) - Export an asset inventory as CSV for ServiceNow integration
* [snowExportAssetsJSON](docs/servicenow/README.md#snowexportassetsjson) - Exports the asset inventory as JSON
* [snowExportServicesCSV](docs/servicenow/README.md#snowexportservicescsv) - Export a service inventory as CSV for ServiceNow integration

### [splunk](docs/splunk/README.md)

* [splunkAssetSyncCreatedJSON](docs/splunk/README.md#splunkassetsynccreatedjson) - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* [splunkAssetSyncUpdatedJSON](docs/splunk/README.md#splunkassetsyncupdatedjson) - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
