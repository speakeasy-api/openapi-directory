package openapisdk.models.operations;



public class UpdateTestUserResponse {
    public String contentType;
    public UpdateTestUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTestUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2FlowTestUser studioV2FlowTestUser;
    public UpdateTestUserResponse withStudioV2FlowTestUser(openapisdk.models.shared.StudioV2FlowTestUser studioV2FlowTestUser) {
        this.studioV2FlowTestUser = studioV2FlowTestUser;
        return this;
    }
}