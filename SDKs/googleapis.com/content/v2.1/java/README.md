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
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoRequest;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoResponse;
import org.openapis.openapi.models.operations.ContentAccountsAuthinfoSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentAccountsAuthinfoRequest req = new ContentAccountsAuthinfoRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "vel";
                uploadProtocol = "error";
            }};            

            ContentAccountsAuthinfoResponse res = sdk.accounts.contentAccountsAuthinfo(req, new ContentAccountsAuthinfoSecurity("deserunt", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountsAuthInfoResponse != null) {
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

* [contentAccountsAuthinfo](docs/accounts/README.md#contentaccountsauthinfo) - Returns information about the authenticated user.
* [contentAccountsClaimwebsite](docs/accounts/README.md#contentaccountsclaimwebsite) - Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
* [contentAccountsCredentialsCreate](docs/accounts/README.md#contentaccountscredentialscreate) - Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
* [contentAccountsCustombatch](docs/accounts/README.md#contentaccountscustombatch) - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
* [contentAccountsDelete](docs/accounts/README.md#contentaccountsdelete) - Deletes a Merchant Center sub-account.
* [contentAccountsGet](docs/accounts/README.md#contentaccountsget) - Retrieves a Merchant Center account.
* [contentAccountsInsert](docs/accounts/README.md#contentaccountsinsert) - Creates a Merchant Center sub-account.
* [contentAccountsLabelsCreate](docs/accounts/README.md#contentaccountslabelscreate) - Creates a new label, not assigned to any account.
* [contentAccountsLabelsDelete](docs/accounts/README.md#contentaccountslabelsdelete) - Deletes a label and removes it from all accounts to which it was assigned.
* [contentAccountsLabelsList](docs/accounts/README.md#contentaccountslabelslist) - Lists the labels assigned to an account.
* [contentAccountsLabelsPatch](docs/accounts/README.md#contentaccountslabelspatch) - Updates a label.
* [contentAccountsLink](docs/accounts/README.md#contentaccountslink) - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
* [contentAccountsList](docs/accounts/README.md#contentaccountslist) - Lists the sub-accounts in your Merchant Center account.
* [contentAccountsListlinks](docs/accounts/README.md#contentaccountslistlinks) - Returns the list of accounts linked to your Merchant Center account.
* [contentAccountsRequestphoneverification](docs/accounts/README.md#contentaccountsrequestphoneverification) - Request verification code to start phone verification.
* [contentAccountsReturncarrierCreate](docs/accounts/README.md#contentaccountsreturncarriercreate) - Links return carrier to a merchant account.
* [contentAccountsReturncarrierDelete](docs/accounts/README.md#contentaccountsreturncarrierdelete) - Delete a return carrier in the merchant account.
* [contentAccountsReturncarrierList](docs/accounts/README.md#contentaccountsreturncarrierlist) - Lists available return carriers in the merchant account.
* [contentAccountsReturncarrierPatch](docs/accounts/README.md#contentaccountsreturncarrierpatch) - Updates a return carrier in the merchant account.
* [contentAccountsUpdate](docs/accounts/README.md#contentaccountsupdate) - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
* [contentAccountsUpdatelabels](docs/accounts/README.md#contentaccountsupdatelabels) - Updates labels that are assigned to the Merchant Center account by CSS user.
* [contentAccountsVerifyphonenumber](docs/accounts/README.md#contentaccountsverifyphonenumber) - Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

### [accountstatuses](docs/accountstatuses/README.md)

* [contentAccountstatusesCustombatch](docs/accountstatuses/README.md#contentaccountstatusescustombatch) - Retrieves multiple Merchant Center account statuses in a single request.
* [contentAccountstatusesGet](docs/accountstatuses/README.md#contentaccountstatusesget) - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* [contentAccountstatusesList](docs/accountstatuses/README.md#contentaccountstatuseslist) - Lists the statuses of the sub-accounts in your Merchant Center account.

### [accounttax](docs/accounttax/README.md)

* [contentAccounttaxCustombatch](docs/accounttax/README.md#contentaccounttaxcustombatch) - Retrieves and updates tax settings of multiple accounts in a single request.
* [contentAccounttaxGet](docs/accounttax/README.md#contentaccounttaxget) - Retrieves the tax settings of the account.
* [contentAccounttaxList](docs/accounttax/README.md#contentaccounttaxlist) - Lists the tax settings of the sub-accounts in your Merchant Center account.
* [contentAccounttaxUpdate](docs/accounttax/README.md#contentaccounttaxupdate) - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

### [buyongoogleprograms](docs/buyongoogleprograms/README.md)

* [contentBuyongoogleprogramsActivate](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsactivate) - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* [contentBuyongoogleprogramsGet](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsget) - Retrieves a status of the BoG program for your Merchant Center account.
* [contentBuyongoogleprogramsOnboard](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsonboard) - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* [contentBuyongoogleprogramsPatch](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramspatch) - Updates the status of the BoG program for your Merchant Center account.
* [contentBuyongoogleprogramsPause](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramspause) - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* [contentBuyongoogleprogramsRequestreview](docs/buyongoogleprograms/README.md#contentbuyongoogleprogramsrequestreview) - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

### [collections](docs/collections/README.md)

* [contentCollectionsCreate](docs/collections/README.md#contentcollectionscreate) - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* [contentCollectionsDelete](docs/collections/README.md#contentcollectionsdelete) - Deletes a collection from your Merchant Center account.
* [contentCollectionsGet](docs/collections/README.md#contentcollectionsget) - Retrieves a collection from your Merchant Center account.
* [contentCollectionsList](docs/collections/README.md#contentcollectionslist) - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

### [collectionstatuses](docs/collectionstatuses/README.md)

* [contentCollectionstatusesGet](docs/collectionstatuses/README.md#contentcollectionstatusesget) - Gets the status of a collection from your Merchant Center account.
* [contentCollectionstatusesList](docs/collectionstatuses/README.md#contentcollectionstatuseslist) - Lists the statuses of the collections in your Merchant Center account.

### [conversionsources](docs/conversionsources/README.md)

* [contentConversionsourcesCreate](docs/conversionsources/README.md#contentconversionsourcescreate) - Creates a new conversion source.
* [contentConversionsourcesDelete](docs/conversionsources/README.md#contentconversionsourcesdelete) - Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
* [contentConversionsourcesGet](docs/conversionsources/README.md#contentconversionsourcesget) - Fetches a conversion source.
* [contentConversionsourcesList](docs/conversionsources/README.md#contentconversionsourceslist) - Retrieves the list of conversion sources the caller has access to.
* [contentConversionsourcesPatch](docs/conversionsources/README.md#contentconversionsourcespatch) - Updates information of an existing conversion source.
* [contentConversionsourcesUndelete](docs/conversionsources/README.md#contentconversionsourcesundelete) - Re-enables an archived conversion source.

### [csses](docs/csses/README.md)

* [contentCssesGet](docs/csses/README.md#contentcssesget) - Retrieves a single CSS domain by ID.
* [contentCssesList](docs/csses/README.md#contentcsseslist) - Lists CSS domains affiliated with a CSS group.
* [contentCssesUpdatelabels](docs/csses/README.md#contentcssesupdatelabels) - Updates labels that are assigned to a CSS domain by its CSS group.

### [datafeeds](docs/datafeeds/README.md)

* [contentDatafeedsCustombatch](docs/datafeeds/README.md#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [contentDatafeedsDelete](docs/datafeeds/README.md#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [contentDatafeedsFetchnow](docs/datafeeds/README.md#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
* [contentDatafeedsGet](docs/datafeeds/README.md#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [contentDatafeedsInsert](docs/datafeeds/README.md#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [contentDatafeedsList](docs/datafeeds/README.md#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [contentDatafeedsUpdate](docs/datafeeds/README.md#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### [datafeedstatuses](docs/datafeedstatuses/README.md)

* [contentDatafeedstatusesCustombatch](docs/datafeedstatuses/README.md#contentdatafeedstatusescustombatch) - Gets multiple Merchant Center datafeed statuses in a single request.
* [contentDatafeedstatusesGet](docs/datafeedstatuses/README.md#contentdatafeedstatusesget) - Retrieves the status of a datafeed from your Merchant Center account.
* [contentDatafeedstatusesList](docs/datafeedstatuses/README.md#contentdatafeedstatuseslist) - Lists the statuses of the datafeeds in your Merchant Center account.

### [freelistingsprogram](docs/freelistingsprogram/README.md)

* [contentFreelistingsprogramGet](docs/freelistingsprogram/README.md#contentfreelistingsprogramget) - Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [contentFreelistingsprogramRequestreview](docs/freelistingsprogram/README.md#contentfreelistingsprogramrequestreview) - Requests a review of free listings in a specific region. This method is only available to selected merchants.

### [liasettings](docs/liasettings/README.md)

* [contentLiasettingsCustombatch](docs/liasettings/README.md#contentliasettingscustombatch) - Retrieves and/or updates the LIA settings of multiple accounts in a single request.
* [contentLiasettingsGet](docs/liasettings/README.md#contentliasettingsget) - Retrieves the LIA settings of the account.
* [contentLiasettingsGetaccessiblegmbaccounts](docs/liasettings/README.md#contentliasettingsgetaccessiblegmbaccounts) - Retrieves the list of accessible Business Profiles.
* [contentLiasettingsList](docs/liasettings/README.md#contentliasettingslist) - Lists the LIA settings of the sub-accounts in your Merchant Center account.
* [contentLiasettingsListposdataproviders](docs/liasettings/README.md#contentliasettingslistposdataproviders) - Retrieves the list of POS data providers that have active settings for the all eiligible countries.
* [contentLiasettingsRequestgmbaccess](docs/liasettings/README.md#contentliasettingsrequestgmbaccess) - Requests access to a specified Business Profile.
* [contentLiasettingsRequestinventoryverification](docs/liasettings/README.md#contentliasettingsrequestinventoryverification) - Requests inventory validation for the specified country.
* [contentLiasettingsSetinventoryverificationcontact](docs/liasettings/README.md#contentliasettingssetinventoryverificationcontact) - Sets the inventory verification contract for the specified country.
* [contentLiasettingsSetposdataprovider](docs/liasettings/README.md#contentliasettingssetposdataprovider) - Sets the POS data provider for the specified country.
* [contentLiasettingsUpdate](docs/liasettings/README.md#contentliasettingsupdate) - Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

### [localinventory](docs/localinventory/README.md)

* [contentLocalinventoryCustombatch](docs/localinventory/README.md#contentlocalinventorycustombatch) - Updates local inventory for multiple products or stores in a single request.
* [contentLocalinventoryInsert](docs/localinventory/README.md#contentlocalinventoryinsert) - Updates the local inventory of a product in your Merchant Center account.

### [orderinvoices](docs/orderinvoices/README.md)

* [contentOrderinvoicesCreatechargeinvoice](docs/orderinvoices/README.md#contentorderinvoicescreatechargeinvoice) - Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
* [contentOrderinvoicesCreaterefundinvoice](docs/orderinvoices/README.md#contentorderinvoicescreaterefundinvoice) - Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.

### [orderreports](docs/orderreports/README.md)

* [contentOrderreportsListdisbursements](docs/orderreports/README.md#contentorderreportslistdisbursements) - Retrieves a report for disbursements from your Merchant Center account.
* [contentOrderreportsListtransactions](docs/orderreports/README.md#contentorderreportslisttransactions) - Retrieves a list of transactions for a disbursement from your Merchant Center account.

### [orderreturns](docs/orderreturns/README.md)

* [contentOrderreturnsAcknowledge](docs/orderreturns/README.md#contentorderreturnsacknowledge) - Acks an order return in your Merchant Center account.
* [contentOrderreturnsCreateorderreturn](docs/orderreturns/README.md#contentorderreturnscreateorderreturn) - Create return in your Merchant Center account.
* [contentOrderreturnsGet](docs/orderreturns/README.md#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [contentOrderreturnsLabelsCreate](docs/orderreturns/README.md#contentorderreturnslabelscreate) - Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
* [contentOrderreturnsList](docs/orderreturns/README.md#contentorderreturnslist) - Lists order returns in your Merchant Center account.
* [contentOrderreturnsProcess](docs/orderreturns/README.md#contentorderreturnsprocess) - Processes return in your Merchant Center account.

### [orders](docs/orders/README.md)

* [contentOrdersAcknowledge](docs/orders/README.md#contentordersacknowledge) - Marks an order as acknowledged.
* [contentOrdersAdvancetestorder](docs/orders/README.md#contentordersadvancetestorder) - Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
* [contentOrdersCancel](docs/orders/README.md#contentorderscancel) - Cancels all line items in an order, making a full refund.
* [contentOrdersCancellineitem](docs/orders/README.md#contentorderscancellineitem) - Cancels a line item, making a full refund.
* [contentOrdersCanceltestorderbycustomer](docs/orders/README.md#contentorderscanceltestorderbycustomer) - Sandbox only. Cancels a test order for customer-initiated cancellation.
* [contentOrdersCaptureOrder](docs/orders/README.md#contentorderscaptureorder) - Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
* [contentOrdersCreatetestorder](docs/orders/README.md#contentorderscreatetestorder) - Sandbox only. Creates a test order.
* [contentOrdersCreatetestreturn](docs/orders/README.md#contentorderscreatetestreturn) - Sandbox only. Creates a test return.
* [contentOrdersGet](docs/orders/README.md#contentordersget) - Retrieves an order from your Merchant Center account.
* [contentOrdersGetbymerchantorderid](docs/orders/README.md#contentordersgetbymerchantorderid) - Retrieves an order using merchant order ID.
* [contentOrdersGettestordertemplate](docs/orders/README.md#contentordersgettestordertemplate) - Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
* [contentOrdersInstorerefundlineitem](docs/orders/README.md#contentordersinstorerefundlineitem) - Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
* [contentOrdersList](docs/orders/README.md#contentorderslist) - Lists the orders in your Merchant Center account.
* [contentOrdersRefunditem](docs/orders/README.md#contentordersrefunditem) - Issues a partial or total refund for items and shipment.
* [contentOrdersRefundorder](docs/orders/README.md#contentordersrefundorder) - Issues a partial or total refund for an order.
* [contentOrdersRejectreturnlineitem](docs/orders/README.md#contentordersrejectreturnlineitem) - Rejects return on an line item.
* [contentOrdersReturnrefundlineitem](docs/orders/README.md#contentordersreturnrefundlineitem) - Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
* [contentOrdersSetlineitemmetadata](docs/orders/README.md#contentorderssetlineitemmetadata) - Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
* [contentOrdersShiplineitems](docs/orders/README.md#contentordersshiplineitems) - Marks line item(s) as shipped.
* [contentOrdersUpdatelineitemshippingdetails](docs/orders/README.md#contentordersupdatelineitemshippingdetails) - Updates ship by and delivery by dates for a line item.
* [contentOrdersUpdatemerchantorderid](docs/orders/README.md#contentordersupdatemerchantorderid) - Updates the merchant order ID for a given order.
* [contentOrdersUpdateshipment](docs/orders/README.md#contentordersupdateshipment) - Updates a shipment's status, carrier, and/or tracking ID.

### [ordertrackingsignals](docs/ordertrackingsignals/README.md)

* [contentOrdertrackingsignalsCreate](docs/ordertrackingsignals/README.md#contentordertrackingsignalscreate) - Creates new order tracking signal.

### [pos](docs/pos/README.md)

* [contentPosCustombatch](docs/pos/README.md#contentposcustombatch) - Batches multiple POS-related calls in a single request.
* [contentPosDelete](docs/pos/README.md#contentposdelete) - Deletes a store for the given merchant.
* [contentPosGet](docs/pos/README.md#contentposget) - Retrieves information about the given store.
* [contentPosInsert](docs/pos/README.md#contentposinsert) - Creates a store for the given merchant.
* [contentPosInventory](docs/pos/README.md#contentposinventory) - Submit inventory for the given merchant.
* [contentPosList](docs/pos/README.md#contentposlist) - Lists the stores of the target merchant.
* [contentPosSale](docs/pos/README.md#contentpossale) - Submit a sale event for the given merchant.

### [productdeliverytime](docs/productdeliverytime/README.md)

* [contentProductdeliverytimeCreate](docs/productdeliverytime/README.md#contentproductdeliverytimecreate) - Creates or updates the delivery time of a product.
* [contentProductdeliverytimeDelete](docs/productdeliverytime/README.md#contentproductdeliverytimedelete) - Deletes the delivery time of a product.
* [contentProductdeliverytimeGet](docs/productdeliverytime/README.md#contentproductdeliverytimeget) - Gets `productDeliveryTime` by `productId`.

### [products](docs/products/README.md)

* [contentProductsCustombatch](docs/products/README.md#contentproductscustombatch) - Retrieves, inserts, and deletes multiple products in a single request.
* [contentProductsDelete](docs/products/README.md#contentproductsdelete) - Deletes a product from your Merchant Center account.
* [contentProductsGet](docs/products/README.md#contentproductsget) - Retrieves a product from your Merchant Center account.
* [contentProductsInsert](docs/products/README.md#contentproductsinsert) - Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
* [contentProductsList](docs/products/README.md#contentproductslist) - Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
* [contentProductsUpdate](docs/products/README.md#contentproductsupdate) - Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

### [productstatuses](docs/productstatuses/README.md)

* [contentProductstatusesCustombatch](docs/productstatuses/README.md#contentproductstatusescustombatch) - Gets the statuses of multiple products in a single request.
* [contentProductstatusesGet](docs/productstatuses/README.md#contentproductstatusesget) - Gets the status of a product from your Merchant Center account.
* [contentProductstatusesList](docs/productstatuses/README.md#contentproductstatuseslist) - Lists the statuses of the products in your Merchant Center account.
* [contentProductstatusesRepricingreportsList](docs/productstatuses/README.md#contentproductstatusesrepricingreportslist) - Lists the metrics report for a given Repricing product.

### [promotions](docs/promotions/README.md)

* [contentPromotionsCreate](docs/promotions/README.md#contentpromotionscreate) - Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
* [contentPromotionsGet](docs/promotions/README.md#contentpromotionsget) - Retrieves a promotion from your Merchant Center account.

### [pubsubnotificationsettings](docs/pubsubnotificationsettings/README.md)

* [contentPubsubnotificationsettingsGet](docs/pubsubnotificationsettings/README.md#contentpubsubnotificationsettingsget) - Retrieves a Merchant Center account's pubsub notification settings.
* [contentPubsubnotificationsettingsUpdate](docs/pubsubnotificationsettings/README.md#contentpubsubnotificationsettingsupdate) - Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

### [quotas](docs/quotas/README.md)

* [contentQuotasList](docs/quotas/README.md#contentquotaslist) - Lists the daily call quota and usage per method for your Merchant Center account.

### [recommendations](docs/recommendations/README.md)

* [contentRecommendationsGenerate](docs/recommendations/README.md#contentrecommendationsgenerate) - Generates recommendations for a merchant.
* [contentRecommendationsReportInteraction](docs/recommendations/README.md#contentrecommendationsreportinteraction) - Reports an interaction on a recommendation for a merchant.

### [regionalinventory](docs/regionalinventory/README.md)

* [contentRegionalinventoryCustombatch](docs/regionalinventory/README.md#contentregionalinventorycustombatch) - Updates regional inventory for multiple products or regions in a single request.
* [contentRegionalinventoryInsert](docs/regionalinventory/README.md#contentregionalinventoryinsert) - Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

### [regions](docs/regions/README.md)

* [contentRegionsCreate](docs/regions/README.md#contentregionscreate) - Creates a region definition in your Merchant Center account.
* [contentRegionsDelete](docs/regions/README.md#contentregionsdelete) - Deletes a region definition from your Merchant Center account.
* [contentRegionsGet](docs/regions/README.md#contentregionsget) - Retrieves a region defined in your Merchant Center account.
* [contentRegionsList](docs/regions/README.md#contentregionslist) - Lists the regions in your Merchant Center account.
* [contentRegionsPatch](docs/regions/README.md#contentregionspatch) - Updates a region definition in your Merchant Center account.

### [reports](docs/reports/README.md)

* [contentReportsSearch](docs/reports/README.md#contentreportssearch) - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

### [repricingrules](docs/repricingrules/README.md)

* [contentRepricingrulesCreate](docs/repricingrules/README.md#contentrepricingrulescreate) - Creates a repricing rule for your Merchant Center account.
* [contentRepricingrulesDelete](docs/repricingrules/README.md#contentrepricingrulesdelete) - Deletes a repricing rule in your Merchant Center account.
* [contentRepricingrulesGet](docs/repricingrules/README.md#contentrepricingrulesget) - Retrieves a repricing rule from your Merchant Center account.
* [contentRepricingrulesList](docs/repricingrules/README.md#contentrepricingruleslist) - Lists the repricing rules in your Merchant Center account.
* [contentRepricingrulesPatch](docs/repricingrules/README.md#contentrepricingrulespatch) - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* [contentRepricingrulesRepricingreportsList](docs/repricingrules/README.md#contentrepricingrulesrepricingreportslist) - Lists the metrics report for a given Repricing rule.

### [returnaddress](docs/returnaddress/README.md)

* [contentReturnaddressCustombatch](docs/returnaddress/README.md#contentreturnaddresscustombatch) - Batches multiple return address related calls in a single request.
* [contentReturnaddressDelete](docs/returnaddress/README.md#contentreturnaddressdelete) - Deletes a return address for the given Merchant Center account.
* [contentReturnaddressGet](docs/returnaddress/README.md#contentreturnaddressget) - Gets a return address of the Merchant Center account.
* [contentReturnaddressInsert](docs/returnaddress/README.md#contentreturnaddressinsert) - Inserts a return address for the Merchant Center account.
* [contentReturnaddressList](docs/returnaddress/README.md#contentreturnaddresslist) - Lists the return addresses of the Merchant Center account.

### [returnpolicy](docs/returnpolicy/README.md)

* [contentReturnpolicyCustombatch](docs/returnpolicy/README.md#contentreturnpolicycustombatch) - Batches multiple return policy related calls in a single request.
* [contentReturnpolicyDelete](docs/returnpolicy/README.md#contentreturnpolicydelete) - Deletes a return policy for the given Merchant Center account.
* [contentReturnpolicyGet](docs/returnpolicy/README.md#contentreturnpolicyget) - Gets a return policy of the Merchant Center account.
* [contentReturnpolicyInsert](docs/returnpolicy/README.md#contentreturnpolicyinsert) - Inserts a return policy for the Merchant Center account.
* [contentReturnpolicyList](docs/returnpolicy/README.md#contentreturnpolicylist) - Lists the return policies of the Merchant Center account.

### [returnpolicyonline](docs/returnpolicyonline/README.md)

* [contentReturnpolicyonlineCreate](docs/returnpolicyonline/README.md#contentreturnpolicyonlinecreate) - Creates a new return policy.
* [contentReturnpolicyonlineDelete](docs/returnpolicyonline/README.md#contentreturnpolicyonlinedelete) - Deletes an existing return policy.
* [contentReturnpolicyonlineGet](docs/returnpolicyonline/README.md#contentreturnpolicyonlineget) - Gets an existing return policy.
* [contentReturnpolicyonlineList](docs/returnpolicyonline/README.md#contentreturnpolicyonlinelist) - Lists all existing return policies.
* [contentReturnpolicyonlinePatch](docs/returnpolicyonline/README.md#contentreturnpolicyonlinepatch) - Updates an existing return policy.

### [settlementreports](docs/settlementreports/README.md)

* [contentSettlementreportsGet](docs/settlementreports/README.md#contentsettlementreportsget) - Retrieves a settlement report from your Merchant Center account.
* [contentSettlementreportsList](docs/settlementreports/README.md#contentsettlementreportslist) - Retrieves a list of settlement reports from your Merchant Center account.

### [settlementtransactions](docs/settlementtransactions/README.md)

* [contentSettlementtransactionsList](docs/settlementtransactions/README.md#contentsettlementtransactionslist) - Retrieves a list of transactions for the settlement.

### [shippingsettings](docs/shippingsettings/README.md)

* [contentShippingsettingsCustombatch](docs/shippingsettings/README.md#contentshippingsettingscustombatch) - Retrieves and updates the shipping settings of multiple accounts in a single request.
* [contentShippingsettingsGet](docs/shippingsettings/README.md#contentshippingsettingsget) - Retrieves the shipping settings of the account.
* [contentShippingsettingsGetsupportedcarriers](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedcarriers) - Retrieves supported carriers and carrier services for an account.
* [contentShippingsettingsGetsupportedholidays](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedholidays) - Retrieves supported holidays for an account.
* [contentShippingsettingsGetsupportedpickupservices](docs/shippingsettings/README.md#contentshippingsettingsgetsupportedpickupservices) - Retrieves supported pickup services for an account.
* [contentShippingsettingsList](docs/shippingsettings/README.md#contentshippingsettingslist) - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* [contentShippingsettingsUpdate](docs/shippingsettings/README.md#contentshippingsettingsupdate) - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

### [shoppingadsprogram](docs/shoppingadsprogram/README.md)

* [contentShoppingadsprogramGet](docs/shoppingadsprogram/README.md#contentshoppingadsprogramget) - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [contentShoppingadsprogramRequestreview](docs/shoppingadsprogram/README.md#contentshoppingadsprogramrequestreview) - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
