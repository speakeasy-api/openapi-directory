package openapisdk.models.operations;



public class WorkflowsProjectsLocationsOperationsListRequest {
    public WorkflowsProjectsLocationsOperationsListPathParams pathParams;
    public WorkflowsProjectsLocationsOperationsListRequest withPathParams(WorkflowsProjectsLocationsOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkflowsProjectsLocationsOperationsListQueryParams queryParams;
    public WorkflowsProjectsLocationsOperationsListRequest withQueryParams(WorkflowsProjectsLocationsOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public WorkflowsProjectsLocationsOperationsListSecurity security;
    public WorkflowsProjectsLocationsOperationsListRequest withSecurity(WorkflowsProjectsLocationsOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}