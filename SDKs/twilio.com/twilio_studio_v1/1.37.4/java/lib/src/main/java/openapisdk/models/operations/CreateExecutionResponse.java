package openapisdk.models.operations;



public class CreateExecutionResponse {
    public String contentType;
    public CreateExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowExecution studioV1FlowExecution;
    public CreateExecutionResponse withStudioV1FlowExecution(openapisdk.models.shared.StudioV1FlowExecution studioV1FlowExecution) {
        this.studioV1FlowExecution = studioV1FlowExecution;
        return this;
    }
}