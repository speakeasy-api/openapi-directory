package openapisdk.models.operations;



public class GetOrganizationAdminsResponse {
    public String contentType;
    public GetOrganizationAdminsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationAdminsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationAdmins200ApplicationJSONObject;
    public GetOrganizationAdminsResponse withGetOrganizationAdmins200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationAdmins200ApplicationJSONObject) {
        this.getOrganizationAdmins200ApplicationJSONObject = getOrganizationAdmins200ApplicationJSONObject;
        return this;
    }
}