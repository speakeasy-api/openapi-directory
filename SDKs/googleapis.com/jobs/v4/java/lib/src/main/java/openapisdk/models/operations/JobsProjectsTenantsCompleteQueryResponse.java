package openapisdk.models.operations;



public class JobsProjectsTenantsCompleteQueryResponse {
    public openapisdk.models.shared.CompleteQueryResponse completeQueryResponse;
    public JobsProjectsTenantsCompleteQueryResponse withCompleteQueryResponse(openapisdk.models.shared.CompleteQueryResponse completeQueryResponse) {
        this.completeQueryResponse = completeQueryResponse;
        return this;
    }
    public String contentType;
    public JobsProjectsTenantsCompleteQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsCompleteQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}