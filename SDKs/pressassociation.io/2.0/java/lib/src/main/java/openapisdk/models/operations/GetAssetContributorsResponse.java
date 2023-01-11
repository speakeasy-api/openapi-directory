package openapisdk.models.operations;



public class GetAssetContributorsResponse {
    public String contentType;
    public GetAssetContributorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAssetContributorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getAssetContributors200ApplicationJSONObject;
    public GetAssetContributorsResponse withGetAssetContributors200ApplicationJsonObject(java.util.Map<String, Object> getAssetContributors200ApplicationJSONObject) {
        this.getAssetContributors200ApplicationJSONObject = getAssetContributors200ApplicationJSONObject;
        return this;
    }
}