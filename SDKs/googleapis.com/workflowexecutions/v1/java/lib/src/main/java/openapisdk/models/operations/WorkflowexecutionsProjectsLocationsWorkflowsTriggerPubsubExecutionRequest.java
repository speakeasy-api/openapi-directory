package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest {
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams pathParams;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest withPathParams(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams queryParams;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest withQueryParams(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TriggerPubsubExecutionRequest request;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest withRequest(openapisdk.models.shared.TriggerPubsubExecutionRequest request) {
        this.request = request;
        return this;
    }
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity security;
    public WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionRequest withSecurity(WorkflowexecutionsProjectsLocationsWorkflowsTriggerPubsubExecutionSecurity security) {
        this.security = security;
        return this;
    }
}