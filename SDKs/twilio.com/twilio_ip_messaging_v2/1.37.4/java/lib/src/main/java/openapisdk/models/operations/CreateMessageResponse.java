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
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMessage ipMessagingV2ServiceChannelMessage;
    public CreateMessageResponse withIpMessagingV2ServiceChannelMessage(openapisdk.models.shared.IpMessagingV2ServiceChannelMessage ipMessagingV2ServiceChannelMessage) {
        this.ipMessagingV2ServiceChannelMessage = ipMessagingV2ServiceChannelMessage;
        return this;
    }
}