package openapisdk.models.operations;



public class GetEventsV3EventsGetPageResponse {
    public byte[] body;
    public GetEventsV3EventsGetPageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CollectionResponseExternalUnifiedEvent collectionResponseExternalUnifiedEvent;
    public GetEventsV3EventsGetPageResponse withCollectionResponseExternalUnifiedEvent(openapisdk.models.shared.CollectionResponseExternalUnifiedEvent collectionResponseExternalUnifiedEvent) {
        this.collectionResponseExternalUnifiedEvent = collectionResponseExternalUnifiedEvent;
        return this;
    }
    public String contentType;
    public GetEventsV3EventsGetPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEventsV3EventsGetPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}