package openapisdk.models.operations;



public class UpdateMessageResponse {
    public String contentType;
    public UpdateMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV1ServiceChannelMessage ipMessagingV1ServiceChannelMessage;
    public UpdateMessageResponse withIpMessagingV1ServiceChannelMessage(openapisdk.models.shared.IpMessagingV1ServiceChannelMessage ipMessagingV1ServiceChannelMessage) {
        this.ipMessagingV1ServiceChannelMessage = ipMessagingV1ServiceChannelMessage;
        return this;
    }
}