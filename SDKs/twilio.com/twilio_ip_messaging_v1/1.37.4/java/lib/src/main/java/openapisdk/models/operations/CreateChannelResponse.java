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
    public openapisdk.models.shared.IpMessagingV1ServiceChannel ipMessagingV1ServiceChannel;
    public CreateChannelResponse withIpMessagingV1ServiceChannel(openapisdk.models.shared.IpMessagingV1ServiceChannel ipMessagingV1ServiceChannel) {
        this.ipMessagingV1ServiceChannel = ipMessagingV1ServiceChannel;
        return this;
    }
}