# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/netlicensing.io/2.x/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateLicenseRequestBody(
    active=False,
    currency="corrupti",
    hidden=False,
    license_template_number="provident",
    licensee_number="distinctio",
    name="quibusdam",
    number="unde",
    parentfeature="nulla",
    price=5448.83,
    quantity="illum",
    start_date="2022-05-18T09:34:54.894Z",
    time_volume="deserunt",
    time_volume_period="suscipit",
    used_quantity="iure",
)
    
res = s.license.create_license(req, operations.CreateLicenseSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.netlicensing is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### license

* `create_license` - Create License
* `delete_license` - Delete License
* `get_license` - Get License
* `list_licenses` - List Licenses
* `update_license` - Update License

### license_template

* `create_license_template` - Create License Template
* `delete_license_template` - Delete License Template
* `get_license_template` - Get License Template
* `list_license_templates` - List License Templates
* `update_license_template` - Update License Template

### licensee

* `create_licensee` - Create Licensee
* `delete_licensee` - Delete Licensee
* `get_licensee` - Get Licensee
* `list_licensees` - List Licensees
* `transfer_licenses` - Transfer Licenses
* `update_licensee` - Update Licensee
* `validate_licensee` - Validate Licensee

### payment_method

* `get_payment_method` - Get Payment Method
* `list_payment_methods` - List Payment Methods
* `update_payment_method` - Update Payment Method

### product

* `create_product` - Create Product
* `delete_product` - Delete Product
* `list_products` - List Products
* `product_number` - Get Product
* `update_product` - Update Product

### product_module

* `create_product_module` - Create Product Module
* `delete_product_module` - Delete Product Module
* `get_product_module` - Get Product Module
* `list_product_modules` - List Product Modules
* `update_product_module` - Update Product Module

### token

* `create_token` - Create token
* `delete_token` - Delete token
* `get_token` - Get token
* `list_tokens` - List Tokens

### transaction

* `create_transaction` - Create Transaction
* `get_transaction` - Get Transaction 
* `list_transactions` - List Transactions
* `update_transaction` - Update Transaction

### utility

* `license_types` - List License Types
* `licensing_models` - List Licensing Models
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
