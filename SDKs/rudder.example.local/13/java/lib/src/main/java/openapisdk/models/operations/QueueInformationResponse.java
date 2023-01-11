package openapisdk.models.operations;



public class QueueInformationResponse {
    public String contentType;
    public QueueInformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public QueueInformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public QueueInformation200ApplicationJson queueInformation200ApplicationJSONObject;
    public QueueInformationResponse withQueueInformation200ApplicationJsonObject(QueueInformation200ApplicationJson queueInformation200ApplicationJSONObject) {
        this.queueInformation200ApplicationJSONObject = queueInformation200ApplicationJSONObject;
        return this;
    }
}