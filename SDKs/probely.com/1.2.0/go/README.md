# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                JwtAuth: shared.SchemeJwtAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteKeysIDRequest{
        PathParams: operations.DeleteKeysIDPathParams{
            ID: "sit",
        },
    }
    
    res, err := s.APIKeys.DeleteKeysID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Keys

* `DeleteKeysID` - Delete account API key
* `DeleteTargetsTargetIDKeysID` - Delete target API key
* `GetKeys` - List API keys allowed to operate on account
* `GetKeysID` - Retrieve account API key
* `GetTargetsTargetIDKeys` - List target specific API keys
* `GetTargetsTargetIDKeysID` - Retrieve target API key
* `PostKeys` - Create account API key
* `PostTargetsTargetIDKeys` - Create target API key

### Account

* `GetAccount` - Retrieve account information
* `GetBilling` - Retrieve billing information
* `PatchBilling` - Partial update billing information
* `PostBillingActions` - Action that should be taken to enable the selected targets
* `PostBillingEstimate` - Estimate costs of updating a subscription
* `PostBillingSubscribe` - Update a subscription
* `PostTargetActions` - Available actions for the selected targets
* `PutBilling` - Update billing information

### Archive

* `PostTargetsActivate` - Activate targets
* `PostTargetsArchive` - Archive targets
* `PostTargetsArchived` - List archived targets

### Assets

* `DeleteTargetsTargetIDAssetsID` - Delete asset
* `GetTargetsTargetIDAssets` - List target's assets
* `GetTargetsTargetIDAssetsID` - Retrieve asset
* `PatchTargetsTargetIDAssetsID` - Partial update assets
* `PostTargetsTargetIDAssets` - Create new asset
* `PostTargetsTargetIDAssetsIDVerify` - Verify asset ownership
* `PutTargetsTargetIDAssetsID` - Update asset

### Events

* `DeleteTargetsTargetIDWebhooksID` - Delete target webhook
* `DeleteWebhooksID` - Delete account webhook
* `GetEvents` - List account events
* `GetEventsID` - Retrieve account event
* `GetTargetsTargetIDEvents` - List target events
* `GetTargetsTargetIDEventsID` - Retrieve target event
* `GetTargetsTargetIDWebhooks` - List target webhooks
* `GetTargetsTargetIDWebhooksID` - Retrieve target webhook
* `GetWebhooks` - List account webhooks
* `GetWebhooksID` - Retrieve account webhook
* `PatchTargetsTargetIDWebhooksID` - Partial update target webhook
* `PatchWebhooksID` - Partial update account webhook
* `PostTargetsTargetIDWebhooks` - Create new target webhook
* `PostWebhooks` - Create new account webhook
* `PutTargetsTargetIDWebhooksID` - Update target webhook
* `PutWebhooksID` - Update account webhook

### Findings

* `GetTargetsTargetIDFindings` - List target findings
* `GetTargetsTargetIDFindingsReport` - Retrieve finding report PDF format
* `GetTargetsTargetIDFindingsID` - Retrieve finding
* `GetTargetsTargetIDFindingsIDLog` - Finding activity log.
* `PatchTargetsTargetIDFindingsBulkUpdate` - Bulk update findings
* `PatchTargetsTargetIDFindingsID` - Partial update finding
* `PostTargetsTargetIDFindingsBulkReport` - Finding report
* `PostTargetsTargetIDFindingsBulkRetest` - Bulk retest findings
* `PostTargetsTargetIDFindingsIDRetest` - Retest finding
* `PutTargetsTargetIDFindingsID` - Update finding

### Frameworks

* `GetFrameworks` - List frameworks
* `GetFrameworksID` - Retrieve framework

### Integrations

* `GetIntegrations` - Integrations available and installed in the account
* `GetTargetsTargetIDIntegrations` - Integrations available and installed for the target

### Jira Cloud Integration

* `GetIntegrationsJiraCloudProjects` - List Jira Projects
* `GetIntegrationsJiraCloudProjectsProjectIDIssueTypes` - Retrieve project issue types
* `GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities` - Retrieve issue priorities
* `GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus` - Retrieve issue statuses
* `GetTargetsTargetIDFindingsIDIntegrationsJiraCloud` - Retrieve Jira Cloud finding configuration
* `GetTargetsTargetIDIntegrationsJiraCloud` - Retrieve Jira Cloud Target configuration
* `PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud` - Update Jira Cloud finding configuration
* `PatchTargetsTargetIDIntegrationsJiraCloud` - Update Jira Cloud target configuration
* `PutTargetsTargetIDFindingsIDIntegrationsJiraCloud` - Update Jira Cloud finding configuration
* `PutTargetsTargetIDIntegrationsJiraCloud` - Update Jira Cloud target configuration

### Jira Server Integration

* `GetIntegrationsJiraServerProjects` - List Jira Projects
* `GetIntegrationsJiraServerProjectsProjectIDIssueTypes` - Retrieve project issue types
* `GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities` - Retrieve issue priorities
* `GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus` - Retrieve issue statuses
* `GetTargetsTargetIDFindingsIDIntegrationsJiraServer` - Retrieve Jira Server finding configuration
* `GetTargetsTargetIDIntegrationsJiraServer` - Retrieve Jira Server Target configuration
* `PatchTargetsTargetIDFindingsIDIntegrationsJiraServer` - Update Jira Server finding configuration
* `PatchTargetsTargetIDIntegrationsJiraServer` - Update Jira Server target configuration
* `PutTargetsTargetIDFindingsIDIntegrationsJiraServer` - Update Jira Server finding configuration
* `PutTargetsTargetIDIntegrationsJiraServer` - Update Jira Server target configuration

