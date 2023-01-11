package openapisdk.models.operations;



public class DataprocProjectsRegionsJobsGetResponse {
    public String contentType;
    public DataprocProjectsRegionsJobsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public DataprocProjectsRegionsJobsGetResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsJobsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}