package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsFirewallIngressRulesBatchUpdateRequest {
    public AppengineAppsFirewallIngressRulesBatchUpdatePathParams pathParams;
    public AppengineAppsFirewallIngressRulesBatchUpdateRequest withPathParams(AppengineAppsFirewallIngressRulesBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsFirewallIngressRulesBatchUpdateQueryParams queryParams;
    public AppengineAppsFirewallIngressRulesBatchUpdateRequest withQueryParams(AppengineAppsFirewallIngressRulesBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateIngressRulesRequest request;
    public AppengineAppsFirewallIngressRulesBatchUpdateRequest withRequest(openapisdk.models.shared.BatchUpdateIngressRulesRequest request) {
        this.request = request;
        return this;
    }
    public AppengineAppsFirewallIngressRulesBatchUpdateSecurity security;
    public AppengineAppsFirewallIngressRulesBatchUpdateRequest withSecurity(AppengineAppsFirewallIngressRulesBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}