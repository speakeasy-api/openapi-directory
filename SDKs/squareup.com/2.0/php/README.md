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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### applePay

* `registerDomain` - RegisterDomain

### bankAccounts

* `getBankAccount` - GetBankAccount
* `getBankAccountByV1Id` - GetBankAccountByV1Id
* `listBankAccounts` - ListBankAccounts

### bookings

* `cancelBooking` - CancelBooking
* `createBooking` - CreateBooking
* `listTeamMemberBookingProfiles` - ListTeamMemberBookingProfiles
* `retrieveBooking` - RetrieveBooking
* `retrieveBusinessBookingProfile` - RetrieveBusinessBookingProfile
* `retrieveTeamMemberBookingProfile` - RetrieveTeamMemberBookingProfile
* `searchAvailability` - SearchAvailability
* `updateBooking` - UpdateBooking

### cards

* `createCard` - CreateCard
* `disableCard` - DisableCard
* `listCards` - ListCards
* `retrieveCard` - RetrieveCard

### cashDrawers

* `listCashDrawerShiftEvents` - ListCashDrawerShiftEvents
* `listCashDrawerShifts` - ListCashDrawerShifts
* `retrieveCashDrawerShift` - RetrieveCashDrawerShift

### catalog

* `batchDeleteCatalogObjects` - BatchDeleteCatalogObjects
* `batchRetrieveCatalogObjects` - BatchRetrieveCatalogObjects
* `batchUpsertCatalogObjects` - BatchUpsertCatalogObjects
* `catalogInfo` - CatalogInfo
* `deleteCatalogObject` - DeleteCatalogObject
* `listCatalog` - ListCatalog
* `retrieveCatalogObject` - RetrieveCatalogObject
* `searchCatalogItems` - SearchCatalogItems
* `searchCatalogObjects` - SearchCatalogObjects
* `updateItemModifierLists` - UpdateItemModifierLists
* `updateItemTaxes` - UpdateItemTaxes
* `upsertCatalogObject` - UpsertCatalogObject

### checkout

* `createCheckout` - CreateCheckout

### customerGroups

* `createCustomerGroup` - CreateCustomerGroup
* `deleteCustomerGroup` - DeleteCustomerGroup
* `listCustomerGroups` - ListCustomerGroups
* `retrieveCustomerGroup` - RetrieveCustomerGroup
* `updateCustomerGroup` - UpdateCustomerGroup

### customerSegments

* `listCustomerSegments` - ListCustomerSegments
* `retrieveCustomerSegment` - RetrieveCustomerSegment

### customers

* `addGroupToCustomer` - AddGroupToCustomer
* `createCustomer` - CreateCustomer
* `createCustomerCard` - CreateCustomerCard
* `deleteCustomer` - DeleteCustomer
* `deleteCustomerCard` - DeleteCustomerCard
* `listCustomers` - ListCustomers
* `removeGroupFromCustomer` - RemoveGroupFromCustomer
* `retrieveCustomer` - RetrieveCustomer
* `searchCustomers` - SearchCustomers
* `updateCustomer` - UpdateCustomer

### devices

* `createDeviceCode` - CreateDeviceCode
* `getDeviceCode` - GetDeviceCode
* `listDeviceCodes` - ListDeviceCodes

### disputes

* `acceptDispute` - AcceptDispute
* `createDisputeEvidenceText` - CreateDisputeEvidenceText
* `deleteDisputeEvidence` - DeleteDisputeEvidence
* `listDisputeEvidence` - ListDisputeEvidence
* `listDisputes` - ListDisputes
* `retrieveDispute` - RetrieveDispute
* `retrieveDisputeEvidence` - RetrieveDisputeEvidence
* `submitEvidence` - SubmitEvidence

### employees

* `getV2Employees` - ListEmployees
* `getV2EmployeesId` - RetrieveEmployee

### giftCardActivities

* `createGiftCardActivity` - CreateGiftCardActivity
* `listGiftCardActivities` - ListGiftCardActivities

### giftCards

