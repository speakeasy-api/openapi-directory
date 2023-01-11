package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsageChargeRequest {
    public CreateUsageChargePathParams pathParams;
    public CreateUsageChargeRequest withPathParams(CreateUsageChargePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateUsageChargeHeaders headers;
    public CreateUsageChargeRequest withHeaders(CreateUsageChargeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateUsageChargeRequestBody request;
    public CreateUsageChargeRequest withRequest(CreateUsageChargeRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateUsageChargeSecurity security;
    public CreateUsageChargeRequest withSecurity(CreateUsageChargeSecurity security) {
        this.security = security;
        return this;
    }
}