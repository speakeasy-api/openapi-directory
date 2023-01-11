package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDirectiveRequest {
    public UpdateDirectivePathParams pathParams;
    public UpdateDirectiveRequest withPathParams(UpdateDirectivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Directive request;
    public UpdateDirectiveRequest withRequest(openapisdk.models.shared.Directive request) {
        this.request = request;
        return this;
    }
}