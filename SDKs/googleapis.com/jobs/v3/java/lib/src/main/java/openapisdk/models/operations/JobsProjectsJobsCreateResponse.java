package openapisdk.models.operations;



public class JobsProjectsJobsCreateResponse {
    public String contentType;
    public JobsProjectsJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public JobsProjectsJobsCreateResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public JobsProjectsJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}