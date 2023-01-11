package openapisdk.models.operations;



public class GamesAchievementsRevealRequest {
    public GamesAchievementsRevealPathParams pathParams;
    public GamesAchievementsRevealRequest withPathParams(GamesAchievementsRevealPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GamesAchievementsRevealQueryParams queryParams;
    public GamesAchievementsRevealRequest withQueryParams(GamesAchievementsRevealQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GamesAchievementsRevealSecurity security;
    public GamesAchievementsRevealRequest withSecurity(GamesAchievementsRevealSecurity security) {
        this.security = security;
        return this;
    }
}