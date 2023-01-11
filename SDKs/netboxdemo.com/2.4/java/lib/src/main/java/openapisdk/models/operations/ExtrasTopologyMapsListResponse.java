package openapisdk.models.operations;



public class ExtrasTopologyMapsListResponse {
    public String contentType;
    public ExtrasTopologyMapsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasTopologyMapsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasTopologyMapsList200ApplicationJson extrasTopologyMapsList200ApplicationJSONObject;
    public ExtrasTopologyMapsListResponse withExtrasTopologyMapsList200ApplicationJsonObject(ExtrasTopologyMapsList200ApplicationJson extrasTopologyMapsList200ApplicationJSONObject) {
        this.extrasTopologyMapsList200ApplicationJSONObject = extrasTopologyMapsList200ApplicationJSONObject;
        return this;
    }
}