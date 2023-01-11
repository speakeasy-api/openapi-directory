package openapisdk.models.operations;



public class FetchChannelResponse {
    public String contentType;
    public FetchChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV1ServiceChannel ipMessagingV1ServiceChannel;
    public FetchChannelResponse withIpMessagingV1ServiceChannel(openapisdk.models.shared.IpMessagingV1ServiceChannel ipMessagingV1ServiceChannel) {
        this.ipMessagingV1ServiceChannel = ipMessagingV1ServiceChannel;
        return this;
    }
}