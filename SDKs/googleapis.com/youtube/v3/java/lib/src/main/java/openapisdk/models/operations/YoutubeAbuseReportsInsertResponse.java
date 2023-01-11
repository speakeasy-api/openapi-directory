package openapisdk.models.operations;



public class YoutubeAbuseReportsInsertResponse {
    public openapisdk.models.shared.AbuseReport abuseReport;
    public YoutubeAbuseReportsInsertResponse withAbuseReport(openapisdk.models.shared.AbuseReport abuseReport) {
        this.abuseReport = abuseReport;
        return this;
    }
    public String contentType;
    public YoutubeAbuseReportsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeAbuseReportsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}