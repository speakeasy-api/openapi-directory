package openapisdk.models.operations;



public class GamesAchievementsRevealResponse {
    public openapisdk.models.shared.AchievementRevealResponse achievementRevealResponse;
    public GamesAchievementsRevealResponse withAchievementRevealResponse(openapisdk.models.shared.AchievementRevealResponse achievementRevealResponse) {
        this.achievementRevealResponse = achievementRevealResponse;
        return this;
    }
    public String contentType;
    public GamesAchievementsRevealResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesAchievementsRevealResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}