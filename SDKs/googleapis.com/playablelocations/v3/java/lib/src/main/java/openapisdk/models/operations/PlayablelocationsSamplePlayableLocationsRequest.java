package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayablelocationsSamplePlayableLocationsRequest {
    public PlayablelocationsSamplePlayableLocationsQueryParams queryParams;
    public PlayablelocationsSamplePlayableLocationsRequest withQueryParams(PlayablelocationsSamplePlayableLocationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest request;
    public PlayablelocationsSamplePlayableLocationsRequest withRequest(openapisdk.models.shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest request) {
        this.request = request;
        return this;
    }
}