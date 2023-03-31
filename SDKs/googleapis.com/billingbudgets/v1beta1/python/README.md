# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/billingbudgets/v1beta1/python
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
    google_cloud_billing_budgets_v1beta1_create_budget_request_input=shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput(
        budget=shared.GoogleCloudBillingBudgetsV1beta1BudgetInput(
            all_updates_rule=shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule(
                disable_default_iam_recipients=False,
                monitoring_notification_channels=[
                    "distinctio",
                    "quibusdam",
                    "unde",
                ],
                pubsub_topic="nulla",
                schema_version="corrupti",
            ),
            amount=shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount(
                last_period_amount={
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                specified_amount=shared.GoogleTypeMoney(
                    currency_code="delectus",
                    nanos=272656,
                    units="suscipit",
                ),
            ),
            budget_filter=shared.GoogleCloudBillingBudgetsV1beta1Filter(
                calendar_period="MONTH",
                credit_types=[
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                ],
                credit_types_treatment="INCLUDE_ALL_CREDITS",
                custom_period=shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod(
                    end_date=shared.GoogleTypeDate(
                        day=925597,
                        month=836079,
                        year=71036,
                    ),
                    start_date=shared.GoogleTypeDate(
                        day=337396,
                        month=87129,
                        year=648172,
                    ),
                ),
                labels={
                    "ipsam": [
                        "sapiente",
                        "quo",
                        "odit",
                        "at",
                    ],
                },
                projects=[
                    "maiores",
                    "molestiae",
                    "quod",
                    "quod",
                ],
                services=[
                    "totam",
                    "porro",
                ],
                subaccounts=[
                    "dicta",
                    "nam",
                    "officia",
                ],
            ),
            display_name="occaecati",
            etag="fugit",
            threshold_rules=[
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="FORECASTED_SPEND",
                    threshold_percent=7586.16,
                ),
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="CURRENT_SPEND",
                    threshold_percent=1059.07,
                ),
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="CURRENT_SPEND",
                    threshold_percent=4736,
                ),
            ],
        ),
    ),
    access_token="modi",
    alt="json",
    callback="impedit",
    fields_="cum",
    key="esse",
    oauth_token="ipsum",
    parent="excepturi",
    pretty_print=False,
    quota_user="aspernatur",
    upload_type="perferendis",
    upload_protocol="ad",
)
    
res = s.billing_accounts.billingbudgets_billing_accounts_budgets_create(req, operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity(
    option1=operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_cloud_billing_budgets_v1beta1_budget is not None:
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
