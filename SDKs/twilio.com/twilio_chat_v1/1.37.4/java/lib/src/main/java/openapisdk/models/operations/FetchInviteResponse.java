package openapisdk.models.operations;



public class FetchInviteResponse {
    public String contentType;
    public FetchInviteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchInviteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceChannelInvite chatV1ServiceChannelInvite;
    public FetchInviteResponse withChatV1ServiceChannelInvite(openapisdk.models.shared.ChatV1ServiceChannelInvite chatV1ServiceChannelInvite) {
        this.chatV1ServiceChannelInvite = chatV1ServiceChannelInvite;
        return this;
    }
}