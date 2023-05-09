# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/content/v2.1/go
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
* [ContentAccountsClaimwebsite](docs/accounts/README.md#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
* [ContentAccountsCredentialsCreate](docs/accounts/README.md#contentaccountscredentialscreate) - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* [ContentAccountsCustombatch](docs/accounts/README.md#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [ContentAccountsDelete](docs/accounts/README.md#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [ContentAccountsGet](docs/accounts/README.md#contentaccountsget) - Retrieves a Merchant Center account.
* [ContentAccountsInsert](docs/accounts/README.md#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [ContentAccountsLabelsCreate](docs/accounts/README.md#contentaccountslabelscreate) - Creates a new label, not assigned to any account.
* [ContentAccountsLabelsDelete](docs/accounts/README.md#contentaccountslabelsdelete) - Deletes a label and removes it from all accounts to which it was assigned.
* [ContentAccountsLabelsList](docs/accounts/README.md#contentaccountslabelslist) - Lists the labels assigned to an account.
* [ContentAccountsLabelsPatch](docs/accounts/README.md#contentaccountslabelspatch) - Updates a label.
* [ContentAccountsLink](docs/accounts/README.md#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [ContentAccountsList](docs/accounts/README.md#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [ContentAccountsListlinks](docs/accounts/README.md#contentaccountslistlinks) - Returns the list of accounts linked to your Merchant Center account.
* [ContentAccountsRequestphoneverification](docs/accounts/README.md#contentaccountsrequestphoneverification) - Request verification code to start phone verification.
* [ContentAccountsReturncarrierCreate](docs/accounts/README.md#contentaccountsreturncarriercreate) - Links return carrier to a merchant account.
* [ContentAccountsReturncarrierDelete](docs/accounts/README.md#contentaccountsreturncarrierdelete) - Delete a return carrier in the merchant account.
* [ContentAccountsReturncarrierList](docs/accounts/README.md#contentaccountsreturncarrierlist) - Lists available return carriers in the merchant account.
* [ContentAccountsReturncarrierPatch](docs/accounts/README.md#contentaccountsreturncarrierpatch) - Updates a return carrier in the merchant account.
* [ContentAccountsUpdate](docs/accounts/README.md#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* [ContentAccountsUpdatelabels](docs/accounts/README.md#contentaccountsupdatelabels) - Updates labels that are assigned to the Merchant Center account by CSS user.
* [ContentAccountsVerifyphonenumber](docs/accounts/README.md#contentaccountsverifyphonenumber) - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

### [Accountstatuses](docs/accountstatuses/README.md)

* [ContentAccountstatusesCustombatch](docs/accountstatuses/README.md#contentaccountstatusescustombatch) - Retrieves multiple Merchant Center account statuses in a single request.
* [ContentAccountstatusesGet](docs/accountstatuses/README.md#contentaccountstatusesget) - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* [ContentAccountstatusesList](docs/accountstatuses/README.md#contentaccountstatuseslist) - Lists the statuses of the sub-accounts in your Merchant Center account.

### [Accounttax](docs/accounttax/README.md)

* [ContentAccounttaxCustombatch](docs/accounttax/README.md#contentaccounttaxcustombatch) - Retrieves and updates tax settings of multiple accounts in a single request.
* [ContentAccounttaxGet](docs/accounttax/README.md#contentaccounttaxget) - Retrieves the tax settings of the account.
* [ContentAccounttaxList](docs/accounttax/README.md#contentaccounttaxlist) - Lists the tax settings of the sub-accounts in your Merchant Center account.
* [ContentAccounttaxUpdate](docs/accounttax/README.md#contentaccounttaxupdate) - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### [Buyongoogleprograms](docs/buyongoogleprograms/README.md)

* [ContentBuyongoogleprogramsActivate](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsactivate) - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* [ContentBuyongoogleprogramsGet](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsget) - Retrieves a status of the BoG program for your Merchant Center account.
* [ContentBuyongoogleprogramsOnboard](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsonboard) - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* [ContentBuyongoogleprogramsPatch](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramspatch) - Updates the status of the BoG program for your Merchant Center account.
* [ContentBuyongoogleprogramsPause](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramspause) - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* [ContentBuyongoogleprogramsRequestreview](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsrequestreview) - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

### [Collections](docs/collections/README.md)

* [ContentCollectionsCreate](docs/collections/README.md#contentcollectionscreate) - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* [ContentCollectionsDelete](docs/collections/README.md#contentcollectionsdelete) - Deletes a collection from your Merchant Center account.
* [ContentCollectionsGet](docs/collections/README.md#contentcollectionsget) - Retrieves a collection from your Merchant Center account.
* [ContentCollectionsList](docs/collections/README.md#contentcollectionslist) - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

### [Collectionstatuses](docs/collectionstatuses/README.md)

* [ContentCollectionstatusesGet](docs/collectionstatuses/README.md#contentcollectionstatusesget) - Gets the status of a collection from your Merchant Center account.
* [ContentCollectionstatusesList](docs/collectionstatuses/README.md#contentcollectionstatuseslist) - Lists the statuses of the collections in your Merchant Center account.

### [Conversionsources](docs/conversionsources/README.md)

* [ContentConversionsourcesCreate](docs/conversionsources/README.md#contentconversionsourcescreate) - Creates a new conversion source.
* [ContentConversionsourcesDelete](docs/conversionsources/README.md#contentconversionsourcesdelete) - Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
* [ContentConversionsourcesGet](docs/conversionsources/README.md#contentconversionsourcesget) - Fetches a conversion source.
* [ContentConversionsourcesList](docs/conversionsources/README.md#contentconversionsourceslist) - Retrieves the list of conversion sources the caller has access to.
* [ContentConversionsourcesPatch](docs/conversionsources/README.md#contentconversionsourcespatch) - Updates information of an existing conversion source.
* [ContentConversionsourcesUndelete](docs/conversionsources/README.md#contentconversionsourcesundelete) - Re-enables an archived conversion source.

### [Csses](docs/csses/README.md)

* [ContentCssesGet](docs/csses/README.md#contentcssesget) - Retrieves a single CSS domain by ID.
* [ContentCssesList](docs/csses/README.md#contentcsseslist) - Lists CSS domains affiliated with a CSS group.
* [ContentCssesUpdatelabels](docs/csses/README.md#contentcssesupdatelabels) - Updates labels that are assigned to a CSS domain by its CSS group.

### [Datafeeds](docs/datafeeds/README.md)

* [ContentDatafeedsCustombatch](docs/datafeeds/README.md#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [ContentDatafeedsDelete](docs/datafeeds/README.md#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [ContentDatafeedsFetchnow](docs/datafeeds/README.md#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
* [ContentDatafeedsGet](docs/datafeeds/README.md#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [ContentDatafeedsInsert](docs/datafeeds/README.md#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [ContentDatafeedsList](docs/datafeeds/README.md#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [ContentDatafeedsUpdate](docs/datafeeds/README.md#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### [Datafeedstatuses](docs/datafeedstatuses/README.md)

* [ContentDatafeedstatusesCustombatch](docs/datafeedstatuses/README.md#contentdatafeedstatusescustombatch) - Gets multiple Merchant Center datafeed statuses in a single request.
* [ContentDatafeedstatusesGet](docs/datafeedstatuses/README.md#contentdatafeedstatusesget) - Retrieves the status of a datafeed from your Merchant Center account.
* [ContentDatafeedstatusesList](docs/datafeedstatuses/README.md#contentdatafeedstatuseslist) - Lists the statuses of the datafeeds in your Merchant Center account.

### [Freelistingsprogram](docs/freelistingsprogram/README.md)

* [ContentFreelistingsprogramGet](docs/freelistingsprogram/README.md#contentfreelistingsprogramget) - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [ContentFreelistingsprogramRequestreview](docs/freelistingsprogram/README.md#contentfreelistingsprogramrequestreview) - Requests a review of free listings in a specific region. This method is only available to selected merchants.

### [Liasettings](docs/liasettings/README.md)

* [ContentLiasettingsCustombatch](docs/liasettings/README.md#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [ContentLiasettingsGet](docs/liasettings/README.md#contentliasettingsget) - Retrieves the LIA settings of the account.
* [ContentLiasettingsGetaccessiblegmbaccounts](docs/liasettings/README.md#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Business Profiles.
* [ContentLiasettingsList](docs/liasettings/README.md#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [ContentLiasettingsListposdataproviders](docs/liasettings/README.md#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [ContentLiasettingsRequestgmbaccess](docs/liasettings/README.md#contentliasettingsrequestgmbaccess) - Requests access to a specified Business Profile.
* [ContentLiasettingsRequestinventoryverification](docs/liasettings/README.md#contentliasettingsrequestinventoryverification) - Requests inventory validation for the specified country.
* [ContentLiasettingsSetinventoryverificationcontact](docs/liasettings/README.md#contentliasettingssetinventoryverificationcontact) - Sets the inventory verification contract for the specified country.
* [ContentLiasettingsSetposdataprovider](docs/liasettings/README.md#contentliasettingssetposdataprovider) - Sets the POS data provider for the specified country.
* [ContentLiasettingsUpdate](docs/liasettings/README.md#contentliasettingsupdate) - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### [Localinventory](docs/localinventory/README.md)

* [ContentLocalinventoryCustombatch](docs/localinventory/README.md#contentlocalinventorycustombatch) - Updates local inventory for multiple products or stores in a single request.
* [ContentLocalinventoryInsert](docs/localinventory/README.md#contentlocalinventoryinsert) - Updates the local inventory of a product in your Merchant Center account.

### [Orderinvoices](docs/orderinvoices/README.md)

* [ContentOrderinvoicesCreatechargeinvoice](docs/orderinvoices/README.md#contentorderinvoicescreatechargeinvoice) - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* [ContentOrderinvoicesCreaterefundinvoice](docs/orderinvoices/README.md#contentorderinvoicescreaterefundinvoice) - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### [Orderreports](docs/orderreports/README.md)

* [ContentOrderreportsListdisbursements](docs/orderreports/README.md#contentorderreportslistdisbursements) - Retrieves a report for disbursements from your Merchant Center account.
* [ContentOrderreportsListtransactions](docs/orderreports/README.md#contentorderreportslisttransactions) - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### [Orderreturns](docs/orderreturns/README.md)

* [ContentOrderreturnsAcknowledge](docs/orderreturns/README.md#contentorderreturnsacknowledge) - Acks an order return in your Merchant Center account.
* [ContentOrderreturnsCreateorderreturn](docs/orderreturns/README.md#contentorderreturnscreateorderreturn) - Create return in your Merchant Center account.
* [ContentOrderreturnsGet](docs/orderreturns/README.md#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [ContentOrderreturnsLabelsCreate](docs/orderreturns/README.md#contentorderreturnslabelscreate) - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* [ContentOrderreturnsList](docs/orderreturns/README.md#contentorderreturnslist) - Lists order returns in your Merchant Center account.
* [ContentOrderreturnsProcess](docs/orderreturns/README.md#contentorderreturnsprocess) - Processes return in your Merchant Center account.

### [Orders](docs/orders/README.md)

* [ContentOrdersAcknowledge](docs/orders/README.md#contentordersacknowledge) - Marks an order as acknowledged.
* [ContentOrdersAdvancetestorder](docs/orders/README.md#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [ContentOrdersCancel](docs/orders/README.md#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [ContentOrdersCancellineitem](docs/orders/README.md#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [ContentOrdersCanceltestorderbycustomer](docs/orders/README.md#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [ContentOrdersCaptureOrder](docs/orders/README.md#contentorderscaptureorder) - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* [ContentOrdersCreatetestorder](docs/orders/README.md#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [ContentOrdersCreatetestreturn](docs/orders/README.md#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [ContentOrdersGet](docs/orders/README.md#contentordersget) - Retrieves an order from your Merchant Center account.
* [ContentOrdersGetbymerchantorderid](docs/orders/README.md#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [ContentOrdersGettestordertemplate](docs/orders/README.md#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [ContentOrdersInstorerefundlineitem](docs/orders/README.md#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* [ContentOrdersList](docs/orders/README.md#contentorderslist) - Lists the orders in your Merchant Center account.
* [ContentOrdersRefunditem](docs/orders/README.md#contentordersrefunditem) - Issues a partial or total refund for items and shipment.
* [ContentOrdersRefundorder](docs/orders/README.md#contentordersrefundorder) - Issues a partial or total refund for an order.
* [ContentOrdersRejectreturnlineitem](docs/orders/README.md#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [ContentOrdersReturnrefundlineitem](docs/orders/README.md#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [ContentOrdersSetlineitemmetadata](docs/orders/README.md#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* [ContentOrdersShiplineitems](docs/orders/README.md#contentordersshiplineitems) - Marks line item(s) as shipped.
* [ContentOrdersUpdatelineitemshippingdetails](docs/orders/README.md#contentordersupdatelineitemshippingdetails) - Updates ship by and delivery by dates for a line item.
* [ContentOrdersUpdatemerchantorderid](docs/orders/README.md#contentordersupdatemerchantorderid) - Updates the merchant order ID for a given order.
* [ContentOrdersUpdateshipment](docs/orders/README.md#contentordersupdateshipment) - Updates a shipment's status, carrier, and/or tracking ID.

### [Ordertrackingsignals](docs/ordertrackingsignals/README.md)

* [ContentOrdertrackingsignalsCreate](docs/ordertrackingsignals/README.md#contentordertrackingsignalscreate) - Creates new order tracking signal.

### [Pos](docs/pos/README.md)

* [ContentPosCustombatch](docs/pos/README.md#contentposcustombatch) - Batches multiple POS-related calls in a single request.
* [ContentPosDelete](docs/pos/README.md#contentposdelete) - Deletes a store for the given merchant.
* [ContentPosGet](docs/pos/README.md#contentposget) - Retrieves information about the given store.
* [ContentPosInsert](docs/pos/README.md#contentposinsert) - Creates a store for the given merchant.
* [ContentPosInventory](docs/pos/README.md#contentposinventory) - Submit inventory for the given merchant.
* [ContentPosList](docs/pos/README.md#contentposlist) - Lists the stores of the target merchant.
* [ContentPosSale](docs/pos/README.md#contentpossale) - Submit a sale event for the given merchant.

### [Productdeliverytime](docs/productdeliverytime/README.md)

* [ContentProductdeliverytimeCreate](docs/productdeliverytime/README.md#contentproductdeliverytimecreate) - Creates or updates the delivery time of a product.
* [ContentProductdeliverytimeDelete](docs/productdeliverytime/README.md#contentproductdeliverytimedelete) - Deletes the delivery time of a product.
* [ContentProductdeliverytimeGet](docs/productdeliverytime/README.md#contentproductdeliverytimeget) - Gets `productDeliveryTime` by `productId`.

### [Products](docs/products/README.md)

* [ContentProductsCustombatch](docs/products/README.md#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [ContentProductsDelete](docs/products/README.md#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [ContentProductsGet](docs/products/README.md#contentproductsget) - Retrieves a product from your Merchant Center account.
* [ContentProductsInsert](docs/products/README.md#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [ContentProductsList](docs/products/README.md#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* [ContentProductsUpdate](docs/products/README.md#contentproductsupdate) - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

### [Productstatuses](docs/productstatuses/README.md)

* [ContentProductstatusesCustombatch](docs/productstatuses/README.md#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [ContentProductstatusesGet](docs/productstatuses/README.md#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [ContentProductstatusesList](docs/productstatuses/README.md#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.
* [ContentProductstatusesRepricingreportsList](docs/productstatuses/README.md#contentproductstatusesrepricingreportslist) - Lists the metrics report for a given Repricing product.

### [Promotions](docs/promotions/README.md)

* [ContentPromotionsCreate](docs/promotions/README.md#contentpromotionscreate) - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* [ContentPromotionsGet](docs/promotions/README.md#contentpromotionsget) - Retrieves a promotion from your Merchant Center account.

### [Pubsubnotificationsettings](docs/pubsubnotificationsettings/README.md)

* [ContentPubsubnotificationsettingsGet](docs/pubsubnotificationsettings/README.md#contentpubsubnotificationsettingsget) - Retrieves a Merchant Center account's pubsub notification settings.
* [ContentPubsubnotificationsettingsUpdate](docs/pubsubnotificationsettings/README.md#contentpubsubnotificationsettingsupdate) - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

### [Quotas](docs/quotas/README.md)

* [ContentQuotasList](docs/quotas/README.md#contentquotaslist) - Lists the daily call quota and usage per method for your Merchant Center account.

### [Recommendations](docs/recommendations/README.md)

* [ContentRecommendationsGenerate](docs/recommendations/README.md#contentrecommendationsgenerate) - Generates recommendations for a merchant.
* [ContentRecommendationsReportInteraction](docs/recommendations/README.md#contentrecommendationsreportinteraction) - Reports an interaction on a recommendation for a merchant.

### [Regionalinventory](docs/regionalinventory/README.md)

* [ContentRegionalinventoryCustombatch](docs/regionalinventory/README.md#contentregionalinventorycustombatch) - Updates regional inventory for multiple products or regions in a single request.
* [ContentRegionalinventoryInsert](docs/regionalinventory/README.md#contentregionalinventoryinsert) - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

### [Regions](docs/regions/README.md)

* [ContentRegionsCreate](docs/regions/README.md#contentregionscreate) - Creates a region definition in your Merchant Center account.
* [ContentRegionsDelete](docs/regions/README.md#contentregionsdelete) - Deletes a region definition from your Merchant Center account.
* [ContentRegionsGet](docs/regions/README.md#contentregionsget) - Retrieves a region defined in your Merchant Center account.
* [ContentRegionsList](docs/regions/README.md#contentregionslist) - Lists the regions in your Merchant Center account.
* [ContentRegionsPatch](docs/regions/README.md#contentregionspatch) - Updates a region definition in your Merchant Center account.

### [Reports](docs/reports/README.md)

* [ContentReportsSearch](docs/reports/README.md#contentreportssearch) - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

### [Repricingrules](docs/repricingrules/README.md)

* [ContentRepricingrulesCreate](docs/repricingrules/README.md#contentrepricingrulescreate) - Creates a repricing rule for your Merchant Center account.
* [ContentRepricingrulesDelete](docs/repricingrules/README.md#contentrepricingrulesdelete) - Deletes a repricing rule in your Merchant Center account.
* [ContentRepricingrulesGet](docs/repricingrules/README.md#contentrepricingrulesget) - Retrieves a repricing rule from your Merchant Center account.
* [ContentRepricingrulesList](docs/repricingrules/README.md#contentrepricingruleslist) - Lists the repricing rules in your Merchant Center account.
* [ContentRepricingrulesPatch](docs/repricingrules/README.md#contentrepricingrulespatch) - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* [ContentRepricingrulesRepricingreportsList](docs/repricingrules/README.md#contentrepricingrulesrepricingreportslist) - Lists the metrics report for a given Repricing rule.

### [Returnaddress](docs/returnaddress/README.md)

* [ContentReturnaddressCustombatch](docs/returnaddress/README.md#contentreturnaddresscustombatch) - Batches multiple return address related calls in a single request.
* [ContentReturnaddressDelete](docs/returnaddress/README.md#contentreturnaddressdelete) - Deletes a return address for the given Merchant Center account.
* [ContentReturnaddressGet](docs/returnaddress/README.md#contentreturnaddressget) - Gets a return address of the Merchant Center account.
* [ContentReturnaddressInsert](docs/returnaddress/README.md#contentreturnaddressinsert) - Inserts a return address for the Merchant Center account.
* [ContentReturnaddressList](docs/returnaddress/README.md#contentreturnaddresslist) - Lists the return addresses of the Merchant Center account.

### [Returnpolicy](docs/returnpolicy/README.md)

* [ContentReturnpolicyCustombatch](docs/returnpolicy/README.md#contentreturnpolicycustombatch) - Batches multiple return policy related calls in a single request.
* [ContentReturnpolicyDelete](docs/returnpolicy/README.md#contentreturnpolicydelete) - Deletes a return policy for the given Merchant Center account.
* [ContentReturnpolicyGet](docs/returnpolicy/README.md#contentreturnpolicyget) - Gets a return policy of the Merchant Center account.
* [ContentReturnpolicyInsert](docs/returnpolicy/README.md#contentreturnpolicyinsert) - Inserts a return policy for the Merchant Center account.
* [ContentReturnpolicyList](docs/returnpolicy/README.md#contentreturnpolicylist) - Lists the return policies of the Merchant Center account.

### [Returnpolicyonline](docs/returnpolicyonline/README.md)

* [ContentReturnpolicyonlineCreate](docs/returnpolicyonline/README.md#contentreturnpolicyonlinecreate) - Creates a new return policy.
* [ContentReturnpolicyonlineDelete](docs/returnpolicyonline/README.md#contentreturnpolicyonlinedelete) - Deletes an existing return policy.
* [ContentReturnpolicyonlineGet](docs/returnpolicyonline/README.md#contentreturnpolicyonlineget) - Gets an existing return policy.
* [ContentReturnpolicyonlineList](docs/returnpolicyonline/README.md#contentreturnpolicyonlinelist) - Lists all existing return policies.
* [ContentReturnpolicyonlinePatch](docs/returnpolicyonline/README.md#contentreturnpolicyonlinepatch) - Updates an existing return policy.

### [Settlementreports](docs/settlementreports/README.md)

* [ContentSettlementreportsGet](docs/settlementreports/README.md#contentsettlementreportsget) - Retrieves a settlement report from your Merchant Center account.
* [ContentSettlementreportsList](docs/settlementreports/README.md#contentsettlementreportslist) - Retrieves a list of settlement reports from your Merchant Center account.

### [Settlementtransactions](docs/settlementtransactions/README.md)

* [ContentSettlementtransactionsList](docs/settlementtransactions/README.md#contentsettlementtransactionslist) - Retrieves a list of transactions for the settlement.

### [Shippingsettings](docs/shippingsettings/README.md)

* [ContentShippingsettingsCustombatch](docs/shippingsettings/README.md#contentshippingsettingscustombatch) - Retrieves and updates the shipping settings of multiple accounts in a single request.
* [ContentShippingsettingsGet](docs/shippingsettings/README.md#contentshippingsettingsget) - Retrieves the shipping settings of the account.
* [ContentShippingsettingsGetsupportedcarriers](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedcarriers) - Retrieves supported carriers and carrier services for an account.
* [ContentShippingsettingsGetsupportedholidays](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedholidays) - Retrieves supported holidays for an account.
* [ContentShippingsettingsGetsupportedpickupservices](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedpickupservices) - Retrieves supported pickup services for an account.
* [ContentShippingsettingsList](docs/shippingsettings/README.md#contentshippingsettingslist) - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* [ContentShippingsettingsUpdate](docs/shippingsettings/README.md#contentshippingsettingsupdate) - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

### [Shoppingadsprogram](docs/shoppingadsprogram/README.md)

* [ContentShoppingadsprogramGet](docs/shoppingadsprogram/README.md#contentshoppingadsprogramget) - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [ContentShoppingadsprogramRequestreview](docs/shoppingadsprogram/README.md#contentshoppingadsprogramrequestreview) - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
