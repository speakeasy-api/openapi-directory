package openapisdk.models.operations;



public class FetchMemberResponse {
    public String contentType;
    public FetchMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountQueueMember apiV2010AccountQueueMember;
    public FetchMemberResponse withApiV2010AccountQueueMember(openapisdk.models.shared.ApiV2010AccountQueueMember apiV2010AccountQueueMember) {
        this.apiV2010AccountQueueMember = apiV2010AccountQueueMember;
        return this;
    }
}