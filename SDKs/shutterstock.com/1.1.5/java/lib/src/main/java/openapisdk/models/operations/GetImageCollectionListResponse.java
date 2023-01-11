package openapisdk.models.operations;



public class GetImageCollectionListResponse {
    public Object collectionDataList;
    public GetImageCollectionListResponse withCollectionDataList(Object collectionDataList) {
        this.collectionDataList = collectionDataList;
        return this;
    }
    public String contentType;
    public GetImageCollectionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImageCollectionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}