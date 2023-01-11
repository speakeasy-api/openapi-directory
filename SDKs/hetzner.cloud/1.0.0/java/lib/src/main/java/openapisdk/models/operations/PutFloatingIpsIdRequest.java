package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFloatingIpsIdRequest {
    public PutFloatingIpsIdPathParams pathParams;
    public PutFloatingIpsIdRequest withPathParams(PutFloatingIpsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutFloatingIpsIdUpdateFloatingIpRequest request;
    public PutFloatingIpsIdRequest withRequest(PutFloatingIpsIdUpdateFloatingIpRequest request) {
        this.request = request;
        return this;
    }
}