package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaDocument googleCloudDiscoveryengineV1betaDocument;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse withGoogleCloudDiscoveryengineV1betaDocument(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaDocument googleCloudDiscoveryengineV1betaDocument) {
        this.googleCloudDiscoveryengineV1betaDocument = googleCloudDiscoveryengineV1betaDocument;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}