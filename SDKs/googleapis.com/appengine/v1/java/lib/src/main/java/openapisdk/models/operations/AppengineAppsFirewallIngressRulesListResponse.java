package openapisdk.models.operations;



public class AppengineAppsFirewallIngressRulesListResponse {
    public String contentType;
    public AppengineAppsFirewallIngressRulesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListIngressRulesResponse listIngressRulesResponse;
    public AppengineAppsFirewallIngressRulesListResponse withListIngressRulesResponse(openapisdk.models.shared.ListIngressRulesResponse listIngressRulesResponse) {
        this.listIngressRulesResponse = listIngressRulesResponse;
        return this;
    }
    public Long statusCode;
    public AppengineAppsFirewallIngressRulesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}