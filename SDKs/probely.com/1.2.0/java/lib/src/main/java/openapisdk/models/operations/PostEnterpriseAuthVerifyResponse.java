package openapisdk.models.operations;



public class PostEnterpriseAuthVerifyResponse {
    public String contentType;
    public PostEnterpriseAuthVerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnterpriseAuthVerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostEnterpriseAuthVerify200ApplicationJson postEnterpriseAuthVerify200ApplicationJSONObject;
    public PostEnterpriseAuthVerifyResponse withPostEnterpriseAuthVerify200ApplicationJsonObject(PostEnterpriseAuthVerify200ApplicationJson postEnterpriseAuthVerify200ApplicationJSONObject) {
        this.postEnterpriseAuthVerify200ApplicationJSONObject = postEnterpriseAuthVerify200ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthVerify400ApplicationJson postEnterpriseAuthVerify400ApplicationJSONObject;
    public PostEnterpriseAuthVerifyResponse withPostEnterpriseAuthVerify400ApplicationJsonObject(PostEnterpriseAuthVerify400ApplicationJson postEnterpriseAuthVerify400ApplicationJSONObject) {
        this.postEnterpriseAuthVerify400ApplicationJSONObject = postEnterpriseAuthVerify400ApplicationJSONObject;
        return this;
    }
    public PostEnterpriseAuthVerify500ApplicationJson postEnterpriseAuthVerify500ApplicationJSONObject;
    public PostEnterpriseAuthVerifyResponse withPostEnterpriseAuthVerify500ApplicationJsonObject(PostEnterpriseAuthVerify500ApplicationJson postEnterpriseAuthVerify500ApplicationJSONObject) {
        this.postEnterpriseAuthVerify500ApplicationJSONObject = postEnterpriseAuthVerify500ApplicationJSONObject;
        return this;
    }
}