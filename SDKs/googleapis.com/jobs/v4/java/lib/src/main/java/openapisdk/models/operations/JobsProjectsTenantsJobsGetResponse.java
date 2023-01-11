package openapisdk.models.operations;



public class JobsProjectsTenantsJobsGetResponse {
    public String contentType;
    public JobsProjectsTenantsJobsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public JobsProjectsTenantsJobsGetResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsJobsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}