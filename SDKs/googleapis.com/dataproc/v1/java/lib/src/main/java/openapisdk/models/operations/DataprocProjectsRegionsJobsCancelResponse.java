package openapisdk.models.operations;



public class DataprocProjectsRegionsJobsCancelResponse {
    public String contentType;
    public DataprocProjectsRegionsJobsCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public DataprocProjectsRegionsJobsCancelResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsJobsCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}