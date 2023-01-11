package openapisdk.models.operations;



public class UpdateChannelWebhookResponse {
    public String contentType;
    public UpdateChannelWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateChannelWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceChannelChannelWebhook ipMessagingV2ServiceChannelChannelWebhook;
    public UpdateChannelWebhookResponse withIpMessagingV2ServiceChannelChannelWebhook(openapisdk.models.shared.IpMessagingV2ServiceChannelChannelWebhook ipMessagingV2ServiceChannelChannelWebhook) {
        this.ipMessagingV2ServiceChannelChannelWebhook = ipMessagingV2ServiceChannelChannelWebhook;
        return this;
    }
}