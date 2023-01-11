package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutGroupsIdRequest {
    public PutGroupsIdPathParams pathParams;
    public PutGroupsIdRequest withPathParams(PutGroupsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public PutGroupsIdRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
}