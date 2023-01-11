package openapisdk.models.operations;



public class GetRuleComplianceRequest {
    public GetRuleCompliancePathParams pathParams;
    public GetRuleComplianceRequest withPathParams(GetRuleCompliancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRuleComplianceQueryParams queryParams;
    public GetRuleComplianceRequest withQueryParams(GetRuleComplianceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}