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
    
req = operations.ServicecontrolServicesAllocateQuotaRequest(
    security=operations.ServicecontrolServicesAllocateQuotaSecurity(
        option1=operations.ServicecontrolServicesAllocateQuotaSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.ServicecontrolServicesAllocateQuotaPathParams(
        service_name="voluptatum",
    ),
    query_params=operations.ServicecontrolServicesAllocateQuotaQueryParams(
        dollar_xgafv="1",
        access_token="in",
        alt="json",
        callback="rem",
        fields="repudiandae",
        key="pariatur",
        oauth_token="iste",
        pretty_print=False,
        quota_user="earum",
        upload_type="repudiandae",
        upload_protocol="facere",
    ),
    request=shared.AllocateQuotaRequest(
        allocate_operation=shared.QuotaOperation(
            consumer_id="rerum",
            labels={
                "dolorum": "ab",
            },
            method_name="rerum",
            operation_id="quis",
            quota_metrics=[
                shared.MetricValueSet(
                    metric_name="atque",
                    metric_values=[
                        shared.MetricValue(
                            bool_value=True,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "aperiam",
                                    "vel",
                                    "deserunt",
                                ],
                                count="rerum",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "voluptates": "et",
                                                "fugiat": "nihil",
                                                "laboriosam": "laborum",
                                            },
                                            {
                                                "esse": "culpa",
                                            },
                                        ],
                                        timestamp="officiis",
                                        value=25.100000,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "sequi": "aut",
                                                "incidunt": "voluptatem",
                                                "in": "ut",
                                            },
                                        ],
                                        timestamp="hic",
                                        value=59.200001,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        1.100000,
                                        66.099998,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=30.200001,
                                    num_finite_buckets=4489151812576496610,
                                    scale=10.100000,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=4803395859386757678,
                                    offset=93.199997,
                                    width=3.200000,
                                ),
                                maximum=27.100000,
                                mean=91.199997,
                                minimum=68.099998,
                                sum_of_squared_deviation=45.200001,
                            ),
                            double_value=42.099998,
                            end_time="mollitia",
                            int64_value="illo",
                            labels={
                                "et": "sed",
                                "nihil": "sed",
                            },
                            money_value=shared.Money(
                                currency_code="possimus",
                                nanos=9215318233273722288,
                                units="natus",
                            ),
                            start_time="excepturi",
                            string_value="molestiae",
                        ),
                        shared.MetricValue(
                            bool_value=True,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "ex",
                                ],
                                count="quis",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "quae": "nulla",
                                                "tempore": "voluptatem",
                                                "quis": "atque",
                                            },
                                        ],
                                        timestamp="velit",
                                        value=94.199997,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "praesentium": "esse",
                                            },
                                            {
                                                "occaecati": "totam",
                                                "hic": "porro",
                                            },
                                        ],
                                        timestamp="accusantium",
                                        value=96.199997,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "magnam": "quia",
                                                "culpa": "et",
                                            },
                                        ],
                                        timestamp="excepturi",
                                        value=24.200001,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        17.100000,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=92.199997,
                                    num_finite_buckets=5101961278488963336,
                                    scale=95.199997,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=4395408437525443538,
                                    offset=52.200001,
                                    width=41.099998,
                                ),
                                maximum=60.099998,
                                mean=49.200001,
                                minimum=18.200001,
                                sum_of_squared_deviation=26.200001,
                            ),
                            double_value=73.199997,
                            end_time="quis",
                            int64_value="officiis",
                            labels={
                                "suscipit": "eos",
                            },
                            money_value=shared.Money(
                                currency_code="ut",
                                nanos=2093816081299750366,
                                units="aut",
                            ),
                            start_time="eaque",
                            string_value="aspernatur",
                        ),
                        shared.MetricValue(
                            bool_value=True,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "qui",
                                ],
                                count="voluptatem",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "omnis": "voluptatum",
                                            },
                                        ],
                                        timestamp="et",
                                        value=22.200001,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "nesciunt": "aspernatur",
                                                "est": "laudantium",
                                            },
                                            {
                                                "earum": "et",
                                                "facere": "maxime",
                                                "quam": "alias",
                                            },
                                        ],
                                        timestamp="et",
                                        value=74.199997,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        66.199997,
                                        93.199997,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=62.200001,
                                    num_finite_buckets=8976415195523404681,
                                    scale=18.100000,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=6815848899035582366,
                                    offset=61.200001,
                                    width=60.099998,
                                ),
                                maximum=3.100000,
                                mean=63.200001,
                                minimum=49.099998,
                                sum_of_squared_deviation=32.200001,
                            ),
                            double_value=87.199997,
                            end_time="aut",
                            int64_value="excepturi",
                            labels={
                                "necessitatibus": "veniam",
                            },
                            money_value=shared.Money(
                                currency_code="quasi",
                                nanos=8414539977968286509,
                                units="dolorum",
                            ),
                            start_time="explicabo",
                            string_value="itaque",
                        ),
                    ],
                ),
            ],
            quota_mode="ADJUST_ONLY",
        ),
        service_config_id="velit",
    ),
)
    
res = s.services.servicecontrol_services_allocate_quota(req)

if res.allocate_quota_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### services

* `servicecontrol_services_allocate_quota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `servicecontrol_services_check` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `servicecontrol_services_report` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
