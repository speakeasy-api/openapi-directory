package openapisdk.models.operations;



public class FetchStepContextResponse {
    public String contentType;
    public FetchStepContextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchStepContextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowEngagementStepStepContext studioV1FlowEngagementStepStepContext;
    public FetchStepContextResponse withStudioV1FlowEngagementStepStepContext(openapisdk.models.shared.StudioV1FlowEngagementStepStepContext studioV1FlowEngagementStepStepContext) {
        this.studioV1FlowEngagementStepStepContext = studioV1FlowEngagementStepStepContext;
        return this;
    }
}