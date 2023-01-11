package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsVariablesUpdateRequest {
    public RuntimeconfigProjectsConfigsVariablesUpdatePathParams pathParams;
    public RuntimeconfigProjectsConfigsVariablesUpdateRequest withPathParams(RuntimeconfigProjectsConfigsVariablesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsVariablesUpdateQueryParams queryParams;
    public RuntimeconfigProjectsConfigsVariablesUpdateRequest withQueryParams(RuntimeconfigProjectsConfigsVariablesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Variable request;
    public RuntimeconfigProjectsConfigsVariablesUpdateRequest withRequest(openapisdk.models.shared.Variable request) {
        this.request = request;
        return this;
    }
    public RuntimeconfigProjectsConfigsVariablesUpdateSecurity security;
    public RuntimeconfigProjectsConfigsVariablesUpdateRequest withSecurity(RuntimeconfigProjectsConfigsVariablesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}