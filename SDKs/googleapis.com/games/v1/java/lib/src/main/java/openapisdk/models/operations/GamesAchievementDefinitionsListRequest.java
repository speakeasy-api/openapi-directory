package openapisdk.models.operations;



public class GamesAchievementDefinitionsListRequest {
    public GamesAchievementDefinitionsListQueryParams queryParams;
    public GamesAchievementDefinitionsListRequest withQueryParams(GamesAchievementDefinitionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesAchievementDefinitionsListSecurity security;
    public GamesAchievementDefinitionsListRequest withSecurity(GamesAchievementDefinitionsListSecurity security) {
        this.security = security;
        return this;
    }
}