package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectCarrierRequest {
    public ConnectCarrierPathParams pathParams;
    public ConnectCarrierRequest withPathParams(ConnectCarrierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ConnectCarrierRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}