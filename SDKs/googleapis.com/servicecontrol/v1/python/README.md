# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/servicecontrol/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ServicecontrolServicesAllocateQuotaRequest(
    dollar_xgafv="2",
    allocate_quota_request=shared.AllocateQuotaRequest(
        allocate_operation=shared.QuotaOperation(
            consumer_id="provident",
            labels={
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            method_name="error",
            operation_id="deserunt",
            quota_metrics=[
                shared.MetricValueSet(
                    metric_name="iure",
                    metric_values=[
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "ipsa",
                                    "delectus",
                                    "tempora",
                                    "suscipit",
                                ],
                                count="molestiae",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "iusto": "excepturi",
                                                "nisi": "recusandae",
                                                "temporibus": "ab",
                                            },
                                            {
                                                "veritatis": "deserunt",
                                                "perferendis": "ipsam",
                                            },
                                            {
                                                "sapiente": "quo",
                                                "odit": "at",
                                                "at": "maiores",
                                                "molestiae": "quod",
                                            },
                                            {
                                                "esse": "totam",
                                                "porro": "dolorum",
                                                "dicta": "nam",
                                                "officia": "occaecati",
                                            },
                                        ],
                                        timestamp="fugit",
                                        value=5373.73,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "totam": "beatae",
                                                "commodi": "molestiae",
                                                "modi": "qui",
                                                "impedit": "cum",
                                            },
                                            {
                                                "ipsum": "excepturi",
                                                "aspernatur": "perferendis",
                                            },
                                            {
                                                "natus": "sed",
                                                "iste": "dolor",
                                            },
                                            {
                                                "laboriosam": "hic",
                                                "saepe": "fuga",
                                                "in": "corporis",
                                            },
                                        ],
                                        timestamp="iste",
                                        value=4370.32,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "architecto": "ipsa",
                                                "reiciendis": "est",
                                                "mollitia": "laborum",
                                            },
                                            {
                                                "dolorem": "corporis",
                                            },
                                            {
                                                "nobis": "enim",
                                            },
                                            {
                                                "nemo": "minima",
                                                "excepturi": "accusantium",
                                                "iure": "culpa",
                                            },
                                        ],
                                        timestamp="doloribus",
                                        value=9589.5,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "dolorem": "culpa",
                                                "consequuntur": "repellat",
                                                "mollitia": "occaecati",
                                            },
                                        ],
                                        timestamp="numquam",
                                        value=4143.69,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        4746.97,
                                        2444.25,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=6235.1,
                                    num_finite_buckets=158969,
                                    scale=3380.07,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=110375,
                                    offset=6747.52,
                                    width=6563.3,
                                ),
                                maximum=3172.02,
                                mean=1381.83,
                                minimum=7783.46,
                                sum_of_squared_deviation=1965.82,
                            ),
                            double_value=9495.72,
                            end_time="ipsam",
                            int64_value="id",
                            labels={
                                "aut": "quasi",
                                "error": "temporibus",
                                "laborum": "quasi",
                                "reiciendis": "voluptatibus",
                            },
                            money_value=shared.Money(
                                currency_code="vero",
                                nanos=468651,
                                units="praesentium",
                            ),
                            start_time="voluptatibus",
                            string_value="ipsa",
                        ),
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "voluptate",
                                    "cum",
                                    "perferendis",
                                ],
                                count="doloremque",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "dicta": "corporis",
                                                "dolore": "iusto",
                                                "dicta": "harum",
                                                "enim": "accusamus",
                                            },
                                            {
                                                "repudiandae": "quae",
                                                "ipsum": "quidem",
                                            },
                                        ],
                                        timestamp="molestias",
                                        value=5666.02,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "praesentium": "rem",
                                                "voluptates": "quasi",
                                            },
                                            {
                                                "sint": "veritatis",
                                                "itaque": "incidunt",
                                                "enim": "consequatur",
                                                "est": "quibusdam",
                                            },
                                            {
                                                "deserunt": "distinctio",
                                            },
                                            {
                                                "labore": "modi",
                                                "qui": "aliquid",
                                                "cupiditate": "quos",
                                                "perferendis": "magni",
                                            },
                                        ],
                                        timestamp="assumenda",
                                        value=3698.08,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        1464.41,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=6778.17,
                                    num_finite_buckets=569618,
                                    scale=2700.08,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=703737,
                                    offset=7351.94,
                                    width=2884.76,
                                ),
                                maximum=9621.89,
                                mean=4332.88,
                                minimum=2487.53,
                                sum_of_squared_deviation=7561.07,
                            ),
                            double_value=5761.57,
                            end_time="aliquid",
                            int64_value="provident",
                            labels={
                                "sint": "officia",
                                "dolor": "debitis",
                                "a": "dolorum",
                                "in": "in",
                            },
                            money_value=shared.Money(
                                currency_code="illum",
                                nanos=978571,
                                units="rerum",
                            ),
                            start_time="dicta",
                            string_value="magnam",
                        ),
                    ],
                ),
                shared.MetricValueSet(
                    metric_name="cumque",
                    metric_values=[
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "aliquid",
                                    "laborum",
                                ],
                                count="accusamus",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "accusamus": "delectus",
                                                "quidem": "provident",
                                            },
                                            {
                                                "id": "blanditiis",
                                                "deleniti": "sapiente",
                                                "amet": "deserunt",
                                            },
                                            {
                                                "vel": "natus",
                                                "omnis": "molestiae",
                                            },
                                        ],
                                        timestamp="perferendis",
                                        value=4701.32,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        7160.75,
                                        6601.74,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=2879.91,
                                    num_finite_buckets=290077,
                                    scale=3834.62,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=618016,
                                    offset=7491.7,
                                    width=4287.69,
                                ),
                                maximum=8784.53,
                                mean=1354.74,
                                minimum=1028.63,
                                sum_of_squared_deviation=2982.82,
                            ),
                            double_value=923.73,
                            end_time="excepturi",
                            int64_value="ullam",
                            labels={
                                "quos": "sint",
                                "accusantium": "mollitia",
                                "reiciendis": "mollitia",
                            },
                            money_value=shared.Money(
                                currency_code="ad",
                                nanos=431418,
                                units="dolor",
                            ),
                            start_time="necessitatibus",
                            string_value="odit",
                        ),
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "quasi",
                                    "iure",
                                ],
                                count="doloribus",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "deleniti": "facilis",
                                                "in": "architecto",
                                                "architecto": "repudiandae",
                                                "ullam": "expedita",
                                            },
                                            {
                                                "repellat": "quibusdam",
                                                "sed": "saepe",
                                            },
                                        ],
                                        timestamp="pariatur",
                                        value=375.59,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "natus": "magni",
                                                "sunt": "quo",
                                                "illum": "pariatur",
                                            },
                                        ],
                                        timestamp="maxime",
                                        value=4113.97,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "ea": "accusantium",
                                            },
                                            {
                                                "maiores": "quidem",
                                            },
                                            {
                                                "voluptate": "autem",
                                                "nam": "eaque",
                                            },
                                        ],
                                        timestamp="pariatur",
                                        value=3654.96,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "fugiat": "amet",
                                            },
                                            {
                                                "cumque": "corporis",
                                            },
                                            {
                                                "libero": "nobis",
                                                "dolores": "quis",
                                                "totam": "dignissimos",
                                                "eaque": "quis",
                                            },
                                            {
                                                "eos": "perferendis",
                                            },
                                        ],
                                        timestamp="dolores",
                                        value=7936.98,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        2239.24,
                                        8745.73,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=3453.52,
                                    num_finite_buckets=944120,
                                    scale=9280.82,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=608253,
                                    offset=7044.15,
                                    width=5966.56,
                                ),
                                maximum=318.38,
                                mean=7836.45,
                                minimum=1646.94,
                                sum_of_squared_deviation=5000.26,
                            ),
                            double_value=6214.79,
                            end_time="eaque",
                            int64_value="occaecati",
                            labels={
                                "adipisci": "asperiores",
                                "earum": "modi",
                                "iste": "dolorum",
                            },
                            money_value=shared.Money(
                                currency_code="deleniti",
                                nanos=864282,
                                units="provident",
                            ),
                            start_time="nobis",
                            string_value="libero",
                        ),
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "quaerat",
                                    "quos",
                                    "aliquid",
                                    "dolorem",
                                ],
                                count="dolorem",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "hic": "excepturi",
                                            },
                                        ],
                                        timestamp="cum",
                                        value=4521.09,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        9702.37,
                                        2274.14,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=6805.45,
                                    num_finite_buckets=254356,
                                    scale=852.95,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=58029,
                                    offset=564.18,
                                    width=4344.17,
                                ),
                                maximum=4878.38,
                                mean=3117.96,
                                minimum=8810.05,
                                sum_of_squared_deviation=6963.44,
                            ),
                            double_value=9764.05,
                            end_time="voluptas",
                            int64_value="natus",
                            labels={
                                "atque": "sit",
                            },
                            money_value=shared.Money(
                                currency_code="fugiat",
                                nanos=67249,
                                units="soluta",
                            ),
                            start_time="dolorum",
                            string_value="iusto",
                        ),
                        shared.MetricValue(
                            bool_value=False,
                            distribution_value=shared.Distribution(
                                bucket_counts=[
                                    "dolorum",
                                    "deleniti",
                                ],
                                count="omnis",
                                exemplars=[
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "nihil": "ipsum",
                                                "voluptate": "id",
                                                "saepe": "eius",
                                                "aspernatur": "perferendis",
                                            },
                                            {
                                                "optio": "accusamus",
                                            },
                                            {
                                                "saepe": "suscipit",
                                                "deserunt": "provident",
                                            },
                                        ],
                                        timestamp="minima",
                                        value=8310.49,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "alias": "at",
                                                "quaerat": "tempora",
                                                "vel": "quod",
                                            },
                                            {
                                                "qui": "dolorum",
                                                "a": "esse",
                                                "harum": "iusto",
                                                "ipsum": "quisquam",
                                            },
                                            {
                                                "amet": "tempore",
                                                "accusamus": "numquam",
                                                "enim": "dolorem",
                                                "sapiente": "totam",
                                            },
                                        ],
                                        timestamp="nihil",
                                        value=256.62,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "sed": "vel",
                                            },
                                            {
                                                "voluptas": "deserunt",
                                                "quam": "ipsum",
                                                "incidunt": "qui",
                                            },
                                            {
                                                "maxime": "pariatur",
                                                "soluta": "dicta",
                                                "laborum": "totam",
                                            },
                                        ],
                                        timestamp="incidunt",
                                        value=1320.68,
                                    ),
                                    shared.Exemplar(
                                        attachments=[
                                            {
                                                "facilis": "aliquid",
                                                "quam": "molestias",
                                                "temporibus": "qui",
                                            },
                                        ],
                                        timestamp="neque",
                                        value=1448.47,
                                    ),
                                ],
                                explicit_buckets=shared.ExplicitBuckets(
                                    bounds=[
                                        4880.56,
                                    ],
                                ),
                                exponential_buckets=shared.ExponentialBuckets(
                                    growth_factor=1248.33,
                                    num_finite_buckets=355613,
                                    scale=7220.81,
                                ),
                                linear_buckets=shared.LinearBuckets(
                                    num_finite_buckets=940432,
                                    offset=304.52,
                                    width=7653.26,
                                ),
                                maximum=7469.94,
                                mean=7486.64,
                                minimum=925.96,
                                sum_of_squared_deviation=9037.2,
                            ),
                            double_value=2174.5,
                            end_time="veritatis",
                            int64_value="nobis",
                            labels={
                                "tempore": "cupiditate",
                                "aperiam": "delectus",
                                "dolorem": "dolore",
                            },
                            money_value=shared.Money(
                                currency_code="labore",
                                nanos=240829,
                                units="dolorum",
                            ),
                            start_time="architecto",
                            string_value="quae",
                        ),
                    ],
                ),
            ],
            quota_mode="UNSPECIFIED",
        ),
        service_config_id="quas",
    ),
    access_token="itaque",
    alt="json",
    callback="est",
    fields_="repellendus",
    key="porro",
    oauth_token="doloribus",
    pretty_print=False,
    quota_user="ut",
    service_name="facilis",
    upload_type="cupiditate",
    upload_protocol="qui",
)
    
res = s.services.servicecontrol_services_allocate_quota(req, operations.ServicecontrolServicesAllocateQuotaSecurity(
    option1=operations.ServicecontrolServicesAllocateQuotaSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.allocate_quota_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### services

* `servicecontrol_services_allocate_quota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `servicecontrol_services_check` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `servicecontrol_services_report` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
