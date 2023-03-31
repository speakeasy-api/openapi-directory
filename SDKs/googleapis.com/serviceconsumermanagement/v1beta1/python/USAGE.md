<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest(
    dollar_xgafv="2",
    v1_beta1_import_producer_overrides_request=shared.V1Beta1ImportProducerOverridesRequest(
        force=False,
        force_only=[
            "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH",
            "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH",
            "LIMIT_DECREASE_BELOW_USAGE",
        ],
        inline_source=shared.V1Beta1OverrideInlineSource(
            overrides=[
                shared.V1Beta1QuotaOverride(
                    admin_override_ancestor="corrupti",
                    dimensions={
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    metric="delectus",
                    name="tempora",
                    override_value="suscipit",
                    unit="molestiae",
                ),
                shared.V1Beta1QuotaOverride(
                    admin_override_ancestor="minus",
                    dimensions={
                        "voluptatum": "iusto",
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                    metric="veritatis",
                    name="deserunt",
                    override_value="perferendis",
                    unit="ipsam",
                ),
                shared.V1Beta1QuotaOverride(
                    admin_override_ancestor="repellendus",
                    dimensions={
                        "quo": "odit",
                        "at": "at",
                        "maiores": "molestiae",
                        "quod": "quod",
                    },
                    metric="esse",
                    name="totam",
                    override_value="porro",
                    unit="dolorum",
                ),
                shared.V1Beta1QuotaOverride(
                    admin_override_ancestor="dicta",
                    dimensions={
                        "officia": "occaecati",
                        "fugit": "deleniti",
                        "hic": "optio",
                    },
                    metric="totam",
                    name="beatae",
                    override_value="commodi",
                    unit="molestiae",
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
    
res = s.services.serviceconsumermanagement_services_consumer_quota_metrics_import_producer_overrides(req, operations.ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->