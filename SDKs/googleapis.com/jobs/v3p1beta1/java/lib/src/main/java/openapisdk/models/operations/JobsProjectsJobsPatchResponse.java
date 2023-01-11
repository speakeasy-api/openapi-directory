package openapisdk.models.operations;



public class JobsProjectsJobsPatchResponse {
    public String contentType;
    public JobsProjectsJobsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public JobsProjectsJobsPatchResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public JobsProjectsJobsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}