# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/openbankingproject.ch/1.3.8_2020-12-14 - Swiss edition 1.3.8.1-CH/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateConsentRequest(
    digest="corrupti",
    psu_accept="provident",
    psu_accept_charset="distinctio",
    psu_accept_encoding="quibusdam",
    psu_accept_language="unde",
    psu_corporate_id="nulla",
    psu_corporate_id_type="corrupti",
    psu_device_id="illum",
    psu_geo_location="vel",
    psu_http_method="PATCH",
    psu_id="deserunt",
    psu_id_type="suscipit",
    psu_ip_address="112.76.228.14",
    psu_ip_port="delectus",
    psu_user_agent="tempora",
    signature="suscipit",
    tpp_brand_logging_information="molestiae",
    tpp_explicit_authorisation_preferred=False,
    tpp_nok_redirect_uri="https://studious-lynx.info",
    tpp_notification_content_preferred="excepturi",
    tpp_notification_uri="nisi",
    tpp_redirect_preferred=False,
    tpp_redirect_uri="https://tangible-bathroom.info",
    tpp_signature_certificate="veritatis",
    x_request_id="deserunt",
    consents=shared.Consents(
        access=shared.AccountAccess(
            accounts=[
                shared.AccountReference16CH(
                    cash_account_type="ipsam",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
            ],
            additional_information=shared.AdditionalInformationAccess(
                owner_name=[
                    shared.AccountReference16CH(
                        cash_account_type="sapiente",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                    shared.AccountReference16CH(
                        cash_account_type="quo",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                    shared.AccountReference16CH(
                        cash_account_type="odit",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                    shared.AccountReference16CH(
                        cash_account_type="at",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                ],
                trusted_beneficiaries=[
                    shared.AccountReference16CH(
                        cash_account_type="maiores",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                    shared.AccountReference16CH(
                        cash_account_type="molestiae",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                    shared.AccountReference16CH(
                        cash_account_type="quod",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                    shared.AccountReference16CH(
                        cash_account_type="quod",
                        currency="EUR",
                        iban="FR7612345987650123456789014",
                        other_account_identification="90-100100-0",
                    ),
                ],
            ),
            all_psd2="allAccounts",
            available_accounts="allAccountsWithOwnerName",
            available_accounts_with_balance="allAccountsWithOwnerName",
            balances=[
                shared.AccountReference16CH(
                    cash_account_type="dicta",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
                shared.AccountReference16CH(
                    cash_account_type="nam",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
                shared.AccountReference16CH(
                    cash_account_type="officia",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
            ],
            restricted_to=[
                "fugit",
                "deleniti",
                "hic",
            ],
            transactions=[
                shared.AccountReference16CH(
                    cash_account_type="totam",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
                shared.AccountReference16CH(
                    cash_account_type="beatae",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
                shared.AccountReference16CH(
                    cash_account_type="commodi",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
                shared.AccountReference16CH(
                    cash_account_type="molestiae",
                    currency="EUR",
                    iban="FR7612345987650123456789014",
                    other_account_identification="90-100100-0",
                ),
            ],
        ),
        combined_service_indicator=False,
        frequency_per_day=4,
        recurring_indicator=False,
        valid_until="2020-12-31",
    ),
)
    
res = s.account_information_service_ais.create_consent(req, operations.CreateConsentSecurity(
    bearer_auth_o_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.consents_response_201 is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account_information_service_ais

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

### common_services

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

### confirmation_of_funds_service_piis

* `check_availability_of_funds` - Confirmation of funds request

### payment_initiation_service_pis

* `cancel_payment` - Payment cancellation request
* `get_payment_cancellation_sca_status` - Read the SCA status of the payment cancellation's authorisation
* `get_payment_information` - Get payment information
* `get_payment_initiation_authorisation` - Get payment initiation authorisation sub-resources request
* `get_payment_initiation_cancellation_authorisation_information` - Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
* `get_payment_initiation_sca_status` - Read the SCA status of the payment authorisation
* `get_payment_initiation_status` - Payment initiation status request
* `initiate_payment_json` - Payment initiation request
* `initiate_payment_multipart` - Payment initiation request
* `initiate_payment_raw` - Payment initiation request
* `start_payment_authorisation` - Start the authorisation process for a payment initiation
* `start_payment_initiation_cancellation_authorisation` - Start the authorisation process for the cancellation of the addressed payment
* `update_payment_cancellation_psu_data` - Update PSU data for payment initiation cancellation
* `update_payment_psu_data` - Update PSU data for payment initiation

### signing_baskets_service_sbs

* `create_signing_basket` - Create a signing basket resource
* `delete_signing_basket` - Delete the signing basket
* `get_signing_basket` - Returns the content of an signing basket object
* `get_signing_basket_authorisation` - Get signing basket authorisation sub-resources request
* `get_signing_basket_sca_status` - Read the SCA status of the signing basket authorisation
* `get_signing_basket_status` - Read the status of the signing basket
* `start_signing_basket_authorisation` - Start the authorisation process for a signing basket
* `update_signing_basket_psu_data` - Update PSU data for signing basket
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
