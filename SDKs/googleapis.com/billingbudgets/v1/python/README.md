# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/billingbudgets/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BillingbudgetsBillingAccountsBudgetsCreateRequest(
    dollar_xgafv="2",
    google_cloud_billing_budgets_v1_budget_input=shared.GoogleCloudBillingBudgetsV1BudgetInput(
        amount=shared.GoogleCloudBillingBudgetsV1BudgetAmount(
            last_period_amount={
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            specified_amount=shared.GoogleTypeMoney(
                currency_code="vel",
                nanos=623564,
                units="deserunt",
            ),
        ),
        budget_filter=shared.GoogleCloudBillingBudgetsV1Filter(
            calendar_period="MONTH",
            credit_types=[
                "magnam",
                "debitis",
            ],
            credit_types_treatment="CREDIT_TYPES_TREATMENT_UNSPECIFIED",
            custom_period=shared.GoogleCloudBillingBudgetsV1CustomPeriod(
                end_date=shared.GoogleTypeDate(
                    day=963663,
                    month=272656,
                    year=383441,
                ),
                start_date=shared.GoogleTypeDate(
                    day=477665,
                    month=791725,
                    year=812169,
                ),
            ),
            labels={
                "iusto": [
                    "nisi",
                    "recusandae",
                    "temporibus",
                ],
                "ab": [
                    "veritatis",
                    "deserunt",
                ],
                "perferendis": [
                    "repellendus",
                    "sapiente",
                ],
            },
            projects=[
                "odit",
                "at",
                "at",
                "maiores",
            ],
            services=[
                "quod",
                "quod",
            ],
            subaccounts=[
                "totam",
                "porro",
            ],
        ),
        display_name="dolorum",
        etag="dicta",
        notifications_rule=shared.GoogleCloudBillingBudgetsV1NotificationsRule(
            disable_default_iam_recipients=False,
            monitoring_notification_channels=[
                "officia",
                "occaecati",
                "fugit",
            ],
            pubsub_topic="deleniti",
            schema_version="hic",
        ),
        threshold_rules=[
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="CURRENT_SPEND",
                threshold_percent=1059.07,
            ),
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="CURRENT_SPEND",
                threshold_percent=4736,
            ),
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="BASIS_UNSPECIFIED",
                threshold_percent=1863.32,
            ),
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="FORECASTED_SPEND",
                threshold_percent=7369.18,
            ),
        ],
    ),
    access_token="esse",
    alt="json",
    callback="excepturi",
    fields_="aspernatur",
    key="perferendis",
    oauth_token="ad",
    parent="natus",
    pretty_print=False,
    quota_user="sed",
    upload_type="iste",
    upload_protocol="dolor",
)
    
res = s.billing_accounts.billingbudgets_billing_accounts_budgets_create(req, operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity(
    option1=operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_cloud_billing_budgets_v1_budget is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### billing_accounts

* `billingbudgets_billing_accounts_budgets_create` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `billingbudgets_billing_accounts_budgets_delete` - Deletes a budget. Returns successfully if already deleted.
* `billingbudgets_billing_accounts_budgets_get` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgets_billing_accounts_budgets_list` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgets_billing_accounts_budgets_patch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
