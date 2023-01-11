package openapisdk.models.operations;



public class GamesAchievementsListResponse {
    public String contentType;
    public GamesAchievementsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerAchievementListResponse playerAchievementListResponse;
    public GamesAchievementsListResponse withPlayerAchievementListResponse(openapisdk.models.shared.PlayerAchievementListResponse playerAchievementListResponse) {
        this.playerAchievementListResponse = playerAchievementListResponse;
        return this;
    }
    public Long statusCode;
    public GamesAchievementsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}