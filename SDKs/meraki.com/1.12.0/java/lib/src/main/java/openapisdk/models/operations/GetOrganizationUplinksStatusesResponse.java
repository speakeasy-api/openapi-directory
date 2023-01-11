package openapisdk.models.operations;



public class GetOrganizationUplinksStatusesResponse {
    public String contentType;
    public GetOrganizationUplinksStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetOrganizationUplinksStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetOrganizationUplinksStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationUplinksStatuses200ApplicationJSONObject;
    public GetOrganizationUplinksStatusesResponse withGetOrganizationUplinksStatuses200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationUplinksStatuses200ApplicationJSONObject) {
        this.getOrganizationUplinksStatuses200ApplicationJSONObject = getOrganizationUplinksStatuses200ApplicationJSONObject;
        return this;
    }
}