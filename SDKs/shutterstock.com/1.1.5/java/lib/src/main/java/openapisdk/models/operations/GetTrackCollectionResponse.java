package openapisdk.models.operations;



public class GetTrackCollectionResponse {
    public openapisdk.models.shared.Collection collection;
    public GetTrackCollectionResponse withCollection(openapisdk.models.shared.Collection collection) {
        this.collection = collection;
        return this;
    }
    public String contentType;
    public GetTrackCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}