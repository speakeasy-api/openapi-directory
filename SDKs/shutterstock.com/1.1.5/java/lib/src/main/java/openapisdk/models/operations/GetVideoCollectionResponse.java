package openapisdk.models.operations;



public class GetVideoCollectionResponse {
    public openapisdk.models.shared.Collection collection;
    public GetVideoCollectionResponse withCollection(openapisdk.models.shared.Collection collection) {
        this.collection = collection;
        return this;
    }
    public String contentType;
    public GetVideoCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}