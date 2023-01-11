package openapisdk.models.operations;



public class AppengineAppsFirewallIngressRulesBatchUpdateResponse {
    public openapisdk.models.shared.BatchUpdateIngressRulesResponse batchUpdateIngressRulesResponse;
    public AppengineAppsFirewallIngressRulesBatchUpdateResponse withBatchUpdateIngressRulesResponse(openapisdk.models.shared.BatchUpdateIngressRulesResponse batchUpdateIngressRulesResponse) {
        this.batchUpdateIngressRulesResponse = batchUpdateIngressRulesResponse;
        return this;
    }
    public String contentType;
    public AppengineAppsFirewallIngressRulesBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppengineAppsFirewallIngressRulesBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}