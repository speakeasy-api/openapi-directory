# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/jumpseller.com/1.0.0/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.DeleteJsappsCodeJSON(ctx, operations.DeleteJsappsCodeJSONRequest{
        Authtoken: "corrupti",
        Code: "provident",
        Login: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJsappsCodeJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Apps](docs/apps/README.md)

* [DeleteJsappsCodeJSON](docs/apps/README.md#deletejsappscodejson) - Delete an existing JSApp.
* [GetJsappsJSON](docs/apps/README.md#getjsappsjson) - Retrieve all the Store's JSApps.
* [GetJsappsCodeJSON](docs/apps/README.md#getjsappscodejson) - Retrieve a JSApp.
* [PostJsappsJSON](docs/apps/README.md#postjsappsjson) - Create a Store JSApp.

### [Categories](docs/categories/README.md)

* [DeleteCategoriesIDJSON](docs/categories/README.md#deletecategoriesidjson) - Delete an existing Category.
* [GetCategoriesJSON](docs/categories/README.md#getcategoriesjson) - Retrieve all Categories.
* [GetCategoriesCountJSON](docs/categories/README.md#getcategoriescountjson) - Count all Categories.
* [GetCategoriesIDJSON](docs/categories/README.md#getcategoriesidjson) - Retrieve a single Category.
* [PostCategoriesJSON](docs/categories/README.md#postcategoriesjson) - Create a new Category.
* [PutCategoriesIDJSON](docs/categories/README.md#putcategoriesidjson) - Modify an existing Category.

### [CheckoutCustomFields](docs/checkoutcustomfields/README.md)

* [DeleteCheckoutCustomFieldsIDJSON](docs/checkoutcustomfields/README.md#deletecheckoutcustomfieldsidjson) - Delete an existing CheckoutCustomField.
* [GetCheckoutCustomFieldsJSON](docs/checkoutcustomfields/README.md#getcheckoutcustomfieldsjson) - Retrieve all Checkout Custom Fields.
* [GetCheckoutCustomFieldsIDJSON](docs/checkoutcustomfields/README.md#getcheckoutcustomfieldsidjson) - Retrieve a single CheckoutCustomField.
* [PostCheckoutCustomFieldsJSON](docs/checkoutcustomfields/README.md#postcheckoutcustomfieldsjson) - Create a new CheckoutCustomField.
* [PutCheckoutCustomFieldsIDJSON](docs/checkoutcustomfields/README.md#putcheckoutcustomfieldsidjson) - Update a CheckoutCustomField.

### [Countries](docs/countries/README.md)

* [GetCountriesJSON](docs/countries/README.md#getcountriesjson) - Retrieve all Countries.
* [GetCountriesCountryCodeJSON](docs/countries/README.md#getcountriescountrycodejson) - Retrieve a single Country information.
* [GetCountriesCountryCodeRegionsJSON](docs/countries/README.md#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [GetCountriesCountryCodeRegionsRegionCodeJSON](docs/countries/README.md#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

### [CustomFieldSelectOptions](docs/customfieldselectoptions/README.md)

* [GetCustomFieldsIDSelectOptionsJSON](docs/customfieldselectoptions/README.md#getcustomfieldsidselectoptionsjson) - Retrieve all Store's Custom Fields.
* [GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON](docs/customfieldselectoptions/README.md#getcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Retrieve a single SelectOption from a CustomField.
* [PostCustomFieldsIDSelectOptionsJSON](docs/customfieldselectoptions/README.md#postcustomfieldsidselectoptionsjson) - Create a new Custom Field Select Option.
* [PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON](docs/customfieldselectoptions/README.md#putcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Update a SelectOption from a CustomField.

### [CustomFields](docs/customfields/README.md)

* [DeleteCustomFieldsIDJSON](docs/customfields/README.md#deletecustomfieldsidjson) - Delete an existing CustomField.
* [DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON](docs/customfields/README.md#deletecustomfieldsidselectoptionscustomfieldselectoptionidjson) - Delete an existing CustomFieldSelectOption.
* [GetCustomFieldsJSON](docs/customfields/README.md#getcustomfieldsjson) - Retrieve all Store's Custom Fields.
* [GetCustomFieldsIDJSON](docs/customfields/README.md#getcustomfieldsidjson) - Retrieve a single CustomField.
* [PostCustomFieldsJSON](docs/customfields/README.md#postcustomfieldsjson) - Create a new Custom Field.
* [PutCustomFieldsIDJSON](docs/customfields/README.md#putcustomfieldsidjson) - Update a CustomField.

### [CustomerAdditionalFields](docs/customeradditionalfields/README.md)

* [DeleteCustomersIDFieldsFieldID](docs/customeradditionalfields/README.md#deletecustomersidfieldsfieldid) - Delete a Customer Additional Field.
* [GetCustomersIDFields](docs/customeradditionalfields/README.md#getcustomersidfields) - Retrieves the Customer Additional Field of a Customer.
* [GetCustomersIDFieldsFieldID](docs/customeradditionalfields/README.md#getcustomersidfieldsfieldid) - Retrieve a single Customer Additional Field.
* [PostCustomersIDFields](docs/customeradditionalfields/README.md#postcustomersidfields) - Adds Customer Additional Fields to a Customer.
* [PutCustomersIDFieldsFieldID](docs/customeradditionalfields/README.md#putcustomersidfieldsfieldid) - Update a Customer Additional Field.

### [CustomerCategories](docs/customercategories/README.md)

* [DeleteCustomerCategoriesIDJSON](docs/customercategories/README.md#deletecustomercategoriesidjson) - Delete an existing CustomerCategory.
* [DeleteCustomerCategoriesIDCustomersJSON](docs/customercategories/README.md#deletecustomercategoriesidcustomersjson) - Delete Customers from an existing CustomerCategory.
* [GetCustomerCategoriesJSON](docs/customercategories/README.md#getcustomercategoriesjson) - Retrieve all Customer Categories.
* [GetCustomerCategoriesIDJSON](docs/customercategories/README.md#getcustomercategoriesidjson) - Retrieve a single CustomerCategory.
* [GetCustomerCategoriesIDCustomersJSON](docs/customercategories/README.md#getcustomercategoriesidcustomersjson) - Retrieves the customers in a CustomerCategory.
* [PostCustomerCategoriesJSON](docs/customercategories/README.md#postcustomercategoriesjson) - Create a new CustomerCategory.
* [PostCustomerCategoriesIDCustomersJSON](docs/customercategories/README.md#postcustomercategoriesidcustomersjson) - Adds Customers to a CustomerCategory.
* [PutCustomerCategoriesIDJSON](docs/customercategories/README.md#putcustomercategoriesidjson) - Update a CustomerCategory.

### [Customers](docs/customers/README.md)

* [DeleteCustomersIDJSON](docs/customers/README.md#deletecustomersidjson) - Delete an existing Customer.
* [GetCustomersJSON](docs/customers/README.md#getcustomersjson) - Retrieve all Customers.
* [GetCustomersCountJSON](docs/customers/README.md#getcustomerscountjson) - Count all Customers.
* [GetCustomersEmailEmailJSON](docs/customers/README.md#getcustomersemailemailjson) - Retrieve a single Customer by email.
* [GetCustomersIDJSON](docs/customers/README.md#getcustomersidjson) - Retrieve a single Customer by id.
* [PostCustomersJSON](docs/customers/README.md#postcustomersjson) - Create a new Customer.
* [PutCustomersIDJSON](docs/customers/README.md#putcustomersidjson) - Update a new Customer.

### [Fulfillments](docs/fulfillments/README.md)

* [GetFulfillmentsJSON](docs/fulfillments/README.md#getfulfillmentsjson) - Retrieve all Fulfillments.
* [GetFulfillmentsCountJSON](docs/fulfillments/README.md#getfulfillmentscountjson) - Count all Fulfillments.
* [GetFulfillmentsIDJSON](docs/fulfillments/README.md#getfulfillmentsidjson) - Retrieve a single Fulfillment.
* [GetOrderIDFulfillmentsJSON](docs/fulfillments/README.md#getorderidfulfillmentsjson) - Retrieve the Fulfillments associated with the Order.

### [Hooks](docs/hooks/README.md)

* [DeleteHooksIDJSON](docs/hooks/README.md#deletehooksidjson) - Delete an existing Hook.
* [GetHooksJSON](docs/hooks/README.md#gethooksjson) - Retrieve all Hooks.
* [GetHooksIDJSON](docs/hooks/README.md#gethooksidjson) - Retrieve a single Hook.
* [PostHooksJSON](docs/hooks/README.md#posthooksjson) - Create a new Hook.
* [PutHooksIDJSON](docs/hooks/README.md#puthooksidjson) - Update a Hook.

### [Orders](docs/orders/README.md)

* [GetOrdersJSON](docs/orders/README.md#getordersjson) - Retrieve all Orders.
* [GetOrdersAfterIDJSON](docs/orders/README.md#getordersafteridjson) - Retrieve orders filtered by Order Id.
* [GetOrdersCountJSON](docs/orders/README.md#getorderscountjson) - Count all Orders.
* [GetOrdersStatusStatusJSON](docs/orders/README.md#getordersstatusstatusjson) - Retrieve orders filtered by status.
* [GetOrdersIDJSON](docs/orders/README.md#getordersidjson) - Retrieve a single Order.
* [GetOrdersIDHistoryJSON](docs/orders/README.md#getordersidhistoryjson) - Retrieve all Order History.
* [PostOrdersJSON](docs/orders/README.md#postordersjson) - Create a new Order.
* [PostOrdersIDHistoryJSON](docs/orders/README.md#postordersidhistoryjson) - Create a new Order History Entry.
* [PutOrdersIDJSON](docs/orders/README.md#putordersidjson) - Modify an existing Order.

### [Pages](docs/pages/README.md)

* [DeletePagesIDJSON](docs/pages/README.md#deletepagesidjson) - Delete an existing Page.
* [GetPagesJSON](docs/pages/README.md#getpagesjson) - Retrieve all Pages.
* [GetPagesCountJSON](docs/pages/README.md#getpagescountjson) - Count all Pages.
* [GetPagesIDJSON](docs/pages/README.md#getpagesidjson) - Retrieve a single Page by id.
* [PostPagesJSON](docs/pages/README.md#postpagesjson) - Create a new Page.
* [PutPagesIDJSON](docs/pages/README.md#putpagesidjson) - Update a Page.

### [Partners](docs/partners/README.md)

* [GetPartnersStoresJSON](docs/partners/README.md#getpartnersstoresjson) - Retrieve statistics.
* [GetStoreCheckStatusJSON](docs/partners/README.md#getstorecheckstatusjson) - Retrive store creation status.
* [PostStoreCreateJSON](docs/partners/README.md#poststorecreatejson) - Create a Partnered Store

### [PaymentMethods](docs/paymentmethods/README.md)

* [GetPaymentMethodsJSON](docs/paymentmethods/README.md#getpaymentmethodsjson) - Retrieve all Store's Payment Methods.
* [GetPaymentMethodsIDJSON](docs/paymentmethods/README.md#getpaymentmethodsidjson) - Retrieve a single Payment Method.

### [ProductAttachments](docs/productattachments/README.md)

* [DeleteProductsIDAttachmentsAttachmentIDJSON](docs/productattachments/README.md#deleteproductsidattachmentsattachmentidjson) - Delete a Product Attachment.
* [GetProductsIDAttachmentsJSON](docs/productattachments/README.md#getproductsidattachmentsjson) - Retrieve all Product Attachments.
* [GetProductsIDAttachmentsCountJSON](docs/productattachments/README.md#getproductsidattachmentscountjson) - Count all Product Attachments.
* [GetProductsIDAttachmentsAttachmentIDJSON](docs/productattachments/README.md#getproductsidattachmentsattachmentidjson) - Retrieve a single Product Attachment.
* [PostProductsIDAttachmentsJSON](docs/productattachments/README.md#postproductsidattachmentsjson) - Create a new Product Attachment.

### [ProductCustomFields](docs/productcustomfields/README.md)

* [DeleteProductsProductIDFieldsFieldIDJSON](docs/productcustomfields/README.md#deleteproductsproductidfieldsfieldidjson) - Delete value of Product Custom Field
* [GetProductsIDFieldsJSON](docs/productcustomfields/README.md#getproductsidfieldsjson) - Retrieve all Product Custom Fields
* [GetProductsIDFieldsCountJSON](docs/productcustomfields/README.md#getproductsidfieldscountjson) - Count all Product Custom Fields.
* [PostProductsIDFieldsJSON](docs/productcustomfields/README.md#postproductsidfieldsjson) - Add an existing Custom Field to a Product.
* [PutProductsProductIDFieldsFieldIDJSON](docs/productcustomfields/README.md#putproductsproductidfieldsfieldidjson) - Update value of Product Custom Field

### [ProductDigitalProducts](docs/productdigitalproducts/README.md)

* [DeleteProductsIDDigitalProductsDigitalProductIDJSON](docs/productdigitalproducts/README.md#deleteproductsiddigitalproductsdigitalproductidjson) - Delete a Product DigitalProduct.
* [GetProductsIDDigitalProductsJSON](docs/productdigitalproducts/README.md#getproductsiddigitalproductsjson) - Retrieve all Product DigitalProducts.
* [GetProductsIDDigitalProductsCountJSON](docs/productdigitalproducts/README.md#getproductsiddigitalproductscountjson) - Count all Product DigitalProducts.
* [GetProductsIDDigitalProductsDigitalProductIDJSON](docs/productdigitalproducts/README.md#getproductsiddigitalproductsdigitalproductidjson) - Retrieve a single Product DigitalProduct.
* [PostProductsIDDigitalProductsJSON](docs/productdigitalproducts/README.md#postproductsiddigitalproductsjson) - Create a new Product DigitalProduct.

### [ProductImages](docs/productimages/README.md)

* [DeleteProductsIDImagesImageIDJSON](docs/productimages/README.md#deleteproductsidimagesimageidjson) - Delete a Product Image.
* [GetProductsIDImagesJSON](docs/productimages/README.md#getproductsidimagesjson) - Retrieve all Product Images.
* [GetProductsIDImagesCountJSON](docs/productimages/README.md#getproductsidimagescountjson) - Count all Product Images.
* [GetProductsIDImagesImageIDJSON](docs/productimages/README.md#getproductsidimagesimageidjson) - Retrieve a single Product Image.
* [PostProductsIDImagesJSON](docs/productimages/README.md#postproductsidimagesjson) - Create a new Product Image.

### [ProductOptionValues](docs/productoptionvalues/README.md)

* [DeleteProductsIDOptionsOptionIDValuesValueIDJSON](docs/productoptionvalues/README.md#deleteproductsidoptionsoptionidvaluesvalueidjson) - Delete a Product Option Value.
* [GetProductsIDOptionsOptionIDValuesJSON](docs/productoptionvalues/README.md#getproductsidoptionsoptionidvaluesjson) - Retrieve all Product Option Values.
* [GetProductsIDOptionsOptionIDValuesCountJSON](docs/productoptionvalues/README.md#getproductsidoptionsoptionidvaluescountjson) - Count all Product Option Values.
* [GetProductsIDOptionsOptionIDValuesValueIDJSON](docs/productoptionvalues/README.md#getproductsidoptionsoptionidvaluesvalueidjson) - Retrieve a single Product Option Value.
* [PostProductsIDOptionsOptionIDValuesJSON](docs/productoptionvalues/README.md#postproductsidoptionsoptionidvaluesjson) - Create a new Product Option Value.
* [PutProductsIDOptionsOptionIDValuesValueIDJSON](docs/productoptionvalues/README.md#putproductsidoptionsoptionidvaluesvalueidjson) - Modify an existing Product Option Value.

### [ProductOptions](docs/productoptions/README.md)

* [DeleteProductsIDOptionsOptionIDJSON](docs/productoptions/README.md#deleteproductsidoptionsoptionidjson) - Delete a Product Option.
* [GetProductsIDOptionsJSON](docs/productoptions/README.md#getproductsidoptionsjson) - Retrieve all Product Options.
* [GetProductsIDOptionsCountJSON](docs/productoptions/README.md#getproductsidoptionscountjson) - Count all Product Options.
* [GetProductsIDOptionsOptionIDJSON](docs/productoptions/README.md#getproductsidoptionsoptionidjson) - Retrieve a single Product Option.
* [PostProductsIDOptionsJSON](docs/productoptions/README.md#postproductsidoptionsjson) - Create a new Product Option.
* [PutProductsIDOptionsOptionIDJSON](docs/productoptions/README.md#putproductsidoptionsoptionidjson) - Modify an existing Product Option.

### [ProductVariants](docs/productvariants/README.md)

* [GetProductsIDVariantsJSON](docs/productvariants/README.md#getproductsidvariantsjson) - Retrieve all Product Variants.
* [GetProductsIDVariantsCountJSON](docs/productvariants/README.md#getproductsidvariantscountjson) - Count all Product Variants.
* [GetProductsIDVariantsVariantIDJSON](docs/productvariants/README.md#getproductsidvariantsvariantidjson) - Retrieve a single Product Variant.
* [PostProductsIDVariantsJSON](docs/productvariants/README.md#postproductsidvariantsjson) - Create a new Product Variant.
* [PutProductsIDVariantsVariantIDJSON](docs/productvariants/README.md#putproductsidvariantsvariantidjson) - Modify an existing Product Variant.

### [Products](docs/products/README.md)

* [DeleteProductsIDJSON](docs/products/README.md#deleteproductsidjson) - Delete an existing Product.
* [GetProductsJSON](docs/products/README.md#getproductsjson) - Retrieve all Products.
* [GetProductsAfterIDJSON](docs/products/README.md#getproductsafteridjson) - Retrieves Products after the given id.
* [GetProductsCategoryCategoryIDJSON](docs/products/README.md#getproductscategorycategoryidjson) - Retrieve Products filtered by category.
* [GetProductsCategoryCategoryIDCountJSON](docs/products/README.md#getproductscategorycategoryidcountjson) - Count Products filtered by category.
* [GetProductsCountJSON](docs/products/README.md#getproductscountjson) - Count all Products.
* [GetProductsSearchJSON](docs/products/README.md#getproductssearchjson) - Retrieve a Product List from a query.
* [GetProductsStatusStatusJSON](docs/products/README.md#getproductsstatusstatusjson) - Retrieve Products filtered by status.
* [GetProductsStatusStatusCountJSON](docs/products/README.md#getproductsstatusstatuscountjson) - Count Products filtered by status.
* [GetProductsIDJSON](docs/products/README.md#getproductsidjson) - Retrieve a single Product.
* [PostProductsJSON](docs/products/README.md#postproductsjson) - Create a new Product.
* [PutProductsIDJSON](docs/products/README.md#putproductsidjson) - Modify an existing Product.

### [Promotions](docs/promotions/README.md)

* [DeletePromotionsIDJSON](docs/promotions/README.md#deletepromotionsidjson) - Delete an existing Promotion.
* [GetPromotionsJSON](docs/promotions/README.md#getpromotionsjson) - Retrieve all Promotions.
* [GetPromotionsIDJSON](docs/promotions/README.md#getpromotionsidjson) - Retrieve a single Promotion.
* [PostPromotionsJSON](docs/promotions/README.md#postpromotionsjson) - Create a new Promotion.
* [PutPromotionsIDJSON](docs/promotions/README.md#putpromotionsidjson) - Update a Promotion.

### [Regions](docs/regions/README.md)

* [GetCountriesCountryCodeRegionsJSON](docs/regions/README.md#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [GetCountriesCountryCodeRegionsRegionCodeJSON](docs/regions/README.md#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

### [ShippingMethods](docs/shippingmethods/README.md)

* [DeleteShippingMethodsIDJSON](docs/shippingmethods/README.md#deleteshippingmethodsidjson) - Delete an existing Shipping Method.
* [GetShippingMethodsJSON](docs/shippingmethods/README.md#getshippingmethodsjson) - Retrieve all Store's Shipping Methods.
* [GetShippingMethodsIDJSON](docs/shippingmethods/README.md#getshippingmethodsidjson) - Retrieve a single Shipping Method.
* [PostShippingMethodsJSON](docs/shippingmethods/README.md#postshippingmethodsjson) - Creates a Shipping Method.
* [PutShippingMethodsIDJSON](docs/shippingmethods/README.md#putshippingmethodsidjson) - Update a Shipping Method.

### [Stores](docs/stores/README.md)

* [GetStoreInfoJSON](docs/stores/README.md#getstoreinfojson) - Retrieve Store Information.
* [GetStoreLanguagesJSON](docs/stores/README.md#getstorelanguagesjson) - Retrieve Store Languages.

### [Taxes](docs/taxes/README.md)

* [GetTaxesJSON](docs/taxes/README.md#gettaxesjson) - Retrieve all Taxes.
* [GetTaxesIDJSON](docs/taxes/README.md#gettaxesidjson) - Retrieve a single Tax information.
* [PostTaxesJSON](docs/taxes/README.md#posttaxesjson) - Create a new Tax.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
