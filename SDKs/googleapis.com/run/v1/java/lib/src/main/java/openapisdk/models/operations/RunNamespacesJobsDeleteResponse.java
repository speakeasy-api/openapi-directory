package openapisdk.models.operations;



public class RunNamespacesJobsDeleteResponse {
    public String contentType;
    public RunNamespacesJobsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Status status;
    public RunNamespacesJobsDeleteResponse withStatus(openapisdk.models.shared.Status status) {
        this.status = status;
        return this;
    }
    public Long statusCode;
    public RunNamespacesJobsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}