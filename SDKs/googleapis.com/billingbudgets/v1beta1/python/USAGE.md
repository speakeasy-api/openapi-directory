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