package openapisdk.models.operations;



public class RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse {
    public String contentType;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse googleCloudRecommendationengineV1beta1ListCatalogItemsResponse;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse withGoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse(openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse googleCloudRecommendationengineV1beta1ListCatalogItemsResponse) {
        this.googleCloudRecommendationengineV1beta1ListCatalogItemsResponse = googleCloudRecommendationengineV1beta1ListCatalogItemsResponse;
        return this;
    }
    public Long statusCode;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}