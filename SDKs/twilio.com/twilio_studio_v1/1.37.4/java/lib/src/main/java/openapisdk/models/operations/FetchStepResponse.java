package openapisdk.models.operations;



public class FetchStepResponse {
    public String contentType;
    public FetchStepResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchStepResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowEngagementStep studioV1FlowEngagementStep;
    public FetchStepResponse withStudioV1FlowEngagementStep(openapisdk.models.shared.StudioV1FlowEngagementStep studioV1FlowEngagementStep) {
        this.studioV1FlowEngagementStep = studioV1FlowEngagementStep;
        return this;
    }
}