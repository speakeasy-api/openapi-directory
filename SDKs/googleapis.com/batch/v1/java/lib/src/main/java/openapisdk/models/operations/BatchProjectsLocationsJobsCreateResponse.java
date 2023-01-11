package openapisdk.models.operations;



public class BatchProjectsLocationsJobsCreateResponse {
    public String contentType;
    public BatchProjectsLocationsJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public BatchProjectsLocationsJobsCreateResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public BatchProjectsLocationsJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}