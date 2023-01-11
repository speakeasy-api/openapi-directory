package openapisdk.models.operations;



public class GamesAchievementsUnlockRequest {
    public GamesAchievementsUnlockPathParams pathParams;
    public GamesAchievementsUnlockRequest withPathParams(GamesAchievementsUnlockPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesAchievementsUnlockQueryParams queryParams;
    public GamesAchievementsUnlockRequest withQueryParams(GamesAchievementsUnlockQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesAchievementsUnlockSecurity security;
    public GamesAchievementsUnlockRequest withSecurity(GamesAchievementsUnlockSecurity security) {
        this.security = security;
        return this;
    }
}