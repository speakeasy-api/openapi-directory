package openapisdk.models.operations;



public class GetOrganizationsResponse {
    public String contentType;
    public GetOrganizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizations200ApplicationJSONObject;
    public GetOrganizationsResponse withGetOrganizations200ApplicationJsonObject(java.util.Map<String, Object> getOrganizations200ApplicationJSONObject) {
        this.getOrganizations200ApplicationJSONObject = getOrganizations200ApplicationJSONObject;
        return this;
    }
}