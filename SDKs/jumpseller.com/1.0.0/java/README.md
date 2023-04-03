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

            DeleteJsappsCodeJsonRequest req = new DeleteJsappsCodeJsonRequest() {{
                authtoken = "corrupti";
                code = "provident";
                login = "distinctio";
            }}            

            DeleteJsappsCodeJsonResponse res = sdk.apps.deleteJsappsCodeJson(req);

            if (res.deleteJsappsCodeJSON200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apps

* `deleteJsappsCodeJson` - Delete an existing JSApp.
* `getJsappsJson` - Retrieve all the Store's JSApps.
* `getJsappsCodeJson` - Retrieve a JSApp.
* `postJsappsJson` - Create a Store JSApp.

### categories

* `deleteCategoriesIdJson` - Delete an existing Category.
* `getCategoriesJson` - Retrieve all Categories.
* `getCategoriesCountJson` - Count all Categories.
* `getCategoriesIdJson` - Retrieve a single Category.
* `postCategoriesJson` - Create a new Category.
* `putCategoriesIdJson` - Modify an existing Category.

### checkoutCustomFields

* `deleteCheckoutCustomFieldsIdJson` - Delete an existing CheckoutCustomField.
* `getCheckoutCustomFieldsJson` - Retrieve all Checkout Custom Fields.
* `getCheckoutCustomFieldsIdJson` - Retrieve a single CheckoutCustomField.
* `postCheckoutCustomFieldsJson` - Create a new CheckoutCustomField.
* `putCheckoutCustomFieldsIdJson` - Update a CheckoutCustomField.

### countries

* `getCountriesJson` - Retrieve all Countries.
* `getCountriesCountryCodeJson` - Retrieve a single Country information.
* `getCountriesCountryCodeRegionsJson` - Retrieve all Regions from a single Country.
* `getCountriesCountryCodeRegionsRegionCodeJson` - Retrieve a single Region information object.

### customFieldSelectOptions

* `getCustomFieldsIdSelectOptionsJson` - Retrieve all Store's Custom Fields.
* `getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson` - Retrieve a single SelectOption from a CustomField.
* `postCustomFieldsIdSelectOptionsJson` - Create a new Custom Field Select Option.
* `putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson` - Update a SelectOption from a CustomField.

### customFields

* `deleteCustomFieldsIdJson` - Delete an existing CustomField.
* `deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson` - Delete an existing CustomFieldSelectOption.
* `getCustomFieldsJson` - Retrieve all Store's Custom Fields.
* `getCustomFieldsIdJson` - Retrieve a single CustomField.
* `postCustomFieldsJson` - Create a new Custom Field.
* `putCustomFieldsIdJson` - Update a CustomField.

### customerAdditionalFields

* `deleteCustomersIdFieldsFieldId` - Delete a Customer Additional Field.
* `getCustomersIdFields` - Retrieves the Customer Additional Field of a Customer.
* `getCustomersIdFieldsFieldId` - Retrieve a single Customer Additional Field.
* `postCustomersIdFields` - Adds Customer Additional Fields to a Customer.
* `putCustomersIdFieldsFieldId` - Update a Customer Additional Field.

### customerCategories

* `deleteCustomerCategoriesIdJson` - Delete an existing CustomerCategory.
* `deleteCustomerCategoriesIdCustomersJson` - Delete Customers from an existing CustomerCategory.
* `getCustomerCategoriesJson` - Retrieve all Customer Categories.
* `getCustomerCategoriesIdJson` - Retrieve a single CustomerCategory.
* `getCustomerCategoriesIdCustomersJson` - Retrieves the customers in a CustomerCategory.
* `postCustomerCategoriesJson` - Create a new CustomerCategory.
* `postCustomerCategoriesIdCustomersJson` - Adds Customers to a CustomerCategory.
* `putCustomerCategoriesIdJson` - Update a CustomerCategory.

### customers

* `deleteCustomersIdJson` - Delete an existing Customer.
* `getCustomersJson` - Retrieve all Customers.
* `getCustomersCountJson` - Count all Customers.
* `getCustomersEmailEmailJson` - Retrieve a single Customer by email.
* `getCustomersIdJson` - Retrieve a single Customer by id.
* `postCustomersJson` - Create a new Customer.
* `putCustomersIdJson` - Update a new Customer.

### fulfillments

* `getFulfillmentsJson` - Retrieve all Fulfillments.
* `getFulfillmentsCountJson` - Count all Fulfillments.
* `getFulfillmentsIdJson` - Retrieve a single Fulfillment.
* `getOrderIdFulfillmentsJson` - Retrieve the Fulfillments associated with the Order.

### hooks

* `deleteHooksIdJson` - Delete an existing Hook.
* `getHooksJson` - Retrieve all Hooks.
* `getHooksIdJson` - Retrieve a single Hook.
* `postHooksJson` - Create a new Hook.
* `putHooksIdJson` - Update a Hook.

### orders

* `getOrdersJson` - Retrieve all Orders.
* `getOrdersAfterIdJson` - Retrieve orders filtered by Order Id.
* `getOrdersCountJson` - Count all Orders.
* `getOrdersStatusStatusJson` - Retrieve orders filtered by status.
* `getOrdersIdJson` - Retrieve a single Order.
* `getOrdersIdHistoryJson` - Retrieve all Order History.
* `postOrdersJson` - Create a new Order.
* `postOrdersIdHistoryJson` - Create a new Order History Entry.
* `putOrdersIdJson` - Modify an existing Order.

### pages

* `deletePagesIdJson` - Delete an existing Page.
* `getPagesJson` - Retrieve all Pages.
* `getPagesCountJson` - Count all Pages.
* `getPagesIdJson` - Retrieve a single Page by id.
* `postPagesJson` - Create a new Page.
* `putPagesIdJson` - Update a Page.

### partners

* `getPartnersStoresJson` - Retrieve statistics.
* `getStoreCheckStatusJson` - Retrive store creation status.
* `postStoreCreateJson` - Create a Partnered Store

### paymentMethods

* `getPaymentMethodsJson` - Retrieve all Store's Payment Methods.
* `getPaymentMethodsIdJson` - Retrieve a single Payment Method.

### productAttachments

* `deleteProductsIdAttachmentsAttachmentIdJson` - Delete a Product Attachment.
* `getProductsIdAttachmentsJson` - Retrieve all Product Attachments.
* `getProductsIdAttachmentsCountJson` - Count all Product Attachments.
* `getProductsIdAttachmentsAttachmentIdJson` - Retrieve a single Product Attachment.
* `postProductsIdAttachmentsJson` - Create a new Product Attachment.

### productCustomFields

* `deleteProductsProductIdFieldsFieldIdJson` - Delete value of Product Custom Field
* `getProductsIdFieldsJson` - Retrieve all Product Custom Fields
* `getProductsIdFieldsCountJson` - Count all Product Custom Fields.
* `postProductsIdFieldsJson` - Add an existing Custom Field to a Product.
* `putProductsProductIdFieldsFieldIdJson` - Update value of Product Custom Field

### productDigitalProducts

* `deleteProductsIdDigitalProductsDigitalProductIdJson` - Delete a Product DigitalProduct.
* `getProductsIdDigitalProductsJson` - Retrieve all Product DigitalProducts.
* `getProductsIdDigitalProductsCountJson` - Count all Product DigitalProducts.
* `getProductsIdDigitalProductsDigitalProductIdJson` - Retrieve a single Product DigitalProduct.
* `postProductsIdDigitalProductsJson` - Create a new Product DigitalProduct.

### productImages

* `deleteProductsIdImagesImageIdJson` - Delete a Product Image.
* `getProductsIdImagesJson` - Retrieve all Product Images.
* `getProductsIdImagesCountJson` - Count all Product Images.
* `getProductsIdImagesImageIdJson` - Retrieve a single Product Image.
* `postProductsIdImagesJson` - Create a new Product Image.

### productOptionValues

* `deleteProductsIdOptionsOptionIdValuesValueIdJson` - Delete a Product Option Value.
* `getProductsIdOptionsOptionIdValuesJson` - Retrieve all Product Option Values.
* `getProductsIdOptionsOptionIdValuesCountJson` - Count all Product Option Values.
* `getProductsIdOptionsOptionIdValuesValueIdJson` - Retrieve a single Product Option Value.
* `postProductsIdOptionsOptionIdValuesJson` - Create a new Product Option Value.
* `putProductsIdOptionsOptionIdValuesValueIdJson` - Modify an existing Product Option Value.

### productOptions

* `deleteProductsIdOptionsOptionIdJson` - Delete a Product Option.
* `getProductsIdOptionsJson` - Retrieve all Product Options.
* `getProductsIdOptionsCountJson` - Count all Product Options.
* `getProductsIdOptionsOptionIdJson` - Retrieve a single Product Option.
* `postProductsIdOptionsJson` - Create a new Product Option.
* `putProductsIdOptionsOptionIdJson` - Modify an existing Product Option.

### productVariants

* `getProductsIdVariantsJson` - Retrieve all Product Variants.
* `getProductsIdVariantsCountJson` - Count all Product Variants.
* `getProductsIdVariantsVariantIdJson` - Retrieve a single Product Variant.
* `postProductsIdVariantsJson` - Create a new Product Variant.
* `putProductsIdVariantsVariantIdJson` - Modify an existing Product Variant.

### products

* `deleteProductsIdJson` - Delete an existing Product.
* `getProductsJson` - Retrieve all Products.
* `getProductsAfterIdJson` - Retrieves Products after the given id.
* `getProductsCategoryCategoryIdJson` - Retrieve Products filtered by category.
* `getProductsCategoryCategoryIdCountJson` - Count Products filtered by category.
* `getProductsCountJson` - Count all Products.
* `getProductsSearchJson` - Retrieve a Product List from a query.
* `getProductsStatusStatusJson` - Retrieve Products filtered by status.
* `getProductsStatusStatusCountJson` - Count Products filtered by status.
* `getProductsIdJson` - Retrieve a single Product.
* `postProductsJson` - Create a new Product.
* `putProductsIdJson` - Modify an existing Product.

### promotions

* `deletePromotionsIdJson` - Delete an existing Promotion.
* `getPromotionsJson` - Retrieve all Promotions.
* `getPromotionsIdJson` - Retrieve a single Promotion.
* `postPromotionsJson` - Create a new Promotion.
* `putPromotionsIdJson` - Update a Promotion.

### regions

* `getCountriesCountryCodeRegionsJson` - Retrieve all Regions from a single Country.
* `getCountriesCountryCodeRegionsRegionCodeJson` - Retrieve a single Region information object.

### shippingMethods

* `deleteShippingMethodsIdJson` - Delete an existing Shipping Method.
* `getShippingMethodsJson` - Retrieve all Store's Shipping Methods.
* `getShippingMethodsIdJson` - Retrieve a single Shipping Method.
* `postShippingMethodsJson` - Creates a Shipping Method.
* `putShippingMethodsIdJson` - Update a Shipping Method.

### stores

* `getStoreInfoJson` - Retrieve Store Information.
* `getStoreLanguagesJson` - Retrieve Store Languages.

### taxes

* `getTaxesJson` - Retrieve all Taxes.
* `getTaxesIdJson` - Retrieve a single Tax information.
* `postTaxesJson` - Create a new Tax.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
