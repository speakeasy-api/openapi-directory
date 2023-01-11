package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckDirectiveRequest {
    public CheckDirectivePathParams pathParams;
    public CheckDirectiveRequest withPathParams(CheckDirectivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Directive request;
    public CheckDirectiveRequest withRequest(openapisdk.models.shared.Directive request) {
        this.request = request;
        return this;
    }
}