package openapisdk.models.operations;



public class PostProfileChangePasswordResponse {
    public String contentType;
    public PostProfileChangePasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostProfileChangePasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostProfileChangePassword200ApplicationJson postProfileChangePassword200ApplicationJSONObject;
    public PostProfileChangePasswordResponse withPostProfileChangePassword200ApplicationJsonObject(PostProfileChangePassword200ApplicationJson postProfileChangePassword200ApplicationJSONObject) {
        this.postProfileChangePassword200ApplicationJSONObject = postProfileChangePassword200ApplicationJSONObject;
        return this;
    }
    public PostProfileChangePassword400ApplicationJson postProfileChangePassword400ApplicationJSONObject;
    public PostProfileChangePasswordResponse withPostProfileChangePassword400ApplicationJsonObject(PostProfileChangePassword400ApplicationJson postProfileChangePassword400ApplicationJSONObject) {
        this.postProfileChangePassword400ApplicationJSONObject = postProfileChangePassword400ApplicationJSONObject;
        return this;
    }
    public PostProfileChangePassword401ApplicationJson postProfileChangePassword401ApplicationJSONObject;
    public PostProfileChangePasswordResponse withPostProfileChangePassword401ApplicationJsonObject(PostProfileChangePassword401ApplicationJson postProfileChangePassword401ApplicationJSONObject) {
        this.postProfileChangePassword401ApplicationJSONObject = postProfileChangePassword401ApplicationJSONObject;
        return this;
    }
}