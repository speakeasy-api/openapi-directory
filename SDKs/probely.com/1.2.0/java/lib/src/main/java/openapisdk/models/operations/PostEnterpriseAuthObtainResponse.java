package openapisdk.models.operations;



public class PostEnterpriseAuthObtainResponse {
    public String contentType;
    public PostEnterpriseAuthObtainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnterpriseAuthObtainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostEnterpriseAuthObtain200ApplicationJson postEnterpriseAuthObtain200ApplicationJSONObject;
    public PostEnterpriseAuthObtainResponse withPostEnterpriseAuthObtain200ApplicationJsonObject(PostEnterpriseAuthObtain200ApplicationJson postEnterpriseAuthObtain200ApplicationJSONObject) {
        this.postEnterpriseAuthObtain200ApplicationJSONObject = postEnterpriseAuthObtain200ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthObtain400ApplicationJson postEnterpriseAuthObtain400ApplicationJSONObject;
    public PostEnterpriseAuthObtainResponse withPostEnterpriseAuthObtain400ApplicationJsonObject(PostEnterpriseAuthObtain400ApplicationJson postEnterpriseAuthObtain400ApplicationJSONObject) {
        this.postEnterpriseAuthObtain400ApplicationJSONObject = postEnterpriseAuthObtain400ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthObtain500ApplicationJson postEnterpriseAuthObtain500ApplicationJSONObject;
    public PostEnterpriseAuthObtainResponse withPostEnterpriseAuthObtain500ApplicationJsonObject(PostEnterpriseAuthObtain500ApplicationJson postEnterpriseAuthObtain500ApplicationJSONObject) {
        this.postEnterpriseAuthObtain500ApplicationJSONObject = postEnterpriseAuthObtain500ApplicationJSONObject;
        return this;
    }
}