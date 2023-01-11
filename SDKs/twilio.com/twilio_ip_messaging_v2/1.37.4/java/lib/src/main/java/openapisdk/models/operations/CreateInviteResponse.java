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
    public openapisdk.models.shared.IpMessagingV2ServiceChannelInvite ipMessagingV2ServiceChannelInvite;
    public CreateInviteResponse withIpMessagingV2ServiceChannelInvite(openapisdk.models.shared.IpMessagingV2ServiceChannelInvite ipMessagingV2ServiceChannelInvite) {
        this.ipMessagingV2ServiceChannelInvite = ipMessagingV2ServiceChannelInvite;
        return this;
    }
}