### Labels

* `DeleteLabelsID` - Delete label
* `GetLabels` - List labels
* `GetLabelsID` - Retrieve framework
* `PatchLabelsID` - Partial update
* `PostLabels` - Create label
* `PutLabelsID` - Update label

### Login

* `PostAuthObtain` - Authenticate user
* `PostAuthRefresh` - Replace token with a new one
* `PostAuthRevoke` - Revoke a token
* `PostAuthVerify` - Verify a token
* `PostEnterpriseAuthObtain` - Enterprise user authentication
* `PostEnterpriseAuthRefresh` - Enterprise token refresh
* `PostEnterpriseAuthRevoke` - Enterprise token revokation
* `PostEnterpriseAuthVerify` - Enterprise token verification

### Password Reset

* `PostCheck` - Check validity of password reset token
* `PostReset` - Send reset password email
* `PostSetpassword` - Reset password after asking for a reset (with the token sent by email).


### Plan

* `GetPlans` - Subscription plans

### Scans

* `GetTargetsAllScans` - List scans for all targets
* `GetTargetsTargetIDScans` - List scans
* `GetTargetsTargetIDScansDates` - Dates where scans have ocurred
* `GetTargetsTargetIDScansRetrievePage` - Scan page
* `GetTargetsTargetIDScansID` - Retrieve scan
* `GetTargetsTargetIDScansIDEndpoints` - Scan endpoints file
* `GetTargetsTargetIDScansIDReport` - Scan report PDF, using the report type specified for the target
* `GetTargetsTargetIDScansIDReportDefault` - Scan report PDF, using the default report type
* `GetTargetsTargetIDScansIDReportOwasp` - Scan report PDF, using the OWASP report type
* `GetTargetsTargetIDScansIDReportPci` - Scan report PDF, using the PCI report type
* `PostTargetsTargetIDScanNow` - Start a scan on the target
* `PostTargetsTargetIDScansIDCancel` - Cancel running scan

### Scheduled

* `DeleteTargetsTargetIDScheduledscansID` - Delete
* `GetTargetsAllScheduledscansExpanded` - List scheduled scans for all targets expanding recurrence
* `GetTargetsTargetIDScheduledscans` - List scheduled scans
* `GetTargetsTargetIDScheduledscansExpanded` - List scheduled scans expanding recurrence
* `GetTargetsTargetIDScheduledscansID` - Retrieve a scheduled scan
* `PatchTargetsTargetIDScheduledscansID` - Partial update
* `PostTargetsTargetIDScheduledscans` - Create new scheduled scan
* `PutTargetsTargetIDScheduledscansID` - Update a scheduled scan

### Site

* `GetTargetsTargetIDSite` - Retrieve target's site
* `PatchTargetsTargetIDSite` - Partial update target's site
* `PostTargetsTargetIDSiteVerify` - Verify site ownership
* `PutTargetsTargetIDSite` - Update target's site

### Slack Integration

* `GetTargetsTargetIDIntegrationsSlack` - Retrieve slack integration data
* `PatchTargetsTargetIDIntegrationsSlack` - Update slack integration data
* `PutTargetsTargetIDIntegrationsSlack` - Update slack integration data

### Statistics

* `GetTargetsAllAverageFixTime` - Average fix time graph data (all targets)
* `GetTargetsAllNeedsAttentionPie` - Targets with open vulnerabilities pie chart data
* `GetTargetsAllNeedsAttentionTop` - Targets with open vulnerabilities
* `GetTargetsAllRiskTrend` - Risk trend graph data (all targets)
* `GetTargetsAllSeverityTrend` - Severity trend graph data (all targets)
* `GetTargetsAllTopVulns` - Top 5 vulnerabilities (all targets).
* `GetTargetsTargetIDAverageFixTime` - Average vulnerability trend graph data
* `GetTargetsTargetIDRiskTrend` - Risk trend graph data
* `GetTargetsTargetIDSeverityTrend` - Severity trend graph data.
* `GetTargetsTargetIDTopVulns` - Top 5 vulnerabilities

### Targets

* `DeleteTargetsID` - Delete target
* `GetTargets` - List targets
* `GetTargetsID` - Retrieve target
* `PatchTargetsID` - Partial update target
* `PostTargets` - Create target
* `PutTargetsID` - Update target

### Users

* `DeleteUsersID` - Deactivate a user
* `GetProfile` - User data
* `GetUsers` - List users
* `GetUsersID` - Retrieve user
* `PatchUsersID` - Partial update user
* `PostProfileChangePassword` - Change user password
* `PostUsers` - Create/Reactivate a user.
* `PutUsersID` - Update user

### Vulnerabilities

* `GetVulnerabilityDefinitions` - List vulnerability definitions
* `GetVulnerabilityDefinitionsID` - Retrieve vulnerability definition

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
