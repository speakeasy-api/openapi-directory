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
    s := sdk.New()
    
    req := operations.PostSigninRequest{
        Security: operations.PostSigninSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Headers: operations.PostSigninHeaders{
            ZapTraceSpan: "sit",
        },
    }
    
    res, err := s.PostSignin(ctx, req)
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

### SDK SDK

* `PostSignin` - Exchange basic auth credentials for session
* `PostSignout` - Expire the current session

### Authorizations

* `DeleteAuthorizationsID` - Delete an authorization
* `GetAuthorizations` - List all authorizations
* `GetAuthorizationsID` - Retrieve an authorization
* `PatchAuthorizationsID` - Update an authorization to be active or inactive
* `PostAuthorizations` - Create an authorization

### Buckets

* `DeleteBucketsID` - Delete a bucket
* `DeleteBucketsIDLabelsID` - Delete a label from a bucket
* `DeleteBucketsIDMembersID` - Remove a member from a bucket
* `DeleteBucketsIDOwnersID` - Remove an owner from a bucket
* `GetBuckets` - List all buckets
* `GetBucketsID` - Retrieve a bucket
* `GetBucketsIDLabels` - List all labels for a bucket
* `GetBucketsIDMembers` - List all users with member privileges for a bucket
* `GetBucketsIDOwners` - List all owners of a bucket
* `GetSourcesIDBuckets` - Get buckets in a source
* `PatchBucketsID` - Update a bucket
* `PostBuckets` - Create a bucket
* `PostBucketsIDLabels` - Add a label to a bucket
* `PostBucketsIDMembers` - Add a member to a bucket
* `PostBucketsIDOwners` - Add an owner to a bucket

### Cells

* `DeleteDashboardsIDCellsID` - Delete a dashboard cell
* `GetDashboardsIDCellsIDView` - Retrieve the view for a cell
* `PatchDashboardsIDCellsID` - Update the non-positional information related to a cell
* `PatchDashboardsIDCellsIDView` - Update the view for a cell
* `PostDashboardsIDCells` - Create a dashboard cell
* `PutDashboardsIDCells` - Replace cells in a dashboard

### Checks

* `CreateCheck` - Add new check
* `DeleteChecksID` - Delete a check
* `DeleteChecksIDLabelsID` - Delete label from a check
* `GetChecks` - List all checks
* `GetChecksID` - Retrieve a check
* `GetChecksIDLabels` - List all labels for a check
* `GetChecksIDQuery` - Retrieve a check query
* `PatchChecksID` - Update a check
* `PostChecksIDLabels` - Add a label to a check
* `PutChecksID` - Update a check

### DBRPs

* `DeleteDbrpid` - Delete a database retention policy
* `GetDbrPs` - List all database retention policy mappings
* `GetDbrPsID` - Retrieve a database retention policy mapping
* `PatchDbrpid` - Update a database retention policy mapping
* `PostDbrp` - Add a database retention policy mapping

### Dashboards

* `DeleteDashboardsID` - Delete a dashboard
* `DeleteDashboardsIDCellsID` - Delete a dashboard cell
* `DeleteDashboardsIDLabelsID` - Delete a label from a dashboard
* `DeleteDashboardsIDMembersID` - Remove a member from a dashboard
* `DeleteDashboardsIDOwnersID` - Remove an owner from a dashboard
* `GetDashboards` - List all dashboards
* `GetDashboardsID` - Retrieve a Dashboard
* `GetDashboardsIDCellsIDView` - Retrieve the view for a cell
* `GetDashboardsIDLabels` - List all labels for a dashboard
* `GetDashboardsIDMembers` - List all dashboard members
* `GetDashboardsIDOwners` - List all dashboard owners
* `PatchDashboardsID` - Update a dashboard
* `PatchDashboardsIDCellsID` - Update the non-positional information related to a cell
* `PatchDashboardsIDCellsIDView` - Update the view for a cell
* `PostDashboards` - Create a dashboard
* `PostDashboardsIDCells` - Create a dashboard cell
* `PostDashboardsIDLabels` - Add a label to a dashboard
* `PostDashboardsIDMembers` - Add a member to a dashboard
* `PostDashboardsIDOwners` - Add an owner to a dashboard
* `PutDashboardsIDCells` - Replace cells in a dashboard

### Delete

* `PostDelete` - Delete time series data from InfluxDB

### Health

* `GetHealth` - Get the health of an instance

### InfluxDB Templates

