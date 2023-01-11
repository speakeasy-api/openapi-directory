package openapisdk.models.operations;



public class RetrieveADatabaseResponse {
    public String contentType;
    public RetrieveADatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RetrieveADatabaseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RetrieveADatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrieveADatabase200ApplicationJson retrieveADatabase200ApplicationJSONObject;
    public RetrieveADatabaseResponse withRetrieveADatabase200ApplicationJsonObject(RetrieveADatabase200ApplicationJson retrieveADatabase200ApplicationJSONObject) {
        this.retrieveADatabase200ApplicationJSONObject = retrieveADatabase200ApplicationJSONObject;
        return this;
    }
}