package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsFirewallIngressRulesPatchRequest {
    public AppengineAppsFirewallIngressRulesPatchPathParams pathParams;
    public AppengineAppsFirewallIngressRulesPatchRequest withPathParams(AppengineAppsFirewallIngressRulesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsFirewallIngressRulesPatchQueryParams queryParams;
    public AppengineAppsFirewallIngressRulesPatchRequest withQueryParams(AppengineAppsFirewallIngressRulesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FirewallRule request;
    public AppengineAppsFirewallIngressRulesPatchRequest withRequest(openapisdk.models.shared.FirewallRule request) {
        this.request = request;
        return this;
    }
    public AppengineAppsFirewallIngressRulesPatchSecurity security;
    public AppengineAppsFirewallIngressRulesPatchRequest withSecurity(AppengineAppsFirewallIngressRulesPatchSecurity security) {
        this.security = security;
        return this;
    }
}