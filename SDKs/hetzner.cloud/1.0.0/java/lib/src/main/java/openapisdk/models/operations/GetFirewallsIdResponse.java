package openapisdk.models.operations;



public class GetFirewallsIdResponse {
    public String contentType;
    public GetFirewallsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetFirewallsIdFirewallResponse firewallResponse;
    public GetFirewallsIdResponse withFirewallResponse(GetFirewallsIdFirewallResponse firewallResponse) {
        this.firewallResponse = firewallResponse;
        return this;
    }
    public Long statusCode;
    public GetFirewallsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}