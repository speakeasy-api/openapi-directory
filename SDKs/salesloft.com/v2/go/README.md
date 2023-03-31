# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/salesloft.com/v2/go
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

    req := operations.GetV2AccountStagesJSONRequest{
        Ids: []int64{
            592845,
            715190,
            844266,
        },
        IncludePagingCounts: false,
        LimitPagingCounts: false,
        Page: 602763,
        PerPage: 857946,
        SortBy: "corrupti",
        SortDirection: "illum",
        UpdatedAt: []string{
            "error",
            "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.AccountStages.GetV2AccountStagesJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccountStages

* `GetV2AccountStagesJSON` - List account stages
* `GetV2AccountStagesIDJSON` - Fetch an account stage

### AccountTiers

* `GetV2AccountTiersJSON` - List Account Tiers
* `GetV2AccountTiersIDJSON` - Fetch an account tier

### AccountUpsert

* `PostV2AccountUpsertsJSON` - Upsert an account

### Accounts

* `DeleteV2AccountsIDJSON` - Delete an account
* `GetV2AccountsJSON` - List accounts
* `GetV2AccountsIDJSON` - Fetch an account
* `PostV2AccountsJSON` - Create an account
* `PutV2AccountsIDJSON` - Update an existing Account

### ActionDetailsCallInstructions

* `GetV2ActionDetailsCallInstructionsJSON` - List call instructions
* `GetV2ActionDetailsCallInstructionsIDJSON` - Fetch a call instructions

### Actions

* `GetV2ActionsJSON` - List actions
* `GetV2ActionsIDJSON` - Fetch an action

### Activities

* `PostV2ActivitiesJSON` - Create an activity

### ActivityHistories

* `GetV2ActivityHistories` - List Past Activities

### BulkJobs

* `GetV2BulkJobs` - List bulk jobs
* `GetV2BulkJobsID` - Fetch a bulk job
* `PostV2BulkJobs` - Create a bulk job
* `PutV2BulkJobsID` - Update a bulk job

### BulkJobsJobData

* `GetV2BulkJobsBulkJobsIDJobData` - List job data for a bulk job
* `PostV2BulkJobsBulkJobsIDJobData` - Create job data for a bulk job

### BulkJobsResults

* `GetV2BulkJobsBulkJobsIDResults` - List job data for a completed bulk job.

### CRMActivities

* `GetV2CrmActivitiesJSON` - List crm activities
* `GetV2CrmActivitiesIDJSON` - Fetch a crm activity

### CRMActivityFields

* `GetV2CrmActivityFieldsJSON` - List crm activity fields

### CadenceExports

* `GetV2CadenceExportsIDJSON` - Export a cadence

### CadenceImports

* `PostV2CadenceImportsJSON` - Import cadences from JSON

### CadenceMemberships

* `DeleteV2CadenceMembershipsIDJSON` - Delete a cadence membership
* `GetV2CadenceMembershipsJSON` - List cadence memberships
* `GetV2CadenceMembershipsIDJSON` - Fetch a cadence membership
* `PostV2CadenceMembershipsJSON` - Create a cadence membership

### Cadences

* `GetV2CadencesJSON` - List cadences
* `GetV2CadencesIDJSON` - Fetch a cadence

### CalendarEvents

* `GetV2CalendarEvents` - List calendar events
* `PostV2CalendarEventsUpsert` - Upsert a calendar event

### CallDataRecords

* `GetV2CallDataRecordsJSON` - List call data records
* `GetV2CallDataRecordsIDJSON` - Fetch a call data record

### CallDispositions

* `GetV2CallDispositionsJSON` - List call dispositions

### CallSentiments

* `GetV2CallSentimentsJSON` - List call sentiments

### CallerIDs

* `GetV2PhoneNumbersCallerIdsJSON` - List caller ids

### Calls

* `GetV2ActivitiesCallsJSON` - List calls
* `GetV2ActivitiesCallsIDJSON` - Fetch a call
* `PostV2ActivitiesCallsJSON` - Create a call

### ConversationsCalls

* `PostV2ConversationsCalls` - Create Conversations Call

### CrmUsers

* `GetV2CrmUsersJSON` - List crm users

### CustomFields

* `DeleteV2CustomFieldsIDJSON` - Delete a custom field
* `GetV2CustomFieldsJSON` - List custom fields
* `GetV2CustomFieldsIDJSON` - Fetch a custom field
* `PostV2CustomFieldsJSON` - Create a custom field
* `PutV2CustomFieldsIDJSON` - Update a custom field

### EmailTemplateAttachments

* `GetV2EmailTemplateAttachmentsJSON` - List email template attachments

### EmailTemplates

* `GetV2EmailTemplatesJSON` - List email templates
* `GetV2EmailTemplatesIDJSON` - Fetch an email template

### Emails

* `GetV2ActivitiesEmailsJSON` - List emails
* `GetV2ActivitiesEmailsIDJSON` - Fetch an email

### ExternalEmails

* `PostV2ExternalEmailsJSON` - Create an External Email

### Groups

* `GetV2GroupsJSON` - List groups
* `GetV2GroupsIDJSON` - Fetch a group

### Imports

* `DeleteV2ImportsIDJSON` - Delete an import
* `GetV2ImportsJSON` - List imports
* `GetV2ImportsIDJSON` - Fetch an import
* `PostV2ImportsJSON` - Create an import
* `PutV2ImportsIDJSON` - Update an import

### LiveFeedItems

* `PostV2ThirdPartyLiveFeedItems` - Create a live feed item

### LiveWebsiteTrackingParameters

* `PostV2LiveWebsiteTrackingParametersJSON` - Create an Live Website Tracking Parameter

### Me

* `GetV2MeJSON` - Fetch current user

### MeetingSettings

* `PutV2MeetingsSettingsIDJSON` - Update a meeting setting

### Meetings

* `GetV2MeetingsJSON` - List meetings
* `PutV2MeetingsIDJSON` - Update a meeting

### MeetingsSettingsSearches

* `PostV2MeetingsSettingsSearchesJSON` - List meeting settings

### MimeEmailPayloads

* `GetV2MimeEmailPayloadsIDJSON` - Fetch the MIME content for email

### Notes

* `DeleteV2NotesIDJSON` - Delete a note
* `GetV2NotesJSON` - List notes
* `GetV2NotesIDJSON` - Fetch a note
* `PostV2NotesJSON` - Create a note
* `PutV2NotesIDJSON` - Update a note

### OngoingActions

* `PostV2OngoingActionsJSON` - Create an ongoing action

### PendingEmails

* `GetV2PendingEmailsJSON` - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* `PutV2PendingEmailsIDJSON` - Updates the status of an email sent by an External Email Client

### People

* `DeleteV2PeopleIDJSON` - Delete a person
* `GetV2PeopleJSON` - List people
* `GetV2PeopleIDJSON` - Fetch a person
* `PostV2PeopleJSON` - Create a person
* `PutV2PeopleIDJSON` - Update a person

### PersonStages

* `DeleteV2PersonStagesIDJSON` - Delete an person stage
* `GetV2PersonStagesJSON` - List person stages
* `GetV2PersonStagesIDJSON` - Fetch a person stage
* `PostV2PersonStagesJSON` - Create a person stage
* `PutV2PersonStagesIDJSON` - Update a person stage

### PersonUpsert

* `PostV2PersonUpsertsJSON` - Upsert a person

### PhoneNumberAssignments

* `GetV2PhoneNumberAssignmentsJSON` - List phone number assignments
* `GetV2PhoneNumberAssignmentsIDJSON` - Fetch a phone number assignment

### RecordingSettings

* `GetV2PhoneNumbersRecordingSettingsIDJSON` - Fetch recording setting

### SavedListViews

* `DeleteV2SavedListViewsIDJSON` - Delete a saved list view
* `GetV2SavedListViewsJSON` - List saved list views
* `GetV2SavedListViewsIDJSON` - Fetch a saved list view
* `PostV2SavedListViewsJSON` - Create a saved list view
* `PutV2SavedListViewsIDJSON` - Update a saved list view

### Steps

* `GetV2StepsJSON` - List steps
* `GetV2StepsIDJSON` - Fetch a step

### Successes

* `GetV2SuccessesJSON` - List successes

### Tags

* `GetV2TagsJSON` - List team tags

### Tasks

* `GetV2TasksJSON` - List tasks
* `GetV2TasksIDJSON` - Fetch a task
* `PostV2TasksJSON` - Create a Task
* `PutV2TasksIDJSON` - Update a Task

### Team

* `GetV2TeamJSON` - Fetch current team

### TeamTemplateAttachments

* `GetV2TeamTemplateAttachmentsJSON` - List team template attachments

### TeamTemplates

* `GetV2TeamTemplatesJSON` - List team templates
* `GetV2TeamTemplatesIDJSON` - Fetch a team template

### Users

* `GetV2UsersJSON` - List users
* `GetV2UsersIDJSON` - Fetch a user

### WebhookSubscriptions

* `DeleteV2WebhookSubscriptionsID` - Delete a webhook subscription
* `GetV2WebhookSubscriptions` - List webhook subscriptions
* `GetV2WebhookSubscriptionsID` - Fetch a webhook subscription
* `PostV2WebhookSubscriptions` - Create a webhook subscription
* `PutV2WebhookSubscriptionsID` - Update a webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
