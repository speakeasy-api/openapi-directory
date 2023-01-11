package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayablelocationsLogImpressionsRequest {
    public PlayablelocationsLogImpressionsQueryParams queryParams;
    public PlayablelocationsLogImpressionsRequest withQueryParams(PlayablelocationsLogImpressionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest request;
    public PlayablelocationsLogImpressionsRequest withRequest(openapisdk.models.shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest request) {
        this.request = request;
        return this;
    }
}