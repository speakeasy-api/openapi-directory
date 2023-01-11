package openapisdk.models.operations;



public class FetchEngagementResponse {
    public String contentType;
    public FetchEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowEngagement studioV1FlowEngagement;
    public FetchEngagementResponse withStudioV1FlowEngagement(openapisdk.models.shared.StudioV1FlowEngagement studioV1FlowEngagement) {
        this.studioV1FlowEngagement = studioV1FlowEngagement;
        return this;
    }
}