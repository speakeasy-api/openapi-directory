package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSnmpRequest {
    public UpdateNetworkSnmpPathParams pathParams;
    public UpdateNetworkSnmpRequest withPathParams(UpdateNetworkSnmpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSnmpRequestBody request;
    public UpdateNetworkSnmpRequest withRequest(UpdateNetworkSnmpRequestBody request) {
        this.request = request;
        return this;
    }
}