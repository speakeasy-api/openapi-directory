package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActiveWidgetRequest {
    public UpdateActiveWidgetPathParams pathParams;
    public UpdateActiveWidgetRequest withPathParams(UpdateActiveWidgetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActiveWidget request;
    public UpdateActiveWidgetRequest withRequest(openapisdk.models.shared.ActiveWidget request) {
        this.request = request;
        return this;
    }
}