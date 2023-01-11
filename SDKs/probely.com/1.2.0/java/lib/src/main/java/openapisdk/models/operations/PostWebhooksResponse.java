package openapisdk.models.operations;



public class PostWebhooksResponse {
    public String contentType;
    public PostWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public PostWebhooksResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
    public PostWebhooks400ApplicationJson postWebhooks400ApplicationJSONObject;
    public PostWebhooksResponse withPostWebhooks400ApplicationJsonObject(PostWebhooks400ApplicationJson postWebhooks400ApplicationJSONObject) {
        this.postWebhooks400ApplicationJSONObject = postWebhooks400ApplicationJSONObject;
        return this;
    }
    public PostWebhooks401ApplicationJson postWebhooks401ApplicationJSONObject;
    public PostWebhooksResponse withPostWebhooks401ApplicationJsonObject(PostWebhooks401ApplicationJson postWebhooks401ApplicationJSONObject) {
        this.postWebhooks401ApplicationJSONObject = postWebhooks401ApplicationJSONObject;
        return this;
    }
    public PostWebhooks403ApplicationJson postWebhooks403ApplicationJSONObject;
    public PostWebhooksResponse withPostWebhooks403ApplicationJsonObject(PostWebhooks403ApplicationJson postWebhooks403ApplicationJSONObject) {
        this.postWebhooks403ApplicationJSONObject = postWebhooks403ApplicationJSONObject;
        return this;
    }
    public PostWebhooks404ApplicationJson postWebhooks404ApplicationJSONObject;
    public PostWebhooksResponse withPostWebhooks404ApplicationJsonObject(PostWebhooks404ApplicationJson postWebhooks404ApplicationJSONObject) {
        this.postWebhooks404ApplicationJSONObject = postWebhooks404ApplicationJSONObject;
        return this;
    }
}