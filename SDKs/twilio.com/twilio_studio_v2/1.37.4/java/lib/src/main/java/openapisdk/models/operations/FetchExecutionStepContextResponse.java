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
    public openapisdk.models.shared.StudioV2FlowExecutionExecutionStepExecutionStepContext studioV2FlowExecutionExecutionStepExecutionStepContext;
    public FetchExecutionStepContextResponse withStudioV2FlowExecutionExecutionStepExecutionStepContext(openapisdk.models.shared.StudioV2FlowExecutionExecutionStepExecutionStepContext studioV2FlowExecutionExecutionStepExecutionStepContext) {
        this.studioV2FlowExecutionExecutionStepExecutionStepContext = studioV2FlowExecutionExecutionStepExecutionStepContext;
        return this;
    }
}