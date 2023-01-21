# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteJsappsCodeJSONRequest{
        PathParams: operations.DeleteJsappsCodeJSONPathParams{
            Code: "sit",
        },
        QueryParams: operations.DeleteJsappsCodeJSONQueryParams{
            Authtoken: "voluptas",
            Login: "culpa",
        },
    }
    
    res, err := s.Apps.DeleteJsappsCodeJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJsappsCodeJSON200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Apps

* `DeleteJsappsCodeJSON` - Delete an existing JSApp.
* `GetJsappsJSON` - Retrieve all the Store's JSApps.
* `GetJsappsCodeJSON` - Retrieve a JSApp.
* `PostJsappsJSON` - Create a Store JSApp.

### Categories

* `DeleteCategoriesIDJSON` - Delete an existing Category.
* `GetCategoriesJSON` - Retrieve all Categories.
* `GetCategoriesCountJSON` - Count all Categories.
* `GetCategoriesIDJSON` - Retrieve a single Category.
* `PostCategoriesJSON` - Create a new Category.
* `PutCategoriesIDJSON` - Modify an existing Category.

### Checkout Custom Fields

* `DeleteCheckoutCustomFieldsIDJSON` - Delete an existing CheckoutCustomField.
* `GetCheckoutCustomFieldsJSON` - Retrieve all Checkout Custom Fields.
* `GetCheckoutCustomFieldsIDJSON` - Retrieve a single CheckoutCustomField.
* `PostCheckoutCustomFieldsJSON` - Create a new CheckoutCustomField.
* `PutCheckoutCustomFieldsIDJSON` - Update a CheckoutCustomField.

### Countries

* `GetCountriesJSON` - Retrieve all Countries.
* `GetCountriesCountryCodeJSON` - Retrieve a single Country information.
* `GetCountriesCountryCodeRegionsJSON` - Retrieve all Regions from a single Country.
* `GetCountriesCountryCodeRegionsRegionCodeJSON` - Retrieve a single Region information object.

### Custom Field Select Options

* `GetCustomFieldsIDSelectOptionsJSON` - Retrieve all Store's Custom Fields.
* `GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON` - Retrieve a single SelectOption from a CustomField.
* `PostCustomFieldsIDSelectOptionsJSON` - Create a new Custom Field Select Option.
* `PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON` - Update a SelectOption from a CustomField.

### Custom Fields

* `DeleteCustomFieldsIDJSON` - Delete an existing CustomField.
* `DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON` - Delete an existing CustomFieldSelectOption.
* `GetCustomFieldsJSON` - Retrieve all Store's Custom Fields.
* `GetCustomFieldsIDJSON` - Retrieve a single CustomField.
* `PostCustomFieldsJSON` - Create a new Custom Field.
* `PutCustomFieldsIDJSON` - Update a CustomField.

### Customer Additional Fields

* `DeleteCustomersIDFieldsFieldID` - Delete a Customer Additional Field.
* `GetCustomersIDFields` - Retrieves the Customer Additional Field of a Customer.
* `GetCustomersIDFieldsFieldID` - Retrieve a single Customer Additional Field.
* `PostCustomersIDFields` - Adds Customer Additional Fields to a Customer.
* `PutCustomersIDFieldsFieldID` - Update a Customer Additional Field.

### Customer Categories

* `DeleteCustomerCategoriesIDJSON` - Delete an existing CustomerCategory.
* `DeleteCustomerCategoriesIDCustomersJSON` - Delete Customers from an existing CustomerCategory.
* `GetCustomerCategoriesJSON` - Retrieve all Customer Categories.
* `GetCustomerCategoriesIDJSON` - Retrieve a single CustomerCategory.
* `GetCustomerCategoriesIDCustomersJSON` - Retrieves the customers in a CustomerCategory.
* `PostCustomerCategoriesJSON` - Create a new CustomerCategory.
* `PostCustomerCategoriesIDCustomersJSON` - Adds Customers to a CustomerCategory.
* `PutCustomerCategoriesIDJSON` - Update a CustomerCategory.

### Customers

