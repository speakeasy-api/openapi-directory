package openapisdk.models.operations;



public class JobsProjectsTenantsJobsPatchResponse {
    public String contentType;
    public JobsProjectsTenantsJobsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public JobsProjectsTenantsJobsPatchResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsJobsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}