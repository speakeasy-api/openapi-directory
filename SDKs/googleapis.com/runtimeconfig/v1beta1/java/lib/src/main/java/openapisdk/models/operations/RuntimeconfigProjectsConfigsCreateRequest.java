package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuntimeconfigProjectsConfigsCreateRequest {
    public RuntimeconfigProjectsConfigsCreatePathParams pathParams;
    public RuntimeconfigProjectsConfigsCreateRequest withPathParams(RuntimeconfigProjectsConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RuntimeconfigProjectsConfigsCreateQueryParams queryParams;
    public RuntimeconfigProjectsConfigsCreateRequest withQueryParams(RuntimeconfigProjectsConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RuntimeConfig request;
    public RuntimeconfigProjectsConfigsCreateRequest withRequest(openapisdk.models.shared.RuntimeConfig request) {
        this.request = request;
        return this;
    }
    public RuntimeconfigProjectsConfigsCreateSecurity security;
    public RuntimeconfigProjectsConfigsCreateRequest withSecurity(RuntimeconfigProjectsConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}