package openapisdk.models.operations;



public class YoutubeAnalyticsGroupItemsListRequest {
    public YoutubeAnalyticsGroupItemsListQueryParams queryParams;
    public YoutubeAnalyticsGroupItemsListRequest withQueryParams(YoutubeAnalyticsGroupItemsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeAnalyticsGroupItemsListSecurity security;
    public YoutubeAnalyticsGroupItemsListRequest withSecurity(YoutubeAnalyticsGroupItemsListSecurity security) {
        this.security = security;
        return this;
    }
}