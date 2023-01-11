package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsWorkflowsPatchRequest {
    public WorkflowsProjectsLocationsWorkflowsPatchPathParams pathParams;
    public WorkflowsProjectsLocationsWorkflowsPatchRequest withPathParams(WorkflowsProjectsLocationsWorkflowsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkflowsProjectsLocationsWorkflowsPatchQueryParams queryParams;
    public WorkflowsProjectsLocationsWorkflowsPatchRequest withQueryParams(WorkflowsProjectsLocationsWorkflowsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkflowInput request;
    public WorkflowsProjectsLocationsWorkflowsPatchRequest withRequest(openapisdk.models.shared.WorkflowInput request) {
        this.request = request;
        return this;
    }
    public WorkflowsProjectsLocationsWorkflowsPatchSecurity security;
    public WorkflowsProjectsLocationsWorkflowsPatchRequest withSecurity(WorkflowsProjectsLocationsWorkflowsPatchSecurity security) {
        this.security = security;
        return this;
    }
}