package openapisdk.models.operations;



public class FetchExecutionStepResponse {
    public String contentType;
    public FetchExecutionStepResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchExecutionStepResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2FlowExecutionExecutionStep studioV2FlowExecutionExecutionStep;
    public FetchExecutionStepResponse withStudioV2FlowExecutionExecutionStep(openapisdk.models.shared.StudioV2FlowExecutionExecutionStep studioV2FlowExecutionExecutionStep) {
        this.studioV2FlowExecutionExecutionStep = studioV2FlowExecutionExecutionStep;
        return this;
    }
}