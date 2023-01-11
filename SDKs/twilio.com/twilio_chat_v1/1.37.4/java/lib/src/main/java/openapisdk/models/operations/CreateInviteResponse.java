package openapisdk.models.operations;



public class CreateInviteResponse {
    public String contentType;
    public CreateInviteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateInviteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceChannelInvite chatV1ServiceChannelInvite;
    public CreateInviteResponse withChatV1ServiceChannelInvite(openapisdk.models.shared.ChatV1ServiceChannelInvite chatV1ServiceChannelInvite) {
        this.chatV1ServiceChannelInvite = chatV1ServiceChannelInvite;
        return this;
    }
}