* `ApplyTemplate` - Apply or dry-run an InfluxDB Template
* `CreateStack` - Create a new stack
* `DeleteStack` - Delete a stack and associated resources
* `ExportTemplate` - Export a new Influx Template
* `ListStacks` - List all installed InfluxDB templates
* `ReadStack` - Retrieve a stack
* `UninstallStack` - Uninstall an InfluxDB Stack
* `UpdateStack` - Update an InfluxDB Stack

### Labels

* `DeleteLabelsID` - Delete a label
* `GetLabels` - List all labels
* `GetLabelsID` - Retrieve a label
* `PatchLabelsID` - Update a label
* `PostLabels` - Create a label

### NotificationEndpoints

* `CreateNotificationEndpoint` - Add a notification endpoint
* `DeleteNotificationEndpointsID` - Delete a notification endpoint
* `DeleteNotificationEndpointsIDLabelsID` - Delete a label from a notification endpoint
* `GetNotificationEndpoints` - List all notification endpoints
* `GetNotificationEndpointsID` - Retrieve a notification endpoint
* `GetNotificationEndpointsIDLabels` - List all labels for a notification endpoint
* `PatchNotificationEndpointsID` - Update a notification endpoint
* `PostNotificationEndpointIDLabels` - Add a label to a notification endpoint
* `PutNotificationEndpointsID` - Update a notification endpoint

### NotificationRules

* `CreateNotificationRule` - Add a notification rule
* `DeleteNotificationRulesID` - Delete a notification rule
* `DeleteNotificationRulesIDLabelsID` - Delete label from a notification rule
* `GetNotificationRules` - List all notification rules
* `GetNotificationRulesID` - Retrieve a notification rule
* `GetNotificationRulesIDLabels` - List all labels for a notification rule
* `PatchNotificationRulesID` - Update a notification rule
* `PostNotificationRuleIDLabels` - Add a label to a notification rule
* `PutNotificationRulesID` - Update a notification rule

### Organizations

* `DeleteOrgsID` - Delete an organization
* `DeleteOrgsIDMembersID` - Remove a member from an organization
* `DeleteOrgsIDOwnersID` - Remove an owner from an organization
* `GetOrgs` - List all organizations
* `GetOrgsID` - Retrieve an organization
* `GetOrgsIDMembers` - List all members of an organization
* `GetOrgsIDOwners` - List all owners of an organization
* `GetOrgsIDSecrets` - List all secret keys for an organization
* `PatchOrgsID` - Update an organization
* `PatchOrgsIDSecrets` - Update secrets in an organization
* `PostOrgs` - Create an organization
* `PostOrgsIDMembers` - Add a member to an organization
* `PostOrgsIDOwners` - Add an owner to an organization
* `PostOrgsIDSecrets` - Delete secrets from an organization

### Query

* `GetQuerySuggestions` - Retrieve query suggestions
* `GetQuerySuggestionsName` - Retrieve query suggestions for a branching suggestion
* `PostQuery` - Query InfluxDB
* `PostQueryAnalyze` - Analyze an InfluxQL or Flux query
* `PostQueryAst` - Generate an Abstract Syntax Tree (AST) from a query

### Ready

* `GetReady` - Get the readiness of an instance at startup

### Routes

* `GetRoutes` - List all top level routes

### Rules

* `GetNotificationRulesIDQuery` - Retrieve a notification rule query

### Scraper Targets

* `DeleteScrapersID` - Delete a scraper target
* `DeleteScrapersIDLabelsID` - Delete a label from a scraper target
* `DeleteScrapersIDMembersID` - Remove a member from a scraper target
* `DeleteScrapersIDOwnersID` - Remove an owner from a scraper target
* `GetScrapers` - List all scraper targets
* `GetScrapersID` - Retrieve a scraper target
* `GetScrapersIDLabels` - List all labels for a scraper target
* `GetScrapersIDMembers` - List all users with member privileges for a scraper target
* `GetScrapersIDOwners` - List all owners of a scraper target
* `PatchScrapersID` - Update a scraper target
* `PostScrapers` - Create a scraper target
* `PostScrapersIDLabels` - Add a label to a scraper target
* `PostScrapersIDMembers` - Add a member to a scraper target
* `PostScrapersIDOwners` - Add an owner to a scraper target

### Secrets

* `GetOrgsIDSecrets` - List all secret keys for an organization
* `PatchOrgsIDSecrets` - Update secrets in an organization
* `PostOrgsIDSecrets` - Delete secrets from an organization

### Setup

