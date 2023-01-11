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
    public openapisdk.models.shared.StudioV2FlowExecution studioV2FlowExecution;
    public CreateExecutionResponse withStudioV2FlowExecution(openapisdk.models.shared.StudioV2FlowExecution studioV2FlowExecution) {
        this.studioV2FlowExecution = studioV2FlowExecution;
        return this;
    }
}