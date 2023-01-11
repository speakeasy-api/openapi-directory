package openapisdk.models.operations;



public class DataprocProjectsRegionsJobsPatchResponse {
    public String contentType;
    public DataprocProjectsRegionsJobsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public DataprocProjectsRegionsJobsPatchResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public DataprocProjectsRegionsJobsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}