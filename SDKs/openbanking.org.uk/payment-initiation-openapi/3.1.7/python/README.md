# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateDomesticPaymentConsentsRequest(
    security=operations.CreateDomesticPaymentConsentsSecurity(
        tppo_auth2_security=shared.SchemeTppoAuth2Security(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    headers=operations.CreateDomesticPaymentConsentsHeaders(
        authorization="doloremque",
        x_customer_user_agent="maiores",
        x_fapi_auth_date="atque",
        x_fapi_customer_ip_address="ipsa",
        x_fapi_interaction_id="blanditiis",
        x_idempotency_key="expedita",
        x_jws_signature="tenetur",
    ),
    request=operations.CreateDomesticPaymentConsentsRequests(
        application_jose_plus_jwe="iusto".encode(),
        ob_write_domestic_consent4=shared.ObWriteDomesticConsent4(
            data=shared.ObWriteDomesticConsent4Data(
                authorisation=shared.ObWriteDomesticConsent4DataAuthorisation(
                    authorisation_type="Any",
                    completion_date_time="1985-08-04T09:11:14Z",
                ),
                initiation=shared.ObWriteDomesticConsent4DataInitiation(
                    creditor_account=shared.ObWriteDomesticConsent4DataInitiationCreditorAccount(
                        identification="corporis",
                        name="ipsam",
                        scheme_name="voluptatem",
                        secondary_identification="repellendus",
                    ),
                    creditor_postal_address=shared.ObPostalAddress6(
                        address_line=[
                            "expedita",
                        ],
                        address_type="Business",
                        building_number="eligendi",
                        country="recusandae",
                        country_sub_division="doloribus",
                        department="molestiae",
                        post_code="cupiditate",
                        street_name="mollitia",
                        sub_department="reiciendis",
                        town_name="ad",
                    ),
                    debtor_account=shared.ObWriteDomesticConsent4DataInitiationDebtorAccount(
                        identification="consectetur",
                        name="molestias",
                        scheme_name="aliquid",
                        secondary_identification="enim",
                    ),
                    end_to_end_identification="tempore",
                    instructed_amount=shared.ObWriteDomesticConsent4DataInitiationInstructedAmount(
                        amount="iure",
                        currency="recusandae",
                    ),
                    instruction_identification="quia",
                    local_instrument="officia",
                    remittance_information=shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation(
                        reference="sit",
                        unstructured="adipisci",
                    ),
                    supplementary_data={
                        "ut": "voluptatum",
                        "velit": "eius",
                        "quo": "aut",
                    },
                ),
                read_refund_account="No",
                sca_support_data=shared.ObscaSupportData1(
                    applied_authentication_approach="SCA",
                    reference_payment_order_id="soluta",
                    requested_sca_exemption_type="PartyToParty",
                ),
            ),
            risk=shared.ObRisk1(
                delivery_address=shared.ObRisk1DeliveryAddress(
                    address_line=[
                        "officia",
                    ],
                    building_number="reprehenderit",
                    country="dolorem",
                    country_sub_division="ea",
                    post_code="dolore",
                    street_name="saepe",
                    town_name="atque",
                ),
                merchant_category_code="et",
                merchant_customer_identification="ut",
                payment_context_code="Other",
            ),
        ),
        ob_write_domestic_consent5=shared.ObWriteDomesticConsent4(
            data=shared.ObWriteDomesticConsent4Data(
                authorisation=shared.ObWriteDomesticConsent4DataAuthorisation(
                    authorisation_type="Single",
                    completion_date_time="2017-12-26T15:29:34Z",
                ),
                initiation=shared.ObWriteDomesticConsent4DataInitiation(
                    creditor_account=shared.ObWriteDomesticConsent4DataInitiationCreditorAccount(
                        identification="quisquam",
                        name="velit",
                        scheme_name="veritatis",
                        secondary_identification="ipsa",
                    ),
                    creditor_postal_address=shared.ObPostalAddress6(
                        address_line=[
                            "rem",
                            "quo",
                        ],
                        address_type="Correspondence",
                        building_number="eum",
                        country="facilis",
                        country_sub_division="sint",
                        department="vitae",
                        post_code="labore",
                        street_name="accusamus",
                        sub_department="vero",
                        town_name="voluptatem",
                    ),
                    debtor_account=shared.ObWriteDomesticConsent4DataInitiationDebtorAccount(
                        identification="perferendis",
                        name="est",
                        scheme_name="ea",
                        secondary_identification="rem",
                    ),
                    end_to_end_identification="qui",
                    instructed_amount=shared.ObWriteDomesticConsent4DataInitiationInstructedAmount(
                        amount="rerum",
                        currency="minus",
                    ),
                    instruction_identification="perspiciatis",
                    local_instrument="natus",
                    remittance_information=shared.ObWriteDomesticConsent4DataInitiationRemittanceInformation(
                        reference="repellat",
                        unstructured="est",
                    ),
                    supplementary_data={
                        "et": "eligendi",
                        "debitis": "dolor",
                        "qui": "iusto",
                    },
                ),
                read_refund_account="No",
                sca_support_data=shared.ObscaSupportData1(
                    applied_authentication_approach="SCA",
                    reference_payment_order_id="ut",
                    requested_sca_exemption_type="EcommerceGoods",
                ),
            ),
            risk=shared.ObRisk1(
                delivery_address=shared.ObRisk1DeliveryAddress(
                    address_line=[
                        "ut",
                        "fugiat",
                    ],
                    building_number="voluptatibus",
                    country="omnis",
                    country_sub_division="voluptatem",
                    post_code="et",
                    street_name="ratione",
                    town_name="sit",
                ),
                merchant_category_code="omnis",
                merchant_customer_identification="voluptate",
                payment_context_code="PartyToParty",
            ),
        ),
    ),
)
    
res = s.domestic_payments.create_domestic_payment_consents(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Domestic Payments

* `create_domestic_payment_consents` - Create Domestic Payment Consents
* `create_domestic_payments` - Create Domestic Payments
* `get_domestic_payment_consents_consent_id` - Get Domestic Payment Consents
* `get_domestic_payment_consents_consent_id_funds_confirmation` - Get Domestic Payment Consents Funds Confirmation
* `get_domestic_payments_domestic_payment_id` - Get Domestic Payments

### Domestic Scheduled Payments

* `create_domestic_scheduled_payment_consents` - Create Domestic Scheduled Payment Consents
* `create_domestic_scheduled_payments` - Create Domestic Scheduled Payments
* `get_domestic_scheduled_payment_consents_consent_id` - Get Domestic Scheduled Payment Consents
* `get_domestic_scheduled_payments_domestic_scheduled_payment_id` - Get Domestic Scheduled Payments

### Domestic Standing Orders

* `create_domestic_standing_order_consents` - Create Domestic Standing Order Consents
* `create_domestic_standing_orders` - Create Domestic Standing Orders
* `get_domestic_standing_order_consents_consent_id` - Get Domestic Standing Order Consents
* `get_domestic_standing_orders_domestic_standing_order_id` - Get Domestic Standing Orders

### File Payments

* `create_file_payment_consents` - Create File Payment Consents
* `create_file_payment_consents_consent_id_file` - Create File Payment Consents
* `create_file_payments` - Create File Payments
* `get_file_payment_consents_consent_id` - Get File Payment Consents
* `get_file_payment_consents_consent_id_file` - Get File Payment Consents
* `get_file_payments_file_payment_id` - Get File Payments
* `get_file_payments_file_payment_id_report_file` - Get File Payments

### International Payments

* `create_international_payment_consents` - Create International Payment Consents
* `create_international_payments` - Create International Payments
* `get_international_payment_consents_consent_id` - Get International Payment Consents
* `get_international_payment_consents_consent_id_funds_confirmation` - Get International Payment Consents Funds Confirmation
* `get_international_payments_international_payment_id` - Get International Payments

### International Scheduled Payments

* `create_international_scheduled_payment_consents` - Create International Scheduled Payment Consents
* `create_international_scheduled_payments` - Create International Scheduled Payments
* `get_international_scheduled_payment_consents_consent_id` - Get International Scheduled Payment Consents
* `get_international_scheduled_payment_consents_consent_id_funds_confirmation` - Get International Scheduled Payment Consents Funds Confirmation
* `get_international_scheduled_payments_international_scheduled_payment_id` - Get International Scheduled Payments

### International Standing Orders

* `create_international_standing_order_consents` - Create International Standing Order Consents
* `create_international_standing_orders` - Create International Standing Orders
* `get_international_standing_order_consents_consent_id` - Get International Standing Order Consents
* `get_international_standing_orders_international_standing_order_payment_id` - Get International Standing Orders

### Payment Details

* `get_domestic_payments_domestic_payment_id_payment_details` - Get Payment Details
* `get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details` - Get Payment Details
* `get_domestic_standing_orders_domestic_standing_order_id_payment_details` - Get Payment Details
* `get_file_payments_file_payment_id_payment_details` - Get Payment Details
* `get_international_payments_international_payment_id_payment_details` - Get Payment Details
* `get_international_scheduled_payments_international_scheduled_payment_id_payment_details` - Get Payment Details
* `get_international_standing_orders_international_standing_order_payment_id_payment_details` - Get Payment Details

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
