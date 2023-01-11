package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaRecommendResponse googleCloudDiscoveryengineV1alphaRecommendResponse;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse withGoogleCloudDiscoveryengineV1alphaRecommendResponse(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaRecommendResponse googleCloudDiscoveryengineV1alphaRecommendResponse) {
        this.googleCloudDiscoveryengineV1alphaRecommendResponse = googleCloudDiscoveryengineV1alphaRecommendResponse;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}