package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptChangeRequestRequest {
    public AcceptChangeRequestPathParams pathParams;
    public AcceptChangeRequestRequest withPathParams(AcceptChangeRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AcceptChangeRequestRequestBody request;
    public AcceptChangeRequestRequest withRequest(AcceptChangeRequestRequestBody request) {
        this.request = request;
        return this;
    }
}