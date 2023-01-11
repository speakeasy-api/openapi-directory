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
    public openapisdk.models.shared.IpMessagingV2ServiceChannelInvite ipMessagingV2ServiceChannelInvite;
    public FetchInviteResponse withIpMessagingV2ServiceChannelInvite(openapisdk.models.shared.IpMessagingV2ServiceChannelInvite ipMessagingV2ServiceChannelInvite) {
        this.ipMessagingV2ServiceChannelInvite = ipMessagingV2ServiceChannelInvite;
        return this;
    }
}