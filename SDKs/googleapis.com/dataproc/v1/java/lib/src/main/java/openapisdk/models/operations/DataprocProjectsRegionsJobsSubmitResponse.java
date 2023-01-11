package openapisdk.models.operations;



public class DataprocProjectsRegionsJobsSubmitResponse {
    public String contentType;
    public DataprocProjectsRegionsJobsSubmitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public DataprocProjectsRegionsJobsSubmitResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsJobsSubmitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}