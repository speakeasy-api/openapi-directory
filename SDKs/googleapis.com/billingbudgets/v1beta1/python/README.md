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
    
req = operations.BillingbudgetsBillingAccountsBudgetsCreateRequest(
    security=operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity(
        option1=operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.BillingbudgetsBillingAccountsBudgetsCreatePathParams(
        parent="accusamus",
    ),
    query_params=operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams(
        dollar_xgafv="1",
        access_token="officia",
        alt="json",
        callback="enim",
        fields="accusantium",
        key="deserunt",
        oauth_token="dolores",
        pretty_print=True,
        quota_user="quam",
        upload_type="quod",
        upload_protocol="iste",
    ),
    request=shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput(
        budget=shared.GoogleCloudBillingBudgetsV1beta1BudgetInput(
            all_updates_rule=shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule(
                disable_default_iam_recipients=True,
                monitoring_notification_channels=[
                    "beatae",
                ],
                pubsub_topic="impedit",
                schema_version="natus",
            ),
            amount=shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount(
                last_period_amount={
                    "non": "tempore",
                    "iusto": "quas",
                },
                specified_amount=shared.GoogleTypeMoney(
                    currency_code="nobis",
                    nanos=2434754690830972633,
                    units="debitis",
                ),
            ),
            budget_filter=shared.GoogleCloudBillingBudgetsV1beta1Filter(
                calendar_period="QUARTER",
                credit_types=[
                    "ratione",
                    "ad",
                ],
                credit_types_treatment="INCLUDE_ALL_CREDITS",
                custom_period=shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod(
                    end_date=shared.GoogleTypeDate(
                        day=6022974110687088585,
                        month=3276416351004451594,
                        year=8350655293440247125,
                    ),
                    start_date=shared.GoogleTypeDate(
                        day=6207443467076797378,
                        month=8419873006552606755,
                        year=196396550416631637,
                    ),
                ),
                labels={
                    "sed": [
                        "possimus",
                        "sit",
                        "ut",
                    ],
                },
                projects=[
                    "et",
                    "aliquam",
                ],
                services=[
                    "pariatur",
                    "tempora",
                ],
                subaccounts=[
                    "maiores",
                    "et",
                ],
            ),
            display_name="est",
            etag="ipsa",
            threshold_rules=[
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="CURRENT_SPEND",
                    threshold_percent=96.099998,
                ),
                shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule(
                    spend_basis="BASIS_UNSPECIFIED",
                    threshold_percent=16.200001,
                ),
            ],
        ),
    ),
)
    
res = s.billing_accounts.billingbudgets_billing_accounts_budgets_create(req)

if res.google_cloud_billing_budgets_v1beta1_budget is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `billingbudgets_billing_accounts_budgets_create` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `billingbudgets_billing_accounts_budgets_delete` - Deletes a budget. Returns successfully if already deleted.
* `billingbudgets_billing_accounts_budgets_get` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgets_billing_accounts_budgets_list` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgets_billing_accounts_budgets_patch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
