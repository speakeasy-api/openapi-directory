package openapisdk.models.operations;



public class CreateWorkflowResponse {
    public String contentType;
    public CreateWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateWorkflowResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public CreateWorkflowResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public Long statusCode;
    public CreateWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}