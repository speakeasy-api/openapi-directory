package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeVideosReportAbuseRequest {
    public YoutubeVideosReportAbuseQueryParams queryParams;
    public YoutubeVideosReportAbuseRequest withQueryParams(YoutubeVideosReportAbuseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VideoAbuseReport request;
    public YoutubeVideosReportAbuseRequest withRequest(openapisdk.models.shared.VideoAbuseReport request) {
        this.request = request;
        return this;
    }
    public YoutubeVideosReportAbuseSecurity security;
    public YoutubeVideosReportAbuseRequest withSecurity(YoutubeVideosReportAbuseSecurity security) {
        this.security = security;
        return this;
    }
}