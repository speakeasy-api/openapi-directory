package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowsProjectsLocationsWorkflowsCreateRequest {
    public WorkflowsProjectsLocationsWorkflowsCreatePathParams pathParams;
    public WorkflowsProjectsLocationsWorkflowsCreateRequest withPathParams(WorkflowsProjectsLocationsWorkflowsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkflowsProjectsLocationsWorkflowsCreateQueryParams queryParams;
    public WorkflowsProjectsLocationsWorkflowsCreateRequest withQueryParams(WorkflowsProjectsLocationsWorkflowsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkflowInput request;
    public WorkflowsProjectsLocationsWorkflowsCreateRequest withRequest(openapisdk.models.shared.WorkflowInput request) {
        this.request = request;
        return this;
    }
    public WorkflowsProjectsLocationsWorkflowsCreateSecurity security;
    public WorkflowsProjectsLocationsWorkflowsCreateRequest withSecurity(WorkflowsProjectsLocationsWorkflowsCreateSecurity security) {
        this.security = security;
        return this;
    }
}