package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UseAsDraftRequest {
    public UseAsDraftPathParams pathParams;
    public UseAsDraftRequest withPathParams(UseAsDraftPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UseAsDraftPayload request;
    public UseAsDraftRequest withRequest(openapisdk.models.shared.UseAsDraftPayload request) {
        this.request = request;
        return this;
    }
}