package openapisdk.models.operations;



public class PutWebhooksIdResponse {
    public String contentType;
    public PutWebhooksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutWebhooksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public PutWebhooksIdResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
    public PutWebhooksId400ApplicationJson putWebhooksId400ApplicationJSONObject;
    public PutWebhooksIdResponse withPutWebhooksId400ApplicationJsonObject(PutWebhooksId400ApplicationJson putWebhooksId400ApplicationJSONObject) {
        this.putWebhooksId400ApplicationJSONObject = putWebhooksId400ApplicationJSONObject;
        return this;
    }
    public PutWebhooksId401ApplicationJson putWebhooksId401ApplicationJSONObject;
    public PutWebhooksIdResponse withPutWebhooksId401ApplicationJsonObject(PutWebhooksId401ApplicationJson putWebhooksId401ApplicationJSONObject) {
        this.putWebhooksId401ApplicationJSONObject = putWebhooksId401ApplicationJSONObject;
        return this;
    }
    public PutWebhooksId403ApplicationJson putWebhooksId403ApplicationJSONObject;
    public PutWebhooksIdResponse withPutWebhooksId403ApplicationJsonObject(PutWebhooksId403ApplicationJson putWebhooksId403ApplicationJSONObject) {
        this.putWebhooksId403ApplicationJSONObject = putWebhooksId403ApplicationJSONObject;
        return this;
    }
    public PutWebhooksId404ApplicationJson putWebhooksId404ApplicationJSONObject;
    public PutWebhooksIdResponse withPutWebhooksId404ApplicationJsonObject(PutWebhooksId404ApplicationJson putWebhooksId404ApplicationJSONObject) {
        this.putWebhooksId404ApplicationJSONObject = putWebhooksId404ApplicationJSONObject;
        return this;
    }
}