package openapisdk.models.operations;



public class YoutubeVideoAbuseReportReasonsListRequest {
    public YoutubeVideoAbuseReportReasonsListQueryParams queryParams;
    public YoutubeVideoAbuseReportReasonsListRequest withQueryParams(YoutubeVideoAbuseReportReasonsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeVideoAbuseReportReasonsListSecurity security;
    public YoutubeVideoAbuseReportReasonsListRequest withSecurity(YoutubeVideoAbuseReportReasonsListSecurity security) {
        this.security = security;
        return this;
    }
}