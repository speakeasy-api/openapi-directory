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
    public openapisdk.models.shared.IpMessagingV2ServiceChannel ipMessagingV2ServiceChannel;
    public FetchChannelResponse withIpMessagingV2ServiceChannel(openapisdk.models.shared.IpMessagingV2ServiceChannel ipMessagingV2ServiceChannel) {
        this.ipMessagingV2ServiceChannel = ipMessagingV2ServiceChannel;
        return this;
    }
}