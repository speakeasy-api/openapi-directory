package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssignedAppLinksRequest {
    public GetAssignedAppLinksPathParams pathParams;
    public GetAssignedAppLinksRequest withPathParams(GetAssignedAppLinksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public GetAssignedAppLinksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}