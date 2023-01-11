package openapisdk.models.operations;



public class CreateVideoCollectionResponse {
    public openapisdk.models.shared.CollectionCreateResponse collectionCreateResponse;
    public CreateVideoCollectionResponse withCollectionCreateResponse(openapisdk.models.shared.CollectionCreateResponse collectionCreateResponse) {
        this.collectionCreateResponse = collectionCreateResponse;
        return this;
    }
    public String contentType;
    public CreateVideoCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVideoCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}