package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssetsVolatilitySampleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAssetsVolatilitySampleRequestBody request;
    public PostAssetsVolatilitySampleRequest withRequest(PostAssetsVolatilitySampleRequestBody request) {
        this.request = request;
        return this;
    }
}