package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaDocument googleCloudDiscoveryengineV1alphaDocument;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse withGoogleCloudDiscoveryengineV1alphaDocument(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaDocument googleCloudDiscoveryengineV1alphaDocument) {
        this.googleCloudDiscoveryengineV1alphaDocument = googleCloudDiscoveryengineV1alphaDocument;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}