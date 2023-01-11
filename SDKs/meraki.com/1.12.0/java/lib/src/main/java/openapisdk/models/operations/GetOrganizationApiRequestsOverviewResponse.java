package openapisdk.models.operations;



public class GetOrganizationApiRequestsOverviewResponse {
    public String contentType;
    public GetOrganizationApiRequestsOverviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationApiRequestsOverviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationApiRequestsOverview200ApplicationJSONObject;
    public GetOrganizationApiRequestsOverviewResponse withGetOrganizationApiRequestsOverview200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationApiRequestsOverview200ApplicationJSONObject) {
        this.getOrganizationApiRequestsOverview200ApplicationJSONObject = getOrganizationApiRequestsOverview200ApplicationJSONObject;
        return this;
    }
}