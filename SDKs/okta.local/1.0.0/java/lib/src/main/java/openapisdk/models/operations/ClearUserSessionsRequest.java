package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearUserSessionsRequest {
    public ClearUserSessionsPathParams pathParams;
    public ClearUserSessionsRequest withPathParams(ClearUserSessionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public ClearUserSessionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}