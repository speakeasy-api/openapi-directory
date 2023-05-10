# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountStagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountStagesJsonRequest();
    $request->ids = [
        592845,
        715190,
        844266,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 602763;
    $request->perPage = 857946;
    $request->sortBy = 'corrupti';
    $request->sortDirection = 'illum';
    $request->updatedAt = [
        'error',
        'deserunt',
    ];

    $response = $sdk->accountStages->getV2AccountStagesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountStages](docs/accountstages/README.md)

* [getV2AccountStagesJson](docs/accountstages/README.md#getv2accountstagesjson) - List account stages
* [getV2AccountStagesIdJson](docs/accountstages/README.md#getv2accountstagesidjson) - Fetch an account stage

### [accountTiers](docs/accounttiers/README.md)

* [getV2AccountTiersJson](docs/accounttiers/README.md#getv2accounttiersjson) - List Account Tiers
* [getV2AccountTiersIdJson](docs/accounttiers/README.md#getv2accounttiersidjson) - Fetch an account tier

### [accountUpsert](docs/accountupsert/README.md)

* [postV2AccountUpsertsJson](docs/accountupsert/README.md#postv2accountupsertsjson) - Upsert an account

### [accounts](docs/accounts/README.md)

* [deleteV2AccountsIdJson](docs/accounts/README.md#deletev2accountsidjson) - Delete an account
* [getV2AccountsJson](docs/accounts/README.md#getv2accountsjson) - List accounts
* [getV2AccountsIdJson](docs/accounts/README.md#getv2accountsidjson) - Fetch an account
* [postV2AccountsJson](docs/accounts/README.md#postv2accountsjson) - Create an account
* [putV2AccountsIdJson](docs/accounts/README.md#putv2accountsidjson) - Update an existing Account

### [actionDetailsCallInstructions](docs/actiondetailscallinstructions/README.md)

* [getV2ActionDetailsCallInstructionsJson](docs/actiondetailscallinstructions/README.md#getv2actiondetailscallinstructionsjson) - List call instructions
* [getV2ActionDetailsCallInstructionsIdJson](docs/actiondetailscallinstructions/README.md#getv2actiondetailscallinstructionsidjson) - Fetch a call instructions

### [actions](docs/actions/README.md)

* [getV2ActionsJson](docs/actions/README.md#getv2actionsjson) - List actions
* [getV2ActionsIdJson](docs/actions/README.md#getv2actionsidjson) - Fetch an action

### [activities](docs/activities/README.md)

* [postV2ActivitiesJson](docs/activities/README.md#postv2activitiesjson) - Create an activity

### [activityHistories](docs/activityhistories/README.md)

* [getV2ActivityHistories](docs/activityhistories/README.md#getv2activityhistories) - List Past Activities

### [bulkJobs](docs/bulkjobs/README.md)

* [getV2BulkJobs](docs/bulkjobs/README.md#getv2bulkjobs) - List bulk jobs
* [getV2BulkJobsId](docs/bulkjobs/README.md#getv2bulkjobsid) - Fetch a bulk job
* [postV2BulkJobs](docs/bulkjobs/README.md#postv2bulkjobs) - Create a bulk job
* [putV2BulkJobsId](docs/bulkjobs/README.md#putv2bulkjobsid) - Update a bulk job

### [bulkJobsJobData](docs/bulkjobsjobdata/README.md)

* [getV2BulkJobsBulkJobsIdJobData](docs/bulkjobsjobdata/README.md#getv2bulkjobsbulkjobsidjobdata) - List job data for a bulk job
* [postV2BulkJobsBulkJobsIdJobData](docs/bulkjobsjobdata/README.md#postv2bulkjobsbulkjobsidjobdata) - Create job data for a bulk job

### [bulkJobsResults](docs/bulkjobsresults/README.md)

* [getV2BulkJobsBulkJobsIdResults](docs/bulkjobsresults/README.md#getv2bulkjobsbulkjobsidresults) - List job data for a completed bulk job.

### [crmActivities](docs/crmactivities/README.md)

* [getV2CrmActivitiesJson](docs/crmactivities/README.md#getv2crmactivitiesjson) - List crm activities
* [getV2CrmActivitiesIdJson](docs/crmactivities/README.md#getv2crmactivitiesidjson) - Fetch a crm activity

### [crmActivityFields](docs/crmactivityfields/README.md)

* [getV2CrmActivityFieldsJson](docs/crmactivityfields/README.md#getv2crmactivityfieldsjson) - List crm activity fields

### [cadenceExports](docs/cadenceexports/README.md)

* [getV2CadenceExportsIdJson](docs/cadenceexports/README.md#getv2cadenceexportsidjson) - Export a cadence

### [cadenceImports](docs/cadenceimports/README.md)

* [postV2CadenceImportsJson](docs/cadenceimports/README.md#postv2cadenceimportsjson) - Import cadences from JSON

### [cadenceMemberships](docs/cadencememberships/README.md)

* [deleteV2CadenceMembershipsIdJson](docs/cadencememberships/README.md#deletev2cadencemembershipsidjson) - Delete a cadence membership
* [getV2CadenceMembershipsJson](docs/cadencememberships/README.md#getv2cadencemembershipsjson) - List cadence memberships
* [getV2CadenceMembershipsIdJson](docs/cadencememberships/README.md#getv2cadencemembershipsidjson) - Fetch a cadence membership
* [postV2CadenceMembershipsJson](docs/cadencememberships/README.md#postv2cadencemembershipsjson) - Create a cadence membership

### [cadences](docs/cadences/README.md)

* [getV2CadencesJson](docs/cadences/README.md#getv2cadencesjson) - List cadences
* [getV2CadencesIdJson](docs/cadences/README.md#getv2cadencesidjson) - Fetch a cadence

### [calendarEvents](docs/calendarevents/README.md)

* [getV2CalendarEvents](docs/calendarevents/README.md#getv2calendarevents) - List calendar events
* [postV2CalendarEventsUpsert](docs/calendarevents/README.md#postv2calendareventsupsert) - Upsert a calendar event

### [callDataRecords](docs/calldatarecords/README.md)

* [getV2CallDataRecordsJson](docs/calldatarecords/README.md#getv2calldatarecordsjson) - List call data records
* [getV2CallDataRecordsIdJson](docs/calldatarecords/README.md#getv2calldatarecordsidjson) - Fetch a call data record

### [callDispositions](docs/calldispositions/README.md)

* [getV2CallDispositionsJson](docs/calldispositions/README.md#getv2calldispositionsjson) - List call dispositions

### [callSentiments](docs/callsentiments/README.md)

* [getV2CallSentimentsJson](docs/callsentiments/README.md#getv2callsentimentsjson) - List call sentiments

### [callerIDs](docs/callerids/README.md)

* [getV2PhoneNumbersCallerIdsJson](docs/callerids/README.md#getv2phonenumberscalleridsjson) - List caller ids

### [calls](docs/calls/README.md)

* [getV2ActivitiesCallsJson](docs/calls/README.md#getv2activitiescallsjson) - List calls
* [getV2ActivitiesCallsIdJson](docs/calls/README.md#getv2activitiescallsidjson) - Fetch a call
* [postV2ActivitiesCallsJson](docs/calls/README.md#postv2activitiescallsjson) - Create a call

### [conversationsCalls](docs/conversationscalls/README.md)

* [postV2ConversationsCalls](docs/conversationscalls/README.md#postv2conversationscalls) - Create Conversations Call

### [crmUsers](docs/crmusers/README.md)

* [getV2CrmUsersJson](docs/crmusers/README.md#getv2crmusersjson) - List crm users

### [customFields](docs/customfields/README.md)

* [deleteV2CustomFieldsIdJson](docs/customfields/README.md#deletev2customfieldsidjson) - Delete a custom field
* [getV2CustomFieldsJson](docs/customfields/README.md#getv2customfieldsjson) - List custom fields
* [getV2CustomFieldsIdJson](docs/customfields/README.md#getv2customfieldsidjson) - Fetch a custom field
* [postV2CustomFieldsJson](docs/customfields/README.md#postv2customfieldsjson) - Create a custom field
* [putV2CustomFieldsIdJson](docs/customfields/README.md#putv2customfieldsidjson) - Update a custom field

### [emailTemplateAttachments](docs/emailtemplateattachments/README.md)

* [getV2EmailTemplateAttachmentsJson](docs/emailtemplateattachments/README.md#getv2emailtemplateattachmentsjson) - List email template attachments

### [emailTemplates](docs/emailtemplates/README.md)

* [getV2EmailTemplatesJson](docs/emailtemplates/README.md#getv2emailtemplatesjson) - List email templates
* [getV2EmailTemplatesIdJson](docs/emailtemplates/README.md#getv2emailtemplatesidjson) - Fetch an email template

### [emails](docs/emails/README.md)

* [getV2ActivitiesEmailsJson](docs/emails/README.md#getv2activitiesemailsjson) - List emails
* [getV2ActivitiesEmailsIdJson](docs/emails/README.md#getv2activitiesemailsidjson) - Fetch an email

### [externalEmails](docs/externalemails/README.md)

* [postV2ExternalEmailsJson](docs/externalemails/README.md#postv2externalemailsjson) - Create an External Email

### [groups](docs/groups/README.md)

* [getV2GroupsJson](docs/groups/README.md#getv2groupsjson) - List groups
* [getV2GroupsIdJson](docs/groups/README.md#getv2groupsidjson) - Fetch a group

### [imports](docs/imports/README.md)

* [deleteV2ImportsIdJson](docs/imports/README.md#deletev2importsidjson) - Delete an import
* [getV2ImportsJson](docs/imports/README.md#getv2importsjson) - List imports
* [getV2ImportsIdJson](docs/imports/README.md#getv2importsidjson) - Fetch an import
* [postV2ImportsJson](docs/imports/README.md#postv2importsjson) - Create an import
* [putV2ImportsIdJson](docs/imports/README.md#putv2importsidjson) - Update an import

### [liveFeedItems](docs/livefeeditems/README.md)

* [postV2ThirdPartyLiveFeedItems](docs/livefeeditems/README.md#postv2thirdpartylivefeeditems) - Create a live feed item

### [liveWebsiteTrackingParameters](docs/livewebsitetrackingparameters/README.md)

* [postV2LiveWebsiteTrackingParametersJson](docs/livewebsitetrackingparameters/README.md#postv2livewebsitetrackingparametersjson) - Create an Live Website Tracking Parameter

### [me](docs/me/README.md)

* [getV2MeJson](docs/me/README.md#getv2mejson) - Fetch current user

### [meetingSettings](docs/meetingsettings/README.md)

* [putV2MeetingsSettingsIdJson](docs/meetingsettings/README.md#putv2meetingssettingsidjson) - Update a meeting setting

### [meetings](docs/meetings/README.md)

* [getV2MeetingsJson](docs/meetings/README.md#getv2meetingsjson) - List meetings
* [putV2MeetingsIdJson](docs/meetings/README.md#putv2meetingsidjson) - Update a meeting

### [meetingsSettingsSearches](docs/meetingssettingssearches/README.md)

* [postV2MeetingsSettingsSearchesJson](docs/meetingssettingssearches/README.md#postv2meetingssettingssearchesjson) - List meeting settings

### [mimeEmailPayloads](docs/mimeemailpayloads/README.md)

* [getV2MimeEmailPayloadsIdJson](docs/mimeemailpayloads/README.md#getv2mimeemailpayloadsidjson) - Fetch the MIME content for email

### [notes](docs/notes/README.md)

* [deleteV2NotesIdJson](docs/notes/README.md#deletev2notesidjson) - Delete a note
* [getV2NotesJson](docs/notes/README.md#getv2notesjson) - List notes
* [getV2NotesIdJson](docs/notes/README.md#getv2notesidjson) - Fetch a note
* [postV2NotesJson](docs/notes/README.md#postv2notesjson) - Create a note
* [putV2NotesIdJson](docs/notes/README.md#putv2notesidjson) - Update a note

### [ongoingActions](docs/ongoingactions/README.md)

* [postV2OngoingActionsJson](docs/ongoingactions/README.md#postv2ongoingactionsjson) - Create an ongoing action

### [pendingEmails](docs/pendingemails/README.md)

* [getV2PendingEmailsJson](docs/pendingemails/README.md#getv2pendingemailsjson) - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* [putV2PendingEmailsIdJson](docs/pendingemails/README.md#putv2pendingemailsidjson) - Updates the status of an email sent by an External Email Client

### [people](docs/people/README.md)

* [deleteV2PeopleIdJson](docs/people/README.md#deletev2peopleidjson) - Delete a person
* [getV2PeopleJson](docs/people/README.md#getv2peoplejson) - List people
* [getV2PeopleIdJson](docs/people/README.md#getv2peopleidjson) - Fetch a person
* [postV2PeopleJson](docs/people/README.md#postv2peoplejson) - Create a person
* [putV2PeopleIdJson](docs/people/README.md#putv2peopleidjson) - Update a person

### [personStages](docs/personstages/README.md)

* [deleteV2PersonStagesIdJson](docs/personstages/README.md#deletev2personstagesidjson) - Delete an person stage
* [getV2PersonStagesJson](docs/personstages/README.md#getv2personstagesjson) - List person stages
* [getV2PersonStagesIdJson](docs/personstages/README.md#getv2personstagesidjson) - Fetch a person stage
* [postV2PersonStagesJson](docs/personstages/README.md#postv2personstagesjson) - Create a person stage
* [putV2PersonStagesIdJson](docs/personstages/README.md#putv2personstagesidjson) - Update a person stage

### [personUpsert](docs/personupsert/README.md)

* [postV2PersonUpsertsJson](docs/personupsert/README.md#postv2personupsertsjson) - Upsert a person

### [phoneNumberAssignments](docs/phonenumberassignments/README.md)

* [getV2PhoneNumberAssignmentsJson](docs/phonenumberassignments/README.md#getv2phonenumberassignmentsjson) - List phone number assignments
* [getV2PhoneNumberAssignmentsIdJson](docs/phonenumberassignments/README.md#getv2phonenumberassignmentsidjson) - Fetch a phone number assignment

### [recordingSettings](docs/recordingsettings/README.md)

* [getV2PhoneNumbersRecordingSettingsIdJson](docs/recordingsettings/README.md#getv2phonenumbersrecordingsettingsidjson) - Fetch recording setting

### [roles](docs/roles/README.md)

* [getV2CustomRolesJson](docs/roles/README.md#getv2customrolesjson) - List custom roles
* [getV2CustomRolesIdJson](docs/roles/README.md#getv2customrolesidjson) - Fetch a custom role

### [savedListViews](docs/savedlistviews/README.md)

* [deleteV2SavedListViewsIdJson](docs/savedlistviews/README.md#deletev2savedlistviewsidjson) - Delete a saved list view
* [getV2SavedListViewsJson](docs/savedlistviews/README.md#getv2savedlistviewsjson) - List saved list views
* [getV2SavedListViewsIdJson](docs/savedlistviews/README.md#getv2savedlistviewsidjson) - Fetch a saved list view
* [postV2SavedListViewsJson](docs/savedlistviews/README.md#postv2savedlistviewsjson) - Create a saved list view
* [putV2SavedListViewsIdJson](docs/savedlistviews/README.md#putv2savedlistviewsidjson) - Update a saved list view

### [steps](docs/steps/README.md)

* [getV2StepsJson](docs/steps/README.md#getv2stepsjson) - List steps
* [getV2StepsIdJson](docs/steps/README.md#getv2stepsidjson) - Fetch a step

### [successes](docs/successes/README.md)

* [getV2SuccessesJson](docs/successes/README.md#getv2successesjson) - List successes

### [tags](docs/tags/README.md)

* [getV2TagsJson](docs/tags/README.md#getv2tagsjson) - List team tags

### [tasks](docs/tasks/README.md)

* [getV2TasksJson](docs/tasks/README.md#getv2tasksjson) - List tasks
* [getV2TasksIdJson](docs/tasks/README.md#getv2tasksidjson) - Fetch a task
* [postV2TasksJson](docs/tasks/README.md#postv2tasksjson) - Create a Task
* [putV2TasksIdJson](docs/tasks/README.md#putv2tasksidjson) - Update a Task

### [team](docs/team/README.md)

* [getV2TeamJson](docs/team/README.md#getv2teamjson) - Fetch current team

### [teamTemplateAttachments](docs/teamtemplateattachments/README.md)

* [getV2TeamTemplateAttachmentsJson](docs/teamtemplateattachments/README.md#getv2teamtemplateattachmentsjson) - List team template attachments

### [teamTemplates](docs/teamtemplates/README.md)

* [getV2TeamTemplatesJson](docs/teamtemplates/README.md#getv2teamtemplatesjson) - List team templates
* [getV2TeamTemplatesIdJson](docs/teamtemplates/README.md#getv2teamtemplatesidjson) - Fetch a team template

### [users](docs/users/README.md)

* [getV2UsersJson](docs/users/README.md#getv2usersjson) - List users
* [getV2UsersIdJson](docs/users/README.md#getv2usersidjson) - Fetch a user
* [putV2UsersIdJson](docs/users/README.md#putv2usersidjson) - Update a user

### [webhookSubscriptions](docs/webhooksubscriptions/README.md)

* [deleteV2WebhookSubscriptionsId](docs/webhooksubscriptions/README.md#deletev2webhooksubscriptionsid) - Delete a webhook subscription
* [getV2WebhookSubscriptions](docs/webhooksubscriptions/README.md#getv2webhooksubscriptions) - List webhook subscriptions
* [getV2WebhookSubscriptionsId](docs/webhooksubscriptions/README.md#getv2webhooksubscriptionsid) - Fetch a webhook subscription
* [postV2WebhookSubscriptions](docs/webhooksubscriptions/README.md#postv2webhooksubscriptions) - Create a webhook subscription
* [putV2WebhookSubscriptionsId](docs/webhooksubscriptions/README.md#putv2webhooksubscriptionsid) - Update a webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
