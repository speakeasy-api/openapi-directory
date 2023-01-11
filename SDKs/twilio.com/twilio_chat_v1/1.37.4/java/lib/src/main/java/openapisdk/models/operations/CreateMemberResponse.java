package openapisdk.models.operations;



public class CreateMemberResponse {
    public String contentType;
    public CreateMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember;
    public CreateMemberResponse withChatV1ServiceChannelMember(openapisdk.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember) {
        this.chatV1ServiceChannelMember = chatV1ServiceChannelMember;
        return this;
    }
}