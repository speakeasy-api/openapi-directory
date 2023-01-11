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
import { DeleteKeysIdRequest, DeleteKeysIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    jwtAuth: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  }
));
    
const req: DeleteKeysIdRequest = {
  pathParams: {
    id: "sit",
  },
};

sdk.apiKeys.deleteKeysId(req).then((res: DeleteKeysIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Keys

* `deleteKeysId` - Delete account API key
* `deleteTargetsTargetIdKeysId` - Delete target API key
* `getKeys` - List API keys allowed to operate on account
* `getKeysId` - Retrieve account API key
* `getTargetsTargetIdKeys` - List target specific API keys
* `getTargetsTargetIdKeysId` - Retrieve target API key
* `postKeys` - Create account API key
* `postTargetsTargetIdKeys` - Create target API key

### Account

* `getAccount` - Retrieve account information
* `getBilling` - Retrieve billing information
* `patchBilling` - Partial update billing information
* `postBillingActions` - Action that should be taken to enable the selected targets
* `postBillingEstimate` - Estimate costs of updating a subscription
* `postBillingSubscribe` - Update a subscription
* `postTargetActions` - Available actions for the selected targets
* `putBilling` - Update billing information

### Archive

* `postTargetsActivate` - Activate targets
* `postTargetsArchive` - Archive targets
* `postTargetsArchived` - List archived targets

### Assets

* `deleteTargetsTargetIdAssetsId` - Delete asset
* `getTargetsTargetIdAssets` - List target's assets
* `getTargetsTargetIdAssetsId` - Retrieve asset
* `patchTargetsTargetIdAssetsId` - Partial update assets
* `postTargetsTargetIdAssets` - Create new asset
* `postTargetsTargetIdAssetsIdVerify` - Verify asset ownership
* `putTargetsTargetIdAssetsId` - Update asset

### Events

* `deleteTargetsTargetIdWebhooksId` - Delete target webhook
* `deleteWebhooksId` - Delete account webhook
* `getEvents` - List account events
* `getEventsId` - Retrieve account event
* `getTargetsTargetIdEvents` - List target events
* `getTargetsTargetIdEventsId` - Retrieve target event
* `getTargetsTargetIdWebhooks` - List target webhooks
* `getTargetsTargetIdWebhooksId` - Retrieve target webhook
* `getWebhooks` - List account webhooks
* `getWebhooksId` - Retrieve account webhook
* `patchTargetsTargetIdWebhooksId` - Partial update target webhook
* `patchWebhooksId` - Partial update account webhook
* `postTargetsTargetIdWebhooks` - Create new target webhook
* `postWebhooks` - Create new account webhook
* `putTargetsTargetIdWebhooksId` - Update target webhook
* `putWebhooksId` - Update account webhook

### Findings

* `getTargetsTargetIdFindings` - List target findings
* `getTargetsTargetIdFindingsReport` - Retrieve finding report PDF format
* `getTargetsTargetIdFindingsId` - Retrieve finding
* `getTargetsTargetIdFindingsIdLog` - Finding activity log.
* `patchTargetsTargetIdFindingsBulkUpdate` - Bulk update findings
* `patchTargetsTargetIdFindingsId` - Partial update finding
* `postTargetsTargetIdFindingsBulkReport` - Finding report
* `postTargetsTargetIdFindingsBulkRetest` - Bulk retest findings
* `postTargetsTargetIdFindingsIdRetest` - Retest finding
* `putTargetsTargetIdFindingsId` - Update finding

### Frameworks

* `getFrameworks` - List frameworks
* `getFrameworksId` - Retrieve framework

### Integrations

* `getIntegrations` - Integrations available and installed in the account
* `getTargetsTargetIdIntegrations` - Integrations available and installed for the target

### Jira Cloud Integration

* `getIntegrationsJiraCloudProjects` - List Jira Projects
* `getIntegrationsJiraCloudProjectsProjectIdIssueTypes` - Retrieve project issue types
* `getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdPriorities` - Retrieve issue priorities
* `getIntegrationsJiraCloudProjectsProjectIdIssueTypesIssueTypeIdStatus` - Retrieve issue statuses
* `getTargetsTargetIdFindingsIdIntegrationsJiraCloud` - Retrieve Jira Cloud finding configuration
* `getTargetsTargetIdIntegrationsJiraCloud` - Retrieve Jira Cloud Target configuration
* `patchTargetsTargetIdFindingsIdIntegrationsJiraCloud` - Update Jira Cloud finding configuration
* `patchTargetsTargetIdIntegrationsJiraCloud` - Update Jira Cloud target configuration
* `putTargetsTargetIdFindingsIdIntegrationsJiraCloud` - Update Jira Cloud finding configuration
* `putTargetsTargetIdIntegrationsJiraCloud` - Update Jira Cloud target configuration

### Jira Server Integration

* `getIntegrationsJiraServerProjects` - List Jira Projects
* `getIntegrationsJiraServerProjectsProjectIdIssueTypes` - Retrieve project issue types
* `getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdPriorities` - Retrieve issue priorities
* `getIntegrationsJiraServerProjectsProjectIdIssueTypesIssueTypeIdStatus` - Retrieve issue statuses
* `getTargetsTargetIdFindingsIdIntegrationsJiraServer` - Retrieve Jira Server finding configuration
* `getTargetsTargetIdIntegrationsJiraServer` - Retrieve Jira Server Target configuration
* `patchTargetsTargetIdFindingsIdIntegrationsJiraServer` - Update Jira Server finding configuration
* `patchTargetsTargetIdIntegrationsJiraServer` - Update Jira Server target configuration
* `putTargetsTargetIdFindingsIdIntegrationsJiraServer` - Update Jira Server finding configuration
* `putTargetsTargetIdIntegrationsJiraServer` - Update Jira Server target configuration

### Labels

* `deleteLabelsId` - Delete label
* `getLabels` - List labels
* `getLabelsId` - Retrieve framework
* `patchLabelsId` - Partial update
* `postLabels` - Create label
* `putLabelsId` - Update label

### Login

* `postAuthObtain` - Authenticate user
* `postAuthRefresh` - Replace token with a new one
* `postAuthRevoke` - Revoke a token
* `postAuthVerify` - Verify a token
* `postEnterpriseAuthObtain` - Enterprise user authentication
* `postEnterpriseAuthRefresh` - Enterprise token refresh
* `postEnterpriseAuthRevoke` - Enterprise token revokation
* `postEnterpriseAuthVerify` - Enterprise token verification

### Password Reset

* `postCheck` - Check validity of password reset token
* `postReset` - Send reset password email
* `postSetpassword` - Reset password after asking for a reset (with the token sent by email).


### Plan

* `getPlans` - Subscription plans

### Scans

* `getTargetsAllScans` - List scans for all targets
* `getTargetsTargetIdScans` - List scans
* `getTargetsTargetIdScansDates` - Dates where scans have ocurred
* `getTargetsTargetIdScansRetrievePage` - Scan page
* `getTargetsTargetIdScansId` - Retrieve scan
* `getTargetsTargetIdScansIdEndpoints` - Scan endpoints file
* `getTargetsTargetIdScansIdReport` - Scan report PDF, using the report type specified for the target
* `getTargetsTargetIdScansIdReportDefault` - Scan report PDF, using the default report type
* `getTargetsTargetIdScansIdReportOwasp` - Scan report PDF, using the OWASP report type
* `getTargetsTargetIdScansIdReportPci` - Scan report PDF, using the PCI report type
* `postTargetsTargetIdScanNow` - Start a scan on the target
* `postTargetsTargetIdScansIdCancel` - Cancel running scan

### Scheduled

* `deleteTargetsTargetIdScheduledscansId` - Delete
* `getTargetsAllScheduledscansExpanded` - List scheduled scans for all targets expanding recurrence
* `getTargetsTargetIdScheduledscans` - List scheduled scans
* `getTargetsTargetIdScheduledscansExpanded` - List scheduled scans expanding recurrence
* `getTargetsTargetIdScheduledscansId` - Retrieve a scheduled scan
* `patchTargetsTargetIdScheduledscansId` - Partial update
* `postTargetsTargetIdScheduledscans` - Create new scheduled scan
* `putTargetsTargetIdScheduledscansId` - Update a scheduled scan

### Site

* `getTargetsTargetIdSite` - Retrieve target's site
* `patchTargetsTargetIdSite` - Partial update target's site
* `postTargetsTargetIdSiteVerify` - Verify site ownership
* `putTargetsTargetIdSite` - Update target's site

### Slack Integration

* `getTargetsTargetIdIntegrationsSlack` - Retrieve slack integration data
* `patchTargetsTargetIdIntegrationsSlack` - Update slack integration data
* `putTargetsTargetIdIntegrationsSlack` - Update slack integration data

### Statistics

* `getTargetsAllAverageFixTime` - Average fix time graph data (all targets)
* `getTargetsAllNeedsAttentionPie` - Targets with open vulnerabilities pie chart data
* `getTargetsAllNeedsAttentionTop` - Targets with open vulnerabilities
* `getTargetsAllRiskTrend` - Risk trend graph data (all targets)
* `getTargetsAllSeverityTrend` - Severity trend graph data (all targets)
* `getTargetsAllTopVulns` - Top 5 vulnerabilities (all targets).
* `getTargetsTargetIdAverageFixTime` - Average vulnerability trend graph data
* `getTargetsTargetIdRiskTrend` - Risk trend graph data
* `getTargetsTargetIdSeverityTrend` - Severity trend graph data.
* `getTargetsTargetIdTopVulns` - Top 5 vulnerabilities

### Targets

* `deleteTargetsId` - Delete target
* `getTargets` - List targets
* `getTargetsId` - Retrieve target
* `patchTargetsId` - Partial update target
* `postTargets` - Create target
* `putTargetsId` - Update target

### Users

* `deleteUsersId` - Deactivate a user
* `getProfile` - User data
* `getUsers` - List users
* `getUsersId` - Retrieve user
* `patchUsersId` - Partial update user
* `postProfileChangePassword` - Change user password
* `postUsers` - Create/Reactivate a user.
* `putUsersId` - Update user

### Vulnerabilities

* `getVulnerabilityDefinitions` - List vulnerability definitions
* `getVulnerabilityDefinitionsId` - Retrieve vulnerability definition

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
