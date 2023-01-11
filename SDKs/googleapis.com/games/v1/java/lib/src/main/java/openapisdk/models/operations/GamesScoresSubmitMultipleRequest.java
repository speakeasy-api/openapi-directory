package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesScoresSubmitMultipleRequest {
    public GamesScoresSubmitMultipleQueryParams queryParams;
    public GamesScoresSubmitMultipleRequest withQueryParams(GamesScoresSubmitMultipleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlayerScoreSubmissionList request;
    public GamesScoresSubmitMultipleRequest withRequest(openapisdk.models.shared.PlayerScoreSubmissionList request) {
        this.request = request;
        return this;
    }
    public GamesScoresSubmitMultipleSecurity security;
    public GamesScoresSubmitMultipleRequest withSecurity(GamesScoresSubmitMultipleSecurity security) {
        this.security = security;
        return this;
    }
}