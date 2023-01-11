package openapisdk.models.operations;



public class CreateEngagementResponse {
    public String contentType;
    public CreateEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowEngagement studioV1FlowEngagement;
    public CreateEngagementResponse withStudioV1FlowEngagement(openapisdk.models.shared.StudioV1FlowEngagement studioV1FlowEngagement) {
        this.studioV1FlowEngagement = studioV1FlowEngagement;
        return this;
    }
}