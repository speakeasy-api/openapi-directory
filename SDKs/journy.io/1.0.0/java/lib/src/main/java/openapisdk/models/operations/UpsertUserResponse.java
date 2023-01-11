package openapisdk.models.operations;



public class UpsertUserResponse {
    public String contentType;
    public UpsertUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpsertUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpsertUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpsertUser201ApplicationJson upsertUser201ApplicationJSONObject;
    public UpsertUserResponse withUpsertUser201ApplicationJsonObject(UpsertUser201ApplicationJson upsertUser201ApplicationJSONObject) {
        this.upsertUser201ApplicationJSONObject = upsertUser201ApplicationJSONObject;
        return this;
    }
    public UpsertUser400ApplicationJson upsertUser400ApplicationJSONObject;
    public UpsertUserResponse withUpsertUser400ApplicationJsonObject(UpsertUser400ApplicationJson upsertUser400ApplicationJSONObject) {
        this.upsertUser400ApplicationJSONObject = upsertUser400ApplicationJSONObject;
        return this;
    }
    public UpsertUser401ApplicationJson upsertUser401ApplicationJSONObject;
    public UpsertUserResponse withUpsertUser401ApplicationJsonObject(UpsertUser401ApplicationJson upsertUser401ApplicationJSONObject) {
        this.upsertUser401ApplicationJSONObject = upsertUser401ApplicationJSONObject;
        return this;
    }
    public UpsertUser403ApplicationJson upsertUser403ApplicationJSONObject;
    public UpsertUserResponse withUpsertUser403ApplicationJsonObject(UpsertUser403ApplicationJson upsertUser403ApplicationJSONObject) {
        this.upsertUser403ApplicationJSONObject = upsertUser403ApplicationJSONObject;
        return this;
    }
    public UpsertUser429ApplicationJson upsertUser429ApplicationJSONObject;
    public UpsertUserResponse withUpsertUser429ApplicationJsonObject(UpsertUser429ApplicationJson upsertUser429ApplicationJSONObject) {
        this.upsertUser429ApplicationJSONObject = upsertUser429ApplicationJSONObject;
        return this;
    }
    public UpsertUser500ApplicationJson upsertUser500ApplicationJSONObject;
    public UpsertUserResponse withUpsertUser500ApplicationJsonObject(UpsertUser500ApplicationJson upsertUser500ApplicationJSONObject) {
        this.upsertUser500ApplicationJSONObject = upsertUser500ApplicationJSONObject;
        return this;
    }
}