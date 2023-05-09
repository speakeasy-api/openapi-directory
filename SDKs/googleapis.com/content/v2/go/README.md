# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/content/v2/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.ContentAccountsAuthinfo(ctx, operations.ContentAccountsAuthinfoRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("error"),
    }, operations.ContentAccountsAuthinfoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsAuthInfoResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [ContentAccountsAuthinfo](docs/accounts/README.md#contentaccountsauthinfo) - Returns information about the authenticated user.
* [ContentAccountsClaimwebsite](docs/accounts/README.md#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account.
* [ContentAccountsCustombatch](docs/accounts/README.md#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [ContentAccountsDelete](docs/accounts/README.md#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [ContentAccountsGet](docs/accounts/README.md#contentaccountsget) - Retrieves a Merchant Center account.
* [ContentAccountsInsert](docs/accounts/README.md#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [ContentAccountsLink](docs/accounts/README.md#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [ContentAccountsList](docs/accounts/README.md#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [ContentAccountsUpdate](docs/accounts/README.md#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

### [Accountstatuses](docs/accountstatuses/README.md)

* [ContentAccountstatusesCustombatch](docs/accountstatuses/README.md#contentaccountstatusescustombatch) - Retrieves multiple Merchant Center account statuses in a single request.
* [ContentAccountstatusesGet](docs/accountstatuses/README.md#contentaccountstatusesget) - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* [ContentAccountstatusesList](docs/accountstatuses/README.md#contentaccountstatuseslist) - Lists the statuses of the sub-accounts in your Merchant Center account.

### [Accounttax](docs/accounttax/README.md)

* [ContentAccounttaxCustombatch](docs/accounttax/README.md#contentaccounttaxcustombatch) - Retrieves and updates tax settings of multiple accounts in a single request.
* [ContentAccounttaxGet](docs/accounttax/README.md#contentaccounttaxget) - Retrieves the tax settings of the account.
* [ContentAccounttaxList](docs/accounttax/README.md#contentaccounttaxlist) - Lists the tax settings of the sub-accounts in your Merchant Center account.
* [ContentAccounttaxUpdate](docs/accounttax/README.md#contentaccounttaxupdate) - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### [Datafeeds](docs/datafeeds/README.md)

* [ContentDatafeedsCustombatch](docs/datafeeds/README.md#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [ContentDatafeedsDelete](docs/datafeeds/README.md#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [ContentDatafeedsFetchnow](docs/datafeeds/README.md#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
* [ContentDatafeedsGet](docs/datafeeds/README.md#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [ContentDatafeedsInsert](docs/datafeeds/README.md#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [ContentDatafeedsList](docs/datafeeds/README.md#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [ContentDatafeedsUpdate](docs/datafeeds/README.md#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### [Datafeedstatuses](docs/datafeedstatuses/README.md)

* [ContentDatafeedstatusesCustombatch](docs/datafeedstatuses/README.md#contentdatafeedstatusescustombatch) - Gets multiple Merchant Center datafeed statuses in a single request.
* [ContentDatafeedstatusesGet](docs/datafeedstatuses/README.md#contentdatafeedstatusesget) - Retrieves the status of a datafeed from your Merchant Center account.
* [ContentDatafeedstatusesList](docs/datafeedstatuses/README.md#contentdatafeedstatuseslist) - Lists the statuses of the datafeeds in your Merchant Center account.

### [Liasettings](docs/liasettings/README.md)

* [ContentLiasettingsCustombatch](docs/liasettings/README.md#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [ContentLiasettingsGet](docs/liasettings/README.md#contentliasettingsget) - Retrieves the LIA settings of the account.
* [ContentLiasettingsGetaccessiblegmbaccounts](docs/liasettings/README.md#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Google My Business accounts.
* [ContentLiasettingsList](docs/liasettings/README.md#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [ContentLiasettingsListposdataproviders](docs/liasettings/README.md#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [ContentLiasettingsRequestgmbaccess](docs/liasettings/README.md#contentliasettingsrequestgmbaccess) - Requests access to a specified Google My Business account.
* [ContentLiasettingsRequestinventoryverification](docs/liasettings/README.md#contentliasettingsrequestinventoryverification) - Requests inventory validation for the specified country.
* [ContentLiasettingsSetinventoryverificationcontact](docs/liasettings/README.md#contentliasettingssetinventoryverificationcontact) - Sets the inventory verification contract for the specified country.
* [ContentLiasettingsSetposdataprovider](docs/liasettings/README.md#contentliasettingssetposdataprovider) - Sets the POS data provider for the specified country.
* [ContentLiasettingsUpdate](docs/liasettings/README.md#contentliasettingsupdate) - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### [Orderinvoices](docs/orderinvoices/README.md)

* [ContentOrderinvoicesCreatechargeinvoice](docs/orderinvoices/README.md#contentorderinvoicescreatechargeinvoice) - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* [ContentOrderinvoicesCreaterefundinvoice](docs/orderinvoices/README.md#contentorderinvoicescreaterefundinvoice) - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### [Orderreports](docs/orderreports/README.md)

* [ContentOrderreportsListdisbursements](docs/orderreports/README.md#contentorderreportslistdisbursements) - Retrieves a report for disbursements from your Merchant Center account.
* [ContentOrderreportsListtransactions](docs/orderreports/README.md#contentorderreportslisttransactions) - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### [Orderreturns](docs/orderreturns/README.md)

* [ContentOrderreturnsGet](docs/orderreturns/README.md#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [ContentOrderreturnsList](docs/orderreturns/README.md#contentorderreturnslist) - Lists order returns in your Merchant Center account.

### [Orders](docs/orders/README.md)

* [ContentOrdersAcknowledge](docs/orders/README.md#contentordersacknowledge) - Marks an order as acknowledged.
* [ContentOrdersAdvancetestorder](docs/orders/README.md#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [ContentOrdersCancel](docs/orders/README.md#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [ContentOrdersCancellineitem](docs/orders/README.md#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [ContentOrdersCanceltestorderbycustomer](docs/orders/README.md#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [ContentOrdersCreatetestorder](docs/orders/README.md#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [ContentOrdersCreatetestreturn](docs/orders/README.md#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [ContentOrdersCustombatch](docs/orders/README.md#contentorderscustombatch) - Retrieves or modifies multiple orders in a single request.
* [ContentOrdersGet](docs/orders/README.md#contentordersget) - Retrieves an order from your Merchant Center account.
* [ContentOrdersGetbymerchantorderid](docs/orders/README.md#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [ContentOrdersGettestordertemplate](docs/orders/README.md#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [ContentOrdersInstorerefundlineitem](docs/orders/README.md#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
* [ContentOrdersList](docs/orders/README.md#contentorderslist) - Lists the orders in your Merchant Center account.
* [ContentOrdersRefund](docs/orders/README.md#contentordersrefund) - Deprecated, please use returnRefundLineItem instead.
* [ContentOrdersRejectreturnlineitem](docs/orders/README.md#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [ContentOrdersReturnlineitem](docs/orders/README.md#contentordersreturnlineitem) - Returns a line item.
* [ContentOrdersReturnrefundlineitem](docs/orders/README.md#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [ContentOrdersSetlineitemmetadata](docs/orders/README.md#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* [ContentOrdersShiplineitems](docs/orders/README.md#contentordersshiplineitems) - Marks line item(s) as shipped.
* [ContentOrdersUpdatelineitemshippingdetails](docs/orders/README.md#contentordersupdatelineitemshippingdetails) - Updates ship by and delivery by dates for a line item.
* [ContentOrdersUpdatemerchantorderid](docs/orders/README.md#contentordersupdatemerchantorderid) - Updates the merchant order ID for a given order.
* [ContentOrdersUpdateshipment](docs/orders/README.md#contentordersupdateshipment) - Updates a shipment's status, carrier, and/or tracking ID.

### [Pos](docs/pos/README.md)

* [ContentPosCustombatch](docs/pos/README.md#contentposcustombatch) - Batches multiple POS-related calls in a single request.
* [ContentPosDelete](docs/pos/README.md#contentposdelete) - Deletes a store for the given merchant.
* [ContentPosGet](docs/pos/README.md#contentposget) - Retrieves information about the given store.
* [ContentPosInsert](docs/pos/README.md#contentposinsert) - Creates a store for the given merchant.
* [ContentPosInventory](docs/pos/README.md#contentposinventory) - Submit inventory for the given merchant.
* [ContentPosList](docs/pos/README.md#contentposlist) - Lists the stores of the target merchant.
* [ContentPosSale](docs/pos/README.md#contentpossale) - Submit a sale event for the given merchant.

### [Products](docs/products/README.md)

* [ContentProductsCustombatch](docs/products/README.md#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [ContentProductsDelete](docs/products/README.md#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [ContentProductsGet](docs/products/README.md#contentproductsget) - Retrieves a product from your Merchant Center account.
* [ContentProductsInsert](docs/products/README.md#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [ContentProductsList](docs/products/README.md#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

### [Productstatuses](docs/productstatuses/README.md)

* [ContentProductstatusesCustombatch](docs/productstatuses/README.md#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [ContentProductstatusesGet](docs/productstatuses/README.md#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [ContentProductstatusesList](docs/productstatuses/README.md#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.

### [Shippingsettings](docs/shippingsettings/README.md)

* [ContentShippingsettingsCustombatch](docs/shippingsettings/README.md#contentshippingsettingscustombatch) - Retrieves and updates the shipping settings of multiple accounts in a single request.
* [ContentShippingsettingsGet](docs/shippingsettings/README.md#contentshippingsettingsget) - Retrieves the shipping settings of the account.
* [ContentShippingsettingsGetsupportedcarriers](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedcarriers) - Retrieves supported carriers and carrier services for an account.
* [ContentShippingsettingsGetsupportedholidays](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedholidays) - Retrieves supported holidays for an account.
* [ContentShippingsettingsGetsupportedpickupservices](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedpickupservices) - Retrieves supported pickup services for an account.
* [ContentShippingsettingsList](docs/shippingsettings/README.md#contentshippingsettingslist) - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* [ContentShippingsettingsUpdate](docs/shippingsettings/README.md#contentshippingsettingsupdate) - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
