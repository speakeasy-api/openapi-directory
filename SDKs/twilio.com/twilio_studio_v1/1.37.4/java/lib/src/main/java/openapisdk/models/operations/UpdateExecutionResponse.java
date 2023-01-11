package openapisdk.models.operations;



public class UpdateExecutionResponse {
    public String contentType;
    public UpdateExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowExecution studioV1FlowExecution;
    public UpdateExecutionResponse withStudioV1FlowExecution(openapisdk.models.shared.StudioV1FlowExecution studioV1FlowExecution) {
        this.studioV1FlowExecution = studioV1FlowExecution;
        return this;
    }
}