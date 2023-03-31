<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    daily_metrics=[
        "BUSINESS_FOOD_ORDERS",
        "BUSINESS_DIRECTION_REQUESTS",
        "BUSINESS_FOOD_ORDERS",
    ],
    daily_range_end_date_day=423655,
    daily_range_end_date_month=623564,
    daily_range_end_date_year=645894,
    daily_range_start_date_day=384382,
    daily_range_start_date_month=437587,
    daily_range_start_date_year=297534,
    fields_="debitis",
    key="ipsa",
    location="delectus",
    oauth_token="tempora",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="molestiae",
    upload_protocol="minus",
)
    
res = s.locations.businessprofileperformance_locations_fetch_multi_daily_metrics_time_series(req)

if res.fetch_multi_daily_metrics_time_series_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->