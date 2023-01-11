package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaDocument googleCloudDiscoveryengineV1betaDocument;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse withGoogleCloudDiscoveryengineV1betaDocument(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaDocument googleCloudDiscoveryengineV1betaDocument) {
        this.googleCloudDiscoveryengineV1betaDocument = googleCloudDiscoveryengineV1betaDocument;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}