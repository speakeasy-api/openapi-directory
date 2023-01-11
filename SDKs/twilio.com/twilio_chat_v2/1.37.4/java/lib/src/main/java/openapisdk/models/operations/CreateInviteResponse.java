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
    public openapisdk.models.shared.ChatV2ServiceChannelInvite chatV2ServiceChannelInvite;
    public CreateInviteResponse withChatV2ServiceChannelInvite(openapisdk.models.shared.ChatV2ServiceChannelInvite chatV2ServiceChannelInvite) {
        this.chatV2ServiceChannelInvite = chatV2ServiceChannelInvite;
        return this;
    }
}