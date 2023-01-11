package openapisdk.models.operations;



public class YoutubereportingJobsReportsListResponse {
    public String contentType;
    public YoutubereportingJobsReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReportsResponse listReportsResponse;
    public YoutubereportingJobsReportsListResponse withListReportsResponse(openapisdk.models.shared.ListReportsResponse listReportsResponse) {
        this.listReportsResponse = listReportsResponse;
        return this;
    }
    public Long statusCode;
    public YoutubereportingJobsReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}