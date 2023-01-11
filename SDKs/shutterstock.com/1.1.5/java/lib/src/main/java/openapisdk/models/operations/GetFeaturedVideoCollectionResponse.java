package openapisdk.models.operations;



public class GetFeaturedVideoCollectionResponse {
    public String contentType;
    public GetFeaturedVideoCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FeaturedCollection featuredCollection;
    public GetFeaturedVideoCollectionResponse withFeaturedCollection(openapisdk.models.shared.FeaturedCollection featuredCollection) {
        this.featuredCollection = featuredCollection;
        return this;
    }
    public Long statusCode;
    public GetFeaturedVideoCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}