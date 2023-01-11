package openapisdk.models.operations;



public class AppengineAppsFirewallIngressRulesGetResponse {
    public String contentType;
    public AppengineAppsFirewallIngressRulesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirewallRule firewallRule;
    public AppengineAppsFirewallIngressRulesGetResponse withFirewallRule(openapisdk.models.shared.FirewallRule firewallRule) {
        this.firewallRule = firewallRule;
        return this;
    }
    public Long statusCode;
    public AppengineAppsFirewallIngressRulesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}