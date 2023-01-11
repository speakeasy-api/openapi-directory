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
    
req = operations.DoubleclickbidmanagerQueriesCreateRequest(
    security=operations.DoubleclickbidmanagerQueriesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.DoubleclickbidmanagerQueriesCreateQueryParams(
        dollar_xgafv="2",
        access_token="autem",
        alt="json",
        callback="consequatur",
        fields="quia",
        key="aliquid",
        oauth_token="quisquam",
        pretty_print=False,
        quota_user="perferendis",
        upload_type="vero",
        upload_protocol="est",
    ),
    request=shared.QueryInput(
        metadata=shared.QueryMetadata(
            data_range=shared.DataRange(
                custom_end_date=shared.Date(
                    day=6704016312163385261,
                    month=8600371065106444358,
                    year=2461961287460019287,
                ),
                custom_start_date=shared.Date(
                    day=4567510374201875481,
                    month=6636597810052724420,
                    year=6457918078793888582,
                ),
                range="LAST_90_DAYS",
            ),
            format="FORMAT_UNSPECIFIED",
            send_notification=False,
            share_email_address=[
                "earum",
            ],
            title="ut",
        ),
        params=shared.Parameters(
            filters=[
                shared.FilterPair(
                    type="architecto",
                    value="ipsum",
                ),
                shared.FilterPair(
                    type="excepturi",
                    value="sit",
                ),
            ],
            group_bys=[
                "optio",
            ],
            metrics=[
                "occaecati",
                "quis",
            ],
            options=shared.Options(
                include_only_targeted_user_lists=True,
                path_query_options=shared.PathQueryOptions(
                    channel_grouping=shared.ChannelGrouping(
                        fallback_name="quaerat",
                        name="culpa",
                        rules=[
                            shared.Rule(
                                disjunctive_match_statements=[
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="pariatur",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "itaque",
                                                        "et",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                    shared.DisjunctiveMatchStatement(
                                        event_filters=[
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="sint",
                                                    match="WILDCARD_EXPRESSION",
                                                    values=[
                                                        "ut",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="est",
                                                    match="EXACT",
                                                    values=[
                                                        "tempora",
                                                    ],
                                                ),
                                            ),
                                            shared.EventFilter(
                                                dimension_filter=shared.PathQueryOptionsFilter(
                                                    filter="hic",
                                                    match="UNKNOWN",
                                                    values=[
                                                        "fuga",
                                                    ],
                                                ),
                                            ),
                                        ],
                                    ),
                                ],
                                name="qui",
                            ),
                        ],
                    ),
                    path_filters=[
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="eos",
                                        match="EXACT",
                                        values=[
                                            "ipsum",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="tenetur",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "blanditiis",
                                            "ipsa",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="FIRST",
                        ),
                        shared.PathFilter(
                            event_filters=[
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="delectus",
                                        match="PARTIAL",
                                        values=[
                                            "sint",
                                            "aliquid",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="quos",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "nihil",
                                            "hic",
                                        ],
                                    ),
                                ),
                                shared.EventFilter(
                                    dimension_filter=shared.PathQueryOptionsFilter(
                                        filter="saepe",
                                        match="BEGINS_WITH",
                                        values=[
                                            "aut",
                                            "ut",
                                            "unde",
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
                                        filter="et",
                                        match="WILDCARD_EXPRESSION",
                                        values=[
                                            "culpa",
                                        ],
                                    ),
                                ),
                            ],
                            path_match_position="ANY",
                        ),
                    ],
                ),
            ),
            type="REPORT_TYPE_UNSPECIFIED",
        ),
        schedule=shared.QuerySchedule(
            end_date=shared.Date(
                day=8367989002648934709,
                month=5382645072164701766,
                year=6059411360258213086,
            ),
            frequency="QUARTERLY",
            next_run_timezone_code="ut",
            start_date=shared.Date(
                day=7350087388602518171,
                month=2960915193202577470,
                year=1333898400016087624,
            ),
        ),
    ),
)
    
res = s.queries.doubleclickbidmanager_queries_create(req)

if res.query is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `doubleclickbidmanager_queries_create` - Creates a query.
* `doubleclickbidmanager_queries_delete` - Deletes a query as well as the associated reports.
* `doubleclickbidmanager_queries_get` - Retrieves a query.
* `doubleclickbidmanager_queries_list` - Lists queries created by the current user.
* `doubleclickbidmanager_queries_reports_get` - Retrieves a report.
* `doubleclickbidmanager_queries_reports_list` - Lists reports associated with a query.
* `doubleclickbidmanager_queries_run` - Runs a stored query to generate a report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
