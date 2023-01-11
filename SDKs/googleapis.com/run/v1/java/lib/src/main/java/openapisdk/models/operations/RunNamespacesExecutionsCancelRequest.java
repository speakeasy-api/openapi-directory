package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesExecutionsCancelRequest {
    public RunNamespacesExecutionsCancelPathParams pathParams;
    public RunNamespacesExecutionsCancelRequest withPathParams(RunNamespacesExecutionsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesExecutionsCancelQueryParams queryParams;
    public RunNamespacesExecutionsCancelRequest withQueryParams(RunNamespacesExecutionsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RunNamespacesExecutionsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RunNamespacesExecutionsCancelSecurity security;
    public RunNamespacesExecutionsCancelRequest withSecurity(RunNamespacesExecutionsCancelSecurity security) {
        this.security = security;
        return this;
    }
}