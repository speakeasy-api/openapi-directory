package openapisdk.models.operations;



public class GetVideoCollectionListResponse {
    public Object collectionDataList;
    public GetVideoCollectionListResponse withCollectionDataList(Object collectionDataList) {
        this.collectionDataList = collectionDataList;
        return this;
    }
    public String contentType;
    public GetVideoCollectionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoCollectionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}