package openapisdk.models.operations;



public class PublishersListResponse {
    public String contentType;
    public PublishersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PublishersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PublishersList200ApplicationJson publishersList200ApplicationJSONObject;
    public PublishersListResponse withPublishersList200ApplicationJsonObject(PublishersList200ApplicationJson publishersList200ApplicationJSONObject) {
        this.publishersList200ApplicationJSONObject = publishersList200ApplicationJSONObject;
        return this;
    }
}