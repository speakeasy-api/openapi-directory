package openapisdk.models.operations;



public class YoutubeAnalyticsGroupsListRequest {
    public YoutubeAnalyticsGroupsListQueryParams queryParams;
    public YoutubeAnalyticsGroupsListRequest withQueryParams(YoutubeAnalyticsGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeAnalyticsGroupsListSecurity security;
    public YoutubeAnalyticsGroupsListRequest withSecurity(YoutubeAnalyticsGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}