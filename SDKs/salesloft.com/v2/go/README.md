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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountStages.GetV2AccountStagesJSON(ctx, operations.GetV2AccountStagesJSONRequest{
        Ids: []int64{
            592845,
            715190,
            844266,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(602763),
        PerPage: sdk.Int64(857946),
        SortBy: sdk.String("corrupti"),
        SortDirection: sdk.String("illum"),
        UpdatedAt: []string{
            "error",
            "deserunt",
        },
    })
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


### [AccountStages](docs/accountstages/README.md)

* [GetV2AccountStagesJSON](docs/accountstages/README.md#getv2accountstagesjson) - List account stages
* [GetV2AccountStagesIDJSON](docs/accountstages/README.md#getv2accountstagesidjson) - Fetch an account stage

### [AccountTiers](docs/accounttiers/README.md)

* [GetV2AccountTiersJSON](docs/accounttiers/README.md#getv2accounttiersjson) - List Account Tiers
* [GetV2AccountTiersIDJSON](docs/accounttiers/README.md#getv2accounttiersidjson) - Fetch an account tier

### [AccountUpsert](docs/accountupsert/README.md)

* [PostV2AccountUpsertsJSON](docs/accountupsert/README.md#postv2accountupsertsjson) - Upsert an account

### [Accounts](docs/accounts/README.md)

* [DeleteV2AccountsIDJSON](docs/accounts/README.md#deletev2accountsidjson) - Delete an account
* [GetV2AccountsJSON](docs/accounts/README.md#getv2accountsjson) - List accounts
* [GetV2AccountsIDJSON](docs/accounts/README.md#getv2accountsidjson) - Fetch an account
* [PostV2AccountsJSON](docs/accounts/README.md#postv2accountsjson) - Create an account
* [PutV2AccountsIDJSON](docs/accounts/README.md#putv2accountsidjson) - Update an existing Account

### [ActionDetailsCallInstructions](docs/actiondetailscallinstructions/README.md)

* [GetV2ActionDetailsCallInstructionsJSON](docs/actiondetailscallinstructions/README.md#getv2actiondetailscallinstructionsjson) - List call instructions
* [GetV2ActionDetailsCallInstructionsIDJSON](docs/actiondetailscallinstructions/README.md#getv2actiondetailscallinstructionsidjson) - Fetch a call instructions

### [Actions](docs/actions/README.md)

* [GetV2ActionsJSON](docs/actions/README.md#getv2actionsjson) - List actions
* [GetV2ActionsIDJSON](docs/actions/README.md#getv2actionsidjson) - Fetch an action

### [Activities](docs/activities/README.md)

* [PostV2ActivitiesJSON](docs/activities/README.md#postv2activitiesjson) - Create an activity

### [ActivityHistories](docs/activityhistories/README.md)

* [GetV2ActivityHistories](docs/activityhistories/README.md#getv2activityhistories) - List Past Activities

### [BulkJobs](docs/bulkjobs/README.md)

* [GetV2BulkJobs](docs/bulkjobs/README.md#getv2bulkjobs) - List bulk jobs
* [GetV2BulkJobsID](docs/bulkjobs/README.md#getv2bulkjobsid) - Fetch a bulk job
* [PostV2BulkJobs](docs/bulkjobs/README.md#postv2bulkjobs) - Create a bulk job
* [PutV2BulkJobsID](docs/bulkjobs/README.md#putv2bulkjobsid) - Update a bulk job

### [BulkJobsJobData](docs/bulkjobsjobdata/README.md)

* [GetV2BulkJobsBulkJobsIDJobData](docs/bulkjobsjobdata/README.md#getv2bulkjobsbulkjobsidjobdata) - List job data for a bulk job
* [PostV2BulkJobsBulkJobsIDJobData](docs/bulkjobsjobdata/README.md#postv2bulkjobsbulkjobsidjobdata) - Create job data for a bulk job

### [BulkJobsResults](docs/bulkjobsresults/README.md)

* [GetV2BulkJobsBulkJobsIDResults](docs/bulkjobsresults/README.md#getv2bulkjobsbulkjobsidresults) - List job data for a completed bulk job.

### [CRMActivities](docs/crmactivities/README.md)

* [GetV2CrmActivitiesJSON](docs/crmactivities/README.md#getv2crmactivitiesjson) - List crm activities
* [GetV2CrmActivitiesIDJSON](docs/crmactivities/README.md#getv2crmactivitiesidjson) - Fetch a crm activity

### [CRMActivityFields](docs/crmactivityfields/README.md)

* [GetV2CrmActivityFieldsJSON](docs/crmactivityfields/README.md#getv2crmactivityfieldsjson) - List crm activity fields

### [CadenceExports](docs/cadenceexports/README.md)

* [GetV2CadenceExportsIDJSON](docs/cadenceexports/README.md#getv2cadenceexportsidjson) - Export a cadence

### [CadenceImports](docs/cadenceimports/README.md)

* [PostV2CadenceImportsJSON](docs/cadenceimports/README.md#postv2cadenceimportsjson) - Import cadences from JSON

### [CadenceMemberships](docs/cadencememberships/README.md)

* [DeleteV2CadenceMembershipsIDJSON](docs/cadencememberships/README.md#deletev2cadencemembershipsidjson) - Delete a cadence membership
* [GetV2CadenceMembershipsJSON](docs/cadencememberships/README.md#getv2cadencemembershipsjson) - List cadence memberships
* [GetV2CadenceMembershipsIDJSON](docs/cadencememberships/README.md#getv2cadencemembershipsidjson) - Fetch a cadence membership
* [PostV2CadenceMembershipsJSON](docs/cadencememberships/README.md#postv2cadencemembershipsjson) - Create a cadence membership

### [Cadences](docs/cadences/README.md)

* [GetV2CadencesJSON](docs/cadences/README.md#getv2cadencesjson) - List cadences
* [GetV2CadencesIDJSON](docs/cadences/README.md#getv2cadencesidjson) - Fetch a cadence

### [CalendarEvents](docs/calendarevents/README.md)

* [GetV2CalendarEvents](docs/calendarevents/README.md#getv2calendarevents) - List calendar events
* [PostV2CalendarEventsUpsert](docs/calendarevents/README.md#postv2calendareventsupsert) - Upsert a calendar event

### [CallDataRecords](docs/calldatarecords/README.md)

* [GetV2CallDataRecordsJSON](docs/calldatarecords/README.md#getv2calldatarecordsjson) - List call data records
* [GetV2CallDataRecordsIDJSON](docs/calldatarecords/README.md#getv2calldatarecordsidjson) - Fetch a call data record

### [CallDispositions](docs/calldispositions/README.md)

* [GetV2CallDispositionsJSON](docs/calldispositions/README.md#getv2calldispositionsjson) - List call dispositions

### [CallSentiments](docs/callsentiments/README.md)

* [GetV2CallSentimentsJSON](docs/callsentiments/README.md#getv2callsentimentsjson) - List call sentiments

### [CallerIDs](docs/callerids/README.md)

* [GetV2PhoneNumbersCallerIdsJSON](docs/callerids/README.md#getv2phonenumberscalleridsjson) - List caller ids

### [Calls](docs/calls/README.md)

* [GetV2ActivitiesCallsJSON](docs/calls/README.md#getv2activitiescallsjson) - List calls
* [GetV2ActivitiesCallsIDJSON](docs/calls/README.md#getv2activitiescallsidjson) - Fetch a call
* [PostV2ActivitiesCallsJSON](docs/calls/README.md#postv2activitiescallsjson) - Create a call

### [ConversationsCalls](docs/conversationscalls/README.md)

* [PostV2ConversationsCalls](docs/conversationscalls/README.md#postv2conversationscalls) - Create Conversations Call

### [CrmUsers](docs/crmusers/README.md)

* [GetV2CrmUsersJSON](docs/crmusers/README.md#getv2crmusersjson) - List crm users

### [CustomFields](docs/customfields/README.md)

* [DeleteV2CustomFieldsIDJSON](docs/customfields/README.md#deletev2customfieldsidjson) - Delete a custom field
* [GetV2CustomFieldsJSON](docs/customfields/README.md#getv2customfieldsjson) - List custom fields
* [GetV2CustomFieldsIDJSON](docs/customfields/README.md#getv2customfieldsidjson) - Fetch a custom field
* [PostV2CustomFieldsJSON](docs/customfields/README.md#postv2customfieldsjson) - Create a custom field
* [PutV2CustomFieldsIDJSON](docs/customfields/README.md#putv2customfieldsidjson) - Update a custom field

### [EmailTemplateAttachments](docs/emailtemplateattachments/README.md)

* [GetV2EmailTemplateAttachmentsJSON](docs/emailtemplateattachments/README.md#getv2emailtemplateattachmentsjson) - List email template attachments

### [EmailTemplates](docs/emailtemplates/README.md)

* [GetV2EmailTemplatesJSON](docs/emailtemplates/README.md#getv2emailtemplatesjson) - List email templates
* [GetV2EmailTemplatesIDJSON](docs/emailtemplates/README.md#getv2emailtemplatesidjson) - Fetch an email template

### [Emails](docs/emails/README.md)

* [GetV2ActivitiesEmailsJSON](docs/emails/README.md#getv2activitiesemailsjson) - List emails
* [GetV2ActivitiesEmailsIDJSON](docs/emails/README.md#getv2activitiesemailsidjson) - Fetch an email

### [ExternalEmails](docs/externalemails/README.md)

* [PostV2ExternalEmailsJSON](docs/externalemails/README.md#postv2externalemailsjson) - Create an External Email

### [Groups](docs/groups/README.md)

* [GetV2GroupsJSON](docs/groups/README.md#getv2groupsjson) - List groups
* [GetV2GroupsIDJSON](docs/groups/README.md#getv2groupsidjson) - Fetch a group

### [Imports](docs/imports/README.md)

* [DeleteV2ImportsIDJSON](docs/imports/README.md#deletev2importsidjson) - Delete an import
* [GetV2ImportsJSON](docs/imports/README.md#getv2importsjson) - List imports
* [GetV2ImportsIDJSON](docs/imports/README.md#getv2importsidjson) - Fetch an import
* [PostV2ImportsJSON](docs/imports/README.md#postv2importsjson) - Create an import
* [PutV2ImportsIDJSON](docs/imports/README.md#putv2importsidjson) - Update an import

### [LiveFeedItems](docs/livefeeditems/README.md)

* [PostV2ThirdPartyLiveFeedItems](docs/livefeeditems/README.md#postv2thirdpartylivefeeditems) - Create a live feed item

### [LiveWebsiteTrackingParameters](docs/livewebsitetrackingparameters/README.md)

* [PostV2LiveWebsiteTrackingParametersJSON](docs/livewebsitetrackingparameters/README.md#postv2livewebsitetrackingparametersjson) - Create an Live Website Tracking Parameter

### [Me](docs/me/README.md)

* [GetV2MeJSON](docs/me/README.md#getv2mejson) - Fetch current user

### [MeetingSettings](docs/meetingsettings/README.md)

* [PutV2MeetingsSettingsIDJSON](docs/meetingsettings/README.md#putv2meetingssettingsidjson) - Update a meeting setting

### [Meetings](docs/meetings/README.md)

* [GetV2MeetingsJSON](docs/meetings/README.md#getv2meetingsjson) - List meetings
* [PutV2MeetingsIDJSON](docs/meetings/README.md#putv2meetingsidjson) - Update a meeting

### [MeetingsSettingsSearches](docs/meetingssettingssearches/README.md)

* [PostV2MeetingsSettingsSearchesJSON](docs/meetingssettingssearches/README.md#postv2meetingssettingssearchesjson) - List meeting settings

### [MimeEmailPayloads](docs/mimeemailpayloads/README.md)

* [GetV2MimeEmailPayloadsIDJSON](docs/mimeemailpayloads/README.md#getv2mimeemailpayloadsidjson) - Fetch the MIME content for email

### [Notes](docs/notes/README.md)

* [DeleteV2NotesIDJSON](docs/notes/README.md#deletev2notesidjson) - Delete a note
* [GetV2NotesJSON](docs/notes/README.md#getv2notesjson) - List notes
* [GetV2NotesIDJSON](docs/notes/README.md#getv2notesidjson) - Fetch a note
* [PostV2NotesJSON](docs/notes/README.md#postv2notesjson) - Create a note
* [PutV2NotesIDJSON](docs/notes/README.md#putv2notesidjson) - Update a note

### [OngoingActions](docs/ongoingactions/README.md)

* [PostV2OngoingActionsJSON](docs/ongoingactions/README.md#postv2ongoingactionsjson) - Create an ongoing action

### [PendingEmails](docs/pendingemails/README.md)

* [GetV2PendingEmailsJSON](docs/pendingemails/README.md#getv2pendingemailsjson) - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* [PutV2PendingEmailsIDJSON](docs/pendingemails/README.md#putv2pendingemailsidjson) - Updates the status of an email sent by an External Email Client

### [People](docs/people/README.md)

* [DeleteV2PeopleIDJSON](docs/people/README.md#deletev2peopleidjson) - Delete a person
* [GetV2PeopleJSON](docs/people/README.md#getv2peoplejson) - List people
* [GetV2PeopleIDJSON](docs/people/README.md#getv2peopleidjson) - Fetch a person
* [PostV2PeopleJSON](docs/people/README.md#postv2peoplejson) - Create a person
* [PutV2PeopleIDJSON](docs/people/README.md#putv2peopleidjson) - Update a person

### [PersonStages](docs/personstages/README.md)

* [DeleteV2PersonStagesIDJSON](docs/personstages/README.md#deletev2personstagesidjson) - Delete an person stage
* [GetV2PersonStagesJSON](docs/personstages/README.md#getv2personstagesjson) - List person stages
* [GetV2PersonStagesIDJSON](docs/personstages/README.md#getv2personstagesidjson) - Fetch a person stage
* [PostV2PersonStagesJSON](docs/personstages/README.md#postv2personstagesjson) - Create a person stage
* [PutV2PersonStagesIDJSON](docs/personstages/README.md#putv2personstagesidjson) - Update a person stage

### [PersonUpsert](docs/personupsert/README.md)

* [PostV2PersonUpsertsJSON](docs/personupsert/README.md#postv2personupsertsjson) - Upsert a person

### [PhoneNumberAssignments](docs/phonenumberassignments/README.md)

* [GetV2PhoneNumberAssignmentsJSON](docs/phonenumberassignments/README.md#getv2phonenumberassignmentsjson) - List phone number assignments
* [GetV2PhoneNumberAssignmentsIDJSON](docs/phonenumberassignments/README.md#getv2phonenumberassignmentsidjson) - Fetch a phone number assignment

### [RecordingSettings](docs/recordingsettings/README.md)

* [GetV2PhoneNumbersRecordingSettingsIDJSON](docs/recordingsettings/README.md#getv2phonenumbersrecordingsettingsidjson) - Fetch recording setting

### [Roles](docs/roles/README.md)

* [GetV2CustomRolesJSON](docs/roles/README.md#getv2customrolesjson) - List custom roles
* [GetV2CustomRolesIDJSON](docs/roles/README.md#getv2customrolesidjson) - Fetch a custom role

### [SavedListViews](docs/savedlistviews/README.md)

* [DeleteV2SavedListViewsIDJSON](docs/savedlistviews/README.md#deletev2savedlistviewsidjson) - Delete a saved list view
* [GetV2SavedListViewsJSON](docs/savedlistviews/README.md#getv2savedlistviewsjson) - List saved list views
* [GetV2SavedListViewsIDJSON](docs/savedlistviews/README.md#getv2savedlistviewsidjson) - Fetch a saved list view
* [PostV2SavedListViewsJSON](docs/savedlistviews/README.md#postv2savedlistviewsjson) - Create a saved list view
* [PutV2SavedListViewsIDJSON](docs/savedlistviews/README.md#putv2savedlistviewsidjson) - Update a saved list view

### [Steps](docs/steps/README.md)

* [GetV2StepsJSON](docs/steps/README.md#getv2stepsjson) - List steps
* [GetV2StepsIDJSON](docs/steps/README.md#getv2stepsidjson) - Fetch a step

### [Successes](docs/successes/README.md)

* [GetV2SuccessesJSON](docs/successes/README.md#getv2successesjson) - List successes

### [Tags](docs/tags/README.md)

* [GetV2TagsJSON](docs/tags/README.md#getv2tagsjson) - List team tags

### [Tasks](docs/tasks/README.md)

* [GetV2TasksJSON](docs/tasks/README.md#getv2tasksjson) - List tasks
* [GetV2TasksIDJSON](docs/tasks/README.md#getv2tasksidjson) - Fetch a task
* [PostV2TasksJSON](docs/tasks/README.md#postv2tasksjson) - Create a Task
* [PutV2TasksIDJSON](docs/tasks/README.md#putv2tasksidjson) - Update a Task

### [Team](docs/team/README.md)

* [GetV2TeamJSON](docs/team/README.md#getv2teamjson) - Fetch current team

### [TeamTemplateAttachments](docs/teamtemplateattachments/README.md)

* [GetV2TeamTemplateAttachmentsJSON](docs/teamtemplateattachments/README.md#getv2teamtemplateattachmentsjson) - List team template attachments

### [TeamTemplates](docs/teamtemplates/README.md)

* [GetV2TeamTemplatesJSON](docs/teamtemplates/README.md#getv2teamtemplatesjson) - List team templates
* [GetV2TeamTemplatesIDJSON](docs/teamtemplates/README.md#getv2teamtemplatesidjson) - Fetch a team template

### [Users](docs/users/README.md)

* [GetV2UsersJSON](docs/users/README.md#getv2usersjson) - List users
* [GetV2UsersIDJSON](docs/users/README.md#getv2usersidjson) - Fetch a user
* [PutV2UsersIDJSON](docs/users/README.md#putv2usersidjson) - Update a user

### [WebhookSubscriptions](docs/webhooksubscriptions/README.md)

* [DeleteV2WebhookSubscriptionsID](docs/webhooksubscriptions/README.md#deletev2webhooksubscriptionsid) - Delete a webhook subscription
* [GetV2WebhookSubscriptions](docs/webhooksubscriptions/README.md#getv2webhooksubscriptions) - List webhook subscriptions
* [GetV2WebhookSubscriptionsID](docs/webhooksubscriptions/README.md#getv2webhooksubscriptionsid) - Fetch a webhook subscription
* [PostV2WebhookSubscriptions](docs/webhooksubscriptions/README.md#postv2webhooksubscriptions) - Create a webhook subscription
* [PutV2WebhookSubscriptionsID](docs/webhooksubscriptions/README.md#putv2webhooksubscriptionsid) - Update a webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
