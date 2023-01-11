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
        parent="nihil",
    ),
    query_params=operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams(
        dollar_xgafv="2",
        access_token="at",
        alt="media",
        callback="ducimus",
        fields="sit",
        key="ut",
        oauth_token="impedit",
        pretty_print=False,
        quota_user="officiis",
        upload_type="exercitationem",
        upload_protocol="dolores",
    ),
    request=shared.GoogleCloudBillingBudgetsV1BudgetInput(
        amount=shared.GoogleCloudBillingBudgetsV1BudgetAmount(
            last_period_amount={
                "et": "iure",
                "ea": "tempora",
                "cumque": "id",
            },
            specified_amount=shared.GoogleTypeMoney(
                currency_code="sint",
                nanos=2804072079223311850,
                units="eum",
            ),
        ),
        budget_filter=shared.GoogleCloudBillingBudgetsV1Filter(
            calendar_period="QUARTER",
            credit_types=[
                "aut",
            ],
            credit_types_treatment="EXCLUDE_ALL_CREDITS",
            custom_period=shared.GoogleCloudBillingBudgetsV1CustomPeriod(
                end_date=shared.GoogleTypeDate(
                    day=7940414151295099142,
                    month=7958944695709345380,
                    year=71631997747501121,
                ),
                start_date=shared.GoogleTypeDate(
                    day=2278120660741257848,
                    month=5472587920773032124,
                    year=7486886862016919883,
                ),
            ),
            labels={
                "corrupti": [
                    "illo",
                    "et",
                    "earum",
                ],
                "sunt": [
                    "quis",
                    "blanditiis",
                    "recusandae",
                ],
            },
            projects=[
                "dolorem",
            ],
            services=[
                "est",
                "accusantium",
                "illum",
            ],
            subaccounts=[
                "qui",
                "dicta",
            ],
        ),
        display_name="eligendi",
        etag="eum",
        notifications_rule=shared.GoogleCloudBillingBudgetsV1NotificationsRule(
            disable_default_iam_recipients=False,
            monitoring_notification_channels=[
                "a",
            ],
            pubsub_topic="laudantium",
            schema_version="porro",
        ),
        threshold_rules=[
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="CURRENT_SPEND",
                threshold_percent=82.099998,
            ),
            shared.GoogleCloudBillingBudgetsV1ThresholdRule(
                spend_basis="BASIS_UNSPECIFIED",
                threshold_percent=21.100000,
            ),
        ],
    ),
)
    
res = s.billing_accounts.billingbudgets_billing_accounts_budgets_create(req)

if res.google_cloud_billing_budgets_v1_budget is not None:
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
