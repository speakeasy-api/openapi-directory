package openapisdk.models.operations;



public class GetTargetsTargetIdWebhooksIdResponse {
    public String contentType;
    public GetTargetsTargetIdWebhooksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTargetsTargetIdWebhooksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public GetTargetsTargetIdWebhooksIdResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
    public GetTargetsTargetIdWebhooksId401ApplicationJson getTargetsTargetIdWebhooksId401ApplicationJSONObject;
    public GetTargetsTargetIdWebhooksIdResponse withGetTargetsTargetIdWebhooksId401ApplicationJsonObject(GetTargetsTargetIdWebhooksId401ApplicationJson getTargetsTargetIdWebhooksId401ApplicationJSONObject) {
        this.getTargetsTargetIdWebhooksId401ApplicationJSONObject = getTargetsTargetIdWebhooksId401ApplicationJSONObject;
        return this;
    }
    public GetTargetsTargetIdWebhooksId403ApplicationJson getTargetsTargetIdWebhooksId403ApplicationJSONObject;
    public GetTargetsTargetIdWebhooksIdResponse withGetTargetsTargetIdWebhooksId403ApplicationJsonObject(GetTargetsTargetIdWebhooksId403ApplicationJson getTargetsTargetIdWebhooksId403ApplicationJSONObject) {
        this.getTargetsTargetIdWebhooksId403ApplicationJSONObject = getTargetsTargetIdWebhooksId403ApplicationJSONObject;
        return this;
    }
}