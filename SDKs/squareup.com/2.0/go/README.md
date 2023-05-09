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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ApplePay.RegisterDomain(ctx, shared.RegisterDomainRequest{
        DomainName: "corrupti",
    }, operations.RegisterDomainSecurity{
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


### [ApplePay](docs/applepay/README.md)

* [RegisterDomain](docs/applepay/README.md#registerdomain) - RegisterDomain

### [BankAccounts](docs/bankaccounts/README.md)

* [GetBankAccount](docs/bankaccounts/README.md#getbankaccount) - GetBankAccount
* [GetBankAccountByV1ID](docs/bankaccounts/README.md#getbankaccountbyv1id) - GetBankAccountByV1Id
* [ListBankAccounts](docs/bankaccounts/README.md#listbankaccounts) - ListBankAccounts

### [Bookings](docs/bookings/README.md)

* [CancelBooking](docs/bookings/README.md#cancelbooking) - CancelBooking
* [CreateBooking](docs/bookings/README.md#createbooking) - CreateBooking
* [ListTeamMemberBookingProfiles](docs/bookings/README.md#listteammemberbookingprofiles) - ListTeamMemberBookingProfiles
* [RetrieveBooking](docs/bookings/README.md#retrievebooking) - RetrieveBooking
* [RetrieveBusinessBookingProfile](docs/bookings/README.md#retrievebusinessbookingprofile) - RetrieveBusinessBookingProfile
* [RetrieveTeamMemberBookingProfile](docs/bookings/README.md#retrieveteammemberbookingprofile) - RetrieveTeamMemberBookingProfile
* [SearchAvailability](docs/bookings/README.md#searchavailability) - SearchAvailability
* [UpdateBooking](docs/bookings/README.md#updatebooking) - UpdateBooking

### [Cards](docs/cards/README.md)

* [CreateCard](docs/cards/README.md#createcard) - CreateCard
* [DisableCard](docs/cards/README.md#disablecard) - DisableCard
* [ListCards](docs/cards/README.md#listcards) - ListCards
* [RetrieveCard](docs/cards/README.md#retrievecard) - RetrieveCard

### [CashDrawers](docs/cashdrawers/README.md)

* [ListCashDrawerShiftEvents](docs/cashdrawers/README.md#listcashdrawershiftevents) - ListCashDrawerShiftEvents
* [ListCashDrawerShifts](docs/cashdrawers/README.md#listcashdrawershifts) - ListCashDrawerShifts
* [RetrieveCashDrawerShift](docs/cashdrawers/README.md#retrievecashdrawershift) - RetrieveCashDrawerShift

### [Catalog](docs/catalog/README.md)

* [BatchDeleteCatalogObjects](docs/catalog/README.md#batchdeletecatalogobjects) - BatchDeleteCatalogObjects
* [BatchRetrieveCatalogObjects](docs/catalog/README.md#batchretrievecatalogobjects) - BatchRetrieveCatalogObjects
* [BatchUpsertCatalogObjects](docs/catalog/README.md#batchupsertcatalogobjects) - BatchUpsertCatalogObjects
* [CatalogInfo](docs/catalog/README.md#cataloginfo) - CatalogInfo
* [DeleteCatalogObject](docs/catalog/README.md#deletecatalogobject) - DeleteCatalogObject
* [ListCatalog](docs/catalog/README.md#listcatalog) - ListCatalog
* [RetrieveCatalogObject](docs/catalog/README.md#retrievecatalogobject) - RetrieveCatalogObject
* [SearchCatalogItems](docs/catalog/README.md#searchcatalogitems) - SearchCatalogItems
* [SearchCatalogObjects](docs/catalog/README.md#searchcatalogobjects) - SearchCatalogObjects
* [UpdateItemModifierLists](docs/catalog/README.md#updateitemmodifierlists) - UpdateItemModifierLists
* [UpdateItemTaxes](docs/catalog/README.md#updateitemtaxes) - UpdateItemTaxes
* [UpsertCatalogObject](docs/catalog/README.md#upsertcatalogobject) - UpsertCatalogObject

### [Checkout](docs/checkout/README.md)

* [CreateCheckout](docs/checkout/README.md#createcheckout) - CreateCheckout

### [CustomerGroups](docs/customergroups/README.md)

* [CreateCustomerGroup](docs/customergroups/README.md#createcustomergroup) - CreateCustomerGroup
* [DeleteCustomerGroup](docs/customergroups/README.md#deletecustomergroup) - DeleteCustomerGroup
* [ListCustomerGroups](docs/customergroups/README.md#listcustomergroups) - ListCustomerGroups
* [RetrieveCustomerGroup](docs/customergroups/README.md#retrievecustomergroup) - RetrieveCustomerGroup
* [UpdateCustomerGroup](docs/customergroups/README.md#updatecustomergroup) - UpdateCustomerGroup

### [CustomerSegments](docs/customersegments/README.md)

* [ListCustomerSegments](docs/customersegments/README.md#listcustomersegments) - ListCustomerSegments
* [RetrieveCustomerSegment](docs/customersegments/README.md#retrievecustomersegment) - RetrieveCustomerSegment

### [Customers](docs/customers/README.md)

* [AddGroupToCustomer](docs/customers/README.md#addgrouptocustomer) - AddGroupToCustomer
* [CreateCustomer](docs/customers/README.md#createcustomer) - CreateCustomer
* [CreateCustomerCard](docs/customers/README.md#createcustomercard) - CreateCustomerCard
* [DeleteCustomer](docs/customers/README.md#deletecustomer) - DeleteCustomer
* [DeleteCustomerCard](docs/customers/README.md#deletecustomercard) - DeleteCustomerCard
* [ListCustomers](docs/customers/README.md#listcustomers) - ListCustomers
* [RemoveGroupFromCustomer](docs/customers/README.md#removegroupfromcustomer) - RemoveGroupFromCustomer
* [RetrieveCustomer](docs/customers/README.md#retrievecustomer) - RetrieveCustomer
* [SearchCustomers](docs/customers/README.md#searchcustomers) - SearchCustomers
* [UpdateCustomer](docs/customers/README.md#updatecustomer) - UpdateCustomer

### [Devices](docs/devices/README.md)

* [CreateDeviceCode](docs/devices/README.md#createdevicecode) - CreateDeviceCode
* [GetDeviceCode](docs/devices/README.md#getdevicecode) - GetDeviceCode
* [ListDeviceCodes](docs/devices/README.md#listdevicecodes) - ListDeviceCodes

### [Disputes](docs/disputes/README.md)

* [AcceptDispute](docs/disputes/README.md#acceptdispute) - AcceptDispute
* [CreateDisputeEvidenceText](docs/disputes/README.md#createdisputeevidencetext) - CreateDisputeEvidenceText
* [DeleteDisputeEvidence](docs/disputes/README.md#deletedisputeevidence) - DeleteDisputeEvidence
* [ListDisputeEvidence](docs/disputes/README.md#listdisputeevidence) - ListDisputeEvidence
* [ListDisputes](docs/disputes/README.md#listdisputes) - ListDisputes
* [RetrieveDispute](docs/disputes/README.md#retrievedispute) - RetrieveDispute
* [RetrieveDisputeEvidence](docs/disputes/README.md#retrievedisputeevidence) - RetrieveDisputeEvidence
* [SubmitEvidence](docs/disputes/README.md#submitevidence) - SubmitEvidence

### [Employees](docs/employees/README.md)

* [GetV2Employees](docs/employees/README.md#getv2employees) - ListEmployees
* [GetV2EmployeesID](docs/employees/README.md#getv2employeesid) - RetrieveEmployee

### [GiftCardActivities](docs/giftcardactivities/README.md)

* [CreateGiftCardActivity](docs/giftcardactivities/README.md#creategiftcardactivity) - CreateGiftCardActivity
* [ListGiftCardActivities](docs/giftcardactivities/README.md#listgiftcardactivities) - ListGiftCardActivities

### [GiftCards](docs/giftcards/README.md)

* [CreateGiftCard](docs/giftcards/README.md#creategiftcard) - CreateGiftCard
* [LinkCustomerToGiftCard](docs/giftcards/README.md#linkcustomertogiftcard) - LinkCustomerToGiftCard
* [ListGiftCards](docs/giftcards/README.md#listgiftcards) - ListGiftCards
* [RetrieveGiftCard](docs/giftcards/README.md#retrievegiftcard) - RetrieveGiftCard
* [RetrieveGiftCardFromGAN](docs/giftcards/README.md#retrievegiftcardfromgan) - RetrieveGiftCardFromGAN
* [RetrieveGiftCardFromNonce](docs/giftcards/README.md#retrievegiftcardfromnonce) - RetrieveGiftCardFromNonce
* [UnlinkCustomerFromGiftCard](docs/giftcards/README.md#unlinkcustomerfromgiftcard) - UnlinkCustomerFromGiftCard

### [Inventory](docs/inventory/README.md)

* [BatchChangeInventory](docs/inventory/README.md#batchchangeinventory) - BatchChangeInventory
* [BatchRetrieveInventoryChanges](docs/inventory/README.md#batchretrieveinventorychanges) - BatchRetrieveInventoryChanges
* [BatchRetrieveInventoryCounts](docs/inventory/README.md#batchretrieveinventorycounts) - BatchRetrieveInventoryCounts
* [DeprecatedBatchChangeInventory](docs/inventory/README.md#deprecatedbatchchangeinventory) - DeprecatedBatchChangeInventory
* [DeprecatedBatchRetrieveInventoryChanges](docs/inventory/README.md#deprecatedbatchretrieveinventorychanges) - DeprecatedBatchRetrieveInventoryChanges
* [DeprecatedBatchRetrieveInventoryCounts](docs/inventory/README.md#deprecatedbatchretrieveinventorycounts) - DeprecatedBatchRetrieveInventoryCounts
* [DeprecatedRetrieveInventoryAdjustment](docs/inventory/README.md#deprecatedretrieveinventoryadjustment) - DeprecatedRetrieveInventoryAdjustment
* [DeprecatedRetrieveInventoryPhysicalCount](docs/inventory/README.md#deprecatedretrieveinventoryphysicalcount) - DeprecatedRetrieveInventoryPhysicalCount
* [RetrieveInventoryAdjustment](docs/inventory/README.md#retrieveinventoryadjustment) - RetrieveInventoryAdjustment
* [RetrieveInventoryChanges](docs/inventory/README.md#retrieveinventorychanges) - RetrieveInventoryChanges
* [RetrieveInventoryCount](docs/inventory/README.md#retrieveinventorycount) - RetrieveInventoryCount
* [RetrieveInventoryPhysicalCount](docs/inventory/README.md#retrieveinventoryphysicalcount) - RetrieveInventoryPhysicalCount
* [RetrieveInventoryTransfer](docs/inventory/README.md#retrieveinventorytransfer) - RetrieveInventoryTransfer

### [Invoices](docs/invoices/README.md)

* [CancelInvoice](docs/invoices/README.md#cancelinvoice) - CancelInvoice
* [CreateInvoice](docs/invoices/README.md#createinvoice) - CreateInvoice
* [DeleteInvoice](docs/invoices/README.md#deleteinvoice) - DeleteInvoice
* [GetInvoice](docs/invoices/README.md#getinvoice) - GetInvoice
* [ListInvoices](docs/invoices/README.md#listinvoices) - ListInvoices
* [PublishInvoice](docs/invoices/README.md#publishinvoice) - PublishInvoice
* [SearchInvoices](docs/invoices/README.md#searchinvoices) - SearchInvoices
* [UpdateInvoice](docs/invoices/README.md#updateinvoice) - UpdateInvoice

### [Labor](docs/labor/README.md)

* [CreateBreakType](docs/labor/README.md#createbreaktype) - CreateBreakType
* [CreateShift](docs/labor/README.md#createshift) - CreateShift
* [DeleteBreakType](docs/labor/README.md#deletebreaktype) - DeleteBreakType
* [DeleteShift](docs/labor/README.md#deleteshift) - DeleteShift
* [GetBreakType](docs/labor/README.md#getbreaktype) - GetBreakType
* [GetEmployeeWage](docs/labor/README.md#getemployeewage) - GetEmployeeWage
* [GetShift](docs/labor/README.md#getshift) - GetShift
* [GetTeamMemberWage](docs/labor/README.md#getteammemberwage) - GetTeamMemberWage
* [ListBreakTypes](docs/labor/README.md#listbreaktypes) - ListBreakTypes
* [ListEmployeeWages](docs/labor/README.md#listemployeewages) - ListEmployeeWages
* [ListTeamMemberWages](docs/labor/README.md#listteammemberwages) - ListTeamMemberWages
* [ListWorkweekConfigs](docs/labor/README.md#listworkweekconfigs) - ListWorkweekConfigs
* [SearchShifts](docs/labor/README.md#searchshifts) - SearchShifts
* [UpdateBreakType](docs/labor/README.md#updatebreaktype) - UpdateBreakType
* [UpdateShift](docs/labor/README.md#updateshift) - UpdateShift
* [UpdateWorkweekConfig](docs/labor/README.md#updateworkweekconfig) - UpdateWorkweekConfig

### [Locations](docs/locations/README.md)

* [CreateLocation](docs/locations/README.md#createlocation) - CreateLocation
* [ListLocations](docs/locations/README.md#listlocations) - ListLocations
* [RetrieveLocation](docs/locations/README.md#retrievelocation) - RetrieveLocation
* [UpdateLocation](docs/locations/README.md#updatelocation) - UpdateLocation

### [Loyalty](docs/loyalty/README.md)

* [AccumulateLoyaltyPoints](docs/loyalty/README.md#accumulateloyaltypoints) - AccumulateLoyaltyPoints
* [AdjustLoyaltyPoints](docs/loyalty/README.md#adjustloyaltypoints) - AdjustLoyaltyPoints
* [CalculateLoyaltyPoints](docs/loyalty/README.md#calculateloyaltypoints) - CalculateLoyaltyPoints
* [CreateLoyaltyAccount](docs/loyalty/README.md#createloyaltyaccount) - CreateLoyaltyAccount
* [CreateLoyaltyReward](docs/loyalty/README.md#createloyaltyreward) - CreateLoyaltyReward
* [DeleteLoyaltyReward](docs/loyalty/README.md#deleteloyaltyreward) - DeleteLoyaltyReward
* [ListLoyaltyPrograms](docs/loyalty/README.md#listloyaltyprograms) - ListLoyaltyPrograms
* [RedeemLoyaltyReward](docs/loyalty/README.md#redeemloyaltyreward) - RedeemLoyaltyReward
* [RetrieveLoyaltyAccount](docs/loyalty/README.md#retrieveloyaltyaccount) - RetrieveLoyaltyAccount
* [RetrieveLoyaltyProgram](docs/loyalty/README.md#retrieveloyaltyprogram) - RetrieveLoyaltyProgram
* [RetrieveLoyaltyReward](docs/loyalty/README.md#retrieveloyaltyreward) - RetrieveLoyaltyReward
* [SearchLoyaltyAccounts](docs/loyalty/README.md#searchloyaltyaccounts) - SearchLoyaltyAccounts
* [SearchLoyaltyEvents](docs/loyalty/README.md#searchloyaltyevents) - SearchLoyaltyEvents
* [SearchLoyaltyRewards](docs/loyalty/README.md#searchloyaltyrewards) - SearchLoyaltyRewards

### [Merchants](docs/merchants/README.md)

* [ListMerchants](docs/merchants/README.md#listmerchants) - ListMerchants
* [RetrieveMerchant](docs/merchants/README.md#retrievemerchant) - RetrieveMerchant

### [MobileAuthorization](docs/mobileauthorization/README.md)

* [CreateMobileAuthorizationCode](docs/mobileauthorization/README.md#createmobileauthorizationcode) - CreateMobileAuthorizationCode

### [OAuth](docs/oauth/README.md)

* [ObtainToken](docs/oauth/README.md#obtaintoken) - ObtainToken
* [RenewToken](docs/oauth/README.md#renewtoken) - RenewToken
* [RevokeToken](docs/oauth/README.md#revoketoken) - RevokeToken

### [Orders](docs/orders/README.md)

* [BatchRetrieveOrders](docs/orders/README.md#batchretrieveorders) - BatchRetrieveOrders
* [CalculateOrder](docs/orders/README.md#calculateorder) - CalculateOrder
* [CreateOrder](docs/orders/README.md#createorder) - CreateOrder
* [PayOrder](docs/orders/README.md#payorder) - PayOrder
* [SearchOrders](docs/orders/README.md#searchorders) - SearchOrders
* [GetV2OrdersOrderID](docs/orders/README.md#getv2ordersorderid) - RetrieveOrder
* [PutV2OrdersOrderID](docs/orders/README.md#putv2ordersorderid) - UpdateOrder

### [Payments](docs/payments/README.md)

* [CancelPayment](docs/payments/README.md#cancelpayment) - CancelPayment
* [CancelPaymentByIdempotencyKey](docs/payments/README.md#cancelpaymentbyidempotencykey) - CancelPaymentByIdempotencyKey
* [CompletePayment](docs/payments/README.md#completepayment) - CompletePayment
* [CreatePayment](docs/payments/README.md#createpayment) - CreatePayment
* [GetPayment](docs/payments/README.md#getpayment) - GetPayment
* [UpdatePayment](docs/payments/README.md#updatepayment) - UpdatePayment
* [GetV2Payments](docs/payments/README.md#getv2payments) - ListPayments

### [Refunds](docs/refunds/README.md)

* [GetPaymentRefund](docs/refunds/README.md#getpaymentrefund) - GetPaymentRefund
* [ListPaymentRefunds](docs/refunds/README.md#listpaymentrefunds) - ListPaymentRefunds
* [RefundPayment](docs/refunds/README.md#refundpayment) - RefundPayment

### [Sites](docs/sites/README.md)

* [ListSites](docs/sites/README.md#listsites) - ListSites

### [Snippets](docs/snippets/README.md)

* [DeleteSnippet](docs/snippets/README.md#deletesnippet) - DeleteSnippet
* [RetrieveSnippet](docs/snippets/README.md#retrievesnippet) - RetrieveSnippet
* [UpsertSnippet](docs/snippets/README.md#upsertsnippet) - UpsertSnippet

### [Subscriptions](docs/subscriptions/README.md)

* [CancelSubscription](docs/subscriptions/README.md#cancelsubscription) - CancelSubscription
* [CreateSubscription](docs/subscriptions/README.md#createsubscription) - CreateSubscription
* [ListSubscriptionEvents](docs/subscriptions/README.md#listsubscriptionevents) - ListSubscriptionEvents
* [ResumeSubscription](docs/subscriptions/README.md#resumesubscription) - ResumeSubscription
* [RetrieveSubscription](docs/subscriptions/README.md#retrievesubscription) - RetrieveSubscription
* [SearchSubscriptions](docs/subscriptions/README.md#searchsubscriptions) - SearchSubscriptions
* [UpdateSubscription](docs/subscriptions/README.md#updatesubscription) - UpdateSubscription

### [Team](docs/team/README.md)

* [BulkCreateTeamMembers](docs/team/README.md#bulkcreateteammembers) - BulkCreateTeamMembers
* [BulkUpdateTeamMembers](docs/team/README.md#bulkupdateteammembers) - BulkUpdateTeamMembers
* [CreateTeamMember](docs/team/README.md#createteammember) - CreateTeamMember
* [RetrieveTeamMember](docs/team/README.md#retrieveteammember) - RetrieveTeamMember
* [RetrieveWageSetting](docs/team/README.md#retrievewagesetting) - RetrieveWageSetting
* [SearchTeamMembers](docs/team/README.md#searchteammembers) - SearchTeamMembers
* [UpdateTeamMember](docs/team/README.md#updateteammember) - UpdateTeamMember
* [UpdateWageSetting](docs/team/README.md#updatewagesetting) - UpdateWageSetting

### [Terminal](docs/terminal/README.md)

* [CancelTerminalCheckout](docs/terminal/README.md#cancelterminalcheckout) - CancelTerminalCheckout
* [CancelTerminalRefund](docs/terminal/README.md#cancelterminalrefund) - CancelTerminalRefund
* [CreateTerminalCheckout](docs/terminal/README.md#createterminalcheckout) - CreateTerminalCheckout
* [CreateTerminalRefund](docs/terminal/README.md#createterminalrefund) - CreateTerminalRefund
* [GetTerminalCheckout](docs/terminal/README.md#getterminalcheckout) - GetTerminalCheckout
* [GetTerminalRefund](docs/terminal/README.md#getterminalrefund) - GetTerminalRefund
* [SearchTerminalCheckouts](docs/terminal/README.md#searchterminalcheckouts) - SearchTerminalCheckouts
* [SearchTerminalRefunds](docs/terminal/README.md#searchterminalrefunds) - SearchTerminalRefunds

### [Transactions](docs/transactions/README.md)

* [CaptureTransaction](docs/transactions/README.md#capturetransaction) - CaptureTransaction
* [Charge](docs/transactions/README.md#charge) - Charge
* [ListTransactions](docs/transactions/README.md#listtransactions) - ListTransactions
* [RetrieveTransaction](docs/transactions/README.md#retrievetransaction) - RetrieveTransaction
* [VoidTransaction](docs/transactions/README.md#voidtransaction) - VoidTransaction
* [GetV2LocationsLocationIDRefunds](docs/transactions/README.md#getv2locationslocationidrefunds) - ListRefunds
* [PostV2LocationsLocationIDTransactionsTransactionIDRefund](docs/transactions/README.md#postv2locationslocationidtransactionstransactionidrefund) - CreateRefund

### [V1Employees](docs/v1employees/README.md)

* [CreateEmployee](docs/v1employees/README.md#createemployee) - CreateEmployee
* [CreateEmployeeRole](docs/v1employees/README.md#createemployeerole) - CreateEmployeeRole
* [ListEmployeeRoles](docs/v1employees/README.md#listemployeeroles) - ListEmployeeRoles
* [ListEmployees](docs/v1employees/README.md#listemployees) - ListEmployees
* [RetrieveEmployee](docs/v1employees/README.md#retrieveemployee) - RetrieveEmployee
* [RetrieveEmployeeRole](docs/v1employees/README.md#retrieveemployeerole) - RetrieveEmployeeRole
* [UpdateEmployee](docs/v1employees/README.md#updateemployee) - UpdateEmployee
* [UpdateEmployeeRole](docs/v1employees/README.md#updateemployeerole) - UpdateEmployeeRole

### [V1Transactions](docs/v1transactions/README.md)

* [CreateRefund](docs/v1transactions/README.md#createrefund) - CreateRefund
* [ListOrders](docs/v1transactions/README.md#listorders) - ListOrders
* [ListPayments](docs/v1transactions/README.md#listpayments) - ListPayments
* [ListRefunds](docs/v1transactions/README.md#listrefunds) - ListRefunds
* [ListSettlements](docs/v1transactions/README.md#listsettlements) - ListSettlements
* [RetrieveOrder](docs/v1transactions/README.md#retrieveorder) - RetrieveOrder
* [RetrievePayment](docs/v1transactions/README.md#retrievepayment) - RetrievePayment
* [RetrieveSettlement](docs/v1transactions/README.md#retrievesettlement) - RetrieveSettlement
* [UpdateOrder](docs/v1transactions/README.md#updateorder) - UpdateOrder
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
