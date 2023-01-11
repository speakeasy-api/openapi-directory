package openapisdk.models.operations;



public class GetTrackCollectionListResponse {
    public Object collectionDataList;
    public GetTrackCollectionListResponse withCollectionDataList(Object collectionDataList) {
        this.collectionDataList = collectionDataList;
        return this;
    }
    public String contentType;
    public GetTrackCollectionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackCollectionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}