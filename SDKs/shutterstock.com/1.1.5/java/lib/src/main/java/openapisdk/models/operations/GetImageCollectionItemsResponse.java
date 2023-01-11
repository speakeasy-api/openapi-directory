package openapisdk.models.operations;



public class GetImageCollectionItemsResponse {
    public Object collectionItemDataList;
    public GetImageCollectionItemsResponse withCollectionItemDataList(Object collectionItemDataList) {
        this.collectionItemDataList = collectionItemDataList;
        return this;
    }
    public String contentType;
    public GetImageCollectionItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImageCollectionItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}