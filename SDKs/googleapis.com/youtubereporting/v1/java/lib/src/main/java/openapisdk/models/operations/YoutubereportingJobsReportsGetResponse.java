package openapisdk.models.operations;



public class YoutubereportingJobsReportsGetResponse {
    public String contentType;
    public YoutubereportingJobsReportsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Report report;
    public YoutubereportingJobsReportsGetResponse withReport(openapisdk.models.shared.Report report) {
        this.report = report;
        return this;
    }
    public Long statusCode;
    public YoutubereportingJobsReportsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}