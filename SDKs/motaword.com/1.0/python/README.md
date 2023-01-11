# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        mwo_auth=shared.SchemeMwoAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteCacheRequest(
    path_params=operations.DeleteCachePathParams(
        key="quia",
    ),
)
    
res = s.delete_cache(req)

if res.operation_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_cache` - Clear cache by key

### Activity

* `get_activities` - Get a list of realtime activities.
* `get_activity` - Get a single realtime activity.
* `get_activity_comments` - Get a list of comments belonging to this activity.
* `get_comments` - Get a list of activity comments throughout the whole project.
* `get_sales_activities` - Get sales activities for a project
* `insert_sales_activity` - Insert sales activity for a project
* `submit_comment` - Submit a comment to an activity.

### Async

* `download_async` - Download async request files

### Auth

* `get_access_token` - Retrieve an access token to interact with the API.

### Blog

* `get_blog_posts` - Get blog posts - ordered by created desc by default

### Commission

* `get_commissions` - Returns a commission list of current client.
* `get_commissions_by_filter` - Returns a commission list of current client.

### ContinuousProject

* `collect_analytics` - Save/collect analytics data from Active widget
* `create_active_widget` - Create a new Active widget. This does not create a new Active project, just a separate widget.
* `create_continuous_project` - Create a new continuous project
* `delete_active_widget` - Delete a single widget for this Active project
* `delete_continuous_project` - Delete single continuous project
* `get_active_widget` - Get a single widget for this Active project
* `get_active_widgets` - Get widgets for this Active project
* `get_analytics_token` - Get JWT token to be used in analytics dashboards
* `get_continuous_project` - Get single continuous project
* `get_continuous_projects` - Get a list of continuous projects
* `reset_active_widget_token` - Resets the access token of the Active widget.
* `translate` - Instantly translate your content with your existing TM and MT resources.
* `update_active_widget` - Update Active widget settings.
* `update_continuous_project` - Update continuous project

### Corporate

* `get_available_corporate_permissions` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `get_available_corporate_permissions_by_id` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `get_corporate` - Get details of my corporate account
* `get_corporate_by_id` - Get details of this corporate account
* `get_corporate_user_groups` - Get a list of user groups for my corporate account
* `get_corporate_user_groups_by_id` - Get a list of user groups for this corporate account
* `get_corporate_users` - Get a list of users for my corporate account
* `get_corporate_users_by_id` - Get a list of users for this corporate account
* `save_corporate_user` - Create or update a corporate user
* `save_corporate_user_group` - Create or update a corporate user group
* `save_corporate_user_group_by_id` - Create or update a corporate user group for this corporate account

### Document

* `get_documents` - Get a list of your documents
* `get_similar_documents` - Find documents similar to this document.
* `get_user_documents` - Get a list of your documents
* `regenerate_preview` - Regenerate preview and return preview URL for given file
* `use_as_draft` - Use the translation of given source manual document as manual draft source for the given target document.
* `use_as_regular` - Use the translation of the given manual document as a regular file.

### Glossary

* `create_glossary` - Upload a new glossary
* `delete_glossary` - Delete the glossary
* `download_global_glossary` - Download the global glossary.
* `download_glossary` - Download a glossary
* `get_glossaries` - Get a list of glossaries
* `get_glossary` - Get single glossary
* `update_global_glossary` - Create or update the global glossary.
* `update_glossary` - Update the glossary.

### Invitation

* `get_invitation_vendors` - Get vendor list for compiled invitation needs

### Pam

* `get_client_profile_for_pam` - Get the Pam profile of a client for this client ID

### Payment

* `delete_credit_card` - Delete credit card.
* `get_credit_card` - Get credit card by cardId
* `reset_card_payment_code` - Reset credit card payment code.
* `reset_corporate_payment_code` - Reset corporate credit card payment code.
* `toggle_corporate_auto_charge` - Toggle corporate auto charge option.

### Project

* `cancel_project` - Cancel your translation project
* `create_project` - Get a new quote
* `delete_project` - Delete a project
* `deliver_project` - Deliver project
* `download` - Download the latest translation package.
* `download_html_invoice` - Download invoice as hmtl
* `download_language` - Download the latest translation package.
* `download_pdf_invoice` - Download invoice as pdf
* `get_invoice` - Get invoice details
* `get_progress` - Get project progress
* `get_project` - Get single project
* `get_project_vendors` - Get a list of vendors.
* `get_projects` - Get a list of your projects
* `get_quote_id_from_internal_id` - Get Quote Id
* `get_vendor_projects` - Get a list of your vendor projects
* `get_vendor_projects_by_user_id` - Get a list of user/vendor projects
* `launch_project` - Launch your translation project
* `package` - Package the translation of all languages to be downloaded.
* `package_language` - Package the translation of a specific target language to be downloaded.
* `recreate_project` - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* `submit_project_reports` - Submit reports for a project
* `track_package` - Track the status of translation packaging.
* `trigger_callback` - Trigger a call to your callback URL related to this project.
* `update_project` - Update project language pairs

### Project Document

* `create_project_document` - Upload a new document
* `delete_project_document` - Delete the document
* `download_project_document` - Download a document
* `download_translated_document_for_language` - Download single translated file
* `get_project_document` - Get single document
* `get_project_documents` - Get a list of documents
* `update_project_document` - Update the document.

### Project Webhooks

* `delete_project_webhook` - Delete project webhooks
* `get_project_webhooks` - Get project information (includes callback_url for webhook)
* `post_project_webhook` - Update project webhook URL
* `update_project_webhook` - Update project webhook URL

### Report

* `get_language_pairs_report` - Returns a report of language pairs.
* `get_projects_report` - Returns a report of corporate account users.
* `get_users_report` - Returns a report of corporate account users.

### Search

* `check_documents_reindex` - Check reindex status of the client source and translation documents.
* `reindex_documents` - Reindex for search all of the client source and translation documents.
* `search_everywhere` - Search everywhere! Including projects, documents, translations...

### Static

* `get_endpoints` - Available endpoints
* `get_formats` - Get a list of supported formats
* `get_languages` - Get a list of supported languages
* `get_swagger_json` - Get Swagger JSON

### Stats

* `get_commission_stats` - Returns the total commissions stats.
* `get_commission_stats_by_filter` - Returns the total commissions stats by report filter.
* `get_popular_pairs` - Returns the language pairs that you have ordered most.
* `get_project_stats` - Returns your project statistics.
* `get_string_stats` - Returns your string statistics.

### Strings

* `get_project_strings` - Get a list of strings and its translations in the project.
* `get_project_strings_for_language` - Get a list of strings and its translations in the project for this target language in the project.
* `get_strings` - Get a list of client/corporate strings (20 per page)
* `package_project_translation_memory` - Get the translation memory of a project in TMX format
* `package_project_translation_memory_for_language` - Get the translation memory of a project in TMX format
* `package_project_translation_memory_for_language_status` - If package call was async, check the status of the request
* `package_project_translation_memory_status` - If package call was async, check the status of the request
* `package_user_translation_memory` - Get the translation memory of a client or corporate in TMX format
* `package_user_translation_memory_for_language_status` - If package call was async, check the status of the request
* `post_strings` - Translate Strings with MT
* `update_translation_memory_unit` - Update translation

### Style Guide

* `create_style_guide` - Upload a new style guide
* `delete_style_guide` - Delete the style guide
* `download_global_style_guide` - Download the global style guide.
* `download_style_guide` - Download a style guide
* `get_style_guide` - Get single style guide
* `get_style_guides` - Get a list of style guides
* `update_global_style_guide` - Create or update the global style guide.
* `update_style_guide` - Update the style guide.

### Translations

* `get_document_translations` - Get a list of strings and its translations in the document.
* `get_document_translations_for_language` - Get a list of strings and its translations in the document for this target language of the project.
* `get_project_translations` - Deprecated. Use /projects/{projectId}/strings instead.
* `get_project_translations_for_language` - Deprecated. use /projects/{projectId}/strings/{language} instead.

### User

* `approve_vendor_application`
* `delete_account` - Delete requester account
* `delete_user_account` - Delete requester account
* `downgrade_proofreader`
* `downgrade_user_proofreader`
* `freeze_account` - Freeze requester account for project notifications
* `freeze_user_account` - Freeze requester account for project notifications
* `get_earnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `get_me` - Get your user information, including client or vendor specific info.
* `get_payment_info` - Get your payment Info
* `get_permissions` - Returns a list of permissions that this user is authorized for.
* `get_responsivity` - Returns your vendor responsivity stats
* `get_stats` - Returns your client and vendor statistics. This used to be called "summary" (\@deprecated).
* `get_this_user_groups` - Returns a list of user groups that this user belongs to.
* `get_user` - Get user information, including client or vendor specific info.
* `get_user_earnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `get_user_groups` - Returns a list of user groups that this user belongs to.
* `get_user_payment_info` - Get user payment Info
* `get_user_permissions` - Returns a list of permissions that this user is authorized for.
* `get_user_popular_pairs` - Returns the language pairs that the user has ordered most.
* `get_user_project_stats` - Returns a user's project statistics.
* `get_user_responsivity` - Returns a user's vendor responsivity stats
* `get_user_stats` - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* `get_users` - Get a list of platform users
* `log_location` - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* `make_proofreader`
* `make_user_proofreader`
* `reject_vendor_application`
* `send_email_confirmation` - Sends email confirmation email for current user
* `send_password_reminder` - Sends password reset email to the user's registered email address
* `send_user_email_confirmation` - Sends email confirmation email for a user
* `subscribe_notification`
* `subscribe_user_notification`
* `suspend_user`
* `unfreeze_account` - Unfreeze requester account for project notifications
* `unfreeze_user_account` - Unfreeze requester account for project notifications
* `unsubscribe_notification`
* `unsubscribe_user_notification`
* `update_me` - Update your user information.
* `update_password` - Update user password. Password should contain at least one uppercase, lowercase character and one number
* `update_payment_info` - Update payment info
* `update_user`
* `update_user_payment_info` - Update user payment info
* `upload_profile_picture`
* `upload_user_profile_picture`

### Vendor

* `get_available_vendors` - Get a list of vendors available for the criteria given

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
