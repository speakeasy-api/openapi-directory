# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/jumpseller.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteJsappsCodeJSONRequest(
    authtoken="corrupti",
    code="provident",
    login="distinctio",
)
    
res = s.apps.delete_jsapps_code_json(req)

if res.delete_jsapps_code_json_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apps

* `delete_jsapps_code_json` - Delete an existing JSApp.
* `get_jsapps_json` - Retrieve all the Store's JSApps.
* `get_jsapps_code_json` - Retrieve a JSApp.
* `post_jsapps_json` - Create a Store JSApp.

### categories

* `delete_categories_id_json` - Delete an existing Category.
* `get_categories_json` - Retrieve all Categories.
* `get_categories_count_json` - Count all Categories.
* `get_categories_id_json` - Retrieve a single Category.
* `post_categories_json` - Create a new Category.
* `put_categories_id_json` - Modify an existing Category.

### checkout_custom_fields

* `delete_checkout_custom_fields_id_json` - Delete an existing CheckoutCustomField.
* `get_checkout_custom_fields_json` - Retrieve all Checkout Custom Fields.
* `get_checkout_custom_fields_id_json` - Retrieve a single CheckoutCustomField.
* `post_checkout_custom_fields_json` - Create a new CheckoutCustomField.
* `put_checkout_custom_fields_id_json` - Update a CheckoutCustomField.

### countries

* `get_countries_json` - Retrieve all Countries.
* `get_countries_country_code_json` - Retrieve a single Country information.
* `get_countries_country_code_regions_json` - Retrieve all Regions from a single Country.
* `get_countries_country_code_regions_region_code_json` - Retrieve a single Region information object.

### custom_field_select_options

* `get_custom_fields_id_select_options_json` - Retrieve all Store's Custom Fields.
* `get_custom_fields_id_select_options_custom_field_select_option_id_json` - Retrieve a single SelectOption from a CustomField.
* `post_custom_fields_id_select_options_json` - Create a new Custom Field Select Option.
* `put_custom_fields_id_select_options_custom_field_select_option_id_json` - Update a SelectOption from a CustomField.

### custom_fields

* `delete_custom_fields_id_json` - Delete an existing CustomField.
* `delete_custom_fields_id_select_options_custom_field_select_option_id_json` - Delete an existing CustomFieldSelectOption.
* `get_custom_fields_json` - Retrieve all Store's Custom Fields.
* `get_custom_fields_id_json` - Retrieve a single CustomField.
* `post_custom_fields_json` - Create a new Custom Field.
* `put_custom_fields_id_json` - Update a CustomField.

### customer_additional_fields

* `delete_customers_id_fields_field_id_` - Delete a Customer Additional Field.
* `get_customers_id_fields` - Retrieves the Customer Additional Field of a Customer.
* `get_customers_id_fields_field_id_` - Retrieve a single Customer Additional Field.
* `post_customers_id_fields` - Adds Customer Additional Fields to a Customer.
* `put_customers_id_fields_field_id_` - Update a Customer Additional Field.

### customer_categories

* `delete_customer_categories_id_json` - Delete an existing CustomerCategory.
* `delete_customer_categories_id_customers_json` - Delete Customers from an existing CustomerCategory.
* `get_customer_categories_json` - Retrieve all Customer Categories.
* `get_customer_categories_id_json` - Retrieve a single CustomerCategory.
* `get_customer_categories_id_customers_json` - Retrieves the customers in a CustomerCategory.
* `post_customer_categories_json` - Create a new CustomerCategory.
* `post_customer_categories_id_customers_json` - Adds Customers to a CustomerCategory.
* `put_customer_categories_id_json` - Update a CustomerCategory.

### customers

* `delete_customers_id_json` - Delete an existing Customer.
* `get_customers_json` - Retrieve all Customers.
* `get_customers_count_json` - Count all Customers.
* `get_customers_email_email_json` - Retrieve a single Customer by email.
* `get_customers_id_json` - Retrieve a single Customer by id.
* `post_customers_json` - Create a new Customer.
* `put_customers_id_json` - Update a new Customer.

### fulfillments

* `get_fulfillments_json` - Retrieve all Fulfillments.
* `get_fulfillments_count_json` - Count all Fulfillments.
* `get_fulfillments_id_json` - Retrieve a single Fulfillment.
* `get_order_id_fulfillments_json` - Retrieve the Fulfillments associated with the Order.

### hooks

* `delete_hooks_id_json` - Delete an existing Hook.
* `get_hooks_json` - Retrieve all Hooks.
* `get_hooks_id_json` - Retrieve a single Hook.
* `post_hooks_json` - Create a new Hook.
* `put_hooks_id_json` - Update a Hook.

### orders

* `get_orders_json` - Retrieve all Orders.
* `get_orders_after_id_json` - Retrieve orders filtered by Order Id.
* `get_orders_count_json` - Count all Orders.
* `get_orders_status_status_json` - Retrieve orders filtered by status.
* `get_orders_id_json` - Retrieve a single Order.
* `get_orders_id_history_json` - Retrieve all Order History.
* `post_orders_json` - Create a new Order.
* `post_orders_id_history_json` - Create a new Order History Entry.
* `put_orders_id_json` - Modify an existing Order.

### pages

