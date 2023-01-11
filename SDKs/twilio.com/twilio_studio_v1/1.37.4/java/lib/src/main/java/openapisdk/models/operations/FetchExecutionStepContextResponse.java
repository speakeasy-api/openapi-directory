package openapisdk.models.operations;



public class FetchExecutionStepContextResponse {
    public String contentType;
    public FetchExecutionStepContextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchExecutionStepContextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowExecutionExecutionStepExecutionStepContext studioV1FlowExecutionExecutionStepExecutionStepContext;
    public FetchExecutionStepContextResponse withStudioV1FlowExecutionExecutionStepExecutionStepContext(openapisdk.models.shared.StudioV1FlowExecutionExecutionStepExecutionStepContext studioV1FlowExecutionExecutionStepExecutionStepContext) {
        this.studioV1FlowExecutionExecutionStepExecutionStepContext = studioV1FlowExecutionExecutionStepExecutionStepContext;
        return this;
    }
}