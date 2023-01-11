package openapisdk.models.operations;



public class GetFeaturedImageCollectionListResponse {
    public String contentType;
    public GetFeaturedImageCollectionListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object featuredCollectionDataList;
    public GetFeaturedImageCollectionListResponse withFeaturedCollectionDataList(Object featuredCollectionDataList) {
        this.featuredCollectionDataList = featuredCollectionDataList;
        return this;
    }
    public Long statusCode;
    public GetFeaturedImageCollectionListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}