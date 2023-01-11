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
    public openapisdk.models.shared.StudioV2FlowExecution studioV2FlowExecution;
    public UpdateExecutionResponse withStudioV2FlowExecution(openapisdk.models.shared.StudioV2FlowExecution studioV2FlowExecution) {
        this.studioV2FlowExecution = studioV2FlowExecution;
        return this;
    }
}