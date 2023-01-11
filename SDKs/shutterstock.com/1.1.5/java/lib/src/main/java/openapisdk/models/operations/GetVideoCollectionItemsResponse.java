package openapisdk.models.operations;



public class GetVideoCollectionItemsResponse {
    public Object collectionItemDataList;
    public GetVideoCollectionItemsResponse withCollectionItemDataList(Object collectionItemDataList) {
        this.collectionItemDataList = collectionItemDataList;
        return this;
    }
    public String contentType;
    public GetVideoCollectionItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoCollectionItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}