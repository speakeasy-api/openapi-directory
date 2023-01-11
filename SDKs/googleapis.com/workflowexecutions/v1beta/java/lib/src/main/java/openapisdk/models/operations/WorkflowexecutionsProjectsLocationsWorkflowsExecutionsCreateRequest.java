package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest {
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreatePathParams pathParams;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest withPathParams(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateQueryParams queryParams;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest withQueryParams(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecutionInput request;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest withRequest(openapisdk.models.shared.ExecutionInput request) {
        this.request = request;
        return this;
    }
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity security;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest withSecurity(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}