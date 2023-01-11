package openapisdk.models.operations;



public class YoutubereportingJobsCreateResponse {
    public String contentType;
    public YoutubereportingJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public YoutubereportingJobsCreateResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public YoutubereportingJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}