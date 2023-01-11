package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesRollbackRequest {
    public NotebooksProjectsLocationsInstancesRollbackPathParams pathParams;
    public NotebooksProjectsLocationsInstancesRollbackRequest withPathParams(NotebooksProjectsLocationsInstancesRollbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesRollbackQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesRollbackRequest withQueryParams(NotebooksProjectsLocationsInstancesRollbackQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RollbackInstanceRequest request;
    public NotebooksProjectsLocationsInstancesRollbackRequest withRequest(openapisdk.models.shared.RollbackInstanceRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesRollbackSecurity security;
    public NotebooksProjectsLocationsInstancesRollbackRequest withSecurity(NotebooksProjectsLocationsInstancesRollbackSecurity security) {
        this.security = security;
        return this;
    }
}