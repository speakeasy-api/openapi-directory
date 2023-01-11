package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsageTriggerRequest {
    public String serverURL;
    public CreateUsageTriggerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUsageTriggerPathParams pathParams;
    public CreateUsageTriggerRequest withPathParams(CreateUsageTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUsageTriggerCreateUsageTriggerRequest request;
    public CreateUsageTriggerRequest withRequest(CreateUsageTriggerCreateUsageTriggerRequest request) {
        this.request = request;
        return this;
    }
    public CreateUsageTriggerSecurity security;
    public CreateUsageTriggerRequest withSecurity(CreateUsageTriggerSecurity security) {
        this.security = security;
        return this;
    }
}