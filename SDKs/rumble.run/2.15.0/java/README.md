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

import org.openapis.openapi.models.operations.CreateAccountCredentialSecurity;
import org.openapis.openapi.models.operations.CreateAccountCredentialRequest;
import org.openapis.openapi.models.operations.CreateAccountCredentialResponse;
import org.openapis.openapi.models.shared.CredentialOptionsTypeEnum;
import org.openapis.openapi.models.shared.CredentialOptions;
import org.openapis.openapi.models.shared.MiradoreCredentialFields;
import org.openapis.openapi.models.shared.AWSCredentialFields;
import org.openapis.openapi.models.shared.AzureClientSecretCredentialFields;
import org.openapis.openapi.models.shared.AzureUsernamePasswordCredentialFields;
import org.openapis.openapi.models.shared.CrowdstrikeCredentialFields;
import org.openapis.openapi.models.shared.CensysCredentialFields;
import org.openapis.openapi.models.shared.SNMPv2CommunitiesCredentialFields;
import org.openapis.openapi.models.shared.SNMPv3CredentialFields;
import org.openapis.openapi.models.shared.VMwareCredentialFields;
import org.openapis.openapi.models.shared.SchemeBearerAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountCredentialRequest req = new CreateAccountCredentialRequest() {{
                security = new CreateAccountCredentialSecurity() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }};
                request = new CredentialOptions() {{
                    acl = new java.util.HashMap<String, Object>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    cidrs = "10.0.0.17/32, 192.168.1.0/24";
                    global = false;
                    name = "credentials_name";
                    secret = new SNMPv3CredentialFields() {{
                        authPassphrase = "authpass";
                        authProtocol = "sha";
                        context = "vlan-32";
                        privacyPassphrase = "privpass";
                        privacyProtocol = "aes";
                        username = "user";
                    }};
                    type = "miradore_api_key_v1";
                }};
            }};            

            CreateAccountCredentialResponse res = sdk.account.createAccountCredential(req);

            if (res.credential.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### account

* `createAccountCredential` - Create a new credential
* `createAccountGroup` - Create a new group
* `createAccountGroupMapping` - Create a new SSO group mapping
* `createAccountKey` - Create a new key
* `createAccountOrganization` - Create a new organization
* `createAccountScanTemplate` - Create a new scan template
* `createAccountUser` - Create a new user account
* `createAccountUserInvite` - Create a new user account and send an email invite
* `deleteAccountOrganizationExportToken` - Removes the export token from the specified organization
* `exportEventsJSON` - System event log as JSON
* `exportEventsJSONL` - System event log as JSON line-delimited
* `getAccountAgents` - Get all agents across all organizations
* `getAccountCredential` - Get credential details
* `getAccountCredentials` - Get all account credentials
* `getAccountGroup` - Get group details
* `getAccountGroupMapping` - Get SSO group mapping details
* `getAccountGroupMappings` - Get all SSO group mappings
* `getAccountGroups` - Get all groups
* `getAccountKey` - Get key details
* `getAccountKeys` - Get all active API keys
* `getAccountLicense` - Get license details
* `getAccountOrganization` - Get organization details
* `getAccountOrganizations` - Get all organization details
* `getAccountScanTemplate` - Get scan template details
* `getAccountScanTemplates` - Get all scan templates across all organizations (up to 1000)
* `getAccountSites` - Get all sites details across all organizations
* `getAccountTasks` - Get all task details across all organizations (up to 1000)
* `getAccountUser` - Get user details
* `getAccountUsers` - Get all users
* `removeAccountCredential` - Remove this credential
* `removeAccountGroup` - Remove this group
* `removeAccountGroupMapping` - Remove this SSO group mapping
* `removeAccountKey` - Remove this key
* `removeAccountOrganization` - Remove this organization
* `removeAccountScanTemplate` - Remove scan template
* `removeAccountUser` - Remove this user
* `resetAccountUserLockout` - Resets the user's lockout status
* `resetAccountUserMFA` - Resets the user's MFA tokens
* `resetAccountUserPassword` - Sends the user a password reset email
* `rotateAccountKey` - Rotates the key secret
* `rotateAccountOrganizationExportToken` - Rotates the organization export token and returns the updated organization
* `updateAccountGroup` - Update an existing group
* `updateAccountGroupMapping` - Update an existing SSO group mapping
* `updateAccountOrganization` - Update organization details
* `updateAccountScanTemplate` - Update scan template
* `updateAccountUser` - Update a user's details

### ciscoSNTC

* `exportAssetsCiscoCSV` - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

### export

* `exportAssetTopHWCSV` - Top asset hardware products as CSV
* `exportAssetTopOSCSV` - Top asset operating systems as CSV
* `exportAssetTopTagsCSV` - Top asset tags as CSV
* `exportAssetTopTypesCSV` - Top asset types as CSV
* `exportAssetsCSV` - Asset inventory as CSV
* `exportAssetsJSON` - Exports the asset inventory
* `exportAssetsJSONL` - Asset inventory as JSON line-delimited
* `exportAssetsNmapXML` - Asset inventory as Nmap-style XML
* `exportServicesCSV` - Service inventory as CSV
* `exportServicesJSON` - Service inventory as JSON
* `exportServicesJSONL` - Service inventory as JSON line-delimited
* `exportServicesTopProductsCSV` - Top service products as CSV
* `exportServicesTopProtocolsCSV` - Top service protocols as CSV
* `exportServicesTopTCPCSV` - Top TCP services as CSV
* `exportServicesTopUDPCSV` - Top UDP services as CSV
* `exportSitesCSV` - Site list as CSV
* `exportSitesJSON` - Export all sites
* `exportSitesJSONL` - Site list as JSON line-delimited
* `exportSubnetUtilizationStatsCSV` - Subnet utilization statistics as as CSV
* `exportWirelessCSV` - Wireless inventory as CSV
* `exportWirelessJSON` - Wireless inventory as JSON
* `exportWirelessJSONL` - Wireless inventory as JSON line-delimited

### organization

* `clearBulkAssetTags` - Clear all tags across multiple assets based on a search query
* `createScan` - Create a scan task for a given site
* `createSite` - Create a new site
* `getAgent` - Get details for a single agent
* `getAgents` - Get all agents
* `getAsset` - Get asset details
* `getAssets` - Get all assets
* `getKey` - Get API key details
* `getOrganization` - Get organization details
* `getService` - Get service details
* `getServices` - Get all services
* `getSite` - Get site details
* `getSites` - Get all sites
* `getTask` - Get task details
* `getTaskChangeReport` - Returns a temporary task change report data url
* `getTaskLog` - Returns a temporary task log data url
* `getTaskScanData` - Returns a temporary task scan data url
* `getTasks` - Get all tasks (last 1000)
* `getWirelessLAN` - Get wireless LAN details
* `getWirelessLANs` - Get all wireless LANs
* `hideTask` - Signal that a completed task should be hidden
* `importNessusScanData` - Import a Nessus scan data file into a site
* `importScanData` - Import a scan data file into a site
* `removeAgent` - Remove and uninstall an agent
* `removeAsset` - Remove an asset
* `removeKey` - Remove the current API key
* `removeService` - Remove a service
* `removeSite` - Remove a site and associated assets
* `removeWirelessLAN` - Remove a wireless LAN
* `rotateKey` - Rotate the API key secret and return the updated key
* `stopTask` - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* `updateAgentSite` - Update the site associated with agent
* `updateAssetComments` - Update asset comments
* `updateAssetTags` - Update asset tags
* `updateBulkAssetTags` - Update tags across multiple assets based on a search query
* `updateOrganization` - Update organization details
* `updateSite` - Update a site definition
* `updateTask` - Update task parameters
* `upgradeAgent` - Force an agent to update and restart

### public_

* `getLatestAgentVersion` - Returns latest agent version
* `getLatestPlatformVersion` - Returns latest platform version
* `getLatestScannerVersion` - Returns latest scanner version

### serviceNow

* `snowExportAssetsCSV` - Export an asset inventory as CSV for ServiceNow integration
* `snowExportAssetsJSON` - Exports the asset inventory as JSON
* `snowExportServicesCSV` - Export a service inventory as CSV for ServiceNow integration

### splunk

* `splunkAssetSyncCreatedJSON` - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* `splunkAssetSyncUpdatedJSON` - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
