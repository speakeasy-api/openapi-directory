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
    public openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook chatV2ServiceChannelChannelWebhook;
    public CreateChannelWebhookResponse withChatV2ServiceChannelChannelWebhook(openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook chatV2ServiceChannelChannelWebhook) {
        this.chatV2ServiceChannelChannelWebhook = chatV2ServiceChannelChannelWebhook;
        return this;
    }
}