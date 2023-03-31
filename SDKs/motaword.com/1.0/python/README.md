# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/motaword.com/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        mwo_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.DeleteCacheRequest(
    key="corrupti",
)
    
res = s.delete_cache(req)

if res.operation_status is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `delete_cache` - Clear cache by key

### activity

* `get_activities` - Monitor project activities
* `get_activity` - View an activity
* `get_activity_comments` - View activity comments
* `get_comments` - View all project comments
* `get_sales_activities` - Get sales activities for a project
* `insert_sales_activity` - Insert sales activity for a project
* `submit_comment_json` - Submit comment to an activity
* `submit_comment_multipart` - Submit comment to an activity

### async_

* `download_async` - Download result of an async operation

### auth

* `get_access_token` - Retrieve an access token

### blog

* `get_blog_posts` - Get blog posts - ordered by created desc by default

### commission

* `get_commissions` - Returns a commission list of current client.
* `get_commissions_by_filter` - Returns a commission list of current client.

### continuous_project

* `add_document` - Add a new document to your continuous project
* `collect_analytics` - Save/collect analytics data from Active widget
* `complete` - Complete continuous project
* `complete_continuous_document` - Complete a continuous project document
* `complete_language` - Complete continuous project language
* `create_active_widget` - Create a new Active widget
* `create_continuous_project` - Create a continuous project
* `create_subscription` - Create subscription for continuous project
* `delete_active_widget` - Delete a single widget for this Active project
* `delete_continuous_project` - Delete a continuous project
* `delete_subscription` - Delete subscription for continuous project
* `get_active_widget` - View an Active widget
* `get_active_widgets` - View Active widgets
* `get_analytics_token` - Get JWT token to be used in analytics dashboards
* `get_continuous_project` - View a continuous project
* `get_continuous_project_document` - View a continuous document
* `get_continuous_project_document_progress` - Monitor progress of a continuous document
* `get_continuous_project_documents` - View continuous documents
* `get_continuous_project_invoices` - Invoices of a continuous project
* `get_continuous_project_progress` - Monitor progress and status of a continous project
* `get_continuous_projects` - View continuous projects
* `get_quote_for_document` - Get a quote for a continuous project document
* `get_quote_for_documents` - Get quote for documents
* `get_quote_for_language` - Get quote for language
* `get_quote_for_languages` - Get quote for languages
* `get_subscription` - Get subscription for continuous project
* `post_continuous_project_document_progress` - Get continuous project document progress for multiple IDs
* `reset_active_widget_token` - Reset Active widget token
* `translate` - Instantly translate your content
* `update_active_widget` - Update Active widget settings.
* `update_continuous_project` - Update a continuous project
* `update_document` - Update the document
* `update_subscription` - Update subscription for continuous project
* `update_subscription_payment_method` - Update subscription payment method for continuous project

### corporate

* `get_available_corporate_permissions` - View available permissions
* `get_available_corporate_permissions_by_id` - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* `get_corporate` - View your corporate account
* `get_corporate_by_id` - Get details of this corporate account
* `get_corporate_user_groups` - View user groups
* `get_corporate_user_groups_by_id` - Get a list of user groups for this corporate account
* `get_corporate_users` - View users
* `get_corporate_users_by_id` - Get a list of users for this corporate account
* `get_corporates_list` - Get a list of corporate accounts
* `save_corporate_user` - Create or update a user
* `save_corporate_user_group` - Create or update a corporate user group
* `save_corporate_user_group_by_id` - Create or update a corporate user group for this corporate account

### document

* `get_all_document_subjects` - Get a list of subjects of projects
* `get_document` - View a single document
* `get_document_progress` - View a document translation progress
* `get_documents` - View your documents
* `get_similar_documents` - Find documents similar to this document.
* `get_user_documents` - Get a list of your documents
* `regenerate_preview` - Regenerate preview and return preview URL for given file
* `use_as_draft` - Use the translation of given source manual document as manual draft source for the given target document.
* `use_as_regular` - Use the translation of the given manual document as a regular file.

