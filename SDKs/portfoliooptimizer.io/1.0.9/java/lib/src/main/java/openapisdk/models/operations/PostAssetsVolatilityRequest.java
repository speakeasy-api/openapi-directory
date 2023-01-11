package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsVolatilityRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostAssetsVolatilityRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}