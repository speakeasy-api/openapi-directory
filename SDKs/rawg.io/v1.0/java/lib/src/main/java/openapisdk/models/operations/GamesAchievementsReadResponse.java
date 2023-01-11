package openapisdk.models.operations;



public class GamesAchievementsReadResponse {
    public String contentType;
    public GamesAchievementsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ParentAchievement parentAchievement;
    public GamesAchievementsReadResponse withParentAchievement(openapisdk.models.shared.ParentAchievement parentAchievement) {
        this.parentAchievement = parentAchievement;
        return this;
    }
    public Long statusCode;
    public GamesAchievementsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}