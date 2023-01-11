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
    public openapisdk.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember;
    public FetchMemberResponse withChatV1ServiceChannelMember(openapisdk.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember) {
        this.chatV1ServiceChannelMember = chatV1ServiceChannelMember;
        return this;
    }
}