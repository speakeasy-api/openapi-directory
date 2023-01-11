package openapisdk.models.operations;



public class GetOrganizationNetworksResponse {
    public String contentType;
    public GetOrganizationNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationNetworksResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationNetworks200ApplicationJSONObject;
    public GetOrganizationNetworksResponse withGetOrganizationNetworks200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationNetworks200ApplicationJSONObject) {
        this.getOrganizationNetworks200ApplicationJSONObject = getOrganizationNetworks200ApplicationJSONObject;
        return this;
    }
}