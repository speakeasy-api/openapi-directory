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


### accounts

* `accountsBalancesRetrieve` - Access account balances.

Balances will be returned in Berlin Group PSD2 format.
* `accountsDetailsRetrieve` - Access account details.

Account details will be returned in Berlin Group PSD2 format.
* `accountsTransactionsRetrieve` - Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.
* `retrieveAccountMetadata` - Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.

### agreements

* `acceptEUA` - Accept an end-user agreement via the API
* `createEUAV2` - Create an end user agreement
* `deleteEUAByIdV2` - Delete an end user agreement
* `retrieveEUAByIdV2` - Retrieve end user agreement by ID
* `retrieveAllEUAsForAnEndUserV2` - Retrieve all end user agreements belonging to the company

### institutions

* `retrieveAllSupportedInstitutionsInAGivenCountry` - List all available institutions
* `retrieveInstitution` - Get details about a specific Institution

### payments

* `createPaymentForm` - Create payment
* `createPaymentJson` - Create payment
* `createPaymentMultipart` - Create payment
* `deletePeriodicPayment` - Delete periodic payment
* `listMinimumRequiredFieldsForInstitution` - List minimum required fields for institution
* `listPayments` - Retrieve all payments belonging to the company
* `paymentsCreditorsCreateForm` - API endpoints related to creditor accounts.
* `paymentsCreditorsCreateJson` - API endpoints related to creditor accounts.
* `paymentsCreditorsCreateMultipart` - API endpoints related to creditor accounts.
* `paymentsCreditorsDestroy` - API endpoints related to creditor accounts.
* `paymentsCreditorsList` - API endpoints related to creditor accounts.
* `paymentsCreditorsRetrieve` - API endpoints related to creditor accounts.
* `retrieveAllPaymentCreditorAccounts` - Retrieve all payment creditor accounts
* `retrievePayment` - Retrieve payment

### premium

* `retrieveAccountTransactionsV2` - Access account premium transactions.

### requisitions

* `deleteRequisitionByIdV2` - Delete requisition and its end user agreement
* `requisitionById` - Retrieve a requisition by ID
* `requisitionCreated` - Create a new requisition
* `retrieveAllRequisitions` - Retrieve all requisitions belonging to the company

### token

* `jwtObtain` - Obtain JWT pair
* `jwtRefresh` - Refresh access token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
