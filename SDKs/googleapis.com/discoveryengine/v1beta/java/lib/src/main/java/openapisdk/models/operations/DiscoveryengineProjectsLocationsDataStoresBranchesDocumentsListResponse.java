package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaListDocumentsResponse googleCloudDiscoveryengineV1betaListDocumentsResponse;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse withGoogleCloudDiscoveryengineV1betaListDocumentsResponse(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaListDocumentsResponse googleCloudDiscoveryengineV1betaListDocumentsResponse) {
        this.googleCloudDiscoveryengineV1betaListDocumentsResponse = googleCloudDiscoveryengineV1betaListDocumentsResponse;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}