package openapisdk.models.operations;



public class UpdateChannelResponse {
    public String contentType;
    public UpdateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV1ServiceChannel ipMessagingV1ServiceChannel;
    public UpdateChannelResponse withIpMessagingV1ServiceChannel(openapisdk.models.shared.IpMessagingV1ServiceChannel ipMessagingV1ServiceChannel) {
        this.ipMessagingV1ServiceChannel = ipMessagingV1ServiceChannel;
        return this;
    }
}