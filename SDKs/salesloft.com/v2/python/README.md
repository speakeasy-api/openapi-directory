# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/salesloft.com/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetV2AccountStagesJSONRequest(
    ids=[
        592845,
        715190,
        844266,
    ],
    include_paging_counts=False,
    limit_paging_counts=False,
    page=602763,
    per_page=857946,
    sort_by="corrupti",
    sort_direction="illum",
    updated_at=[
        "error",
        "deserunt",
    ],
)
    
res = s.account_stages.get_v2_account_stages_json(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account_stages

* `get_v2_account_stages_json` - List account stages
* `get_v2_account_stages_id_json` - Fetch an account stage

### account_tiers

* `get_v2_account_tiers_json` - List Account Tiers
* `get_v2_account_tiers_id_json` - Fetch an account tier

### account_upsert

* `post_v2_account_upserts_json` - Upsert an account

### accounts

* `delete_v2_accounts_id_json` - Delete an account
* `get_v2_accounts_json` - List accounts
* `get_v2_accounts_id_json` - Fetch an account
* `post_v2_accounts_json` - Create an account
* `put_v2_accounts_id_json` - Update an existing Account

### action_details_call_instructions

* `get_v2_action_details_call_instructions_json` - List call instructions
* `get_v2_action_details_call_instructions_id_json` - Fetch a call instructions

### actions

* `get_v2_actions_json` - List actions
* `get_v2_actions_id_json` - Fetch an action

### activities

* `post_v2_activities_json` - Create an activity

### activity_histories

* `get_v2_activity_histories` - List Past Activities

### bulk_jobs

* `get_v2_bulk_jobs` - List bulk jobs
* `get_v2_bulk_jobs_id_` - Fetch a bulk job
* `post_v2_bulk_jobs` - Create a bulk job
* `put_v2_bulk_jobs_id_` - Update a bulk job

### bulk_jobs_job_data

* `get_v2_bulk_jobs_bulk_jobs_id_job_data` - List job data for a bulk job
* `post_v2_bulk_jobs_bulk_jobs_id_job_data` - Create job data for a bulk job

### bulk_jobs_results

* `get_v2_bulk_jobs_bulk_jobs_id_results` - List job data for a completed bulk job.

### crm_activities

* `get_v2_crm_activities_json` - List crm activities
* `get_v2_crm_activities_id_json` - Fetch a crm activity

### crm_activity_fields

* `get_v2_crm_activity_fields_json` - List crm activity fields

### cadence_exports

* `get_v2_cadence_exports_id_json` - Export a cadence

### cadence_imports

* `post_v2_cadence_imports_json` - Import cadences from JSON

### cadence_memberships

* `delete_v2_cadence_memberships_id_json` - Delete a cadence membership
* `get_v2_cadence_memberships_json` - List cadence memberships
* `get_v2_cadence_memberships_id_json` - Fetch a cadence membership
* `post_v2_cadence_memberships_json` - Create a cadence membership

### cadences

* `get_v2_cadences_json` - List cadences
* `get_v2_cadences_id_json` - Fetch a cadence

### calendar_events

* `get_v2_calendar_events` - List calendar events
* `post_v2_calendar_events_upsert` - Upsert a calendar event

### call_data_records

* `get_v2_call_data_records_json` - List call data records
* `get_v2_call_data_records_id_json` - Fetch a call data record

### call_dispositions

* `get_v2_call_dispositions_json` - List call dispositions

### call_sentiments

* `get_v2_call_sentiments_json` - List call sentiments

### caller_i_ds

* `get_v2_phone_numbers_caller_ids_json` - List caller ids

### calls

* `get_v2_activities_calls_json` - List calls
* `get_v2_activities_calls_id_json` - Fetch a call
* `post_v2_activities_calls_json` - Create a call

### conversations_calls

* `post_v2_conversations_calls` - Create Conversations Call

### crm_users

* `get_v2_crm_users_json` - List crm users

### custom_fields

* `delete_v2_custom_fields_id_json` - Delete a custom field
* `get_v2_custom_fields_json` - List custom fields
* `get_v2_custom_fields_id_json` - Fetch a custom field
* `post_v2_custom_fields_json` - Create a custom field
* `put_v2_custom_fields_id_json` - Update a custom field

### email_template_attachments

* `get_v2_email_template_attachments_json` - List email template attachments

### email_templates

* `get_v2_email_templates_json` - List email templates
* `get_v2_email_templates_id_json` - Fetch an email template

### emails

* `get_v2_activities_emails_json` - List emails
* `get_v2_activities_emails_id_json` - Fetch an email

### external_emails

* `post_v2_external_emails_json` - Create an External Email

### groups

* `get_v2_groups_json` - List groups
* `get_v2_groups_id_json` - Fetch a group

### imports

* `delete_v2_imports_id_json` - Delete an import
* `get_v2_imports_json` - List imports
* `get_v2_imports_id_json` - Fetch an import
* `post_v2_imports_json` - Create an import
* `put_v2_imports_id_json` - Update an import

### live_feed_items

* `post_v2_third_party_live_feed_items` - Create a live feed item

### live_website_tracking_parameters

* `post_v2_live_website_tracking_parameters_json` - Create an Live Website Tracking Parameter

### me

* `get_v2_me_json` - Fetch current user

### meeting_settings

* `put_v2_meetings_settings_id_json` - Update a meeting setting

### meetings

* `get_v2_meetings_json` - List meetings
* `put_v2_meetings_id_json` - Update a meeting

### meetings_settings_searches

* `post_v2_meetings_settings_searches_json` - List meeting settings

### mime_email_payloads

* `get_v2_mime_email_payloads_id_json` - Fetch the MIME content for email

### notes

* `delete_v2_notes_id_json` - Delete a note
* `get_v2_notes_json` - List notes
* `get_v2_notes_id_json` - Fetch a note
* `post_v2_notes_json` - Create a note
* `put_v2_notes_id_json` - Update a note

### ongoing_actions

* `post_v2_ongoing_actions_json` - Create an ongoing action

### pending_emails

* `get_v2_pending_emails_json` - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* `put_v2_pending_emails_id_json` - Updates the status of an email sent by an External Email Client

### people

* `delete_v2_people_id_json` - Delete a person
* `get_v2_people_json` - List people
* `get_v2_people_id_json` - Fetch a person
* `post_v2_people_json` - Create a person
* `put_v2_people_id_json` - Update a person

### person_stages

* `delete_v2_person_stages_id_json` - Delete an person stage
* `get_v2_person_stages_json` - List person stages
* `get_v2_person_stages_id_json` - Fetch a person stage
* `post_v2_person_stages_json` - Create a person stage
* `put_v2_person_stages_id_json` - Update a person stage

### person_upsert

* `post_v2_person_upserts_json` - Upsert a person

### phone_number_assignments

* `get_v2_phone_number_assignments_json` - List phone number assignments
* `get_v2_phone_number_assignments_id_json` - Fetch a phone number assignment

### recording_settings

* `get_v2_phone_numbers_recording_settings_id_json` - Fetch recording setting

### saved_list_views

* `delete_v2_saved_list_views_id_json` - Delete a saved list view
* `get_v2_saved_list_views_json` - List saved list views
* `get_v2_saved_list_views_id_json` - Fetch a saved list view
* `post_v2_saved_list_views_json` - Create a saved list view
* `put_v2_saved_list_views_id_json` - Update a saved list view

### steps

* `get_v2_steps_json` - List steps
* `get_v2_steps_id_json` - Fetch a step

### successes

* `get_v2_successes_json` - List successes

### tags

* `get_v2_tags_json` - List team tags

### tasks

* `get_v2_tasks_json` - List tasks
* `get_v2_tasks_id_json` - Fetch a task
* `post_v2_tasks_json` - Create a Task
* `put_v2_tasks_id_json` - Update a Task

### team

* `get_v2_team_json` - Fetch current team

### team_template_attachments

* `get_v2_team_template_attachments_json` - List team template attachments

### team_templates

* `get_v2_team_templates_json` - List team templates
* `get_v2_team_templates_id_json` - Fetch a team template

### users

* `get_v2_users_json` - List users
* `get_v2_users_id_json` - Fetch a user

### webhook_subscriptions

* `delete_v2_webhook_subscriptions_id_` - Delete a webhook subscription
* `get_v2_webhook_subscriptions` - List webhook subscriptions
* `get_v2_webhook_subscriptions_id_` - Fetch a webhook subscription
* `post_v2_webhook_subscriptions` - Create a webhook subscription
* `put_v2_webhook_subscriptions_id_` - Update a webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
