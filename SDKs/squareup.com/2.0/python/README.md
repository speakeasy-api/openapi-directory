# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/squareup.com/2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.RegisterDomainRequest(
    domain_name="corrupti",
)
    
res = s.apple_pay.register_domain(req, operations.RegisterDomainSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.register_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apple_pay

* `register_domain` - RegisterDomain

### bank_accounts

* `get_bank_account` - GetBankAccount
* `get_bank_account_by_v1_id` - GetBankAccountByV1Id
* `list_bank_accounts` - ListBankAccounts

### bookings

* `cancel_booking` - CancelBooking
* `create_booking` - CreateBooking
* `list_team_member_booking_profiles` - ListTeamMemberBookingProfiles
* `retrieve_booking` - RetrieveBooking
* `retrieve_business_booking_profile` - RetrieveBusinessBookingProfile
* `retrieve_team_member_booking_profile` - RetrieveTeamMemberBookingProfile
* `search_availability` - SearchAvailability
* `update_booking` - UpdateBooking

### cards

* `create_card` - CreateCard
* `disable_card` - DisableCard
* `list_cards` - ListCards
* `retrieve_card` - RetrieveCard

### cash_drawers

* `list_cash_drawer_shift_events` - ListCashDrawerShiftEvents
* `list_cash_drawer_shifts` - ListCashDrawerShifts
* `retrieve_cash_drawer_shift` - RetrieveCashDrawerShift

### catalog

* `batch_delete_catalog_objects` - BatchDeleteCatalogObjects
* `batch_retrieve_catalog_objects` - BatchRetrieveCatalogObjects
* `batch_upsert_catalog_objects` - BatchUpsertCatalogObjects
* `catalog_info` - CatalogInfo
* `delete_catalog_object` - DeleteCatalogObject
* `list_catalog` - ListCatalog
* `retrieve_catalog_object` - RetrieveCatalogObject
* `search_catalog_items` - SearchCatalogItems
* `search_catalog_objects` - SearchCatalogObjects
* `update_item_modifier_lists` - UpdateItemModifierLists
* `update_item_taxes` - UpdateItemTaxes
* `upsert_catalog_object` - UpsertCatalogObject

### checkout

* `create_checkout` - CreateCheckout

### customer_groups

* `create_customer_group` - CreateCustomerGroup
* `delete_customer_group` - DeleteCustomerGroup
* `list_customer_groups` - ListCustomerGroups
* `retrieve_customer_group` - RetrieveCustomerGroup
* `update_customer_group` - UpdateCustomerGroup

### customer_segments

* `list_customer_segments` - ListCustomerSegments
* `retrieve_customer_segment` - RetrieveCustomerSegment

### customers

* `add_group_to_customer` - AddGroupToCustomer
* `create_customer` - CreateCustomer
* `create_customer_card` - CreateCustomerCard
* `delete_customer` - DeleteCustomer
* `delete_customer_card` - DeleteCustomerCard
* `list_customers` - ListCustomers
* `remove_group_from_customer` - RemoveGroupFromCustomer
* `retrieve_customer` - RetrieveCustomer
* `search_customers` - SearchCustomers
* `update_customer` - UpdateCustomer

### devices

* `create_device_code` - CreateDeviceCode
* `get_device_code` - GetDeviceCode
* `list_device_codes` - ListDeviceCodes

### disputes

* `accept_dispute` - AcceptDispute
* `create_dispute_evidence_text` - CreateDisputeEvidenceText
* `delete_dispute_evidence` - DeleteDisputeEvidence
* `list_dispute_evidence` - ListDisputeEvidence
* `list_disputes` - ListDisputes
* `retrieve_dispute` - RetrieveDispute
* `retrieve_dispute_evidence` - RetrieveDisputeEvidence
* `submit_evidence` - SubmitEvidence

### employees

* `get_v2_employees` - ListEmployees
* `get_v2_employees_id_` - RetrieveEmployee

### gift_card_activities

* `create_gift_card_activity` - CreateGiftCardActivity
* `list_gift_card_activities` - ListGiftCardActivities

### gift_cards

* `create_gift_card` - CreateGiftCard
* `link_customer_to_gift_card` - LinkCustomerToGiftCard
* `list_gift_cards` - ListGiftCards
* `retrieve_gift_card` - RetrieveGiftCard
* `retrieve_gift_card_from_gan` - RetrieveGiftCardFromGAN
* `retrieve_gift_card_from_nonce` - RetrieveGiftCardFromNonce
* `unlink_customer_from_gift_card` - UnlinkCustomerFromGiftCard

### inventory

* `batch_change_inventory` - BatchChangeInventory
* `batch_retrieve_inventory_changes` - BatchRetrieveInventoryChanges
* `batch_retrieve_inventory_counts` - BatchRetrieveInventoryCounts
* `deprecated_batch_change_inventory` - DeprecatedBatchChangeInventory
* `deprecated_batch_retrieve_inventory_changes` - DeprecatedBatchRetrieveInventoryChanges
* `deprecated_batch_retrieve_inventory_counts` - DeprecatedBatchRetrieveInventoryCounts
* `deprecated_retrieve_inventory_adjustment` - DeprecatedRetrieveInventoryAdjustment
* `deprecated_retrieve_inventory_physical_count` - DeprecatedRetrieveInventoryPhysicalCount
* `retrieve_inventory_adjustment` - RetrieveInventoryAdjustment
* `retrieve_inventory_changes` - RetrieveInventoryChanges
* `retrieve_inventory_count` - RetrieveInventoryCount
* `retrieve_inventory_physical_count` - RetrieveInventoryPhysicalCount
* `retrieve_inventory_transfer` - RetrieveInventoryTransfer

### invoices

* `cancel_invoice` - CancelInvoice
* `create_invoice` - CreateInvoice
* `delete_invoice` - DeleteInvoice
* `get_invoice` - GetInvoice
* `list_invoices` - ListInvoices
* `publish_invoice` - PublishInvoice
* `search_invoices` - SearchInvoices
* `update_invoice` - UpdateInvoice

### labor

* `create_break_type` - CreateBreakType
* `create_shift` - CreateShift
* `delete_break_type` - DeleteBreakType
* `delete_shift` - DeleteShift
* `get_break_type` - GetBreakType
* `get_employee_wage` - GetEmployeeWage
* `get_shift` - GetShift
* `get_team_member_wage` - GetTeamMemberWage
* `list_break_types` - ListBreakTypes
* `list_employee_wages` - ListEmployeeWages
* `list_team_member_wages` - ListTeamMemberWages
* `list_workweek_configs` - ListWorkweekConfigs
* `search_shifts` - SearchShifts
* `update_break_type` - UpdateBreakType
* `update_shift` - UpdateShift
* `update_workweek_config` - UpdateWorkweekConfig

### locations

* `create_location` - CreateLocation
* `list_locations` - ListLocations
* `retrieve_location` - RetrieveLocation
* `update_location` - UpdateLocation

### loyalty

* `accumulate_loyalty_points` - AccumulateLoyaltyPoints
* `adjust_loyalty_points` - AdjustLoyaltyPoints
* `calculate_loyalty_points` - CalculateLoyaltyPoints
* `create_loyalty_account` - CreateLoyaltyAccount
* `create_loyalty_reward` - CreateLoyaltyReward
* `delete_loyalty_reward` - DeleteLoyaltyReward
* `list_loyalty_programs` - ListLoyaltyPrograms
* `redeem_loyalty_reward` - RedeemLoyaltyReward
* `retrieve_loyalty_account` - RetrieveLoyaltyAccount
* `retrieve_loyalty_program` - RetrieveLoyaltyProgram
* `retrieve_loyalty_reward` - RetrieveLoyaltyReward
* `search_loyalty_accounts` - SearchLoyaltyAccounts
* `search_loyalty_events` - SearchLoyaltyEvents
* `search_loyalty_rewards` - SearchLoyaltyRewards

### merchants

* `list_merchants` - ListMerchants
* `retrieve_merchant` - RetrieveMerchant

### mobile_authorization

* `create_mobile_authorization_code` - CreateMobileAuthorizationCode

### o_auth

* `obtain_token` - ObtainToken
* `renew_token` - RenewToken
* `revoke_token` - RevokeToken

### orders

* `batch_retrieve_orders` - BatchRetrieveOrders
* `calculate_order` - CalculateOrder
* `create_order` - CreateOrder
* `pay_order` - PayOrder
* `search_orders` - SearchOrders
* `get_v2_orders_order_id_` - RetrieveOrder
* `put_v2_orders_order_id_` - UpdateOrder

### payments

* `cancel_payment` - CancelPayment
* `cancel_payment_by_idempotency_key` - CancelPaymentByIdempotencyKey
* `complete_payment` - CompletePayment
* `create_payment` - CreatePayment
* `get_payment` - GetPayment
* `update_payment` - UpdatePayment
* `get_v2_payments` - ListPayments

### refunds

* `get_payment_refund` - GetPaymentRefund
* `list_payment_refunds` - ListPaymentRefunds
* `refund_payment` - RefundPayment

### sites

* `list_sites` - ListSites

### snippets

* `delete_snippet` - DeleteSnippet
* `retrieve_snippet` - RetrieveSnippet
* `upsert_snippet` - UpsertSnippet

### subscriptions

* `cancel_subscription` - CancelSubscription
* `create_subscription` - CreateSubscription
* `list_subscription_events` - ListSubscriptionEvents
* `resume_subscription` - ResumeSubscription
* `retrieve_subscription` - RetrieveSubscription
* `search_subscriptions` - SearchSubscriptions
* `update_subscription` - UpdateSubscription

### team

* `bulk_create_team_members` - BulkCreateTeamMembers
* `bulk_update_team_members` - BulkUpdateTeamMembers
* `create_team_member` - CreateTeamMember
* `retrieve_team_member` - RetrieveTeamMember
* `retrieve_wage_setting` - RetrieveWageSetting
* `search_team_members` - SearchTeamMembers
* `update_team_member` - UpdateTeamMember
* `update_wage_setting` - UpdateWageSetting

### terminal

* `cancel_terminal_checkout` - CancelTerminalCheckout
* `cancel_terminal_refund` - CancelTerminalRefund
* `create_terminal_checkout` - CreateTerminalCheckout
* `create_terminal_refund` - CreateTerminalRefund
* `get_terminal_checkout` - GetTerminalCheckout
* `get_terminal_refund` - GetTerminalRefund
* `search_terminal_checkouts` - SearchTerminalCheckouts
* `search_terminal_refunds` - SearchTerminalRefunds

### transactions

* `capture_transaction` - CaptureTransaction
* `charge` - Charge
* `list_transactions` - ListTransactions
* `retrieve_transaction` - RetrieveTransaction
* `void_transaction` - VoidTransaction
* `get_v2_locations_location_id_refunds` - ListRefunds
* `post_v2_locations_location_id_transactions_transaction_id_refund` - CreateRefund

### v1_employees

* `create_employee` - CreateEmployee
* `create_employee_role` - CreateEmployeeRole
* `list_employee_roles` - ListEmployeeRoles
* `list_employees` - ListEmployees
* `retrieve_employee` - RetrieveEmployee
* `retrieve_employee_role` - RetrieveEmployeeRole
* `update_employee` - UpdateEmployee
* `update_employee_role` - UpdateEmployeeRole

### v1_transactions

* `create_refund` - CreateRefund
* `list_orders` - ListOrders
* `list_payments` - ListPayments
* `list_refunds` - ListRefunds
* `list_settlements` - ListSettlements
* `retrieve_order` - RetrieveOrder
* `retrieve_payment` - RetrievePayment
* `retrieve_settlement` - RetrieveSettlement
* `update_order` - UpdateOrder
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
