package openapisdk.models.operations;



public class RetrieveAUserResponse {
    public String contentType;
    public RetrieveAUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RetrieveAUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RetrieveAUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrieveAUser200ApplicationJson retrieveAUser200ApplicationJSONObject;
    public RetrieveAUserResponse withRetrieveAUser200ApplicationJsonObject(RetrieveAUser200ApplicationJson retrieveAUser200ApplicationJSONObject) {
        this.retrieveAUser200ApplicationJSONObject = retrieveAUser200ApplicationJSONObject;
        return this;
    }
}