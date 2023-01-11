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
    public openapisdk.models.shared.ChatV2ServiceChannelMember chatV2ServiceChannelMember;
    public FetchMemberResponse withChatV2ServiceChannelMember(openapisdk.models.shared.ChatV2ServiceChannelMember chatV2ServiceChannelMember) {
        this.chatV2ServiceChannelMember = chatV2ServiceChannelMember;
        return this;
    }
}