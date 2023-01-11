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
    public openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook chatV2ServiceChannelChannelWebhook;
    public UpdateChannelWebhookResponse withChatV2ServiceChannelChannelWebhook(openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook chatV2ServiceChannelChannelWebhook) {
        this.chatV2ServiceChannelChannelWebhook = chatV2ServiceChannelChannelWebhook;
        return this;
    }
}