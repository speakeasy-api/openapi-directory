package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUsageTriggerRequest {
    public String serverURL;
    public UpdateUsageTriggerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUsageTriggerPathParams pathParams;
    public UpdateUsageTriggerRequest withPathParams(UpdateUsageTriggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUsageTriggerUpdateUsageTriggerRequest request;
    public UpdateUsageTriggerRequest withRequest(UpdateUsageTriggerUpdateUsageTriggerRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUsageTriggerSecurity security;
    public UpdateUsageTriggerRequest withSecurity(UpdateUsageTriggerSecurity security) {
        this.security = security;
        return this;
    }
}