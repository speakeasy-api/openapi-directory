package openapisdk.models.operations;



public class CreateChannelResponse {
    public String contentType;
    public CreateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceChannel ipMessagingV2ServiceChannel;
    public CreateChannelResponse withIpMessagingV2ServiceChannel(openapisdk.models.shared.IpMessagingV2ServiceChannel ipMessagingV2ServiceChannel) {
        this.ipMessagingV2ServiceChannel = ipMessagingV2ServiceChannel;
        return this;
    }
}