* `createGiftCard` - CreateGiftCard
* `linkCustomerToGiftCard` - LinkCustomerToGiftCard
* `listGiftCards` - ListGiftCards
* `retrieveGiftCard` - RetrieveGiftCard
* `retrieveGiftCardFromGAN` - RetrieveGiftCardFromGAN
* `retrieveGiftCardFromNonce` - RetrieveGiftCardFromNonce
* `unlinkCustomerFromGiftCard` - UnlinkCustomerFromGiftCard

### inventory

* `batchChangeInventory` - BatchChangeInventory
* `batchRetrieveInventoryChanges` - BatchRetrieveInventoryChanges
* `batchRetrieveInventoryCounts` - BatchRetrieveInventoryCounts
* `deprecatedBatchChangeInventory` - DeprecatedBatchChangeInventory
* `deprecatedBatchRetrieveInventoryChanges` - DeprecatedBatchRetrieveInventoryChanges
* `deprecatedBatchRetrieveInventoryCounts` - DeprecatedBatchRetrieveInventoryCounts
* `deprecatedRetrieveInventoryAdjustment` - DeprecatedRetrieveInventoryAdjustment
* `deprecatedRetrieveInventoryPhysicalCount` - DeprecatedRetrieveInventoryPhysicalCount
* `retrieveInventoryAdjustment` - RetrieveInventoryAdjustment
* `retrieveInventoryChanges` - RetrieveInventoryChanges
* `retrieveInventoryCount` - RetrieveInventoryCount
* `retrieveInventoryPhysicalCount` - RetrieveInventoryPhysicalCount
* `retrieveInventoryTransfer` - RetrieveInventoryTransfer

### invoices

* `cancelInvoice` - CancelInvoice
* `createInvoice` - CreateInvoice
* `deleteInvoice` - DeleteInvoice
* `getInvoice` - GetInvoice
* `listInvoices` - ListInvoices
* `publishInvoice` - PublishInvoice
* `searchInvoices` - SearchInvoices
* `updateInvoice` - UpdateInvoice

### labor

* `createBreakType` - CreateBreakType
* `createShift` - CreateShift
* `deleteBreakType` - DeleteBreakType
* `deleteShift` - DeleteShift
* `getBreakType` - GetBreakType
* `getEmployeeWage` - GetEmployeeWage
* `getShift` - GetShift
* `getTeamMemberWage` - GetTeamMemberWage
* `listBreakTypes` - ListBreakTypes
* `listEmployeeWages` - ListEmployeeWages
* `listTeamMemberWages` - ListTeamMemberWages
* `listWorkweekConfigs` - ListWorkweekConfigs
* `searchShifts` - SearchShifts
* `updateBreakType` - UpdateBreakType
* `updateShift` - UpdateShift
* `updateWorkweekConfig` - UpdateWorkweekConfig

### locations

* `createLocation` - CreateLocation
* `listLocations` - ListLocations
* `retrieveLocation` - RetrieveLocation
* `updateLocation` - UpdateLocation

### loyalty

* `accumulateLoyaltyPoints` - AccumulateLoyaltyPoints
* `adjustLoyaltyPoints` - AdjustLoyaltyPoints
* `calculateLoyaltyPoints` - CalculateLoyaltyPoints
* `createLoyaltyAccount` - CreateLoyaltyAccount
* `createLoyaltyReward` - CreateLoyaltyReward
* `deleteLoyaltyReward` - DeleteLoyaltyReward
* `listLoyaltyPrograms` - ListLoyaltyPrograms
* `redeemLoyaltyReward` - RedeemLoyaltyReward
* `retrieveLoyaltyAccount` - RetrieveLoyaltyAccount
* `retrieveLoyaltyProgram` - RetrieveLoyaltyProgram
* `retrieveLoyaltyReward` - RetrieveLoyaltyReward
* `searchLoyaltyAccounts` - SearchLoyaltyAccounts
* `searchLoyaltyEvents` - SearchLoyaltyEvents
* `searchLoyaltyRewards` - SearchLoyaltyRewards

### merchants

