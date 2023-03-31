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