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
    public openapisdk.models.shared.IpMessagingV1ServiceChannelInvite ipMessagingV1ServiceChannelInvite;
    public FetchInviteResponse withIpMessagingV1ServiceChannelInvite(openapisdk.models.shared.IpMessagingV1ServiceChannelInvite ipMessagingV1ServiceChannelInvite) {
        this.ipMessagingV1ServiceChannelInvite = ipMessagingV1ServiceChannelInvite;
        return this;
    }
}