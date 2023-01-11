package openapisdk.models.operations;



public class GetFeaturedVideoCollectionListResponse {
    public String contentType;
    public GetFeaturedVideoCollectionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object featuredCollectionDataList;
    public GetFeaturedVideoCollectionListResponse withFeaturedCollectionDataList(Object featuredCollectionDataList) {
        this.featuredCollectionDataList = featuredCollectionDataList;
        return this;
    }
    public Long statusCode;
    public GetFeaturedVideoCollectionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}