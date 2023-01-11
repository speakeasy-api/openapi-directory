package openapisdk.models.operations;



public class GetOrganizationLicenseResponse {
    public String contentType;
    public GetOrganizationLicenseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationLicenseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationLicense200ApplicationJSONObject;
    public GetOrganizationLicenseResponse withGetOrganizationLicense200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationLicense200ApplicationJSONObject) {
        this.getOrganizationLicense200ApplicationJSONObject = getOrganizationLicense200ApplicationJSONObject;
        return this;
    }
}