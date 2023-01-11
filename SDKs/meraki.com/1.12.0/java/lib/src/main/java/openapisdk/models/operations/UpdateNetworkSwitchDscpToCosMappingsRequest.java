package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchDscpToCosMappingsRequest {
    public UpdateNetworkSwitchDscpToCosMappingsPathParams pathParams;
    public UpdateNetworkSwitchDscpToCosMappingsRequest withPathParams(UpdateNetworkSwitchDscpToCosMappingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchDscpToCosMappingsRequestBody request;
    public UpdateNetworkSwitchDscpToCosMappingsRequest withRequest(UpdateNetworkSwitchDscpToCosMappingsRequestBody request) {
        this.request = request;
        return this;
    }
}