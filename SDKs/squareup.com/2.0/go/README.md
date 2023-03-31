# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/squareup.com/2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.RegisterDomainRequest{
        DomainName: "corrupti",
    }

    ctx := context.Background()
    res, err := s.ApplePay.RegisterDomain(ctx, req, operations.RegisterDomainSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterDomainResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ApplePay

* `RegisterDomain` - RegisterDomain

### BankAccounts

* `GetBankAccount` - GetBankAccount
* `GetBankAccountByV1ID` - GetBankAccountByV1Id
* `ListBankAccounts` - ListBankAccounts

### Bookings

* `CancelBooking` - CancelBooking
* `CreateBooking` - CreateBooking
* `ListTeamMemberBookingProfiles` - ListTeamMemberBookingProfiles
* `RetrieveBooking` - RetrieveBooking
* `RetrieveBusinessBookingProfile` - RetrieveBusinessBookingProfile
* `RetrieveTeamMemberBookingProfile` - RetrieveTeamMemberBookingProfile
* `SearchAvailability` - SearchAvailability
* `UpdateBooking` - UpdateBooking

### Cards

* `CreateCard` - CreateCard
* `DisableCard` - DisableCard
* `ListCards` - ListCards
* `RetrieveCard` - RetrieveCard

### CashDrawers

* `ListCashDrawerShiftEvents` - ListCashDrawerShiftEvents
* `ListCashDrawerShifts` - ListCashDrawerShifts
* `RetrieveCashDrawerShift` - RetrieveCashDrawerShift

### Catalog

* `BatchDeleteCatalogObjects` - BatchDeleteCatalogObjects
* `BatchRetrieveCatalogObjects` - BatchRetrieveCatalogObjects
* `BatchUpsertCatalogObjects` - BatchUpsertCatalogObjects
* `CatalogInfo` - CatalogInfo
* `DeleteCatalogObject` - DeleteCatalogObject
* `ListCatalog` - ListCatalog
* `RetrieveCatalogObject` - RetrieveCatalogObject
* `SearchCatalogItems` - SearchCatalogItems
* `SearchCatalogObjects` - SearchCatalogObjects
* `UpdateItemModifierLists` - UpdateItemModifierLists
* `UpdateItemTaxes` - UpdateItemTaxes
* `UpsertCatalogObject` - UpsertCatalogObject

### Checkout

* `CreateCheckout` - CreateCheckout

### CustomerGroups

* `CreateCustomerGroup` - CreateCustomerGroup
* `DeleteCustomerGroup` - DeleteCustomerGroup
* `ListCustomerGroups` - ListCustomerGroups
* `RetrieveCustomerGroup` - RetrieveCustomerGroup
* `UpdateCustomerGroup` - UpdateCustomerGroup

### CustomerSegments

* `ListCustomerSegments` - ListCustomerSegments
* `RetrieveCustomerSegment` - RetrieveCustomerSegment

### Customers

* `AddGroupToCustomer` - AddGroupToCustomer
* `CreateCustomer` - CreateCustomer
* `CreateCustomerCard` - CreateCustomerCard
* `DeleteCustomer` - DeleteCustomer
* `DeleteCustomerCard` - DeleteCustomerCard
* `ListCustomers` - ListCustomers
* `RemoveGroupFromCustomer` - RemoveGroupFromCustomer
* `RetrieveCustomer` - RetrieveCustomer
* `SearchCustomers` - SearchCustomers
* `UpdateCustomer` - UpdateCustomer

### Devices

* `CreateDeviceCode` - CreateDeviceCode
* `GetDeviceCode` - GetDeviceCode
* `ListDeviceCodes` - ListDeviceCodes

### Disputes

* `AcceptDispute` - AcceptDispute
* `CreateDisputeEvidenceText` - CreateDisputeEvidenceText
* `DeleteDisputeEvidence` - DeleteDisputeEvidence
* `ListDisputeEvidence` - ListDisputeEvidence
* `ListDisputes` - ListDisputes
* `RetrieveDispute` - RetrieveDispute
* `RetrieveDisputeEvidence` - RetrieveDisputeEvidence
* `SubmitEvidence` - SubmitEvidence

### Employees

* `GetV2Employees` - ListEmployees
* `GetV2EmployeesID` - RetrieveEmployee

### GiftCardActivities

* `CreateGiftCardActivity` - CreateGiftCardActivity
* `ListGiftCardActivities` - ListGiftCardActivities

### GiftCards

* `CreateGiftCard` - CreateGiftCard
* `LinkCustomerToGiftCard` - LinkCustomerToGiftCard
* `ListGiftCards` - ListGiftCards
* `RetrieveGiftCard` - RetrieveGiftCard
* `RetrieveGiftCardFromGAN` - RetrieveGiftCardFromGAN
* `RetrieveGiftCardFromNonce` - RetrieveGiftCardFromNonce
* `UnlinkCustomerFromGiftCard` - UnlinkCustomerFromGiftCard

### Inventory

* `BatchChangeInventory` - BatchChangeInventory
* `BatchRetrieveInventoryChanges` - BatchRetrieveInventoryChanges
* `BatchRetrieveInventoryCounts` - BatchRetrieveInventoryCounts
* `DeprecatedBatchChangeInventory` - DeprecatedBatchChangeInventory
* `DeprecatedBatchRetrieveInventoryChanges` - DeprecatedBatchRetrieveInventoryChanges
* `DeprecatedBatchRetrieveInventoryCounts` - DeprecatedBatchRetrieveInventoryCounts
* `DeprecatedRetrieveInventoryAdjustment` - DeprecatedRetrieveInventoryAdjustment
* `DeprecatedRetrieveInventoryPhysicalCount` - DeprecatedRetrieveInventoryPhysicalCount
* `RetrieveInventoryAdjustment` - RetrieveInventoryAdjustment
* `RetrieveInventoryChanges` - RetrieveInventoryChanges
* `RetrieveInventoryCount` - RetrieveInventoryCount
* `RetrieveInventoryPhysicalCount` - RetrieveInventoryPhysicalCount
* `RetrieveInventoryTransfer` - RetrieveInventoryTransfer

### Invoices

* `CancelInvoice` - CancelInvoice
* `CreateInvoice` - CreateInvoice
* `DeleteInvoice` - DeleteInvoice
* `GetInvoice` - GetInvoice
* `ListInvoices` - ListInvoices
* `PublishInvoice` - PublishInvoice
* `SearchInvoices` - SearchInvoices
* `UpdateInvoice` - UpdateInvoice

### Labor

* `CreateBreakType` - CreateBreakType
* `CreateShift` - CreateShift
* `DeleteBreakType` - DeleteBreakType
* `DeleteShift` - DeleteShift
* `GetBreakType` - GetBreakType
* `GetEmployeeWage` - GetEmployeeWage
* `GetShift` - GetShift
* `GetTeamMemberWage` - GetTeamMemberWage
* `ListBreakTypes` - ListBreakTypes
* `ListEmployeeWages` - ListEmployeeWages
* `ListTeamMemberWages` - ListTeamMemberWages
* `ListWorkweekConfigs` - ListWorkweekConfigs
* `SearchShifts` - SearchShifts
* `UpdateBreakType` - UpdateBreakType
* `UpdateShift` - UpdateShift
* `UpdateWorkweekConfig` - UpdateWorkweekConfig

### Locations

* `CreateLocation` - CreateLocation
* `ListLocations` - ListLocations
* `RetrieveLocation` - RetrieveLocation
* `UpdateLocation` - UpdateLocation

### Loyalty

* `AccumulateLoyaltyPoints` - AccumulateLoyaltyPoints
* `AdjustLoyaltyPoints` - AdjustLoyaltyPoints
* `CalculateLoyaltyPoints` - CalculateLoyaltyPoints
* `CreateLoyaltyAccount` - CreateLoyaltyAccount
* `CreateLoyaltyReward` - CreateLoyaltyReward
* `DeleteLoyaltyReward` - DeleteLoyaltyReward
* `ListLoyaltyPrograms` - ListLoyaltyPrograms
* `RedeemLoyaltyReward` - RedeemLoyaltyReward
* `RetrieveLoyaltyAccount` - RetrieveLoyaltyAccount
* `RetrieveLoyaltyProgram` - RetrieveLoyaltyProgram
* `RetrieveLoyaltyReward` - RetrieveLoyaltyReward
* `SearchLoyaltyAccounts` - SearchLoyaltyAccounts
* `SearchLoyaltyEvents` - SearchLoyaltyEvents
* `SearchLoyaltyRewards` - SearchLoyaltyRewards

### Merchants

* `ListMerchants` - ListMerchants
* `RetrieveMerchant` - RetrieveMerchant

### MobileAuthorization

* `CreateMobileAuthorizationCode` - CreateMobileAuthorizationCode

### OAuth

* `ObtainToken` - ObtainToken
* `RenewToken` - RenewToken
* `RevokeToken` - RevokeToken

### Orders

* `BatchRetrieveOrders` - BatchRetrieveOrders
* `CalculateOrder` - CalculateOrder
* `CreateOrder` - CreateOrder
* `PayOrder` - PayOrder
* `SearchOrders` - SearchOrders
* `GetV2OrdersOrderID` - RetrieveOrder
* `PutV2OrdersOrderID` - UpdateOrder

### Payments

* `CancelPayment` - CancelPayment
* `CancelPaymentByIdempotencyKey` - CancelPaymentByIdempotencyKey
* `CompletePayment` - CompletePayment
* `CreatePayment` - CreatePayment
* `GetPayment` - GetPayment
* `UpdatePayment` - UpdatePayment
* `GetV2Payments` - ListPayments

### Refunds

* `GetPaymentRefund` - GetPaymentRefund
* `ListPaymentRefunds` - ListPaymentRefunds
* `RefundPayment` - RefundPayment

### Sites

* `ListSites` - ListSites

### Snippets

* `DeleteSnippet` - DeleteSnippet
* `RetrieveSnippet` - RetrieveSnippet
* `UpsertSnippet` - UpsertSnippet

### Subscriptions

* `CancelSubscription` - CancelSubscription
* `CreateSubscription` - CreateSubscription
* `ListSubscriptionEvents` - ListSubscriptionEvents
* `ResumeSubscription` - ResumeSubscription
* `RetrieveSubscription` - RetrieveSubscription
* `SearchSubscriptions` - SearchSubscriptions
* `UpdateSubscription` - UpdateSubscription

### Team

* `BulkCreateTeamMembers` - BulkCreateTeamMembers
* `BulkUpdateTeamMembers` - BulkUpdateTeamMembers
* `CreateTeamMember` - CreateTeamMember
* `RetrieveTeamMember` - RetrieveTeamMember
* `RetrieveWageSetting` - RetrieveWageSetting
* `SearchTeamMembers` - SearchTeamMembers
* `UpdateTeamMember` - UpdateTeamMember
* `UpdateWageSetting` - UpdateWageSetting

### Terminal

* `CancelTerminalCheckout` - CancelTerminalCheckout
* `CancelTerminalRefund` - CancelTerminalRefund
* `CreateTerminalCheckout` - CreateTerminalCheckout
* `CreateTerminalRefund` - CreateTerminalRefund
* `GetTerminalCheckout` - GetTerminalCheckout
* `GetTerminalRefund` - GetTerminalRefund
* `SearchTerminalCheckouts` - SearchTerminalCheckouts
* `SearchTerminalRefunds` - SearchTerminalRefunds

### Transactions

* `CaptureTransaction` - CaptureTransaction
* `Charge` - Charge
* `ListTransactions` - ListTransactions
* `RetrieveTransaction` - RetrieveTransaction
* `VoidTransaction` - VoidTransaction
* `GetV2LocationsLocationIDRefunds` - ListRefunds
* `PostV2LocationsLocationIDTransactionsTransactionIDRefund` - CreateRefund

### V1Employees

* `CreateEmployee` - CreateEmployee
* `CreateEmployeeRole` - CreateEmployeeRole
* `ListEmployeeRoles` - ListEmployeeRoles
* `ListEmployees` - ListEmployees
* `RetrieveEmployee` - RetrieveEmployee
* `RetrieveEmployeeRole` - RetrieveEmployeeRole
* `UpdateEmployee` - UpdateEmployee
* `UpdateEmployeeRole` - UpdateEmployeeRole

### V1Transactions

* `CreateRefund` - CreateRefund
* `ListOrders` - ListOrders
* `ListPayments` - ListPayments
* `ListRefunds` - ListRefunds
* `ListSettlements` - ListSettlements
* `RetrieveOrder` - RetrieveOrder
* `RetrievePayment` - RetrievePayment
* `RetrieveSettlement` - RetrieveSettlement
* `UpdateOrder` - UpdateOrder
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
