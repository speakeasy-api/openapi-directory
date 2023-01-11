package openapisdk.models.operations;



public class FetchMessageResponse {
    public String contentType;
    public FetchMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMessage ipMessagingV2ServiceChannelMessage;
    public FetchMessageResponse withIpMessagingV2ServiceChannelMessage(openapisdk.models.shared.IpMessagingV2ServiceChannelMessage ipMessagingV2ServiceChannelMessage) {
        this.ipMessagingV2ServiceChannelMessage = ipMessagingV2ServiceChannelMessage;
        return this;
    }
}