package openapisdk.models.operations;



public class GetFirewallsResponse {
    public String contentType;
    public GetFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetFirewallsFirewallsResponse firewallsResponse;
    public GetFirewallsResponse withFirewallsResponse(GetFirewallsFirewallsResponse firewallsResponse) {
        this.firewallsResponse = firewallsResponse;
        return this;
    }
    public Long statusCode;
    public GetFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}