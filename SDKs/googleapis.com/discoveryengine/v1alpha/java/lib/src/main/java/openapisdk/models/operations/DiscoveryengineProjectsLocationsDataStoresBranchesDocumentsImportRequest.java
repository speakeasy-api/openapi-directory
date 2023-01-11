package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest {
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams pathParams;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest withPathParams(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams queryParams;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest withQueryParams(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest request;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest withRequest(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest request) {
        this.request = request;
        return this;
    }
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity security;
    public DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest withSecurity(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity security) {
        this.security = security;
        return this;
    }
}