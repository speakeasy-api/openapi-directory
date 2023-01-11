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
    public openapisdk.models.shared.IpMessagingV1ServiceChannelInvite ipMessagingV1ServiceChannelInvite;
    public CreateInviteResponse withIpMessagingV1ServiceChannelInvite(openapisdk.models.shared.IpMessagingV1ServiceChannelInvite ipMessagingV1ServiceChannelInvite) {
        this.ipMessagingV1ServiceChannelInvite = ipMessagingV1ServiceChannelInvite;
        return this;
    }
}