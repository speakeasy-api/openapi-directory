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
import org.openapis.openapi.models.operations.RetrieveAccountBalancesV2Request;
import org.openapis.openapi.models.operations.RetrieveAccountBalancesV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAccountBalancesV2Request req = new RetrieveAccountBalancesV2Request("9bd9d8d6-9a67-44e0-b467-cc8796ed151a");            

            RetrieveAccountBalancesV2Response res = sdk.accounts.retrieveAccountBalancesV2(req);

            if (res.retrieveAccountBalancesV2200ApplicationJSONObject != null) {
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


### [accounts](docs/accounts/README.md)

* [retrieveAccountBalancesV2](docs/accounts/README.md#retrieveaccountbalancesv2) - Access account balances.

Balances will be returned in Berlin Group PSD2 format.
* [retrieveAccountDetailsV2](docs/accounts/README.md#retrieveaccountdetailsv2) - Access account details.

Account details will be returned in Berlin Group PSD2 format.
* [retrieveAccountMetadata](docs/accounts/README.md#retrieveaccountmetadata) - Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.
* [retrieveAccountTransactionsV22](docs/accounts/README.md#retrieveaccounttransactionsv22) - Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

### [agreements](docs/agreements/README.md)

* [acceptEUA](docs/agreements/README.md#accepteua) - Accept an end-user agreement via the API
* [createEUAV2](docs/agreements/README.md#createeuav2) - API endpoints related to end-user agreements.
* [deleteEUAByIdV2](docs/agreements/README.md#deleteeuabyidv2) - Delete an end user agreement
* [retrieveEUAByIdV2](docs/agreements/README.md#retrieveeuabyidv2) - Retrieve end user agreement by ID
* [retrieveAllEUAsForAnEndUserV2](docs/agreements/README.md#retrievealleuasforanenduserv2) - API endpoints related to end-user agreements.

### [institutions](docs/institutions/README.md)

* [retrieveAllSupportedInstitutionsInAGivenCountry](docs/institutions/README.md#retrieveallsupportedinstitutionsinagivencountry) - List all available institutions
* [retrieveInstitution](docs/institutions/README.md#retrieveinstitution) - Get details about a specific Institution

### [payments](docs/payments/README.md)

* [createPaymentForm](docs/payments/README.md#createpaymentform) - Create payment
* [createPaymentJson](docs/payments/README.md#createpaymentjson) - Create payment
* [createPaymentMultipart](docs/payments/README.md#createpaymentmultipart) - Create payment
* [deletePeriodicPayment](docs/payments/README.md#deleteperiodicpayment) - Delete periodic payment
* [listMinimumRequiredFieldsForInstitution](docs/payments/README.md#listminimumrequiredfieldsforinstitution) - List minimum required fields for institution
* [listPayments](docs/payments/README.md#listpayments) - Retrieve all payments belonging to the company
* [paymentsCreditorsCreateForm](docs/payments/README.md#paymentscreditorscreateform) - API endpoints related to creditor accounts.
* [paymentsCreditorsCreateJson](docs/payments/README.md#paymentscreditorscreatejson) - API endpoints related to creditor accounts.
* [paymentsCreditorsCreateMultipart](docs/payments/README.md#paymentscreditorscreatemultipart) - API endpoints related to creditor accounts.
* [paymentsCreditorsDestroy](docs/payments/README.md#paymentscreditorsdestroy) - API endpoints related to creditor accounts.
* [paymentsCreditorsList](docs/payments/README.md#paymentscreditorslist) - API endpoints related to creditor accounts.
* [paymentsCreditorsRetrieve](docs/payments/README.md#paymentscreditorsretrieve) - API endpoints related to creditor accounts.
* [paymentsSubmitCreateForm](docs/payments/README.md#paymentssubmitcreateform) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [paymentsSubmitCreateJson](docs/payments/README.md#paymentssubmitcreatejson) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [paymentsSubmitCreateMultipart](docs/payments/README.md#paymentssubmitcreatemultipart) - Initiate the payment on bank's side.

Complete the payment and return payment details as a response.
* [retrieveAllPaymentCreditorAccounts](docs/payments/README.md#retrieveallpaymentcreditoraccounts) - Retrieve all payment creditor accounts
* [retrievePayment](docs/payments/README.md#retrievepayment) - Retrieve payment

### [premium](docs/premium/README.md)

* [retrieveAccountTransactionsV2](docs/premium/README.md#retrieveaccounttransactionsv2) - Access account premium transactions.

### [requisitions](docs/requisitions/README.md)

* [deleteRequisitionByIdV2](docs/requisitions/README.md#deleterequisitionbyidv2) - Delete requisition and its end user agreement
* [requisitionById](docs/requisitions/README.md#requisitionbyid) - Retrieve a requisition by ID
* [requisitionCreated](docs/requisitions/README.md#requisitioncreated) - Create a new requisition
* [retrieveAllRequisitions](docs/requisitions/README.md#retrieveallrequisitions) - Retrieve all requisitions belonging to the company

### [token](docs/token/README.md)

* [jwtObtain](docs/token/README.md#jwtobtain) - Obtain JWT pair
* [jwtRefresh](docs/token/README.md#jwtrefresh) - Refresh access token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
