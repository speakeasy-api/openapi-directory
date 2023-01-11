package openapisdk.models.operations;



public class GamesAchievementsIncrementRequest {
    public GamesAchievementsIncrementPathParams pathParams;
    public GamesAchievementsIncrementRequest withPathParams(GamesAchievementsIncrementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesAchievementsIncrementQueryParams queryParams;
    public GamesAchievementsIncrementRequest withQueryParams(GamesAchievementsIncrementQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesAchievementsIncrementSecurity security;
    public GamesAchievementsIncrementRequest withSecurity(GamesAchievementsIncrementSecurity security) {
        this.security = security;
        return this;
    }
}