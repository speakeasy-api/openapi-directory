package openapisdk.models.operations;



public class FetchUserChannelResponse {
    public String contentType;
    public FetchUserChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceUserUserChannel ipMessagingV2ServiceUserUserChannel;
    public FetchUserChannelResponse withIpMessagingV2ServiceUserUserChannel(openapisdk.models.shared.IpMessagingV2ServiceUserUserChannel ipMessagingV2ServiceUserUserChannel) {
        this.ipMessagingV2ServiceUserUserChannel = ipMessagingV2ServiceUserUserChannel;
        return this;
    }
}