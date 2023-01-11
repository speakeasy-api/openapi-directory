package openapisdk.models.operations;



public class GamesAchievementsSetStepsAtLeastResponse {
    public openapisdk.models.shared.AchievementSetStepsAtLeastResponse achievementSetStepsAtLeastResponse;
    public GamesAchievementsSetStepsAtLeastResponse withAchievementSetStepsAtLeastResponse(openapisdk.models.shared.AchievementSetStepsAtLeastResponse achievementSetStepsAtLeastResponse) {
        this.achievementSetStepsAtLeastResponse = achievementSetStepsAtLeastResponse;
        return this;
    }
    public String contentType;
    public GamesAchievementsSetStepsAtLeastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GamesAchievementsSetStepsAtLeastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}