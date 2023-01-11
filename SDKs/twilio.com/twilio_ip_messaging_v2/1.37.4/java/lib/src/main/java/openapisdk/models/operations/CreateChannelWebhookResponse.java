package openapisdk.models.operations;



public class CreateChannelWebhookResponse {
    public String contentType;
    public CreateChannelWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateChannelWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceChannelChannelWebhook ipMessagingV2ServiceChannelChannelWebhook;
    public CreateChannelWebhookResponse withIpMessagingV2ServiceChannelChannelWebhook(openapisdk.models.shared.IpMessagingV2ServiceChannelChannelWebhook ipMessagingV2ServiceChannelChannelWebhook) {
        this.ipMessagingV2ServiceChannelChannelWebhook = ipMessagingV2ServiceChannelChannelWebhook;
        return this;
    }
}