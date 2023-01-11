package openapisdk.models.operations;



public class CreateMessageResponse {
    public String contentType;
    public CreateMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV1ServiceChannelMessage ipMessagingV1ServiceChannelMessage;
    public CreateMessageResponse withIpMessagingV1ServiceChannelMessage(openapisdk.models.shared.IpMessagingV1ServiceChannelMessage ipMessagingV1ServiceChannelMessage) {
        this.ipMessagingV1ServiceChannelMessage = ipMessagingV1ServiceChannelMessage;
        return this;
    }
}