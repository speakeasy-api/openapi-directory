package openapisdk.models.operations;



public class RetrieveAPageResponse {
    public String contentType;
    public RetrieveAPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RetrieveAPageResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RetrieveAPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetrieveAPage200ApplicationJson retrieveAPage200ApplicationJSONObject;
    public RetrieveAPageResponse withRetrieveAPage200ApplicationJsonObject(RetrieveAPage200ApplicationJson retrieveAPage200ApplicationJSONObject) {
        this.retrieveAPage200ApplicationJSONObject = retrieveAPage200ApplicationJSONObject;
        return this;
    }
}