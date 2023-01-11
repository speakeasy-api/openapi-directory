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
    public openapisdk.models.shared.ChatV2ServiceChannelMember chatV2ServiceChannelMember;
    public CreateMemberResponse withChatV2ServiceChannelMember(openapisdk.models.shared.ChatV2ServiceChannelMember chatV2ServiceChannelMember) {
        this.chatV2ServiceChannelMember = chatV2ServiceChannelMember;
        return this;
    }
}