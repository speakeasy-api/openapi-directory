package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest {
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams pathParams;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest withPathParams(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams queryParams;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest withQueryParams(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity security;
    public WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest withSecurity(WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity security) {
        this.security = security;
        return this;
    }
}