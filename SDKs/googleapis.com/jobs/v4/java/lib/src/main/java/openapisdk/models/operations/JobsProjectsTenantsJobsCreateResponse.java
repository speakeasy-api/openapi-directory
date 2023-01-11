package openapisdk.models.operations;



public class JobsProjectsTenantsJobsCreateResponse {
    public String contentType;
    public JobsProjectsTenantsJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public JobsProjectsTenantsJobsCreateResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}