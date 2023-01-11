package openapisdk.models.operations;



public class YoutubeAnalyticsReportsQueryRequest {
    public YoutubeAnalyticsReportsQueryQueryParams queryParams;
    public YoutubeAnalyticsReportsQueryRequest withQueryParams(YoutubeAnalyticsReportsQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeAnalyticsReportsQuerySecurity security;
    public YoutubeAnalyticsReportsQueryRequest withSecurity(YoutubeAnalyticsReportsQuerySecurity security) {
        this.security = security;
        return this;
    }
}