### glossary

* `create_glossary_json` - Upload a glossary file
* `create_glossary_multipart` - Upload a glossary file
* `delete_glossary` - Delete a glossary
* `download_global_glossary` - Download account glossary.
* `download_glossary` - Download a glossary
* `get_glossaries` - View glossaries
* `get_glossary` - View a glossary
* `update_global_glossary_json` - Create or update the account glossary
* `update_global_glossary_multipart` - Create or update the account glossary
* `update_glossary_json` - Update a glossary
* `update_glossary_multipart` - Update a glossary

### integrations

* `get_integrations_token` - Generate a new access token for MotaWord's integrations service

### invitation

* `get_invitation_vendors` - Get vendor list for compiled invitation needs

### machine_learning

* `get_delivery_prediction` - Get a delivery prediction for a project

### pam

* `get_client_profile_for_pam` - Get the Pam profile of a client for this client ID
* `get_project_completion_report_for_pam` - Get completion report data of a project
* `post_message` - Sends a message to chat

### payment

* `delete_credit_card` - Delete credit card
* `get_credit_card` - View saved credit card
* `reset_card_payment_code` - Reset credit card payment code
* `reset_corporate_payment_code` - Reset payment code
* `toggle_corporate_auto_charge` - Manage automatic charges on your credit card

### project

* `assign_cm` - Assign a CM to the project
* `cancel_project` - Cancel your translation project
* `create_project_json` - Create a new project
* `create_project_multipart` - Create a new project
* `delete_project` - Delete your translation project
* `deliver_project` - Deliver project
* `download` - Download your translated project
* `download_html_invoice` - Download project invoice (HTML)
* `download_language` - Download your translated project language
* `download_pdf_invoice` - Download project invoice (PDF)
* `get_invoice` - View project invoice
* `get_progress` - View progress of a project
* `get_project` - View a translation project
* `get_project_vendors` - Get a list of vendors.
* `get_projects` - View your translation projects
* `get_quote_id_from_internal_id` - Get Quote Id
* `get_vendor_projects` - List projects as a vendor
* `get_vendor_projects_by_user_id` - Get a list of user/vendor projects
* `launch_project` - Launch your translation project
* `package` - Package your translated project
* `package_language` - Package your translated project language
* `recreate_project` - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* `send_quote_email` - Send a quote email
* `submit_project_reports` - Submit feedback report for a project
* `track_package` - Track translation packaging status
* `trigger_callback` - Trigger a call to your callback URL related to this project.
* `update_project` - Update project info and settings

### project_document

* `create_project_document` - Upload a new document
* `delete_project_document` - Delete the document
* `download_project_document` - Download a project source document
* `download_translated_document_for_language` - Download translated document
* `get_project_document` - View a project source document
* `get_project_documents` - View project source documents
* `update_project_document_json` - Update the document.
* `update_project_document_multipart` - Update the document.

### project_webhooks

* `delete_project_webhook` - Delete project webhooks
* `get_project_webhooks` - View project webhooks
* `post_project_webhook` - Update project webhook
* `update_project_webhook` - Update project webhook

### report

* `generate_qa_report` - Generate a QA report for given filter
* `get_filter_contents` - Returns available options for selected timeframe.
* `get_language_pairs_report` - Language pairs report
* `get_projects_report` - Projects report
* `get_users_report` - Company users report

### search

* `check_documents_reindex` - Check reindex status of the client source and translation documents.
* `reindex_documents` - Reindex for search all of the client source and translation documents.
* `search_everywhere` - Search everything in your account

### static

* `get_endpoints` - Available endpoints
* `get_formats` - List of supported file formats
* `get_languages` - List of supported languages
* `get_swagger_yaml` - OpenAPI YAML representation of our API

### stats

