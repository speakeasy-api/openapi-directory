package openapisdk.models.operations;



public class QueryADatabaseResponse {
    public String contentType;
    public QueryADatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public QueryADatabaseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public QueryADatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public QueryADatabase200ApplicationJson queryADatabase200ApplicationJSONObject;
    public QueryADatabaseResponse withQueryADatabase200ApplicationJsonObject(QueryADatabase200ApplicationJson queryADatabase200ApplicationJSONObject) {
        this.queryADatabase200ApplicationJSONObject = queryADatabase200ApplicationJSONObject;
        return this;
    }
}