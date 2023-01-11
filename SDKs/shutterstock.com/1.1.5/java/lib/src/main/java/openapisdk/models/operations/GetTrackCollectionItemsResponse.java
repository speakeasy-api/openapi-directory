package openapisdk.models.operations;



public class GetTrackCollectionItemsResponse {
    public Object collectionItemDataList;
    public GetTrackCollectionItemsResponse withCollectionItemDataList(Object collectionItemDataList) {
        this.collectionItemDataList = collectionItemDataList;
        return this;
    }
    public String contentType;
    public GetTrackCollectionItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackCollectionItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}