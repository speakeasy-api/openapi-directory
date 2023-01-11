package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem googleCloudRecommendationengineV1beta1CatalogItem;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse withGoogleCloudRecommendationengineV1beta1CatalogItem(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem googleCloudRecommendationengineV1beta1CatalogItem) {
        this.googleCloudRecommendationengineV1beta1CatalogItem = googleCloudRecommendationengineV1beta1CatalogItem;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}