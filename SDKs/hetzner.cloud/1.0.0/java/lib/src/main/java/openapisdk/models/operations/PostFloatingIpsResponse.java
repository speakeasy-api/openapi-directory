package openapisdk.models.operations;



public class PostFloatingIpsResponse {
    public String contentType;
    public PostFloatingIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostFloatingIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostFloatingIps201ApplicationJson postFloatingIps201ApplicationJSONObject;
    public PostFloatingIpsResponse withPostFloatingIps201ApplicationJsonObject(PostFloatingIps201ApplicationJson postFloatingIps201ApplicationJSONObject) {
        this.postFloatingIps201ApplicationJSONObject = postFloatingIps201ApplicationJSONObject;
        return this;
    }
}