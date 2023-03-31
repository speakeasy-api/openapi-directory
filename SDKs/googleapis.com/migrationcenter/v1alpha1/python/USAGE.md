<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest(
    dollar_xgafv="2",
    aggregate_assets_values_request=shared.AggregateAssetsValuesRequest(
        aggregations=[
            shared.Aggregation(
                count={
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                field="error",
                frequency={
                    "suscipit": "iure",
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                histogram=shared.AggregationHistogram(
                    lower_bounds=[
                        3834.41,
                        4776.65,
                    ],
                ),
                sum={
                    "placeat": "voluptatum",
                    "iusto": "excepturi",
                    "nisi": "recusandae",
                    "temporibus": "ab",
                },
            ),
            shared.Aggregation(
                count={
                    "veritatis": "deserunt",
                    "perferendis": "ipsam",
                },
                field="repellendus",
                frequency={
                    "quo": "odit",
                    "at": "at",
                    "maiores": "molestiae",
                    "quod": "quod",
                },
                histogram=shared.AggregationHistogram(
                    lower_bounds=[
                        5204.78,
                        7805.29,
                    ],
                ),
                sum={
                    "dicta": "nam",
                    "officia": "occaecati",
                    "fugit": "deleniti",
                },
            ),
            shared.Aggregation(
                count={
                    "optio": "totam",
                    "beatae": "commodi",
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                field="cum",
                frequency={
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                },
                histogram=shared.AggregationHistogram(
                    lower_bounds=[
                        6176.36,
                        1496.75,
                    ],
                ),
                sum={
                    "dolor": "natus",
                    "laboriosam": "hic",
                    "saepe": "fuga",
                },
            ),
        ],
        filter="in",
    ),
    access_token="corporis",
    alt="media",
    callback="iure",
    fields_="saepe",
    key="quidem",
    oauth_token="architecto",
    parent="ipsa",
    pretty_print=False,
    quota_user="reiciendis",
    upload_type="est",
    upload_protocol="mollitia",
)
    
res = s.projects.migrationcenter_projects_locations_assets_aggregate_values(req, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.aggregate_assets_values_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->