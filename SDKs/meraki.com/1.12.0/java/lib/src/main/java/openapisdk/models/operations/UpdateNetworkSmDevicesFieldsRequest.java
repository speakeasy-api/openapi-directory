package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSmDevicesFieldsRequest {
    public UpdateNetworkSmDevicesFieldsPathParams pathParams;
    public UpdateNetworkSmDevicesFieldsRequest withPathParams(UpdateNetworkSmDevicesFieldsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSmDevicesFieldsRequestBody request;
    public UpdateNetworkSmDevicesFieldsRequest withRequest(UpdateNetworkSmDevicesFieldsRequestBody request) {
        this.request = request;
        return this;
    }
}