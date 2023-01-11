package openapisdk.models.operations;



public class RunNamespacesJobsReplaceJobResponse {
    public String contentType;
    public RunNamespacesJobsReplaceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Job job;
    public RunNamespacesJobsReplaceJobResponse withJob(openapisdk.models.shared.Job job) {
        this.job = job;
        return this;
    }
    public Long statusCode;
    public RunNamespacesJobsReplaceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}