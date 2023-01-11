package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateActiveWidgetRequest {
    public CreateActiveWidgetPathParams pathParams;
    public CreateActiveWidgetRequest withPathParams(CreateActiveWidgetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActiveWidget request;
    public CreateActiveWidgetRequest withRequest(openapisdk.models.shared.ActiveWidget request) {
        this.request = request;
        return this;
    }
}