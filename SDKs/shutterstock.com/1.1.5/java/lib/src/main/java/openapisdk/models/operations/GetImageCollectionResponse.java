package openapisdk.models.operations;



public class GetImageCollectionResponse {
    public openapisdk.models.shared.Collection collection;
    public GetImageCollectionResponse withCollection(openapisdk.models.shared.Collection collection) {
        this.collection = collection;
        return this;
    }
    public String contentType;
    public GetImageCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImageCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}