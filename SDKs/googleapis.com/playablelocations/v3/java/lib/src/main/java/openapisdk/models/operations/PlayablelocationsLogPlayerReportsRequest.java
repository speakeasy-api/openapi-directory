package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayablelocationsLogPlayerReportsRequest {
    public PlayablelocationsLogPlayerReportsQueryParams queryParams;
    public PlayablelocationsLogPlayerReportsRequest withQueryParams(PlayablelocationsLogPlayerReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleMapsPlayablelocationsV3LogPlayerReportsRequest request;
    public PlayablelocationsLogPlayerReportsRequest withRequest(openapisdk.models.shared.GoogleMapsPlayablelocationsV3LogPlayerReportsRequest request) {
        this.request = request;
        return this;
    }
}