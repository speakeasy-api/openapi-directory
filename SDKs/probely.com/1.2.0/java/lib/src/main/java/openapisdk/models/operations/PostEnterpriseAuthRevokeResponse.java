package openapisdk.models.operations;



public class PostEnterpriseAuthRevokeResponse {
    public String contentType;
    public PostEnterpriseAuthRevokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnterpriseAuthRevokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostEnterpriseAuthRevoke200ApplicationJson postEnterpriseAuthRevoke200ApplicationJSONObject;
    public PostEnterpriseAuthRevokeResponse withPostEnterpriseAuthRevoke200ApplicationJsonObject(PostEnterpriseAuthRevoke200ApplicationJson postEnterpriseAuthRevoke200ApplicationJSONObject) {
        this.postEnterpriseAuthRevoke200ApplicationJSONObject = postEnterpriseAuthRevoke200ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthRevoke400ApplicationJson postEnterpriseAuthRevoke400ApplicationJSONObject;
    public PostEnterpriseAuthRevokeResponse withPostEnterpriseAuthRevoke400ApplicationJsonObject(PostEnterpriseAuthRevoke400ApplicationJson postEnterpriseAuthRevoke400ApplicationJSONObject) {
        this.postEnterpriseAuthRevoke400ApplicationJSONObject = postEnterpriseAuthRevoke400ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthRevoke500ApplicationJson postEnterpriseAuthRevoke500ApplicationJSONObject;
    public PostEnterpriseAuthRevokeResponse withPostEnterpriseAuthRevoke500ApplicationJsonObject(PostEnterpriseAuthRevoke500ApplicationJson postEnterpriseAuthRevoke500ApplicationJSONObject) {
        this.postEnterpriseAuthRevoke500ApplicationJSONObject = postEnterpriseAuthRevoke500ApplicationJSONObject;
        return this;
    }
}