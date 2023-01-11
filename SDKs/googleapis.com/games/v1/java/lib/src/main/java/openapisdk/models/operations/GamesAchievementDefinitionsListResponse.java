package openapisdk.models.operations;



public class GamesAchievementDefinitionsListResponse {
    public openapisdk.models.shared.AchievementDefinitionsListResponse achievementDefinitionsListResponse;
    public GamesAchievementDefinitionsListResponse withAchievementDefinitionsListResponse(openapisdk.models.shared.AchievementDefinitionsListResponse achievementDefinitionsListResponse) {
        this.achievementDefinitionsListResponse = achievementDefinitionsListResponse;
        return this;
    }
    public String contentType;
    public GamesAchievementDefinitionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesAchievementDefinitionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}