* `delete_pages_id_json` - Delete an existing Page.
* `get_pages_json` - Retrieve all Pages.
* `get_pages_count_json` - Count all Pages.
* `get_pages_id_json` - Retrieve a single Page by id.
* `post_pages_json` - Create a new Page.
* `put_pages_id_json` - Update a Page.

### partners

* `get_partners_stores_json` - Retrieve statistics.
* `get_store_check_status_json` - Retrive store creation status.
* `post_store_create_json` - Create a Partnered Store

### payment_methods

* `get_payment_methods_json` - Retrieve all Store's Payment Methods.
* `get_payment_methods_id_json` - Retrieve a single Payment Method.

### product_attachments

* `delete_products_id_attachments_attachment_id_json` - Delete a Product Attachment.
* `get_products_id_attachments_json` - Retrieve all Product Attachments.
* `get_products_id_attachments_count_json` - Count all Product Attachments.
* `get_products_id_attachments_attachment_id_json` - Retrieve a single Product Attachment.
* `post_products_id_attachments_json` - Create a new Product Attachment.

### product_custom_fields

* `delete_products_product_id_fields_field_id_json` - Delete value of Product Custom Field
* `get_products_id_fields_json` - Retrieve all Product Custom Fields
* `get_products_id_fields_count_json` - Count all Product Custom Fields.
* `post_products_id_fields_json` - Add an existing Custom Field to a Product.
* `put_products_product_id_fields_field_id_json` - Update value of Product Custom Field

### product_digital_products

* `delete_products_id_digital_products_digital_product_id_json` - Delete a Product DigitalProduct.
* `get_products_id_digital_products_json` - Retrieve all Product DigitalProducts.
* `get_products_id_digital_products_count_json` - Count all Product DigitalProducts.
* `get_products_id_digital_products_digital_product_id_json` - Retrieve a single Product DigitalProduct.
* `post_products_id_digital_products_json` - Create a new Product DigitalProduct.

### product_images

* `delete_products_id_images_image_id_json` - Delete a Product Image.
* `get_products_id_images_json` - Retrieve all Product Images.
* `get_products_id_images_count_json` - Count all Product Images.
* `get_products_id_images_image_id_json` - Retrieve a single Product Image.
* `post_products_id_images_json` - Create a new Product Image.

### product_option_values

* `delete_products_id_options_option_id_values_value_id_json` - Delete a Product Option Value.
* `get_products_id_options_option_id_values_json` - Retrieve all Product Option Values.
* `get_products_id_options_option_id_values_count_json` - Count all Product Option Values.
* `get_products_id_options_option_id_values_value_id_json` - Retrieve a single Product Option Value.
* `post_products_id_options_option_id_values_json` - Create a new Product Option Value.
* `put_products_id_options_option_id_values_value_id_json` - Modify an existing Product Option Value.

### product_options

* `delete_products_id_options_option_id_json` - Delete a Product Option.
* `get_products_id_options_json` - Retrieve all Product Options.
* `get_products_id_options_count_json` - Count all Product Options.
* `get_products_id_options_option_id_json` - Retrieve a single Product Option.
* `post_products_id_options_json` - Create a new Product Option.
* `put_products_id_options_option_id_json` - Modify an existing Product Option.

### product_variants

* `get_products_id_variants_json` - Retrieve all Product Variants.
* `get_products_id_variants_count_json` - Count all Product Variants.
* `get_products_id_variants_variant_id_json` - Retrieve a single Product Variant.
* `post_products_id_variants_json` - Create a new Product Variant.
* `put_products_id_variants_variant_id_json` - Modify an existing Product Variant.

### products

* `delete_products_id_json` - Delete an existing Product.
* `get_products_json` - Retrieve all Products.
* `get_products_after_id_json` - Retrieves Products after the given id.
* `get_products_category_category_id_json` - Retrieve Products filtered by category.
* `get_products_category_category_id_count_json` - Count Products filtered by category.
* `get_products_count_json` - Count all Products.
* `get_products_search_json` - Retrieve a Product List from a query.
* `get_products_status_status_json` - Retrieve Products filtered by status.
* `get_products_status_status_count_json` - Count Products filtered by status.
* `get_products_id_json` - Retrieve a single Product.
* `post_products_json` - Create a new Product.
* `put_products_id_json` - Modify an existing Product.

### promotions

* `delete_promotions_id_json` - Delete an existing Promotion.
* `get_promotions_json` - Retrieve all Promotions.
* `get_promotions_id_json` - Retrieve a single Promotion.
* `post_promotions_json` - Create a new Promotion.
* `put_promotions_id_json` - Update a Promotion.

### regions

* `get_countries_country_code_regions_json` - Retrieve all Regions from a single Country.
* `get_countries_country_code_regions_region_code_json` - Retrieve a single Region information object.

### shipping_methods

* `delete_shipping_methods_id_json` - Delete an existing Shipping Method.
* `get_shipping_methods_json` - Retrieve all Store's Shipping Methods.
* `get_shipping_methods_id_json` - Retrieve a single Shipping Method.
* `post_shipping_methods_json` - Creates a Shipping Method.
* `put_shipping_methods_id_json` - Update a Shipping Method.

### stores

* `get_store_info_json` - Retrieve Store Information.
* `get_store_languages_json` - Retrieve Store Languages.

### taxes

* `get_taxes_json` - Retrieve all Taxes.
* `get_taxes_id_json` - Retrieve a single Tax information.
* `post_taxes_json` - Create a new Tax.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
