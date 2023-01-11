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
    public openapisdk.models.shared.StudioV1FlowExecutionExecutionStep studioV1FlowExecutionExecutionStep;
    public FetchExecutionStepResponse withStudioV1FlowExecutionExecutionStep(openapisdk.models.shared.StudioV1FlowExecutionExecutionStep studioV1FlowExecutionExecutionStep) {
        this.studioV1FlowExecutionExecutionStep = studioV1FlowExecutionExecutionStep;
        return this;
    }
}