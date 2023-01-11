package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAchievementsUpdateMultipleRequest {
    public GamesAchievementsUpdateMultipleQueryParams queryParams;
    public GamesAchievementsUpdateMultipleRequest withQueryParams(GamesAchievementsUpdateMultipleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AchievementUpdateMultipleRequest request;
    public GamesAchievementsUpdateMultipleRequest withRequest(openapisdk.models.shared.AchievementUpdateMultipleRequest request) {
        this.request = request;
        return this;
    }
    public GamesAchievementsUpdateMultipleSecurity security;
    public GamesAchievementsUpdateMultipleRequest withSecurity(GamesAchievementsUpdateMultipleSecurity security) {
        this.security = security;
        return this;
    }
}