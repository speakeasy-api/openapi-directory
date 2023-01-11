package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyNetworkSmDevicesTagsRequest {
    public ModifyNetworkSmDevicesTagsPathParams pathParams;
    public ModifyNetworkSmDevicesTagsRequest withPathParams(ModifyNetworkSmDevicesTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ModifyNetworkSmDevicesTagsRequestBody request;
    public ModifyNetworkSmDevicesTagsRequest withRequest(ModifyNetworkSmDevicesTagsRequestBody request) {
        this.request = request;
        return this;
    }
}