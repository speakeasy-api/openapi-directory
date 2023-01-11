package openapisdk.models.operations;



public class UpdateADatabaseResponse {
    public String contentType;
    public UpdateADatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateADatabaseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateADatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateADatabase200ApplicationJson updateADatabase200ApplicationJSONObject;
    public UpdateADatabaseResponse withUpdateADatabase200ApplicationJsonObject(UpdateADatabase200ApplicationJson updateADatabase200ApplicationJSONObject) {
        this.updateADatabase200ApplicationJSONObject = updateADatabase200ApplicationJSONObject;
        return this;
    }
}