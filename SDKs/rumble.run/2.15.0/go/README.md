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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.CredentialOptions{
        ACL: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Cidrs: "10.0.0.17/32, 192.168.1.0/24",
        Global: false,
        Name: "credentials_name",
        Secret: &shared.CredentialFields{},
        Type: "miradore_api_key_v1",
    }

    ctx := context.Background()
    res, err := s.Account.CreateAccountCredential(ctx, req, operations.CreateAccountCredentialSecurity{
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


### Account

* `CreateAccountCredential` - Create a new credential
* `CreateAccountGroup` - Create a new group
* `CreateAccountGroupMapping` - Create a new SSO group mapping
* `CreateAccountKey` - Create a new key
* `CreateAccountOrganization` - Create a new organization
* `CreateAccountScanTemplate` - Create a new scan template
* `CreateAccountUser` - Create a new user account
* `CreateAccountUserInvite` - Create a new user account and send an email invite
* `DeleteAccountOrganizationExportToken` - Removes the export token from the specified organization
* `ExportEventsJSON` - System event log as JSON
* `ExportEventsJSONL` - System event log as JSON line-delimited
* `GetAccountAgents` - Get all agents across all organizations
* `GetAccountCredential` - Get credential details
* `GetAccountCredentials` - Get all account credentials
* `GetAccountGroup` - Get group details
* `GetAccountGroupMapping` - Get SSO group mapping details
* `GetAccountGroupMappings` - Get all SSO group mappings
* `GetAccountGroups` - Get all groups
* `GetAccountKey` - Get key details
* `GetAccountKeys` - Get all active API keys
* `GetAccountLicense` - Get license details
* `GetAccountOrganization` - Get organization details
* `GetAccountOrganizations` - Get all organization details
* `GetAccountScanTemplate` - Get scan template details
* `GetAccountScanTemplates` - Get all scan templates across all organizations (up to 1000)
* `GetAccountSites` - Get all sites details across all organizations
* `GetAccountTasks` - Get all task details across all organizations (up to 1000)
* `GetAccountUser` - Get user details
* `GetAccountUsers` - Get all users
* `RemoveAccountCredential` - Remove this credential
* `RemoveAccountGroup` - Remove this group
* `RemoveAccountGroupMapping` - Remove this SSO group mapping
* `RemoveAccountKey` - Remove this key
* `RemoveAccountOrganization` - Remove this organization
* `RemoveAccountScanTemplate` - Remove scan template
* `RemoveAccountUser` - Remove this user
* `ResetAccountUserLockout` - Resets the user's lockout status
* `ResetAccountUserMFA` - Resets the user's MFA tokens
* `ResetAccountUserPassword` - Sends the user a password reset email
* `RotateAccountKey` - Rotates the key secret
* `RotateAccountOrganizationExportToken` - Rotates the organization export token and returns the updated organization
* `UpdateAccountGroup` - Update an existing group
* `UpdateAccountGroupMapping` - Update an existing SSO group mapping
* `UpdateAccountOrganization` - Update organization details
* `UpdateAccountScanTemplate` - Update scan template
* `UpdateAccountUser` - Update a user's details

### CiscoSNTC

* `ExportAssetsCiscoCSV` - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

### Export

* `ExportAssetTopHWCSV` - Top asset hardware products as CSV
* `ExportAssetTopOSCSV` - Top asset operating systems as CSV
* `ExportAssetTopTagsCSV` - Top asset tags as CSV
* `ExportAssetTopTypesCSV` - Top asset types as CSV
* `ExportAssetsCSV` - Asset inventory as CSV
* `ExportAssetsJSON` - Exports the asset inventory
* `ExportAssetsJSONL` - Asset inventory as JSON line-delimited
* `ExportAssetsNmapXML` - Asset inventory as Nmap-style XML
* `ExportServicesCSV` - Service inventory as CSV
* `ExportServicesJSON` - Service inventory as JSON
* `ExportServicesJSONL` - Service inventory as JSON line-delimited
* `ExportServicesTopProductsCSV` - Top service products as CSV
* `ExportServicesTopProtocolsCSV` - Top service protocols as CSV
* `ExportServicesTopTCPCSV` - Top TCP services as CSV
* `ExportServicesTopUDPCSV` - Top UDP services as CSV
* `ExportSitesCSV` - Site list as CSV
* `ExportSitesJSON` - Export all sites
* `ExportSitesJSONL` - Site list as JSON line-delimited
* `ExportSubnetUtilizationStatsCSV` - Subnet utilization statistics as as CSV
* `ExportWirelessCSV` - Wireless inventory as CSV
* `ExportWirelessJSON` - Wireless inventory as JSON
* `ExportWirelessJSONL` - Wireless inventory as JSON line-delimited

### Organization

* `ClearBulkAssetTags` - Clear all tags across multiple assets based on a search query
* `CreateScan` - Create a scan task for a given site
* `CreateSite` - Create a new site
* `GetAgent` - Get details for a single agent
* `GetAgents` - Get all agents
* `GetAsset` - Get asset details
* `GetAssets` - Get all assets
* `GetKey` - Get API key details
* `GetOrganization` - Get organization details
* `GetService` - Get service details
* `GetServices` - Get all services
* `GetSite` - Get site details
* `GetSites` - Get all sites
* `GetTask` - Get task details
* `GetTaskChangeReport` - Returns a temporary task change report data url
* `GetTaskLog` - Returns a temporary task log data url
* `GetTaskScanData` - Returns a temporary task scan data url
* `GetTasks` - Get all tasks (last 1000)
* `GetWirelessLAN` - Get wireless LAN details
* `GetWirelessLANs` - Get all wireless LANs
* `HideTask` - Signal that a completed task should be hidden
* `ImportNessusScanData` - Import a Nessus scan data file into a site
* `ImportScanData` - Import a scan data file into a site
* `RemoveAgent` - Remove and uninstall an agent
* `RemoveAsset` - Remove an asset
* `RemoveKey` - Remove the current API key
* `RemoveService` - Remove a service
* `RemoveSite` - Remove a site and associated assets
* `RemoveWirelessLAN` - Remove a wireless LAN
* `RotateKey` - Rotate the API key secret and return the updated key
* `StopTask` - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* `UpdateAgentSite` - Update the site associated with agent
* `UpdateAssetComments` - Update asset comments
* `UpdateAssetTags` - Update asset tags
* `UpdateBulkAssetTags` - Update tags across multiple assets based on a search query
* `UpdateOrganization` - Update organization details
* `UpdateSite` - Update a site definition
* `UpdateTask` - Update task parameters
* `UpgradeAgent` - Force an agent to update and restart

### Public

* `GetLatestAgentVersion` - Returns latest agent version
* `GetLatestPlatformVersion` - Returns latest platform version
* `GetLatestScannerVersion` - Returns latest scanner version

### ServiceNow

* `SnowExportAssetsCSV` - Export an asset inventory as CSV for ServiceNow integration
* `SnowExportAssetsJSON` - Exports the asset inventory as JSON
* `SnowExportServicesCSV` - Export a service inventory as CSV for ServiceNow integration

### Splunk

* `SplunkAssetSyncCreatedJSON` - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* `SplunkAssetSyncUpdatedJSON` - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
