package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem googleCloudRecommendationengineV1beta1CatalogItem;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse withGoogleCloudRecommendationengineV1beta1CatalogItem(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem googleCloudRecommendationengineV1beta1CatalogItem) {
        this.googleCloudRecommendationengineV1beta1CatalogItem = googleCloudRecommendationengineV1beta1CatalogItem;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}