* `listMerchants` - ListMerchants
* `retrieveMerchant` - RetrieveMerchant

### mobileAuthorization

* `createMobileAuthorizationCode` - CreateMobileAuthorizationCode

### oAuth

* `obtainToken` - ObtainToken
* `renewToken` - RenewToken
* `revokeToken` - RevokeToken

### orders

* `batchRetrieveOrders` - BatchRetrieveOrders
* `calculateOrder` - CalculateOrder
* `createOrder` - CreateOrder
* `payOrder` - PayOrder
* `searchOrders` - SearchOrders
* `getV2OrdersOrderId` - RetrieveOrder
* `putV2OrdersOrderId` - UpdateOrder

### payments

* `cancelPayment` - CancelPayment
* `cancelPaymentByIdempotencyKey` - CancelPaymentByIdempotencyKey
* `completePayment` - CompletePayment
* `createPayment` - CreatePayment
* `getPayment` - GetPayment
* `updatePayment` - UpdatePayment
* `getV2Payments` - ListPayments

### refunds

* `getPaymentRefund` - GetPaymentRefund
* `listPaymentRefunds` - ListPaymentRefunds
* `refundPayment` - RefundPayment

### sites

* `listSites` - ListSites

### snippets

* `deleteSnippet` - DeleteSnippet
* `retrieveSnippet` - RetrieveSnippet
* `upsertSnippet` - UpsertSnippet

### subscriptions

* `cancelSubscription` - CancelSubscription
* `createSubscription` - CreateSubscription
* `listSubscriptionEvents` - ListSubscriptionEvents
* `resumeSubscription` - ResumeSubscription
* `retrieveSubscription` - RetrieveSubscription
* `searchSubscriptions` - SearchSubscriptions
* `updateSubscription` - UpdateSubscription

### team

* `bulkCreateTeamMembers` - BulkCreateTeamMembers
* `bulkUpdateTeamMembers` - BulkUpdateTeamMembers
* `createTeamMember` - CreateTeamMember
* `retrieveTeamMember` - RetrieveTeamMember
* `retrieveWageSetting` - RetrieveWageSetting
* `searchTeamMembers` - SearchTeamMembers
* `updateTeamMember` - UpdateTeamMember
* `updateWageSetting` - UpdateWageSetting

### terminal

* `cancelTerminalCheckout` - CancelTerminalCheckout
* `cancelTerminalRefund` - CancelTerminalRefund
* `createTerminalCheckout` - CreateTerminalCheckout
* `createTerminalRefund` - CreateTerminalRefund
* `getTerminalCheckout` - GetTerminalCheckout
* `getTerminalRefund` - GetTerminalRefund
* `searchTerminalCheckouts` - SearchTerminalCheckouts
* `searchTerminalRefunds` - SearchTerminalRefunds

### transactions

* `captureTransaction` - CaptureTransaction
* `charge` - Charge
* `listTransactions` - ListTransactions
* `retrieveTransaction` - RetrieveTransaction
* `voidTransaction` - VoidTransaction
* `getV2LocationsLocationIdRefunds` - ListRefunds
* `postV2LocationsLocationIdTransactionsTransactionIdRefund` - CreateRefund

### v1Employees

* `createEmployee` - CreateEmployee
* `createEmployeeRole` - CreateEmployeeRole
* `listEmployeeRoles` - ListEmployeeRoles
* `listEmployees` - ListEmployees
* `retrieveEmployee` - RetrieveEmployee
* `retrieveEmployeeRole` - RetrieveEmployeeRole
* `updateEmployee` - UpdateEmployee
* `updateEmployeeRole` - UpdateEmployeeRole

### v1Transactions

* `createRefund` - CreateRefund
* `listOrders` - ListOrders
* `listPayments` - ListPayments
* `listRefunds` - ListRefunds
* `listSettlements` - ListSettlements
* `retrieveOrder` - RetrieveOrder
* `retrievePayment` - RetrievePayment
* `retrieveSettlement` - RetrieveSettlement
* `updateOrder` - UpdateOrder
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
