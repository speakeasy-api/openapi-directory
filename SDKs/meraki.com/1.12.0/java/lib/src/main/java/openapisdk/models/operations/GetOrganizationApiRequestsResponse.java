package openapisdk.models.operations;



public class GetOrganizationApiRequestsResponse {
    public String contentType;
    public GetOrganizationApiRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationApiRequestsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationApiRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationApiRequests200ApplicationJSONObject;
    public GetOrganizationApiRequestsResponse withGetOrganizationApiRequests200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationApiRequests200ApplicationJSONObject) {
        this.getOrganizationApiRequests200ApplicationJSONObject = getOrganizationApiRequests200ApplicationJSONObject;
        return this;
    }
}