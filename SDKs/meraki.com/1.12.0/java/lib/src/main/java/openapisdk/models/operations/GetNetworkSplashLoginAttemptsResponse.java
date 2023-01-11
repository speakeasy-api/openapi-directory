package openapisdk.models.operations;



public class GetNetworkSplashLoginAttemptsResponse {
    public String contentType;
    public GetNetworkSplashLoginAttemptsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworkSplashLoginAttemptsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getNetworkSplashLoginAttempts200ApplicationJSONObject;
    public GetNetworkSplashLoginAttemptsResponse withGetNetworkSplashLoginAttempts200ApplicationJsonObject(java.util.Map<String, Object> getNetworkSplashLoginAttempts200ApplicationJSONObject) {
        this.getNetworkSplashLoginAttempts200ApplicationJSONObject = getNetworkSplashLoginAttempts200ApplicationJSONObject;
        return this;
    }
}