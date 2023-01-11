package openapisdk.models.operations;



public class IapProjectsIapTunnelLocationsDestGroupsCreateResponse {
    public String contentType;
    public IapProjectsIapTunnelLocationsDestGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IapProjectsIapTunnelLocationsDestGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TunnelDestGroup tunnelDestGroup;
    public IapProjectsIapTunnelLocationsDestGroupsCreateResponse withTunnelDestGroup(openapisdk.models.shared.TunnelDestGroup tunnelDestGroup) {
        this.tunnelDestGroup = tunnelDestGroup;
        return this;
    }
}