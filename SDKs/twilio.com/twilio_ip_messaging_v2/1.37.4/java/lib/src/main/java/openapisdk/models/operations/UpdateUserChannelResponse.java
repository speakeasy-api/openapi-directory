package openapisdk.models.operations;



public class UpdateUserChannelResponse {
    public String contentType;
    public UpdateUserChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceUserUserChannel ipMessagingV2ServiceUserUserChannel;
    public UpdateUserChannelResponse withIpMessagingV2ServiceUserUserChannel(openapisdk.models.shared.IpMessagingV2ServiceUserUserChannel ipMessagingV2ServiceUserUserChannel) {
        this.ipMessagingV2ServiceUserUserChannel = ipMessagingV2ServiceUserUserChannel;
        return this;
    }
}