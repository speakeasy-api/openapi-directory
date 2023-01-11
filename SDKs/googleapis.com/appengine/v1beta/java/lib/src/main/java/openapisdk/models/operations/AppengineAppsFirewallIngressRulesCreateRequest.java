package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsFirewallIngressRulesCreateRequest {
    public AppengineAppsFirewallIngressRulesCreatePathParams pathParams;
    public AppengineAppsFirewallIngressRulesCreateRequest withPathParams(AppengineAppsFirewallIngressRulesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsFirewallIngressRulesCreateQueryParams queryParams;
    public AppengineAppsFirewallIngressRulesCreateRequest withQueryParams(AppengineAppsFirewallIngressRulesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FirewallRule request;
    public AppengineAppsFirewallIngressRulesCreateRequest withRequest(openapisdk.models.shared.FirewallRule request) {
        this.request = request;
        return this;
    }
    public AppengineAppsFirewallIngressRulesCreateSecurity security;
    public AppengineAppsFirewallIngressRulesCreateRequest withSecurity(AppengineAppsFirewallIngressRulesCreateSecurity security) {
        this.security = security;
        return this;
    }
}