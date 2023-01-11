package openapisdk.models.operations;



public class GetImageRecommendationsRequest {
    public GetImageRecommendationsQueryParams queryParams;
    public GetImageRecommendationsRequest withQueryParams(GetImageRecommendationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImageRecommendationsSecurity security;
    public GetImageRecommendationsRequest withSecurity(GetImageRecommendationsSecurity security) {
        this.security = security;
        return this;
    }
}