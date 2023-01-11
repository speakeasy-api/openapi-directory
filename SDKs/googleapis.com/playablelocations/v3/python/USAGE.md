<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PlayablelocationsLogImpressionsRequest(
    query_params=operations.PlayablelocationsLogImpressionsQueryParams(
        dollar_xgafv="1",
        access_token="voluptatibus",
        alt="media",
        callback="mollitia",
        fields="adipisci",
        key="aut",
        oauth_token="eaque",
        pretty_print=True,
        quota_user="ut",
        upload_type="explicabo",
        upload_protocol="impedit",
    ),
    request=shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest(
        client_info=shared.GoogleMapsUnityClientInfo(
            api_client="quia",
            application_id="quia",
            application_version="odit",
            device_model="nihil",
            language_code="beatae",
            operating_system="corporis",
            operating_system_build="voluptas",
            platform="LINUX",
        ),
        impressions=[
            shared.GoogleMapsPlayablelocationsV3Impression(
                game_object_type=9144622778787384569,
                impression_type="IMPRESSION_TYPE_UNSPECIFIED",
                location_name="impedit",
            ),
        ],
        request_id="odit",
    ),
)
    
res = s.v3.playablelocations_log_impressions(req)

if res.google_maps_playablelocations_v3_log_impressions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->