package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCarrierSettingsRequest {
    public UpdateCarrierSettingsPathParams pathParams;
    public UpdateCarrierSettingsRequest withPathParams(UpdateCarrierSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateCarrierSettingsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}