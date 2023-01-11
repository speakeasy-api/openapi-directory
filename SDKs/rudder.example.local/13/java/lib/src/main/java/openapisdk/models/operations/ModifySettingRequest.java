package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifySettingRequest {
    public ModifySettingPathParams pathParams;
    public ModifySettingRequest withPathParams(ModifySettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ModifySettingRequestBody request;
    public ModifySettingRequest withRequest(ModifySettingRequestBody request) {
        this.request = request;
        return this;
    }
}