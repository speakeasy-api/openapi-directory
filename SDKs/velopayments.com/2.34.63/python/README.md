# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/velopayments.com/2.34.63/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)

    
res = s.countries.list_payment_channel_rules_v1()

if res.payment_channel_rules_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### countries

* `list_payment_channel_rules_v1` - List Payment Channel Country Rules
* `list_supported_countries_v1` - List Supported Countries
* `list_supported_countries_v2` - List Supported Countries

### currencies

* `list_supported_currencies_v2` - List Supported Currencies

### funding

* `create_funding_request_v2` - Create Funding Request
* `create_funding_request_v3` - Create Funding Request
* `get_funding_account_v2` - Get Funding Account
* `get_funding_accounts_v2` - Get Funding Accounts
* `get_funding_by_id_v1` - Get Funding
* `list_funding_audit_deltas` - Get Funding Audit Delta

### funding_manager_private

* `create_funding_account_v2` - Create Funding Account
* `delete_source_account_v3` - Delete a source account by ID

### login

* `logout` - Logout
* `reset_password` - Reset password
* `validate_access_token` - validate
* `velo_auth` - Authentication endpoint

### payee_invitation

* `create_payee_v3_json` - Initiate Payee Creation
* `create_payee_v3_multipart` - Initiate Payee Creation
* `get_payees_invitation_status_v3` - Get Payee Invitation Status
* `get_payees_invitation_status_v4` - Get Payee Invitation Status
* `query_batch_status_v3` - Query Batch Status
* `query_batch_status_v4` - Query Batch Status
* `resend_payee_invite_v3` - Resend Payee Invite
* `resend_payee_invite_v4` - Resend Payee Invite
* `v4_create_payee_json` - Initiate Payee Creation
* `v4_create_payee_multipart` - Initiate Payee Creation

### payees

* `delete_payee_by_id_v3` - Delete Payee by Id
* `delete_payee_by_id_v4` - Delete Payee by Id
* `get_payee_by_id_v3` - Get Payee by Id
* `get_payee_by_id_v4` - Get Payee by Id
* `list_payee_changes_v3` - List Payee Changes
* `list_payee_changes_v4` - List Payee Changes
* `list_payees_v3` - List Payees
* `list_payees_v4` - List Payees
* `payee_details_update_v3` - Update Payee Details
* `payee_details_update_v4` - Update Payee Details
* `post_v3_payees_payee_id_remote_id_update` - Update Payee Remote Id
* `post_v4_payees_payee_id_remote_id_update` - Update Payee Remote Id

### payment_audit_service

* `export_transactions_csvv4` - Export Transactions
* `get_fundings_v4` - Get Fundings for Payor
* `get_payment_details_v4` - Get Payment
* `get_payments_for_payout_v4` - Get Payments for Payout
* `get_payout_stats_v4` - Get Payout Statistics
* `get_payouts_for_payor_v4` - Get Payouts for Payor
* `list_payment_changes_v4` - List Payment Changes
* `list_payments_audit_v4` - Get List of Payments

### payment_audit_service_deprecated

* `export_transactions_csvv3` - V3 Export Transactions
* `get_fundings_v1` - V1 Get Fundings for Payor
* `get_payment_details_v3` - V3 Get Payment
* `get_payments_for_payout_pa_v3` - V3 Get Payments for Payout
* `get_payout_stats_v1` - V1 Get Payout Statistics
* `get_payouts_for_payor_v3` - V3 Get Payouts for Payor
* `list_payment_changes` - V1 List Payment Changes
* `list_payments_audit_v3` - V3 Get List of Payments

### payor_hierarchy

* `payor_links_v1` - List Payor Links

### payors

* `get_payor_by_id_v1` - Get Payor
* `get_payor_by_id_v2` - Get Payor
* `payor_add_payor_logo_v1` - Add Logo
* `payor_create_api_key_v1` - Create API Key
* `payor_create_application_v1` - Create Application
* `payor_email_opt_out` - Reminder Email Opt-Out
* `payor_get_branding` - Get Branding

### payors_private

* `create_payor_links` - Create a Payor Link

### payouts

* `create_quote_for_payout_v3` - Create a quote for the payout
* `deschedule_payout` - Deschedule a payout
* `get_payments_for_payout_v3` - Retrieve payments for a payout
* `get_payout_summary_v3` - Get Payout Summary
* `instruct_payout_v3` - Instruct Payout
* `schedule_for_payout` - Schedule a payout
* `submit_payout_v3_json` - Submit Payout
* `submit_payout_v3_multipart` - Submit Payout
* `withdraw_payment` - Withdraw a Payment
* `withdraw_payout_v3` - Withdraw Payout

### source_accounts

* `get_source_account_v2` - Get Source Account
* `get_source_account_v3` - Get details about given source account.
* `get_source_accounts_v2` - Get list of source accounts
* `get_source_accounts_v3` - Get list of source accounts
* `set_notifications_request` - Set notifications
* `set_notifications_request_v3` - Set notifications
* `transfer_funds_v2` - Transfer Funds between source accounts
* `transfer_funds_v3` - Transfer Funds between source accounts

### tokens

* `resend_token` - Resend a token

### users

* `delete_user_by_id_v2` - Delete a User
* `disable_user_v2` - Disable a User
* `enable_user_v2` - Enable a User
* `get_self` - Get Self
* `get_user_by_id_v2` - Get User
* `invite_user` - Invite a User
* `list_users` - List Users
* `register_sms` - Register SMS Number
* `resend_token` - Resend a token
* `role_update` - Update User Role
* `unlock_user_v2` - Unlock a User
* `unregister_mfa` - Unregister MFA for the user
* `unregister_mfa_for_self` - Unregister MFA for Self
* `update_password_self` - Update Password for self
* `user_details_update` - Update User Details
* `user_details_update_for_self` - Update User Details for self
* `validate_password_self` - Validate the proposed password

### webhooks

* `create_webhook_v1` - Create Webhook
* `get_webhook_v1` - Get details about the given webhook.
* `list_webhooks_v1` - List the details about the webhooks for the given payor.
* `ping_webhook_v1`
* `update_webhook_v1` - Update Webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
