# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/doubleclickbidmanager/v1.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DoubleclickbidmanagerQueriesCreatequeryRequest(
    dollar_xgafv="2",
    query=shared.Query(
        kind="provident",
        metadata=shared.QueryMetadata(
            data_range="LAST_90_DAYS",
            format="XLSX",
            google_cloud_storage_path_for_latest_report="unde",
            google_drive_path_for_latest_report="nulla",
            latest_report_run_time_ms="corrupti",
            locale="illum",
            report_count=423655,
            running=False,
            send_notification=False,
            share_email_address=[
                "deserunt",
                "suscipit",
                "iure",
            ],
            title="Mrs.",
        ),
        params=shared.Parameters(
            filters=[
                shared.FilterPair(
                    type="FILTER_REGION",
                    value="delectus",
                ),
                shared.FilterPair(
                    type="FILTER_TRUEVIEW_IAR_CATEGORY",
                    value="suscipit",
                ),
                shared.FilterPair(
                    type="FILTER_ALGORITHM_ID",
                    value="minus",
                ),
                shared.FilterPair(
                    type="FILTER_VARIANT_ID",
                    value="voluptatum",
                ),
            ],
            group_bys=[
                "FILTER_DATA_PROVIDER_NAME",
                "FILTER_AUTHORIZED_SELLER_STATE",
            ],
            include_invite_data=False,
            metrics=[
                "METRIC_STOPS_AUDIO",
                "METRIC_TOTAL_MEDIA_COST_ADVERTISER",
                "METRIC_CPM_FEE4_PARTNER",
                "METRIC_PROFIT_ECPM_ADVERTISER",
            ],
            options=shared.Options(
                include_only_targeted_user_lists=False,
                path_query_options=shared.PathQueryOptions(
                    channel_grouping=shared.ChannelGrouping(
                        fallback_name="deserunt",
                        name="perferendis",
                        rules=[
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TARGETED_DATA_PROVIDERS",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "at",
                                                        "maiores",
                                                        "molestiae",
                                                        "quod",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_HOUSEHOLD_INCOME",
                                                    match="PARTIAL",
                                                    values=[
                                                        "porro",
                                                        "dolorum",
                                                        "dicta",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_MATCH_RATIO",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "fugit",
                                                        "deleniti",
                                                        "hic",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_REFUND_REASON",
                                                    match="PARTIAL",
                                                    values=[
                                                        "commodi",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_IAR_LANGUAGE",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "cum",
                                                        "esse",
                                                        "ipsum",
                                                        "excepturi",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_CAMPAIGN_DAILY_FREQUENCY",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "natus",
                                                        "sed",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_NIELSEN_AGE",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "hic",
                                                        "saepe",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_INSERTION_ORDER_STATUS",
                                                    match="PARTIAL",
                                                    values=[
                                                        "iste",
                                                        "iure",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_VIDEO_CONTENT_DURATION",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "ipsa",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_HOUSEHOLD_INCOME",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "dolores",
                                                        "dolorem",
                                                        "corporis",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_KEYWORD",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "omnis",
                                                        "nemo",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_REGION",
                                                    match="PARTIAL",
                                                    values=[
                                                        "iure",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_FORMAT",
                                                    match="WILDCARD_EXPRESSION",
                                                    values=[
                                                        "architecto",
                                                        "mollitia",
                                                        "dolorem",
                                                        "culpa",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="consequuntur",
                            ),
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_GAM_INSERTION_ORDER",
                                                    match="EXACT",
                                                    values=[
                                                        "quam",
                                                        "molestiae",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TRUEVIEW_GENDER",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "quis",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_TARGETED_USER_LIST",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "enim",
                                                        "odit",
                                                        "quo",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_OMID_CAPABLE",
                                                    match="EXACT",
                                                    values=[
                                                        "possimus",
                                                        "aut",
                                                        "quasi",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "reiciendis",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_VERIFICATION_VIDEO_RESIZED",
                                                    match="WILDCARD_EXPRESSION",
                                                    values=[
                                                        "praesentium",
                                                        "voluptatibus",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_REGION",
                                                    match="BEGINS_WITH",
                                                    values=[
                                                        "cum",
                                                        "perferendis",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="FILTER_NIELSEN_DATE_RANGE",
                                                    match="EXACT",
                                                    values=[
                                                        "dicta",
                                                        "corporis",
                                                        "dolore",
                                                        "iusto",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="dicta",
                            ),
                        ],
                    ),
                    path_filters=[
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_EVENT_TYPE",
                                        match="PARTIAL",
                                        values=[
                                            "quae",
                                            "ipsum",
                                            "quidem",
                                            "molestias",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_CREATIVE_STATUS",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "praesentium",
                                            "rem",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="LAST",
                        ),
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_BUDGET_SEGMENT_START_DATE",
                                        match="PARTIAL",
                                        values=[
                                            "itaque",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="ANY",
                        ),
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_DAY_OF_WEEK",
                                        match="BEGINS_WITH",
                                        values=[
                                            "explicabo",
                                            "deserunt",
                                            "distinctio",
                                            "quibusdam",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="FILTER_TRUEVIEW_IAR_REMARKETING_LIST",
                                        match="EXACT",
                                        values=[
                                            "aliquid",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="FIRST",
                        ),
                    ],
                ),
            ),
            type="TYPE_NIELSEN_AUDIENCE_PROFILE",
        ),
        query_id="perferendis",
        report_data_end_time_ms="magni",
        report_data_start_time_ms="assumenda",
        schedule=shared.QuerySchedule(
            end_time_ms="ipsam",
            frequency="ONE_TIME",
            next_run_minute_of_day=146441,
            next_run_timezone_code="dolorum",
            start_time_ms="excepturi",
        ),
        timezone_code="tempora",
    ),
    access_token="facilis",
    alt="proto",
    asynchronous=False,
    callback="labore",
    fields_="delectus",
    key="eum",
    oauth_token="non",
    pretty_print=False,
    quota_user="eligendi",
    upload_type="sint",
    upload_protocol="aliquid",
)
    
res = s.queries.doubleclickbidmanager_queries_createquery(req, operations.DoubleclickbidmanagerQueriesCreatequerySecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.query is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### queries

* `doubleclickbidmanager_queries_createquery` - Creates a query.
* `doubleclickbidmanager_queries_deletequery` - Deletes a stored query as well as the associated stored reports.
* `doubleclickbidmanager_queries_getquery` - Retrieves a stored query.
* `doubleclickbidmanager_queries_listqueries` - Retrieves stored queries.
* `doubleclickbidmanager_queries_runquery` - Runs a stored query to generate a report.

### reports

* `doubleclickbidmanager_reports_listreports` - Retrieves stored reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
