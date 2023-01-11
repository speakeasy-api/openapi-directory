package openapisdk.models.operations;



public class GetWebhooksIdResponse {
    public String contentType;
    public GetWebhooksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWebhooksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public GetWebhooksIdResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
    public GetWebhooksId401ApplicationJson getWebhooksId401ApplicationJSONObject;
    public GetWebhooksIdResponse withGetWebhooksId401ApplicationJsonObject(GetWebhooksId401ApplicationJson getWebhooksId401ApplicationJSONObject) {
        this.getWebhooksId401ApplicationJSONObject = getWebhooksId401ApplicationJSONObject;
        return this;
    }
    public GetWebhooksId403ApplicationJson getWebhooksId403ApplicationJSONObject;
    public GetWebhooksIdResponse withGetWebhooksId403ApplicationJsonObject(GetWebhooksId403ApplicationJson getWebhooksId403ApplicationJSONObject) {
        this.getWebhooksId403ApplicationJSONObject = getWebhooksId403ApplicationJSONObject;
        return this;
    }
}