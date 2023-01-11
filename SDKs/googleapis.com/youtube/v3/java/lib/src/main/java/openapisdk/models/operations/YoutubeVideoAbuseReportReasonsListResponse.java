package openapisdk.models.operations;



public class YoutubeVideoAbuseReportReasonsListResponse {
    public String contentType;
    public YoutubeVideoAbuseReportReasonsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeVideoAbuseReportReasonsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoAbuseReportReasonListResponse videoAbuseReportReasonListResponse;
    public YoutubeVideoAbuseReportReasonsListResponse withVideoAbuseReportReasonListResponse(openapisdk.models.shared.VideoAbuseReportReasonListResponse videoAbuseReportReasonListResponse) {
        this.videoAbuseReportReasonListResponse = videoAbuseReportReasonListResponse;
        return this;
    }
}