package openapisdk.models.operations;



public class AppengineAppsFirewallIngressRulesPatchResponse {
    public String contentType;
    public AppengineAppsFirewallIngressRulesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirewallRule firewallRule;
    public AppengineAppsFirewallIngressRulesPatchResponse withFirewallRule(openapisdk.models.shared.FirewallRule firewallRule) {
        this.firewallRule = firewallRule;
        return this;
    }
    public Long statusCode;
    public AppengineAppsFirewallIngressRulesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}