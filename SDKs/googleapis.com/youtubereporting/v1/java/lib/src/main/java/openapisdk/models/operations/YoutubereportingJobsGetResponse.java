package openapisdk.models.operations;



public class YoutubereportingJobsGetResponse {
    public String contentType;
    public YoutubereportingJobsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public YoutubereportingJobsGetResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public YoutubereportingJobsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}