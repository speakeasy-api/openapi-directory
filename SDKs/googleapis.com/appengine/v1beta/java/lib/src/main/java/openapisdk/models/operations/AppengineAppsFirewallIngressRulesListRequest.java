package openapisdk.models.operations;



public class AppengineAppsFirewallIngressRulesListRequest {
    public AppengineAppsFirewallIngressRulesListPathParams pathParams;
    public AppengineAppsFirewallIngressRulesListRequest withPathParams(AppengineAppsFirewallIngressRulesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineAppsFirewallIngressRulesListQueryParams queryParams;
    public AppengineAppsFirewallIngressRulesListRequest withQueryParams(AppengineAppsFirewallIngressRulesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppengineAppsFirewallIngressRulesListSecurity security;
    public AppengineAppsFirewallIngressRulesListRequest withSecurity(AppengineAppsFirewallIngressRulesListSecurity security) {
        this.security = security;
        return this;
    }
}