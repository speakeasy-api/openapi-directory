package openapisdk.models.operations;



public class PostFirewallsResponse {
    public String contentType;
    public PostFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PostFirewallsCreateFirewallResponse createFirewallResponse;
    public PostFirewallsResponse withCreateFirewallResponse(PostFirewallsCreateFirewallResponse createFirewallResponse) {
        this.createFirewallResponse = createFirewallResponse;
        return this;
    }
    public Long statusCode;
    public PostFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}