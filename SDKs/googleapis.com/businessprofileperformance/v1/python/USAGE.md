<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest(
    path_params=operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams(
        name="esse",
    ),
    query_params=operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams(
        dollar_xgafv="2",
        access_token="nihil",
        alt="json",
        callback="porro",
        daily_metric="BUSINESS_CONVERSATIONS",
        daily_range_end_date_day=8314972122484284347,
        daily_range_end_date_month=6767116943109334658,
        daily_range_end_date_year=3649721261448958116,
        daily_range_start_date_day=2892090493204552756,
        daily_range_start_date_month=239094355112619542,
        daily_range_start_date_year=7985232766319097258,
        daily_sub_entity_type_day_of_week="MONDAY",
        daily_sub_entity_type_time_of_day_hours=5283083470341778130,
        daily_sub_entity_type_time_of_day_minutes=6028810783304602274,
        daily_sub_entity_type_time_of_day_nanos=7209973335812237129,
        daily_sub_entity_type_time_of_day_seconds=8070233394185374730,
        fields="eaque",
        key="cumque",
        oauth_token="qui",
        pretty_print=True,
        quota_user="est",
        upload_type="earum",
        upload_protocol="sunt",
    ),
)
    
res = s.locations.businessprofileperformance_locations_get_daily_metrics_time_series(req)

if res.get_daily_metrics_time_series_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->