* `get_commission_stats` - Returns the total commissions stats.
* `get_commission_stats_by_filter` - Returns the total commissions stats by report filter.
* `get_popular_pairs` - View your popular language pairs
* `get_project_stats` - View your project statistics
* `get_string_stats` - View your translation statistics

### strings

* `clear_translation_cache` - Clear translation cache
* `get_continuous_project_file_strings` - View strings their translations in a continuous document
* `get_continuous_project_strings` - View strings and translations in continuous project
* `get_document_translations` - View strings and translations of a document
* `get_document_translations_for_language` - View strings and translations of a document for target language
* `get_project_strings` - View project strings and translations
* `get_project_strings_for_language` - View strings and translations for target language
* `get_project_translations` - Deprecated. Use /projects/{projectId}/strings instead.
* `get_project_translations_for_language` - Deprecated. use /projects/{projectId}/strings/{language} instead.
* `get_strings` - View account strings (translation memory)
* `get_translation_cache` - View cached strings translations in continuous project
* `package_project_translation_memory` - Download project translation memory
* `package_project_translation_memory_for_language` - Download language-specific project translation memory
* `package_project_translation_memory_for_language_status` - Check language-specific translation memory packaging status
* `package_project_translation_memory_status` - Check translation memory packaging status
* `package_user_translation_memory` - Download account translation memory
* `package_user_translation_memory_for_language_status` - Check account translation memory packaging status
* `post_continuous_project_file_strings` - Get a list of strings and its translations in the project.
* `post_strings` - Translate Strings with MT
* `recache_translations` - Recache translations
* `update_translation_memory_unit` - Update string translation

### style_guide

* `create_style_guide_json` - Upload a new style guide
* `create_style_guide_multipart` - Upload a new style guide
* `delete_style_guide` - Delete a style guide
* `download_global_style_guide` - Download account style guide
* `download_style_guide` - Download a style guide
* `get_style_guide` - View a style guide
* `get_style_guides` - View style guides
* `update_global_style_guide_json` - Create or update the account style guide
* `update_global_style_guide_multipart` - Create or update the account style guide
* `update_style_guide_json` - Update a style guide
* `update_style_guide_multipart` - Update a style guide

### surveys

* `get_questions` - Get survey questions in given scope and type
* `submit_answers` - Post survey answers for scope and type

### user

* `approve_vendor_application`
* `create_user` - Create a new user
* `delete_account` - Delete your account
* `delete_user_account` - Delete requester account
* `downgrade_proofreader`
* `downgrade_user_proofreader`
* `freeze_account` - Freeze account
* `freeze_user_account` - Freeze requester account for project notifications
* `get_all_vendor_tags` - Returns all vendor tags for vendors filter
* `get_earnings` - View your vendor earnings
* `get_filtered_vendors` - Filter vendors based on provided parameters
* `get_me` - View your account info
* `get_payment_info` - View your payment and billing info
* `get_permissions` - View your permissions
* `get_responsivity` - View your vendor responsiveness
* `get_stats` - View your account statistics
* `get_this_user_groups` - Returns a list of user groups that this user belongs to.
* `get_user` - Get user information, including client or vendor specific info.
* `get_user_earnings` - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* `get_user_groups` - View your user groups
* `get_user_payment_info` - View user's payment and billing info
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
* `subscribe_notification` - Subscribe to push notifications
* `subscribe_user_notification`
* `suspend_user`
* `unfreeze_account` - Defreeze your account
* `unfreeze_user_account` - Unfreeze requester account for project notifications
* `unsubscribe_notification`
* `unsubscribe_user_notification`
* `update_me` - Update your account info
* `update_password` - Update your account password
* `update_payment_info` - Update payment info
* `update_user`
* `update_user_group`
* `update_user_payment_info` - Update user payment info
* `upload_profile_picture_json` - Upload profile picture
* `upload_profile_picture_multipart` - Upload profile picture
* `upload_user_profile_picture_json`
* `upload_user_profile_picture_multipart`

### vendor

* `get_available_vendors` - Get a list of vendors available for the criteria given
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
