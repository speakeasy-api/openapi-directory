package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaListDocumentsResponse googleCloudDiscoveryengineV1alphaListDocumentsResponse;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse withGoogleCloudDiscoveryengineV1alphaListDocumentsResponse(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaListDocumentsResponse googleCloudDiscoveryengineV1alphaListDocumentsResponse) {
        this.googleCloudDiscoveryengineV1alphaListDocumentsResponse = googleCloudDiscoveryengineV1alphaListDocumentsResponse;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}