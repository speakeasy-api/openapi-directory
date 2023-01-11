package openapisdk.models.operations;



public class ChangeRequestDetailsResponse {
    public String contentType;
    public ChangeRequestDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChangeRequestDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ChangeRequestDetails200ApplicationJson changeRequestDetails200ApplicationJSONObject;
    public ChangeRequestDetailsResponse withChangeRequestDetails200ApplicationJsonObject(ChangeRequestDetails200ApplicationJson changeRequestDetails200ApplicationJSONObject) {
        this.changeRequestDetails200ApplicationJSONObject = changeRequestDetails200ApplicationJSONObject;
        return this;
    }
}