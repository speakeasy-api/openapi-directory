package openapisdk.models.operations;



public class JobsProjectsCompleteResponse {
    public openapisdk.models.shared.CompleteQueryResponse completeQueryResponse;
    public JobsProjectsCompleteResponse withCompleteQueryResponse(openapisdk.models.shared.CompleteQueryResponse completeQueryResponse) {
        this.completeQueryResponse = completeQueryResponse;
        return this;
    }
    public String contentType;
    public JobsProjectsCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JobsProjectsCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}