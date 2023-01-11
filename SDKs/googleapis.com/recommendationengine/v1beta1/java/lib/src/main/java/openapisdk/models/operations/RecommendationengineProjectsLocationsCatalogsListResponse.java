package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsListResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse googleCloudRecommendationengineV1beta1ListCatalogsResponse;
    public RecommendationengineProjectsLocationsCatalogsListResponse withGoogleCloudRecommendationengineV1beta1ListCatalogsResponse(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse googleCloudRecommendationengineV1beta1ListCatalogsResponse) {
        this.googleCloudRecommendationengineV1beta1ListCatalogsResponse = googleCloudRecommendationengineV1beta1ListCatalogsResponse;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}