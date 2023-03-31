# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/serviceconsumermanagement/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### services

* `serviceconsumermanagement_services_consumer_quota_metrics_import_producer_overrides` - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `serviceconsumermanagement_services_consumer_quota_metrics_limits_get` - Retrieves a summary of quota information for a specific quota limit.
* `serviceconsumermanagement_services_consumer_quota_metrics_limits_producer_overrides_create` - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* `serviceconsumermanagement_services_consumer_quota_metrics_limits_producer_overrides_delete` - Deletes a producer override.
* `serviceconsumermanagement_services_consumer_quota_metrics_limits_producer_overrides_list` - Lists all producer overrides on this limit.
* `serviceconsumermanagement_services_consumer_quota_metrics_limits_producer_overrides_patch` - Updates a producer override.
* `serviceconsumermanagement_services_consumer_quota_metrics_list` - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
