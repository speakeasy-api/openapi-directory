package openapisdk.models.operations;



public class YoutubeAnalyticsGroupsDeleteRequest {
    public YoutubeAnalyticsGroupsDeleteQueryParams queryParams;
    public YoutubeAnalyticsGroupsDeleteRequest withQueryParams(YoutubeAnalyticsGroupsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeAnalyticsGroupsDeleteSecurity security;
    public YoutubeAnalyticsGroupsDeleteRequest withSecurity(YoutubeAnalyticsGroupsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}