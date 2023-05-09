# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nordigen.com/2.0 (v2)/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.RetrieveAccountBalancesV2(ctx, operations.RetrieveAccountBalancesV2Request{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveAccountBalancesV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [RetrieveAccountBalancesV2](docs/accounts/README.md#retrieveaccountbalancesv2) - Access account balances.

Balances will be returned in Berlin Group PSD2 format.
* [RetrieveAccountDetailsV2](docs/accounts/README.md#retrieveaccountdetailsv2) - Access account details.

Account details will be returned in Berlin Group PSD2 format.
* [RetrieveAccountMetadata](docs/accounts/README.md#retrieveaccountmetadata) - Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.
* [RetrieveAccountTransactionsV22](docs/accounts/README.md#retrieveaccounttransactionsv22) - Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

### [Agreements](docs/agreements/README.md)

* [AcceptEUA](docs/agreements/README.md#accepteua) - Accept an end-user agreement via the API
* [CreateEUAV2](docs/agreements/README.md#createeuav2) - API endpoints related to end-user agreements.
* [DeleteEUAByIDV2](docs/agreements/README.md#deleteeuabyidv2) - Delete an end user agreement
* [RetrieveEUAByIDV2](docs/agreements/README.md#retrieveeuabyidv2) - Retrieve end user agreement by ID
* [RetrieveAllEUAsForAnEndUserV2](docs/agreements/README.md#retrievealleuasforanenduserv2) - API endpoints related to end-user agreements.

### [Institutions](docs/institutions/README.md)

* [RetrieveAllSupportedInstitutionsInAGivenCountry](docs/institutions/README.md#retrieveallsupportedinstitutionsinagivencountry) - List all available institutions
* [RetrieveInstitution](docs/institutions/README.md#retrieveinstitution) - Get details about a specific Institution

### [Payments](docs/payments/README.md)

* [CreatePaymentForm](docs/payments/README.md#createpaymentform) - Create payment
* [CreatePaymentJSON](docs/payments/README.md#createpaymentjson) - Create payment
* [CreatePaymentMultipart](docs/payments/README.md#createpaymentmultipart) - Create payment
* [DeletePeriodicPayment](docs/payments/README.md#deleteperiodicpayment) - Delete periodic payment
* [ListMinimumRequiredFieldsForInstitution](docs/payments/README.md#listminimumrequiredfieldsforinstitution) - List minimum required fields for institution
* [ListPayments](docs/payments/README.md#listpayments) - Retrieve all payments belonging to the company
* [PaymentsCreditorsCreateForm](docs/payments/README.md#paymentscreditorscreateform) - API endpoints related to creditor accounts.
* [PaymentsCreditorsCreateJSON](docs/payments/README.md#paymentscreditorscreatejson) - API endpoints related to creditor accounts.
* [PaymentsCreditorsCreateMultipart](docs/payments/README.md#paymentscreditorscreatemultipart) - API endpoints related to creditor accounts.
* [PaymentsCreditorsDestroy](docs/payments/README.md#paymentscreditorsdestroy) - API endpoints related to creditor accounts.
* [PaymentsCreditorsList](docs/payments/README.md#paymentscreditorslist) - API endpoints related to creditor accounts.
* [PaymentsCreditorsRetrieve](docs/payments/README.md#paymentscreditorsretrieve) - API endpoints related to creditor accounts.
* [PaymentsSubmitCreateForm](docs/payments/README.md#paymentssubmitcreateform) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [PaymentsSubmitCreateJSON](docs/payments/README.md#paymentssubmitcreatejson) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [PaymentsSubmitCreateMultipart](docs/payments/README.md#paymentssubmitcreatemultipart) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [RetrieveAllPaymentCreditorAccounts](docs/payments/README.md#retrieveallpaymentcreditoraccounts) - Retrieve all payment creditor accounts
* [RetrievePayment](docs/payments/README.md#retrievepayment) - Retrieve payment

### [Premium](docs/premium/README.md)

* [RetrieveAccountTransactionsV2](docs/premium/README.md#retrieveaccounttransactionsv2) - Access account premium transactions.

### [Requisitions](docs/requisitions/README.md)

* [DeleteRequisitionByIDV2](docs/requisitions/README.md#deleterequisitionbyidv2) - Delete requisition and its end user agreement
* [RequisitionByID](docs/requisitions/README.md#requisitionbyid) - Retrieve a requisition by ID
* [RequisitionCreated](docs/requisitions/README.md#requisitioncreated) - Create a new requisition
* [RetrieveAllRequisitions](docs/requisitions/README.md#retrieveallrequisitions) - Retrieve all requisitions belonging to the company

### [Token](docs/token/README.md)

* [JWTObtain](docs/token/README.md#jwtobtain) - Obtain JWT pair
* [JWTRefresh](docs/token/README.md#jwtrefresh) - Refresh access token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
