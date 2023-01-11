package openapisdk.models.operations;



public class UpdateMemberResponse {
    public String contentType;
    public UpdateMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountQueueMember apiV2010AccountQueueMember;
    public UpdateMemberResponse withApiV2010AccountQueueMember(openapisdk.models.shared.ApiV2010AccountQueueMember apiV2010AccountQueueMember) {
        this.apiV2010AccountQueueMember = apiV2010AccountQueueMember;
        return this;
    }
}