* `DeleteCustomersIDJSON` - Delete an existing Customer.
* `GetCustomersJSON` - Retrieve all Customers.
* `GetCustomersCountJSON` - Count all Customers.
* `GetCustomersEmailEmailJSON` - Retrieve a single Customer by email.
* `GetCustomersIDJSON` - Retrieve a single Customer by id.
* `PostCustomersJSON` - Create a new Customer.
* `PutCustomersIDJSON` - Update a new Customer.

### Fulfillments

* `GetFulfillmentsJSON` - Retrieve all Fulfillments.
* `GetFulfillmentsCountJSON` - Count all Fulfillments.
* `GetFulfillmentsIDJSON` - Retrieve a single Fulfillment.
* `GetOrderIDFulfillmentsJSON` - Retrieve the Fulfillments associated with the Order.

### Hooks

* `DeleteHooksIDJSON` - Delete an existing Hook.
* `GetHooksJSON` - Retrieve all Hooks.
* `GetHooksIDJSON` - Retrieve a single Hook.
* `PostHooksJSON` - Create a new Hook.
* `PutHooksIDJSON` - Update a Hook.

### Orders

* `GetOrdersJSON` - Retrieve all Orders.
* `GetOrdersAfterIDJSON` - Retrieve orders filtered by Order Id.
* `GetOrdersCountJSON` - Count all Orders.
* `GetOrdersStatusStatusJSON` - Retrieve orders filtered by status.
* `GetOrdersIDJSON` - Retrieve a single Order.
* `GetOrdersIDHistoryJSON` - Retrieve all Order History.
* `PostOrdersJSON` - Create a new Order.
* `PostOrdersIDHistoryJSON` - Create a new Order History Entry.
* `PutOrdersIDJSON` - Modify an existing Order.

### Pages

* `DeletePagesIDJSON` - Delete an existing Page.
* `GetPagesJSON` - Retrieve all Pages.
* `GetPagesCountJSON` - Count all Pages.
* `GetPagesIDJSON` - Retrieve a single Page by id.
* `PostPagesJSON` - Create a new Page.
* `PutPagesIDJSON` - Update a Page.

### Partners

* `GetPartnersStoresJSON` - Retrieve statistics.
* `GetStoreCheckStatusJSON` - Retrive store creation status.
* `PostStoreCreateJSON` - Create a Partnered Store

### Payment Methods

* `GetPaymentMethodsJSON` - Retrieve all Store's Payment Methods.
* `GetPaymentMethodsIDJSON` - Retrieve a single Payment Method.

### Product Attachments

* `DeleteProductsIDAttachmentsAttachmentIDJSON` - Delete a Product Attachment.
* `GetProductsIDAttachmentsJSON` - Retrieve all Product Attachments.
* `GetProductsIDAttachmentsCountJSON` - Count all Product Attachments.
* `GetProductsIDAttachmentsAttachmentIDJSON` - Retrieve a single Product Attachment.
* `PostProductsIDAttachmentsJSON` - Create a new Product Attachment.

### Product Custom Fields

* `DeleteProductsProductIDFieldsFieldIDJSON` - Delete value of Product Custom Field
* `GetProductsIDFieldsJSON` - Retrieve all Product Custom Fields
* `GetProductsIDFieldsCountJSON` - Count all Product Custom Fields.
* `PostProductsIDFieldsJSON` - Add an existing Custom Field to a Product.
* `PutProductsProductIDFieldsFieldIDJSON` - Update value of Product Custom Field

### Product DigitalProducts

* `DeleteProductsIDDigitalProductsDigitalProductIDJSON` - Delete a Product DigitalProduct.
* `GetProductsIDDigitalProductsJSON` - Retrieve all Product DigitalProducts.
* `GetProductsIDDigitalProductsCountJSON` - Count all Product DigitalProducts.
* `GetProductsIDDigitalProductsDigitalProductIDJSON` - Retrieve a single Product DigitalProduct.
* `PostProductsIDDigitalProductsJSON` - Create a new Product DigitalProduct.

### Product Images

