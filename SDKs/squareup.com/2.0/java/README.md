# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDomainResponse;
import org.openapis.openapi.models.operations.RegisterDomainSecurity;
import org.openapis.openapi.models.shared.RegisterDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegisterDomainRequest req = new RegisterDomainRequest("corrupti");            

            RegisterDomainResponse res = sdk.applePay.registerDomain(req, new RegisterDomainSecurity("provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.registerDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [applePay](docs/applepay/README.md)

* [registerDomain](docs/applepay/README.md#registerdomain) - RegisterDomain

### [bankAccounts](docs/bankaccounts/README.md)

* [getBankAccount](docs/bankaccounts/README.md#getbankaccount) - GetBankAccount
* [getBankAccountByV1Id](docs/bankaccounts/README.md#getbankaccountbyv1id) - GetBankAccountByV1Id
* [listBankAccounts](docs/bankaccounts/README.md#listbankaccounts) - ListBankAccounts

### [bookings](docs/bookings/README.md)

* [cancelBooking](docs/bookings/README.md#cancelbooking) - CancelBooking
* [createBooking](docs/bookings/README.md#createbooking) - CreateBooking
* [listTeamMemberBookingProfiles](docs/bookings/README.md#listteammemberbookingprofiles) - ListTeamMemberBookingProfiles
* [retrieveBooking](docs/bookings/README.md#retrievebooking) - RetrieveBooking
* [retrieveBusinessBookingProfile](docs/bookings/README.md#retrievebusinessbookingprofile) - RetrieveBusinessBookingProfile
* [retrieveTeamMemberBookingProfile](docs/bookings/README.md#retrieveteammemberbookingprofile) - RetrieveTeamMemberBookingProfile
* [searchAvailability](docs/bookings/README.md#searchavailability) - SearchAvailability
* [updateBooking](docs/bookings/README.md#updatebooking) - UpdateBooking

### [cards](docs/cards/README.md)

* [createCard](docs/cards/README.md#createcard) - CreateCard
* [disableCard](docs/cards/README.md#disablecard) - DisableCard
* [listCards](docs/cards/README.md#listcards) - ListCards
* [retrieveCard](docs/cards/README.md#retrievecard) - RetrieveCard

### [cashDrawers](docs/cashdrawers/README.md)

* [listCashDrawerShiftEvents](docs/cashdrawers/README.md#listcashdrawershiftevents) - ListCashDrawerShiftEvents
* [listCashDrawerShifts](docs/cashdrawers/README.md#listcashdrawershifts) - ListCashDrawerShifts
* [retrieveCashDrawerShift](docs/cashdrawers/README.md#retrievecashdrawershift) - RetrieveCashDrawerShift

### [catalog](docs/catalog/README.md)

* [batchDeleteCatalogObjects](docs/catalog/README.md#batchdeletecatalogobjects) - BatchDeleteCatalogObjects
* [batchRetrieveCatalogObjects](docs/catalog/README.md#batchretrievecatalogobjects) - BatchRetrieveCatalogObjects
* [batchUpsertCatalogObjects](docs/catalog/README.md#batchupsertcatalogobjects) - BatchUpsertCatalogObjects
* [catalogInfo](docs/catalog/README.md#cataloginfo) - CatalogInfo
* [deleteCatalogObject](docs/catalog/README.md#deletecatalogobject) - DeleteCatalogObject
* [listCatalog](docs/catalog/README.md#listcatalog) - ListCatalog
* [retrieveCatalogObject](docs/catalog/README.md#retrievecatalogobject) - RetrieveCatalogObject
* [searchCatalogItems](docs/catalog/README.md#searchcatalogitems) - SearchCatalogItems
* [searchCatalogObjects](docs/catalog/README.md#searchcatalogobjects) - SearchCatalogObjects
* [updateItemModifierLists](docs/catalog/README.md#updateitemmodifierlists) - UpdateItemModifierLists
* [updateItemTaxes](docs/catalog/README.md#updateitemtaxes) - UpdateItemTaxes
* [upsertCatalogObject](docs/catalog/README.md#upsertcatalogobject) - UpsertCatalogObject

### [checkout](docs/checkout/README.md)

* [createCheckout](docs/checkout/README.md#createcheckout) - CreateCheckout

### [customerGroups](docs/customergroups/README.md)

* [createCustomerGroup](docs/customergroups/README.md#createcustomergroup) - CreateCustomerGroup
* [deleteCustomerGroup](docs/customergroups/README.md#deletecustomergroup) - DeleteCustomerGroup
* [listCustomerGroups](docs/customergroups/README.md#listcustomergroups) - ListCustomerGroups
* [retrieveCustomerGroup](docs/customergroups/README.md#retrievecustomergroup) - RetrieveCustomerGroup
* [updateCustomerGroup](docs/customergroups/README.md#updatecustomergroup) - UpdateCustomerGroup

### [customerSegments](docs/customersegments/README.md)

* [listCustomerSegments](docs/customersegments/README.md#listcustomersegments) - ListCustomerSegments
* [retrieveCustomerSegment](docs/customersegments/README.md#retrievecustomersegment) - RetrieveCustomerSegment

### [customers](docs/customers/README.md)

* [addGroupToCustomer](docs/customers/README.md#addgrouptocustomer) - AddGroupToCustomer
* [createCustomer](docs/customers/README.md#createcustomer) - CreateCustomer
* [createCustomerCard](docs/customers/README.md#createcustomercard) - CreateCustomerCard
* [deleteCustomer](docs/customers/README.md#deletecustomer) - DeleteCustomer
* [deleteCustomerCard](docs/customers/README.md#deletecustomercard) - DeleteCustomerCard
* [listCustomers](docs/customers/README.md#listcustomers) - ListCustomers
* [removeGroupFromCustomer](docs/customers/README.md#removegroupfromcustomer) - RemoveGroupFromCustomer
* [retrieveCustomer](docs/customers/README.md#retrievecustomer) - RetrieveCustomer
* [searchCustomers](docs/customers/README.md#searchcustomers) - SearchCustomers
* [updateCustomer](docs/customers/README.md#updatecustomer) - UpdateCustomer

### [devices](docs/devices/README.md)

* [createDeviceCode](docs/devices/README.md#createdevicecode) - CreateDeviceCode
* [getDeviceCode](docs/devices/README.md#getdevicecode) - GetDeviceCode
* [listDeviceCodes](docs/devices/README.md#listdevicecodes) - ListDeviceCodes

### [disputes](docs/disputes/README.md)

* [acceptDispute](docs/disputes/README.md#acceptdispute) - AcceptDispute
* [createDisputeEvidenceText](docs/disputes/README.md#createdisputeevidencetext) - CreateDisputeEvidenceText
* [deleteDisputeEvidence](docs/disputes/README.md#deletedisputeevidence) - DeleteDisputeEvidence
* [listDisputeEvidence](docs/disputes/README.md#listdisputeevidence) - ListDisputeEvidence
* [listDisputes](docs/disputes/README.md#listdisputes) - ListDisputes
* [retrieveDispute](docs/disputes/README.md#retrievedispute) - RetrieveDispute
* [retrieveDisputeEvidence](docs/disputes/README.md#retrievedisputeevidence) - RetrieveDisputeEvidence
* [submitEvidence](docs/disputes/README.md#submitevidence) - SubmitEvidence

### [employees](docs/employees/README.md)

* [getV2Employees](docs/employees/README.md#getv2employees) - ListEmployees
* [getV2EmployeesId](docs/employees/README.md#getv2employeesid) - RetrieveEmployee

### [giftCardActivities](docs/giftcardactivities/README.md)

* [createGiftCardActivity](docs/giftcardactivities/README.md#creategiftcardactivity) - CreateGiftCardActivity
* [listGiftCardActivities](docs/giftcardactivities/README.md#listgiftcardactivities) - ListGiftCardActivities

### [giftCards](docs/giftcards/README.md)

* [createGiftCard](docs/giftcards/README.md#creategiftcard) - CreateGiftCard
* [linkCustomerToGiftCard](docs/giftcards/README.md#linkcustomertogiftcard) - LinkCustomerToGiftCard
* [listGiftCards](docs/giftcards/README.md#listgiftcards) - ListGiftCards
* [retrieveGiftCard](docs/giftcards/README.md#retrievegiftcard) - RetrieveGiftCard
* [retrieveGiftCardFromGAN](docs/giftcards/README.md#retrievegiftcardfromgan) - RetrieveGiftCardFromGAN
* [retrieveGiftCardFromNonce](docs/giftcards/README.md#retrievegiftcardfromnonce) - RetrieveGiftCardFromNonce
* [unlinkCustomerFromGiftCard](docs/giftcards/README.md#unlinkcustomerfromgiftcard) - UnlinkCustomerFromGiftCard

### [inventory](docs/inventory/README.md)

* [batchChangeInventory](docs/inventory/README.md#batchchangeinventory) - BatchChangeInventory
* [batchRetrieveInventoryChanges](docs/inventory/README.md#batchretrieveinventorychanges) - BatchRetrieveInventoryChanges
* [batchRetrieveInventoryCounts](docs/inventory/README.md#batchretrieveinventorycounts) - BatchRetrieveInventoryCounts
* [deprecatedBatchChangeInventory](docs/inventory/README.md#deprecatedbatchchangeinventory) - DeprecatedBatchChangeInventory
* [deprecatedBatchRetrieveInventoryChanges](docs/inventory/README.md#deprecatedbatchretrieveinventorychanges) - DeprecatedBatchRetrieveInventoryChanges
* [deprecatedBatchRetrieveInventoryCounts](docs/inventory/README.md#deprecatedbatchretrieveinventorycounts) - DeprecatedBatchRetrieveInventoryCounts
* [deprecatedRetrieveInventoryAdjustment](docs/inventory/README.md#deprecatedretrieveinventoryadjustment) - DeprecatedRetrieveInventoryAdjustment
* [deprecatedRetrieveInventoryPhysicalCount](docs/inventory/README.md#deprecatedretrieveinventoryphysicalcount) - DeprecatedRetrieveInventoryPhysicalCount
* [retrieveInventoryAdjustment](docs/inventory/README.md#retrieveinventoryadjustment) - RetrieveInventoryAdjustment
* [retrieveInventoryChanges](docs/inventory/README.md#retrieveinventorychanges) - RetrieveInventoryChanges
* [retrieveInventoryCount](docs/inventory/README.md#retrieveinventorycount) - RetrieveInventoryCount
* [retrieveInventoryPhysicalCount](docs/inventory/README.md#retrieveinventoryphysicalcount) - RetrieveInventoryPhysicalCount
* [retrieveInventoryTransfer](docs/inventory/README.md#retrieveinventorytransfer) - RetrieveInventoryTransfer

### [invoices](docs/invoices/README.md)

* [cancelInvoice](docs/invoices/README.md#cancelinvoice) - CancelInvoice
* [createInvoice](docs/invoices/README.md#createinvoice) - CreateInvoice
* [deleteInvoice](docs/invoices/README.md#deleteinvoice) - DeleteInvoice
* [getInvoice](docs/invoices/README.md#getinvoice) - GetInvoice
* [listInvoices](docs/invoices/README.md#listinvoices) - ListInvoices
* [publishInvoice](docs/invoices/README.md#publishinvoice) - PublishInvoice
* [searchInvoices](docs/invoices/README.md#searchinvoices) - SearchInvoices
* [updateInvoice](docs/invoices/README.md#updateinvoice) - UpdateInvoice

### [labor](docs/labor/README.md)

* [createBreakType](docs/labor/README.md#createbreaktype) - CreateBreakType
* [createShift](docs/labor/README.md#createshift) - CreateShift
* [deleteBreakType](docs/labor/README.md#deletebreaktype) - DeleteBreakType
* [deleteShift](docs/labor/README.md#deleteshift) - DeleteShift
* [getBreakType](docs/labor/README.md#getbreaktype) - GetBreakType
* [getEmployeeWage](docs/labor/README.md#getemployeewage) - GetEmployeeWage
* [getShift](docs/labor/README.md#getshift) - GetShift
* [getTeamMemberWage](docs/labor/README.md#getteammemberwage) - GetTeamMemberWage
* [listBreakTypes](docs/labor/README.md#listbreaktypes) - ListBreakTypes
* [listEmployeeWages](docs/labor/README.md#listemployeewages) - ListEmployeeWages
* [listTeamMemberWages](docs/labor/README.md#listteammemberwages) - ListTeamMemberWages
* [listWorkweekConfigs](docs/labor/README.md#listworkweekconfigs) - ListWorkweekConfigs
* [searchShifts](docs/labor/README.md#searchshifts) - SearchShifts
* [updateBreakType](docs/labor/README.md#updatebreaktype) - UpdateBreakType
* [updateShift](docs/labor/README.md#updateshift) - UpdateShift
* [updateWorkweekConfig](docs/labor/README.md#updateworkweekconfig) - UpdateWorkweekConfig

### [locations](docs/locations/README.md)

* [createLocation](docs/locations/README.md#createlocation) - CreateLocation
* [listLocations](docs/locations/README.md#listlocations) - ListLocations
* [retrieveLocation](docs/locations/README.md#retrievelocation) - RetrieveLocation
* [updateLocation](docs/locations/README.md#updatelocation) - UpdateLocation

### [loyalty](docs/loyalty/README.md)

* [accumulateLoyaltyPoints](docs/loyalty/README.md#accumulateloyaltypoints) - AccumulateLoyaltyPoints
* [adjustLoyaltyPoints](docs/loyalty/README.md#adjustloyaltypoints) - AdjustLoyaltyPoints
* [calculateLoyaltyPoints](docs/loyalty/README.md#calculateloyaltypoints) - CalculateLoyaltyPoints
* [createLoyaltyAccount](docs/loyalty/README.md#createloyaltyaccount) - CreateLoyaltyAccount
* [createLoyaltyReward](docs/loyalty/README.md#createloyaltyreward) - CreateLoyaltyReward
* [deleteLoyaltyReward](docs/loyalty/README.md#deleteloyaltyreward) - DeleteLoyaltyReward
* [listLoyaltyPrograms](docs/loyalty/README.md#listloyaltyprograms) - ListLoyaltyPrograms
* [redeemLoyaltyReward](docs/loyalty/README.md#redeemloyaltyreward) - RedeemLoyaltyReward
* [retrieveLoyaltyAccount](docs/loyalty/README.md#retrieveloyaltyaccount) - RetrieveLoyaltyAccount
* [retrieveLoyaltyProgram](docs/loyalty/README.md#retrieveloyaltyprogram) - RetrieveLoyaltyProgram
* [retrieveLoyaltyReward](docs/loyalty/README.md#retrieveloyaltyreward) - RetrieveLoyaltyReward
* [searchLoyaltyAccounts](docs/loyalty/README.md#searchloyaltyaccounts) - SearchLoyaltyAccounts
* [searchLoyaltyEvents](docs/loyalty/README.md#searchloyaltyevents) - SearchLoyaltyEvents
* [searchLoyaltyRewards](docs/loyalty/README.md#searchloyaltyrewards) - SearchLoyaltyRewards

### [merchants](docs/merchants/README.md)

* [listMerchants](docs/merchants/README.md#listmerchants) - ListMerchants
* [retrieveMerchant](docs/merchants/README.md#retrievemerchant) - RetrieveMerchant

### [mobileAuthorization](docs/mobileauthorization/README.md)

* [createMobileAuthorizationCode](docs/mobileauthorization/README.md#createmobileauthorizationcode) - CreateMobileAuthorizationCode

### [oAuth](docs/oauth/README.md)

* [obtainToken](docs/oauth/README.md#obtaintoken) - ObtainToken
* [renewToken](docs/oauth/README.md#renewtoken) - RenewToken
* [revokeToken](docs/oauth/README.md#revoketoken) - RevokeToken

### [orders](docs/orders/README.md)

* [batchRetrieveOrders](docs/orders/README.md#batchretrieveorders) - BatchRetrieveOrders
* [calculateOrder](docs/orders/README.md#calculateorder) - CalculateOrder
* [createOrder](docs/orders/README.md#createorder) - CreateOrder
* [payOrder](docs/orders/README.md#payorder) - PayOrder
* [searchOrders](docs/orders/README.md#searchorders) - SearchOrders
* [getV2OrdersOrderId](docs/orders/README.md#getv2ordersorderid) - RetrieveOrder
* [putV2OrdersOrderId](docs/orders/README.md#putv2ordersorderid) - UpdateOrder

### [payments](docs/payments/README.md)

* [cancelPayment](docs/payments/README.md#cancelpayment) - CancelPayment
* [cancelPaymentByIdempotencyKey](docs/payments/README.md#cancelpaymentbyidempotencykey) - CancelPaymentByIdempotencyKey
* [completePayment](docs/payments/README.md#completepayment) - CompletePayment
* [createPayment](docs/payments/README.md#createpayment) - CreatePayment
* [getPayment](docs/payments/README.md#getpayment) - GetPayment
* [updatePayment](docs/payments/README.md#updatepayment) - UpdatePayment
* [getV2Payments](docs/payments/README.md#getv2payments) - ListPayments

### [refunds](docs/refunds/README.md)

* [getPaymentRefund](docs/refunds/README.md#getpaymentrefund) - GetPaymentRefund
* [listPaymentRefunds](docs/refunds/README.md#listpaymentrefunds) - ListPaymentRefunds
* [refundPayment](docs/refunds/README.md#refundpayment) - RefundPayment

### [sites](docs/sites/README.md)

* [listSites](docs/sites/README.md#listsites) - ListSites

### [snippets](docs/snippets/README.md)

* [deleteSnippet](docs/snippets/README.md#deletesnippet) - DeleteSnippet
* [retrieveSnippet](docs/snippets/README.md#retrievesnippet) - RetrieveSnippet
* [upsertSnippet](docs/snippets/README.md#upsertsnippet) - UpsertSnippet

### [subscriptions](docs/subscriptions/README.md)

* [cancelSubscription](docs/subscriptions/README.md#cancelsubscription) - CancelSubscription
* [createSubscription](docs/subscriptions/README.md#createsubscription) - CreateSubscription
* [listSubscriptionEvents](docs/subscriptions/README.md#listsubscriptionevents) - ListSubscriptionEvents
* [resumeSubscription](docs/subscriptions/README.md#resumesubscription) - ResumeSubscription
* [retrieveSubscription](docs/subscriptions/README.md#retrievesubscription) - RetrieveSubscription
* [searchSubscriptions](docs/subscriptions/README.md#searchsubscriptions) - SearchSubscriptions
* [updateSubscription](docs/subscriptions/README.md#updatesubscription) - UpdateSubscription

### [team](docs/team/README.md)

* [bulkCreateTeamMembers](docs/team/README.md#bulkcreateteammembers) - BulkCreateTeamMembers
* [bulkUpdateTeamMembers](docs/team/README.md#bulkupdateteammembers) - BulkUpdateTeamMembers
* [createTeamMember](docs/team/README.md#createteammember) - CreateTeamMember
* [retrieveTeamMember](docs/team/README.md#retrieveteammember) - RetrieveTeamMember
* [retrieveWageSetting](docs/team/README.md#retrievewagesetting) - RetrieveWageSetting
* [searchTeamMembers](docs/team/README.md#searchteammembers) - SearchTeamMembers
* [updateTeamMember](docs/team/README.md#updateteammember) - UpdateTeamMember
* [updateWageSetting](docs/team/README.md#updatewagesetting) - UpdateWageSetting

### [terminal](docs/terminal/README.md)

* [cancelTerminalCheckout](docs/terminal/README.md#cancelterminalcheckout) - CancelTerminalCheckout
* [cancelTerminalRefund](docs/terminal/README.md#cancelterminalrefund) - CancelTerminalRefund
* [createTerminalCheckout](docs/terminal/README.md#createterminalcheckout) - CreateTerminalCheckout
* [createTerminalRefund](docs/terminal/README.md#createterminalrefund) - CreateTerminalRefund
* [getTerminalCheckout](docs/terminal/README.md#getterminalcheckout) - GetTerminalCheckout
* [getTerminalRefund](docs/terminal/README.md#getterminalrefund) - GetTerminalRefund
* [searchTerminalCheckouts](docs/terminal/README.md#searchterminalcheckouts) - SearchTerminalCheckouts
* [searchTerminalRefunds](docs/terminal/README.md#searchterminalrefunds) - SearchTerminalRefunds

### [transactions](docs/transactions/README.md)

* [captureTransaction](docs/transactions/README.md#capturetransaction) - CaptureTransaction
* [charge](docs/transactions/README.md#charge) - Charge
* [listTransactions](docs/transactions/README.md#listtransactions) - ListTransactions
* [retrieveTransaction](docs/transactions/README.md#retrievetransaction) - RetrieveTransaction
* [voidTransaction](docs/transactions/README.md#voidtransaction) - VoidTransaction
* [getV2LocationsLocationIdRefunds](docs/transactions/README.md#getv2locationslocationidrefunds) - ListRefunds
* [postV2LocationsLocationIdTransactionsTransactionIdRefund](docs/transactions/README.md#postv2locationslocationidtransactionstransactionidrefund) - CreateRefund

### [v1Employees](docs/v1employees/README.md)

* [createEmployee](docs/v1employees/README.md#createemployee) - CreateEmployee
* [createEmployeeRole](docs/v1employees/README.md#createemployeerole) - CreateEmployeeRole
* [listEmployeeRoles](docs/v1employees/README.md#listemployeeroles) - ListEmployeeRoles
* [listEmployees](docs/v1employees/README.md#listemployees) - ListEmployees
* [retrieveEmployee](docs/v1employees/README.md#retrieveemployee) - RetrieveEmployee
* [retrieveEmployeeRole](docs/v1employees/README.md#retrieveemployeerole) - RetrieveEmployeeRole
* [updateEmployee](docs/v1employees/README.md#updateemployee) - UpdateEmployee
* [updateEmployeeRole](docs/v1employees/README.md#updateemployeerole) - UpdateEmployeeRole

### [v1Transactions](docs/v1transactions/README.md)

* [createRefund](docs/v1transactions/README.md#createrefund) - CreateRefund
* [listOrders](docs/v1transactions/README.md#listorders) - ListOrders
* [listPayments](docs/v1transactions/README.md#listpayments) - ListPayments
* [listRefunds](docs/v1transactions/README.md#listrefunds) - ListRefunds
* [listSettlements](docs/v1transactions/README.md#listsettlements) - ListSettlements
* [retrieveOrder](docs/v1transactions/README.md#retrieveorder) - RetrieveOrder
* [retrievePayment](docs/v1transactions/README.md#retrievepayment) - RetrievePayment
* [retrieveSettlement](docs/v1transactions/README.md#retrievesettlement) - RetrieveSettlement
* [updateOrder](docs/v1transactions/README.md#updateorder) - UpdateOrder
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
