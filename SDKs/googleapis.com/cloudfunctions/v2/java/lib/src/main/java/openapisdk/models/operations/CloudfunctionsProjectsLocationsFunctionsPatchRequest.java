package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsPatchRequest {
    public CloudfunctionsProjectsLocationsFunctionsPatchPathParams pathParams;
    public CloudfunctionsProjectsLocationsFunctionsPatchRequest withPathParams(CloudfunctionsProjectsLocationsFunctionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsPatchQueryParams queryParams;
    public CloudfunctionsProjectsLocationsFunctionsPatchRequest withQueryParams(CloudfunctionsProjectsLocationsFunctionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FunctionInput request;
    public CloudfunctionsProjectsLocationsFunctionsPatchRequest withRequest(openapisdk.models.shared.FunctionInput request) {
        this.request = request;
        return this;
    }
    public CloudfunctionsProjectsLocationsFunctionsPatchSecurity security;
    public CloudfunctionsProjectsLocationsFunctionsPatchRequest withSecurity(CloudfunctionsProjectsLocationsFunctionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}