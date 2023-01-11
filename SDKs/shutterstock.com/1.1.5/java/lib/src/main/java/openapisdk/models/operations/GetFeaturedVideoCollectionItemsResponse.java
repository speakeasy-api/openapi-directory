package openapisdk.models.operations;



public class GetFeaturedVideoCollectionItemsResponse {
    public String contentType;
    public GetFeaturedVideoCollectionItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFeaturedVideoCollectionItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object videoCollectionItemDataList;
    public GetFeaturedVideoCollectionItemsResponse withVideoCollectionItemDataList(Object videoCollectionItemDataList) {
        this.videoCollectionItemDataList = videoCollectionItemDataList;
        return this;
    }
}