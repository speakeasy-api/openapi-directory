package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsVariablesCreateRequest {
    public RuntimeconfigProjectsConfigsVariablesCreatePathParams pathParams;
    public RuntimeconfigProjectsConfigsVariablesCreateRequest withPathParams(RuntimeconfigProjectsConfigsVariablesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsVariablesCreateQueryParams queryParams;
    public RuntimeconfigProjectsConfigsVariablesCreateRequest withQueryParams(RuntimeconfigProjectsConfigsVariablesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Variable request;
    public RuntimeconfigProjectsConfigsVariablesCreateRequest withRequest(openapisdk.models.shared.Variable request) {
        this.request = request;
        return this;
    }
    public RuntimeconfigProjectsConfigsVariablesCreateSecurity security;
    public RuntimeconfigProjectsConfigsVariablesCreateRequest withSecurity(RuntimeconfigProjectsConfigsVariablesCreateSecurity security) {
        this.security = security;
        return this;
    }
}