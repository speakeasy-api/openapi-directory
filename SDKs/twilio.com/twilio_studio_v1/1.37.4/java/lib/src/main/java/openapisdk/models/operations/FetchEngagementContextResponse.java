package openapisdk.models.operations;



public class FetchEngagementContextResponse {
    public String contentType;
    public FetchEngagementContextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEngagementContextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1FlowEngagementEngagementContext studioV1FlowEngagementEngagementContext;
    public FetchEngagementContextResponse withStudioV1FlowEngagementEngagementContext(openapisdk.models.shared.StudioV1FlowEngagementEngagementContext studioV1FlowEngagementEngagementContext) {
        this.studioV1FlowEngagementEngagementContext = studioV1FlowEngagementEngagementContext;
        return this;
    }
}