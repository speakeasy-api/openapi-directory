# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/rumble.run/2.15.0/go
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
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateAccountCredential(ctx, shared.CredentialOptions{
        ACL: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Cidrs: sdk.String("10.0.0.17/32, 192.168.1.0/24"),
        Global: sdk.Bool(false),
        Name: sdk.String("credentials_name"),
        Secret: &shared.CredentialFields{},
        Type: shared.CredentialOptionsTypeEnumMiradoreAPIKeyV1.ToPointer(),
    }, operations.CreateAccountCredentialSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Credential != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [CreateAccountCredential](docs/account/README.md#createaccountcredential) - Create a new credential
* [CreateAccountGroup](docs/account/README.md#createaccountgroup) - Create a new group
* [CreateAccountGroupMapping](docs/account/README.md#createaccountgroupmapping) - Create a new SSO group mapping
* [CreateAccountKey](docs/account/README.md#createaccountkey) - Create a new key
* [CreateAccountOrganization](docs/account/README.md#createaccountorganization) - Create a new organization
* [CreateAccountScanTemplate](docs/account/README.md#createaccountscantemplate) - Create a new scan template
* [CreateAccountUser](docs/account/README.md#createaccountuser) - Create a new user account
* [CreateAccountUserInvite](docs/account/README.md#createaccountuserinvite) - Create a new user account and send an email invite
* [DeleteAccountOrganizationExportToken](docs/account/README.md#deleteaccountorganizationexporttoken) - Removes the export token from the specified organization
* [ExportEventsJSON](docs/account/README.md#exporteventsjson) - System event log as JSON
* [ExportEventsJSONL](docs/account/README.md#exporteventsjsonl) - System event log as JSON line-delimited
* [GetAccountAgents](docs/account/README.md#getaccountagents) - Get all agents across all organizations
* [GetAccountCredential](docs/account/README.md#getaccountcredential) - Get credential details
* [GetAccountCredentials](docs/account/README.md#getaccountcredentials) - Get all account credentials
* [GetAccountGroup](docs/account/README.md#getaccountgroup) - Get group details
* [GetAccountGroupMapping](docs/account/README.md#getaccountgroupmapping) - Get SSO group mapping details
* [GetAccountGroupMappings](docs/account/README.md#getaccountgroupmappings) - Get all SSO group mappings
* [GetAccountGroups](docs/account/README.md#getaccountgroups) - Get all groups
* [GetAccountKey](docs/account/README.md#getaccountkey) - Get key details
* [GetAccountKeys](docs/account/README.md#getaccountkeys) - Get all active API keys
* [GetAccountLicense](docs/account/README.md#getaccountlicense) - Get license details
* [GetAccountOrganization](docs/account/README.md#getaccountorganization) - Get organization details
* [GetAccountOrganizations](docs/account/README.md#getaccountorganizations) - Get all organization details
* [GetAccountScanTemplate](docs/account/README.md#getaccountscantemplate) - Get scan template details
* [GetAccountScanTemplates](docs/account/README.md#getaccountscantemplates) - Get all scan templates across all organizations (up to 1000)
* [GetAccountSites](docs/account/README.md#getaccountsites) - Get all sites details across all organizations
* [GetAccountTasks](docs/account/README.md#getaccounttasks) - Get all task details across all organizations (up to 1000)
* [GetAccountUser](docs/account/README.md#getaccountuser) - Get user details
* [GetAccountUsers](docs/account/README.md#getaccountusers) - Get all users
* [RemoveAccountCredential](docs/account/README.md#removeaccountcredential) - Remove this credential
* [RemoveAccountGroup](docs/account/README.md#removeaccountgroup) - Remove this group
* [RemoveAccountGroupMapping](docs/account/README.md#removeaccountgroupmapping) - Remove this SSO group mapping
* [RemoveAccountKey](docs/account/README.md#removeaccountkey) - Remove this key
* [RemoveAccountOrganization](docs/account/README.md#removeaccountorganization) - Remove this organization
* [RemoveAccountScanTemplate](docs/account/README.md#removeaccountscantemplate) - Remove scan template
* [RemoveAccountUser](docs/account/README.md#removeaccountuser) - Remove this user
* [ResetAccountUserLockout](docs/account/README.md#resetaccountuserlockout) - Resets the user's lockout status
* [ResetAccountUserMFA](docs/account/README.md#resetaccountusermfa) - Resets the user's MFA tokens
* [ResetAccountUserPassword](docs/account/README.md#resetaccountuserpassword) - Sends the user a password reset email
* [RotateAccountKey](docs/account/README.md#rotateaccountkey) - Rotates the key secret
* [RotateAccountOrganizationExportToken](docs/account/README.md#rotateaccountorganizationexporttoken) - Rotates the organization export token and returns the updated organization
* [UpdateAccountGroup](docs/account/README.md#updateaccountgroup) - Update an existing group
* [UpdateAccountGroupMapping](docs/account/README.md#updateaccountgroupmapping) - Update an existing SSO group mapping
* [UpdateAccountOrganization](docs/account/README.md#updateaccountorganization) - Update organization details
* [UpdateAccountScanTemplate](docs/account/README.md#updateaccountscantemplate) - Update scan template
* [UpdateAccountUser](docs/account/README.md#updateaccountuser) - Update a user's details

### [CiscoSNTC](docs/ciscosntc/README.md)

* [ExportAssetsCiscoCSV](docs/ciscosntc/README.md#exportassetsciscocsv) - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

### [Export](docs/export/README.md)

* [ExportAssetTopHWCSV](docs/export/README.md#exportassettophwcsv) - Top asset hardware products as CSV
* [ExportAssetTopOSCSV](docs/export/README.md#exportassettoposcsv) - Top asset operating systems as CSV
* [ExportAssetTopTagsCSV](docs/export/README.md#exportassettoptagscsv) - Top asset tags as CSV
* [ExportAssetTopTypesCSV](docs/export/README.md#exportassettoptypescsv) - Top asset types as CSV
* [ExportAssetsCSV](docs/export/README.md#exportassetscsv) - Asset inventory as CSV
* [ExportAssetsJSON](docs/export/README.md#exportassetsjson) - Exports the asset inventory
* [ExportAssetsJSONL](docs/export/README.md#exportassetsjsonl) - Asset inventory as JSON line-delimited
* [ExportAssetsNmapXML](docs/export/README.md#exportassetsnmapxml) - Asset inventory as Nmap-style XML
* [ExportServicesCSV](docs/export/README.md#exportservicescsv) - Service inventory as CSV
* [ExportServicesJSON](docs/export/README.md#exportservicesjson) - Service inventory as JSON
* [ExportServicesJSONL](docs/export/README.md#exportservicesjsonl) - Service inventory as JSON line-delimited
* [ExportServicesTopProductsCSV](docs/export/README.md#exportservicestopproductscsv) - Top service products as CSV
* [ExportServicesTopProtocolsCSV](docs/export/README.md#exportservicestopprotocolscsv) - Top service protocols as CSV
* [ExportServicesTopTCPCSV](docs/export/README.md#exportservicestoptcpcsv) - Top TCP services as CSV
* [ExportServicesTopUDPCSV](docs/export/README.md#exportservicestopudpcsv) - Top UDP services as CSV
* [ExportSitesCSV](docs/export/README.md#exportsitescsv) - Site list as CSV
* [ExportSitesJSON](docs/export/README.md#exportsitesjson) - Export all sites
* [ExportSitesJSONL](docs/export/README.md#exportsitesjsonl) - Site list as JSON line-delimited
* [ExportSubnetUtilizationStatsCSV](docs/export/README.md#exportsubnetutilizationstatscsv) - Subnet utilization statistics as as CSV
* [ExportWirelessCSV](docs/export/README.md#exportwirelesscsv) - Wireless inventory as CSV
* [ExportWirelessJSON](docs/export/README.md#exportwirelessjson) - Wireless inventory as JSON
* [ExportWirelessJSONL](docs/export/README.md#exportwirelessjsonl) - Wireless inventory as JSON line-delimited

### [Organization](docs/organization/README.md)

* [ClearBulkAssetTags](docs/organization/README.md#clearbulkassettags) - Clear all tags across multiple assets based on a search query
* [CreateScan](docs/organization/README.md#createscan) - Create a scan task for a given site
* [CreateSite](docs/organization/README.md#createsite) - Create a new site
* [GetAgent](docs/organization/README.md#getagent) - Get details for a single agent
* [GetAgents](docs/organization/README.md#getagents) - Get all agents
* [GetAsset](docs/organization/README.md#getasset) - Get asset details
* [GetAssets](docs/organization/README.md#getassets) - Get all assets
* [GetKey](docs/organization/README.md#getkey) - Get API key details
* [GetOrganization](docs/organization/README.md#getorganization) - Get organization details
* [GetService](docs/organization/README.md#getservice) - Get service details
* [GetServices](docs/organization/README.md#getservices) - Get all services
* [GetSite](docs/organization/README.md#getsite) - Get site details
* [GetSites](docs/organization/README.md#getsites) - Get all sites
* [GetTask](docs/organization/README.md#gettask) - Get task details
* [GetTaskChangeReport](docs/organization/README.md#gettaskchangereport) - Returns a temporary task change report data url
* [GetTaskLog](docs/organization/README.md#gettasklog) - Returns a temporary task log data url
* [GetTaskScanData](docs/organization/README.md#gettaskscandata) - Returns a temporary task scan data url
* [GetTasks](docs/organization/README.md#gettasks) - Get all tasks (last 1000)
* [GetWirelessLAN](docs/organization/README.md#getwirelesslan) - Get wireless LAN details
* [GetWirelessLANs](docs/organization/README.md#getwirelesslans) - Get all wireless LANs
* [HideTask](docs/organization/README.md#hidetask) - Signal that a completed task should be hidden
* [ImportNessusScanData](docs/organization/README.md#importnessusscandata) - Import a Nessus scan data file into a site
* [ImportScanData](docs/organization/README.md#importscandata) - Import a scan data file into a site
* [RemoveAgent](docs/organization/README.md#removeagent) - Remove and uninstall an agent
* [RemoveAsset](docs/organization/README.md#removeasset) - Remove an asset
* [RemoveKey](docs/organization/README.md#removekey) - Remove the current API key
* [RemoveService](docs/organization/README.md#removeservice) - Remove a service
* [RemoveSite](docs/organization/README.md#removesite) - Remove a site and associated assets
* [RemoveWirelessLAN](docs/organization/README.md#removewirelesslan) - Remove a wireless LAN
* [RotateKey](docs/organization/README.md#rotatekey) - Rotate the API key secret and return the updated key
* [StopTask](docs/organization/README.md#stoptask) - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* [UpdateAgentSite](docs/organization/README.md#updateagentsite) - Update the site associated with agent
* [UpdateAssetComments](docs/organization/README.md#updateassetcomments) - Update asset comments
* [UpdateAssetTags](docs/organization/README.md#updateassettags) - Update asset tags
* [UpdateBulkAssetTags](docs/organization/README.md#updatebulkassettags) - Update tags across multiple assets based on a search query
* [UpdateOrganization](docs/organization/README.md#updateorganization) - Update organization details
* [UpdateSite](docs/organization/README.md#updatesite) - Update a site definition
* [UpdateTask](docs/organization/README.md#updatetask) - Update task parameters
* [UpgradeAgent](docs/organization/README.md#upgradeagent) - Force an agent to update and restart

### [Public](docs/public/README.md)

* [GetLatestAgentVersion](docs/public/README.md#getlatestagentversion) - Returns latest agent version
* [GetLatestPlatformVersion](docs/public/README.md#getlatestplatformversion) - Returns latest platform version
* [GetLatestScannerVersion](docs/public/README.md#getlatestscannerversion) - Returns latest scanner version

### [ServiceNow](docs/servicenow/README.md)

* [SnowExportAssetsCSV](docs/servicenow/README.md#snowexportassetscsv) - Export an asset inventory as CSV for ServiceNow integration
* [SnowExportAssetsJSON](docs/servicenow/README.md#snowexportassetsjson) - Exports the asset inventory as JSON
* [SnowExportServicesCSV](docs/servicenow/README.md#snowexportservicescsv) - Export a service inventory as CSV for ServiceNow integration

### [Splunk](docs/splunk/README.md)

* [SplunkAssetSyncCreatedJSON](docs/splunk/README.md#splunkassetsynccreatedjson) - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* [SplunkAssetSyncUpdatedJSON](docs/splunk/README.md#splunkassetsyncupdatedjson) - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
