# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAccountCredentialRequest, CreateAccountCredentialResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAccountCredentialRequest = {
  security: {
    bearerAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  request: {
    acl: {
      "voluptas": "culpa",
    },
    cidrs: "expedita",
    global: true,
    name: "dolor",
    secret: {
      "voluptas": "fugit",
      "et": "nihil",
    },
    type: "aws_access_secret",
  },
};

sdk.account.createAccountCredential(req).then((res: CreateAccountCredentialResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account

* `createAccountCredential` - Create a new credential
* `createAccountKey` - Create a new key
* `createAccountOrganization` - Create a new organization
* `createAccountUser` - Create a new user account
* `createAccountUserInvite` - Create a new user account and send an email invite
* `deleteAccountOrganizationExportToken` - Removes the export token from the specified organization
* `exportEventsJson` - System event log as JSON
* `exportEventsJsonl` - System event log as JSON line-delimited
* `getAccountAgents` - Get all agents across all organizations
* `getAccountCredential` - Get credential details
* `getAccountCredentials` - Get all account credentials
* `getAccountKey` - Get key details
* `getAccountKeys` - Get all active API keys
* `getAccountLicense` - Get license details
* `getAccountOrganization` - Get organization details
* `getAccountOrganizations` - Get all organization details
* `getAccountSites` - Get all sites details across all organizations
* `getAccountTasks` - Get all task details across all organizations (up to 1000)
* `getAccountUser` - Get user details
* `getAccountUsers` - Get all users
* `removeAccountCredential` - Remove this credential
* `removeAccountKey` - Remove this key
* `removeAccountOrganization` - Remove this organization
* `removeAccountUser` - Remove this user
* `resetAccountUserLockout` - Resets the user's lockout status
* `resetAccountUserMfa` - Resets the user's MFA tokens
* `resetAccountUserPassword` - Sends the user a password reset email
* `rotateAccountKey` - Rotates the key secret
* `rotateAccountOrganizationExportToken` - Rotates the organization export token and returns the updated organization
* `updateAccountOrganization` - Update organization details
* `updateAccountUser` - Update a user's details

### Cisco SNTC

* `exportAssetsCiscoCsv` - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

### Export

* `exportAssetsCsv` - Asset inventory as CSV
* `exportAssetsJson` - Exports the asset inventory
* `exportAssetsJsonl` - Asset inventory as JSON line-delimited
* `exportAssetsNmapXml` - Asset inventory as Nmap-style XML
* `exportServicesCsv` - Service inventory as CSV
* `exportServicesJson` - Service inventory as JSON
* `exportServicesJsonl` - Service inventory as JSON line-delimited
* `exportSitesCsv` - Site list as CSV
* `exportSitesJson` - Export all sites
* `exportSitesJsonl` - Site list as JSON line-delimited
* `exportWirelessCsv` - Wireless inventory as CSV
* `exportWirelessJson` - Wireless inventory as JSON
* `exportWirelessJsonl` - Wireless inventory as JSON line-delimited

### Organization

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
* `getTaskScanData` - Returns a temporary task scan data url
* `getTasks` - Get all tasks (last 1000)
* `getWirelessLan` - Get wireless LAN details
* `getWirelessLaNs` - Get all wireless LANs
* `hideTask` - Signal that a completed task should be hidden
* `importScanData` - Import a scan data file into a site
* `removeAgent` - Remove and uninstall an agent
* `removeAsset` - Remove an asset
* `removeKey` - Remove the current API key
* `removeService` - Remove a service
* `removeSite` - Remove a site and associated assets
* `removeWirelessLan` - Remove a wireless LAN
* `rotateKey` - Rotate the API key secret and return the updated key
* `stopTask` - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* `updateAgentSite` - Update the site associated with agent
* `updateAssetComments` - Update asset comments
* `updateAssetTags` - Update asset tags
* `updateOrganization` - Update organization details
* `updateSite` - Update a site definition
* `updateTask` - Update task parameters
* `upgradeAgent` - Force an agent to update and restart

### Public

* `getLatestAgentVersion` - Returns latest agent version
* `getLatestPlatformVersion` - Returns latest platform version
* `getLatestScannerVersion` - Returns latest scanner version

### ServiceNow

* `snowExportAssetsCsv` - Export an asset inventory as CSV for ServiceNow integration
* `snowExportAssetsJson` - Exports the asset inventory as JSON
* `snowExportServicesCsv` - Export a service inventory as CSV for ServiceNow integration

### Splunk

* `splunkAssetSyncCreatedJson` - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* `splunkAssetSyncUpdatedJson` - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
