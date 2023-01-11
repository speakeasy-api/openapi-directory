package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectInsurerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectInsurerRequestBody request;
    public ConnectInsurerRequest withRequest(openapisdk.models.shared.ConnectInsurerRequestBody request) {
        this.request = request;
        return this;
    }
}