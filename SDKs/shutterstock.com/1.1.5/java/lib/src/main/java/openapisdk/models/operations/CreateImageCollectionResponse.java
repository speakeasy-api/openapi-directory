package openapisdk.models.operations;



public class CreateImageCollectionResponse {
    public openapisdk.models.shared.CollectionCreateResponse collectionCreateResponse;
    public CreateImageCollectionResponse withCollectionCreateResponse(openapisdk.models.shared.CollectionCreateResponse collectionCreateResponse) {
        this.collectionCreateResponse = collectionCreateResponse;
        return this;
    }
    public String contentType;
    public CreateImageCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateImageCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}