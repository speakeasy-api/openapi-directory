package openapisdk.models.operations;



public class IapProjectsIapTunnelLocationsDestGroupsListResponse {
    public String contentType;
    public IapProjectsIapTunnelLocationsDestGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTunnelDestGroupsResponse listTunnelDestGroupsResponse;
    public IapProjectsIapTunnelLocationsDestGroupsListResponse withListTunnelDestGroupsResponse(openapisdk.models.shared.ListTunnelDestGroupsResponse listTunnelDestGroupsResponse) {
        this.listTunnelDestGroupsResponse = listTunnelDestGroupsResponse;
        return this;
    }
    public Long statusCode;
    public IapProjectsIapTunnelLocationsDestGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}