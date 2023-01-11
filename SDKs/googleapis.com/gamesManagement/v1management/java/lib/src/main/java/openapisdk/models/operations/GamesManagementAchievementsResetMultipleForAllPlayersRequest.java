package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementAchievementsResetMultipleForAllPlayersRequest {
    public GamesManagementAchievementsResetMultipleForAllPlayersQueryParams queryParams;
    public GamesManagementAchievementsResetMultipleForAllPlayersRequest withQueryParams(GamesManagementAchievementsResetMultipleForAllPlayersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AchievementResetMultipleForAllRequest request;
    public GamesManagementAchievementsResetMultipleForAllPlayersRequest withRequest(openapisdk.models.shared.AchievementResetMultipleForAllRequest request) {
        this.request = request;
        return this;
    }
    public GamesManagementAchievementsResetMultipleForAllPlayersSecurity security;
    public GamesManagementAchievementsResetMultipleForAllPlayersRequest withSecurity(GamesManagementAchievementsResetMultipleForAllPlayersSecurity security) {
        this.security = security;
        return this;
    }
}