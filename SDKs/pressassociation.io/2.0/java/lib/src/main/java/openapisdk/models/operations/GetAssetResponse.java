package openapisdk.models.operations;



public class GetAssetResponse {
    public String contentType;
    public GetAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getAsset200ApplicationJSONObject;
    public GetAssetResponse withGetAsset200ApplicationJsonObject(java.util.Map<String, Object> getAsset200ApplicationJSONObject) {
        this.getAsset200ApplicationJSONObject = getAsset200ApplicationJSONObject;
        return this;
    }
}