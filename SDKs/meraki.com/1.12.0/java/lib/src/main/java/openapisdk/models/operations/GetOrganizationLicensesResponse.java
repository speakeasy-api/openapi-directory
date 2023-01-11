package openapisdk.models.operations;



public class GetOrganizationLicensesResponse {
    public String contentType;
    public GetOrganizationLicensesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationLicensesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationLicensesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationLicenses200ApplicationJSONObject;
    public GetOrganizationLicensesResponse withGetOrganizationLicenses200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationLicenses200ApplicationJSONObject) {
        this.getOrganizationLicenses200ApplicationJSONObject = getOrganizationLicenses200ApplicationJSONObject;
        return this;
    }
}