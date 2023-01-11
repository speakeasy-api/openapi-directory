package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHlrRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HlRrequest request;
    public GetHlrRequest withRequest(openapisdk.models.shared.HlRrequest request) {
        this.request = request;
        return this;
    }
}