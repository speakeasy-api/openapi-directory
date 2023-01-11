package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsCreateRequest {
    public CloudfunctionsProjectsLocationsFunctionsCreatePathParams pathParams;
    public CloudfunctionsProjectsLocationsFunctionsCreateRequest withPathParams(CloudfunctionsProjectsLocationsFunctionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsCreateQueryParams queryParams;
    public CloudfunctionsProjectsLocationsFunctionsCreateRequest withQueryParams(CloudfunctionsProjectsLocationsFunctionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FunctionInput request;
    public CloudfunctionsProjectsLocationsFunctionsCreateRequest withRequest(openapisdk.models.shared.FunctionInput request) {
        this.request = request;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsCreateSecurity security;
    public CloudfunctionsProjectsLocationsFunctionsCreateRequest withSecurity(CloudfunctionsProjectsLocationsFunctionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}