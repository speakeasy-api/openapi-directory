package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementScoresResetMultipleForAllPlayersRequest {
    public GamesManagementScoresResetMultipleForAllPlayersQueryParams queryParams;
    public GamesManagementScoresResetMultipleForAllPlayersRequest withQueryParams(GamesManagementScoresResetMultipleForAllPlayersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoresResetMultipleForAllRequest request;
    public GamesManagementScoresResetMultipleForAllPlayersRequest withRequest(openapisdk.models.shared.ScoresResetMultipleForAllRequest request) {
        this.request = request;
        return this;
    }
    public GamesManagementScoresResetMultipleForAllPlayersSecurity security;
    public GamesManagementScoresResetMultipleForAllPlayersRequest withSecurity(GamesManagementScoresResetMultipleForAllPlayersSecurity security) {
        this.security = security;
        return this;
    }
}