package openapisdk.models.operations;



public class GetFeaturedImageCollectionResponse {
    public String contentType;
    public GetFeaturedImageCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FeaturedCollection featuredCollection;
    public GetFeaturedImageCollectionResponse withFeaturedCollection(openapisdk.models.shared.FeaturedCollection featuredCollection) {
        this.featuredCollection = featuredCollection;
        return this;
    }
    public Long statusCode;
    public GetFeaturedImageCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}