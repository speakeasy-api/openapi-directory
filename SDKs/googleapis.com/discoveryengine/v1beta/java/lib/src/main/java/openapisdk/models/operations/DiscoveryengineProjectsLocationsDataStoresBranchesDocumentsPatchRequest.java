package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest {
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams pathParams;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest withPathParams(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams queryParams;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest withQueryParams(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaDocument request;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaDocument request) {
        this.request = request;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity security;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest withSecurity(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}