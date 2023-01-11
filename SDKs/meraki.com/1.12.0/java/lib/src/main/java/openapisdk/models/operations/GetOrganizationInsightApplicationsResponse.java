package openapisdk.models.operations;



public class GetOrganizationInsightApplicationsResponse {
    public String contentType;
    public GetOrganizationInsightApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationInsightApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationInsightApplications200ApplicationJSONObject;
    public GetOrganizationInsightApplicationsResponse withGetOrganizationInsightApplications200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationInsightApplications200ApplicationJSONObject) {
        this.getOrganizationInsightApplications200ApplicationJSONObject = getOrganizationInsightApplications200ApplicationJSONObject;
        return this;
    }
}