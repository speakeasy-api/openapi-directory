package openapisdk.models.operations;



public class GetNodeComplianceRequest {
    public GetNodeCompliancePathParams pathParams;
    public GetNodeComplianceRequest withPathParams(GetNodeCompliancePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetNodeComplianceQueryParams queryParams;
    public GetNodeComplianceRequest withQueryParams(GetNodeComplianceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}