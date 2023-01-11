package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTempPasswordRequest {
    public SetTempPasswordPathParams pathParams;
    public SetTempPasswordRequest withPathParams(SetTempPasswordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SetTempPasswordQueryParams queryParams;
    public SetTempPasswordRequest withQueryParams(SetTempPasswordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] request;
    public SetTempPasswordRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}