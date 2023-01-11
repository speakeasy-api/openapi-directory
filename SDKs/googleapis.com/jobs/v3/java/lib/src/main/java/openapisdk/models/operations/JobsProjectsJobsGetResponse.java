package openapisdk.models.operations;



public class JobsProjectsJobsGetResponse {
    public String contentType;
    public JobsProjectsJobsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public JobsProjectsJobsGetResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public JobsProjectsJobsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}