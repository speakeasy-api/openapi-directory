package openapisdk.models.operations;



public class PutFirewallsIdResponse {
    public String contentType;
    public PutFirewallsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PutFirewallsIdFirewallResponse firewallResponse;
    public PutFirewallsIdResponse withFirewallResponse(PutFirewallsIdFirewallResponse firewallResponse) {
        this.firewallResponse = firewallResponse;
        return this;
    }
    public Long statusCode;
    public PutFirewallsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}