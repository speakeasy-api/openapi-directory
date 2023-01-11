package openapisdk.models.operations;



public class PostEnterpriseAuthRefreshResponse {
    public String contentType;
    public PostEnterpriseAuthRefreshResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnterpriseAuthRefreshResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostEnterpriseAuthRefresh200ApplicationJson postEnterpriseAuthRefresh200ApplicationJSONObject;
    public PostEnterpriseAuthRefreshResponse withPostEnterpriseAuthRefresh200ApplicationJsonObject(PostEnterpriseAuthRefresh200ApplicationJson postEnterpriseAuthRefresh200ApplicationJSONObject) {
        this.postEnterpriseAuthRefresh200ApplicationJSONObject = postEnterpriseAuthRefresh200ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthRefresh400ApplicationJson postEnterpriseAuthRefresh400ApplicationJSONObject;
    public PostEnterpriseAuthRefreshResponse withPostEnterpriseAuthRefresh400ApplicationJsonObject(PostEnterpriseAuthRefresh400ApplicationJson postEnterpriseAuthRefresh400ApplicationJSONObject) {
        this.postEnterpriseAuthRefresh400ApplicationJSONObject = postEnterpriseAuthRefresh400ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthRefresh500ApplicationJson postEnterpriseAuthRefresh500ApplicationJSONObject;
    public PostEnterpriseAuthRefreshResponse withPostEnterpriseAuthRefresh500ApplicationJsonObject(PostEnterpriseAuthRefresh500ApplicationJson postEnterpriseAuthRefresh500ApplicationJSONObject) {
        this.postEnterpriseAuthRefresh500ApplicationJSONObject = postEnterpriseAuthRefresh500ApplicationJSONObject;
        return this;
    }
}