package openapisdk.models.operations;



public class CheckCveResponse {
    public String contentType;
    public CheckCveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckCveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CheckCve200ApplicationJson checkCVE200ApplicationJSONObject;
    public CheckCveResponse withCheckCve200ApplicationJsonObject(CheckCve200ApplicationJson checkCVE200ApplicationJSONObject) {
        this.checkCVE200ApplicationJSONObject = checkCVE200ApplicationJSONObject;
        return this;
    }
}