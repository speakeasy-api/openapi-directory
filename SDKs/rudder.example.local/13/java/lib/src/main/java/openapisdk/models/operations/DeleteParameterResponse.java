package openapisdk.models.operations;



public class DeleteParameterResponse {
    public String contentType;
    public DeleteParameterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteParameterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteParameter200ApplicationJson deleteParameter200ApplicationJSONObject;
    public DeleteParameterResponse withDeleteParameter200ApplicationJsonObject(DeleteParameter200ApplicationJson deleteParameter200ApplicationJSONObject) {
        this.deleteParameter200ApplicationJSONObject = deleteParameter200ApplicationJSONObject;
        return this;
    }
    public DeleteParameter500ApplicationJson deleteParameter500ApplicationJSONObject;
    public DeleteParameterResponse withDeleteParameter500ApplicationJsonObject(DeleteParameter500ApplicationJson deleteParameter500ApplicationJSONObject) {
        this.deleteParameter500ApplicationJSONObject = deleteParameter500ApplicationJSONObject;
        return this;
    }
}