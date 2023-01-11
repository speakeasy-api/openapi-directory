package openapisdk.models.operations;



public class CreateTrackCollectionResponse {
    public openapisdk.models.shared.CollectionCreateResponse collectionCreateResponse;
    public CreateTrackCollectionResponse withCollectionCreateResponse(openapisdk.models.shared.CollectionCreateResponse collectionCreateResponse) {
        this.collectionCreateResponse = collectionCreateResponse;
        return this;
    }
    public String contentType;
    public CreateTrackCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTrackCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}