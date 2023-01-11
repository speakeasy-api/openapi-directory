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
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.DeleteAppsAppIDRequest(
    path_params=operations.DeleteAppsAppIDPathParams(
        app_id="consequatur",
    ),
    query_params=operations.DeleteAppsAppIDQueryParams(
        developer_id="est",
    ),
)
    
res = s.apps_find_and_modify_apps.delete_apps_app_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### apps : Find and modify apps

* `delete_apps_app_id_` - Removes app and all versions
* `delete_apps_app_id_versions_version_` - Removes AppVersion
* `get_apps` - Returns a paginated list of APPROVED or SUSPENDED apps
* `get_apps_by_safe_name_safe_name_` - Returns a single APPROVED or SUSPENDED app
* `get_apps_text_search` - Searches through the text of fields to find APPROVED or SUSPENDED apps
* `get_apps_versions` - Returns a paginated list of AppVersions
* `get_apps_app_id_` - Returns a single APPROVED or SUSPENDED app
* `get_apps_app_id_versions_version_` - Returns a single AppVersion
* `patch_apps_app_id_versions_version_` - Updates the app fields or creates a new version
* `post_apps` - Adds a new app for this developer
* `post_apps_app_id_live` - Change the live app to another, previously approved version
* `post_apps_app_id_publish` - Publishes the current working version of the app to the marketplace
* `post_apps_app_id_versions_version_` - Updates the app or creates a new version
* `post_apps_app_id_versions_version_status` - Allows a developer or administrator to change the status of apps

### custom-gateway : Process payments and refunds

* `post_custom_gateway_payment_ownership_id_` - Adds a payment for an app on behalf of a user
* `post_custom_gateway_refund_ownership_id_` - Fully or partially refund payment for an app on behalf of a user

### developerAccounts : Find and modify developer accounts

* `delete_developer_accounts_developer_account_id_` - Removes the developer account
* `get_developer_accounts` - Returns a paginated list of developerAccounts
* `get_developer_accounts_developer_account_id_` - Returns a single developer account
* `patch_developer_accounts_developer_account_id_` - Updates the developer account fields
* `post_developer_accounts_developer_account_id_` - Updates the developer account or adds the developer account if it doesn't exist

### developers : Find and modify developers

* `delete_developers_developer_id_` - Removes a single developer
* `get_developers` - Returns a paginated list of developers
* `get_developers_developer_id_` - Returns a single developer
* `patch_developers_developer_id_` - Updates the developer fields
* `post_developers_developer_id_` - Updates the developer record or adds the developer if it doesn't exist

### events : Find events

* `get_events_event_id_` - Returns an event

### files : Upload files 

* `get_files` - Returns a paginated list of files
* `get_files_by_id_or_url` - Get the details for a file.
* `get_files_download` - A signed URL for downloading a private file can be returned by providing the fileId.
* `post_files` - Uploads a file.
* `post_files_url` - Uploads a file from a URL

### markets : This marketplace

* `get_markets_this` - Returns the current marketplace

### ownership : Find ownership

* `get_ownership` - Returns a paginated list of app licenses
* `get_ownership_ownership_id_` - Returns an ownership record
* `patch_ownership_ownership_id_` - Updates ownership fields
* `post_ownership_install` - Aquires an app license for a user (installs app)
* `post_ownership_uninstall_ownership_id_` - Uninstalls a license for a particular user and app (uninstalls app)
* `post_ownership_ownership_id_` - Updates an ownership record

### permission : Add and remove permissions 

* `delete_permission_apps_app_id_` - Removes permission that allows the app to access this user's data
* `get_permission_apps_app_id_` - Returns permission that allows the app to access this user's data
* `post_permission_apps_app_id_` - Adds permission to allow the app to access this user's data

### reviews : Find and modify reviews 

* `delete_reviews_review_id_` - Remove a review
* `get_reviews` - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* `get_reviews_review_id_` - Find a Review within a particular App and marketplace
* `patch_reviews_review_id_` - Update a review fields
* `post_reviews` - Post a review from a User and returns the new post
* `post_reviews_review_id_` - Update a review from a User and returns the new post

### stats: Find marketplace statistics

* `get_stats_series_period_fields_` - Return a timeseries for a particular field
* `get_stats_total` - Returns the total number of events for a particular field.
* `post_stats_increment_field_` - Increments a statistics field

### stripe-gateway : Process payments and refunds 

* `delete_stripe_gateway_developer_developer_id_accounts_stripe_id_` - Disconnects a developer's Stripe account
* `delete_stripe_gateway_user_user_id_cards_card_id_` - Removes a credit card for a user
* `get_stripe_gateway_developer_developer_id_accounts` - Returns a developers connected Stripe accounts
* `get_stripe_gateway_user_user_id_cards` - Returns credit cards for this user
* `post_stripe_gateway_developer_developer_id_accounts` - Generate a temporary URL to allow a developer to connect their Stripe account
* `post_stripe_gateway_user_user_id_cards` - Adds credit card for this user
* `post_stripe_gateway_user_user_id_cards_card_id_` - Updates a credit card for this user

### transactions : Find payments and refunds 

* `delete_transactions_transaction_id_` - Deleted a transaction
* `get_transactions` - Returns a paginated list of transactions
* `get_transactions_transaction_id_` - Returns a transaction
* `post_transactions_transaction_id_` - Updates a transaction

### userAccounts : Find and modify user accounts 

* `delete_user_accounts_user_account_id_` - Removes the user account
* `get_user_accounts` - Returns a paginated list of userAccounts
* `get_user_accounts_user_account_id_` - Returns a single user account
* `patch_user_accounts_user_account_id_` - Updates the user account fields
* `post_user_accounts_user_account_id_` - Updates the user account or adds the user account if it doesn't exist

### users : Find and modify users 

* `delete_users_user_id_` - Removes a single user
* `get_users` - Returns a paginated list of users
* `get_users_user_id_` - Return a single user
* `patch_users_user_id_` - Updates user fields
* `post_users_user_id_` - Updates a single user or adds the user if they don't exist

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
