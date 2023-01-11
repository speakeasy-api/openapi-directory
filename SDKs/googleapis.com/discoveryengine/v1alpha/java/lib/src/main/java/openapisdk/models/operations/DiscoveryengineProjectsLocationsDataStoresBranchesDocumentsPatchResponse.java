package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaDocument googleCloudDiscoveryengineV1alphaDocument;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse withGoogleCloudDiscoveryengineV1alphaDocument(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaDocument googleCloudDiscoveryengineV1alphaDocument) {
        this.googleCloudDiscoveryengineV1alphaDocument = googleCloudDiscoveryengineV1alphaDocument;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}