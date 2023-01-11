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
    public openapisdk.models.shared.IpMessagingV2ServiceChannel ipMessagingV2ServiceChannel;
    public UpdateChannelResponse withIpMessagingV2ServiceChannel(openapisdk.models.shared.IpMessagingV2ServiceChannel ipMessagingV2ServiceChannel) {
        this.ipMessagingV2ServiceChannel = ipMessagingV2ServiceChannel;
        return this;
    }
}