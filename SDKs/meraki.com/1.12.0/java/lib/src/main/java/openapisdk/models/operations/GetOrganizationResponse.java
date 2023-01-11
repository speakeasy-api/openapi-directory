package openapisdk.models.operations;



public class GetOrganizationResponse {
    public String contentType;
    public GetOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganization200ApplicationJSONObject;
    public GetOrganizationResponse withGetOrganization200ApplicationJsonObject(java.util.Map<String, Object> getOrganization200ApplicationJSONObject) {
        this.getOrganization200ApplicationJSONObject = getOrganization200ApplicationJSONObject;
        return this;
    }
}