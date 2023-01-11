package openapisdk.models.operations;



public class FetchTestUserResponse {
    public String contentType;
    public FetchTestUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTestUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2FlowTestUser studioV2FlowTestUser;
    public FetchTestUserResponse withStudioV2FlowTestUser(openapisdk.models.shared.StudioV2FlowTestUser studioV2FlowTestUser) {
        this.studioV2FlowTestUser = studioV2FlowTestUser;
        return this;
    }
}