package openapisdk.models.operations;



public class GamesAchievementsUpdateMultipleResponse {
    public openapisdk.models.shared.AchievementUpdateMultipleResponse achievementUpdateMultipleResponse;
    public GamesAchievementsUpdateMultipleResponse withAchievementUpdateMultipleResponse(openapisdk.models.shared.AchievementUpdateMultipleResponse achievementUpdateMultipleResponse) {
        this.achievementUpdateMultipleResponse = achievementUpdateMultipleResponse;
        return this;
    }
    public String contentType;
    public GamesAchievementsUpdateMultipleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesAchievementsUpdateMultipleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}