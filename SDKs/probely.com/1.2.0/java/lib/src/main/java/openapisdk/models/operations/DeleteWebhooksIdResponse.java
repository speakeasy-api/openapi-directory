package openapisdk.models.operations;



public class DeleteWebhooksIdResponse {
    public String contentType;
    public DeleteWebhooksIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteWebhooksIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteWebhooksId401ApplicationJson deleteWebhooksId401ApplicationJSONObject;
    public DeleteWebhooksIdResponse withDeleteWebhooksId401ApplicationJsonObject(DeleteWebhooksId401ApplicationJson deleteWebhooksId401ApplicationJSONObject) {
        this.deleteWebhooksId401ApplicationJSONObject = deleteWebhooksId401ApplicationJSONObject;
        return this;
    }
    public DeleteWebhooksId403ApplicationJson deleteWebhooksId403ApplicationJSONObject;
    public DeleteWebhooksIdResponse withDeleteWebhooksId403ApplicationJsonObject(DeleteWebhooksId403ApplicationJson deleteWebhooksId403ApplicationJSONObject) {
        this.deleteWebhooksId403ApplicationJSONObject = deleteWebhooksId403ApplicationJSONObject;
        return this;
    }
    public DeleteWebhooksId404ApplicationJson deleteWebhooksId404ApplicationJSONObject;
    public DeleteWebhooksIdResponse withDeleteWebhooksId404ApplicationJsonObject(DeleteWebhooksId404ApplicationJson deleteWebhooksId404ApplicationJSONObject) {
        this.deleteWebhooksId404ApplicationJSONObject = deleteWebhooksId404ApplicationJSONObject;
        return this;
    }
}