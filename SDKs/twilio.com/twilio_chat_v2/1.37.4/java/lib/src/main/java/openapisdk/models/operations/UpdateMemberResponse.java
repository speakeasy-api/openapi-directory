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
    public openapisdk.models.shared.ChatV2ServiceChannelMember chatV2ServiceChannelMember;
    public UpdateMemberResponse withChatV2ServiceChannelMember(openapisdk.models.shared.ChatV2ServiceChannelMember chatV2ServiceChannelMember) {
        this.chatV2ServiceChannelMember = chatV2ServiceChannelMember;
        return this;
    }
}