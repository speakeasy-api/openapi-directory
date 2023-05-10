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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsAuthinfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContentAccountsAuthinfoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentAccountsAuthinfoRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'error';

    $requestSecurity = new ContentAccountsAuthinfoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->contentAccountsAuthinfo($request, $requestSecurity);

    if ($response->accountsAuthInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [contentAccountsAuthinfo](docs/accounts/README.md#contentaccountsauthinfo) - Returns information about the authenticated user.
* [contentAccountsClaimwebsite](docs/accounts/README.md#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account.
* [contentAccountsCustombatch](docs/accounts/README.md#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [contentAccountsDelete](docs/accounts/README.md#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [contentAccountsGet](docs/accounts/README.md#contentaccountsget) - Retrieves a Merchant Center account.
* [contentAccountsInsert](docs/accounts/README.md#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [contentAccountsLink](docs/accounts/README.md#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [contentAccountsList](docs/accounts/README.md#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [contentAccountsUpdate](docs/accounts/README.md#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

### [accountstatuses](docs/accountstatuses/README.md)

* [contentAccountstatusesCustombatch](docs/accountstatuses/README.md#contentaccountstatusescustombatch) - Retrieves multiple Merchant Center account statuses in a single request.
* [contentAccountstatusesGet](docs/accountstatuses/README.md#contentaccountstatusesget) - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* [contentAccountstatusesList](docs/accountstatuses/README.md#contentaccountstatuseslist) - Lists the statuses of the sub-accounts in your Merchant Center account.

### [accounttax](docs/accounttax/README.md)

* [contentAccounttaxCustombatch](docs/accounttax/README.md#contentaccounttaxcustombatch) - Retrieves and updates tax settings of multiple accounts in a single request.
* [contentAccounttaxGet](docs/accounttax/README.md#contentaccounttaxget) - Retrieves the tax settings of the account.
* [contentAccounttaxList](docs/accounttax/README.md#contentaccounttaxlist) - Lists the tax settings of the sub-accounts in your Merchant Center account.
* [contentAccounttaxUpdate](docs/accounttax/README.md#contentaccounttaxupdate) - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### [datafeeds](docs/datafeeds/README.md)

* [contentDatafeedsCustombatch](docs/datafeeds/README.md#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [contentDatafeedsDelete](docs/datafeeds/README.md#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [contentDatafeedsFetchnow](docs/datafeeds/README.md#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
* [contentDatafeedsGet](docs/datafeeds/README.md#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [contentDatafeedsInsert](docs/datafeeds/README.md#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [contentDatafeedsList](docs/datafeeds/README.md#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [contentDatafeedsUpdate](docs/datafeeds/README.md#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### [datafeedstatuses](docs/datafeedstatuses/README.md)

* [contentDatafeedstatusesCustombatch](docs/datafeedstatuses/README.md#contentdatafeedstatusescustombatch) - Gets multiple Merchant Center datafeed statuses in a single request.
* [contentDatafeedstatusesGet](docs/datafeedstatuses/README.md#contentdatafeedstatusesget) - Retrieves the status of a datafeed from your Merchant Center account.
* [contentDatafeedstatusesList](docs/datafeedstatuses/README.md#contentdatafeedstatuseslist) - Lists the statuses of the datafeeds in your Merchant Center account.

### [liasettings](docs/liasettings/README.md)

* [contentLiasettingsCustombatch](docs/liasettings/README.md#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [contentLiasettingsGet](docs/liasettings/README.md#contentliasettingsget) - Retrieves the LIA settings of the account.
* [contentLiasettingsGetaccessiblegmbaccounts](docs/liasettings/README.md#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Google My Business accounts.
* [contentLiasettingsList](docs/liasettings/README.md#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [contentLiasettingsListposdataproviders](docs/liasettings/README.md#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [contentLiasettingsRequestgmbaccess](docs/liasettings/README.md#contentliasettingsrequestgmbaccess) - Requests access to a specified Google My Business account.
* [contentLiasettingsRequestinventoryverification](docs/liasettings/README.md#contentliasettingsrequestinventoryverification) - Requests inventory validation for the specified country.
* [contentLiasettingsSetinventoryverificationcontact](docs/liasettings/README.md#contentliasettingssetinventoryverificationcontact) - Sets the inventory verification contract for the specified country.
* [contentLiasettingsSetposdataprovider](docs/liasettings/README.md#contentliasettingssetposdataprovider) - Sets the POS data provider for the specified country.
* [contentLiasettingsUpdate](docs/liasettings/README.md#contentliasettingsupdate) - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### [orderinvoices](docs/orderinvoices/README.md)

* [contentOrderinvoicesCreatechargeinvoice](docs/orderinvoices/README.md#contentorderinvoicescreatechargeinvoice) - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* [contentOrderinvoicesCreaterefundinvoice](docs/orderinvoices/README.md#contentorderinvoicescreaterefundinvoice) - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### [orderreports](docs/orderreports/README.md)

* [contentOrderreportsListdisbursements](docs/orderreports/README.md#contentorderreportslistdisbursements) - Retrieves a report for disbursements from your Merchant Center account.
* [contentOrderreportsListtransactions](docs/orderreports/README.md#contentorderreportslisttransactions) - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### [orderreturns](docs/orderreturns/README.md)

* [contentOrderreturnsGet](docs/orderreturns/README.md#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [contentOrderreturnsList](docs/orderreturns/README.md#contentorderreturnslist) - Lists order returns in your Merchant Center account.

### [orders](docs/orders/README.md)

* [contentOrdersAcknowledge](docs/orders/README.md#contentordersacknowledge) - Marks an order as acknowledged.
* [contentOrdersAdvancetestorder](docs/orders/README.md#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [contentOrdersCancel](docs/orders/README.md#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [contentOrdersCancellineitem](docs/orders/README.md#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [contentOrdersCanceltestorderbycustomer](docs/orders/README.md#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [contentOrdersCreatetestorder](docs/orders/README.md#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [contentOrdersCreatetestreturn](docs/orders/README.md#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [contentOrdersCustombatch](docs/orders/README.md#contentorderscustombatch) - Retrieves or modifies multiple orders in a single request.
* [contentOrdersGet](docs/orders/README.md#contentordersget) - Retrieves an order from your Merchant Center account.
* [contentOrdersGetbymerchantorderid](docs/orders/README.md#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [contentOrdersGettestordertemplate](docs/orders/README.md#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [contentOrdersInstorerefundlineitem](docs/orders/README.md#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* [contentOrdersList](docs/orders/README.md#contentorderslist) - Lists the orders in your Merchant Center account.
* [contentOrdersRefund](docs/orders/README.md#contentordersrefund) - Deprecated, please use returnRefundLineItem instead.
* [contentOrdersRejectreturnlineitem](docs/orders/README.md#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [contentOrdersReturnlineitem](docs/orders/README.md#contentordersreturnlineitem) - Returns a line item.
* [contentOrdersReturnrefundlineitem](docs/orders/README.md#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [contentOrdersSetlineitemmetadata](docs/orders/README.md#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* [contentOrdersShiplineitems](docs/orders/README.md#contentordersshiplineitems) - Marks line item(s) as shipped.
* [contentOrdersUpdatelineitemshippingdetails](docs/orders/README.md#contentordersupdatelineitemshippingdetails) - Updates ship by and delivery by dates for a line item.
* [contentOrdersUpdatemerchantorderid](docs/orders/README.md#contentordersupdatemerchantorderid) - Updates the merchant order ID for a given order.
* [contentOrdersUpdateshipment](docs/orders/README.md#contentordersupdateshipment) - Updates a shipment's status, carrier, and/or tracking ID.

### [pos](docs/pos/README.md)

* [contentPosCustombatch](docs/pos/README.md#contentposcustombatch) - Batches multiple POS-related calls in a single request.
* [contentPosDelete](docs/pos/README.md#contentposdelete) - Deletes a store for the given merchant.
* [contentPosGet](docs/pos/README.md#contentposget) - Retrieves information about the given store.
* [contentPosInsert](docs/pos/README.md#contentposinsert) - Creates a store for the given merchant.
* [contentPosInventory](docs/pos/README.md#contentposinventory) - Submit inventory for the given merchant.
* [contentPosList](docs/pos/README.md#contentposlist) - Lists the stores of the target merchant.
* [contentPosSale](docs/pos/README.md#contentpossale) - Submit a sale event for the given merchant.

### [products](docs/products/README.md)

* [contentProductsCustombatch](docs/products/README.md#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [contentProductsDelete](docs/products/README.md#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [contentProductsGet](docs/products/README.md#contentproductsget) - Retrieves a product from your Merchant Center account.
* [contentProductsInsert](docs/products/README.md#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [contentProductsList](docs/products/README.md#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

### [productstatuses](docs/productstatuses/README.md)

* [contentProductstatusesCustombatch](docs/productstatuses/README.md#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [contentProductstatusesGet](docs/productstatuses/README.md#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [contentProductstatusesList](docs/productstatuses/README.md#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.

### [shippingsettings](docs/shippingsettings/README.md)

* [contentShippingsettingsCustombatch](docs/shippingsettings/README.md#contentshippingsettingscustombatch) - Retrieves and updates the shipping settings of multiple accounts in a single request.
* [contentShippingsettingsGet](docs/shippingsettings/README.md#contentshippingsettingsget) - Retrieves the shipping settings of the account.
* [contentShippingsettingsGetsupportedcarriers](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedcarriers) - Retrieves supported carriers and carrier services for an account.
* [contentShippingsettingsGetsupportedholidays](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedholidays) - Retrieves supported holidays for an account.
* [contentShippingsettingsGetsupportedpickupservices](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedpickupservices) - Retrieves supported pickup services for an account.
* [contentShippingsettingsList](docs/shippingsettings/README.md#contentshippingsettingslist) - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* [contentShippingsettingsUpdate](docs/shippingsettings/README.md#contentshippingsettingsupdate) - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
