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
    public openapisdk.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember;
    public UpdateMemberResponse withChatV1ServiceChannelMember(openapisdk.models.shared.ChatV1ServiceChannelMember chatV1ServiceChannelMember) {
        this.chatV1ServiceChannelMember = chatV1ServiceChannelMember;
        return this;
    }
}