# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/openbanking.org.uk/payment-initiation-openapi/3.1.7/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateDomesticPaymentConsentsJSONRequest(
    authorization="corrupti",
    ob_write_domestic_consent4=shared.OBWriteDomesticConsent4(
        data=shared.OBWriteDomesticConsent4Data(
            authorisation=shared.OBWriteDomesticConsent4DataAuthorisation(
                authorisation_type="Single",
                completion_date_time="2021-04-24T16:27:50.833Z",
            ),
            initiation=shared.OBWriteDomesticConsent4DataInitiation(
                creditor_account=shared.OBWriteDomesticConsent4DataInitiationCreditorAccount(
                    identification="unde",
                    name="nulla",
                    scheme_name="corrupti",
                    secondary_identification="illum",
                ),
                creditor_postal_address=shared.OBPostalAddress6(
                    address_line=[
                        "error",
                        "deserunt",
                    ],
                    address_type="MailTo",
                    building_number="iure",
                    country="French Guiana",
                    country_sub_division="debitis",
                    department="ipsa",
                    post_code="23478-5453",
                    street_name="recusandae",
                    sub_department="temporibus",
                    town_name="ab",
                ),
                debtor_account=shared.OBWriteDomesticConsent4DataInitiationDebtorAccount(
                    identification="quis",
                    name="veritatis",
                    scheme_name="deserunt",
                    secondary_identification="perferendis",
                ),
                end_to_end_identification="ipsam",
                instructed_amount=shared.OBWriteDomesticConsent4DataInitiationInstructedAmount(
                    amount="repellendus",
                    currency="sapiente",
                ),
                instruction_identification="quo",
                local_instrument="odit",
                remittance_information=shared.OBWriteDomesticConsent4DataInitiationRemittanceInformation(
                    reference="at",
                    unstructured="at",
                ),
                supplementary_data={
                    "molestiae": "quod",
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                },
            ),
            read_refund_account="Yes",
            sca_support_data=shared.OBSCASupportData1(
                applied_authentication_approach="SCA",
                reference_payment_order_id="occaecati",
                requested_sca_exemption_type="ContactlessTravel",
            ),
        ),
        risk=shared.OBRisk1(
            delivery_address=shared.OBRisk1DeliveryAddress(
                address_line=[
                    "hic",
                    "optio",
                    "totam",
                ],
                building_number="beatae",
                country="Iraq",
                country_sub_division="molestiae",
                post_code="17742",
                street_name="excepturi",
                town_name="aspernatur",
            ),
            merchant_category_code="perferendis",
            merchant_customer_identification="ad",
            payment_context_code="Other",
        ),
    ),
    x_customer_user_agent="sed",
    x_fapi_auth_date="iste",
    x_fapi_customer_ip_address="dolor",
    x_fapi_interaction_id="natus",
    x_idempotency_key="laboriosam",
    x_jws_signature="hic",
)
    
res = s.domestic_payments.create_domestic_payment_consents_json(req, operations.CreateDomesticPaymentConsentsJSONSecurity(
    tppo_auth2_security="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### domestic_payments

* `create_domestic_payment_consents_json` - Create Domestic Payment Consents
* `create_domestic_payment_consents_raw` - Create Domestic Payment Consents
* `create_domestic_payments_json` - Create Domestic Payments
* `create_domestic_payments_raw` - Create Domestic Payments
* `get_domestic_payment_consents_consent_id` - Get Domestic Payment Consents
* `get_domestic_payment_consents_consent_id_funds_confirmation` - Get Domestic Payment Consents Funds Confirmation
* `get_domestic_payments_domestic_payment_id` - Get Domestic Payments

### domestic_scheduled_payments

* `create_domestic_scheduled_payment_consents_json` - Create Domestic Scheduled Payment Consents
* `create_domestic_scheduled_payment_consents_raw` - Create Domestic Scheduled Payment Consents
* `create_domestic_scheduled_payments_json` - Create Domestic Scheduled Payments
* `create_domestic_scheduled_payments_raw` - Create Domestic Scheduled Payments
* `get_domestic_scheduled_payment_consents_consent_id` - Get Domestic Scheduled Payment Consents
* `get_domestic_scheduled_payments_domestic_scheduled_payment_id` - Get Domestic Scheduled Payments

### domestic_standing_orders

* `create_domestic_standing_order_consents_json` - Create Domestic Standing Order Consents
* `create_domestic_standing_order_consents_raw` - Create Domestic Standing Order Consents
* `create_domestic_standing_orders_json` - Create Domestic Standing Orders
* `create_domestic_standing_orders_raw` - Create Domestic Standing Orders
* `get_domestic_standing_order_consents_consent_id` - Get Domestic Standing Order Consents
* `get_domestic_standing_orders_domestic_standing_order_id` - Get Domestic Standing Orders

### file_payments

* `create_file_payment_consents_consent_id_file_json` - Create File Payment Consents
* `create_file_payment_consents_consent_id_file_raw` - Create File Payment Consents
* `create_file_payment_consents_json` - Create File Payment Consents
* `create_file_payment_consents_raw` - Create File Payment Consents
* `create_file_payments_json` - Create File Payments
* `create_file_payments_raw` - Create File Payments
* `get_file_payment_consents_consent_id` - Get File Payment Consents
* `get_file_payment_consents_consent_id_file` - Get File Payment Consents
* `get_file_payments_file_payment_id` - Get File Payments
* `get_file_payments_file_payment_id_report_file` - Get File Payments

### international_payments

* `create_international_payment_consents_json` - Create International Payment Consents
* `create_international_payment_consents_raw` - Create International Payment Consents
* `create_international_payments_json` - Create International Payments
* `create_international_payments_raw` - Create International Payments
* `get_international_payment_consents_consent_id` - Get International Payment Consents
* `get_international_payment_consents_consent_id_funds_confirmation` - Get International Payment Consents Funds Confirmation
* `get_international_payments_international_payment_id` - Get International Payments

### international_scheduled_payments

* `create_international_scheduled_payment_consents_json` - Create International Scheduled Payment Consents
* `create_international_scheduled_payment_consents_raw` - Create International Scheduled Payment Consents
* `create_international_scheduled_payments_json` - Create International Scheduled Payments
* `create_international_scheduled_payments_raw` - Create International Scheduled Payments
* `get_international_scheduled_payment_consents_consent_id` - Get International Scheduled Payment Consents
* `get_international_scheduled_payment_consents_consent_id_funds_confirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `get_international_scheduled_payments_international_scheduled_payment_id` - Get International Scheduled Payments

### international_standing_orders

* `create_international_standing_order_consents_json` - Create International Standing Order Consents
* `create_international_standing_order_consents_raw` - Create International Standing Order Consents
* `create_international_standing_orders_json` - Create International Standing Orders
* `create_international_standing_orders_raw` - Create International Standing Orders
* `get_international_standing_order_consents_consent_id` - Get International Standing Order Consents
* `get_international_standing_orders_international_standing_order_payment_id` - Get International Standing Orders

### payment_details

* `get_domestic_payments_domestic_payment_id_payment_details` - Get Payment Details
* `get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details` - Get Payment Details
* `get_domestic_standing_orders_domestic_standing_order_id_payment_details` - Get Payment Details
* `get_file_payments_file_payment_id_payment_details` - Get Payment Details
* `get_international_payments_international_payment_id_payment_details` - Get Payment Details
* `get_international_scheduled_payments_international_scheduled_payment_id_payment_details` - Get Payment Details
* `get_international_standing_orders_international_standing_order_payment_id_payment_details` - Get Payment Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
