package openapisdk.models.operations;



public class PatchWebhooksIdResponse {
    public String contentType;
    public PatchWebhooksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchWebhooksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Webhook webhook;
    public PatchWebhooksIdResponse withWebhook(openapisdk.models.shared.Webhook webhook) {
        this.webhook = webhook;
        return this;
    }
    public PatchWebhooksId400ApplicationJson patchWebhooksId400ApplicationJSONObject;
    public PatchWebhooksIdResponse withPatchWebhooksId400ApplicationJsonObject(PatchWebhooksId400ApplicationJson patchWebhooksId400ApplicationJSONObject) {
        this.patchWebhooksId400ApplicationJSONObject = patchWebhooksId400ApplicationJSONObject;
        return this;
    }
    public PatchWebhooksId401ApplicationJson patchWebhooksId401ApplicationJSONObject;
    public PatchWebhooksIdResponse withPatchWebhooksId401ApplicationJsonObject(PatchWebhooksId401ApplicationJson patchWebhooksId401ApplicationJSONObject) {
        this.patchWebhooksId401ApplicationJSONObject = patchWebhooksId401ApplicationJSONObject;
        return this;
    }
    public PatchWebhooksId403ApplicationJson patchWebhooksId403ApplicationJSONObject;
    public PatchWebhooksIdResponse withPatchWebhooksId403ApplicationJsonObject(PatchWebhooksId403ApplicationJson patchWebhooksId403ApplicationJSONObject) {
        this.patchWebhooksId403ApplicationJSONObject = patchWebhooksId403ApplicationJSONObject;
        return this;
    }
    public PatchWebhooksId404ApplicationJson patchWebhooksId404ApplicationJSONObject;
    public PatchWebhooksIdResponse withPatchWebhooksId404ApplicationJsonObject(PatchWebhooksId404ApplicationJson patchWebhooksId404ApplicationJSONObject) {
        this.patchWebhooksId404ApplicationJSONObject = patchWebhooksId404ApplicationJSONObject;
        return this;
    }
}