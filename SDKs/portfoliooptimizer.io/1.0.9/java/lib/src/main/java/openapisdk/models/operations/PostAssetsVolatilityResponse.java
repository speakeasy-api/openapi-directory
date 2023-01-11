package openapisdk.models.operations;



public class PostAssetsVolatilityResponse {
    public String contentType;
    public PostAssetsVolatilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssetsVolatilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostAssetsVolatility200ApplicationJson postAssetsVolatility200ApplicationJSONObject;
    public PostAssetsVolatilityResponse withPostAssetsVolatility200ApplicationJsonObject(PostAssetsVolatility200ApplicationJson postAssetsVolatility200ApplicationJSONObject) {
        this.postAssetsVolatility200ApplicationJSONObject = postAssetsVolatility200ApplicationJSONObject;
        return this;
    }
}