package openapisdk.models.operations;



public class IapProjectsIapTunnelLocationsDestGroupsGetResponse {
    public String contentType;
    public IapProjectsIapTunnelLocationsDestGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IapProjectsIapTunnelLocationsDestGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TunnelDestGroup tunnelDestGroup;
    public IapProjectsIapTunnelLocationsDestGroupsGetResponse withTunnelDestGroup(openapisdk.models.shared.TunnelDestGroup tunnelDestGroup) {
        this.tunnelDestGroup = tunnelDestGroup;
        return this;
    }
}