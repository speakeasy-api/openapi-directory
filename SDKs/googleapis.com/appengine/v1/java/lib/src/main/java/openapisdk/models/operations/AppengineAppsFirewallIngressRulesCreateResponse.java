package openapisdk.models.operations;



public class AppengineAppsFirewallIngressRulesCreateResponse {
    public String contentType;
    public AppengineAppsFirewallIngressRulesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirewallRule firewallRule;
    public AppengineAppsFirewallIngressRulesCreateResponse withFirewallRule(openapisdk.models.shared.FirewallRule firewallRule) {
        this.firewallRule = firewallRule;
        return this;
    }
    public Long statusCode;
    public AppengineAppsFirewallIngressRulesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}