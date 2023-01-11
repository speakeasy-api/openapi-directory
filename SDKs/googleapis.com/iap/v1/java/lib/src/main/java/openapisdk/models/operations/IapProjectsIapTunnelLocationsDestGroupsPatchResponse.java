package openapisdk.models.operations;



public class IapProjectsIapTunnelLocationsDestGroupsPatchResponse {
    public String contentType;
    public IapProjectsIapTunnelLocationsDestGroupsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IapProjectsIapTunnelLocationsDestGroupsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TunnelDestGroup tunnelDestGroup;
    public IapProjectsIapTunnelLocationsDestGroupsPatchResponse withTunnelDestGroup(openapisdk.models.shared.TunnelDestGroup tunnelDestGroup) {
        this.tunnelDestGroup = tunnelDestGroup;
        return this;
    }
}