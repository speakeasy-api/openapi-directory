package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaRecommendResponse googleCloudDiscoveryengineV1betaRecommendResponse;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse withGoogleCloudDiscoveryengineV1betaRecommendResponse(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaRecommendResponse googleCloudDiscoveryengineV1betaRecommendResponse) {
        this.googleCloudDiscoveryengineV1betaRecommendResponse = googleCloudDiscoveryengineV1betaRecommendResponse;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}