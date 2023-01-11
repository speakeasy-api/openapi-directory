package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UseAsRegularRequest {
    public UseAsRegularPathParams pathParams;
    public UseAsRegularRequest withPathParams(UseAsRegularPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UseAsRegularPayload request;
    public UseAsRegularRequest withRequest(openapisdk.models.shared.UseAsRegularPayload request) {
        this.request = request;
        return this;
    }
}