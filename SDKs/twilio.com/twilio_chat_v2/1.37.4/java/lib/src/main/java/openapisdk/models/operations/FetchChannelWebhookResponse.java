package openapisdk.models.operations;



public class FetchChannelWebhookResponse {
    public String contentType;
    public FetchChannelWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchChannelWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook chatV2ServiceChannelChannelWebhook;
    public FetchChannelWebhookResponse withChatV2ServiceChannelChannelWebhook(openapisdk.models.shared.ChatV2ServiceChannelChannelWebhook chatV2ServiceChannelChannelWebhook) {
        this.chatV2ServiceChannelChannelWebhook = chatV2ServiceChannelChannelWebhook;
        return this;
    }
}