package openapisdk.models.operations;



public class PublishersReadResponse {
    public String contentType;
    public PublishersReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublisherSingle publisherSingle;
    public PublishersReadResponse withPublisherSingle(openapisdk.models.shared.PublisherSingle publisherSingle) {
        this.publisherSingle = publisherSingle;
        return this;
    }
    public Long statusCode;
    public PublishersReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}