# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/salesloft.com/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/salesloft.com/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetV2AccountStagesJsonRequest,
  GetV2AccountStagesJsonResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV2AccountStagesJsonRequest = {
  ids: [
    592845,
    715190,
    844266,
  ],
  includePagingCounts: false,
  limitPagingCounts: false,
  page: 602763,
  perPage: 857946,
  sortBy: "corrupti",
  sortDirection: "illum",
  updatedAt: [
    "error",
    "deserunt",
  ],
};

sdk.accountStages.getV2AccountStagesJson(req).then((res: GetV2AccountStagesJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accountStages

* `getV2AccountStagesJson` - List account stages
* `getV2AccountStagesIdJson` - Fetch an account stage

### accountTiers

* `getV2AccountTiersJson` - List Account Tiers
* `getV2AccountTiersIdJson` - Fetch an account tier

### accountUpsert

* `postV2AccountUpsertsJson` - Upsert an account

### accounts

* `deleteV2AccountsIdJson` - Delete an account
* `getV2AccountsJson` - List accounts
* `getV2AccountsIdJson` - Fetch an account
* `postV2AccountsJson` - Create an account
* `putV2AccountsIdJson` - Update an existing Account

### actionDetailsCallInstructions

* `getV2ActionDetailsCallInstructionsJson` - List call instructions
* `getV2ActionDetailsCallInstructionsIdJson` - Fetch a call instructions

### actions

* `getV2ActionsJson` - List actions
* `getV2ActionsIdJson` - Fetch an action

### activities

* `postV2ActivitiesJson` - Create an activity

### activityHistories

* `getV2ActivityHistories` - List Past Activities

### bulkJobs

* `getV2BulkJobs` - List bulk jobs
* `getV2BulkJobsId` - Fetch a bulk job
* `postV2BulkJobs` - Create a bulk job
* `putV2BulkJobsId` - Update a bulk job

### bulkJobsJobData

* `getV2BulkJobsBulkJobsIdJobData` - List job data for a bulk job
* `postV2BulkJobsBulkJobsIdJobData` - Create job data for a bulk job

### bulkJobsResults

* `getV2BulkJobsBulkJobsIdResults` - List job data for a completed bulk job.

### crmActivities

* `getV2CrmActivitiesJson` - List crm activities
* `getV2CrmActivitiesIdJson` - Fetch a crm activity

### crmActivityFields

* `getV2CrmActivityFieldsJson` - List crm activity fields

### cadenceExports

* `getV2CadenceExportsIdJson` - Export a cadence

### cadenceImports

* `postV2CadenceImportsJson` - Import cadences from JSON

### cadenceMemberships

* `deleteV2CadenceMembershipsIdJson` - Delete a cadence membership
* `getV2CadenceMembershipsJson` - List cadence memberships
* `getV2CadenceMembershipsIdJson` - Fetch a cadence membership
* `postV2CadenceMembershipsJson` - Create a cadence membership

### cadences

* `getV2CadencesJson` - List cadences
* `getV2CadencesIdJson` - Fetch a cadence

### calendarEvents

* `getV2CalendarEvents` - List calendar events
* `postV2CalendarEventsUpsert` - Upsert a calendar event

### callDataRecords

* `getV2CallDataRecordsJson` - List call data records
* `getV2CallDataRecordsIdJson` - Fetch a call data record

### callDispositions

* `getV2CallDispositionsJson` - List call dispositions

### callSentiments

* `getV2CallSentimentsJson` - List call sentiments

### callerIDs

* `getV2PhoneNumbersCallerIdsJson` - List caller ids

### calls

* `getV2ActivitiesCallsJson` - List calls
* `getV2ActivitiesCallsIdJson` - Fetch a call
* `postV2ActivitiesCallsJson` - Create a call

### conversationsCalls

* `postV2ConversationsCalls` - Create Conversations Call

### crmUsers

* `getV2CrmUsersJson` - List crm users

### customFields

* `deleteV2CustomFieldsIdJson` - Delete a custom field
* `getV2CustomFieldsJson` - List custom fields
* `getV2CustomFieldsIdJson` - Fetch a custom field
* `postV2CustomFieldsJson` - Create a custom field
* `putV2CustomFieldsIdJson` - Update a custom field

### emailTemplateAttachments

* `getV2EmailTemplateAttachmentsJson` - List email template attachments

### emailTemplates

* `getV2EmailTemplatesJson` - List email templates
* `getV2EmailTemplatesIdJson` - Fetch an email template

### emails

* `getV2ActivitiesEmailsJson` - List emails
* `getV2ActivitiesEmailsIdJson` - Fetch an email

### externalEmails

* `postV2ExternalEmailsJson` - Create an External Email

### groups

* `getV2GroupsJson` - List groups
* `getV2GroupsIdJson` - Fetch a group

### imports

* `deleteV2ImportsIdJson` - Delete an import
* `getV2ImportsJson` - List imports
* `getV2ImportsIdJson` - Fetch an import
* `postV2ImportsJson` - Create an import
* `putV2ImportsIdJson` - Update an import

### liveFeedItems

* `postV2ThirdPartyLiveFeedItems` - Create a live feed item

### liveWebsiteTrackingParameters

* `postV2LiveWebsiteTrackingParametersJson` - Create an Live Website Tracking Parameter

### me

* `getV2MeJson` - Fetch current user

### meetingSettings

* `putV2MeetingsSettingsIdJson` - Update a meeting setting

### meetings

* `getV2MeetingsJson` - List meetings
* `putV2MeetingsIdJson` - Update a meeting

### meetingsSettingsSearches

* `postV2MeetingsSettingsSearchesJson` - List meeting settings

### mimeEmailPayloads

* `getV2MimeEmailPayloadsIdJson` - Fetch the MIME content for email

### notes

* `deleteV2NotesIdJson` - Delete a note
* `getV2NotesJson` - List notes
* `getV2NotesIdJson` - Fetch a note
* `postV2NotesJson` - Create a note
* `putV2NotesIdJson` - Update a note

### ongoingActions

* `postV2OngoingActionsJson` - Create an ongoing action

### pendingEmails

* `getV2PendingEmailsJson` - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* `putV2PendingEmailsIdJson` - Updates the status of an email sent by an External Email Client

### people

* `deleteV2PeopleIdJson` - Delete a person
* `getV2PeopleJson` - List people
* `getV2PeopleIdJson` - Fetch a person
* `postV2PeopleJson` - Create a person
* `putV2PeopleIdJson` - Update a person

### personStages

* `deleteV2PersonStagesIdJson` - Delete an person stage
* `getV2PersonStagesJson` - List person stages
* `getV2PersonStagesIdJson` - Fetch a person stage
* `postV2PersonStagesJson` - Create a person stage
* `putV2PersonStagesIdJson` - Update a person stage

### personUpsert

* `postV2PersonUpsertsJson` - Upsert a person

### phoneNumberAssignments

* `getV2PhoneNumberAssignmentsJson` - List phone number assignments
* `getV2PhoneNumberAssignmentsIdJson` - Fetch a phone number assignment

### recordingSettings

* `getV2PhoneNumbersRecordingSettingsIdJson` - Fetch recording setting

### savedListViews

* `deleteV2SavedListViewsIdJson` - Delete a saved list view
* `getV2SavedListViewsJson` - List saved list views
* `getV2SavedListViewsIdJson` - Fetch a saved list view
* `postV2SavedListViewsJson` - Create a saved list view
* `putV2SavedListViewsIdJson` - Update a saved list view

### steps

* `getV2StepsJson` - List steps
* `getV2StepsIdJson` - Fetch a step

### successes

* `getV2SuccessesJson` - List successes

### tags

* `getV2TagsJson` - List team tags

### tasks

* `getV2TasksJson` - List tasks
* `getV2TasksIdJson` - Fetch a task
* `postV2TasksJson` - Create a Task
* `putV2TasksIdJson` - Update a Task

### team

* `getV2TeamJson` - Fetch current team

### teamTemplateAttachments

* `getV2TeamTemplateAttachmentsJson` - List team template attachments

### teamTemplates

* `getV2TeamTemplatesJson` - List team templates
* `getV2TeamTemplatesIdJson` - Fetch a team template

### users

* `getV2UsersJson` - List users
* `getV2UsersIdJson` - Fetch a user

### webhookSubscriptions

* `deleteV2WebhookSubscriptionsId` - Delete a webhook subscription
* `getV2WebhookSubscriptions` - List webhook subscriptions
* `getV2WebhookSubscriptionsId` - Fetch a webhook subscription
* `postV2WebhookSubscriptions` - Create a webhook subscription
* `putV2WebhookSubscriptionsId` - Update a webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

