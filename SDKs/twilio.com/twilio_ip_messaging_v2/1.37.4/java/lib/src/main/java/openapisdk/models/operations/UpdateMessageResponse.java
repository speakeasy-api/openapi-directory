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
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMessage ipMessagingV2ServiceChannelMessage;
    public UpdateMessageResponse withIpMessagingV2ServiceChannelMessage(openapisdk.models.shared.IpMessagingV2ServiceChannelMessage ipMessagingV2ServiceChannelMessage) {
        this.ipMessagingV2ServiceChannelMessage = ipMessagingV2ServiceChannelMessage;
        return this;
    }
}