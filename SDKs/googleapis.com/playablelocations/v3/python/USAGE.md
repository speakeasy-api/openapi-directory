<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PlayablelocationsLogImpressionsRequest(
    dollar_xgafv="2",
    google_maps_playablelocations_v3_log_impressions_request=shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest(
        client_info=shared.GoogleMapsUnityClientInfo(
            api_client="provident",
            application_id="distinctio",
            application_version="quibusdam",
            device_model="unde",
            language_code="nulla",
            operating_system="corrupti",
            operating_system_build="illum",
            platform="WINDOWS",
        ),
        impressions=[
            shared.GoogleMapsPlayablelocationsV3Impression(
                game_object_type=645894,
                impression_type="PRESENTED",
                location_name="iure",
            ),
            shared.GoogleMapsPlayablelocationsV3Impression(
                game_object_type=297534,
                impression_type="INTERACTED",
                location_name="ipsa",
            ),
            shared.GoogleMapsPlayablelocationsV3Impression(
                game_object_type=963663,
                impression_type="IMPRESSION_TYPE_UNSPECIFIED",
                location_name="suscipit",
            ),
        ],
        request_id="molestiae",
    ),
    access_token="minus",
    alt="proto",
    callback="voluptatum",
    fields_="iusto",
    key="excepturi",
    oauth_token="nisi",
    pretty_print=False,
    quota_user="recusandae",
    upload_type="temporibus",
    upload_protocol="ab",
)
    
res = s.v3.playablelocations_log_impressions(req)

if res.google_maps_playablelocations_v3_log_impressions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->