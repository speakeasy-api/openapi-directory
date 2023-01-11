package openapisdk.models.operations;



public class ListAssetsResponse {
    public String contentType;
    public ListAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> listAssets200ApplicationJSONObject;
    public ListAssetsResponse withListAssets200ApplicationJsonObject(java.util.Map<String, Object> listAssets200ApplicationJSONObject) {
        this.listAssets200ApplicationJSONObject = listAssets200ApplicationJSONObject;
        return this;
    }
}