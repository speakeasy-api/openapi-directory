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
s.config_security(
    security=shared.Security(
        bearer_auth_o_auth=shared.SchemeBearerAuthOAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.CreateConsentRequest(
    security=operations.CreateConsentSecurity(
        bearer_auth_o_auth=shared.SchemeBearerAuthOAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    headers=operations.CreateConsentHeaders(
        digest="autem",
        psu_accept="dolorum",
        psu_accept_charset="exercitationem",
        psu_accept_encoding="facilis",
        psu_accept_language="possimus",
        psu_corporate_id="et",
        psu_corporate_id_type="nisi",
        psu_device_id="sed",
        psu_geo_location="esse",
        psu_http_method="GET",
        psu_id="quo",
        psu_id_type="aspernatur",
        psu_ip_address="est",
        psu_ip_port="sapiente",
        psu_user_agent="ea",
        signature="blanditiis",
        tpp_brand_logging_information="facere",
        tpp_explicit_authorisation_preferred=True,
        tpp_nok_redirect_uri="quasi",
        tpp_notification_content_preferred="voluptas",
        tpp_notification_uri="qui",
        tpp_redirect_preferred=False,
        tpp_redirect_uri="enim",
        tpp_signature_certificate="quis",
        x_request_id="iure",
    ),
    request=shared.Consents(
        access=shared.AccountAccess(
            accounts=[
                shared.AccountReference16Ch(
                    cash_account_type="labore",
                    currency="incidunt",
                    iban="rerum",
                    other_account_identification="praesentium",
                ),
            ],
            additional_information=shared.AdditionalInformationAccess(
                owner_name=[
                    shared.AccountReference16Ch(
                        cash_account_type="excepturi",
                        currency="quaerat",
                        iban="commodi",
                        other_account_identification="quae",
                    ),
                    shared.AccountReference16Ch(
                        cash_account_type="esse",
                        currency="enim",
                        iban="et",
                        other_account_identification="et",
                    ),
                    shared.AccountReference16Ch(
                        cash_account_type="tempore",
                        currency="occaecati",
                        iban="tempore",
                        other_account_identification="maxime",
                    ),
                ],
                trusted_beneficiaries=[
                    shared.AccountReference16Ch(
                        cash_account_type="explicabo",
                        currency="pariatur",
                        iban="modi",
                        other_account_identification="id",
                    ),
                ],
            ),
            all_psd2="allAccountsWithOwnerName",
            available_accounts="allAccounts",
            available_accounts_with_balance="allAccounts",
            balances=[
                shared.AccountReference16Ch(
                    cash_account_type="aut",
                    currency="earum",
                    iban="omnis",
                    other_account_identification="minima",
                ),
            ],
            restricted_to=[
                "impedit",
                "et",
                "rerum",
            ],
            transactions=[
                shared.AccountReference16Ch(
                    cash_account_type="in",
                    currency="porro",
                    iban="aut",
                    other_account_identification="reprehenderit",
                ),
                shared.AccountReference16Ch(
                    cash_account_type="et",
                    currency="ad",
                    iban="sed",
                    other_account_identification="dignissimos",
                ),
            ],
        ),
        combined_service_indicator=True,
        frequency_per_day=3737105922776060954,
        recurring_indicator=False,
        valid_until="1984-07-29",
    ),
)
    
res = s.account_information_service_ais_.create_consent(req)

if res.consents_response_201 is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account Information Service (AIS)

* `create_consent` - Create consent
* `delete_consent` - Delete Consent
* `get_account_list` - Read account list
* `get_balances` - Read balance
* `get_consent_authorisation` - Get consent authorisation sub-resources request
* `get_consent_information` - Get consent request
* `get_consent_sca_status` - Read the SCA status of the consent authorisation
* `get_consent_status` - Consent status request
* `get_transaction_details` - Read transaction details
* `get_transaction_list` - Read transaction list of an account
* `read_account_details` - Read account details
* `start_consent_authorisation` - Start the authorisation process for a consent
* `update_consents_psu_data` - Update PSU Data for consents

### Common Services

* `delete_signing_basket` - Delete the signing basket
* `get_consent_sca_status` - Read the SCA status of the consent authorisation
* `get_payment_cancellation_sca_status` - Read the SCA status of the payment cancellation's authorisation
* `get_payment_initiation_authorisation` - Get payment initiation authorisation sub-resources request
* `get_payment_initiation_sca_status` - Read the SCA status of the payment authorisation
* `get_signing_basket_authorisation` - Get signing basket authorisation sub-resources request
* `get_signing_basket_sca_status` - Read the SCA status of the signing basket authorisation
* `get_signing_basket_status` - Read the status of the signing basket
* `start_consent_authorisation` - Start the authorisation process for a consent
* `start_payment_authorisation` - Start the authorisation process for a payment initiation
* `start_payment_initiation_cancellation_authorisation` - Start the authorisation process for the cancellation of the addressed payment
* `start_signing_basket_authorisation` - Start the authorisation process for a signing basket
* `update_consents_psu_data` - Update PSU Data for consents
* `update_payment_cancellation_psu_data` - Update PSU data for payment initiation cancellation
* `update_payment_psu_data` - Update PSU data for payment initiation
* `update_signing_basket_psu_data` - Update PSU data for signing basket

### Confirmation of Funds Service (PIIS)

* `check_availability_of_funds` - Confirmation of funds request

### Payment Initiation Service (PIS)

* `cancel_payment` - Payment cancellation request
* `get_payment_cancellation_sca_status` - Read the SCA status of the payment cancellation's authorisation
* `get_payment_information` - Get payment information
* `get_payment_initiation_authorisation` - Get payment initiation authorisation sub-resources request
* `get_payment_initiation_cancellation_authorisation_information` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `get_payment_initiation_sca_status` - Read the SCA status of the payment authorisation
* `get_payment_initiation_status` - Payment initiation status request
* `initiate_payment` - Payment initiation request
* `start_payment_authorisation` - Start the authorisation process for a payment initiation
* `start_payment_initiation_cancellation_authorisation` - Start the authorisation process for the cancellation of the addressed payment
* `update_payment_cancellation_psu_data` - Update PSU data for payment initiation cancellation
* `update_payment_psu_data` - Update PSU data for payment initiation

### Signing Baskets Service (SBS)

* `create_signing_basket` - Create a signing basket resource
* `delete_signing_basket` - Delete the signing basket
* `get_signing_basket` - Returns the content of an signing basket object
* `get_signing_basket_authorisation` - Get signing basket authorisation sub-resources request
* `get_signing_basket_sca_status` - Read the SCA status of the signing basket authorisation
* `get_signing_basket_status` - Read the status of the signing basket
* `start_signing_basket_authorisation` - Start the authorisation process for a signing basket
* `update_signing_basket_psu_data` - Update PSU data for signing basket

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
