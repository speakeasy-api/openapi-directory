package openapisdk.models.operations;



public class GetValidityResponse {
    public String contentType;
    public GetValidityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetValidityResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetValidityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetValidity200ApplicationJson getValidity200ApplicationJSONObject;
    public GetValidityResponse withGetValidity200ApplicationJsonObject(GetValidity200ApplicationJson getValidity200ApplicationJSONObject) {
        this.getValidity200ApplicationJSONObject = getValidity200ApplicationJSONObject;
        return this;
    }
    public GetValidity401ApplicationJson getValidity401ApplicationJSONObject;
    public GetValidityResponse withGetValidity401ApplicationJsonObject(GetValidity401ApplicationJson getValidity401ApplicationJSONObject) {
        this.getValidity401ApplicationJSONObject = getValidity401ApplicationJSONObject;
        return this;
    }
    public GetValidity403ApplicationJson getValidity403ApplicationJSONObject;
    public GetValidityResponse withGetValidity403ApplicationJsonObject(GetValidity403ApplicationJson getValidity403ApplicationJSONObject) {
        this.getValidity403ApplicationJSONObject = getValidity403ApplicationJSONObject;
        return this;
    }
    public GetValidity429ApplicationJson getValidity429ApplicationJSONObject;
    public GetValidityResponse withGetValidity429ApplicationJsonObject(GetValidity429ApplicationJson getValidity429ApplicationJSONObject) {
        this.getValidity429ApplicationJSONObject = getValidity429ApplicationJSONObject;
        return this;
    }
    public GetValidity500ApplicationJson getValidity500ApplicationJSONObject;
    public GetValidityResponse withGetValidity500ApplicationJsonObject(GetValidity500ApplicationJson getValidity500ApplicationJSONObject) {
        this.getValidity500ApplicationJSONObject = getValidity500ApplicationJSONObject;
        return this;
    }
}