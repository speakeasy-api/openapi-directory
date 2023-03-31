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