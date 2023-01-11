package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest {
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams pathParams;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest withPathParams(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams queryParams;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest withQueryParams(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaDocument request;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaDocument request) {
        this.request = request;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity security;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest withSecurity(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}