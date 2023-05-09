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
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonRequest;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJsappsCodeJsonRequest req = new DeleteJsappsCodeJsonRequest("corrupti", "provident", "distinctio");            

            DeleteJsappsCodeJsonResponse res = sdk.apps.deleteJsappsCodeJson(req);

            if (res.deleteJsappsCodeJSON200ApplicationJSONString != null) {
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


### [apps](docs/apps/README.md)

* [deleteJsappsCodeJson](docs/apps/README.md#deletejsappscodejson) - Delete an existing JSApp.
* [getJsappsJson](docs/apps/README.md#getjsappsjson) - Retrieve all the Store's JSApps.
* [getJsappsCodeJson](docs/apps/README.md#getjsappscodejson) - Retrieve a JSApp.
* [postJsappsJson](docs/apps/README.md#postjsappsjson) - Create a Store JSApp.

### [categories](docs/categories/README.md)

* [deleteCategoriesIdJson](docs/categories/README.md#deletecategoriesidjson) - Delete an existing Category.
* [getCategoriesJson](docs/categories/README.md#getcategoriesjson) - Retrieve all Categories.
* [getCategoriesCountJson](docs/categories/README.md#getcategoriescountjson) - Count all Categories.
* [getCategoriesIdJson](docs/categories/README.md#getcategoriesidjson) - Retrieve a single Category.
* [postCategoriesJson](docs/categories/README.md#postcategoriesjson) - Create a new Category.
* [putCategoriesIdJson](docs/categories/README.md#putcategoriesidjson) - Modify an existing Category.

### [checkoutCustomFields](docs/checkoutcustomfields/README.md)

* [deleteCheckoutCustomFieldsIdJson](docs/checkoutcustomfields/README.md#deletecheckoutcustomfieldsidjson) - Delete an existing CheckoutCustomField.
* [getCheckoutCustomFieldsJson](docs/checkoutcustomfields/README.md#getcheckoutcustomfieldsjson) - Retrieve all Checkout Custom Fields.
* [getCheckoutCustomFieldsIdJson](docs/checkoutcustomfields/README.md#getcheckoutcustomfieldsidjson) - Retrieve a single CheckoutCustomField.
* [postCheckoutCustomFieldsJson](docs/checkoutcustomfields/README.md#postcheckoutcustomfieldsjson) - Create a new CheckoutCustomField.
* [putCheckoutCustomFieldsIdJson](docs/checkoutcustomfields/README.md#putcheckoutcustomfieldsidjson) - Update a CheckoutCustomField.

### [countries](docs/countries/README.md)

* [getCountriesJson](docs/countries/README.md#getcountriesjson) - Retrieve all Countries.
* [getCountriesCountryCodeJson](docs/countries/README.md#getcountriescountrycodejson) - Retrieve a single Country information.
* [getCountriesCountryCodeRegionsJson](docs/countries/README.md#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [getCountriesCountryCodeRegionsRegionCodeJson](docs/countries/README.md#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

### [customFieldSelectOptions](docs/customfieldselectoptions/README.md)

* [getCustomFieldsIdSelectOptionsJson](docs/customfieldselectoptions/README.md#getcustomfieldsidselectoptionsjson) - Retrieve all Store's Custom Fields.
* [getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](docs/customfieldselectoptions/README.md#getcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Retrieve a single SelectOption from a CustomField.
* [postCustomFieldsIdSelectOptionsJson](docs/customfieldselectoptions/README.md#postcustomfieldsidselectoptionsjson) - Create a new Custom Field Select Option.
* [putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](docs/customfieldselectoptions/README.md#putcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Update a SelectOption from a CustomField.

### [customFields](docs/customfields/README.md)

* [deleteCustomFieldsIdJson](docs/customfields/README.md#deletecustomfieldsidjson) - Delete an existing CustomField.
* [deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](docs/customfields/README.md#deletecustomfieldsidselectoptionscustomfieldselectoptionidjson) - Delete an existing CustomFieldSelectOption.
* [getCustomFieldsJson](docs/customfields/README.md#getcustomfieldsjson) - Retrieve all Store's Custom Fields.
* [getCustomFieldsIdJson](docs/customfields/README.md#getcustomfieldsidjson) - Retrieve a single CustomField.
* [postCustomFieldsJson](docs/customfields/README.md#postcustomfieldsjson) - Create a new Custom Field.
* [putCustomFieldsIdJson](docs/customfields/README.md#putcustomfieldsidjson) - Update a CustomField.

### [customerAdditionalFields](docs/customeradditionalfields/README.md)

* [deleteCustomersIdFieldsFieldId](docs/customeradditionalfields/README.md#deletecustomersidfieldsfieldid) - Delete a Customer Additional Field.
* [getCustomersIdFields](docs/customeradditionalfields/README.md#getcustomersidfields) - Retrieves the Customer Additional Field of a Customer.
* [getCustomersIdFieldsFieldId](docs/customeradditionalfields/README.md#getcustomersidfieldsfieldid) - Retrieve a single Customer Additional Field.
* [postCustomersIdFields](docs/customeradditionalfields/README.md#postcustomersidfields) - Adds Customer Additional Fields to a Customer.
* [putCustomersIdFieldsFieldId](docs/customeradditionalfields/README.md#putcustomersidfieldsfieldid) - Update a Customer Additional Field.

### [customerCategories](docs/customercategories/README.md)

* [deleteCustomerCategoriesIdJson](docs/customercategories/README.md#deletecustomercategoriesidjson) - Delete an existing CustomerCategory.
* [deleteCustomerCategoriesIdCustomersJson](docs/customercategories/README.md#deletecustomercategoriesidcustomersjson) - Delete Customers from an existing CustomerCategory.
* [getCustomerCategoriesJson](docs/customercategories/README.md#getcustomercategoriesjson) - Retrieve all Customer Categories.
* [getCustomerCategoriesIdJson](docs/customercategories/README.md#getcustomercategoriesidjson) - Retrieve a single CustomerCategory.
* [getCustomerCategoriesIdCustomersJson](docs/customercategories/README.md#getcustomercategoriesidcustomersjson) - Retrieves the customers in a CustomerCategory.
* [postCustomerCategoriesJson](docs/customercategories/README.md#postcustomercategoriesjson) - Create a new CustomerCategory.
* [postCustomerCategoriesIdCustomersJson](docs/customercategories/README.md#postcustomercategoriesidcustomersjson) - Adds Customers to a CustomerCategory.
* [putCustomerCategoriesIdJson](docs/customercategories/README.md#putcustomercategoriesidjson) - Update a CustomerCategory.

### [customers](docs/customers/README.md)

* [deleteCustomersIdJson](docs/customers/README.md#deletecustomersidjson) - Delete an existing Customer.
* [getCustomersJson](docs/customers/README.md#getcustomersjson) - Retrieve all Customers.
* [getCustomersCountJson](docs/customers/README.md#getcustomerscountjson) - Count all Customers.
* [getCustomersEmailEmailJson](docs/customers/README.md#getcustomersemailemailjson) - Retrieve a single Customer by email.
* [getCustomersIdJson](docs/customers/README.md#getcustomersidjson) - Retrieve a single Customer by id.
* [postCustomersJson](docs/customers/README.md#postcustomersjson) - Create a new Customer.
* [putCustomersIdJson](docs/customers/README.md#putcustomersidjson) - Update a new Customer.

### [fulfillments](docs/fulfillments/README.md)

* [getFulfillmentsJson](docs/fulfillments/README.md#getfulfillmentsjson) - Retrieve all Fulfillments.
* [getFulfillmentsCountJson](docs/fulfillments/README.md#getfulfillmentscountjson) - Count all Fulfillments.
* [getFulfillmentsIdJson](docs/fulfillments/README.md#getfulfillmentsidjson) - Retrieve a single Fulfillment.
* [getOrderIdFulfillmentsJson](docs/fulfillments/README.md#getorderidfulfillmentsjson) - Retrieve the Fulfillments associated with the Order.

### [hooks](docs/hooks/README.md)

* [deleteHooksIdJson](docs/hooks/README.md#deletehooksidjson) - Delete an existing Hook.
* [getHooksJson](docs/hooks/README.md#gethooksjson) - Retrieve all Hooks.
* [getHooksIdJson](docs/hooks/README.md#gethooksidjson) - Retrieve a single Hook.
* [postHooksJson](docs/hooks/README.md#posthooksjson) - Create a new Hook.
* [putHooksIdJson](docs/hooks/README.md#puthooksidjson) - Update a Hook.

### [orders](docs/orders/README.md)

* [getOrdersJson](docs/orders/README.md#getordersjson) - Retrieve all Orders.
* [getOrdersAfterIdJson](docs/orders/README.md#getordersafteridjson) - Retrieve orders filtered by Order Id.
* [getOrdersCountJson](docs/orders/README.md#getorderscountjson) - Count all Orders.
* [getOrdersStatusStatusJson](docs/orders/README.md#getordersstatusstatusjson) - Retrieve orders filtered by status.
* [getOrdersIdJson](docs/orders/README.md#getordersidjson) - Retrieve a single Order.
* [getOrdersIdHistoryJson](docs/orders/README.md#getordersidhistoryjson) - Retrieve all Order History.
* [postOrdersJson](docs/orders/README.md#postordersjson) - Create a new Order.
* [postOrdersIdHistoryJson](docs/orders/README.md#postordersidhistoryjson) - Create a new Order History Entry.
* [putOrdersIdJson](docs/orders/README.md#putordersidjson) - Modify an existing Order.

### [pages](docs/pages/README.md)

* [deletePagesIdJson](docs/pages/README.md#deletepagesidjson) - Delete an existing Page.
* [getPagesJson](docs/pages/README.md#getpagesjson) - Retrieve all Pages.
* [getPagesCountJson](docs/pages/README.md#getpagescountjson) - Count all Pages.
* [getPagesIdJson](docs/pages/README.md#getpagesidjson) - Retrieve a single Page by id.
* [postPagesJson](docs/pages/README.md#postpagesjson) - Create a new Page.
* [putPagesIdJson](docs/pages/README.md#putpagesidjson) - Update a Page.

### [partners](docs/partners/README.md)

* [getPartnersStoresJson](docs/partners/README.md#getpartnersstoresjson) - Retrieve statistics.
* [getStoreCheckStatusJson](docs/partners/README.md#getstorecheckstatusjson) - Retrive store creation status.
* [postStoreCreateJson](docs/partners/README.md#poststorecreatejson) - Create a Partnered Store

### [paymentMethods](docs/paymentmethods/README.md)

* [getPaymentMethodsJson](docs/paymentmethods/README.md#getpaymentmethodsjson) - Retrieve all Store's Payment Methods.
* [getPaymentMethodsIdJson](docs/paymentmethods/README.md#getpaymentmethodsidjson) - Retrieve a single Payment Method.

### [productAttachments](docs/productattachments/README.md)

* [deleteProductsIdAttachmentsAttachmentIdJson](docs/productattachments/README.md#deleteproductsidattachmentsattachmentidjson) - Delete a Product Attachment.
* [getProductsIdAttachmentsJson](docs/productattachments/README.md#getproductsidattachmentsjson) - Retrieve all Product Attachments.
* [getProductsIdAttachmentsCountJson](docs/productattachments/README.md#getproductsidattachmentscountjson) - Count all Product Attachments.
* [getProductsIdAttachmentsAttachmentIdJson](docs/productattachments/README.md#getproductsidattachmentsattachmentidjson) - Retrieve a single Product Attachment.
* [postProductsIdAttachmentsJson](docs/productattachments/README.md#postproductsidattachmentsjson) - Create a new Product Attachment.

### [productCustomFields](docs/productcustomfields/README.md)

* [deleteProductsProductIdFieldsFieldIdJson](docs/productcustomfields/README.md#deleteproductsproductidfieldsfieldidjson) - Delete value of Product Custom Field
* [getProductsIdFieldsJson](docs/productcustomfields/README.md#getproductsidfieldsjson) - Retrieve all Product Custom Fields
* [getProductsIdFieldsCountJson](docs/productcustomfields/README.md#getproductsidfieldscountjson) - Count all Product Custom Fields.
* [postProductsIdFieldsJson](docs/productcustomfields/README.md#postproductsidfieldsjson) - Add an existing Custom Field to a Product.
* [putProductsProductIdFieldsFieldIdJson](docs/productcustomfields/README.md#putproductsproductidfieldsfieldidjson) - Update value of Product Custom Field

### [productDigitalProducts](docs/productdigitalproducts/README.md)

* [deleteProductsIdDigitalProductsDigitalProductIdJson](docs/productdigitalproducts/README.md#deleteproductsiddigitalproductsdigitalproductidjson) - Delete a Product DigitalProduct.
* [getProductsIdDigitalProductsJson](docs/productdigitalproducts/README.md#getproductsiddigitalproductsjson) - Retrieve all Product DigitalProducts.
* [getProductsIdDigitalProductsCountJson](docs/productdigitalproducts/README.md#getproductsiddigitalproductscountjson) - Count all Product DigitalProducts.
* [getProductsIdDigitalProductsDigitalProductIdJson](docs/productdigitalproducts/README.md#getproductsiddigitalproductsdigitalproductidjson) - Retrieve a single Product DigitalProduct.
* [postProductsIdDigitalProductsJson](docs/productdigitalproducts/README.md#postproductsiddigitalproductsjson) - Create a new Product DigitalProduct.

### [productImages](docs/productimages/README.md)

* [deleteProductsIdImagesImageIdJson](docs/productimages/README.md#deleteproductsidimagesimageidjson) - Delete a Product Image.
* [getProductsIdImagesJson](docs/productimages/README.md#getproductsidimagesjson) - Retrieve all Product Images.
* [getProductsIdImagesCountJson](docs/productimages/README.md#getproductsidimagescountjson) - Count all Product Images.
* [getProductsIdImagesImageIdJson](docs/productimages/README.md#getproductsidimagesimageidjson) - Retrieve a single Product Image.
* [postProductsIdImagesJson](docs/productimages/README.md#postproductsidimagesjson) - Create a new Product Image.

### [productOptionValues](docs/productoptionvalues/README.md)

* [deleteProductsIdOptionsOptionIdValuesValueIdJson](docs/productoptionvalues/README.md#deleteproductsidoptionsoptionidvaluesvalueidjson) - Delete a Product Option Value.
* [getProductsIdOptionsOptionIdValuesJson](docs/productoptionvalues/README.md#getproductsidoptionsoptionidvaluesjson) - Retrieve all Product Option Values.
* [getProductsIdOptionsOptionIdValuesCountJson](docs/productoptionvalues/README.md#getproductsidoptionsoptionidvaluescountjson) - Count all Product Option Values.
* [getProductsIdOptionsOptionIdValuesValueIdJson](docs/productoptionvalues/README.md#getproductsidoptionsoptionidvaluesvalueidjson) - Retrieve a single Product Option Value.
* [postProductsIdOptionsOptionIdValuesJson](docs/productoptionvalues/README.md#postproductsidoptionsoptionidvaluesjson) - Create a new Product Option Value.
* [putProductsIdOptionsOptionIdValuesValueIdJson](docs/productoptionvalues/README.md#putproductsidoptionsoptionidvaluesvalueidjson) - Modify an existing Product Option Value.

### [productOptions](docs/productoptions/README.md)

* [deleteProductsIdOptionsOptionIdJson](docs/productoptions/README.md#deleteproductsidoptionsoptionidjson) - Delete a Product Option.
* [getProductsIdOptionsJson](docs/productoptions/README.md#getproductsidoptionsjson) - Retrieve all Product Options.
* [getProductsIdOptionsCountJson](docs/productoptions/README.md#getproductsidoptionscountjson) - Count all Product Options.
* [getProductsIdOptionsOptionIdJson](docs/productoptions/README.md#getproductsidoptionsoptionidjson) - Retrieve a single Product Option.
* [postProductsIdOptionsJson](docs/productoptions/README.md#postproductsidoptionsjson) - Create a new Product Option.
* [putProductsIdOptionsOptionIdJson](docs/productoptions/README.md#putproductsidoptionsoptionidjson) - Modify an existing Product Option.

### [productVariants](docs/productvariants/README.md)

* [getProductsIdVariantsJson](docs/productvariants/README.md#getproductsidvariantsjson) - Retrieve all Product Variants.
* [getProductsIdVariantsCountJson](docs/productvariants/README.md#getproductsidvariantscountjson) - Count all Product Variants.
* [getProductsIdVariantsVariantIdJson](docs/productvariants/README.md#getproductsidvariantsvariantidjson) - Retrieve a single Product Variant.
* [postProductsIdVariantsJson](docs/productvariants/README.md#postproductsidvariantsjson) - Create a new Product Variant.
* [putProductsIdVariantsVariantIdJson](docs/productvariants/README.md#putproductsidvariantsvariantidjson) - Modify an existing Product Variant.

### [products](docs/products/README.md)

* [deleteProductsIdJson](docs/products/README.md#deleteproductsidjson) - Delete an existing Product.
* [getProductsJson](docs/products/README.md#getproductsjson) - Retrieve all Products.
* [getProductsAfterIdJson](docs/products/README.md#getproductsafteridjson) - Retrieves Products after the given id.
* [getProductsCategoryCategoryIdJson](docs/products/README.md#getproductscategorycategoryidjson) - Retrieve Products filtered by category.
* [getProductsCategoryCategoryIdCountJson](docs/products/README.md#getproductscategorycategoryidcountjson) - Count Products filtered by category.
* [getProductsCountJson](docs/products/README.md#getproductscountjson) - Count all Products.
* [getProductsSearchJson](docs/products/README.md#getproductssearchjson) - Retrieve a Product List from a query.
* [getProductsStatusStatusJson](docs/products/README.md#getproductsstatusstatusjson) - Retrieve Products filtered by status.
* [getProductsStatusStatusCountJson](docs/products/README.md#getproductsstatusstatuscountjson) - Count Products filtered by status.
* [getProductsIdJson](docs/products/README.md#getproductsidjson) - Retrieve a single Product.
* [postProductsJson](docs/products/README.md#postproductsjson) - Create a new Product.
* [putProductsIdJson](docs/products/README.md#putproductsidjson) - Modify an existing Product.

### [promotions](docs/promotions/README.md)

* [deletePromotionsIdJson](docs/promotions/README.md#deletepromotionsidjson) - Delete an existing Promotion.
* [getPromotionsJson](docs/promotions/README.md#getpromotionsjson) - Retrieve all Promotions.
* [getPromotionsIdJson](docs/promotions/README.md#getpromotionsidjson) - Retrieve a single Promotion.
* [postPromotionsJson](docs/promotions/README.md#postpromotionsjson) - Create a new Promotion.
* [putPromotionsIdJson](docs/promotions/README.md#putpromotionsidjson) - Update a Promotion.

### [regions](docs/regions/README.md)

* [getCountriesCountryCodeRegionsJson](docs/regions/README.md#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [getCountriesCountryCodeRegionsRegionCodeJson](docs/regions/README.md#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

### [shippingMethods](docs/shippingmethods/README.md)

* [deleteShippingMethodsIdJson](docs/shippingmethods/README.md#deleteshippingmethodsidjson) - Delete an existing Shipping Method.
* [getShippingMethodsJson](docs/shippingmethods/README.md#getshippingmethodsjson) - Retrieve all Store's Shipping Methods.
* [getShippingMethodsIdJson](docs/shippingmethods/README.md#getshippingmethodsidjson) - Retrieve a single Shipping Method.
* [postShippingMethodsJson](docs/shippingmethods/README.md#postshippingmethodsjson) - Creates a Shipping Method.
* [putShippingMethodsIdJson](docs/shippingmethods/README.md#putshippingmethodsidjson) - Update a Shipping Method.

### [stores](docs/stores/README.md)

* [getStoreInfoJson](docs/stores/README.md#getstoreinfojson) - Retrieve Store Information.
* [getStoreLanguagesJson](docs/stores/README.md#getstorelanguagesjson) - Retrieve Store Languages.

### [taxes](docs/taxes/README.md)

* [getTaxesJson](docs/taxes/README.md#gettaxesjson) - Retrieve all Taxes.
* [getTaxesIdJson](docs/taxes/README.md#gettaxesidjson) - Retrieve a single Tax information.
* [postTaxesJson](docs/taxes/README.md#posttaxesjson) - Create a new Tax.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
