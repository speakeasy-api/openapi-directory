package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsVariablesWatchRequest {
    public RuntimeconfigProjectsConfigsVariablesWatchPathParams pathParams;
    public RuntimeconfigProjectsConfigsVariablesWatchRequest withPathParams(RuntimeconfigProjectsConfigsVariablesWatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsVariablesWatchQueryParams queryParams;
    public RuntimeconfigProjectsConfigsVariablesWatchRequest withQueryParams(RuntimeconfigProjectsConfigsVariablesWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WatchVariableRequest request;
    public RuntimeconfigProjectsConfigsVariablesWatchRequest withRequest(openapisdk.models.shared.WatchVariableRequest request) {
        this.request = request;
        return this;
    }
    public RuntimeconfigProjectsConfigsVariablesWatchSecurity security;
    public RuntimeconfigProjectsConfigsVariablesWatchRequest withSecurity(RuntimeconfigProjectsConfigsVariablesWatchSecurity security) {
        this.security = security;
        return this;
    }
}