* `GetSetup` - Check if database has default user, org, bucket
* `PostSetup` - Set up initial user, org and bucket

### Sources

* `DeleteSourcesID` - Delete a source
* `GetSources` - List all sources
* `GetSourcesID` - Retrieve a source
* `GetSourcesIDBuckets` - Get buckets in a source
* `GetSourcesIDHealth` - Get the health of a source
* `PatchSourcesID` - Update a Source
* `PostSources` - Create a source

### Tasks

* `DeleteTasksID` - Delete a task
* `DeleteTasksIDLabelsID` - Delete a label from a task
* `DeleteTasksIDMembersID` - Remove a member from a task
* `DeleteTasksIDOwnersID` - Remove an owner from a task
* `DeleteTasksIDRunsID` - Cancel a running task
* `GetTasks` - List all tasks
* `GetTasksID` - Retrieve a task
* `GetTasksIDLabels` - List all labels for a task
* `GetTasksIDLogs` - Retrieve all logs for a task
* `GetTasksIDMembers` - List all task members
* `GetTasksIDOwners` - List all owners of a task
* `GetTasksIDRuns` - List runs for a task
* `GetTasksIDRunsID` - Retrieve a single run for a task
* `GetTasksIDRunsIDLogs` - Retrieve all logs for a run
* `PatchTasksID` - Update a task
* `PostTasks` - Create a new task
* `PostTasksIDLabels` - Add a label to a task
* `PostTasksIDMembers` - Add a member to a task
* `PostTasksIDOwners` - Add an owner to a task
* `PostTasksIDRuns` - Manually start a task run, overriding the current schedule
* `PostTasksIDRunsIDRetry` - Retry a task run

### Telegraf Plugins

* `GetTelegrafPlugins` - List all Telegraf plugins

### Telegrafs

* `DeleteTelegrafsID` - Delete a Telegraf configuration
* `DeleteTelegrafsIDLabelsID` - Delete a label from a Telegraf config
* `DeleteTelegrafsIDMembersID` - Remove a member from a Telegraf config
* `DeleteTelegrafsIDOwnersID` - Remove an owner from a Telegraf config
* `GetTelegrafs` - List all Telegraf configurations
* `GetTelegrafsID` - Retrieve a Telegraf configuration
* `GetTelegrafsIDLabels` - List all labels for a Telegraf config
* `GetTelegrafsIDMembers` - List all users with member privileges for a Telegraf config
* `GetTelegrafsIDOwners` - List all owners of a Telegraf configuration
* `PostTelegrafs` - Create a Telegraf configuration
* `PostTelegrafsIDLabels` - Add a label to a Telegraf config
* `PostTelegrafsIDMembers` - Add a member to a Telegraf config
* `PostTelegrafsIDOwners` - Add an owner to a Telegraf configuration
* `PutTelegrafsID` - Update a Telegraf configuration

### Templates

* `DeleteDocumentsTemplatesID` - Delete a template
* `DeleteDocumentsTemplatesIDLabelsID` - Delete a label from a template
* `GetDocumentsTemplates` - List all templates
* `GetDocumentsTemplatesID` - Retrieve a template
* `GetDocumentsTemplatesIDLabels` - List all labels for a template
* `PostDocumentsTemplates` - Create a template
* `PostDocumentsTemplatesIDLabels` - Add a label to a template
* `PutDocumentsTemplatesID` - Update a template

### Users

* `DeleteUsersID` - Delete a user
* `GetFlags` - Return the feature flags for the currently authenticated user
* `GetMe` - Retrieve the currently authenticated user
* `GetUsers` - List all users
* `GetUsersID` - Retrieve a user
* `PatchUsersID` - Update a user
* `PostUsers` - Create a user
* `PostUsersIDPassword` - Update a password
* `PutMePassword` - Update a password

### Variables

* `DeleteVariablesID` - Delete a variable
* `DeleteVariablesIDLabelsID` - Delete a label from a variable
* `GetVariables` - List all variables
* `GetVariablesID` - Retrieve a variable
* `GetVariablesIDLabels` - List all labels for a variable
* `PatchVariablesID` - Update a variable
* `PostVariables` - Create a variable
* `PostVariablesIDLabels` - Add a label to a variable
* `PutVariablesID` - Replace a variable

### Views

* `GetDashboardsIDCellsIDView` - Retrieve the view for a cell
* `PatchDashboardsIDCellsIDView` - Update the view for a cell

### Write

* `PostWrite` - Write time series data into InfluxDB

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
