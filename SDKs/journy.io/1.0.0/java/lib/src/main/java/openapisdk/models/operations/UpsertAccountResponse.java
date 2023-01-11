package openapisdk.models.operations;



public class UpsertAccountResponse {
    public String contentType;
    public UpsertAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpsertAccountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpsertAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpsertAccount201ApplicationJson upsertAccount201ApplicationJSONObject;
    public UpsertAccountResponse withUpsertAccount201ApplicationJsonObject(UpsertAccount201ApplicationJson upsertAccount201ApplicationJSONObject) {
        this.upsertAccount201ApplicationJSONObject = upsertAccount201ApplicationJSONObject;
        return this;
    }
    public UpsertAccount400ApplicationJson upsertAccount400ApplicationJSONObject;
    public UpsertAccountResponse withUpsertAccount400ApplicationJsonObject(UpsertAccount400ApplicationJson upsertAccount400ApplicationJSONObject) {
        this.upsertAccount400ApplicationJSONObject = upsertAccount400ApplicationJSONObject;
        return this;
    }
    public UpsertAccount401ApplicationJson upsertAccount401ApplicationJSONObject;
    public UpsertAccountResponse withUpsertAccount401ApplicationJsonObject(UpsertAccount401ApplicationJson upsertAccount401ApplicationJSONObject) {
        this.upsertAccount401ApplicationJSONObject = upsertAccount401ApplicationJSONObject;
        return this;
    }
    public UpsertAccount429ApplicationJson upsertAccount429ApplicationJSONObject;
    public UpsertAccountResponse withUpsertAccount429ApplicationJsonObject(UpsertAccount429ApplicationJson upsertAccount429ApplicationJSONObject) {
        this.upsertAccount429ApplicationJSONObject = upsertAccount429ApplicationJSONObject;
        return this;
    }
    public UpsertAccount500ApplicationJson upsertAccount500ApplicationJSONObject;
    public UpsertAccountResponse withUpsertAccount500ApplicationJsonObject(UpsertAccount500ApplicationJson upsertAccount500ApplicationJSONObject) {
        this.upsertAccount500ApplicationJSONObject = upsertAccount500ApplicationJSONObject;
        return this;
    }
}