* `DeleteProductsIDImagesImageIDJSON` - Delete a Product Image.
* `GetProductsIDImagesJSON` - Retrieve all Product Images.
* `GetProductsIDImagesCountJSON` - Count all Product Images.
* `GetProductsIDImagesImageIDJSON` - Retrieve a single Product Image.
* `PostProductsIDImagesJSON` - Create a new Product Image.

### Product Option Values

* `DeleteProductsIDOptionsOptionIDValuesValueIDJSON` - Delete a Product Option Value.
* `GetProductsIDOptionsOptionIDValuesJSON` - Retrieve all Product Option Values.
* `GetProductsIDOptionsOptionIDValuesCountJSON` - Count all Product Option Values.
* `GetProductsIDOptionsOptionIDValuesValueIDJSON` - Retrieve a single Product Option Value.
* `PostProductsIDOptionsOptionIDValuesJSON` - Create a new Product Option Value.
* `PutProductsIDOptionsOptionIDValuesValueIDJSON` - Modify an existing Product Option Value.

### Product Options

* `DeleteProductsIDOptionsOptionIDJSON` - Delete a Product Option.
* `GetProductsIDOptionsJSON` - Retrieve all Product Options.
* `GetProductsIDOptionsCountJSON` - Count all Product Options.
* `GetProductsIDOptionsOptionIDJSON` - Retrieve a single Product Option.
* `PostProductsIDOptionsJSON` - Create a new Product Option.
* `PutProductsIDOptionsOptionIDJSON` - Modify an existing Product Option.

### Product Variants

* `GetProductsIDVariantsJSON` - Retrieve all Product Variants.
* `GetProductsIDVariantsCountJSON` - Count all Product Variants.
* `GetProductsIDVariantsVariantIDJSON` - Retrieve a single Product Variant.
* `PostProductsIDVariantsJSON` - Create a new Product Variant.
* `PutProductsIDVariantsVariantIDJSON` - Modify an existing Product Variant.

### Products

* `DeleteProductsIDJSON` - Delete an existing Product.
* `GetProductsJSON` - Retrieve all Products.
* `GetProductsAfterIDJSON` - Retrieves Products after the given id.
* `GetProductsCategoryCategoryIDJSON` - Retrieve Products filtered by category.
* `GetProductsCategoryCategoryIDCountJSON` - Count Products filtered by category.
* `GetProductsCountJSON` - Count all Products.
* `GetProductsSearchJSON` - Retrieve a Product List from a query.
* `GetProductsStatusStatusJSON` - Retrieve Products filtered by status.
* `GetProductsStatusStatusCountJSON` - Count Products filtered by status.
* `GetProductsIDJSON` - Retrieve a single Product.
* `PostProductsJSON` - Create a new Product.
* `PutProductsIDJSON` - Modify an existing Product.

### Promotions

* `DeletePromotionsIDJSON` - Delete an existing Promotion.
* `GetPromotionsJSON` - Retrieve all Promotions.
* `GetPromotionsIDJSON` - Retrieve a single Promotion.
* `PostPromotionsJSON` - Create a new Promotion.
* `PutPromotionsIDJSON` - Update a Promotion.

### Regions

* `GetCountriesCountryCodeRegionsJSON` - Retrieve all Regions from a single Country.
* `GetCountriesCountryCodeRegionsRegionCodeJSON` - Retrieve a single Region information object.

### Shipping Methods

* `DeleteShippingMethodsIDJSON` - Delete an existing Shipping Method.
* `GetShippingMethodsJSON` - Retrieve all Store's Shipping Methods.
* `GetShippingMethodsIDJSON` - Retrieve a single Shipping Method.
* `PostShippingMethodsJSON` - Creates a Shipping Method.
* `PutShippingMethodsIDJSON` - Update a Shipping Method.

### Stores

* `GetStoreInfoJSON` - Retrieve Store Information.
* `GetStoreLanguagesJSON` - Retrieve Store Languages.

### Taxes

* `GetTaxesJSON` - Retrieve all Taxes.
* `GetTaxesIDJSON` - Retrieve a single Tax information.
* `PostTaxesJSON` - Create a new Tax.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
