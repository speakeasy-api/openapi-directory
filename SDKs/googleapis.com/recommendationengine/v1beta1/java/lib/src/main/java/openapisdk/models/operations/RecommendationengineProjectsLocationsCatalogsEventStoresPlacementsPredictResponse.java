package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictResponse googleCloudRecommendationengineV1beta1PredictResponse;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse withGoogleCloudRecommendationengineV1beta1PredictResponse(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictResponse googleCloudRecommendationengineV1beta1PredictResponse) {
        this.googleCloudRecommendationengineV1beta1PredictResponse = googleCloudRecommendationengineV1beta1PredictResponse;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}